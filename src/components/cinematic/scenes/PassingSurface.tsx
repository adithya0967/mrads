'use client';

import React, { useRef } from 'react';
import { MotionValue } from 'framer-motion';
import SurfaceArt from './surfaces/SurfaceArt';
import type { HighwaySurface } from '../data/surfaces.data';
import { getCampaign } from '../data/adCampaigns.data';
import { useMotionStyle } from '../useMotionStyle';

const DEPTH_BOTTOM: Record<HighwaySurface['depth'], string> = {
  near: '14%',
  mid: '30%',
  far: '40%',
};

export default function PassingSurface({
  surface,
  x,
  opacity,
  scale,
}: {
  surface: HighwaySurface;
  x: MotionValue<string> | string;
  opacity: MotionValue<number> | number;
  scale: MotionValue<number> | number;
}) {
  const campaign = surface.adCampaignId ? getCampaign(surface.adCampaignId) : undefined;
  const ref = useRef<HTMLDivElement>(null);
  useMotionStyle(ref, { x, opacity, scale });

  return (
    <div
      className="absolute z-10 left-1/2 -translate-x-1/2"
      style={{ bottom: DEPTH_BOTTOM[surface.depth] }}
    >
      <div ref={ref}>
        <SurfaceArt type={surface.type} campaign={campaign} />
      </div>
    </div>
  );
}
