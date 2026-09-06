import React from 'react';
import type { AdCampaign } from '../../data/adCampaigns.data';

// Abstract, category-appropriate creative standing in for real ad photography
// on every screen surface (main billboard + passing highway surfaces). Each
// campaign gets one hand-drawn SVG mark so every surface reads as a designed
// ad rather than an empty placeholder, without pretending to be a real photo.

function Glow({ color }: { color: string }) {
  return (
    <div
      className="absolute inset-0"
      style={{ background: `radial-gradient(60% 55% at 50% 40%, ${color}33 0%, transparent 70%)` }}
    />
  );
}

type ArtFn = (accent: string) => React.ReactNode;

const ART: Record<string, ArtFn> = {
  // Automotive — motion-streak silhouette with a single taillight glow
  'velaris-gt': (accent) => (
    <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="v-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={accent} stopOpacity="0" />
          <stop offset="55%" stopColor={accent} stopOpacity="0.55" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 80 Q45 52 90 51 Q125 50 155 58 Q180 64 200 68 L200 84 L0 84 Z" fill="url(#v-body)" />
      <ellipse cx="158" cy="76" rx="9" ry="3" fill="#ef4444" opacity="0.75" />
      <line x1="0" y1="94" x2="200" y2="94" stroke={accent} strokeOpacity="0.18" strokeWidth="1" />
      <line x1="0" y1="104" x2="200" y2="104" stroke={accent} strokeOpacity="0.1" strokeWidth="1" />
    </svg>
  ),

  // Luxury watch — concentric dial with tick marks and two hands
  'chrono-luxe': (accent) => (
    <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 w-full h-full">
      <circle cx="100" cy="60" r="40" fill="none" stroke={accent} strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="100" cy="60" r="33" fill="none" stroke={accent} strokeOpacity="0.3" strokeWidth="1" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const x1 = 100 + Math.sin(a) * 37,
          y1 = 60 - Math.cos(a) * 37;
        const x2 = 100 + Math.sin(a) * 32,
          y2 = 60 - Math.cos(a) * 32;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={accent} strokeOpacity="0.55" strokeWidth="1.4" />;
      })}
      <line x1="100" y1="60" x2="100" y2="34" stroke={accent} strokeWidth="2" />
      <line x1="100" y1="60" x2="120" y2="66" stroke={accent} strokeWidth="2" />
      <circle cx="100" cy="60" r="2.5" fill={accent} />
    </svg>
  ),

  // Tech / audio — pulse rings with a rounded earbud capsule
  'pulse-audio': (accent) => (
    <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
      {[14, 26, 38].map((r, i) => (
        <circle key={r} cx="100" cy="60" r={r} fill="none" stroke={accent} strokeOpacity={0.45 - i * 0.12} strokeWidth="1.4" />
      ))}
      <rect x="90" y="46" width="20" height="30" rx="10" fill={accent} opacity="0.7" />
      <rect x="93" y="40" width="14" height="10" rx="5" fill={accent} opacity="0.4" />
    </svg>
  ),

  // Fashion — editorial frame with a soft figure gradient, corner brackets
  'maison-eight': (accent) => (
    <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="m8-fig" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="70" y="14" width="46" height="92" fill="url(#m8-fig)" />
      <path d="M62 10 L62 22 M62 10 L74 10" stroke={accent} strokeOpacity="0.6" strokeWidth="1.4" fill="none" />
      <path d="M138 110 L138 98 M138 110 L126 110" stroke={accent} strokeOpacity="0.6" strokeWidth="1.4" fill="none" />
    </svg>
  ),

  // Food & beverage — plate rim with steam wisps and thin cutlery lines
  'artisan-table': (accent) => (
    <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
      <circle cx="100" cy="66" r="30" fill="none" stroke={accent} strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="100" cy="66" r="18" fill={accent} opacity="0.12" />
      <path d="M92 40 Q88 30 93 22" stroke={accent} strokeOpacity="0.4" strokeWidth="1.2" fill="none" />
      <path d="M104 40 Q100 28 106 20" stroke={accent} strokeOpacity="0.4" strokeWidth="1.2" fill="none" />
      <line x1="48" y1="40" x2="48" y2="92" stroke={accent} strokeOpacity="0.35" strokeWidth="1.2" />
      <line x1="44" y1="40" x2="44" y2="60" stroke={accent} strokeOpacity="0.35" strokeWidth="1" />
      <line x1="52" y1="40" x2="52" y2="60" stroke={accent} strokeOpacity="0.35" strokeWidth="1" />
      <line x1="152" y1="40" x2="152" y2="92" stroke={accent} strokeOpacity="0.35" strokeWidth="1.4" />
    </svg>
  ),

  // Real estate — glass tower silhouette, lit windows, reflection line
  'skyline-residences': (accent) => (
    <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
      <rect x="82" y="18" width="36" height="80" fill={accent} opacity="0.14" stroke={accent} strokeOpacity="0.4" strokeWidth="1" />
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 3 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={88 + col * 10}
            y={24 + row * 14}
            width="6"
            height="8"
            fill={accent}
            opacity={(row + col) % 3 === 0 ? 0.7 : 0.15}
          />
        ))
      )}
      <line x1="60" y1="102" x2="140" y2="102" stroke={accent} strokeOpacity="0.3" strokeWidth="1" />
      <line x1="40" y1="110" x2="160" y2="110" stroke={accent} strokeOpacity="0.18" strokeWidth="1" />
    </svg>
  ),

  // Entertainment / festival — crossing spotlight beams, neon glow
  nightframe: (accent) => (
    <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="nf-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M20 0 L100 90 L60 90 Z" fill="url(#nf-beam)" />
      <path d="M180 0 L100 90 L140 90 Z" fill="url(#nf-beam)" />
      <circle cx="100" cy="88" r="3" fill={accent} opacity="0.8" />
    </svg>
  ),

  // Mr. Ads house ad — typographic only, no figurative art: brand bloom + accent lines
  'mrads-house': (accent) => (
    <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
      <line x1="0" y1="20" x2="200" y2="20" stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
      <line x1="0" y1="100" x2="200" y2="100" stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
      <circle cx="160" cy="30" r="1.6" fill={accent} opacity="0.8" />
      <circle cx="40" cy="94" r="1.6" fill={accent} opacity="0.6" />
    </svg>
  ),
};

export default function AdArt({ campaign, className = '' }: { campaign?: AdCampaign; className?: string }) {
  if (!campaign) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br from-[#1a1c22] via-[#101216] to-[#0a0b0d] ${className}`} />
    );
  }
  const { base, accent } = campaign.palette;
  const art = ART[campaign.id];
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ backgroundColor: base }}>
      <Glow color={accent} />
      {art?.(accent)}
    </div>
  );
}
