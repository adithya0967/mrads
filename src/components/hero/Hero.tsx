'use client';

import React from 'react';
import HeroCopy from './HeroCopy';
import HeroCtaGroup from './HeroCtaGroup';
import BillboardScene from './BillboardScene';
import NetworkIndicator from './NetworkIndicator';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Mr. Ads Hero"
      className="relative min-h-[90vh] lg:min-h-[94vh] flex flex-col justify-between bg-[#080808] text-[#F4F1EC] overflow-hidden pt-8 sm:pt-12 lg:pt-16 pb-8 border-b border-white/[0.08]"
    >
      {/* 1. Atmospheric Ambient Depth (Radial Vignette + Subliminal Crimson Tone) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle crimson glow focused behind the billboard visual on the right */}
        <div className="absolute top-1/3 right-0 w-[550px] lg:w-[750px] h-[550px] lg:h-[750px] bg-[#D81F42]/[0.07] rounded-full blur-[160px]" />
        {/* Very soft slate top glow */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[140px]" />
        {/* Soft edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#080808_95%)]" />
      </div>

      {/* 2. Main Hero Composition Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">
          
          {/* =====================================================================
           * LEFT COLUMN (48% Desktop): Editorial Typography & Conversion Flow
           * ===================================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-8 lg:gap-10">
            <HeroCopy />
            <HeroCtaGroup />
          </div>

          {/* =====================================================================
           * RIGHT COLUMN (52% Desktop): Photorealistic Cinematic Billboard Display
           * ===================================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center w-full">
            <BillboardScene />
            <NetworkIndicator />
          </div>

        </div>
      </div>

      {/* 3. Bottom Centered Scroll Indicator */}
      <div className="relative z-10 pt-8 pb-2 flex justify-center">
        <ScrollIndicator />
      </div>
    </section>
  );
}
