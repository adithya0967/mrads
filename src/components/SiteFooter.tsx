'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { phoneText, phoneTel, contactEmail, contactMailto, navLinks, servicesLinks } from '@/data/siteNavigation';
import Reveal from '@/components/ui/Reveal';

export default function SiteFooter() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-line bg-graphite relative overflow-hidden">
      <div className="container-site py-16 md:py-20">
        <Reveal variant="fade-up">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Brand Info */}
            <div className="md:col-span-5">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-slate group-hover:border-[#D81F42]/60 group-hover:bg-[#D81F42]/10 transition-all duration-200">
                  <span className="font-serif text-[17px] leading-none text-paper">M</span>
                  <span className="mb-2 ml-px h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_6px_#D81F42]"></span>
                </span>
                <span className="font-serif text-[20px] text-paper group-hover:text-white transition-colors">Mr. Ads</span>
              </Link>

              <p className="mt-4 text-[13px] tracking-[0.16em] text-mute uppercase">
                Your Hyperlocal Partner
              </p>
              <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-mute">
                Mr. Ads helps brands reach people where they live, work, travel, shop, exercise and spend time — through screens, streets, print and digital.
              </p>

              <Link
                href="/contact"
                className="btn-arrow mt-7 inline-flex items-center gap-2 text-[13px] text-paper transition-colors duration-200 hover:text-brand"
              >
                Get a Media Plan
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
              {/* Navigate */}
              <div>
                <p className="eyebrow">Navigate</p>
                <ul className="mt-4 space-y-2.5">
                  {navLinks.map((item) => (
                    <li key={item.to}>
                      <Link
                        href={item.to}
                        className="text-[14px] text-mute hover:text-paper hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <p className="eyebrow">Services</p>
                <ul className="mt-4 space-y-2.5">
                  {servicesLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.to}
                        className="text-[14px] text-mute hover:text-paper hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="col-span-2 sm:col-span-1">
                <p className="eyebrow">Contact</p>
                <ul className="mt-4 space-y-2.5 text-[14px] text-mute">
                  <li>
                    <a
                      href={phoneTel}
                      className="hover:text-paper hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {phoneText}
                    </a>
                  </li>
                  <li>
                    <a
                      href={contactMailto}
                      className="hover:text-paper hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {contactEmail}
                    </a>
                  </li>
                  <li className="pt-2">
                    <Link
                      href="/advertising-on-the-move"
                      className="hover:text-paper hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      On the Move
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/digital"
                      className="hover:text-paper hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      Digital Solutions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom with Smooth Scroll to Top */}
          <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-[12px] leading-relaxed text-mute-2 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Mr. Ads. All rights reserved.</p>
            <p className="max-w-xl md:text-center">
              Reach figures denote network opportunity to reach, not guaranteed impressions.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-mute hover:text-paper transition-colors group cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={13} className="transform group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
