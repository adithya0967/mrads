'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { SAMPLE_CAMPAIGNS } from '@/data/billboardAds.data';
import AdCreative from '@/components/signage/AdCreative';

const AD_DURATION_MS = 4500;
const CROSSFADE_MS = 600;

const checklist = [
  'End-to-end campaign support',
  'Multiple channels, one partner',
  'Repeated local visibility',
];

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalAds = SAMPLE_CAMPAIGNS.length;
  const activeAd = SAMPLE_CAMPAIGNS[currentIndex % totalAds];
  const upcomingAd = SAMPLE_CAMPAIGNS[(currentIndex + 1) % totalAds];

  useEffect(() => {
    if (upcomingAd?.visualUrl) {
      const img = new Image();
      img.src = upcomingAd.visualUrl;
    }
  }, [upcomingAd]);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (AD_DURATION_MS - elapsed <= CROSSFADE_MS) setIsTransitioning(true);
      if (elapsed >= AD_DURATION_MS) {
        clearInterval(timer);
        setCurrentIndex((prev) => (prev + 1) % totalAds);
        setIsTransitioning(false);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [currentIndex, totalAds]);

  return (
    <section className="border-b border-line bg-ink">
      <div className="container-site py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-sm border border-line bg-graphite py-1.5 pl-1.5 pr-4">
                <span className="rounded-sm bg-brand px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-paper">
                  MR · MR ADS
                </span>
                <span className="text-[12.5px] text-mute">Hyperlocal Advertising Solutions</span>
              </div>

              <p className="eyebrow mt-6">Mr. Ads</p>

              <h1 className="mt-2 font-serif text-[40px] leading-[1.05] tracking-tight text-paper sm:text-[52px] lg:text-[58px]">
                Hyperlocal Advertising, <span className="italic text-mute">done right.</span>
              </h1>

              <p className="mt-5 text-[16px] font-medium text-paper sm:text-[17px]">
                Connecting brands with the right audience through innovative advertising
                solutions.
              </p>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-mute sm:text-[15px]">
                Mr. Ads connects brands with audiences through digital displays, outdoor / moving
                media, offline distribution, creative services and promotional branding — planned
                end-to-end, street by street.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-arrow inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-[14px] font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-brand-hover"
                >
                  Get a Media Plan
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-line px-6 py-3.5 text-[14px] font-medium tracking-wide text-paper transition-colors duration-200 hover:border-mute"
                >
                  Explore Solutions
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M12 5v14" />
                    <path d="m5 12 7 7 7-7" />
                  </svg>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-medium text-mute">
                {checklist.map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-line bg-graphite text-brand">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.08}>
              <div className="rounded-sm border border-line bg-graphite p-3 shadow-soft sm:p-4">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-line bg-black">
                  <div
                    key={`hero-active-${activeAd.id}-${currentIndex}`}
                    className={`absolute inset-0 z-10 transition-opacity duration-600 ease-in-out ${
                      isTransitioning ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <AdCreative campaign={activeAd} isActive={!isTransitioning} />
                  </div>
                  <div
                    key={`hero-upcoming-${upcomingAd.id}`}
                    className={`absolute inset-0 z-0 transition-opacity duration-600 ease-in-out ${
                      isTransitioning ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <AdCreative campaign={upcomingAd} isActive={false} />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
