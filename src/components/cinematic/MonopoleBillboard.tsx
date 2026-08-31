'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

export interface BillboardAd {
  id: string;
  brand: string;
  brandLogoSubtitle?: string;
  headline: string;
  subhead: string;
  imageSrc: string;
  category: string;
  accentColor: string;
  locationTag: string;
}

const BILLBOARD_ADS: BillboardAd[] = [
  {
    id: 'ad-velaris',
    brand: 'VELARIS',
    brandLogoSubtitle: 'A CLEANER TOMORROW TOGETHER',
    headline: 'DRIVE A BRIGHTER TOMORROW',
    subhead: 'SUSTAINABLE LUXURY FOR A BOLDER WORLD',
    imageSrc: '/assets/images/velaris_car_ad.jpg',
    category: 'LUXURY AUTOMOTIVE',
    accentColor: '#38BDF8',
    locationTag: 'Bengaluru Airport Expressway Monopole',
  },
  {
    id: 'ad-chrono',
    brand: 'CHRONO LUXE',
    brandLogoSubtitle: 'SWISS PRECISION SINCE 1928',
    headline: 'PRECISION ELEVATED',
    subhead: 'SWISS AUTOMATIC TIMEPIECES WITH 70-HOUR POWER RESERVE',
    imageSrc: '/assets/images/chrono_luxe_watch_ad.jpg',
    category: 'FINE TIMEPIECES',
    accentColor: '#F59E0B',
    locationTag: 'UB City UB-1 Outer Billboard',
  },
  {
    id: 'ad-bistro',
    brand: "L'ÉTOILE BISTRO",
    brandLogoSubtitle: 'HAUTE CUISINE & COCKTAILS',
    headline: 'EXQUISITE GASTRONOMY',
    subhead: 'WOOD-FIRED PIZZA & CRAFT COCKTAILS IN INDIRANAGAR',
    imageSrc: '/assets/images/restaurant_ad.jpg',
    category: 'GOURMET DINING',
    accentColor: '#10B981',
    locationTag: '100ft Road Indiranagar Digital Display',
  },
  {
    id: 'ad-fashion',
    brand: 'MAISON AUTUMN',
    brandLogoSubtitle: 'PARIS • MILAN • BENGALURU',
    headline: 'MODERN URBAN ELEGANCE',
    subhead: 'DISCOVER THE NEW AUTUMN CAPSULE AT LAVELLE ROAD',
    imageSrc: '/assets/images/fashion_luxury_ad.jpg',
    category: 'HAUTE COUTURE',
    accentColor: '#EC4899',
    locationTag: 'Koramangala 80ft Road Junction Screen',
  },
  {
    id: 'ad-mrads',
    brand: 'MR. ADS',
    brandLogoSubtitle: 'REAL PLACES. REAL PEOPLE. REAL IMPACT.',
    headline: 'REACH CUSTOMERS WHERE THEY LIVE & DINE',
    subhead: 'PREMIUM DIGITAL & OUTDOOR ADVERTISING NETWORK ACROSS BENGALURU',
    imageSrc: '/assets/images/moving_media_ad.jpg',
    category: 'HYPERLOCAL NETWORK',
    accentColor: '#A855F7',
    locationTag: 'Bengaluru Outer Ring Road Highway',
  },
];

const ROTATION_INTERVAL = 5000; // 5 seconds per ad

interface MonopoleBillboardProps {
  showEnvironment?: boolean;
  className?: string;
}

export default function MonopoleBillboard({
  showEnvironment = true,
  className = '',
}: MonopoleBillboardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BILLBOARD_ADS.length);
    }, ROTATION_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentAd = BILLBOARD_ADS[currentIndex];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % BILLBOARD_ADS.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + BILLBOARD_ADS.length) % BILLBOARD_ADS.length);
  };

  return (
    <div
      className={`relative w-full select-none flex flex-col items-center justify-center ${
        showEnvironment
          ? 'bg-gradient-to-b from-[#1a2332] via-[#0f172a] to-[#090d16] p-4 sm:p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden'
          : ''
      } ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Daylight / Atmospheric Sky Glow Background (when showEnvironment is true) */}
      {showEnvironment && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400/20 via-indigo-900/10 to-transparent" />
          {/* Subtle clouds */}
          <div className="absolute top-4 left-[10%] w-72 h-20 bg-white/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-12 right-[15%] w-96 h-28 bg-sky-200/10 rounded-full blur-3xl" />
        </div>
      )}

      {/* ======================================================================= */}
      {/* 1. TOP SPOTLIGHTS MOUNTING BAR & LIGHT FIXTURES (6 OVERHEAD LAMPS) */}
      {/* ======================================================================= */}
      <div className="relative z-30 w-[88%] sm:w-[92%] flex justify-between items-end px-4 sm:px-12 -mb-2">
        {[0, 1, 2, 3, 4, 5].map((idx) => (
          <div key={idx} className="relative flex flex-col items-center group">
            {/* Overhead Spotlight fixture cap */}
            <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-t-md bg-gradient-to-b from-zinc-400 via-zinc-700 to-zinc-900 border border-zinc-500 shadow-md relative z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-300 shadow-[0_0_10px_#f59e0b]" />
            </div>

            {/* Angled mounting bracket arm */}
            <div className="w-1 sm:w-1.5 h-4 sm:h-6 bg-gradient-to-b from-zinc-700 to-zinc-900 border-x border-zinc-600" />

            {/* Glowing Light Beam Casting Downwards */}
            <div className="absolute top-5 sm:top-7 -inset-x-6 sm:-inset-x-10 h-32 sm:h-48 bg-gradient-to-b from-amber-200/25 via-amber-100/10 to-transparent blur-md pointer-events-none" />
          </div>
        ))}
      </div>

      {/* ======================================================================= */}
      {/* 2. MAIN BILLBOARD DISPLAY SCREEN & METALLIC BEZEL FRAME */}
      {/* ======================================================================= */}
      <div className="relative z-20 w-full max-w-[850px] aspect-[16/9] sm:aspect-[16/9.2] rounded-lg bg-gradient-to-b from-zinc-800 via-zinc-900 to-black p-2 sm:p-3.5 border-2 border-zinc-700 shadow-[0_20px_60px_rgba(0,0,0,0.8)] ring-1 ring-white/10 group">
        {/* Steel Frame Rivet Corners */}
        <div className="absolute top-1.5 left-1.5 w-2 h-2 rounded-full bg-zinc-600 border border-zinc-800" />
        <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-zinc-600 border border-zinc-800" />
        <div className="absolute bottom-1.5 left-1.5 w-2 h-2 rounded-full bg-zinc-600 border border-zinc-800" />
        <div className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-zinc-600 border border-zinc-800" />

        {/* Screen Display Area */}
        <div className="relative w-full h-full rounded bg-black overflow-hidden border border-zinc-800 flex flex-col justify-between">
          {/* LED Grid & Scanline Simulation Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3px_3px] z-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 pointer-events-none z-20" />

          {/* ACTIVE AD DISPLAY CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAd.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 z-10 w-full h-full flex flex-col justify-between p-4 sm:p-7 text-white"
            >
              {/* Background Photography */}
              <div className="absolute inset-0 z-0">
                <AppImage
                  src={currentAd.imageSrc}
                  alt={currentAd.headline}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
                {/* Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
              </div>

              {/* TOP ROW: BRAND LOGO (Right side) & CATEGORY BADGE (Left side) */}
              <div className="relative z-20 flex items-start justify-between">
                {/* Left: Category Badge & Status */}
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16C784] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16C784]" />
                  </span>
                  <span className="text-[9px] sm:text-xs font-black tracking-widest uppercase text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/15">
                    {currentAd.category}
                  </span>
                </div>

                {/* Right: Brand Logo & Tagline (Matches the Velaris layout from the photo!) */}
                <div className="flex flex-col items-end text-right">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9z" strokeDasharray="30" strokeDashoffset="10" />
                      <circle cx="12" cy="12" r="3" fill="currentColor" />
                    </svg>
                    <span className="text-sm sm:text-2xl font-light tracking-[0.25em] text-white uppercase font-sans">
                      {currentAd.brand}
                    </span>
                  </div>
                  {currentAd.brandLogoSubtitle && (
                    <span className="text-[7px] sm:text-[9px] font-semibold tracking-widest uppercase text-white/75 mt-0.5">
                      {currentAd.brandLogoSubtitle}
                    </span>
                  )}
                </div>
              </div>

              {/* BOTTOM ROW: HEADLINE (Left) & POWERED BY MR. ADS (Bottom Right) */}
              <div className="relative z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pt-6">
                {/* Left Side: Headline & Subhead */}
                <div className="max-w-lg space-y-1 sm:space-y-2">
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-[1.05] drop-shadow-md">
                    {currentAd.headline}
                  </h2>
                  <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-gray-200 uppercase opacity-90 line-clamp-2">
                    {currentAd.subhead}
                  </p>
                </div>

                {/* Bottom Right: Powered by MR. ADS Branding Badge (Matching photo exactly!) */}
                <div className="self-end sm:self-auto flex flex-col items-end bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 shadow-lg">
                  <div className="text-[8px] sm:text-[10px] font-bold text-gray-300 tracking-wider">
                    Powered by
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs sm:text-base font-black text-white tracking-tight">MR.</span>
                    <span className="text-xs sm:text-base font-black text-[#A855F7] tracking-tight">ADS</span>
                  </div>
                  <div className="text-[7px] sm:text-[8px] font-extrabold tracking-widest text-gray-400 uppercase">
                    REAL PLACES. REAL PEOPLE. REAL IMPACT.
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* INTERACTIVE OVERLAY CONTROLS (Pause/Play, Prev, Next, Dots) */}
          <div className="absolute inset-x-0 bottom-2 z-30 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {/* Prev / Next buttons */}
            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={handlePrev}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all active:scale-95 shadow-md"
                aria-label="Previous Ad"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all active:scale-95 shadow-md"
                aria-label="Next Ad"
              >
                ›
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 pointer-events-auto">
              {BILLBOARD_ADS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-5 bg-[#A855F7]' : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================================= */}
      {/* 3. STEEL CATWALK PLATFORM & SAFETY HANDRAILS UNDER SCREEN */}
      {/* ======================================================================= */}
      <div className="relative z-20 w-[96%] max-w-[820px] -mt-1 flex flex-col items-center">
        {/* Catwalk Mesh Floor */}
        <div className="w-full h-3 sm:h-4 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 border-t-2 border-b border-zinc-500 shadow-inner flex items-center justify-around px-2">
          {/* Steel grate pattern lines */}
          <div className="w-full h-full bg-[radial-gradient(#18181b_1px,transparent_1px)] [background-size:6px_3px] opacity-70" />
        </div>

        {/* Safety Handrail Railing Posts */}
        <div className="w-[98%] h-4 sm:h-6 flex justify-between items-start border-t border-zinc-500 relative px-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1 h-full bg-gradient-to-b from-zinc-500 to-zinc-800" />
          ))}
          {/* Bottom horizontal safety bar */}
          <div className="absolute top-2 inset-x-0 h-0.5 bg-zinc-400 shadow-sm" />
        </div>
      </div>

      {/* ======================================================================= */}
      {/* 4. STEEL LATTICE SUPPORT TRUSS STRUCTURE */}
      {/* ======================================================================= */}
      <div className="relative z-10 w-[70%] sm:w-[60%] h-8 sm:h-12 flex justify-between items-center -mt-2">
        {/* Diagonal Steel Cross Braces */}
        <svg className="w-full h-full text-zinc-700" viewBox="0 0 300 40" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="0" y1="0" x2="150" y2="40" />
          <line x1="150" y1="40" x2="300" y2="0" />
          <line x1="0" y1="40" x2="150" y2="0" />
          <line x1="150" y1="0" x2="300" y2="40" />
          <line x1="0" y1="20" x2="300" y2="20" />
        </svg>
      </div>

      {/* ======================================================================= */}
      {/* 5. HEAVY STEEL MONOPOLE COLUMN PILLAR & CONCRETE FOUNDATION */}
      {/* ======================================================================= */}
      <div className="relative z-0 flex flex-col items-center -mt-1">
        {/* Steel Monopole Main Column */}
        <div className="w-14 sm:w-20 h-28 sm:h-44 bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-950 border-x border-zinc-700 shadow-2xl relative overflow-hidden">
          {/* Metallic cylindrical sheen highlight */}
          <div className="absolute inset-y-0 left-3 w-3 bg-white/10 blur-[1px]" />
          {/* Ring collars */}
          <div className="w-full h-2 bg-zinc-800 border-y border-zinc-600 top-6 absolute" />
          <div className="w-full h-2 bg-zinc-800 border-y border-zinc-600 top-20 absolute" />
        </div>

        {/* Concrete Pedestal Base */}
        {showEnvironment && (
          <div className="w-24 sm:w-36 h-6 sm:h-9 bg-gradient-to-b from-stone-600 via-stone-700 to-stone-900 border border-stone-500 rounded-t-md shadow-2xl flex flex-col items-center justify-center">
            <div className="w-[90%] h-1 bg-stone-500/50" />
          </div>
        )}
      </div>

      {/* LIVE LOCATION BADGE AT BOTTOM */}
      {showEnvironment && (
        <div className="mt-3 relative z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs text-gray-300 font-semibold shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#16C784] animate-pulse" />
          <span>{currentAd.locationTag}</span>
        </div>
      )}
    </div>
  );
}
