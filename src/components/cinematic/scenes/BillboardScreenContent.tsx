'use client';

import React, { useRef } from 'react';
import { MotionValue } from 'framer-motion';
import type { AdCampaign } from '../data/adCampaigns.data';
import PlaceholderMedia from './PlaceholderMedia';
import { useMotionStyle } from '../useMotionStyle';

export default function BillboardScreenContent({
  campaign,
  opacity,
}: {
  campaign: AdCampaign;
  opacity: MotionValue<number> | number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useMotionStyle(ref, { opacity });

  return (
    <div ref={ref} className="absolute inset-0">
      <div className="absolute inset-0" style={{ backgroundColor: campaign.palette.base }}>
        <PlaceholderMedia label={campaign.imageSlot} tone="warm" className="opacity-90" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

      <div className="absolute inset-0 flex flex-col justify-end p-[4%] sm:p-[3%]">
        {campaign.poweredByMrAds && (
          <span className="mb-2 sm:mb-3 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-white/70">
            Powered by MR. ADS
          </span>
        )}
        <span
          className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-1.5 sm:mb-2"
          style={{ color: campaign.palette.accent }}
        >
          {campaign.category}
        </span>
        <h3 className="text-white font-black tracking-tight leading-[1.05] text-[5.5vw] sm:text-[2.4vw] max-w-[85%]">
          {campaign.headline}
        </h3>
        <p className="mt-1.5 sm:mt-2 text-white/70 font-medium text-[2.6vw] sm:text-[1.05vw] max-w-[70%]">
          {campaign.subhead}
        </p>
        <span className="mt-3 sm:mt-4 text-[2.2vw] sm:text-[0.8vw] font-extrabold tracking-widest uppercase text-white/40">
          {campaign.brand}
        </span>
      </div>
    </div>
  );
}
