'use client';

import React from 'react';

const brandLogos = [
  { name: 'Nandini', initials: 'NN' },
  { name: 'ZEE5', initials: 'Z5' },
  { name: 'Bachpan Play School', initials: 'BP' },
  { name: 'Decathlon', initials: 'DC' },
  { name: 'Lenskart', initials: 'LK' },
  { name: 'Boat Lifestyle', initials: 'BL' },
  { name: 'Byju\'s', initials: 'BJ' },
  { name: 'Swiggy', initials: 'SW' },
];

const doubledLogos = [...brandLogos, ...brandLogos];

export default function SocialProofSection() {
  return (
    <section id="clients" className="py-16 bg-[#0B0C0E] border-b border-[#22242B] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-8 text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#E52345] mb-2 block">
          TRUSTED PARTNERS
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
          Brands Reaching Bengaluru Audiences With Mr. Ads
        </h3>
      </div>

      {/* Scrolling logo marquee */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0C0E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0C0E] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee w-max py-2">
          {doubledLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-lg border border-[#22242B] bg-[#14151A] shadow-sm"
            >
              <div className="w-7 h-7 rounded-md bg-[#0B0C0E] border border-[#22242B] flex items-center justify-center text-xs font-extrabold text-white">
                {logo.initials}
              </div>
              <span className="font-bold text-sm text-white">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


