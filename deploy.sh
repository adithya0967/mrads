#!/usr/bin/env bash
# deploy.sh — Deploy mrads Next.js app to root@187.127.138.111
# Usage:
#   ./deploy.sh             # first-time full setup + deploy
#   ./deploy.sh --update    # pull latest, rebuild, restart
#   ./deploy.sh --restart   # restart PM2 process only (no pull/build)
#
# Requires: GITHUB_TOKEN env var (personal access token with repo scope)
#   export GITHUB_TOKEN=ghp_xxxxxxxxxxxx
#   ./deploy.sh

set -euo pipefail

# ─── Config ───────────────────────────────────────────────────────────────────
REMOTE_HOST="root@187.127.138.111"
APP_DIR="/var/www/mrads"
GITHUB_REPO="recnos-in/mrads"
APP_NAME="mrads"
APP_PORT=3000
DOMAIN="mr-ads.in"
# ──────────────────────────────────────────────────────────────────────────────

# Require GitHub token for clone/pull authentication
if [ -z "${GITHUB_TOKEN:-}" ]; then
  echo "ERROR: GITHUB_TOKEN is not set."
  echo "  Create a token at https://github.com/settings/tokens (repo scope)"
  echo "  Then: export GITHUB_TOKEN=ghp_xxx && ./deploy.sh"
  exit 1
fi

# Embed token into HTTPS URL so git can auth non-interactively
REPO_URL="https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git"

MODE="setup"  # default

for arg in "$@"; do
  case "$arg" in
    --update)  MODE="update"  ;;
    --restart) MODE="restart" ;;
    --setup)   MODE="setup"   ;;
    *)
      echo "Unknown flag: $arg"
      echo "Usage: $0 [--setup|--update|--restart]"
      exit 1
      ;;
  esac
done

echo "==> Mode: $MODE | Target: $REMOTE_HOST"

# ─── Helpers ──────────────────────────────────────────────────────────────────

remote() {
  ssh -o StrictHostKeyChecking=accept-new "$REMOTE_HOST" "$@"
}

# ─── RESTART (no code change) ─────────────────────────────────────────────────

if [ "$MODE" = "restart" ]; then
  echo "==> Restarting $APP_NAME via PM2..."
  remote "pm2 restart $APP_NAME && pm2 save"
  echo "==> Done. App restarted."
  exit 0
fi

# ─── UPDATE (pull + rebuild + restart) ───────────────────────────────────────

if [ "$MODE" = "update" ]; then
  echo "==> Pulling latest code and rebuilding..."
  remote bash -s "$REPO_URL" <<'ENDSSH'
set -euo pipefail
REPO_URL="$1"
APP_DIR="/var/www/mrads"
APP_NAME="mrads"

cd "$APP_DIR"
echo "--- git pull"
# Update the remote URL with the current token, then pull
git remote set-url origin "$REPO_URL"
git pull origin main

echo "--- npm install"
npm ci --prefer-offline

echo "--- npm run build"
npm run build

echo "--- pm2 restart"
pm2 restart "$APP_NAME" && pm2 save
echo "--- done"
ENDSSH
  echo "==> Update complete."
  exit 0
fi

# ─── SETUP (full first-time provisioning) ─────────────────────────────────────

echo "==> Running full server setup..."

remote bash -s -- "$APP_DIR" "$REPO_URL" "$APP_NAME" "$APP_PORT" "$DOMAIN" <<'ENDSSH'
set -euo pipefail
APP_DIR="$1"
REPO_URL="$2"
APP_NAME="$3"
APP_PORT="$4"
DOMAIN="$5"
WWW_DOMAIN="www.$DOMAIN"

# ── 1. System packages ────────────────────────────────────────────────────────
echo "==> Installing system packages..."
apt-get update -qq
apt-get install -y -qq curl git nginx certbot python3-certbot-nginx ufw

# ── 2. Node.js 20 LTS ─────────────────────────────────────────────────────────
if ! command -v node &>/dev/null; then
  echo "==> Installing Node.js 20..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y -qq nodejs
fi
echo "Node $(node -v) | npm $(npm -v)"

# ── 3. PM2 ────────────────────────────────────────────────────────────────────
if ! command -v pm2 &>/dev/null; then
  echo "==> Installing PM2..."
  npm install -g pm2
fi
# Extract and run the actual 'sudo env PATH=...' command from pm2 startup output
PM2_STARTUP_CMD=$(pm2 startup systemd -u root --hp /root 2>&1 | grep -oE 'sudo env PATH=\S+ \S+ startup \S+( --\S+)*' || true)
if [ -n "$PM2_STARTUP_CMD" ]; then
  eval "$PM2_STARTUP_CMD"
else
  # Service file was likely already created; just enable it
  systemctl enable pm2-root.service 2>/dev/null || true
fi

# ── 4. Clone / update repo ────────────────────────────────────────────────────
if [ -d "$APP_DIR/.git" ]; then
  echo "==> Repo exists — pulling latest..."
  cd "$APP_DIR"
  git pull origin main
else
  echo "==> Cloning repo..."
  mkdir -p "$(dirname "$APP_DIR")"
  git clone "$REPO_URL" "$APP_DIR"
  cd "$APP_DIR"
fi

# ── 5. Install deps & build ───────────────────────────────────────────────────
echo "==> npm install..."
npm ci

echo "==> npm run build..."
npm run build

# ── 6. PM2 app ────────────────────────────────────────────────────────────────
echo "==> Configuring PM2 process..."
pm2 delete "$APP_NAME" 2>/dev/null || true
pm2 start npm --name "$APP_NAME" -- run serve
pm2 save
echo "==> PM2 status:"
pm2 list

# ── 7. Nginx ──────────────────────────────────────────────────────────────────
echo "==> Configuring nginx for $DOMAIN and $WWW_DOMAIN..."
NGINX_CONF="/etc/nginx/sites-available/$APP_NAME"

cat > "$NGINX_CONF" <<NGINX
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN $WWW_DOMAIN;

    # Redirect www → non-www (or flip if preferred)
    if (\$host = $WWW_DOMAIN) {
        return 301 https://$DOMAIN\$request_uri;
    }

    location / {
        proxy_pass         http://127.0.0.1:$APP_PORT;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade           \$http_upgrade;
        proxy_set_header   Connection        'upgrade';
        proxy_set_header   Host              \$host;
        proxy_set_header   X-Real-IP         \$remote_addr;
        proxy_set_header   X-Forwarded-For   \$proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    # Next.js static assets — long cache
    location /_next/static/ {
        proxy_pass         http://127.0.0.1:$APP_PORT;
        proxy_set_header   Host \$host;
        add_header         Cache-Control "public, max-age=31536000, immutable";
    }
}
NGINX

ln -sf "$NGINX_CONF" /etc/nginx/sites-enabled/"$APP_NAME"
rm -f /etc/nginx/sites-enabled/default

nginx -t
systemctl reload nginx

# ── 8. Firewall ───────────────────────────────────────────────────────────────
echo "==> Configuring UFW firewall..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

# ── 9. SSL via Let's Encrypt ──────────────────────────────────────────────────
echo "==> Attempting SSL certificate (requires DNS pointing to this server)..."
certbot --nginx \
  -d "$DOMAIN" -d "$WWW_DOMAIN" \
  --non-interactive --agree-tos \
  --email admin@mr-ads.in \
  --redirect || {
  echo "!!! certbot failed — DNS may not be pointing here yet."
  echo "!!! Run manually later: certbot --nginx -d $DOMAIN -d $WWW_DOMAIN"
}

echo ""
echo "==========================================================  "
echo " Setup complete!"
echo " App running via PM2 on port $APP_PORT"
echo " Nginx proxying https://$DOMAIN → localhost:$APP_PORT"
echo " Manage: ssh $REMOTE_HOST"
echo "   pm2 status     — process status"
echo "   pm2 logs $APP_NAME  — live logs"
echo "==========================================================="
ENDSSH

echo "==> Full setup complete. Visit https://mr-ads.in"
