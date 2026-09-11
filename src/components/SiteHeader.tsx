'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { phoneText, phoneTel, contactEmail, contactMailto, navLinks } from '@/data/siteNavigation';
export { phoneText, phoneTel, contactEmail, contactMailto, navLinks };

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-ink/92 backdrop-blur-md">
      <div className="container-site flex h-[68px] items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Mr. Ads home">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-line bg-graphite">
            <span className="font-serif text-[17px] leading-none text-paper">M</span>
            <span className="mb-2 ml-px h-1.5 w-1.5 rounded-[1px] bg-brand"></span>
          </span>
          <span className="min-w-0">
            <span className="block font-serif text-[19px] leading-none tracking-tight text-paper">Mr. Ads</span>
            <span className="mt-1 hidden text-[9px] font-medium tracking-[0.18em] text-mute uppercase sm:block">
              Hyperlocal Advertising
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((item) => {
            const isActive = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`nav-link text-[13px] ${isActive ? 'is-active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={phoneTel}
            className="hidden items-center gap-2 text-[13px] text-mute transition-colors duration-200 hover:text-paper lg:flex"
            aria-label={`Call ${phoneText}`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="hidden xl:inline">{phoneText}</span>
          </a>

          <Link
            href="/contact"
            className="btn-arrow hidden items-center justify-center gap-2 rounded-sm bg-brand px-5 py-2.5 text-[13px] font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-brand-hover sm:inline-flex"
          >
            Get a Media Plan
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-brand px-3 py-2 text-[12px] font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-brand-hover sm:hidden"
          >
            Media Plan
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-paper lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-line bg-ink lg:hidden">
          <nav className="container-site flex flex-col py-4" aria-label="Mobile">
            {navLinks.map((item) => {
              const isActive = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  className={`border-b border-line-soft py-3.5 text-[15px] ${
                    isActive ? 'text-paper' : 'text-mute'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a href={phoneTel} className="flex items-center gap-2 py-4 text-[14px] text-mute">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {phoneText}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
