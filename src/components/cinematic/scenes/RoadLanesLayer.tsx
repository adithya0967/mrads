'use client';

import React, { useRef } from 'react';
import { MotionValue } from 'framer-motion';
import { useMotionStyle } from '../useMotionStyle';

export default function RoadLanesLayer({
  opacity,
  dashX,
}: {
  opacity: MotionValue<number> | number;
  dashX: MotionValue<string> | string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const dash1Ref = useRef<HTMLDivElement>(null);
  const dash2Ref = useRef<HTMLDivElement>(null);
  useMotionStyle(rootRef, { opacity });
  useMotionStyle(dash1Ref, { x: dashX });
  useMotionStyle(dash2Ref, { x: dashX });

  return (
    <div ref={rootRef} className="absolute bottom-0 left-0 right-0 h-[26%]" aria-hidden="true">
      {/* asphalt */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1d20] to-[#0a0a0b]" />
      {/* lane dividers, translated for the illusion of forward travel */}
      <div
        ref={dash1Ref}
        className="absolute top-[38%] left-0 w-[220%] h-[3px]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #e8c56a 0 40px, transparent 40px 90px)',
          opacity: 0.55,
        }}
      />
      <div
        ref={dash2Ref}
        className="absolute top-[62%] left-0 w-[220%] h-[3px]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #e8c56a 0 40px, transparent 40px 90px)',
          opacity: 0.4,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
    </div>
  );
}
