'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MOVING_MEDIA = [
  {
    id: 'auto',
    title: 'Auto Branding',
    tagline: 'HYPERLOCAL NEIGHBORHOOD REACABILITY',
    description: 'High-density urban street penetration. Auto hood, side panel, and back hood wrap branding traversing dense city routes daily.',
    reach: '15,000+ Impressions/Day',
    vehicleIcon: '🛺',
    bgGradient: 'from-amber-950/80 via-zinc-900 to-black',
    accentColor: '#F59E0B',
    adVisual: 'FULL REAR HOOD BRANDING • HIGH TRAFFIC DENSITY',
  },
  {
    id: 'cab',
    title: 'Cab Branding',
    tagline: 'PREMIUM CITY-WIDE MOBILITY',
    description: 'Wrap top rideshare and premium cab fleets moving through tech corridors, airport runs, luxury hotel belts, and business districts.',
    reach: '25,000+ Impressions/Day',
    vehicleIcon: '🚕',
    bgGradient: 'from-yellow-950/80 via-zinc-900 to-black',
    accentColor: '#EAB308',
    adVisual: 'FULL WRAP MOBILITY • AIRPORT & TECH PARK ROUTES',
  },
  {
    id: 'bus',
    title: 'Bus Branding',
    tagline: 'MASS SCALE URBAN DOMINANCE',
    description: 'Gigantic moving billboards traversing major city arteries, arterial highways, bus terminals, and high-footfall transit zones.',
    reach: '75,000+ Daily Views',
    vehicleIcon: '🚌',
    bgGradient: 'from-blue-950/80 via-zinc-900 to-black',
    accentColor: '#3B82F6',
    adVisual: 'KING-SIZE SIDE WRAP • UNMISSABLE HIGHWAY IMPACT',
  },
  {
    id: 'mobile-van',
    title: 'Mobile LED Vans',
    tagline: 'DYNAMIC HIGH-TECH ROADSHOWS',
    description: 'High-brightness hydraulic 3D LED screens mounted on customized promotional vans targeting events, markets, and launch zones.',
    reach: 'Custom Route Targeting',
    vehicleIcon: '🚐',
    bgGradient: 'from-purple-950/80 via-zinc-900 to-black',
    accentColor: '#A855F7',
    adVisual: '3D DYNAMIC HYDRAULIC LED VIDEO SCREEN',
  },
  {
    id: 'bus-shelter',
    title: 'Bus Shelter Branding',
    tagline: 'HIGH DWELL TIME TRANSIT STATIONS',
    headline: 'Prime Commuter Waiting Spots',
    description: 'Backlit high-definition displays at busy bus shelters, capturing commuters and pedestrian traffic during peak morning and evening hours.',
    reach: '30,000+ Daily Commuters',
    vehicleIcon: '🚏',
    bgGradient: 'from-emerald-950/80 via-zinc-900 to-black',
    accentColor: '#10B981',
    adVisual: 'BACKLIT HIGH-DEF ILLUMINATED TOTEM',
  },
  {
    id: 'road-shows',
    title: 'Road Shows & Promo Vehicles',
    tagline: 'INTERACTIVE EXPERIENTIAL MARKETING',
    description: 'Fully customized promotional floats, brand sampling vehicles, and experiential roadshows engaging shoppers on location.',
    reach: 'Direct Consumer Engagement',
    vehicleIcon: '🚚',
    bgGradient: 'from-pink-950/80 via-zinc-900 to-black',
    accentColor: '#EC4899',
    adVisual: 'EXPERIENTIAL PROMOTIONAL VEHICLE CANOPY',
  },
];

export default function AdvertisingOnTheMove() {
  const [activeMedia, setActiveMedia] = useState(MOVING_MEDIA[0]);

  return (
    <section className="relative py-32 bg-[#040507] text-white overflow-hidden border-t border-white/10">
      {/* Background Animated Motion Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-black uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              Dynamic Urban Mobility
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-white leading-none">
              ADVERTISING <span className="text-[#3B82F6]">ON THE MOVE</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base font-semibold uppercase tracking-widest max-w-sm">
            MOVING BRAND VISIBILITY ACROSS HIGH-TRAFFIC URBAN LOCATIONS
          </p>
        </div>

        {/* Moving Vehicles Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Navigation Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {MOVING_MEDIA.map((item) => {
              const isSelected = item.id === activeMedia.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveMedia(item)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-950 via-slate-900 to-black border-blue-500/60 shadow-xl shadow-blue-600/20 translate-x-2'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl p-2.5 rounded-xl bg-white/10">{item.vehicleIcon}</span>
                    <div>
                      <h3 className="text-lg font-black text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        {item.reach}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`w-3 h-3 rounded-full transition-transform duration-300 ${
                      isSelected ? 'scale-125' : 'scale-75 opacity-30'
                    }`}
                    style={{ backgroundColor: item.accentColor }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Interactive Vehicle Canvas */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMedia.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className={`h-full min-h-[480px] rounded-3xl p-8 md:p-12 bg-gradient-to-br ${activeMedia.bgGradient} border border-white/20 shadow-2xl flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Glowing Light Streak FX */}
                <div
                  className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-40 animate-pulse"
                  style={{ backgroundColor: activeMedia.accentColor }}
                />

                {/* Top Badge */}
                <div className="flex items-center justify-between relative z-10">
                  <span
                    className="text-xs font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full bg-white/10 border border-white/20"
                    style={{ color: activeMedia.accentColor }}
                  >
                    {activeMedia.tagline}
                  </span>
                  <span className="text-4xl">{activeMedia.vehicleIcon}</span>
                </div>

                {/* Middle Vehicle Visual Container */}
                <div className="my-8 relative z-10">
                  <div className="w-full h-44 rounded-2xl bg-black/80 border border-white/15 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl group">
                    {/* Road Motion Lines */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.05)_20px,rgba(255,255,255,0.05)_40px)] animate-[pulse_2s_infinite]" />

                    <span className="text-4xl mb-2">{activeMedia.vehicleIcon}</span>
                    <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                      {activeMedia.adVisual}
                    </h4>
                    <span className="text-xs font-bold text-slate-400 mt-2">
                      Moving across high-traffic city corridors & arterial routes
                    </span>
                  </div>
                </div>

                {/* Bottom Info Description */}
                <div className="relative z-10 border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="max-w-md">
                    <p className="text-slate-200 text-sm font-medium leading-relaxed">
                      {activeMedia.description}
                    </p>
                  </div>
                  <div className="bg-white/10 px-5 py-3 rounded-xl border border-white/10 shrink-0">
                    <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">ESTIMATED REACH</div>
                    <div className="text-sm font-black text-white" style={{ color: activeMedia.accentColor }}>
                      {activeMedia.reach}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
