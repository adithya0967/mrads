import React from 'react';

export default function AdvantageSection() {
  return (
    <section id="advantage" className="bg-[#0B101D] border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="max-w-3xl reveal in">
          <p className="crumb">
            <a href="#home">Home</a>{' / The Hyperlocal Advantage'}
          </p>
          <h2 className="serif text-3xl sm:text-[42px] leading-tight tracking-tight mt-3 text-white">
            The Hyperlocal Advantage
          </h2>
          <p className="text-slate-400 mt-3 leading-relaxed">
            Local growth has a visibility problem. Mr. Ads solves it with better targeting, repeated presence, and stronger recall — exactly where buying decisions happen.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mt-10">
          <div className="bg-[#121B2D] rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-card text-white reveal in">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-brand/20 text-brand flex items-center justify-center">
                <i className="fa-solid fa-magnifying-glass-chart"></i>
              </span>
              <h3 className="font-extrabold text-lg text-white">Market challenges we address</h3>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-[#162238] border border-slate-700/80">
                <span className="tick bg-[#121B2D] border border-slate-700 text-brand mt-0.5">
                  <i className="fa-solid fa-store text-[11px]"></i>
                </span>
                <div>
                  <p className="font-bold text-[15px] text-white">Better local visibility needed</p>
                  <p className="text-[14px] text-slate-400 mt-1">
                    Businesses need stronger local visibility and deeper customer engagement to grow.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-[#162238] border border-slate-700/80">
                <span className="tick bg-[#121B2D] border border-slate-700 text-brand mt-0.5">
                  <i className="fa-solid fa-tower-broadcast text-[11px]"></i>
                </span>
                <div>
                  <p className="font-bold text-[15px] text-white">Mass media misses the neighbourhood</p>
                  <p className="text-[14px] text-slate-400 mt-1">
                    TV, radio and newspapers offer limited local targeting for hyperlocal goals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-[#162238] border border-slate-700/80">
                <span className="tick bg-[#121B2D] border border-slate-700 text-brand mt-0.5">
                  <i className="fa-solid fa-arrow-trend-down text-[11px]"></i>
                </span>
                <div>
                  <p className="font-bold text-[15px] text-white">High cost, limited reach</p>
                  <p className="text-[14px] text-slate-400 mt-1">
                    High marketing costs with limited reach can reduce overall campaign effectiveness.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-[#162238] border border-slate-700/80">
                <span className="tick bg-[#121B2D] border border-slate-700 text-brand mt-0.5">
                  <i className="fa-solid fa-eye text-[11px]"></i>
                </span>
                <div>
                  <p className="font-bold text-[15px] text-white">Memory needs repetition</p>
                  <p className="text-[14px] text-slate-400 mt-1">
                    Brands need repeated visibility to stay memorable and drive attention.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#162238] text-white border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-lift relative overflow-hidden reveal in reveal-d1">
            <div
              className="absolute -right-20 -top-20 w-72 h-72 rounded-full"
              style={{ background: 'radial-gradient(circle,rgba(217,35,45,.4),transparent 70%)' }}
            ></div>
            <div className="flex items-center gap-3 relative">
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <i className="fa-solid fa-compass" style={{ color: '#FF6B70' }}></i>
              </span>
              <h3 className="font-extrabold text-lg text-white">The Mr. Ads approach</h3>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 relative">
              <div className="bg-[#121B2D]/80 border border-slate-700 rounded-2xl p-5">
                <i className="fa-solid fa-crosshairs text-xl" style={{ color: '#FF6B70' }}></i>
                <p className="font-bold mt-3 text-white">Better audience targeting</p>
                <p className="text-slate-300 text-[13.5px] mt-1 leading-relaxed">
                  Right place, right context — from dining tables to lift lobbies to gym floors.
                </p>
              </div>
              <div className="bg-[#121B2D]/80 border border-slate-700 rounded-2xl p-5">
                <i className="fa-solid fa-rotate-right text-xl" style={{ color: '#FF6B70' }}></i>
                <p className="font-bold mt-3 text-white">Repeated brand visibility</p>
                <p className="text-slate-300 text-[13.5px] mt-1 leading-relaxed">
                  High-frequency slots keep your brand in sight, all day, every day.
                </p>
              </div>
              <div className="bg-[#121B2D]/80 border border-slate-700 rounded-2xl p-5">
                <i className="fa-solid fa-handshake text-xl" style={{ color: '#FF6B70' }}></i>
                <p className="font-bold mt-3 text-white">Improved engagement</p>
                <p className="text-slate-300 text-[13.5px] mt-1 leading-relaxed">
                  Contextual placements that invite attention when intent is highest.
                </p>
              </div>
              <div className="bg-[#121B2D]/80 border border-slate-700 rounded-2xl p-5">
                <i className="fa-solid fa-brain text-xl" style={{ color: '#FF6B70' }}></i>
                <p className="font-bold mt-3 text-white">Stronger local recall</p>
                <p className="text-slate-300 text-[13.5px] mt-1 leading-relaxed">
                  Familiarity at neighbourhood scale that compounds into preference.
                </p>
              </div>
            </div>
            <a
              href="#display"
              className="relative mt-6 inline-flex items-center gap-2 bg-brand text-white font-bold text-sm px-6 py-3.5 rounded-full hover:bg-brand-dark transition"
            >
              See where we place you <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
