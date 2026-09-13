import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const reasons = [
  {
    num: '01',
    title: 'Hyperlocal Precision',
    body: 'We place brands inside targeted neighbourhoods where residents live and work — not just on generic city-wide billboards. Visibility follows how people actually move.',
  },
  {
    num: '02',
    title: 'Integrated Multi-Channel Network',
    body: 'Digital screens, moving vehicle media, print inserts, and pharmacy covers synchronize as a unified plan. One brief, several surfaces, compounding reach.',
  },
  {
    num: '03',
    title: 'High Dwell-Time Environments',
    body: 'Dining rooms, lift lobbies, fitness centers, and waiting zones offer 20 to 45 minutes of relaxed dwell time, vastly outperforming fleeting 3-second online impressions.',
  },
  {
    num: '04',
    title: 'Creative & Production Execution',
    body: 'From outdoor and print creatives to responsive websites and AI assistants, the campaign message is tailored to travel cleanly across physical and digital spaces.',
  },
  {
    num: '05',
    title: 'End-to-End Campaign Management',
    body: 'Discovery, location planning, printing, screen deployment, and verification sit with a single dedicated team. Zero vendor coordination headaches.',
  },
  {
    num: '06',
    title: 'Measurable Network Scale',
    body: 'Access thousands of screens across key metropolitan clusters with transparent venue opportunity metrics, flexible durations, and competitive pricing.',
  },
];

export default function WhySection() {
  return (
    <section className="relative border-b border-line bg-[#0D0D0D] overflow-hidden">
      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute -top-24 left-1/3 w-[600px] h-[600px] bg-[#D81F42]/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="container-site py-20 md:py-28 relative z-10">
        {/* Header Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal variant="fade-up" className="max-w-xl">
            <p className="eyebrow text-[#929292]">Why Mr. Ads</p>
            <h2 className="mt-4 font-serif text-[32px] sm:text-[40px] leading-tight tracking-tight text-paper font-normal">
              Six reasons brands choose one hyperlocal partner.
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={0.15}>
            <Link
              href="/about"
              className="btn-arrow inline-flex items-center gap-2 text-[13.5px] font-medium text-mute hover:text-paper transition-colors shrink-0"
            >
              <span>Learn about our approach</span>
              <ArrowRight size={14} className="text-brand" />
            </Link>
          </Reveal>
        </div>

        {/* 3-Column Luxury Grid with Staggered Reveals */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, idx) => (
            <Reveal
              key={item.num}
              variant="fade-up"
              staggerIndex={idx}
              delay={0.1}
              className="h-full"
            >
              <div className="card-interactive group relative h-full rounded-xl border border-white/[0.08] bg-[#141414]/60 p-7 sm:p-8 hover:bg-[#141414] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[26px] font-bold text-[#D81F42] leading-none transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(216,31,66,0.6)]">
                      {item.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand group-hover:shadow-[0_0_6px_#D81F42] transition-all"></span>
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-paper group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-mute">{item.body}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                  <span className="text-[11px] font-semibold tracking-wider text-brand uppercase">
                    Mr. Ads Advantage
                  </span>
                  <ArrowRight
                    size={13}
                    className="text-brand transform group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
