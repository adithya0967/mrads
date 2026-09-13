import React from 'react';

interface DigitalAiSectionProps {
  onPrefill: (env: string | null, interest?: string | null) => void;
}

export default function DigitalAiSection({ onPrefill }: DigitalAiSectionProps) {
  return (
    <section id="digital" className="bg-[#090D16] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -left-32 top-20 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(200,58,75,.2),transparent 70%)' }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="reveal in">
            <p
              className="text-[12px] font-bold tracking-[.2em] uppercase"
              style={{ color: '#FF8A8E' }}
            >
              <a href="#home" className="hover:text-white">
                Home
              </a>{' '}
              / Digital & AI Solutions
            </p>
            <h2 className="serif text-3xl sm:text-[42px] tracking-tight mt-3 text-white">
              Website Design, Development & AI Solutions
            </h2>
            <p className="text-slate-400 mt-3">
              A premium digital foundation so the demand your offline campaign creates has somewhere
              excellent to land.
            </p>
            <div className="mt-7 grid gap-3">
              <div className="bg-[#121B2D] border border-slate-800 rounded-2xl p-5 flex gap-4">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-brand flex items-center justify-center text-white">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <div>
                  <h3 className="font-extrabold text-white">Business Websites</h3>
                  <p className="text-slate-400 text-[13.5px] mt-1">
                    Fast, credible company sites built to convert enquiries.
                  </p>
                </div>
              </div>
              <div className="bg-[#121B2D] border border-slate-800 rounded-2xl p-5 flex gap-4">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-[#162238] border border-slate-700 text-brand flex items-center justify-center">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <div>
                  <h3 className="font-extrabold text-white">E-Commerce Solutions</h3>
                  <p className="text-slate-400 text-[13.5px] mt-1">
                    Catalogues, carts and checkout — ready to sell online.
                  </p>
                </div>
              </div>
              <div className="bg-[#121B2D] border border-slate-800 rounded-2xl p-5 flex gap-4">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-[#162238] border border-slate-700 text-brand flex items-center justify-center">
                  <i className="fa-solid fa-robot"></i>
                </span>
                <div>
                  <h3 className="font-extrabold text-white">AI Chatbots</h3>
                  <p className="text-slate-400 text-[13.5px] mt-1">
                    Instant answers and lead capture, even after hours.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-[#121B2D] border border-slate-800 rounded-2xl p-5">
                  <h3 className="font-extrabold text-[15px] text-white">
                    <i className="fa-solid fa-server mr-2 text-brand"></i>Hosting & Maintenance
                  </h3>
                  <p className="text-slate-400 text-[13px] mt-1.5">
                    Secure hosting with ongoing care.
                  </p>
                </div>
                <div className="bg-[#121B2D] border border-slate-800 rounded-2xl p-5">
                  <h3 className="font-extrabold text-[15px] text-white">
                    <i className="fa-solid fa-wand-magic-sparkles mr-2 text-brand"></i>Website
                    Redesign
                  </h3>
                  <p className="text-slate-400 text-[13px] mt-1.5">
                    Modernise dated sites without losing SEO.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal in reveal-d1">
            <div className="bg-[#121B2D] text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lift">
              <h3 className="font-extrabold text-lg text-white">Benefits, built in</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-[13.5px]">
                <div className="flex items-center gap-2.5 bg-[#162238] border border-slate-700/80 rounded-xl px-4 py-3 font-bold text-slate-200">
                  <i className="fa-solid fa-award text-brand"></i> Professional Online Presence
                </div>
                <div className="flex items-center gap-2.5 bg-[#162238] border border-slate-700/80 rounded-xl px-4 py-3 font-bold text-slate-200">
                  <i className="fa-solid fa-mobile-screen text-brand"></i> Mobile Friendly
                </div>
                <div className="flex items-center gap-2.5 bg-[#162238] border border-slate-700/80 rounded-xl px-4 py-3 font-bold text-slate-200">
                  <i className="fa-solid fa-magnifying-glass text-brand"></i> SEO Ready
                </div>
                <div className="flex items-center gap-2.5 bg-[#162238] border border-slate-700/80 rounded-xl px-4 py-3 font-bold text-slate-200">
                  <i className="fa-solid fa-shield-halved text-brand"></i> Scalable & Secure
                </div>
                <div className="sm:col-span-2 flex items-center gap-2.5 bg-brand text-white rounded-xl px-4 py-3 font-bold">
                  <i className="fa-solid fa-headset text-white"></i> Ongoing Support
                </div>
              </div>
              <div className="mt-6 border-t border-slate-800 pt-6">
                <p className="spec-label text-slate-400">How we deliver</p>
                <ol className="mt-3 space-y-3 text-[14px]">
                  <li className="flex gap-3">
                    <span className="w-7 h-7 shrink-0 rounded-full bg-[#162238] border border-slate-700 text-white text-[12px] font-bold flex items-center justify-center">
                      1
                    </span>
                    <span>
                      <b className="text-white">Discover</b>{' '}
                      <span className="text-slate-400">
                        — goals, audience, pages & chatbot flows.
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-7 h-7 shrink-0 rounded-full bg-[#162238] border border-slate-700 text-white text-[12px] font-bold flex items-center justify-center">
                      2
                    </span>
                    <span>
                      <b className="text-white">Design</b>{' '}
                      <span className="text-slate-400">
                        — clean layouts matched to your offline branding.
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-7 h-7 shrink-0 rounded-full bg-[#162238] border border-slate-700 text-white text-[12px] font-bold flex items-center justify-center">
                      3
                    </span>
                    <span>
                      <b className="text-white">Build & launch</b>{' '}
                      <span className="text-slate-400">
                        — developed, tested, SEO-ready and hosted.
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-7 h-7 shrink-0 rounded-full bg-brand text-white text-[12px] font-bold flex items-center justify-center">
                      4
                    </span>
                    <span>
                      <b className="text-white">Support</b>{' '}
                      <span className="text-slate-400">
                        — maintenance, updates and improvements.
                      </span>
                    </span>
                  </li>
                </ol>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    onClick={() => onPrefill('Website / AI Solutions')}
                    data-env="Website / Digital & AI Solution"
                    className="btn-primary flex-1 text-center font-bold text-sm px-6 py-3.5 rounded-full"
                  >
                    Discuss my website
                  </a>
                  <a
                    href="#contact"
                    onClick={() => onPrefill(null, 'Customized Advertising Solutions')}
                    data-interest="Customized Advertising Solutions"
                    className="btn-ghost flex-1 text-center font-bold text-sm px-6 py-3.5 rounded-full text-slate-200 hover:text-white"
                  >
                    Combine offline + online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
