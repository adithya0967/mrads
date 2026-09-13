'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';

const stats = [
  { value: '30,000+', label: 'Active Screens' },
  { value: '20M+', label: 'Combined Reach' },
  { value: '70+', label: 'Active Locations' },
  { value: '12×', label: 'Potential Plays / Hour' },
];

export default function HomeStats() {
  return (
    <section className="border-b border-line bg-graphite">
      <div className="container-site py-10">
        <div className="grid grid-cols-2 gap-8 divide-line md:grid-cols-4 md:divide-x">
          {stats.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.06}>
              <div className={idx > 0 ? 'md:pl-8' : ''}>
                <div className="flex items-center gap-2">
                  <span className="h-6 w-1.5 rounded-sm bg-brand" />
                  <span className="font-serif text-[28px] tracking-tight text-paper md:text-[32px]">
                    {stat.value}
                  </span>
                </div>
                <p className="mt-1 pl-3.5 text-[12px] font-medium uppercase tracking-wide text-mute">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
