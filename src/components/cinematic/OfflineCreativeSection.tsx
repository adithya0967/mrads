'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CREATIVE_MATERIALS = [
  { title: 'Brochures & Catalogues', icon: '📖', desc: 'Luxury print finishes & editorial layouts' },
  { title: 'Flyers & Pamphlets', icon: '📑', desc: 'Targeted high-conversion print collateral' },
  { title: 'Standees & Roll-ups', icon: '🖼️', desc: 'Event, retail & lobby visual displays' },
  { title: 'Stall & Canopy Branding', icon: '🎪', desc: 'Experiential event booths & pop-up setups' },
  { title: 'Pole Boards & Banners', icon: '🚩', desc: 'High-visibility outdoor street pole boards' },
  { title: 'Magazine Advertisements', icon: '📰', desc: 'Premium print publication features' },
];

const DISTRIBUTION_NETWORKS = [
  { name: 'Hand-to-Hand Distribution', detail: 'Metro stations, bus terminals, tech parks & markets', icon: '🤝' },
  { name: 'Door-to-Door Residential', detail: 'Targeted high-income apartment communities & villas', icon: '🚪' },
  { name: 'Apartment & Event Promotions', detail: 'RWA events, weekend pop-up brand kiosks & stalls', icon: '🏙️' },
  { name: 'Newspaper & Q-Commerce Inserts', detail: 'Official delivery bags & morning newspaper inserts', icon: '🛍️' },
  { name: 'Pharmacy Cover Advertising', detail: 'Branded eco-friendly covers distributed at pharmacies', icon: '💊' },
];

export default function OfflineCreativeSection() {
  return (
    <section id="creative" className="relative py-32 bg-[#08090D] text-white overflow-hidden border-t border-white/10">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-purple-600/10 blur-[180px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            Tangible Brand Touchpoints
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-white leading-none mb-6">
            OFFLINE & <span className="text-[#A855F7]">CREATIVE SOLUTIONS</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            Combining world-class creative print design with strategic, targeted physical distribution channels across residential and high-footfall urban environments.
          </p>
        </div>

        {/* Creative Materials Grid */}
        <div className="mb-20">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#7C3AED]" />
            Premium Collateral & Creative Design
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREATIVE_MATERIALS.map((mat, index) => (
              <motion.div
                key={mat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 p-3 rounded-xl bg-purple-950/50 border border-purple-500/20 w-fit group-hover:scale-110 transition-transform">
                  {mat.icon}
                </div>
                <h4 className="text-xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {mat.title}
                </h4>
                <p className="text-xs font-medium text-slate-400">
                  {mat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Distribution Channels & Hyperlocal Touchpoints */}
        <div className="rounded-3xl p-8 md:p-14 bg-gradient-to-br from-[#130d24] via-[#0d0918] to-black border border-purple-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#A855F7] mb-2 block">
              HYPERLOCAL DISTRIBUTION NETWORKS
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              REACH HOMES & HANDS DIRECTLY
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {DISTRIBUTION_NETWORKS.map((dist, idx) => (
              <div
                key={dist.name}
                className="p-6 rounded-2xl bg-black/60 border border-white/10 hover:border-purple-400/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3">{dist.icon}</div>
                  <h4 className="text-lg font-black text-white mb-2">{dist.name}</h4>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">{dist.detail}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase text-purple-400 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Verified Network Delivery
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
