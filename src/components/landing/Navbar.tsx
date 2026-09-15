'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navShadow: boolean;
}

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen, navShadow }: NavbarProps) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/locations', label: 'Locations' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      id="navbar"
      className={`sticky top-0 z-50 bg-[#090D16]/92 backdrop-blur-md border-b border-slate-800 transition-all ${
        navShadow ? 'shadow-card' : ''
      }`}
      style={{ background: 'rgba(9,13,22,.92)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-3 group" aria-label="Mr Ads Home">
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-card group-hover:scale-105 transition">
              <Image
                src="/assets/images/app_logo.svg"
                alt="Mr. Ads logo"
                width={32}
                height={27}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="leading-none">
              <div className="font-extrabold text-[19px] tracking-tight text-white">
                Mr. Ads{' '}
                <span className="font-medium text-slate-400 text-[13px] align-middle">| MR</span>
              </div>
              <div className="text-[11px] font-semibold tracking-[.16em] uppercase text-brand mt-1">
                Hyperlocal Advertising
              </div>
            </div>
          </Link>

          <nav className="nav-desktop hidden lg:flex items-center gap-6" aria-label="Primary">
            {navItems.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919686544644"
              className="hidden md:inline-flex w-10 h-10 rounded-full btn-ghost items-center justify-center text-slate-200 hover:text-white"
              aria-label="Call Mr Ads"
            >
              <i className="fa-solid fa-phone text-sm"></i>
            </a>
            <Link
              href="/contact"
              data-cta="Get a Media Plan"
              className="btn-primary hidden sm:inline-flex items-center gap-2 font-bold text-sm px-5 py-3 rounded-full"
            >
              Get a Media Plan <i className="fa-solid fa-arrow-right text-xs"></i>
            </Link>
            <button
              id="menuBtn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden w-11 h-11 rounded-xl border border-slate-700 bg-[#121B2D] flex items-center justify-center text-slate-200"
              aria-label="Open menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobileMenu"
        className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} border-t border-slate-800 bg-[#090D16] text-slate-100`}
      >
        <div className="px-5 py-4 grid gap-1 max-h-[70vh] overflow-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="m-link py-3 border-b border-slate-800 font-semibold text-slate-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-3 py-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="m-link btn-primary flex-1 text-center font-bold text-sm px-5 py-3.5 rounded-full"
            >
              Get a Media Plan
            </Link>
            <a
              href="tel:+919686544644"
              className="btn-ghost px-5 py-3.5 rounded-full font-bold text-sm text-slate-200"
            >
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
          <p className="text-xs text-slate-400 pb-2">knowus@mr-ads.in · +91 96865 44644</p>
        </div>
      </div>
    </header>
  );
}
