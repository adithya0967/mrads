'use client';

import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Locations', href: '#locations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-[100] w-full bg-[#0B0C0E]/95 backdrop-blur-md transition-shadow duration-300 border-b border-[#22242B] ${
        scrolled ? 'shadow-md shadow-black/40' : ''
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="Mr. Ads Home">
          <span className="w-8 h-8 rounded-lg bg-[#E52345] text-white flex items-center justify-center font-extrabold text-sm tracking-tight shadow-sm">
            MA
          </span>
          <span className="font-extrabold text-xl tracking-tight text-white">
            Mr.<span className="text-[#E52345]">Ads</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-semibold text-[#9A9AA4]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right-side CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#E52345] text-white rounded-lg font-bold text-sm hover:bg-[#c91837] transition-colors shadow-sm"
          >
            Book Your Ad Slot
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-[#14151A] transition-colors border border-[#22242B]"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[81px] bottom-0 z-[90] bg-[#0B0C0E] px-6 py-8 flex flex-col gap-6 border-t border-[#22242B]">
          <div className="flex flex-col gap-5 text-lg font-bold text-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-2 border-b border-[#22242B]/60 hover:text-[#E52345] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-4 w-full text-center py-3.5 bg-[#E52345] text-white rounded-lg font-bold text-base hover:bg-[#c91837] transition-colors shadow-sm"
          >
            Book Your Ad Slot
          </a>
        </div>
      )}
    </header>
  );
}
