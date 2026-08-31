import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { mrAdsFacts } from '@/data/mrAdsFacts.data';
import PlaceholderMedia from '@/components/cinematic/scenes/PlaceholderMedia';

export default function ServicesPharmacyCover() {
  const { pharmacyCover } = mrAdsFacts;

  return (
    <section id="pharmacy-cover" className="py-16 md:py-24 bg-[#090A0C] border-b border-[#252830]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollReveal direction="right">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
              PHARMACY COVER ADVERTISING
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15] mb-4">
              {pharmacyCover.tagline}
            </h2>
            <ul className="flex flex-col gap-2 max-w-md">
              {pharmacyCover.bullets.map((b) => (
                <li key={b} className="text-sm text-[#9A9CA5] flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#B4233C] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={100}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#1c1e24] bg-[#0a0b0d]">
              <PlaceholderMedia label="Branded pharmacy cover" tone="cool" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
