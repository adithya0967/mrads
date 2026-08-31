'use client';

import React from 'react';
import MonopoleBillboard from '@/components/cinematic/MonopoleBillboard';

export default function ActiveAdScreen() {
  return (
    <div className="flex flex-col gap-6">
      {/* Realistic Outdoor Monopole Billboard with Running Ads */}
      <MonopoleBillboard showEnvironment={true} />

      {/* STAT BADGE PLACED BELOW THE ADVERTISING SCREEN */}
      <div className="bg-[#111318] border border-[#252830] rounded-xl p-3.5 sm:p-4 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16C784] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#16C784]" />
          </div>
          <div>
            <div className="text-[10px] sm:text-xs font-semibold text-[#9A9CA5] uppercase tracking-wider">
              Active Screens
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-[#F5F5F5] flex items-center gap-1.5">
              30,000+
              <span className="text-[10px] font-normal text-[#16C784] bg-[#16C784]/10 px-1.5 py-0.2 rounded border border-[#16C784]/20">
                ONLINE NOW
              </span>
            </div>
          </div>
        </div>

        <div className="h-8 w-[1px] bg-[#252830]" />

        <div>
          <div className="text-[10px] sm:text-xs font-semibold text-[#9A9CA5] uppercase tracking-wider">
            Combined Reach
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-[#B4233C]">20M+</div>
        </div>
      </div>
    </div>
  );
}

