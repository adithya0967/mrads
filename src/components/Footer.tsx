'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Locations', href: '#locations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#090A0C] border-t border-[#252830] py-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#252830]">
          {/* Logo & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-2" aria-label="Mr. Ads Home">
              <span className="w-8 h-8 rounded-lg bg-[#B4233C] text-white flex items-center justify-center font-extrabold text-sm tracking-tight shadow-sm">
                MA
              </span>
              <span className="font-extrabold text-xl tracking-tight text-[#F5F5F5]">
                Mr.<span className="text-[#B4233C]">Ads</span>
              </span>
            </a>
            <p className="text-sm text-[#9A9CA5] font-normal leading-relaxed max-w-sm">
              Hyperlocal Advertising & Digital Solutions network across Bengaluru. Connecting brands with high-intent audiences where they live, work, dine, and travel.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 flex flex-col items-start gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]">
              Navigation
            </span>
            <div className="flex flex-col gap-2.5 text-sm font-semibold text-[#9A9CA5]">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-[#B4233C] transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact Info */}
          <div className="md:col-span-4 flex flex-col items-start gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]">
              Contact Us
            </span>
            <div className="flex flex-col gap-2.5 text-sm font-medium text-[#9A9CA5]">
              <a href="tel:+919686544644" className="hover:text-[#B4233C] transition-colors flex items-center gap-2">
                <Icon name="PhoneIcon" size={15} className="text-[#B4233C]" />
                +91 96865 44644
              </a>
              <a href="mailto:Knowus@mr-ads.in" className="hover:text-[#B4233C] transition-colors flex items-center gap-2">
                <Icon name="EnvelopeIcon" size={15} className="text-[#B4233C]" />
                Knowus@mr-ads.in
              </a>
              <div className="flex items-center gap-2">
                <Icon name="MapPinIcon" size={15} className="text-[#B4233C]" />
                Bengaluru, Karnataka, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#9A9CA5]">
          <p>© 2026 Mr. Ads. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#F5F5F5] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F5F5F5] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
