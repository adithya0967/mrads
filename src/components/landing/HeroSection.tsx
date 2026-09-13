'use client';

import React, { useState, useEffect } from 'react';
import { SAMPLE_CAMPAIGNS } from '@/data/billboardAds.data';
import AdCreative from '../signage/AdCreative';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

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

  // Main playback timer & smooth progress countdown bar
  useEffect(() => {
    const intervalMs = 40;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, (elapsed / AD_DURATION_MS) * 100);
      setProgress(currentProgress);

      if (AD_DURATION_MS - elapsed <= CROSSFADE_MS) {
        setIsTransitioning(true);
      }

      if (elapsed >= AD_DURATION_MS) {
        clearInterval(timer);
        setCurrentIndex((prev) => (prev + 1) % totalAds);
        setIsTransitioning(false);
        setProgress(0);
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [currentIndex, totalAds]);

  const handleSelectCampaign = (index: number) => {
    if (index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
      setProgress(0);
    }, 200);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink pt-8 lg:pt-14 pb-12 lg:pb-16 border-b border-line"
    >
      {/* Subtle Warm Atmospheric Background Lighting (Seamless with website theme) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-5 w-[650px] h-[650px] rounded-full bg-brand/10 blur-[150px]" />
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-graphite/60 blur-3xl" />
        <div className="absolute top-36 left-1/3 w-[500px] h-[500px] rounded-full dot-grid opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* =========================================================================
           * LEFT COLUMN: Punchy Value Proposition & Conversion Controls
           * ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Eyebrow Pill Badge (Red outline with glowing beacon) */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/40 shadow-[0_0_20px_rgba(196,30,58,0.2)] w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-hover opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-hover">
                Bengaluru&apos;s Premium Advertising Network
              </span>
            </div>

            {/* Main Headline (Bold, Two-Tone Impactful Sans-Serif) */}
            <h1 className="text-[36px] sm:text-[50px] lg:text-[58px] font-black leading-[1.05] tracking-tight text-paper">
              Reach Customers <br />
              <span className="bg-gradient-to-r from-brand-hover via-brand to-[#ff5d7a] bg-clip-text text-transparent">
                Where They Live, Work & Dine
              </span>
            </h1>

            {/* Subtitle Value Proposition */}
            <p className="text-[15px] sm:text-[17px] text-paper/85 font-normal leading-relaxed max-w-xl">
              Mr. Ads connects brands with high-intent audiences across Bengaluru through 30,000+
              digital screens, transit media, Q-commerce inserts, corporate gifting, and bespoke
              digital solutions.
            </p>

            {/* Feature / Channel Highlight Chips */}
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite border border-line text-xs font-semibold text-paper shadow-sm transition hover:border-line-soft">
                <span className="w-2 h-2 rounded-full bg-brand"></span>
                30,000+ Active Screens
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite border border-line text-xs font-semibold text-paper shadow-sm transition hover:border-line-soft">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Zepto & Instamart Inserts
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite border border-line text-xs font-semibold text-paper shadow-sm transition hover:border-line-soft">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                Transit & Tech Parks
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite border border-line text-xs font-semibold text-paper shadow-sm transition hover:border-line-soft">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Gifting & Digital Solutions
              </span>
            </div>

            {/* CTA Group: Primary Pill + Ghost Pill + Direct WhatsApp */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 font-bold px-7 py-3.5 rounded-full text-[14px] uppercase tracking-wider text-paper bg-brand hover:bg-brand-hover shadow-[0_0_25px_rgba(196,30,58,0.4)] hover:shadow-[0_0_35px_rgba(196,30,58,0.6)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Plan Your Campaign</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-full text-[14px] uppercase tracking-wider text-paper hover:text-white border border-line bg-graphite hover:bg-slate hover:border-line-soft hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Our Network</span>
                <i className="fa-solid fa-arrow-down text-xs"></i>
              </a>

              <a
                href="https://wa.me/919686544644?text=Hi%2C%20I%27m%20interested%20in%20advertising%20with%20Mr.%20Ads.%20Please%20share%20available%20locations%2C%20pricing%2C%20and%20slot%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold px-5 py-3.5 rounded-full text-[14px] text-[#25D366] border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366]/20 hover:border-[#25D366]/60 transition-all duration-200"
                title="Chat directly on WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>

            {/* Trust Micro-Indicators */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-mute pt-1">
              <span className="flex items-center gap-1.5 text-paper/90 font-medium">
                <i className="fa-solid fa-circle-check text-emerald-400 text-xs"></i>
                Verified Footfall Attribution
              </span>
              <span className="text-line hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-paper/90 font-medium">
                <i className="fa-solid fa-circle-check text-emerald-400 text-xs"></i>
                Rapid 24-48h Slot Activation
              </span>
              <span className="text-line hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-paper/90 font-medium">
                <i className="fa-solid fa-circle-check text-emerald-400 text-xs"></i>
                Street-by-Street Planning
              </span>
            </div>
          </div>

          {/* =========================================================================
           * RIGHT COLUMN: Next-Gen Smart DOOH Display Kiosk & Live Metrics Console
           * ========================================================================= */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center">
            {/* Interactive Sector Switcher Pills (Allows visitor to preview formats) */}
            <div className="w-full flex items-center justify-between gap-1 mb-2.5 px-1 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[10px] font-bold tracking-wider uppercase text-mute shrink-0 mr-1">
                Preview:
              </span>
              <div className="flex items-center gap-1.5">
                {SAMPLE_CAMPAIGNS.slice(0, 5).map((camp, idx) => {
                  const isSelected = currentIndex % totalAds === idx;
                  const label =
                    camp.layoutVariant === 'culinary' && camp.brandName.includes('BISTRO')
                      ? 'Dining'
                      : camp.layoutVariant === 'telecom'
                        ? '5G'
                        : camp.layoutVariant === 'fashion'
                          ? 'Luxury'
                          : camp.layoutVariant === 'automotive'
                            ? 'Auto'
                            : 'Coffee';

                  return (
                    <button
                      key={camp.id}
                      type="button"
                      onClick={() => handleSelectCampaign(idx)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                        isSelected
                          ? 'bg-brand text-paper shadow-[0_0_12px_rgba(196,30,58,0.5)]'
                          : 'bg-graphite text-mute hover:text-paper border border-line'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Smart DOOH Screen Enclosure (Carbon Graphite Bezel matching website aesthetic) */}
            <div className="w-full p-2.5 sm:p-3.5 bg-gradient-to-b from-[#242424] via-graphite to-ink rounded-[26px] sm:rounded-[34px] border-2 border-line shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(196,30,58,0.15)] relative">
              {/* Inner Digital Screen */}
              <div className="w-full relative rounded-[18px] sm:rounded-[24px] overflow-hidden border border-line-soft bg-black aspect-[16/10] shadow-2xl">
                {/* Top HUD Floating Overlays ([● LIVE] & [GOURMET DINING]) */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 flex items-center gap-2 pointer-events-none">
                  <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full shadow-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-85"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-black tracking-widest text-emerald-300 uppercase leading-none">
                      LIVE
                    </span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 pointer-events-none">
                  <div className="flex items-center gap-1.5 bg-emerald-950/85 backdrop-blur-md border border-emerald-500/40 px-3 py-1 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <span className="text-[9.5px] sm:text-[10.5px] font-extrabold tracking-wider text-emerald-300 uppercase leading-none">
                      {activeAd.badge || activeAd.brandSub || 'GOURMET DINING'}
                    </span>
                  </div>
                </div>

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

                {/* Real-Time Commercial Progress Countdown Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/15 z-30 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 via-brand-hover to-brand transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* =========================================================================
             * LIVE NETWORK METRICS DOCK (Docked beneath screen in website graphite/line theme)
             * ========================================================================= */}
            <div className="w-full mt-3.5 bg-graphite/95 backdrop-blur-md border border-line rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/80">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 items-center">
                {/* Metric 1: Active Screens + Online Now Pulse */}
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-mute">
                    ACTIVE SCREENS
                  </span>
                  <div className="mt-1 flex items-center gap-2 flex-wrap">
                    <span className="text-xl sm:text-2xl font-black tracking-tight text-paper">
                      30,000+
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-[9.5px] font-bold text-emerald-400 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      ONLINE NOW
                    </span>
                  </div>
                </div>

                {/* Metric 2: Combined Reach in Brand Accent */}
                <div className="border-l border-line pl-3.5 sm:pl-5 flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-mute">
                    COMBINED REACH
                  </span>
                  <div className="mt-1 flex items-baseline">
                    <span className="text-xl sm:text-2xl font-black tracking-tight text-brand-hover">
                      20M+
                    </span>
                    <span className="ml-1.5 text-[11px] font-medium text-mute hidden sm:inline">
                      / month
                    </span>
                  </div>
                </div>

                {/* Metric 3: Bengaluru Key Hubs */}
                <div className="hidden sm:flex border-l border-line pl-3.5 sm:pl-5 flex-col">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-mute">
                    KEY HUBS
                  </span>
                  <div className="mt-1 flex items-baseline">
                    <span className="text-xl sm:text-2xl font-black tracking-tight text-paper">
                      450+
                    </span>
                    <span className="ml-1.5 text-[11px] font-medium text-mute">Bengaluru</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
         * BENGALURU TOUCHPOINTS MARQUEE TICKER (Physical Footprint Anchor)
         * ========================================================================= */}
        <div className="mt-12 bg-graphite border border-line rounded-2xl shadow-card px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-brand"></span>
            <p className="text-[12px] font-bold tracking-[.16em] uppercase text-mute">
              Where your audience already is
            </p>
          </div>

          <div className="marquee max-w-full md:max-w-[70%] text-[13px] sm:text-[13.5px] font-bold text-paper">
            <div className="marquee-track">
              <span>Fine Dining & Rooftops</span>
              <span className="text-brand">•</span>
              <span>Gated Communities</span>
              <span className="text-brand">•</span>
              <span>Tech Parks & Corporates</span>
              <span className="text-brand">•</span>
              <span>Prime Malls</span>
              <span className="text-brand">•</span>
              <span>Fitness Centers</span>
              <span className="text-brand">•</span>
              <span>Play Zones & Arenas</span>
              <span className="text-brand">•</span>
              <span>Zepto & Instamart Bags</span>
              <span className="text-brand">•</span>
              <span>Autos, Cabs & Transit</span>
              <span className="text-brand">•</span>
              <span>Indiranagar & Koramangala</span>
              <span className="text-brand">•</span>
              <span>Whitefield & HSR</span>
              <span className="text-brand">•</span>
              <span>Lavelle Road & UB City</span>
              <span className="text-brand">•</span>
              <span>Fine Dining & Rooftops</span>
              <span className="text-brand">•</span>
              <span>Gated Communities</span>
              <span className="text-brand">•</span>
              <span>Tech Parks & Corporates</span>
              <span className="text-brand">•</span>
              <span>Prime Malls</span>
              <span className="text-brand">•</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
