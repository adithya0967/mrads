'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#090A0C] border-b border-[#252830]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#252830] bg-[#111318] aspect-[4/3] shadow-md">
              <AppImage
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                alt="High footfall premium restaurant in Bengaluru with elegant seating and digital display"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col items-start gap-5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C]">
              WHO WE ARE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15]">
              Bengaluru's Hyperlocal <br />
              <span className="text-[#C83A4B]">Advertising Network</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9A9CA5] leading-relaxed font-normal">
              Mr. Ads helps brands connect with target audiences inside high-footfall restaurants, corporate hubs, residential elevators, and transit routes across Bengaluru.
            </p>

            <p className="text-base text-[#9A9CA5] leading-relaxed font-normal">
              Our digital displays and direct placement networks ensure repeated visibility when customers are relaxed, attentive, and actively making purchasing decisions.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#252830] w-full">
              <div>
                <div className="text-2xl font-extrabold text-[#F5F5F5]">2,000–3,000</div>
                <div className="text-xs font-semibold text-[#9A9CA5] uppercase tracking-wider mt-0.5">
                  Daily Viewers / Location
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#B4233C]">12× / Hr</div>
                <div className="text-xs font-semibold text-[#9A9CA5] uppercase tracking-wider mt-0.5">
                  Repeated Ad Frequency
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
