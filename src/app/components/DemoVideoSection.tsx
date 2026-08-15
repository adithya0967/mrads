'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

export default function DemoVideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="demo" className="py-20 md:py-28 bg-[#111318] border-b border-[#252830]">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
          NETWORK DEMO
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] mb-4">
          See Mr. Ads in Action Across Venues
        </h2>
        <p className="text-[#9A9CA5] text-base mb-10 max-w-xl mx-auto font-normal">
          Experience how your brand appears on high-dwell screens inside Bengaluru's leading dining and consumer spaces.
        </p>

        {/* Video player container */}
        <div className="relative rounded-2xl overflow-hidden border border-[#252830] shadow-md cursor-pointer aspect-video bg-[#090A0C]">
          <AppImage
            src="https://images.unsplash.com/photo-1698265539672-f27e28ee0578"
            alt="Restaurant interior with digital display screen showing advertisement"
            fill
            className="object-cover opacity-80"
            priority
          />

          <div className="absolute inset-0 bg-black/40" />

          {!playing && (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 group"
              aria-label="Play demo video"
            >
              <div className="w-16 h-16 bg-[#111318]/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#252830] shadow-md group-hover:scale-110 group-hover:bg-[#B4233C] group-hover:text-white transition-all">
                <Icon name="PlayIcon" size={24} variant="solid" className="text-white group-hover:text-white ml-1 transition-colors" />
              </div>
              <span className="text-[#F5F5F5] text-xs font-extrabold uppercase tracking-widest">
                Watch Screen Demo
              </span>
            </button>
          )}

          {playing && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#090A0C] text-[#F5F5F5]">
              <div className="text-center">
                <Icon name="TvIcon" size={40} className="text-[#B4233C] mx-auto mb-3" />
                <p className="font-bold text-base">Mr. Ads Live Network Feed</p>
                <p className="text-[#F5F5F5]/60 text-xs mt-1">30s Ad Spot Loop · High Dwell Visibility</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
