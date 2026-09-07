'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from './landing/Navbar';
import Footer from './landing/Footer';
import LightboxModal from './landing/LightboxModal';

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navShadow, setNavShadow] = useState(false);
  const [showToTop, setShowToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toast state
  const [toastMsg, setToastMsg] = useState('Done');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2600);
  };

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<{
    title: string;
    img: string;
    desc: string;
  } | null>(null);

  const handleOpenLightbox = (title: string, img: string, desc: string) => {
    setLightboxData({ title, img, desc });
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const progress = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setScrollProgress(progress);
      setNavShadow(h.scrollTop > 10);
      setShowToTop(h.scrollTop > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#090D16] text-slate-100 min-h-screen">
      {/* Scroll Progress Bar */}
      <div id="progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Header / Navbar */}
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navShadow={navShadow}
      />

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile sticky CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090D16]/95 backdrop-blur border-t border-slate-800 px-4 py-3 flex gap-2">
        <a href="tel:+919686544644" className="btn-ghost flex-1 text-center font-bold text-sm py-3 rounded-full text-slate-100">
          <i className="fa-solid fa-phone mr-1.5 text-xs"></i> Call
        </a>
        <Link href="/contact" className="btn-primary flex-[2] text-center font-bold text-sm py-3 rounded-full">
          Get a Media Plan
        </Link>
      </div>
      <div className="sm:hidden h-[68px]"></div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        data={lightboxData}
        onClose={handleCloseLightbox}
        onEnquire={() => {}}
      />

      {/* Toast Notification */}
      <div id="toast" className={`fixed bottom-24 sm:bottom-6 left-1/2 -translate-x-1/2 z-[95] ${showToast ? 'block' : 'hidden'}`}>
        <div className="bg-[#121B2D] border border-slate-700 text-white text-[13.5px] font-bold px-5 py-3.5 rounded-full shadow-lift flex items-center gap-2.5 whitespace-nowrap">
          <i className="fa-solid fa-circle-check text-emerald-400"></i>
          <span id="toastMsg">{toastMsg}</span>
        </div>
      </div>

      {/* Back to Top */}
      <button
        id="toTop"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-40 w-11 h-11 rounded-full bg-[#1E293B] border border-slate-700 text-white shadow-lift ${
          showToTop ? 'flex' : 'hidden'
        } items-center justify-center hover:bg-brand hover:border-brand transition`}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up text-sm"></i>
      </button>
    </div>
  );
}
