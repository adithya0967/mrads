'use client';

import React, { useRef } from 'react';
import { MotionValue } from 'framer-motion';
import { useMotionStyle } from '../useMotionStyle';

interface BillboardRigProps {
  scale: MotionValue<number> | number;
  rotateY: MotionValue<number> | number;
  x: MotionValue<string> | string;
  opacity: MotionValue<number> | number;
  structureOpacity: MotionValue<number> | number; // pillar/ground fade for immersion
  children: React.ReactNode;
}

/**
 * The physical billboard: steel pillar, mounting frame, and an LED "glass"
 * area that hosts BillboardScreenContent. Structure is drawn in SVG/CSS since
 * no photographic asset exists for it; the screen content itself is where
 * real ad creative photography will slot in.
 */
export default function BillboardRig({
  scale,
  rotateY,
  x,
  opacity,
  structureOpacity,
  children,
}: BillboardRigProps) {
  const rigRef = useRef<HTMLDivElement>(null);
  const structureRef = useRef<HTMLDivElement>(null);
  useMotionStyle(rigRef, { x, scale, rotateY, opacity });
  useMotionStyle(structureRef, { opacity: structureOpacity });

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ perspective: 1400 }}
    >
      <div
        ref={rigRef}
        className="relative flex flex-col items-center origin-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* LED frame + screen */}
        <div className="relative w-[62vw] max-w-[880px] aspect-[16/9] rounded-[6px] bg-[#050506] border-[10px] border-[#1c1e24] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] ring-1 ring-black/60">
          {/* mounting brackets */}
          <div className="absolute -left-3 top-1/4 w-3 h-10 bg-[#1c1e24] rounded-sm" />
          <div className="absolute -right-3 top-1/4 w-3 h-10 bg-[#1c1e24] rounded-sm" />
          <div className="absolute -left-3 bottom-1/4 w-3 h-10 bg-[#1c1e24] rounded-sm" />
          <div className="absolute -right-3 bottom-1/4 w-3 h-10 bg-[#1c1e24] rounded-sm" />

          <div className="absolute inset-0 overflow-hidden rounded-[2px]">{children}</div>

          {/* screen glass sheen */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                'linear-gradient(115deg, rgba(255,255,255,0.10) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.04) 100%)',
            }}
          />
        </div>

        {/* support beam + pillar (fades as we go fully immersive) */}
        <div ref={structureRef} className="flex flex-col items-center">
          <div className="w-[10%] h-4 bg-gradient-to-b from-[#2a2d35] to-[#1c1e24]" />
          <div className="w-[3%] min-w-[10px] h-[26vh] bg-gradient-to-b from-[#2a2d35] via-[#191a1f] to-[#101114] rounded-sm shadow-[0_0_40px_rgba(0,0,0,0.6)]" />
          <div className="w-[9%] h-2.5 bg-[#101114] rounded-sm shadow-lg" />
        </div>
      </div>
    </div>
  );
}
