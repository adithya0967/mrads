'use client';

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const brandLogos = [
  { name: 'Nandini', initials: 'NN' },
  { name: 'ZEE5', initials: 'Z5' },
  { name: 'Bachpan Play School', initials: 'BP' },
  { name: 'Decathlon', initials: 'DC' },
  { name: 'Lenskart', initials: 'LK' },
  { name: 'Boat Lifestyle', initials: 'BL' },
  { name: "Byju's", initials: 'BJ' },
  { name: 'Swiggy', initials: 'SW' },
];

const doubledLogos = [...brandLogos, ...brandLogos];

export default function SocialProofSection() {
  return (
    <section
      id="clients"
      className="py-16 bg-[#090A0C] border-b border-[#252830] overflow-hidden relative"
    >
      <ScrollReveal direction="up" delay={0}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-2 block">
            TRUSTED PARTNERS
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#F5F5F5]">
            Brands Reaching Bengaluru Audiences With Mr. Ads
          </h3>
        </div>
      </ScrollReveal>

      {/* Scrolling logo marquee */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#090A0C] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090A0C] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee w-max py-3">
          {doubledLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-gradient-to-b from-[#161922] to-[#101217] shadow-lg hover:border-[#B4233C]/60 hover:scale-105 transition-all duration-300 group cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-[#090A0C] border border-[#2B2F3D] flex items-center justify-center text-xs font-extrabold text-[#F5F5F5] group-hover:border-[#B4233C] group-hover:text-[#B4233C] transition-colors">
                {logo.initials}
              </div>
              <span className="font-bold text-sm text-[#F5F5F5] group-hover:text-white transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
