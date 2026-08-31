'use client';

import React, { useRef } from 'react';
import { MotionValue } from 'framer-motion';
import { mrAdsFacts } from '@/data/mrAdsFacts.data';
import { useMotionStyle } from '../useMotionStyle';

export default function HeroScene({
  opacity,
  x,
}: {
  opacity: MotionValue<number> | number;
  x: MotionValue<number> | number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useMotionStyle(ref, { opacity, x });

  return (
    <div
      data-variant="engine"
      className="absolute left-[6%] sm:left-[8%] top-1/2 -translate-y-1/2 max-w-[440px] z-20"
    >
      <div ref={ref}>
        <h1 className="text-white font-black tracking-tight leading-[0.98] text-[11vw] sm:text-[3.6vw]">
          {mrAdsFacts.heroHeadline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-5 sm:mt-6 text-white/60 text-sm sm:text-base font-medium tracking-wide uppercase">
          {mrAdsFacts.tagline}
        </p>
      </div>
    </div>
  );
}
