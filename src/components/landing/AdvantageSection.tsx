import React from 'react';
import Link from 'next/link';
import { X, Check, ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const problems = [
  {
    title: 'Weak Local Visibility',
    desc: 'Brands run national or generic digital ads, but remain completely invisible in the neighbourhoods where their customers live and buy.',
  },
  {
    title: 'Mass Media Wastage',
    desc: 'Broadcast and mass outdoor miss the specific households, diners and commuters located just 3 blocks away.',
  },
  {
    title: 'High Costs, Unfocused Exposure',
    desc: 'Paying exorbitant city-wide CPMs for broad reach that lacks hyperlocal relevance or repeatable dwell time.',
  },
  {
    title: 'Fleeting One-Off Impressions',
    desc: 'Campaigns flash past momentarily in crowded feeds or fast highways, producing zero compounding local recall.',
  },
];

const approach = [
  {
    title: 'High-Intent Presence',
    desc: 'Displaying inside dining rooms, lift lobbies, gyms, and corporate floors where audiences pause and stay for 20–60+ minutes.',
  },
  {
    title: 'Multi-Surface Neighborhood Coverage',
    desc: 'One synchronized flight across DOOH screens, moving transit wraps, doorstep inserts, and local pharmacy covers.',
  },
  {
    title: 'Contextual Relevance',
    desc: 'Meeting people naturally in daily routines — residential mornings, office mid-days, dinner evenings, and weekend retail.',
  },
  {
    title: 'Compounding Familiarity',
    desc: 'Repeated local sightings build rapid brand trust and immediate action across neighbourhood customer bases.',
  },
];

export default function AdvantageSection() {
  return (
    <section className="relative border-b border-line bg-[#080808] overflow-hidden">
      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#D81F42]/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="container-site py-20 md:py-28 relative z-10">
        {/* Header Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal variant="fade-up" className="max-w-2xl">
            <p className="eyebrow text-[#929292]">The Hyperlocal Advantage</p>
            <h2 className="mt-4 font-serif text-[34px] sm:text-[42px] leading-[1.08] tracking-tight text-paper font-normal">
              Mass media speaks to a city. Hyperlocal speaks to a neighbourhood.
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={0.15} className="max-w-md">
            <p className="text-[15px] leading-relaxed text-mute">
              When you place your message where people actually spend their days, you stop competing
              for digital seconds and start owning real-world attention.
            </p>
          </Reveal>
        </div>

        {/* Comparison Grid Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Column 1: The Problem (Slide from Left) */}
          <Reveal variant="slide-left" delay={0.15} className="h-full">
            <div className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.015] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:border-white/[0.12]">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                  <span className="text-[12px] font-bold tracking-[0.2em] text-[#666666] uppercase">
                    Traditional Mass Media
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] text-[11px] text-[#888888] font-medium">
                    The Friction
                  </span>
                </div>

                <ul className="mt-6 space-y-6">
                  {problems.map((item, idx) => (
                    <li
                      key={item.title}
                      className="group/item flex items-start gap-4 -mx-2 px-2 py-1.5 rounded-lg transition-colors hover:bg-white/[0.02]"
                    >
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/[0.04] border border-white/10 text-[#666666] shrink-0 mt-0.5 group-hover/item:border-white/20 transition-colors">
                        <X size={13} strokeWidth={2.5} />
                      </span>
                      <div>
                        <h3 className="text-[15px] font-medium text-[#B8B4AE] group-hover/item:text-paper transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[14px] leading-relaxed text-[#777777]">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 pt-6 border-t border-white/[0.06] text-[12.5px] text-[#666666] italic">
                Result: High ad spend with low local market penetration.
              </p>
            </div>
          </Reveal>

          {/* Column 2: The Mr. Ads Approach (Slide from Right) */}
          <Reveal variant="slide-right" delay={0.2} className="h-full">
            <div className="relative h-full rounded-2xl border border-[#D81F42]/30 bg-gradient-to-b from-[#141414] to-[#0A0A0A] p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(216,31,66,0.1)] flex flex-col justify-between transition-all duration-300 hover:border-[#D81F42]/50 hover:shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(216,31,66,0.2)]">
              {/* Subtle glow accent bar */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#D81F42] to-transparent" />

              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                  <span className="text-[12px] font-bold tracking-[0.2em] text-[#D81F42] uppercase">
                    The Mr. Ads Solution
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D81F42]/15 text-[11px] text-[#ED3153] font-bold border border-[#D81F42]/30 shadow-[0_0_12px_rgba(216,31,66,0.2)]">
                    Proven Impact
                  </span>
                </div>

                <ul className="mt-6 space-y-6">
                  {approach.map((item, idx) => (
                    <li
                      key={item.title}
                      className="group/item flex items-start gap-4 -mx-2 px-2 py-1.5 rounded-lg transition-colors hover:bg-white/[0.03]"
                    >
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D81F42]/20 border border-[#D81F42]/40 text-[#ED3153] shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-[#D81F42]/30 transition-all">
                        <Check size={13} strokeWidth={2.8} />
                      </span>
                      <div>
                        <h3 className="text-[15px] font-semibold text-paper group-hover/item:text-white transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[14px] leading-relaxed text-mute">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[13px] text-paper font-medium">
                  Ready to own your neighbourhood?
                </span>
                <Link
                  href="/pricing"
                  className="btn-arrow inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:text-brand-hover transition-colors"
                >
                  <span>Build Media Plan</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
