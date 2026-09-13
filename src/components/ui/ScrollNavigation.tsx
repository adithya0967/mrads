'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

export default function ScrollNavigation() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = docHeight - winHeight;

      // Show "Scroll Up" when scrolled down more than 300px
      setShowUp(scrollY > 300);

      // Show "Scroll Down" when not within 150px of bottom
      setShowDown(scrollY < maxScroll - 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    // Find next section or scroll by 85% of viewport height
    const currentScroll = window.scrollY;
    const sections = Array.from(document.querySelectorAll('section, footer'));
    const nextSection = sections.find((s) => {
      const rect = s.getBoundingClientRect();
      return rect.top > 80;
    });

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showUp && !showDown) return null;

  return (
    <aside
      aria-label="Scroll Navigation"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-5 sm:right-7 z-40 flex flex-col items-center gap-2 select-none"
    >
      <div className="flex flex-col items-center gap-1.5 p-1.5 rounded-full bg-[#0D0D0D]/90 backdrop-blur-xl border border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.85),0_0_15px_rgba(216,31,66,0.15)] transition-all duration-300 hover:border-brand/40">
        {/* Scroll Up Button */}
        {showUp && (
          <button
            type="button"
            onClick={handleScrollUp}
            className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] hover:bg-brand text-mute hover:text-white transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
            aria-label="Scroll to top of page"
            title="Scroll to top"
          >
            <ArrowUp size={16} className="transform group-hover:-translate-y-0.5 transition-transform duration-200" />
            {isHovered && (
              <span className="hidden sm:block absolute right-12 px-2.5 py-1 rounded-md bg-[#141414] border border-white/10 text-[11px] font-semibold text-paper whitespace-nowrap shadow-lg">
                Scroll Up
              </span>
            )}
          </button>
        )}

        {/* Scroll Down Button */}
        {showDown && (
          <button
            type="button"
            onClick={handleScrollDown}
            className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] hover:bg-brand text-mute hover:text-white transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
            aria-label="Scroll down to next section"
            title="Scroll down"
          >
            <ArrowDown size={16} className="transform group-hover:translate-y-0.5 transition-transform duration-200 animate-pulse" />
            {isHovered && (
              <span className="hidden sm:block absolute right-12 px-2.5 py-1 rounded-md bg-[#141414] border border-white/10 text-[11px] font-semibold text-paper whitespace-nowrap shadow-lg">
                Scroll Down
              </span>
            )}
          </button>
        )}
      </div>
    </aside>
  );
}
