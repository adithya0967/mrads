'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { MotionValue } from 'framer-motion';
import { useMotionStyle } from '../useMotionStyle';

interface BillboardRigProps {
  scale?: MotionValue<number> | number;
  rotateY?: MotionValue<number> | number;
  x?: MotionValue<string> | string;
  opacity?: MotionValue<number> | number;
  structureOpacity?: MotionValue<number> | number;
  children: React.ReactNode;
}

/**
 * Physical Billboard Rig featuring the front-facing photographic highway billboard structure
 * (`billboard_structure.jpg`) with overhead spotlight fixtures, centered steel column,
 * and a perfectly aligned display projection running live dynamic ad content.
 */
export default function BillboardRig({
  scale = 1,
  rotateY = 0,
  x = '0vw',
  opacity = 1,
  children,
}: BillboardRigProps) {
  const rigRef = useRef<HTMLDivElement>(null);
  useMotionStyle(rigRef, { x, scale, rotateY, opacity });

  return (
    <div className="relative w-full flex items-center justify-center py-2">
      <div
        ref={rigRef}
        className="relative w-full max-w-[960px] aspect-[1024/679] rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.85)] border border-white/10 bg-[#07090e]"
      >
        {/* High-Resolution Frontal Highway Billboard Image Structure */}
        <Image
          src="/assets/images/billboard_structure.jpg"
          alt="Highway Billboard Structure"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 960px"
          className="object-cover pointer-events-none select-none"
        />

        {/* Dynamic Screen Projection fitted perfectly inside the Billboard Screen Box */}
        <div
          className="absolute z-10 overflow-hidden shadow-2xl bg-black rounded-[2px]"
          style={{
            left: '18.0%',
            top: '17.2%',
            width: '71.2%',
            height: '38.6%',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.95), 0 0 50px rgba(56,189,248,0.2)',
          }}
        >
          {children}
        </div>

        {/* Overhead Spotlights Ambient Glow Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            background:
              'radial-gradient(ellipse at 50% 12%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 40%, transparent 75%)',
          }}
        />

        {/* Outer Frame Glass Sheen & Edge Highlight */}
        <div className="pointer-events-none absolute inset-0 z-20 ring-1 ring-white/15 rounded-2xl" />
      </div>
    </div>
  );
}
