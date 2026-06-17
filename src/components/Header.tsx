'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Locations', href: '#locations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
            className="mt-4 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:bg-red-700 transition-all"
          >
            Block Your Ad Slot
          </a>
        </div>
      )}
    </>
  );
}