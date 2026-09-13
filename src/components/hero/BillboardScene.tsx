'use client';

import React, { useState, useEffect, useRef } from 'react';
import CampaignDisplay, { HERO_CAMPAIGNS } from './CampaignDisplay';
import Reveal from '@/components/ui/Reveal';

export default function BillboardScene() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const DURATION_MS = 5500;
  const totalCampaigns = HERO_CAMPAIGNS.length;

  // Commercial rotation loop
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCampaigns);
    }, DURATION_MS);

    return () => clearInterval(timer);
  }, [isHovered, totalCampaigns]);

  // Subtle scroll parallax
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const winHeight = window.innerHeight;
      const normalized = Math.min(1, Math.max(0, scrolled / winHeight));
      setScrollProgress(normalized);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scaleValue = 1.02 - scrollProgress * 0.02;
  const parallaxY = scrollProgress * -25;

  return (
    <Reveal variant="scale-up" delay={0.25} duration={0.8} className="w-full">
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full flex flex-col items-center select-none"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* 1. Subliminal Ambient Crimson Backglow */}
        <div className="billboard-backlight absolute -inset-8 sm:-inset-16 rounded-[40px] pointer-events-none opacity-80 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* 2. Realistic Outdoor Billboard Structure */}
        <div
          className="relative w-full rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-[#1C1C1C] via-[#111111] to-[#0A0A0A] border border-white/[0.12] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95),0_0_45px_rgba(216,31,66,0.18)]"
          style={{
            transform: `scale(${scaleValue})`,
            transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        >
          {/* Physical Industrial Billboard Frame Top Architectural Bar */}
          <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/[0.06] mb-1.5 text-[10px] font-mono tracking-wider text-[#666666]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D81F42] shadow-[0_0_6px_#D81F42]"></span>
              <span className="font-semibold text-[#929292]">MR ADS // DOOH DISPLAY UNIT #01</span>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <span>DUSK ROTATION • 4K HDR</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ACTIVE
              </span>
            </div>
          </div>

          {/* Digital Screen Display Area */}
          <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] bg-black shadow-inner">
            <CampaignDisplay currentIndex={currentIndex} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
