'use client';

import React from 'react';
import HeroScene from './scenes/HeroScene';
import BillboardRig from './scenes/BillboardRig';
import BillboardAdCarousel from './scenes/surfaces/BillboardAdCarousel';

export default function CinematicJourney() {
  return (
    <section className="relative min-h-[90vh] lg:h-screen w-full overflow-hidden bg-[#050506] flex items-center pt-20 lg:pt-0">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-[#050506] to-[#050506] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        {/* Left Side: Headline Text */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="relative">
            <HeroScene opacity={1} x={0} />
          </div>
        </div>

        {/* Right Side: Highway Billboard Rig with Dynamic Ads */}
        <div className="lg:col-span-7 flex items-center justify-center">
          <BillboardRig>
            <BillboardAdCarousel />
          </BillboardRig>
        </div>
      </div>
    </section>
  );
}
