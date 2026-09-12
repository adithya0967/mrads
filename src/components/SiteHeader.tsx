'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { phoneText, phoneTel, contactEmail, contactMailto, navLinks } from '@/data/siteNavigation';

export { phoneText, phoneTel, contactEmail, contactMailto, navLinks };

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'bg-[#080808]/80 backdrop-blur-md border-b border-white/[0.05]'
      }`}
    >
      <div
        className={`w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-[62px]' : 'h-[72px]'
        }`}
      >
        {/* Left: Minimal & Premium Mr Ads Logo / Wordmark */}
        <Link href="/" className="flex items-center gap-3.5 group" aria-label="Mr Ads Home">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-white/[0.04] border border-white/10 group-hover:border-[#D81F42]/50 transition-colors">
            <span className="font-serif text-[18px] font-bold text-[#F4F1EC] leading-none">M</span>
            <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#D81F42] shadow-[0_0_8px_#D81F42]"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-extrabold text-[17px] tracking-[0.06em] text-[#F4F1EC] uppercase leading-tight group-hover:text-white transition-colors">
              MR. ADS
            </span>
            <span className="text-[9px] font-semibold tracking-[0.22em] text-[#929292] uppercase leading-none mt-0.5">
              Hyperlocal Advertising
            </span>
          </div>
        </Link>

        {/* Center: Understated Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((item) => {
            const isActive = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`relative py-1 text-[13.5px] font-medium tracking-[0.03em] transition-colors duration-200 ${
                  isActive ? 'text-[#F4F1EC]' : 'text-[#929292] hover:text-[#F4F1EC]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D81F42] shadow-[0_0_8px_rgba(216,31,66,0.6)] rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Phone + Prominent "Get a Media Plan →" CTA */}
        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href={phoneTel}
            className="hidden xl:flex items-center gap-2 text-[13px] font-medium text-[#929292] hover:text-[#F4F1EC] transition-colors"
            aria-label={`Call Mr Ads at ${phoneText}`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#D81F42]"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{phoneText}</span>
          </a>

          <Link
            href="/contact"
            className="group hidden sm:inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-lg bg-[#D81F42] hover:bg-[#ED3153] text-[#F4F1EC] text-[13px] font-semibold tracking-wide shadow-[0_0_20px_rgba(216,31,66,0.25)] hover:shadow-[0_0_25px_rgba(237,49,83,0.45)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Get a Media Plan</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transform group-hover:translate-x-1 transition-transform duration-200"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile Media Plan compact button */}
          <Link
            href="/contact"
            className="sm:hidden inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-[#D81F42] text-[#F4F1EC] text-[12px] font-semibold"
          >
            Media Plan
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] text-[#F4F1EC] hover:bg-white/[0.08] transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-white/[0.08] bg-[#080808]/98 backdrop-blur-2xl">
          <nav className="px-6 py-6 flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((item) => {
              const isActive = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  className={`flex items-center justify-between py-3 text-[16px] border-b border-white/[0.05] ${
                    isActive ? 'text-[#F4F1EC] font-semibold' : 'text-[#929292]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D81F42]"></span>}
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={phoneTel}
                className="flex items-center gap-2.5 py-2 text-[14px] text-[#929292] hover:text-[#F4F1EC]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[#D81F42]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{phoneText}</span>
              </a>
              <Link
                href="/contact"
                className="w-full py-3 rounded-lg bg-[#D81F42] text-center text-[#F4F1EC] font-semibold text-[14px]"
              >
                Get a Media Plan →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
