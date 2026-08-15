'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  return (
    <section id="hero" className="bg-[#0B0C0E] pt-16 md:pt-24 pb-16 border-b border-[#22242B]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Small red eyebrow label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#E52345]/15 border border-[#E52345]/30">
              <span className="w-2 h-2 rounded-full bg-[#E52345]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#E52345]">
                Bengaluru's Premium Advertising Network
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Reach Customers <br />
              <span className="text-[#E52345]">Where They Live, Work & Dine</span>
            </h1>

            <p className="text-lg md:text-xl text-[#9A9AA4] font-normal leading-relaxed max-w-2xl">
              Mr. Ads connects brands with high-intent audiences across Bengaluru through digital screens, transit media, Q-commerce inserts, corporate gifting, and digital solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-[#E52345] text-white rounded-lg font-bold text-base hover:bg-[#c91837] transition-colors shadow-md shadow-black/50"
              >
                Plan Your Campaign
              </a>
              <a
                href="#locations"
                className="px-7 py-3.5 bg-[#14151A] text-white border border-[#22242B] rounded-lg font-bold text-base hover:border-white transition-colors"
              >
                Explore Our Network
              </a>
            </div>
          </div>

          {/* Right Column: Premium Photography with Understated Stat Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#22242B] shadow-lg shadow-black/50 bg-[#14151A] aspect-[4/3] sm:aspect-[14/10]">
              <AppImage
                src="https://images.unsplash.com/photo-1556700485-cc335d219007"
                alt="Premium restaurant in Bengaluru with subtle digital display screen for advertising"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              {/* Small, understated stat overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#14151A]/95 backdrop-blur-md border border-[#22242B] rounded-xl p-4 flex items-center justify-between shadow-md">
                <div>
                  <div className="text-xs font-semibold text-[#9A9AA4] uppercase tracking-wider">Active Screens</div>
                  <div className="text-xl font-extrabold text-white">30,000+</div>
                </div>
                <div className="h-8 w-[1px] bg-[#22242B]" />
                <div>
                  <div className="text-xs font-semibold text-[#9A9AA4] uppercase tracking-wider">Combined Reach</div>
                  <div className="text-xl font-extrabold text-[#E52345]">20M+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


