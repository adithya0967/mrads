'use client';

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const bengaluruHubs = [
  { name: 'Koramangala & HSR', type: 'Tech & Dining Corridor', screens: '8,500+ Screens' },
  { name: 'Indiranagar & MG Road', type: 'Premium Retail & F&B', screens: '6,200+ Screens' },
  { name: 'Whitefield & Marathahalli', type: 'IT Parks & Residential', screens: '9,000+ Screens' },
  {
    name: 'Malleshwaram & Rajajinagar',
    type: 'Heritage & High Footfall',
    screens: '4,500+ Screens',
  },
  { name: 'Jayanagar & JP Nagar', type: 'Residential & Commercial', screens: '5,000+ Screens' },
];

export default function NetworkMapSection() {
  return (
    <section className="py-20 md:py-28 bg-[#111318] border-b border-[#252830]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Scale & Metrics */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <ScrollReveal direction="right" delay={0}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C]">
                BENGALURU NETWORK SCALE
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15] mt-2 mb-4">
                City-Wide Footprint Across Key Commercial Hubs
              </h2>

              <p className="text-base sm:text-lg text-[#9A9CA5] leading-relaxed font-normal mb-6">
                Mr. Ads connects your brand directly to decision-makers across Bengaluru's highest
                density IT corridors, dining precincts, and premium residential neighborhoods.
              </p>

              <div className="grid grid-cols-2 gap-6 w-full pt-4 border-t border-[#252830]">
                <div>
                  <div className="text-3xl font-extrabold text-[#F5F5F5]">70+</div>
                  <div className="text-xs font-semibold text-[#9A9CA5] uppercase tracking-wider mt-1">
                    Active Venues
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#F5F5F5]">30,000+</div>
                  <div className="text-xs font-semibold text-[#9A9CA5] uppercase tracking-wider mt-1">
                    Digital Screens
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#B4233C]">20M+</div>
                  <div className="text-xs font-semibold text-[#9A9CA5] uppercase tracking-wider mt-1">
                    Combined Reach
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#F5F5F5]">2,000–3,000</div>
                  <div className="text-xs font-semibold text-[#9A9CA5] uppercase tracking-wider mt-1">
                    Daily Viewers / Venue
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Clean Geographic / Map-Inspired Visual Grid */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delay={100}>
              <div className="bg-[#090A0C] border border-[#252830] rounded-2xl p-8 shadow-md">
                <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#9A9CA5]">
                      Geographic Distribution
                    </div>
                    <div className="text-base font-extrabold text-[#F5F5F5]">
                      Greater Bengaluru Zones
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B4233C]" />
                </div>

                <div className="flex flex-col gap-4">
                  {bengaluruHubs.map((hub, idx) => (
                    <ScrollReveal
                      key={hub.name}
                      direction="up"
                      staggerIndex={idx}
                      totalItems={bengaluruHubs.length}
                      staggerDelay={110}
                    >
                      <div className="bg-[#111318] border border-[#252830] rounded-xl p-4 flex items-center justify-between hover:border-[#B4233C] transition-colors">
                        <div>
                          <div className="text-sm font-extrabold text-[#F5F5F5]">{hub.name}</div>
                          <div className="text-xs text-[#9A9CA5] font-normal">{hub.type}</div>
                        </div>
                        <span className="text-xs font-bold text-[#C83A4B] bg-[#641C2B]/30 px-3 py-1 rounded-md border border-[#641C2B]">
                          {hub.screens}
                        </span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
