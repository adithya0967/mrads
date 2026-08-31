'use client';

<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Locations', href: '#locations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
=======
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
>>>>>>> Stashed changes
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [recede, setRecede] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const viewport = useViewportProfile();

  useEffect(() => {
<<<<<<< Updated upstream
    const onScroll = () => setScrolled(window.scrollY > 40);
=======
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
>>>>>>> Stashed changes
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [viewport]);

  useEffect(() => {
<<<<<<< Updated upstream
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
=======
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
>>>>>>> Stashed changes
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
<<<<<<< Updated upstream
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled ? 'py-3 px-4 md:px-6' : 'py-5 px-4 md:px-6'
        }`}
      >
        <div
          className={`max-w-6xl mx-auto glass-nav rounded-2xl px-5 md:px-8 py-3 flex justify-between items-center transition-all duration-500 ${
            scrolled ? 'shadow-lg shadow-slate-900/8' : ''
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" aria-label="Mr. Ads Home">
            <AppLogo
              size={36}
              iconName="TvIcon"
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-extrabold text-lg tracking-tight text-foreground">
              Mr.<span className="text-accent">Ads</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-foreground/60">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                className="hover:text-foreground transition-colors duration-200"
=======
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
>>>>>>> Stashed changes
              >
                {link?.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-full font-bold text-sm hover:bg-red-700 transition-all duration-300 amber-glow"
          >
            Block Your Ad Slot
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-muted transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[90] bg-background/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          onClick={handleNavClick}
        >
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              onClick={handleNavClick}
              className="text-3xl font-bold text-foreground hover:text-accent transition-colors"
            >
              {link?.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
<<<<<<< Updated upstream
            className="mt-4 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:bg-red-700 transition-all"
          >
            Block Your Ad Slot
=======
            className="w-full text-center py-4 bg-[#B4233C] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#D13B55] transition-all"
          >
            Contact Us
>>>>>>> Stashed changes
          </a>
        </div>
      )}
    </>
  );
}