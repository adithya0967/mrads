'use client';

import React, { useState, useEffect } from 'react';

export default function ScrollIndicator() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / 120);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (opacity <= 0.01) return null;

  return (
    <div
      className="flex flex-col items-center justify-center gap-1.5 pointer-events-none select-none transition-opacity duration-300"
      style={{ opacity }}
    >
      <span className="text-[10px] font-bold tracking-[0.25em] text-[#666666] uppercase">
        Scroll to Explore
      </span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#929292] animate-bounce"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
      </svg>
    </div>
  );
}
