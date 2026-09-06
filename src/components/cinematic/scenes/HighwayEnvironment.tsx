'use client';

import React, { useRef } from 'react';
import { MotionValue } from 'framer-motion';
import { useMotionStyle } from '../useMotionStyle';

export default function HighwayEnvironment({
  opacity,
  skylineX,
}: {
  opacity: MotionValue<number> | number;
  skylineX: MotionValue<string> | string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const skylineRef = useRef<HTMLDivElement>(null);
  useMotionStyle(rootRef, { opacity });
  useMotionStyle(skylineRef, { x: skylineX });

  return (
    <div ref={rootRef} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* photographic dusk skyline, oversized and panned slowly with scroll
          for parallax; top-anchored so the frame crops into the photo's own
          highway rather than the sky/skyline, which our procedural road and
          rig sit in front of */}
      <div
        ref={skylineRef}
        className="absolute left-0 top-0 w-[140%] h-full"
        style={{
          backgroundImage: 'url(/assets/images/highway_dusk_skyline.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* light color-grade to tie the photo into the site's dusk palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b32]/25 via-transparent to-[#0a0b0d]/70" />

      {/* amber city glow rising off the skyline, then dark atmospheric haze
          fading the photo to near-black right at the seam with the
          procedural road (RoadLanesLayer, an opaque bottom-[26%] strip) */}
      <div className="absolute bottom-[26%] left-0 right-0 h-[20%] bg-gradient-to-t from-[#c9814a]/30 via-[#7a4636]/20 to-transparent" />
      <div className="absolute bottom-[26%] left-0 right-0 h-[12%] bg-gradient-to-t from-[#0a0b0d] to-transparent" />
    </div>
  );
}
