'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DIGITAL_SOLUTIONS = [
  {
    title: 'Modern Business Websites',
    subtitle: 'Ultra-fast Next.js & React web applications designed to convert real-world ad traffic into customer leads.',
    icon: '🌐',
    tag: 'HIGH CONVERSION WEB',
  },
  {
    title: 'E-Commerce Experiences',
    subtitle: 'High-performance digital store fronts with integrated payment gateways and seamless checkout flows.',
    icon: '🛒',
    tag: 'RETAIL & SHOPPING',
  },
  {
    title: 'AI Chatbots & Automation',
    subtitle: 'Custom trained AI customer support and lead generation bots operating 24/7 on your web properties.',
    icon: '🤖',
    tag: '24/7 AI AUTOMATION',
  },
  {
    title: 'Website Redesign & Revamp',
    subtitle: 'Transform legacy websites into cinematic, responsive modern brand platforms.',
    icon: '✨',
    tag: 'BRAND ELEVATION',
  },
  {
    title: 'Cloud Hosting & Maintenance',
    subtitle: '99.99% Uptime, ultra-fast CDN edge delivery, automated daily backups, and security monitoring.',
    icon: '⚡',
    tag: 'ENTERPRISE STABILITY',
  },
  {
    title: 'Interactive Digital Interfaces',
    subtitle: 'Touchscreen displays, digital kiosks, and interactive web tools tailored for physically connected venues.',
    icon: '📱',
    tag: 'INTERACTIVE DISPLAY UI',
  },
];

export default function DigitalAndAISolutions() {
  return (
    <section id="ai-tech" className="relative py-32 bg-[#05060A] text-white overflow-hidden border-t border-white/10">
      {/* Cyan/Violet Cybernetic Glow */}
      <div className="absolute top-1/2 left-10 w-[700px] h-[500px] bg-cyan-600/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[500px] bg-purple-600/10 blur-[180px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Digital Ecosystem Extension
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-white leading-none mb-6">
            WEBSITE DESIGN, DEVELOPMENT & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#A855F7]">AI SOLUTIONS</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            SMART DIGITAL SOLUTIONS FOR MODERN BUSINESSES. Seamlessly bridge your real-world physical ad exposure with high-converting online web applications and AI intelligence.
          </p>
        </div>

        {/* Digital Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIGITAL_SOLUTIONS.map((sol, index) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white/5 via-slate-950 to-black border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl p-3 rounded-2xl bg-cyan-950/40 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    {sol.icon}
                  </span>
                  <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30">
                    {sol.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {sol.title}
                </h3>
                <p className="text-sm font-medium text-slate-400 leading-relaxed mb-6">
                  {sol.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300">
                <span>Integrated with Mr. Ads Analytics</span>
                <span className="text-cyan-400">⚡ Smart Digital</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
