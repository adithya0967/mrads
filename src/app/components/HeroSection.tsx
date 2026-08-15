'use client';

import ActiveAdScreen from './ActiveAdScreen';

export default function HeroSection() {
  return (
    <section id="hero" className="bg-[#0B0C0E] pt-16 md:pt-24 pb-16 border-b border-[#22242B]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Small red eyebrow label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#DC2626]/15 border border-[#DC2626]/30">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                Bengaluru's Premium Advertising Network
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Reach Customers <br />
              <span className="text-[#DC2626]">Where They Live, Work & Dine</span>
            </h1>

            <p className="text-lg md:text-xl text-[#9A9AA4] font-normal leading-relaxed max-w-2xl">
              Mr. Ads connects brands with high-intent audiences across Bengaluru through digital screens, transit media, Q-commerce inserts, corporate gifting, and digital solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-[#DC2626] text-white rounded-lg font-bold text-base hover:bg-[#B91C1C] transition-colors shadow-md shadow-black/50"
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

          {/* Right Column: Active Live Digital Ad Screen */}
          <div className="lg:col-span-5 relative">
            <ActiveAdScreen />
          </div>
        </div>
      </div>
    </section>
  );
}


