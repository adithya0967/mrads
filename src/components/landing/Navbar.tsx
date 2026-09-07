import React from 'react';

interface NavbarProps {
  activeNav: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navShadow: boolean;
}

export default function Navbar({
  activeNav,
  mobileMenuOpen,
  setMobileMenuOpen,
  navShadow,
}: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'display', label: 'Display' },
    { id: 'moving', label: 'Moving Media' },
    { id: 'offline', label: 'Offline & Print' },
    { id: 'digital', label: 'Digital & AI' },
    { id: 'why', label: 'Why Mr. Ads' },
    { id: 'contact', label: 'Contact' },
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
          <a href="#home" className="flex items-center gap-3 group" aria-label="Mr Ads Home">
            <div className="w-11 h-11 rounded-xl bg-brand flex items-center justify-center text-white font-extrabold text-lg tracking-tight shadow-card group-hover:scale-105 transition">
              MR
            </div>
            <div className="leading-none">
              <div className="font-extrabold text-[19px] tracking-tight text-white">
                Mr. Ads <span className="font-medium text-slate-400 text-[13px] align-middle">| MR</span>
              </div>
              <div className="text-[11px] font-semibold tracking-[.16em] uppercase text-brand mt-1">
                Hyperlocal Advertising
              </div>
            </div>
          </a>

          <nav className="nav-desktop hidden lg:flex items-center gap-6" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
                data-nav={item.id}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919686544644"
              className="hidden md:inline-flex w-10 h-10 rounded-full btn-ghost items-center justify-center text-slate-200 hover:text-white"
              aria-label="Call Mr Ads"
            >
              <i className="fa-solid fa-phone text-sm"></i>
            </a>
            <a
              href="#contact"
              data-cta="Get a Media Plan"
              className="btn-primary hidden sm:inline-flex items-center gap-2 font-bold text-sm px-5 py-3 rounded-full"
            >
              Get a Media Plan <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
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
      <div id="mobileMenu" className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} border-t border-slate-800 bg-[#090D16] text-slate-100`}>
        <div className="px-5 py-4 grid gap-1 max-h-[70vh] overflow-auto">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="m-link py-3 border-b border-slate-800 font-semibold text-slate-200 hover:text-white">
            Home
          </a>
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="m-link py-3 border-b border-slate-800 font-semibold text-slate-200 hover:text-white">
            Solutions
          </a>
          <a href="#display" onClick={() => setMobileMenuOpen(false)} className="m-link py-3 border-b border-slate-800 font-semibold text-slate-200 hover:text-white">
            Display Advertising
          </a>
          <a href="#moving" onClick={() => setMobileMenuOpen(false)} className="m-link py-3 border-b border-slate-800 font-semibold text-slate-200 hover:text-white">
            Moving Media
          </a>
          <a href="#offline" onClick={() => setMobileMenuOpen(false)} className="m-link py-3 border-b border-slate-800 font-semibold text-slate-200 hover:text-white">
            Offline & Print
          </a>
          <a href="#creative" onClick={() => setMobileMenuOpen(false)} className="m-link py-3 border-b border-slate-800 font-semibold text-slate-200 hover:text-white">
            Print & Creative
          </a>
          <a href="#digital" onClick={() => setMobileMenuOpen(false)} className="m-link py-3 border-b border-slate-800 font-semibold text-slate-200 hover:text-white">
            Digital & AI
          </a>
          <a href="#why" onClick={() => setMobileMenuOpen(false)} className="m-link py-3 border-b border-slate-800 font-semibold text-slate-200 hover:text-white">
            Why Mr. Ads
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="m-link py-3 font-semibold text-slate-200 hover:text-white">
            Contact
          </a>
          <div className="flex gap-3 py-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="m-link btn-primary flex-1 text-center font-bold text-sm px-5 py-3.5 rounded-full"
            >
              Get a Media Plan
            </a>
            <a href="tel:+919686544644" className="btn-ghost px-5 py-3.5 rounded-full font-bold text-sm text-slate-200">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
          <p className="text-xs text-slate-400 pb-2">knowus@mr-ads.in · +91 96865 44644</p>
        </div>
      </div>
    </header>
  );
}
