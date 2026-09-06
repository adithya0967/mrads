'use client';

import React, { useRef } from 'react';
import { MotionValue } from 'framer-motion';
import { mrAdsFacts } from '@/data/mrAdsFacts.data';
import { useMotionStyle } from '../useMotionStyle';

export default function HeroScene({
  opacity = 1,
  x = 0,
}: {
  opacity?: MotionValue<number> | number;
  x?: MotionValue<number> | number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useMotionStyle(ref, { opacity, x });

  return (
    <div data-variant="engine" className="relative w-full max-w-[480px] z-20 py-4">
      <div ref={ref}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span>Premier OOH & Digital Media</span>
        </div>
        <h1 className="text-white font-black tracking-tight leading-[0.98] text-4xl sm:text-5xl lg:text-6xl">
          {mrAdsFacts.heroHeadline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-4 text-white/70 text-sm sm:text-base font-medium tracking-wide uppercase">
          {mrAdsFacts.tagline}
        </p>
      </div>
    </div>
  );
}
