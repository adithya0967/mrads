'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export default function ScrollIndicator() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / 150);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    const nextSection =
      document.querySelector('main > section:nth-of-type(2)') ||
      document.getElementById('solutions');

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.88, behavior: 'smooth' });
    }
  };

  if (opacity <= 0.01) return null;

  return (
    <button
      type="button"
      onClick={handleScrollDown}
      className="flex flex-col items-center justify-center gap-2 select-none cursor-pointer group transition-all duration-300 hover:scale-105 active:scale-95"
      style={{ opacity }}
      aria-label="Scroll down to explore website sections"
    >
      <span className="text-[10.5px] font-bold tracking-[0.25em] text-[#666666] group-hover:text-[#F4F1EC] uppercase transition-colors">
        Scroll Down to Explore
      </span>
      <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-brand/60 group-hover:bg-brand/10 text-[#929292] group-hover:text-brand transition-all duration-200 shadow-sm group-hover:shadow-[0_0_12px_rgba(200,58,75,0.3)]">
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </button>
  );
}
