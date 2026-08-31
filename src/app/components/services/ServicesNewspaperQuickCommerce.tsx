import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { mrAdsFacts } from '@/data/mrAdsFacts.data';

export default function ServicesNewspaperQuickCommerce() {
  const { quickCommerce } = mrAdsFacts;

  return (
    <section id="quick-commerce" className="py-16 md:py-24 bg-[#090A0C] border-b border-[#252830]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <ScrollReveal direction="up" className="max-w-2xl mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
            NEWSPAPER & QUICK COMMERCE INSERTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15] mb-4">
            {quickCommerce.tagline}
          </h2>
          <ul className="flex flex-col gap-2">
            {quickCommerce.bullets.map((b) => (
              <li key={b} className="text-sm text-[#9A9CA5] flex items-start gap-2">
                <span className="mt-2 w-1 h-1 rounded-full bg-[#B4233C] shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-wrap gap-x-10 gap-y-4 items-center">
            {quickCommerce.partners.map((p) => (
              <span
                key={p}
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F5F5]/80"
              >
                {p}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
