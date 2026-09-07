import React from 'react';

interface CreativeSectionProps {
  onPrefill: (env: string | null, interest?: string | null) => void;
}

export default function CreativeSection({ onPrefill }: CreativeSectionProps) {
  return (
    <section id="creative" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20 text-white">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 reveal in">
          <p className="crumb">
            <a href="#home">Home</a> / Print & Creative
          </p>
          <h2 className="serif text-3xl sm:text-[40px] tracking-tight mt-2 text-white">
            Print & Creative Design Solutions
          </h2>
          <p className="text-slate-400 mt-3 text-[15px] leading-relaxed">
            Refined creatives that make every screen, street and home placement work harder. One design language — from standee to social.
          </p>
          <div className="mt-6 bg-[#121B2D] border border-slate-800 rounded-2xl p-5 text-white">
            <p className="font-extrabold text-[15px] text-white">Need creatives with your media?</p>
            <p className="text-slate-400 text-[13.5px] mt-1">Bundle design with any display, moving-media or offline plan.</p>
            <a
              href="#contact"
              onClick={() => onPrefill('Print & Creative Design', 'Creative Services')}
              data-interest="Creative Services"
              className="mt-4 btn-primary inline-flex items-center gap-2 font-bold text-sm px-5 py-3 rounded-full"
            >
              Bundle creatives <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-[#121B2D] border border-slate-800 rounded-2xl p-5 shadow-card card-hover reveal in flex gap-4">
              <span className="w-11 h-11 shrink-0 rounded-xl bg-[#162238] border border-slate-700 text-brand flex items-center justify-center">
                <i className="fa-regular fa-file-lines"></i>
              </span>
              <div>
                <h3 className="font-extrabold text-[15px] text-white">Brochure & Catalogue Design</h3>
                <p className="text-slate-400 text-[13px] mt-1">Structured, print-ready layouts that sell the full story.</p>
              </div>
            </div>

            <div className="bg-[#121B2D] border border-slate-800 rounded-2xl p-5 shadow-card card-hover reveal in reveal-d1 flex gap-4">
              <span className="w-11 h-11 shrink-0 rounded-xl bg-brand text-white flex items-center justify-center">
                <i className="fa-regular fa-image"></i>
              </span>
              <div>
                <h3 className="font-extrabold text-[15px] text-white">Flyer / Poster / Banner Design</h3>
                <p className="text-slate-400 text-[13px] mt-1">High-impact singles for distribution, walls and roadsides.</p>
              </div>
            </div>

            <div className="bg-[#121B2D] border border-slate-800 rounded-2xl p-5 shadow-card card-hover reveal in flex gap-4">
              <span className="w-11 h-11 shrink-0 rounded-xl bg-[#162238] border border-slate-700 text-brand flex items-center justify-center">
                <i className="fa-solid fa-sign-hanging"></i>
              </span>
              <div>
                <h3 className="font-extrabold text-[15px] text-white">Standee & Stall Branding</h3>
                <p className="text-slate-400 text-[13px] mt-1">Event and retail presence that stops footfall.</p>
              </div>
            </div>

            <div className="bg-[#121B2D] border border-slate-800 rounded-2xl p-5 shadow-card card-hover reveal in reveal-d1 flex gap-4">
              <span className="w-11 h-11 shrink-0 rounded-xl bg-brand text-white flex items-center justify-center">
                <i className="fa-solid fa-signs-post"></i>
              </span>
              <div>
                <h3 className="font-extrabold text-[15px] text-white">Pole Boards & No-Parking Boards</h3>
                <p className="text-slate-400 text-[13px] mt-1">Everyday street furniture turned into recall assets.</p>
              </div>
            </div>

            <div className="bg-[#121B2D] border border-slate-800 rounded-2xl p-5 shadow-card card-hover reveal in flex gap-4">
              <span className="w-11 h-11 shrink-0 rounded-xl bg-[#162238] border border-slate-700 text-brand flex items-center justify-center">
                <i className="fa-solid fa-book-open"></i>
              </span>
              <div>
                <h3 className="font-extrabold text-[15px] text-white">Magazine Advertisements</h3>
                <p className="text-slate-400 text-[13px] mt-1">Editorial-grade print ads with clean hierarchy.</p>
              </div>
            </div>

            <div className="bg-[#121B2D] border border-slate-800 rounded-2xl p-5 shadow-card card-hover reveal in reveal-d1 flex gap-4">
              <span className="w-11 h-11 shrink-0 rounded-xl bg-brand text-white flex items-center justify-center">
                <i className="fa-brands fa-instagram"></i>
              </span>
              <div>
                <h3 className="font-extrabold text-[15px] text-white">Social Media Creatives</h3>
                <p className="text-slate-400 text-[13px] mt-1">Feed-ready visuals that extend offline recall online.</p>
              </div>
            </div>

            <div className="sm:col-span-2 rounded-2xl overflow-hidden border border-slate-800 shadow-card img-zoom relative reveal in">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop"
                alt="Designer working on brand creative portfolio"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex items-end p-5"
                style={{ background: 'linear-gradient(180deg,transparent 30%,rgba(9,13,22,.85))' }}
              >
                <div>
                  <p className="text-white font-extrabold">Promotional marketing materials</p>
                  <p className="text-slate-300 text-[13px]">A complete kit — designed once, deployed everywhere.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
