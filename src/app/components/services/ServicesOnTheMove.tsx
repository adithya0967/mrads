import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { mrAdsFacts } from '@/data/mrAdsFacts.data';
import PlaceholderMedia from '@/components/cinematic/scenes/PlaceholderMedia';

export default function ServicesOnTheMove() {
  const { onTheMove } = mrAdsFacts;

  return (
    <section id="on-the-move" className="py-16 md:py-24 bg-[#090A0C] border-b border-[#252830]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollReveal direction="right">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
              ADVERTISING ON THE MOVE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15] mb-6">
              {onTheMove.tagline}
            </h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-md">
              {onTheMove.channels.map((c) => (
                <li key={c} className="text-sm font-semibold text-[#9A9CA5] flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#B4233C] shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={100}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#1c1e24] bg-[#0a0b0d]">
              <PlaceholderMedia label="Branded vehicle in motion" tone="neutral" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <div className="text-white font-black text-3xl sm:text-4xl leading-none">
                  {onTheMove.busShelter.reachHeadline}
                </div>
                <div className="text-white/50 text-[11px] font-bold uppercase tracking-widest mt-1">
                  Bus shelter branding · {onTheMove.busShelter.location} ·{' '}
                  {onTheMove.busShelter.shelters} shelters · {onTheMove.busShelter.adArea} ·{' '}
                  {onTheMove.busShelter.visibility}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
