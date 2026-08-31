'use client';

import React, { useEffect, useState } from 'react';
import { TOTAL_JOURNEY_VH, TOTAL_JOURNEY_VH_MOBILE } from '@/components/cinematic/data/phases.data';
import { useViewportProfile } from '@/hooks/useViewportProfile';

const navLinks = [
  { label: 'Markets', href: '#display-advertising' },
  { label: 'Media', href: '#on-the-move' },
  { label: 'Resources', href: '#quick-commerce' },
  { label: 'AI Tech', href: '#website-ai' },
  { label: 'Creative', href: '#offline-creative' },
  { label: 'About', href: '#why-mr-ads' },
  { label: 'Careers', href: 'mailto:knowus@mr-ads.in?subject=Careers%20at%20Mr.%20Ads' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [recede, setRecede] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const viewport = useViewportProfile();

  useEffect(() => {
    const totalVh = viewport === 'mobile' ? TOTAL_JOURNEY_VH_MOBILE : TOTAL_JOURNEY_VH;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const journeyPx = (totalVh / 100) * window.innerHeight;
      const ratio = Math.min(1, y / journeyPx);
      // recede to ~15% opacity through most of the journey, snap back near its end
      setRecede(ratio < 0.92 ? 1 - ratio * 0.85 : 1);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [viewport]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] w-full transition-opacity duration-500"
        style={{ opacity: recede }}
      >
        <div
          className={`w-full transition-all duration-500 ${
            scrolled ? 'bg-[#090A0C]/85 backdrop-blur-xl border-b border-[#252830] py-4' : 'py-6'
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2.5 group" aria-label="Mr. Ads Home">
              <span className="w-9 h-9 rounded-xl bg-[#B4233C] text-white flex items-center justify-center font-black text-sm tracking-tighter shadow-lg group-hover:scale-105 transition-transform duration-300">
                MA
              </span>
              <span className="font-black text-xl tracking-tighter text-[#F5F5F5]">
                MR. <span className="text-[#B4233C]">ADS</span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-bold">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#9A9CA5] hover:text-[#F5F5F5] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-[#B4233C] hover:bg-[#D13B55] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-5 h-0.5 rounded-full bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 rounded-full bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 rounded-full bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[90] bg-[#090A0C]/97 backdrop-blur-2xl px-8 py-24 flex flex-col justify-between">
          <div className="flex flex-col gap-6 text-2xl font-black uppercase tracking-tight text-white">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="py-3 border-b border-white/10 hover:text-[#B4233C] transition-colors"
              >
                {link?.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={handleNavClick}
            className="w-full text-center py-4 bg-[#B4233C] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#D13B55] transition-all"
          >
            Contact Us
          </a>
        </div>
      )}
    </>
  );
}