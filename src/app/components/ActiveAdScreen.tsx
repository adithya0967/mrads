'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

export interface AdSpot {
  id: string;
  brand: string;
  category: string;
  headline: string;
  subhead: string;
  ctaText: string;
  imageSrc: string;
  badgeColor: string;
  accentColor: string;
  location: string;
  dwellTime: string;
}

const AD_SPOTS: AdSpot[] = [
  {
    id: 'ad-1',
    brand: 'CHRONO LUXE',
    category: 'LUXURY TIMEPIECES',
    headline: 'Elegance Defined. Swiss Precision.',
    subhead: 'Discover the 2026 Automatic Collection with 70-hour power reserve.',
    ctaText: 'Exclusive 15% OFF for Restaurant Guests • Scan QR',
    imageSrc: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
    accentColor: '#F59E0B',
    location: 'Indiranagar Fine Dining Network',
    dwellTime: '24 min average dwell',
  },
  {
    id: 'ad-2',
    brand: 'NEO GT ELECTRIC',
    category: 'AUTOMOTIVE',
    headline: '0 to 100 km/h in 3.1 Seconds.',
    subhead: 'Experience quiet luxury and instant electric torque in Bengaluru.',
    ctaText: 'Book VIP Test Drive at UB City Lounge',
    imageSrc: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40',
    accentColor: '#06B6D4',
    location: 'Koramangala Tech Hub Screens',
    dwellTime: '18 min average dwell',
  },
  {
    id: 'ad-3',
    brand: 'ARTISAN BISTRO & LOUNGE',
    category: 'GOURMET DINING',
    headline: 'Wood-Fired Pizza & Craft Cocktails.',
    subhead: 'Award-winning Italian gastronomy right around the corner.',
    ctaText: 'Show Screen Code for Complimentary Dessert',
    imageSrc: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    accentColor: '#10B981',
    location: 'MG Road Premium Outlets',
    dwellTime: '35 min average dwell',
  },
  {
    id: 'ad-4',
    brand: 'AUDIOPHILE PRO',
    category: 'PREMIUM TECH',
    headline: 'Silence The World. Hear Pure Sound.',
    subhead: 'Adaptive Noise Cancelling with 45-hour battery lifespan.',
    ctaText: 'Try Live Experience at Nearby Store',
    imageSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/40',
    accentColor: '#A855F7',
    location: 'Whitefield Corporate Parks',
    dwellTime: '15 min average dwell',
  },
  {
    id: 'ad-5',
    brand: 'MAISON AUTUMN',
    category: 'FASHION & STYLE',
    headline: 'Modern Elegance for Urban Living.',
    subhead: 'The New Autumn Capsule Collection is now available in store.',
    ctaText: 'Visit Flagship Gallery at Lavelle Road',
    imageSrc: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/40',
    accentColor: '#F43F5E',
    location: 'HSR Layout Lifestyle Hubs',
    dwellTime: '22 min average dwell',
  },
];

const AD_DURATION = 4500; // 4.5 seconds per ad

export default function ActiveAdScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Continuous auto-switching of ads every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % AD_SPOTS.length);
    }, AD_DURATION);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {/* Active Digital Ad Screen Mockup */}
      <div className="relative rounded-2xl overflow-hidden border border-[#252830] shadow-2xl shadow-black/80 bg-[#111318] aspect-[4/3] sm:aspect-[14/10] select-none group">
        {/* Background Restaurant Venue Setting */}
        <div className="absolute inset-0 z-0">
          <AppImage
            src="https://images.unsplash.com/photo-1556700485-cc335d219007"
            alt="Venue Environment Background"
            fill
            priority
            className="object-cover blur-[2px] opacity-40 brightness-75 scale-105 transition-all duration-700"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/60 to-black/40" />
        </div>

        {/* Screen Frame Mockup (DOOH Display Unit inside venue) */}
        <div className="absolute inset-3 sm:inset-4 rounded-xl overflow-hidden border border-[#252830] bg-[#000] shadow-inner flex flex-col justify-between z-10 ring-1 ring-white/10">
          {/* TOP FIXED STATUS BAR: LIVE BADGE */}
          <div className="relative z-30 p-3 sm:p-4 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16C784] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16C784]" />
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#F5F5F5] uppercase">
                LIVE
              </span>
            </div>
          </div>

          {/* DYNAMIC AD SPOTS CAROUSEL WITH CONTINUOUS KEN BURNS ZOOM IN / OUT ANIMATION */}
          {AD_SPOTS.map((ad, idx) => {
            const isActive = idx === currentIndex;
            const isZoomIn = idx % 2 === 0;

            return (
              <div
                key={ad.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive
                    ? 'opacity-100 pointer-events-auto z-10'
                    : 'opacity-0 pointer-events-none z-0'
                }`}
              >
                {/* Background Image Container with Ken Burns Zoom animation */}
                <div
                  className={`w-full h-full relative transition-transform duration-1000 overflow-hidden ${
                    isActive
                      ? isZoomIn
                        ? 'animate-kenburns-in'
                        : 'animate-kenburns-out'
                      : 'scale-100'
                  }`}
                >
                  <AppImage
                    src={ad.imageSrc}
                    alt={ad.headline}
                    fill
                    priority={idx === 0}
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                {/* Vignette Gradients for High Contrast Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/50 z-10 pointer-events-none" />

                {/* Category Badge - Per Ad */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                  <span
                    className={`text-[9px] sm:text-[10px] font-extrabold uppercase px-2.5 py-1 rounded border backdrop-blur-md transition-all duration-700 block shadow-md ${
                      ad.badgeColor
                    } ${
                      isActive
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 -translate-y-2 scale-90'
                    }`}
                  >
                    {ad.category}
                  </span>
                </div>

                {/* Bottom Content: Brand, Headline, Subhead - Zoom & Fade Transition */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-5 flex flex-col justify-end">
                  <div
                    className={`space-y-1.5 sm:space-y-2 transition-all duration-700 ease-out ${
                      isActive
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-3 scale-95'
                    }`}
                  >
                    {/* Brand Title */}
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full shadow-sm"
                        style={{ backgroundColor: ad.accentColor }}
                      />
                      <span className="text-[10px] sm:text-xs font-extrabold tracking-widest uppercase text-white/90">
                        {ad.brand}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-base sm:text-xl lg:text-2xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
                      {ad.headline}
                    </h3>

                    {/* Subhead / Tagline */}
                    <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 max-w-md font-medium opacity-90 hidden sm:block">
                      {ad.subhead}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* STAT BADGE PLACED BELOW THE ADVERTISING SCREEN */}
      <div className="bg-[#111318] border border-[#252830] rounded-xl p-3.5 sm:p-4 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16C784] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#16C784]" />
          </div>
          <div>
            <div className="text-[10px] sm:text-xs font-semibold text-[#9A9CA5] uppercase tracking-wider">
              Active Screens
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-[#F5F5F5] flex items-center gap-1.5">
              30,000+
              <span className="text-[10px] font-normal text-[#16C784] bg-[#16C784]/10 px-1.5 py-0.2 rounded border border-[#16C784]/20">
                ONLINE NOW
              </span>
            </div>
          </div>
        </div>

        <div className="h-8 w-[1px] bg-[#252830]" />

        <div>
          <div className="text-[10px] sm:text-xs font-semibold text-[#9A9CA5] uppercase tracking-wider">
            Combined Reach
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-[#B4233C]">20M+</div>
        </div>
      </div>
    </div>
  );
}
