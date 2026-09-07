import React from 'react';

export default function AdvantageSection() {
  return (
    <section id="advantage" className="bg-paper border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="max-w-3xl reveal in">
          <p className="crumb">
            <a href="#home">Home</a> / The Hyperlocal Advantage
          </p>
          <h2 className="serif text-3xl sm:text-[42px] leading-tight tracking-tight mt-3">
            The Hyperlocal Advantage
          </h2>
          <p className="text-muted mt-3 leading-relaxed">
            Local growth has a visibility problem. Mr. Ads solves it with better targeting, repeated presence, and stronger recall — exactly where buying decisions happen.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mt-10">
          <div className="bg-white rounded-3xl border border-line p-6 sm:p-8 shadow-card reveal in">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                <i className="fa-solid fa-magnifying-glass-chart"></i>
              </span>
              <h3 className="font-extrabold text-lg">Market challenges we address</h3>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-paper border border-line">
                <span className="tick bg-white border border-line text-brand mt-0.5">
                  <i className="fa-solid fa-store text-[11px]"></i>
                </span>
                <div>
                  <p className="font-bold text-[15px]">Better local visibility needed</p>
                  <p className="text-[14px] text-muted mt-1">
                    Businesses need stronger local visibility and deeper customer engagement to grow.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-paper border border-line">
                <span className="tick bg-white border border-line text-brand mt-0.5">
                  <i className="fa-solid fa-tower-broadcast text-[11px]"></i>
                </span>
                <div>
                  <p className="font-bold text-[15px]">Mass media misses the neighbourhood</p>
                  <p className="text-[14px] text-muted mt-1">
                    TV, radio and newspapers offer limited local targeting for hyperlocal goals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-paper border border-line">
                <span className="tick bg-white border border-line text-brand mt-0.5">
                  <i className="fa-solid fa-arrow-trend-down text-[11px]"></i>
                </span>
                <div>
                  <p className="font-bold text-[15px]">High cost, limited reach</p>
                  <p className="text-[14px] text-muted mt-1">
                    High marketing costs with limited reach can reduce overall campaign effectiveness.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-paper border border-line">
                <span className="tick bg-white border border-line text-brand mt-0.5">
                  <i className="fa-solid fa-eye text-[11px]"></i>
                </span>
                <div>
                  <p className="font-bold text-[15px]">Memory needs repetition</p>
                  <p className="text-[14px] text-muted mt-1">
                    Brands need repeated visibility to stay memorable and drive attention.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy text-white rounded-3xl p-6 sm:p-8 shadow-lift relative overflow-hidden reveal in reveal-d1">
            <div
              className="absolute -right-20 -top-20 w-72 h-72 rounded-full"
              style={{ background: 'radial-gradient(circle,rgba(217,35,45,.35),transparent 70%)' }}
            ></div>
            <div className="flex items-center gap-3 relative">
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <i className="fa-solid fa-compass" style={{ color: '#FF6B70' }}></i>
              </span>
              <h3 className="font-extrabold text-lg">The Mr. Ads approach</h3>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 relative">
              <div className="bg-white/[.07] border border-white/10 rounded-2xl p-5">
                <i className="fa-solid fa-crosshairs text-xl" style={{ color: '#FF6B70' }}></i>
                <p className="font-bold mt-3">Better audience targeting</p>
                <p className="text-white/65 text-[13.5px] mt-1 leading-relaxed">
                  Right place, right context — from dining tables to lift lobbies to gym floors.
                </p>
              </div>
              <div className="bg-white/[.07] border border-white/10 rounded-2xl p-5">
                <i className="fa-solid fa-rotate-right text-xl" style={{ color: '#FF6B70' }}></i>
                <p className="font-bold mt-3">Repeated brand visibility</p>
                <p className="text-white/65 text-[13.5px] mt-1 leading-relaxed">
                  High-frequency slots keep your brand in sight, all day, every day.
                </p>
              </div>
              <div className="bg-white/[.07] border border-white/10 rounded-2xl p-5">
                <i className="fa-solid fa-handshake text-xl" style={{ color: '#FF6B70' }}></i>
                <p className="font-bold mt-3">Improved engagement</p>
                <p className="text-white/65 text-[13.5px] mt-1 leading-relaxed">
                  Contextual placements that invite attention when intent is highest.
                </p>
              </div>
              <div className="bg-white/[.07] border border-white/10 rounded-2xl p-5">
                <i className="fa-solid fa-brain text-xl" style={{ color: '#FF6B70' }}></i>
                <p className="font-bold mt-3">Stronger local recall</p>
                <p className="text-white/65 text-[13.5px] mt-1 leading-relaxed">
                  Familiarity at neighbourhood scale that compounds into preference.
                </p>
              </div>
            </div>
            <a
              href="#display"
              className="relative mt-6 inline-flex items-center gap-2 bg-white text-navy font-bold text-sm px-6 py-3.5 rounded-full hover:bg-brand hover:text-white transition"
            >
              See where we place you <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
