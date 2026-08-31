'use client';

import React, { useRef } from 'react';
import { MotionValue } from 'framer-motion';
import { useMotionStyle } from '../useMotionStyle';

export default function CarRig({
  x,
  opacity,
}: {
  x: MotionValue<number> | number;
  opacity: MotionValue<number> | number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useMotionStyle(ref, { x, opacity });

  return (
    <div
      className="absolute bottom-[9%] left-1/2 -translate-x-1/2 w-[22vw] max-w-[280px] z-20"
      aria-hidden="true"
    >
      <div ref={ref} className="relative">
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-4 rounded-full blur-md"
          style={{ background: 'radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 70%)' }}
        />
        <svg viewBox="0 0 200 70" className="w-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
          <path
            d="M10 55 C10 40 25 38 40 36 L60 20 C68 14 85 12 100 12 L140 14 C155 15 165 22 172 34 L190 40 C194 44 194 52 190 55 L10 55 Z"
            fill="#16171b"
            stroke="#2a2c33"
            strokeWidth="1"
          />
          <path
            d="M65 32 L78 20 C86 16 96 14 108 14 L136 16 C144 17 150 22 154 30 Z"
            fill="#0e0f12"
            opacity="0.9"
          />
          <circle cx="48" cy="55" r="10" fill="#0a0a0b" stroke="#3a3c44" strokeWidth="2" />
          <circle cx="165" cy="55" r="10" fill="#0a0a0b" stroke="#3a3c44" strokeWidth="2" />
          <rect x="182" y="36" width="6" height="4" fill="#e8c56a" opacity="0.9" />
        </svg>
        <div
          className="absolute bottom-[22%] right-[-6%] w-10 h-3 rounded-full blur-[6px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(232,197,106,0.85) 0%, transparent 75%)',
          }}
        />
      </div>
    </div>
  );
}
