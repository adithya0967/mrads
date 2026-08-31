'use client';

import React, { useRef } from 'react';
import { MotionValue } from 'framer-motion';
import { useMotionStyle } from '../useMotionStyle';

const BUILDINGS = [
  { w: 6, h: 38, x: 4 },
  { w: 8, h: 55, x: 12 },
  { w: 5, h: 30, x: 22 },
  { w: 9, h: 64, x: 29 },
  { w: 6, h: 42, x: 40 },
  { w: 7, h: 50, x: 48 },
  { w: 5, h: 28, x: 57 },
  { w: 10, h: 70, x: 64 },
  { w: 6, h: 40, x: 76 },
  { w: 8, h: 58, x: 84 },
  { w: 5, h: 32, x: 94 },
];

export default function HighwayEnvironment({
  opacity,
  skylineX,
}: {
  opacity: MotionValue<number> | number;
  skylineX: MotionValue<string> | string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const skylineRef = useRef<SVGSVGElement>(null);
  useMotionStyle(rootRef, { opacity });
  useMotionStyle(skylineRef, { x: skylineX });

  return (
    <div ref={rootRef} className="absolute inset-0" aria-hidden="true">
      {/* dusk-to-night sky */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #1a1420 0%, #2a1f2e 20%, #4a2f38 40%, #6b3f3a 55%, #191a1f 75%, #0a0b0d 100%)',
        }}
      />

      {/* skyline silhouette, slow parallax */}
      <svg
        ref={skylineRef}
        className="absolute bottom-[28%] left-0 w-[140%] h-[36%]"
        viewBox="0 0 100 70"
        preserveAspectRatio="none"
      >
        {BUILDINGS.map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={70 - b.h} width={b.w} height={b.h} fill="#14151a" />
            {Array.from({ length: Math.floor(b.h / 8) }).map((_, wi) => (
              <rect
                key={wi}
                x={b.x + b.w * 0.25}
                y={70 - b.h + 4 + wi * 8}
                width={b.w * 0.5}
                height={1.6}
                fill={(i + wi) % 3 === 0 ? '#e8a24a' : 'transparent'}
                opacity={0.6}
              />
            ))}
          </g>
        ))}
      </svg>

      {/* atmospheric haze */}
      <div className="absolute bottom-[24%] left-0 right-0 h-[14%] bg-gradient-to-t from-[#0a0b0d] to-transparent opacity-70" />

      {/* streetlight glows */}
      {[8, 26, 44, 62, 80].map((left, i) => (
        <div
          key={i}
          className="absolute bottom-[22%] rounded-full blur-2xl"
          style={{
            left: `${left}%`,
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(232,162,74,0.35) 0%, transparent 70%)',
          }}
        />
      ))}
    </div>
  );
}
