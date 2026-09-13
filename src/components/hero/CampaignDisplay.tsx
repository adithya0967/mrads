'use client';

import React, { useState, useEffect, useRef } from 'react';
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
}

export default function CampaignDisplay({
  currentIndex,
}: CampaignDisplayProps) {
  const [activeIdx, setActiveIdx] = useState(currentIndex);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isInitial = useRef(true);

  // Handle smooth transition animation whenever currentIndex changes
  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }

    if (currentIndex !== activeIdx) {
      setPrevIdx(activeIdx);
      setActiveIdx(currentIndex);
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setPrevIdx(null);
      }, 1150);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, activeIdx]);

  // Prebuffer upcoming images to ensure zero flicker
  useEffect(() => {
    const nextIdx = (currentIndex + 1) % HERO_CAMPAIGNS.length;
    const img = new window.Image();
    img.src = HERO_CAMPAIGNS[nextIdx].imageUrl;
  }, [currentIndex]);

  // Alternate between deep zoom push-in and cinematic zoom pull-back for variety
  const isZoomPush = activeIdx % 2 === 1;

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-black">
      {/* Campaign Image Slides with Seamless Cinematic Zoom Transition Animation */}
      {HERO_CAMPAIGNS.map((camp, idx) => {
        const isIncoming = isTransitioning && idx === activeIdx;
        const isOutgoing = isTransitioning && idx === prevIdx;
        const isStaticActive = !isTransitioning && idx === activeIdx;

        if (!isIncoming && !isOutgoing && !isStaticActive) {
          return null;
        }

        let animationClasses = '';
        if (isIncoming) {
          animationClasses = `z-20 ${isZoomPush ? 'animate-billboard-push-in' : 'animate-billboard-pull-in'}`;
        } else if (isOutgoing) {
          animationClasses = `z-10 ${isZoomPush ? 'animate-billboard-push-out' : 'animate-billboard-pull-out'}`;
        } else {
          animationClasses = 'z-10 opacity-100';
        }

        return (
          <div
            key={`${camp.id}-${idx === activeIdx ? 'active' : 'outgoing'}`}
            className={`absolute inset-0 overflow-hidden ${animationClasses}`}
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
            </div>
          </div>
        );
      })}

      {/* Subtle Ambient Lens Bloom Flash during Transition */}
      {isTransitioning && (
        <div className="absolute inset-0 pointer-events-none z-25 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] transition-opacity duration-1000" />
      )}

      {/* Realistic Physical LED Mesh Subpixel Texture (Fixed over glass) */}
      <div className="screen-mesh absolute inset-0 opacity-40 z-15 pointer-events-none" />

      {/* Realistic Screen Glass Reflection Highlight (Fixed over glass) */}
      <div className="screen-glare absolute inset-0 z-15 pointer-events-none" />

      {/* Top Left: Live Broadcast Indicator */}
      <div className="absolute top-3 left-3 sm:top-3.5 sm:left-4 z-20 pointer-events-none select-none">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#F4F1EC] shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
          </span>
          <span>LIVE CAMPAIGN</span>
        </div>
      </div>

      {/* Bottom Right: MR ADS DOOH Network Branding */}
      <div className="absolute bottom-3 right-3 sm:bottom-3.5 sm:right-4 z-20 pointer-events-none select-none">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/12 text-[#F4F1EC] shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          <div className="relative flex items-center justify-center w-3.5 h-3.5 rounded bg-white/[0.08] border border-white/20">
            <span className="font-serif text-[10px] font-bold text-[#F4F1EC] leading-none">M</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#D81F42] shadow-[0_0_6px_#D81F42]"></span>
          </div>
          <span className="font-sans text-[10px] sm:text-[10.5px] font-extrabold tracking-[0.16em] uppercase text-[#F4F1EC]">
            MR. ADS
          </span>
        </div>
      </div>
    </div>
  );
}
