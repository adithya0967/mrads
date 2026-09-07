import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-[#121B2D]/50 blur-3xl"></div>
        <div className="absolute top-40 -left-32 w-[420px] h-[420px] rounded-full dot-grid opacity-40"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 lg:pt-16 pb-10 lg:pb-16 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 reveal in">
            <div className="inline-flex items-center gap-2 bg-[#121B2D] border border-slate-800 rounded-full pl-1.5 pr-4 py-1.5 shadow-card text-[12.5px] font-semibold">
              <span className="bg-brand text-white text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wide">
                MR · MR ADS
              </span>
              <span className="text-slate-200">Hyperlocal Advertising Solutions</span>
            </div>
            <p className="mt-5 text-[12px] font-bold tracking-[.2em] uppercase text-brand">Mr. Ads</p>
            <h1 className="serif text-[42px] sm:text-[56px] lg:text-[62px] leading-[1.02] tracking-tight text-white mt-2">
              Hyperlocal<br />
              Advertising, <span className="italic font-medium text-slate-200">done right.</span>
            </h1>
            <p className="mt-4 text-[17px] font-semibold text-slate-200">
              Connecting Brands with the Right Audience through Innovative Advertising Solutions.
            </p>
            <p className="mt-3 text-slate-400 leading-relaxed max-w-xl">
              Mr. Ads connects brands with audiences through digital displays, outdoor / moving media, offline distribution, creative services and promotional branding — planned end-to-end, street by street.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                data-cta="Get a Media Plan"
                className="btn-primary inline-flex justify-center items-center gap-2 font-bold px-7 py-4 rounded-full text-[15px]"
              >
                Get a Media Plan <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
              <a
                href="#solutions"
                className="btn-ghost inline-flex justify-center items-center gap-2 font-bold px-7 py-4 rounded-full text-[15px] text-slate-200 hover:text-white"
              >
                Explore Solutions <i className="fa-solid fa-arrow-down text-xs"></i>
              </a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-semibold text-slate-300">
              <span className="flex items-center gap-2">
                <span className="tick bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                  <i className="fa-solid fa-check text-[11px]"></i>
                </span>{' '}
                End-to-end campaign support
              </span>
              <span className="flex items-center gap-2">
                <span className="tick bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                  <i className="fa-solid fa-check text-[11px]"></i>
                </span>{' '}
                Multiple channels, one partner
              </span>
              <span className="flex items-center gap-2">
                <span className="tick bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                  <i className="fa-solid fa-check text-[11px]"></i>
                </span>{' '}
                Repeated local visibility
              </span>
            </div>
            <div className="mt-6 flex items-center gap-4 text-[13px] text-slate-400">
              <a href="tel:+919686544644" className="flex items-center gap-2 font-bold text-slate-200 hover:text-brand">
                <span className="w-9 h-9 rounded-full bg-[#121B2D] border border-slate-800 flex items-center justify-center">
                  <i className="fa-solid fa-phone text-xs text-brand"></i>
                </span>{' '}
                +91 96865 44644
              </a>
              <span className="hidden sm:inline text-slate-700">|</span>
              <a href="mailto:knowus@mr-ads.in" className="hidden sm:flex items-center gap-2 font-semibold text-slate-300 hover:text-brand">
                <i className="fa-regular fa-envelope text-brand"></i> knowus@mr-ads.in
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative reveal in reveal-d1">
            <div className="relative rounded-[26px] overflow-hidden shadow-lift border border-slate-800 img-zoom">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop"
                alt="Urban advertising and digital screens in a city at dusk"
                className="w-full h-[420px] sm:h-[500px] object-cover"
                loading="eager"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg,rgba(9,13,22,0) 40%,rgba(9,13,22,.85) 100%)' }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-wrap gap-2">
                <span className="bg-[#121B2D]/90 border border-slate-700/80 backdrop-blur text-slate-100 text-[12px] font-bold px-3.5 py-2 rounded-full">
                  Digital Displays
                </span>
                <span className="bg-[#121B2D]/90 border border-slate-700/80 backdrop-blur text-slate-100 text-[12px] font-bold px-3.5 py-2 rounded-full">
                  Outdoor & Moving Media
                </span>
                <span className="bg-brand text-white text-[12px] font-bold px-3.5 py-2 rounded-full">
                  Physical & Print Media
                </span>
              </div>
              <div className="absolute top-4 left-4 bg-[#121B2D]/90 border border-slate-700/80 backdrop-blur rounded-2xl px-4 py-3 shadow-card flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-brand/20 text-brand flex items-center justify-center">
                  <i className="fa-solid fa-tv"></i>
                </span>
                <div className="leading-tight">
                  <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400">Now playing</p>
                  <p className="text-[13.5px] font-extrabold text-white">Brand film · 25-sec slot</p>
                </div>
                <span className="ml-2 flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block"></span> LIVE
                </span>
              </div>
            </div>
            <div className="float-card absolute -left-3 sm:-left-6 top-1/3 bg-[#121B2D] rounded-2xl border border-slate-700 shadow-lift p-4 w-[200px] hidden sm:block">
              <p className="spec-label text-slate-400">Apartment network</p>
              <p className="text-2xl font-extrabold text-white num mt-1">
                30,000<span className="text-brand">+</span> <span className="text-sm font-bold text-slate-300">screens</span>
              </p>
              <p className="text-[12px] text-slate-400 font-medium mt-1">Opportunity to reach 15M+ audiences</p>
            </div>
            <div className="float-card2 absolute -right-2 sm:-right-4 -bottom-5 bg-[#162238] border border-slate-700 text-white rounded-2xl shadow-lift p-4 w-[215px]">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-repeat text-brand" style={{ color: '#FF6B70' }}></i>
                <p className="text-[12px] font-bold tracking-wide text-white">Repeated every 5 min</p>
              </div>
              <p className="text-[13px] text-slate-300 mt-1 leading-snug">
                Restaurant screens · 180 plays / day · 7:30 AM – 10 PM
              </p>
            </div>
          </div>
        </div>

        {/* trust strip */}
        <div className="mt-12 bg-[#121B2D] border border-slate-800 rounded-2xl shadow-card px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4 reveal in">
          <p className="text-[13px] font-bold tracking-[.14em] uppercase text-slate-400">Where your audience already is</p>
          <div className="marquee max-w-full md:max-w-[70%] text-[13.5px] font-bold text-slate-200">
            <div className="marquee-track">
              <span>Restaurants</span>
              <span className="text-brand">•</span>
              <span>Apartments</span>
              <span className="text-brand">•</span>
              <span>Corporates</span>
              <span className="text-brand">•</span>
              <span>Malls</span>
              <span className="text-brand">•</span>
              <span>Fitness Centres</span>
              <span className="text-brand">•</span>
              <span>Play Zones</span>
              <span className="text-brand">•</span>
              <span>PG & Hostels</span>
              <span className="text-brand">•</span>
              <span>Autos · Cabs · Buses</span>
              <span className="text-brand">•</span>
              <span>Restaurants</span>
              <span className="text-brand">•</span>
              <span>Apartments</span>
              <span className="text-brand">•</span>
              <span>Corporates</span>
              <span className="text-brand">•</span>
              <span>Malls</span>
              <span className="text-brand">•</span>
              <span>Fitness Centres</span>
              <span className="text-brand">•</span>
              <span>Play Zones</span>
              <span className="text-brand">•</span>
              <span>PG & Hostels</span>
              <span className="text-brand">•</span>
              <span>Autos · Cabs · Buses</span>
              <span className="text-brand">•</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
