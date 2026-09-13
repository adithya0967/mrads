'use client';

import React from 'react';

export default function NetworkIndicator() {
  const items = [
    {
      title: 'PREMIUM INVENTORY',
      desc: 'Prime high-intent commercial corridors',
    },
    {
      title: 'CITY-WIDE COVERAGE',
      desc: 'Physical billboards & digital displays',
    },
    {
      title: '24/7 DIGITAL ROTATION',
      desc: 'Dynamic day & dusk schedule sync',
    },
  ];

  return (
    <div className="w-full mt-4 sm:mt-5 p-3.5 sm:p-4 rounded-xl bg-[#0D0D0D]/90 border border-white/[0.08] shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
        {items.map((item, idx) => (
          <div key={idx} className={`flex flex-col ${idx !== 0 ? 'pt-2.5 sm:pt-0 sm:pl-4' : ''}`}>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C83A4B]"></span>
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[#F4F1EC]">
                {item.title}
              </span>
            </div>
            <span className="text-[11px] sm:text-[11.5px] text-[#929292] font-normal mt-0.5 leading-snug">
              {item.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
