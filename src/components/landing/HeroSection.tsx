'use client';

import React, { useState, useEffect } from 'react';
import { SAMPLE_CAMPAIGNS } from '@/data/billboardAds.data';
import AdCreative from '../signage/AdCreative';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const AD_DURATION_MS = 4500; // 4.5s for dynamic commercial showcase
  const CROSSFADE_MS = 600;

  const totalAds = SAMPLE_CAMPAIGNS.length;
  const activeAd = SAMPLE_CAMPAIGNS[currentIndex % totalAds];
  const upcomingAd = SAMPLE_CAMPAIGNS[(currentIndex + 1) % totalAds];

  // Preload upcoming visual in background to ensure zero black frames
  useEffect(() => {
    if (upcomingAd?.visualUrl) {
      const img = new Image();
      img.src = upcomingAd.visualUrl;
    }
  }, [upcomingAd]);

  // Main playback timer for smooth continuous autonomous rotation
  useEffect(() => {
    const intervalMs = 50;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;

      if (AD_DURATION_MS - elapsed <= CROSSFADE_MS) {
        setIsTransitioning(true);
      }

      if (elapsed >= AD_DURATION_MS) {
        clearInterval(timer);
        setCurrentIndex((prev) => (prev + 1) % totalAds);
        setIsTransitioning(false);
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [currentIndex, totalAds]);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-[#121B2D]/50 blur-3xl"></div>
        <div className="absolute top-40 -left-32 w-[420px] h-[420px] rounded-full dot-grid opacity-40"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 lg:pt-16 pb-10 lg:pb-16 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 reveal in">
            <div className="inline-flex items-center gap-2 bg-[#121B2D] border border-slate-800 rounded-full pl-1.5 pr-4 py-1.5 shadow-card text-[12.5px] font-semibold">
              <span className="bg-brand text-white text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wide">
                MR · MR ADS
              </span>
              <span className="text-slate-200">Hyperlocal Advertising Solutions</span>
            </div>
            <p className="mt-5 text-[12px] font-bold tracking-[.2em] uppercase text-brand">Mr. Ads</p>
            <h1 className="serif text-[40px] sm:text-[52px] lg:text-[58px] leading-[1.03] tracking-tight text-white mt-2">
              Hyperlocal<br />
              Advertising, <span className="italic font-medium text-slate-200">done right.</span>
            </h1>
            <p className="mt-4 text-[16px] sm:text-[17px] font-semibold text-slate-200">
              Connecting Brands with the Right Audience through Innovative Advertising Solutions.
            </p>
            <p className="mt-3 text-slate-400 leading-relaxed max-w-xl text-sm sm:text-base">
              Mr. Ads connects brands with audiences through digital displays, outdoor / moving media, offline distribution, creative services and promotional branding — planned end-to-end, street by street.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                data-cta="Get a Media Plan"
                className="btn-primary inline-flex justify-center items-center gap-2 font-bold px-7 py-4 rounded-full text-[15px]"
              >
                Get a Media Plan <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
              <a
                href="#solutions"
                className="btn-ghost inline-flex justify-center items-center gap-2 font-bold px-7 py-4 rounded-full text-[15px] text-slate-200 hover:text-white"
              >
                Explore Solutions <i className="fa-solid fa-arrow-down text-xs"></i>
              </a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-semibold text-slate-300">
              <span className="flex items-center gap-2">
                <span className="tick bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                  <i className="fa-solid fa-check text-[11px]"></i>
                </span>{' '}
                End-to-end campaign support
              </span>
              <span className="flex items-center gap-2">
                <span className="tick bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                  <i className="fa-solid fa-check text-[11px]"></i>
                </span>{' '}
                Multiple channels, one partner
              </span>
              <span className="flex items-center gap-2">
                <span className="tick bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                  <i className="fa-solid fa-check text-[11px]"></i>
                </span>{' '}
                Repeated local visibility
              </span>
            </div>
            <div className="mt-6 flex items-center gap-4 text-[13px] text-slate-400">
              <a href="tel:+919686544644" className="flex items-center gap-2 font-bold text-slate-200 hover:text-brand">
                <span className="w-9 h-9 rounded-full bg-[#121B2D] border border-slate-800 flex items-center justify-center">
                  <i className="fa-solid fa-phone text-xs text-brand"></i>
                </span>{' '}
                +91 96865 44644
              </a>
              <span className="hidden sm:inline text-slate-700">|</span>
              <a href="mailto:knowus@mr-ads.in" className="hidden sm:flex items-center gap-2 font-semibold text-slate-300 hover:text-brand">
                <i className="fa-regular fa-envelope text-brand"></i> knowus@mr-ads.in
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative reveal in reveal-d1 w-full">
            {/* 4K Commercial DOOH Billboard Enclosure */}
            <div className="w-full p-3 sm:p-4 md:p-5 bg-gradient-to-b from-slate-700 via-slate-800 to-[#0B101D] rounded-[30px] sm:rounded-[40px] border-2 border-slate-600/60 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(255,77,82,0.18)] relative">
              <div className="w-full relative rounded-[20px] sm:rounded-[28px] overflow-hidden border border-slate-900 bg-black aspect-[16/10] shadow-2xl">
                {/* Active Ad Creative Layer */}
                <div
                  key={`hero-active-${activeAd.id}-${currentIndex}`}
                  className={`absolute inset-0 z-10 transition-opacity duration-600 ease-in-out ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <AdCreative campaign={activeAd} isActive={!isTransitioning} />
                </div>

                {/* Upcoming Ad Creative Layer (Prebuffered for 0-flicker crossfade) */}
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
          </div>
        </div>

        {/* trust strip */}
        <div className="mt-12 bg-[#121B2D] border border-slate-800 rounded-2xl shadow-card px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4 reveal in">
          <p className="text-[13px] font-bold tracking-[.14em] uppercase text-slate-400">Where your audience already is</p>
          <div className="marquee max-w-full md:max-w-[70%] text-[13.5px] font-bold text-slate-200">
            <div className="marquee-track">
              <span>Restaurants</span>
              <span className="text-brand">•</span>
              <span>Apartments</span>
              <span className="text-brand">•</span>
              <span>Corporates</span>
              <span className="text-brand">•</span>
              <span>Malls</span>
              <span className="text-brand">•</span>
              <span>Fitness Centres</span>
              <span className="text-brand">•</span>
              <span>Play Zones</span>
              <span className="text-brand">•</span>
              <span>PG & Hostels</span>
              <span className="text-brand">•</span>
              <span>Autos · Cabs · Buses</span>
              <span className="text-brand">•</span>
              <span>Restaurants</span>
              <span className="text-brand">•</span>
              <span>Apartments</span>
              <span className="text-brand">•</span>
              <span>Corporates</span>
              <span className="text-brand">•</span>
              <span>Malls</span>
              <span className="text-brand">•</span>
              <span>Fitness Centres</span>
              <span className="text-brand">•</span>
              <span>Play Zones</span>
              <span className="text-brand">•</span>
              <span>PG & Hostels</span>
              <span className="text-brand">•</span>
              <span>Autos · Cabs · Buses</span>
              <span className="text-brand">•</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


