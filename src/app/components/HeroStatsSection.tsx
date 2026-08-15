'use client';

import React from 'react';

const stats = [
  { value: '30,000+', label: 'Active Screens' },
  { value: '20M+', label: 'Combined Reach' },
  { value: '70+', label: 'Active Locations' },
  { value: '12×', label: 'Potential Plays / Hour' },
];

export default function HeroStatsSection() {
  return (
    <section className="bg-[#111318] border-b border-[#252830] py-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#252830]">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-start ${idx > 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-6 bg-[#B4233C] rounded-full" />
                <span className="text-3xl md:text-4xl font-extrabold text-[#F5F5F5] tracking-tight">
                  {stat.value}
                </span>
              </div>
              <span className="text-xs md:text-sm font-semibold text-[#9A9CA5] tracking-wide uppercase pl-3.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
