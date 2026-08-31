import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { mrAdsFacts } from '@/data/mrAdsFacts.data';

export default function WhyMrAdsSection() {
  return (
    <section id="why-mr-ads" className="py-20 md:py-28 bg-[#090A0C] border-b border-[#252830]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <ScrollReveal direction="up" className="max-w-2xl mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
            WHY MR. ADS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15]">
            One partner, multiple solutions.
          </h2>
        </ScrollReveal>

        <div className="flex flex-col">
          {mrAdsFacts.whyChooseMrAds.map((pillar, idx) => (
            <ScrollReveal key={pillar.id} direction="up" staggerIndex={idx} staggerDelay={90}>
              <div className="flex items-start gap-6 sm:gap-10 py-6 border-b border-[#1c1e24] last:border-b-0">
                <span className="text-[#B4233C] font-black text-2xl sm:text-3xl tabular-nums w-10 sm:w-14 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F5F5] tracking-tight mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#9A9CA5] leading-relaxed max-w-xl">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
