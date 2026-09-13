'use client';

import React from 'react';
import Link from 'next/link';

export interface HeroCtaGroupProps {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function HeroCtaGroup({
  primaryText = 'PLAN YOUR CAMPAIGN',
  primaryHref = '/contact',
  secondaryText = 'EXPLORE OUR NETWORK',
  secondaryHref = '#solutions',
}: HeroCtaGroupProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-[18px] pt-2">
      {/* Primary CTA Button */}
      <Link
        href={primaryHref}
        className="group relative inline-flex items-center justify-center gap-3 h-[56px] px-8 rounded-xl bg-[#D81F42] hover:bg-[#ED3153] text-[#F4F1EC] text-[13.5px] sm:text-[14px] font-bold tracking-[0.08em] uppercase transition-all duration-200 shadow-[0_4px_25px_rgba(216,31,66,0.35)] hover:shadow-[0_8px_35px_rgba(237,49,83,0.55)] hover:-translate-y-0.5 active:translate-y-0"
      >
        <span>{primaryText}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transform group-hover:translate-x-1.5 transition-transform duration-200"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>

      {/* Secondary CTA Button */}
      <a
        href={secondaryHref}
        className="group inline-flex items-center justify-center gap-2.5 h-[56px] px-7 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 text-[#F4F1EC] text-[13px] sm:text-[13.5px] font-semibold tracking-[0.08em] uppercase transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
      >
        <span>{secondaryText}</span>
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#929292] group-hover:text-[#F4F1EC] transform group-hover:translate-y-1 transition-all duration-200"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </a>
    </div>
  );
}
