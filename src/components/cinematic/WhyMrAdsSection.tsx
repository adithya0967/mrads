'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WHY_PILLARS = [
  {
    num: '01',
    title: 'HYPERLOCAL REACH',
    summary: 'Target specific neighborhoods, high-income pin codes, and localized audience clusters where your customers actually live, dine, work, and shop.',
    accent: '#7C3AED',
  },
  {
    num: '02',
    title: 'MULTIPLE ADVERTISING CHANNELS',
    summary: 'Synchronize indoor digital screens (restaurants, apartments, gyms) with moving media (cabs, autos, buses) and offline distribution for 360° coverage.',
    accent: '#3B82F6',
  },
  {
    num: '03',
    title: 'CREATIVE & DIGITAL SOLUTIONS',
    summary: 'From world-class commercial ad design and video production to fast Next.js websites and automated AI chatbots.',
    accent: '#EC4899',
  },
  {
    num: '04',
    title: 'BETTER BRAND VISIBILITY',
    summary: 'Drive high-frequency daily brand impressions. Repeated visibility in captive environments turns audience awareness into lasting brand recall.',
    accent: '#10B981',
  },
  {
    num: '05',
    title: 'END-TO-END CAMPAIGN SUPPORT',
    summary: 'Complete campaign lifecycle management — location selection, creative design, screen deployment, distribution, and real-time execution reporting.',
    accent: '#F59E0B',
  },
  {
    num: '06',
    title: 'ONE PARTNER, MULTIPLE SOLUTIONS',
    summary: 'Eliminate fragmenting your marketing budget across multiple agencies. One integrated partner driving offline, moving, and digital growth.',
    accent: '#06B6D4',
  },
];

export default function WhyMrAdsSection() {
  return (
    <section id="about" className="relative py-32 bg-[#040406] text-white overflow-hidden border-t border-white/10">
      {/* Background Lighting Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-purple-600/10 blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            The Strategic Advantage
          </div>
          <h2 className="text-4xl sm:text-7xl font-black tracking-tighter text-white leading-none mb-6">
            WHY <span className="text-[#A855F7]">MR. ADS</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            We don't just display logos on screens. We construct integrated, repeated brand presences that physically connect your company with real-world consumers.
          </p>
        </div>

        {/* Editorial Large Typography Pillars */}
        <div className="space-y-6">
          {WHY_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300 group flex flex-col lg:flex-row lg:items-center justify-between gap-8"
            >
              <div className="flex items-start md:items-center gap-6">
                <span
                  className="text-4xl md:text-6xl font-black font-mono opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ color: pillar.accent }}
                >
                  {pillar.num}
                </span>
                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight group-hover:text-purple-200 transition-colors">
                  {pillar.title}
                </h3>
              </div>

              <div className="max-w-xl">
                <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed">
                  {pillar.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
