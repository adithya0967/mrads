'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ENVIRONMENTS = [
  {
    id: 'restaurants',
    name: 'Restaurants',
    tagline: 'REACH CUSTOMERS WHERE THEY DINE',
    headline: 'High-Intent Dining & Leisure Engagement',
    description: 'Position your brand in front of affluent diners during 45+ minute captive dwell times in premium restaurants and waiting lounges.',
    stats: ['45+ Mins Dwell Time', 'High-Intent Audiences', 'Daily Exposure'],
    bgGradient: 'from-amber-950 via-[#1c120c] to-zinc-950',
    borderColor: 'border-amber-500/30',
    accentColor: '#F59E0B',
    badge: 'FINE DINING & LOUNGES',
    icon: '🍽️',
    screenContent: {
      headline: 'PREMIUM AUTOMOTIVE',
      sub: 'Drive Luxury. Reserve Your Test Drive Today.',
      location: 'FINE DINING DIGITAL SCREEN #12',
    },
  },
  {
    id: 'apartments',
    name: 'Apartments',
    tagline: 'REACH HOUSEHOLDS WHERE THEY LIVE',
    headline: 'Repeated Exposure at Residential Lobbies & Elevators',
    description: 'Capture daily attention as residents enter lobbies and ride elevators in premium residential high-rises and gated communities.',
    stats: ['4-6 Views/Day', '100% Household Reach', 'High Brand Recall'],
    bgGradient: 'from-purple-950 via-[#160c1d] to-zinc-950',
    borderColor: 'border-purple-500/30',
    accentColor: '#A855F7',
    badge: 'RESIDENTIAL HIGH-RISES',
    icon: '🏢',
    screenContent: {
      headline: 'ORGANIC GROCERY DIRECT',
      sub: 'Fresh Farm Produce Delivered to Your Doorstep.',
      location: 'ELEVATOR LOBBY DISPLAY #04',
    },
  },
  {
    id: 'corporate',
    name: 'Corporate Spaces',
    tagline: 'REACH DECISION-MAKERS AT WORK',
    headline: 'Engage Working Professionals in Tech & Business Parks',
    description: 'Target high-earning decision-makers, executives, and corporate teams in glass office towers and business hubs.',
    stats: ['Executive Audience', 'Tech & Business Parks', 'High Purchasing Power'],
    bgGradient: 'from-blue-950 via-[#0a1526] to-zinc-950',
    borderColor: 'border-blue-500/30',
    accentColor: '#3B82F6',
    badge: 'TECH PARKS & TOWERS',
    icon: '💼',
    screenContent: {
      headline: 'ENTERPRISE AI CLOUD',
      sub: 'Transform Business Intelligence in Seconds.',
      location: 'RECEPTION TOWER VIDEO WALL',
    },
  },
  {
    id: 'malls',
    name: 'Shopping Malls',
    tagline: 'REACH AUDIENCES WHILE THEY SHOP',
    headline: 'High-Footfall Purchase Influence Totems',
    description: 'Impact shoppers at key point-of-sale moments across multi-level digital totems, retail concourses, and food courts.',
    stats: ['50,000+ Daily Footfall', 'High Shopper Intent', 'Point-of-Purchase Influence'],
    bgGradient: 'from-emerald-950 via-[#0b1e16] to-zinc-950',
    borderColor: 'border-emerald-500/30',
    accentColor: '#10B981',
    badge: 'RETAIL & ENTERTAINMENT',
    icon: '🛍️',
    screenContent: {
      headline: 'PREMIUM FASHION FESTIVAL',
      sub: 'Flat 40% Off on International Luxury Brands.',
      location: 'MALL CONCOURSE TOTEM #08',
    },
  },
  {
    id: 'fitness',
    name: 'Fitness Spaces',
    tagline: 'CONNECT WITH ACTIVE URBAN CONSUMERS',
    headline: 'High Energy Fitness & Wellness Screens',
    description: 'Engage health-conscious, active consumers on workout floors, cardio zones, and reception lounges.',
    stats: ['Active Urban Demographics', 'High Engagement', 'Health & Lifestyle Focus'],
    bgGradient: 'from-[#1e1b4b] via-[#100f2e] to-zinc-950',
    borderColor: 'border-indigo-500/30',
    accentColor: '#6366F1',
    badge: 'FITNESS & WELLNESS SPACES',
    icon: '🏋️',
    screenContent: {
      headline: 'HYDRATION & NUTRITION',
      sub: 'Fuel Your Performance. Zero Sugar Electrolytes.',
      location: 'WORKOUT FLOOR SCREEN #02',
    },
  },
  {
    id: 'play-zones',
    name: 'Play Zones',
    tagline: 'REACH FAMILIES IN HIGH-ENGAGEMENT HUBS',
    headline: 'Engage Parents & Families in Indoor Entertainment',
    description: 'Connect with families and parents enjoying extended weekend visits at indoor play parks and family centers.',
    stats: ['Family & Kids Focus', 'Long Weekend Dwell', 'High Parent Recall'],
    bgGradient: 'from-pink-950 via-[#1f0b18] to-zinc-950',
    borderColor: 'border-pink-500/30',
    accentColor: '#EC4899',
    badge: 'FAMILY ENTERTAINMENT',
    icon: '🎡',
    screenContent: {
      headline: 'KIDS ROBOTICS ACADEMY',
      sub: 'Unlock Your Child’s Genius. Book Free Trial.',
      location: 'FAMILY LOUNGE DISPLAY #01',
    },
  },
  {
    id: 'pg-hostels',
    name: 'PG & Hostels',
    tagline: 'REACH STUDENTS & YOUNG PROFESSIONALS',
    headline: 'Direct Access to Gen-Z & Millennial Communities',
    description: 'Influence young urban migrants, college students, and tech professionals in co-living lounges and PG spaces.',
    stats: ['Gen-Z & Millennial Audience', 'Co-Living Hubs', 'High Daily Frequency'],
    bgGradient: 'from-cyan-950 via-[#0a1a24] to-zinc-950',
    borderColor: 'border-cyan-500/30',
    accentColor: '#06B6D4',
    badge: 'CO-LIVING & STUDENT HUBS',
    icon: '🎓',
    screenContent: {
      headline: 'QUICK MEAL SUBSCRIPTION',
      sub: 'Delicious Chef-Prepared Meals Delivered Fast.',
      location: 'CO-LIVING COMMON LOUNGE',
    },
  },
];

export default function DisplayAdvertisingSection() {
  const [activeTab, setActiveTab] = useState(ENVIRONMENTS[0].id);

  const activeEnv = ENVIRONMENTS.find((e) => e.id === activeTab) || ENVIRONMENTS[0];

  return (
    <section id="media" className="relative py-32 bg-[#060709] text-white overflow-hidden border-t border-white/10">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/10 blur-[180px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            Real-World Indoor Venues
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-white leading-none mb-6">
            DISPLAY <span className="text-[#A855F7]">ADVERTISING</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            Position your brand inside high-intent, targeted indoor environments where your ideal customers spend significant dwell time every single day.
          </p>
        </div>

        {/* Environment Filter Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 scrollbar-none mb-12">
          {ENVIRONMENTS.map((env) => {
            const isActive = env.id === activeTab;
            return (
              <button
                key={env.id}
                onClick={() => setActiveTab(env.id)}
                className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#7C3AED] text-white border-purple-400 shadow-xl shadow-purple-600/30 scale-105'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{env.icon}</span>
                <span>{env.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Environment Showcase Canvas */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEnv.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl p-8 md:p-14 bg-gradient-to-br ${activeEnv.bgGradient} border ${activeEnv.borderColor} shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
          >
            {/* Ambient Lighting Overlay */}
            <div
              className="absolute -right-20 -bottom-20 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none opacity-40"
              style={{ backgroundColor: activeEnv.accentColor }}
            />

            {/* Left Content Description */}
            <div className="lg:col-span-6 relative z-10">
              <span
                className="text-xs font-black uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-md bg-white/10 border border-white/10 mb-4 inline-block"
                style={{ color: activeEnv.accentColor }}
              >
                {activeEnv.badge}
              </span>

              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                {activeEnv.headline}
              </h3>

              <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed mb-8">
                {activeEnv.description}
              </p>

              {/* Environment Key Proof Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8">
                {activeEnv.stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="w-2 h-2 rounded-full mb-2" style={{ backgroundColor: activeEnv.accentColor }} />
                    <div className="text-xs font-bold text-white uppercase tracking-wider">{stat}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Realistic Simulated Screen in Venue */}
            <div className="lg:col-span-6 relative z-10">
              <div className="relative w-full aspect-[16/10] rounded-2xl bg-black/90 p-4 border border-white/20 shadow-2xl overflow-hidden group">
                {/* Simulated Digital Display Frame */}
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-slate-900 to-black p-6 flex flex-col justify-between relative border border-white/10">
                  {/* Glass reflections */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-purple-500/10 pointer-events-none" />

                  {/* Header Badge */}
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/70">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {activeEnv.screenContent.location}
                    </span>
                    <span>MR. ADS DISPLAY</span>
                  </div>

                  {/* Screen Content */}
                  <div className="text-center my-auto px-4">
                    <span
                      className="text-xs font-black uppercase tracking-[0.3em] mb-2 block"
                      style={{ color: activeEnv.accentColor }}
                    >
                      {activeEnv.tagline}
                    </span>
                    <h4 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-none mb-3">
                      {activeEnv.screenContent.headline}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-300 font-medium">
                      {activeEnv.screenContent.sub}
                    </p>
                  </div>

                  {/* Footer Tag */}
                  <div className="flex items-center justify-between text-[10px] font-bold text-white/50 border-t border-white/10 pt-3">
                    <span>HIGH IMPACT VENUE PLACEMENT</span>
                    <span className="text-white">Powered by Mr. Ads</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
