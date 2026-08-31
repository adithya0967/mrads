'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Markets', href: '#markets' },
  { label: 'Media', href: '#media' },
  { label: 'Resources', href: '#resources' },
  { label: 'AI Tech', href: '#ai-tech' },
  { label: 'Creative', href: '#creative' },
  { label: 'About', href: '#about' },
<<<<<<< Updated upstream
  { label: 'Locations', href: '#locations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
=======
  { label: 'Careers', href: '#careers' },
>>>>>>> Stashed changes
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isZoomPhase, setIsZoomPhase] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
<<<<<<< Updated upstream
    const onScroll = () => setScrolled(window.scrollY > 40);
=======
    const onScroll = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      
      setScrolled(scrollY > 20);

      // During the major billboard zoom-in & full-screen sequence (between ~0.5 viewport height and 3.5 viewport height)
      // diminish the header visually so it doesn't obstruct the camera experience.
      if (scrollY > innerHeight * 0.3 && scrollY < innerHeight * 3.2) {
        setIsZoomPhase(true);
      } else {
        setIsZoomPhase(false);
      }
    };

>>>>>>> Stashed changes
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
<<<<<<< Updated upstream
    <>
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
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ${
        isZoomPhase
          ? 'opacity-20 hover:opacity-100 pointer-events-auto bg-transparent border-transparent'
          : scrolled
          ? 'bg-[#090A0F]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4'
          : 'bg-gradient-to-b from-white/90 via-white/50 to-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Mr. Ads Home">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white flex items-center justify-center font-black text-sm tracking-tighter shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
            MA
          </span>
          <span className={`font-black text-2xl tracking-tighter transition-colors duration-300 ${isZoomPhase || scrolled ? 'text-white' : 'text-slate-900'}`}>
            MR. <span className="text-[#7C3AED]">ADS</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-bold">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors duration-300 hover:text-[#A855F7] ${
                isZoomPhase || scrolled ? 'text-slate-300' : 'text-slate-800'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-105"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-full backdrop-blur-md transition-colors border ${
            isZoomPhase || scrolled
              ? 'border-white/20 bg-white/10 text-white'
              : 'border-slate-300 bg-slate-900/10 text-slate-900'
          }`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
              isZoomPhase || scrolled ? 'bg-white' : 'bg-slate-900'
            } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
              isZoomPhase || scrolled ? 'bg-white' : 'bg-slate-900'
            } ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
              isZoomPhase || scrolled ? 'bg-white' : 'bg-slate-900'
            } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[90] bg-[#090A0F]/95 backdrop-blur-2xl px-8 py-24 flex flex-col justify-between border-t border-white/10">
          <div className="flex flex-col gap-6 text-2xl font-black uppercase tracking-tight text-white">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="py-3 border-b border-white/10 hover:text-[#7C3AED] transition-colors"
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
            className="w-full text-center py-4 bg-[#7C3AED] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#6D28D9] transition-all shadow-xl shadow-purple-600/40"
          >
            Contact Us
>>>>>>> Stashed changes
          </a>
        </div>
      )}
    </>
  );
}