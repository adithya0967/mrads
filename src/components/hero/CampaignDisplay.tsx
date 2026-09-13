'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

export interface CampaignItem {
  id: string;
  category: string;
  shortLabel: string;
  brand: string;
  headline: string;
  subheadline: string;
  imageUrl: string;
  tag: string;
  accent: string;
}

export const HERO_CAMPAIGNS: CampaignItem[] = [
  {
    id: 'campaign-automotive',
    category: 'Automotive',
    shortLabel: 'Auto',
    brand: 'VALENCE',
    headline: 'THE NEW VALENCE GT',
    subheadline: 'Pure Electric Luxury',
    imageUrl: '/images/hero/campaign-valence-gt.jpg',
    tag: 'AUTOMOTIVE GT',
    accent: '#D81F42',
  },
  {
    id: 'campaign-fashion',
    category: 'Haute Couture',
    shortLabel: 'Luxury',
    brand: 'MAISON VENDÔME',
    headline: 'AUTUMN / WINTER COLLECTION',
    subheadline: 'Parisian Architectural Tailoring',
    imageUrl: '/images/hero/campaign-maison-vendome.jpg',
    tag: 'HAUTE COUTURE',
    accent: '#D4AF37',
  },
  {
    id: 'campaign-dining',
    category: 'Gourmet Dining',
    shortLabel: 'Dining',
    brand: 'ARTISAN BISTRO & LOUNGE',
    headline: 'WOOD-FIRED PIZZA & CRAFT COCKTAILS',
    subheadline: 'Award-Winning Italian Gastronomy',
    imageUrl: '/images/hero/campaign-artisan-bistro.jpg',
    tag: 'GOURMET DINING',
    accent: '#10B981',
  },
  {
    id: 'campaign-hospitality',
    category: 'Hospitality',
    shortLabel: 'Resort',
    brand: 'AZURE HORIZONS',
    headline: 'MALDIVES OCEAN SANCTUARY',
    subheadline: 'Private Overwater Residences',
    imageUrl: '/images/hero/campaign-azure-horizons.jpg',
    tag: 'PRIVATE SANCTUARY',
    accent: '#2DD4BF',
  },
  {
    id: 'campaign-audio',
    category: 'Studio Audio',
    shortLabel: 'Audio',
    brand: 'SONIQ REFERENCE',
    headline: 'PURE ACOUSTIC MASTERY',
    subheadline: 'Reference Audiophile Drivers',
    imageUrl: '/images/hero/campaign-soniq-audio.jpg',
    tag: 'STUDIO REFERENCE',
    accent: '#38BDF8',
  },
  {
    id: 'campaign-watch',
    category: 'Horlogerie',
    shortLabel: 'Watch',
    brand: 'KRONOS GENÈVE',
    headline: 'MASTER OF PRECISION',
    subheadline: 'Swiss Mechanical Chronograph',
    imageUrl: '/images/hero/campaign-kronos-watch.jpg',
    tag: 'SWISS HORLOGERIE',
    accent: '#E2B774',
  },
];

interface CampaignDisplayProps {
  currentIndex: number;
  onSelectCampaign: (index: number) => void;
  progress: number;
}

export default function CampaignDisplay({
  currentIndex,
  onSelectCampaign,
  progress,
}: CampaignDisplayProps) {
  const active = HERO_CAMPAIGNS[currentIndex % HERO_CAMPAIGNS.length];

  // Prebuffer next image to ensure zero black flicker
  useEffect(() => {
    const nextIdx = (currentIndex + 1) % HERO_CAMPAIGNS.length;
    const img = new window.Image();
    img.src = HERO_CAMPAIGNS[nextIdx].imageUrl;
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full select-none">
      {/* Campaign Image Render with Smooth Crossfade */}
      {HERO_CAMPAIGNS.map((camp, idx) => {
        const isCurrent = idx === currentIndex;
        return (
          <div
            key={camp.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div className="relative w-full h-full overflow-hidden bg-black">
              <Image
                src={camp.imageUrl}
                alt={`${camp.brand} ${camp.headline}`}
                fill
                priority={idx === 0 || idx === 1}
                className="object-cover object-center transform transition-transform duration-[6000ms] ease-out scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
              />

              {/* Cinematic contrast gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/45 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />

              {/* Realistic LED Mesh Subpixel Texture */}
              <div className="screen-mesh absolute inset-0 opacity-40" />

              {/* Screen Glass Reflection Highlight */}
              <div className="screen-glare absolute inset-0" />
            </div>
          </div>
        );
      })}

      {/* Top Floating Information Overlays (Restrained Network HUD) */}
      <div className="absolute top-3 left-3 right-3 sm:top-3.5 sm:left-4 sm:right-4 z-20 flex items-center justify-between pointer-events-none">
        {/* Live Indicator */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#F4F1EC]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
          </span>
          <span>LIVE CAMPAIGN</span>
        </div>

        {/* Category Badge */}
        <div className="px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[9.5px] sm:text-[10px] font-bold tracking-[0.16em] uppercase text-[#929292]">
          {active.tag}
        </div>
      </div>

      {/* Bottom Floating Sector Quick-Toggle Switcher (All 6 campaigns) */}
      <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-4 sm:right-4 z-20 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1 sm:gap-1.5 bg-black/75 backdrop-blur-md p-1 rounded-lg border border-white/10 max-w-[85%] sm:max-w-none overflow-x-auto scrollbar-none">
          {HERO_CAMPAIGNS.map((camp, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={camp.id}
                type="button"
                onClick={() => onSelectCampaign(idx)}
                className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-bold tracking-wider uppercase transition-all shrink-0 ${
                  isSelected
                    ? 'bg-white/20 text-[#F4F1EC] border border-white/30 shadow-[0_0_12px_rgba(255,255,255,0.15)]'
                    : 'text-[#929292] hover:text-[#F4F1EC]'
                }`}
              >
                {camp.shortLabel}
              </button>
            );
          })}
        </div>

        <div className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[9.5px] font-semibold tracking-[0.16em] uppercase text-[#929292] shrink-0">
          <span>CITY-WIDE</span>
        </div>
      </div>

      {/* Real-time Commercial Countdown Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-20">
        <div
          className="h-full bg-[#D81F42] shadow-[0_0_8px_#ED3153] transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
