'use client';

import React from 'react';

const bengaluruHubs = [
  { name: 'Koramangala & HSR', type: 'Tech & Dining Corridor', screens: '8,500+ Screens' },
  { name: 'Indiranagar & MG Road', type: 'Premium Retail & F&B', screens: '6,200+ Screens' },
  { name: 'Whitefield & Marathahalli', type: 'IT Parks & Residential', screens: '9,000+ Screens' },
  { name: 'Malleshwaram & Rajajinagar', type: 'Heritage & High Footfall', screens: '4,500+ Screens' },
  { name: 'Jayanagar & JP Nagar', type: 'Residential & Commercial', screens: '5,000+ Screens' },
];

export default function NetworkMapSection() {
  return (
    <section className="py-20 md:py-28 bg-[#14151A] border-b border-[#22242B]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Scale & Metrics */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E52345]">
              BENGALURU NETWORK SCALE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              City-Wide Footprint Across Key Commercial Hubs
            </h2>

            <p className="text-base sm:text-lg text-[#9A9AA4] leading-relaxed font-normal">
              Mr. Ads connects your brand directly to decision-makers across Bengaluru's highest density IT corridors, dining precincts, and premium residential neighborhoods.
            </p>

            <div className="grid grid-cols-2 gap-6 w-full pt-4 border-t border-[#22242B]">
              <div>
                <div className="text-3xl font-extrabold text-white">70+</div>
                <div className="text-xs font-semibold text-[#9A9AA4] uppercase tracking-wider mt-1">
                  Active Venues
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">30,000+</div>
                <div className="text-xs font-semibold text-[#9A9AA4] uppercase tracking-wider mt-1">
                  Digital Screens
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#E52345]">20M+</div>
                <div className="text-xs font-semibold text-[#9A9AA4] uppercase tracking-wider mt-1">
                  Combined Reach
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">2,000–3,000</div>
                <div className="text-xs font-semibold text-[#9A9AA4] uppercase tracking-wider mt-1">
                  Daily Viewers / Venue
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Geographic / Map-Inspired Visual Grid */}
          <div className="lg:col-span-6">
            <div className="bg-[#0B0C0E] border border-[#22242B] rounded-2xl p-8 shadow-md">
              <div className="flex items-center justify-between pb-6 border-b border-[#22242B] mb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#9A9AA4]">
                    Geographic Distribution
                  </div>
                  <div className="text-base font-extrabold text-white">
                    Greater Bengaluru Zones
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E52345]" />
              </div>

              <div className="flex flex-col gap-4">
                {bengaluruHubs.map((hub) => (
                  <div
                    key={hub.name}
                    className="bg-[#14151A] border border-[#22242B] rounded-xl p-4 flex items-center justify-between hover:border-[#E52345] transition-colors"
                  >
                    <div>
                      <div className="text-sm font-extrabold text-white">{hub.name}</div>
                      <div className="text-xs text-[#9A9AA4] font-normal">{hub.type}</div>
                    </div>
                    <span className="text-xs font-bold text-[#E52345] bg-[#E52345]/15 px-3 py-1 rounded-md border border-[#E52345]/30">
                      {hub.screens}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

