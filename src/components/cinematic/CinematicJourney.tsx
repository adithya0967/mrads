'use client';

import React from 'react';
import { useReducedMotion } from 'framer-motion';
import HeroScene from './scenes/HeroScene';
import BillboardRig from './scenes/BillboardRig';
import ScreenVideo from './scenes/surfaces/ScreenVideo';

// Static hero: headline + a physical billboard rig playing one ambient ad
// reel. No scroll-jacking, no ad-cycle track — just the opening frame.
export default function CinematicJourney() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050506]">
      <HeroScene opacity={1} x={0} />

      <BillboardRig scale={0.34} rotateY={-20} x="27vw" opacity={1} structureOpacity={1}>
        <ScreenVideo
          src="/assets/videos/billboard-zoom-reveal.mp4"
          progress={prefersReducedMotion ? 0 : 1}
        />
      </BillboardRig>
    </section>
  );
}
