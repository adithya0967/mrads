import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { mrAdsFacts } from '@/data/mrAdsFacts.data';

function FlyerStack() {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute w-[58%] aspect-[3/4] bg-[#111318] border border-[#252830] rounded-md shadow-2xl"
          style={{ transform: `rotate(${(i - 1.5) * 6}deg) translateY(${i * 4}px)`, zIndex: i }}
        >
          <div className="w-full h-1.5 bg-[#B4233C] rounded-t-md" />
          <div className="p-4 flex flex-col gap-2">
            <div className="w-2/3 h-2 bg-white/10 rounded-full" />
            <div className="w-1/2 h-2 bg-white/10 rounded-full" />
            <div className="w-3/4 h-2 bg-white/5 rounded-full mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ServicesOfflineCreative() {
  const { offlineCreative } = mrAdsFacts;

  return (
    <section
      id="offline-creative"
      className="py-16 md:py-24 bg-[#090A0C] border-b border-[#252830]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <ScrollReveal direction="right">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
              OFFLINE & CREATIVE ADVERTISING
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15] mb-4">
              {offlineCreative.tagline}
            </h2>
            <ul className="flex flex-col gap-2 max-w-md">
              {offlineCreative.creative.map((c) => (
                <li key={c} className="text-sm text-[#9A9CA5] flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#B4233C] shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={100}>
            <FlyerStack />
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up">
          <div className="border-t border-[#1c1e24] pt-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
              DISTRIBUTION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15] mb-6 max-w-2xl">
              {offlineCreative.distributionTagline}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {offlineCreative.coverageAreas.map((a) => (
                <div
                  key={a}
                  className="text-sm font-bold text-[#F5F5F5] uppercase tracking-wide border-l-2 border-[#B4233C] pl-3"
                >
                  {a}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
