'use client';

import ActiveAdScreen from './ActiveAdScreen';

export default function HeroSection() {
  return (
    <section id="hero" className="bg-[#090A0C] pt-16 md:pt-24 pb-16 border-b border-[#252830]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Small red eyebrow label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#641C2B]/30 border border-[#641C2B]">
              <span className="w-2 h-2 rounded-full bg-[#B4233C]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#C83A4B]">
                Bengaluru&apos;s Premium Advertising Network
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.1]">
              Reach Customers <br />
              <span className="text-[#C83A4B]">Where They Live, Work & Dine</span>
            </h1>

            <p className="text-lg md:text-xl text-[#9A9CA5] font-normal leading-relaxed max-w-2xl">
              Mr. Ads connects brands with high-intent audiences across Bengaluru through digital
              screens, transit media, Q-commerce inserts, corporate gifting, and digital solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-[#B4233C] text-white rounded-lg font-bold text-base hover:bg-[#D13B55] transition-colors shadow-md shadow-black/50"
              >
                Plan Your Campaign
              </a>
              <a
                href="#locations"
                className="px-7 py-3.5 bg-[#111318] text-[#F5F5F5] border border-[#252830] rounded-lg font-bold text-base hover:border-[#F5F5F5] transition-colors"
              >
                Explore Our Network
              </a>
            </div>
          </div>

          {/* Right Column: Active Live Digital Ad Screen */}
          <div className="lg:col-span-5 relative">
            <ActiveAdScreen />
          </div>
        </div>
      </div>
    </section>
  );
}
