'use client';

import React from 'react';

const brandLogos = [
  { name: 'Nandini', initials: 'NN', color: 'bg-blue-950/40 text-blue-300 border-blue-900/40' },
  { name: 'ZEE5', initials: 'Z5', color: 'bg-purple-950/40 text-purple-300 border-purple-900/40' },
  { name: 'Bachpan Play School', initials: 'BP', color: 'bg-orange-950/40 text-orange-300 border-orange-900/40' },
  { name: 'Decathlon', initials: 'DC', color: 'bg-blue-950/40 text-blue-300 border-blue-900/40' },
  { name: 'Lenskart', initials: 'LK', color: 'bg-teal-950/40 text-teal-300 border-teal-900/40' },
  { name: 'Boat Lifestyle', initials: 'BL', color: 'bg-muted text-foreground/70 border-border' },
  { name: 'Byju\'s', initials: 'BJ', color: 'bg-indigo-950/40 text-indigo-300 border-indigo-900/40' },
  { name: 'Swiggy', initials: 'SW', color: 'bg-orange-950/40 text-orange-300 border-orange-900/40' },
];

const doubledLogos = [...brandLogos, ...brandLogos];

export default function SocialProofSection() {
  return (
    <section id="clients" className="py-20 md:py-24 bg-card border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-10 text-center">
        <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-3 block">
          Social Proof
        </span>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-tight text-foreground mb-3">
          Brands That Trust Mr. Ads
        </h2>
        <p className="text-muted-foreground text-sm font-medium">
          Trusted by growing brands across Bengaluru
        </p>
      </div>
      {/* Scrolling logo marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-marquee w-max">
          {doubledLogos?.map((logo, i) => (
            <div
              key={`${logo?.name}-${i}`}
              className={`shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl border ${logo?.color} bg-card shadow-sm`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-extrabold border ${logo?.color}`}
              >
                {logo?.initials}
              </div>
              <span className="font-bold text-sm text-nowrap text-foreground/80">{logo?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
