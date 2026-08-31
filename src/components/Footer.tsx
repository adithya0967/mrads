import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const quickLinks = [
<<<<<<< Updated upstream
  { label: 'Home', href: '#' },
  { label: 'Locations', href: '#locations' },
  { label: 'Pricing', href: '#pricing' },
=======
  { label: 'Display Advertising', href: '#display-advertising' },
  { label: 'On the Move', href: '#on-the-move' },
  { label: 'Offline & Creative', href: '#offline-creative' },
  { label: 'Website & AI', href: '#website-ai' },
  { label: 'Why Mr. Ads', href: '#why-mr-ads' },
>>>>>>> Stashed changes
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        {/* Arc Split Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left: Logo + Tagline */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2">
              <AppLogo size={32} iconName="TvIcon" />
              <span className="font-extrabold text-lg tracking-tight text-foreground">
                Mr.<span className="text-accent">Ads</span>
              </span>
<<<<<<< Updated upstream
            </div>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">
              India's Emerging Hyperlocal Advertising Network
=======
              <span className="font-extrabold text-xl tracking-tight text-[#F5F5F5]">
                Mr.<span className="text-[#B4233C]">Ads</span>
              </span>
            </a>
            <p className="text-sm text-[#9A9CA5] font-normal leading-relaxed max-w-sm">
              Connecting brands with the right audience through innovative hyperlocal advertising
              solutions — where people live, work, dine, and travel.
>>>>>>> Stashed changes
            </p>
            <a
              href="tel:+919686544644"
              className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors mt-1"
            >
              <Icon name="PhoneIcon" size={15} className="text-accent" />
              +91 96865 44644
            </a>
            <a
              href="mailto:Knowus@mr-ads.in"
              className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors mt-1"
            >
              <Icon name="EnvelopeIcon" size={15} className="text-accent" />
              Knowus@mr-ads.in
            </a>
          </div>

          {/* Right: Quick Links + Social */}
          <div className="flex flex-col items-start md:items-end gap-5">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {quickLinks?.map((link) => (
                <a
                  key={link?.href}
                  href={link?.href}
                  className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link?.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/919686544644?text=Hi%2C%20I%27m%20interested%20in%20advertising%20with%20Mr.%20Ads.%20Please%20share%20available%20locations%2C%20pricing%2C%20and%20current%20slot%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all text-muted-foreground"
                aria-label="WhatsApp"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} />
              </a>
              <a
                href="mailto:Knowus@mr-ads.in"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all text-muted-foreground"
                aria-label="Email us"
              >
                <Icon name="EnvelopeIcon" size={16} />
              </a>
              <a
                href="tel:+919686544644"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all text-muted-foreground"
                aria-label="Call us"
              >
                <Icon name="PhoneIcon" size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs font-medium text-muted-foreground">
            © 2026 Mr. Ads. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-semibold text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}