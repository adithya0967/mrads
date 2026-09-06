'use client';

import React, { useState, useEffect } from 'react';
import { billboardAdSlides, BillboardAdSlide } from '@/data/billboardAds.data';

export default function BillboardAdCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % billboardAdSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeSlide = billboardAdSlides[currentIndex];

  return (
    <div className="relative w-full h-full overflow-hidden bg-black font-sans select-none">
      {/* Background Slides with Crossfade */}
      {billboardAdSlides.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Ambient Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.theme.bgGradient}`} />

            {/* Custom Atmospheric Glow Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: slide.theme.overlayGlow }}
            />

            {/* Graphic Illustration Backgrounds per Ad Type */}
            {slide.type === 'velaris' && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Highway Horizon & Sleek EV Silhouette Visual */}
                <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Glowing Horizon Line */}
                <div
                  className="absolute bottom-[28%] left-[-10%] right-[-10%] h-[1px]"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(56,189,248,0.7) 40%, rgba(255,255,255,0.9) 50%, rgba(56,189,248,0.7) 60%, transparent)',
                    boxShadow: '0 0 15px rgba(56,189,248,0.8)',
                  }}
                />
                {/* Car Silhouette Lighting Render */}
                <div className="absolute right-[4%] bottom-[12%] w-[58%] h-[68%] flex items-end justify-center">
                  <svg
                    viewBox="0 0 500 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full object-contain opacity-90 drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]"
                  >
                    {/* Road Perspective Lines */}
                    <path
                      d="M-50 240L200 130M550 240L300 130"
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="1.5"
                    />
                    {/* Futuristic Sedan Curves */}
                    <path
                      d="M 60 175 C 100 170, 140 120, 220 100 C 300 80, 380 95, 430 135 C 460 155, 475 168, 485 178 C 470 185, 420 188, 250 188 C 110 188, 75 182, 60 175 Z"
                      fill="url(#velarisCarGradient)"
                    />
                    {/* Headlight DRL LED Sweep */}
                    <path
                      d="M 120 152 Q 160 150 200 155 M 340 148 Q 380 145 425 152"
                      stroke="#38bdf8"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      style={{ filter: 'drop-shadow(0 0 8px #38bdf8)' }}
                    />
                    {/* Wheel Rim Accents */}
                    <circle cx="140" cy="176" r="24" stroke="#38bdf8" strokeWidth="2.5" fill="#080d1a" />
                    <circle cx="390" cy="176" r="26" stroke="#38bdf8" strokeWidth="2.5" fill="#080d1a" />
                    <circle cx="140" cy="176" r="8" fill="#38bdf8" />
                    <circle cx="390" cy="176" r="9" fill="#38bdf8" />
                    <defs>
                      <linearGradient id="velarisCarGradient" x1="60" y1="100" x2="485" y2="188">
                        <stop offset="0%" stopColor="#1e293b" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#0f172a" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#020617" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            )}

            {slide.type === 'mrads' && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Neon City Grid & Holographic Circles */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), radial-gradient(rgba(56,189,248,0.4) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    backgroundPosition: '0 0, 12px 12px',
                  }}
                />
                <div className="absolute -right-12 -bottom-12 w-80 h-80 rounded-full border border-purple-500/20 animate-pulse" />
                <div className="absolute right-20 -top-10 w-60 h-60 rounded-full border border-pink-500/15" />
              </div>
            )}

            {slide.type === 'transit' && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Speed Light Trails */}
                <div className="absolute inset-0 flex flex-col justify-around opacity-25">
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                  <div className="h-[1.5px] w-[80%] ml-auto bg-gradient-to-r from-transparent via-teal-300 to-transparent" />
                  <div className="h-[2px] w-[90%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                </div>
              </div>
            )}

            {slide.type === 'hyperlocal' && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Concentric Radar Pulse */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 w-64 h-64 border border-orange-500/30 rounded-full" />
                <div className="absolute right-24 top-1/2 -translate-y-1/2 w-40 h-40 border border-amber-400/40 rounded-full" />
              </div>
            )}

            {/* Slide Content Layout */}
            <div className="relative h-full w-full p-[6%] flex flex-col justify-between z-20">
              {/* Top Row: Brand & Tagline */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    {/* Brand Logo Symbol */}
                    <div
                      className="w-5 h-5 rounded-full border flex items-center justify-center font-bold text-[10px]"
                      style={{
                        borderColor: slide.theme.accentColor,
                        color: slide.theme.accentColor,
                        backgroundColor: slide.theme.badgeBg,
                      }}
                    >
                      {slide.brand.charAt(0)}
                    </div>
                    <span
                      className="font-extrabold tracking-widest text-xs sm:text-sm uppercase"
                      style={{ color: slide.theme.textColor }}
                    >
                      {slide.brand}
                    </span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] tracking-wider uppercase opacity-60 mt-0.5 font-medium">
                    {slide.brandTagline}
                  </p>
                </div>

                {/* Powered By Badge */}
                <div className="px-2.5 py-1 rounded bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-white/50">
                    Powered by
                  </span>
                  <span className="text-[10px] sm:text-xs font-black tracking-tight text-purple-400">
                    {slide.poweredBy}
                  </span>
                </div>
              </div>

              {/* Middle Section: Main Ad Headlines */}
              <div className="my-auto max-w-[68%]">
                <div
                  className="inline-block px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase mb-2 border"
                  style={{
                    backgroundColor: slide.theme.badgeBg,
                    borderColor: `${slide.theme.accentColor}40`,
                    color: slide.theme.accentColor,
                  }}
                >
                  LIVE CAMPAIGN
                </div>
                <h2
                  className="text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight leading-[1.05] drop-shadow-md"
                  style={{ color: slide.theme.textColor }}
                >
                  {slide.headline}
                </h2>
                <p className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase opacity-80 mt-1.5 text-white/80">
                  {slide.subtitle}
                </p>

                {slide.stats && (
                  <div className="mt-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-white/90">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-ping"
                      style={{ backgroundColor: slide.theme.accentColor }}
                    />
                    <span>{slide.stats}</span>
                  </div>
                )}
              </div>

              {/* Bottom Row: Controls & Slide Track Indicator */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  {billboardAdSlides.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentIndex(dotIdx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIdx === currentIndex
                          ? 'w-6 bg-white'
                          : 'w-1.5 bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
                  >
                    {isPlaying ? 'PAUSE' : 'PLAY'}
                  </button>
                  <span className="text-[9px] font-mono text-white/40">
                    0{currentIndex + 1} / 0{billboardAdSlides.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Realistic Digital Screen Textures & Overlays */}
      {/* 1. Subtle Scanline Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-30 opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* 2. Screen Glass Sheen & Highlight */}
      <div
        className="pointer-events-none absolute inset-0 z-30 opacity-30"
        style={{
          background:
            'linear-gradient(125deg, rgba(255,255,255,0.2) 0%, transparent 40%, transparent 70%, rgba(255,255,255,0.08) 100%)',
        }}
      />

      {/* 3. Outer Edge Vignette */}
      <div className="pointer-events-none absolute inset-0 z-30 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]" />
    </div>
  );
}
