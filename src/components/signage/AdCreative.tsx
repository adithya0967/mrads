'use client';

import React from 'react';
import { AdCampaign } from '@/data/billboardAds.data';

interface AdCreativeProps {
  campaign: AdCampaign;
  isActive?: boolean;
}

export default function AdCreative({ campaign, isActive = true }: AdCreativeProps) {
  const renderAdCore = () => {
    switch (campaign.layoutVariant) {
      /* =========================================================================
       * 1. TELECOM (AURA 5G)
       * ========================================================================= */
      case 'telecom':
        return (
          <div className="relative z-10 w-full h-full flex flex-col justify-between p-5 sm:p-8 lg:p-10 text-white">
            {/* Minimal Brand Identity */}
            <div className="flex items-center gap-3 animate-ad-fade-up">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-400 text-black flex items-center justify-center font-black text-base sm:text-lg shadow-[0_0_20px_rgba(0,240,255,0.7)]">
                ▲
              </div>
              <div>
                <span className="text-lg sm:text-2xl font-black tracking-widest leading-none font-sans block text-white drop-shadow">
                  {campaign.brandName}
                </span>
                <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.25em] text-cyan-300 block uppercase mt-0.5">
                  {campaign.brandSub || '5G'}
                </span>
              </div>
            </div>

            {/* Bold Headline & Single Punchy CTA */}
            <div className="max-w-xl mt-auto pb-2">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] animate-ad-fade-up-d1">
                {campaign.headline}
              </h2>

              <div className="mt-4 sm:mt-5 flex items-center gap-4 animate-ad-fade-up-d2">
                <div className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all">
                  <span>{campaign.ctaText}</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </div>
              </div>
            </div>
          </div>
        );

      /* =========================================================================
       * 2. LUXURY FASHION (ATELIER VENDÔME)
       * ========================================================================= */
      case 'fashion':
        return (
          <div className="relative z-10 w-full h-full flex flex-col justify-between p-5 sm:p-8 lg:p-10 text-white">
            {/* Top Brand Wordmark */}
            <div className="text-center pt-2 animate-ad-fade-up">
              <span className="text-[10px] sm:text-xs tracking-[0.45em] font-medium text-amber-200/90 uppercase block font-sans">
                {campaign.brandSub || 'PARIS'}
              </span>
              <h1 className="serif text-xl sm:text-3xl font-normal tracking-[0.25em] text-white uppercase mt-1 drop-shadow-md">
                {campaign.brandName}
              </h1>
            </div>

            {/* Centered Editorial Statement */}
            <div className="max-w-lg mx-auto text-center my-auto">
              <h2 className="serif text-2xl sm:text-4xl lg:text-5xl font-light tracking-wide text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] animate-ad-fade-up-d1">
                {campaign.headline}
              </h2>

              <div className="mt-4 sm:mt-5 inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-amber-300/40 text-amber-100 font-medium text-xs tracking-[0.2em] uppercase transition shadow-[0_0_20px_rgba(212,175,55,0.2)] animate-ad-fade-up-d2">
                {campaign.ctaText}
              </div>
            </div>

            <div className="h-4"></div>
          </div>
        );

      /* =========================================================================
       * 3. AUTOMOTIVE EV (VALENCE MOTORWERKS)
       * ========================================================================= */
      case 'automotive':
        return (
          <div className="relative z-10 w-full h-full flex flex-col justify-between p-5 sm:p-8 lg:p-10 text-white">
            {/* Minimal Brand Badge */}
            <div className="flex items-center gap-3 animate-ad-fade-up">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-rose-600 flex items-center justify-center font-black text-white text-base shadow-[0_0_20px_rgba(255,56,92,0.8)]">
                V
              </div>
              <div>
                <span className="text-lg sm:text-2xl font-black tracking-widest uppercase leading-none block text-white drop-shadow">
                  {campaign.brandName}
                </span>
                <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.25em] text-rose-400 block uppercase mt-0.5">
                  {campaign.brandSub || 'ELECTRIC GT'}
                </span>
              </div>
            </div>

            {/* Performance Headline & Button */}
            <div className="max-w-xl mt-auto pb-2">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] animate-ad-fade-up-d1">
                {campaign.headline}
              </h2>

              <div className="mt-4 sm:mt-5 flex items-center gap-4 animate-ad-fade-up-d2">
                <div className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-black text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 shadow-[0_0_30px_rgba(255,56,92,0.6)] transition-all">
                  <span>{campaign.ctaText}</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </div>
              </div>
            </div>
          </div>
        );

      /* =========================================================================
       * 4. ARTISANAL COFFEE & ROASTERY (ROAST & ORIGIN)
       * ========================================================================= */
      case 'culinary':
        return (
          <div className="relative z-10 w-full h-full flex flex-col justify-between p-5 sm:p-7 lg:p-8 text-white">
            {/* Minimal Brand Lockup */}
            <div className="flex items-center gap-2.5 animate-ad-fade-up">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-amber-400/80 bg-stone-950/80 flex items-center justify-center text-amber-400 text-xs shadow-[0_0_15px_rgba(230,156,36,0.5)]">
                <i className="fa-solid fa-utensils text-[10px]"></i>
              </div>
              <div>
                <span className="text-xs sm:text-sm font-black tracking-widest leading-none block text-amber-100 uppercase">
                  {campaign.brandName}
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.2em] text-amber-400/90 block uppercase mt-0.5">
                  {campaign.brandSub || 'GOURMET DINING'}
                </span>
              </div>
            </div>

            {/* Sensory Headline & CTA */}
            <div className="max-w-xl mt-auto pb-1">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] animate-ad-fade-up-d1">
                {campaign.headline}
              </h2>
              {campaign.subheadline && (
                <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-slate-200 font-medium max-w-md drop-shadow line-clamp-2">
                  {campaign.subheadline}
                </p>
              )}

              <div className="mt-3 sm:mt-4 flex items-center gap-3 animate-ad-fade-up-d2">
                <div className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-[11px] sm:text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-[0_0_25px_rgba(230,156,36,0.6)] transition-all">
                  <span>{campaign.ctaText}</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </div>
                {campaign.locationOrTag && (
                  <span className="text-[10px] sm:text-xs font-semibold text-white/80 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10 hidden sm:inline-block">
                    📍 {campaign.locationOrTag}
                  </span>
                )}
              </div>
            </div>
          </div>
        );

      /* =========================================================================
       * 5. CONSUMER ELECTRONICS (SONIQ STUDIO)
       * ========================================================================= */
      case 'electronics':
        return (
          <div className="relative z-10 w-full h-full flex flex-col justify-between p-5 sm:p-8 lg:p-10 text-white">
            {/* Tech Brand Identity */}
            <div className="flex items-center gap-3 animate-ad-fade-up">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-sky-500/20 border border-sky-400/50 flex items-center justify-center text-sky-400 font-black text-sm shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                <i className="fa-solid fa-wave-square"></i>
              </div>
              <div>
                <span className="text-lg sm:text-2xl font-black tracking-wider leading-none block text-white">
                  {campaign.brandName}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-sky-400 block uppercase mt-0.5">
                  {campaign.brandSub || 'STUDIO AUDIO'}
                </span>
              </div>
            </div>

            {/* Audio Headline & Action */}
            <div className="max-w-xl mt-auto pb-2">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] animate-ad-fade-up-d1">
                {campaign.headline}
              </h2>

              <div className="mt-4 sm:mt-5 flex items-center gap-4 animate-ad-fade-up-d2">
                <div className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all">
                  <span>{campaign.ctaText}</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </div>
              </div>
            </div>
          </div>
        );

      /* =========================================================================
       * 6. LUXURY TRAVEL & RESORT (AZURE HORIZONS)
       * ========================================================================= */
      case 'hospitality':
      default:
        return (
          <div className="relative z-10 w-full h-full flex flex-col justify-between p-5 sm:p-8 lg:p-10 text-white">
            {/* Brand Sanctuary */}
            <div className="animate-ad-fade-up">
              <span className="text-[9px] sm:text-[11px] tracking-[0.35em] text-teal-300 uppercase block font-semibold">
                {campaign.brandSub || 'MALDIVES'}
              </span>
              <span className="serif text-lg sm:text-2xl font-normal tracking-widest uppercase text-white block mt-0.5">
                {campaign.brandName}
              </span>
            </div>

            {/* Tranquil Statement & Action */}
            <div className="max-w-xl mt-auto pb-2">
              <h2 className="serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-wide text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] animate-ad-fade-up-d1">
                {campaign.headline}
              </h2>

              <div className="mt-4 sm:mt-5 flex items-center gap-4 animate-ad-fade-up-d2">
                <div className="px-5 py-2.5 rounded-full bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs sm:text-sm tracking-widest uppercase flex items-center gap-2 shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all">
                  <span>{campaign.ctaText}</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-black select-none">
      {/* High-Impact Visual Photography Layer with Cinematic Motion */}
      <img
        src={campaign.visualUrl}
        alt={campaign.visualAlt}
        className={`absolute inset-0 w-full h-full object-cover transform ${
          isActive ? 'animate-slow-ken-burns' : 'scale-100'
        }`}
      />

      {/* Cinematic Contrast Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent"></div>

      {/* Specular Light Sheen */}
      <div className="pointer-events-none absolute -inset-full w-[250%] h-[250%] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-specular-sweep"></div>

      {/* Brand Ambient Glow */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-[140px] opacity-40"
        style={{ backgroundColor: campaign.accentColor }}
      ></div>

      {/* Clean Billboard Creative */}
      {renderAdCore()}

      {/* ---------------------------------------------------------------------
       * MR ADS BRANDING IN THE BOTTOM CORNER (Just the text)
       * --------------------------------------------------------------------- */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex flex-col bg-[#080C14]/70 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.6)] pointer-events-none select-none">
        <span className="text-[11px] sm:text-xs font-black text-white tracking-widest leading-none">
          MR ADS
        </span>
        <span className="text-[8.5px] font-bold text-slate-300 tracking-wider uppercase leading-tight mt-0.5">
          HYPERLOCAL NETWORK
        </span>
      </div>
    </div>
  );
}
