import React from 'react';

interface OfflineSectionProps {
  onPrefill: (env: string | null, interest?: string | null) => void;
}

export default function OfflineSection({ onPrefill }: OfflineSectionProps) {
  return (
    <section id="offline" className="bg-[#0B101D] border-y border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="reveal in">
          <p className="crumb">
            <a href="#home">Home</a> / <a href="#solutions">Solutions</a> / Offline & Print
          </p>
          <h2 className="serif text-3xl sm:text-[42px] tracking-tight mt-2 text-white">Offline & Print</h2>
          <p className="text-slate-400 mt-3 max-w-2xl">
            Physical media that lands in hands and homes — distributed with area-level discipline.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mt-10">
          <div className="bg-[#121B2D] rounded-3xl border border-slate-800 shadow-card overflow-hidden card-hover reveal in flex flex-col">
            <div className="h-48 overflow-hidden img-zoom">
              <img
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800&auto=format&fit=crop"
                alt="Team distributing flyers hand to hand"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-[11px] font-bold tracking-[.12em] uppercase text-brand">
                Offline Flyer Distribution
              </span>
              <h3 className="font-extrabold text-lg mt-2 text-white">In hands, on streets, at doors</h3>
              <p className="text-slate-400 text-[14px] mt-2">
                Hand-to-hand, door-to-door, apartment promotions and event / campaign promotions.
              </p>
              <p className="spec-label mt-5 mb-2">Coverage</p>
              <div className="flex flex-wrap gap-2 text-[12px] font-bold">
                <span className="bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Metro stations</span>
                <span className="bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Bus stations</span>
                <span className="bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Shopping malls</span>
                <span className="bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Residential communities</span>
                <span className="bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Markets</span>
                <span className="bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">High-footfall locations</span>
              </div>
              <a
                href="#contact"
                onClick={() => onPrefill('Offline Flyer Distribution')}
                data-env="Offline Flyer Distribution"
                className="mt-5 btn-primary text-center font-bold text-sm px-5 py-3 rounded-full mt-auto"
              >
                Plan distribution
              </a>
            </div>
          </div>

          <div className="bg-[#121B2D] rounded-3xl border border-slate-800 shadow-card overflow-hidden card-hover reveal in reveal-d1 flex flex-col">
            <div className="h-48 overflow-hidden img-zoom">
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop"
                alt="Stack of newspapers for insert distribution"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-[11px] font-bold tracking-[.12em] uppercase text-brand">
                Newspaper & Quick Commerce Inserts
              </span>
              <h3 className="font-extrabold text-lg mt-2 text-white">Reach homes, area by area</h3>
              <p className="text-slate-400 text-[14px] mt-2">
                Reach homes through official partners, with trackable area-wise distribution through official dark stores for hyperlocal residential reach.
              </p>
              <div className="mt-4 bg-[#162238] border border-slate-700/80 rounded-2xl p-4 text-[13px]">
                <p className="flex gap-2">
                  <i className="fa-solid fa-check text-emerald-400 mt-1"></i>
                  <span>
                    <b className="text-white">Home delivery</b> via established insert routes
                  </span>
                </p>
                <p className="flex gap-2 mt-2">
                  <i className="fa-solid fa-check text-emerald-400 mt-1"></i>
                  <span>
                    <b className="text-white">Trackable, area-wise</b> distribution discipline
                  </span>
                </p>
                <p className="flex gap-2 mt-2">
                  <i className="fa-solid fa-check text-emerald-400 mt-1"></i>
                  <span>
                    <b className="text-white">Hyperlocal residential</b> targeting
                  </span>
                </p>
              </div>
              <a
                href="#contact"
                onClick={() => onPrefill('Newspaper & Quick Commerce Inserts')}
                data-env="Newspaper & Quick Commerce Inserts"
                className="mt-5 btn-primary text-center font-bold text-sm px-5 py-3 rounded-full mt-auto"
              >
                Plan inserts
              </a>
            </div>
          </div>

          <div className="bg-[#121B2D] rounded-3xl border border-slate-800 shadow-card overflow-hidden card-hover reveal in reveal-d2 flex flex-col">
            <div className="h-48 overflow-hidden img-zoom">
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop"
                alt="Pharmacy counter with medicine covers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-[11px] font-bold tracking-[.12em] uppercase text-brand">
                Pharmacy Cover Advertising
              </span>
              <h3 className="font-extrabold text-lg mt-2 text-white">Practical take-home branding</h3>
              <p className="text-slate-400 text-[14px] mt-2">
                Distributed through partner pharmacies. Repeated visibility every time the cover is reused at home.
              </p>
              <p className="spec-label mt-5 mb-2">Suitable for</p>
              <div className="flex flex-wrap gap-2 text-[12px] font-bold">
                <span className="bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Healthcare</span>
                <span className="bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Education</span>
                <span className="bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Retail</span>
                <span className="bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Local businesses</span>
              </div>
              <a
                href="#contact"
                onClick={() => onPrefill('Pharmacy Cover Advertising')}
                data-env="Pharmacy Cover Advertising"
                className="mt-5 btn-primary text-center font-bold text-sm px-5 py-3 rounded-full mt-auto"
              >
                Plan pharmacy covers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
