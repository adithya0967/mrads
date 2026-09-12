'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import CampaignDisplay, { HERO_CAMPAIGNS } from './CampaignDisplay';

export default function BillboardScene() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const DURATION_MS = 5500;
  const totalCampaigns = HERO_CAMPAIGNS.length;

  // Commercial timer and progress loop
  useEffect(() => {
    const intervalMs = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      if (isHovered) return; // Pause subtle rotation on hover if user is inspecting
      elapsed += intervalMs;
      const currentProgress = Math.min(100, (elapsed / DURATION_MS) * 100);
      setProgress(currentProgress);

      if (elapsed >= DURATION_MS) {
        elapsed = 0;
        setProgress(0);
        setCurrentIndex((prev) => (prev + 1) % totalCampaigns);
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [currentIndex, isHovered, totalCampaigns]);

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

  // Subtle mouse movement for atmospheric depth
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 10, y: y * 10 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleSelectCampaign = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const scaleValue = 1.02 - scrollProgress * 0.02;
  const parallaxY = scrollProgress * -25;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex flex-col items-center select-none"
      style={{
        transform: `translateY(${parallaxY}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* 1. Subliminal Ambient Crimson Backglow */}
      <div className="billboard-backlight absolute -inset-8 sm:-inset-16 rounded-[40px] pointer-events-none opacity-80 blur-3xl" />

      {/* 2. Realistic Outdoor Billboard Structure */}
      <div
        className="relative w-full rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-[#1C1C1C] via-[#111111] to-[#0A0A0A] border border-white/[0.12] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95),0_0_45px_rgba(216,31,66,0.18)]"
        style={{
          transform: `scale(${scaleValue}) translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
          transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        {/* Physical Industrial Billboard Frame Top Architectural Bar */}
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/[0.06] mb-1.5 text-[10px] font-mono tracking-wider text-[#666666]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D81F42]"></span>
            <span className="font-semibold text-[#929292]">MR ADS // DOOH DISPLAY UNIT #01</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span>DUSK ROTATION • 4K HDR</span>
            <span className="text-emerald-400 font-bold">● ACTIVE</span>
          </div>
        </div>

        {/* Digital Screen Display Area */}
        <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] bg-black shadow-inner">
          <CampaignDisplay
            currentIndex={currentIndex}
            onSelectCampaign={handleSelectCampaign}
            progress={progress}
          />
        </div>

        {/* Bottom Realistic Structural Mount & Reflected Ambient Rim */}
        <div className="mt-2 pt-1 px-3 flex items-center justify-between text-[10px] text-[#666666] border-t border-white/[0.04]">
          <div className="flex items-center gap-2">
            <span className="text-[#929292] font-medium">BENGALURU PRIME HUBS</span>
            <span>•</span>
            <span>KORAMANGALA / INDIRANAGAR / MG ROAD</span>
          </div>
          <div className="font-mono text-[#929292]">
            CAMPAIGN {currentIndex + 1} OF {totalCampaigns}
          </div>
        </div>
      </div>
    </div>
  );
}
