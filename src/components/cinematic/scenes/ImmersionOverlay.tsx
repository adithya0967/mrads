'use client';

import React, { useRef } from 'react';
import { useTransform, MotionValue } from 'framer-motion';
import { useMotionStyle } from '../useMotionStyle';

function Dot({
  scrollYProgress,
  slotStart,
  slotEnd,
  fadeMargin,
}: {
  scrollYProgress: MotionValue<number>;
  slotStart: number;
  slotEnd: number;
  fadeMargin: number;
}) {
  const raw = useTransform(
    scrollYProgress,
    [slotStart - fadeMargin, slotStart + fadeMargin, slotEnd - fadeMargin, slotEnd + fadeMargin],
    [0, 1, 1, 0]
  );
  const dotOpacity = useTransform(raw, [0, 1], [0.25, 1]);
  const ref = useRef<HTMLSpanElement>(null);
  useMotionStyle(ref, { opacity: dotOpacity });
  return <span ref={ref} className="h-1 w-6 sm:w-8 rounded-full bg-white" />;
}

export default function ImmersionOverlay({
  overlayOpacity,
  scrollYProgress,
  slotCount,
  immersionStart,
  slotWidth,
  fadeMargin,
}: {
  overlayOpacity: MotionValue<number> | number;
  scrollYProgress: MotionValue<number>;
  slotCount: number;
  immersionStart: number;
  slotWidth: number;
  fadeMargin: number;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  useMotionStyle(rootRef, { opacity: overlayOpacity });

  return (
    <div
      ref={rootRef}
      className="absolute inset-x-0 bottom-6 sm:bottom-8 z-30 flex items-center justify-center gap-2 pointer-events-none"
      aria-hidden="true"
    >
      {Array.from({ length: slotCount }).map((_, i) => {
        const slotStart = immersionStart + i * slotWidth;
        const slotEnd = slotStart + slotWidth;
        return (
          <Dot
            key={i}
            scrollYProgress={scrollYProgress}
            slotStart={slotStart}
            slotEnd={slotEnd}
            fadeMargin={fadeMargin}
          />
        );
      })}
    </div>
  );
}
