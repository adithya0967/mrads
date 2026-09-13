'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';

export interface HeroCopyProps {
  eyebrow?: string;
  headlineLine1?: string;
  headlineAccent?: string;
  headlineLine3?: string;
  supportingText?: string;
  supportingStatements?: string[];
}

export default function HeroCopy({
  eyebrow = 'MR. ADS / HYPERLOCAL ADVERTISING',
  headlineLine1 = 'Reach Customers',
  headlineAccent = 'Where They Live, Work &',
  headlineLine3 = 'Dine.',
  supportingText = 'Mr. Ads connects brands with high-intent audiences through premium billboards, digital displays and hyperlocal advertising solutions across the city.',
  supportingStatements = [
    'Premium advertising locations',
    'Digital display network',
    'Hyperlocal audience reach',
  ],
}: HeroCopyProps) {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 max-w-2xl">
      {/* Eyebrow Beacon */}
      <Reveal variant="fade-down" delay={0.1}>
        <div className="inline-flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ED3153] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D81F42]"></span>
          </span>
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#929292] uppercase">
            {eyebrow}
          </span>
        </div>
      </Reveal>

      {/* Main Headline - Line by Line Cinematic Reveal */}
      <h1 className="font-editorial text-[44px] sm:text-[60px] md:text-[72px] xl:text-[88px] font-normal leading-[0.94] tracking-[-0.025em] text-[#F4F1EC]">
        <Reveal variant="fade-up" delay={0.2}>
          <span className="block">{headlineLine1}</span>
        </Reveal>
        <Reveal variant="fade-up" delay={0.28}>
          <span className="block text-[#ED3153] italic font-normal my-0.5">
            {headlineAccent}
          </span>
        </Reveal>
        <Reveal variant="fade-up" delay={0.36}>
          <span className="block">{headlineLine3}</span>
        </Reveal>
      </h1>

      {/* Supporting Text */}
      <Reveal variant="fade-up" delay={0.44}>
        <p className="text-[17px] sm:text-[19px] lg:text-[20px] font-normal text-[#929292] leading-[1.6] max-w-[620px]">
          {supportingText}
        </p>
      </Reveal>

      {/* Small Supporting Statements */}
      <div className="pt-1 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[13px] text-[#929292]">
        {supportingStatements.map((statement, idx) => (
          <Reveal key={idx} variant="fade-up" delay={0.52} staggerIndex={idx}>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D81F42"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 transition-transform duration-200 hover:scale-125"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="font-medium text-[#F4F1EC]/85">{statement}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
