import React from 'react';

export default function WhyFullSection() {
  return (
    <section id="why" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
      <div className="text-center max-w-3xl mx-auto reveal in">
        <p className="crumb">
          <a href="#home">Home</a> / Why Mr. Ads
        </p>
        <h2 className="serif text-3xl sm:text-[42px] tracking-tight mt-2">Why Mr. Ads</h2>
        <p className="text-muted mt-3">Six deck-supported differentiators — told simply, delivered consistently.</p>
      </div>

      <div className="mt-10 relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-line"></div>
        <div className="grid gap-5">
          <div className="grid lg:grid-cols-2 gap-5 items-stretch">
            <div className="bg-white border border-line rounded-3xl p-7 shadow-card card-hover reveal in lg:text-right lg:mr-8 relative">
              <span className="hidden lg:flex absolute -right-[52px] top-7 w-9 h-9 rounded-full bg-navy text-white text-[13px] font-bold items-center justify-center border-4 border-white shadow">
                1
              </span>
              <h3 className="font-extrabold text-lg">Hyperlocal Reach</h3>
              <p className="text-muted text-[14px] mt-2">
                From apartment lifts to restaurant tables to gym floors — we place brands inside daily routines, not just alongside them.
              </p>
            </div>
            <div className="hidden lg:block"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 items-stretch">
            <div className="hidden lg:block"></div>
            <div className="bg-white border border-line rounded-3xl p-7 shadow-card card-hover reveal in lg:ml-8 relative">
              <span className="hidden lg:flex absolute -left-[52px] top-7 w-9 h-9 rounded-full bg-brand text-white text-[13px] font-bold items-center justify-center border-4 border-white shadow">
                2
              </span>
              <h3 className="font-extrabold text-lg">Multiple Advertising Channels</h3>
              <p className="text-muted text-[14px] mt-2">
                Screens, streets, homes and print — orchestrated as one plan so frequency compounds instead of scattering.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 items-stretch">
            <div className="bg-white border border-line rounded-3xl p-7 shadow-card card-hover reveal in lg:text-right lg:mr-8 relative">
              <span className="hidden lg:flex absolute -right-[52px] top-7 w-9 h-9 rounded-full bg-navy text-white text-[13px] font-bold items-center justify-center border-4 border-white shadow">
                3
              </span>
              <h3 className="font-extrabold text-lg">Creative & Digital Solutions</h3>
              <p className="text-muted text-[14px] mt-2">
                Design, print and web + AI under one roof — your campaign arrives looking sharp and launches with somewhere to convert.
              </p>
            </div>
            <div className="hidden lg:block"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 items-stretch">
            <div className="hidden lg:block"></div>
            <div className="bg-white border border-line rounded-3xl p-7 shadow-card card-hover reveal in lg:ml-8 relative">
              <span className="hidden lg:flex absolute -left-[52px] top-7 w-9 h-9 rounded-full bg-brand text-white text-[13px] font-bold items-center justify-center border-4 border-white shadow">
                4
              </span>
              <h3 className="font-extrabold text-lg">Better Brand Visibility</h3>
              <p className="text-muted text-[14px] mt-2">
                Premium placements plus high-frequency repetition — the combination that turns glances into memory.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 items-stretch">
            <div className="bg-white border border-line rounded-3xl p-7 shadow-card card-hover reveal in lg:text-right lg:mr-8 relative">
              <span className="hidden lg:flex absolute -right-[52px] top-7 w-9 h-9 rounded-full bg-navy text-white text-[13px] font-bold items-center justify-center border-4 border-white shadow">
                5
              </span>
              <h3 className="font-extrabold text-lg">End-to-End Campaign Support</h3>
              <p className="text-muted text-[14px] mt-2">
                Media planning, creatives, deployment and coordination — you brief once, we handle the rest.
              </p>
            </div>
            <div className="hidden lg:block"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 items-stretch">
            <div className="hidden lg:block"></div>
            <div className="bg-navy text-white rounded-3xl p-7 shadow-lift card-hover reveal in lg:ml-8 relative">
              <span className="hidden lg:flex absolute -left-[52px] top-7 w-9 h-9 rounded-full bg-white text-navy text-[13px] font-bold items-center justify-center border-4 border-navy">
                6
              </span>
              <h3 className="font-extrabold text-lg">One Partner, Multiple Solutions</h3>
              <p className="text-white/65 text-[14px] mt-2">
                Fewer vendors, clearer accountability, faster launches. Scale from one society to a whole city with the same team.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 bg-white text-navy font-bold text-sm px-5 py-2.5 rounded-full hover:bg-brand hover:text-white transition"
              >
                Start with one brief <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-14 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 reveal in">
          <h3 className="serif text-2xl">Common questions</h3>
          <p className="text-muted text-[14px] mt-2">
            Short answers before you request a plan. For anything else, call or write — we reply fast.
          </p>
          <div className="mt-4 flex gap-2">
            <a href="tel:+919686544644" className="btn-ghost font-bold text-sm px-5 py-3 rounded-full text-navy">
              <i className="fa-solid fa-phone mr-2 text-xs"></i>Call
            </a>
            <a href="mailto:knowus@mr-ads.in" className="btn-ghost font-bold text-sm px-5 py-3 rounded-full text-navy">
              <i className="fa-regular fa-envelope mr-2"></i>Email
            </a>
          </div>
        </div>
        <div className="lg:col-span-8 grid gap-3">
          <details className="bg-white border border-line rounded-2xl px-5 py-4 shadow-card reveal in group">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-[15px] list-none">
              How do we start a campaign?
              <span className="faq-plus w-8 h-8 rounded-full bg-paper border border-line flex items-center justify-center text-brand font-bold">
                +
              </span>
            </summary>
            <p className="text-muted text-[14px] mt-3 leading-relaxed">
              Share your city, audience and goal via the form below. We respond with a media plan covering recommended environments, formats, locations and pricing.
            </p>
          </details>

          <details className="bg-white border border-line rounded-2xl px-5 py-4 shadow-card reveal in group">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-[15px] list-none">
              Can we combine screens + offline + creative?
              <span className="faq-plus w-8 h-8 rounded-full bg-paper border border-line flex items-center justify-center text-brand font-bold">
                +
              </span>
            </summary>
            <p className="text-muted text-[14px] mt-3 leading-relaxed">
              Yes — that is the core Mr. Ads model. One partner across display, moving media, offline distribution, print & creative, and digital, planned as a single campaign.
            </p>
          </details>

          <details className="bg-white border border-line rounded-2xl px-5 py-4 shadow-card reveal in group">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-[15px] list-none">
              What do the reach figures mean?
              <span className="faq-plus w-8 h-8 rounded-full bg-paper border border-line flex items-center justify-center text-brand font-bold">
                +
              </span>
            </summary>
            <p className="text-muted text-[14px] mt-3 leading-relaxed">
              Published figures (e.g., 15M+ through 30,000+ apartment screens) describe network opportunity to reach — not guaranteed impressions. Your plan will specify locations, duration and frequency.
            </p>
          </details>

          <details className="bg-white border border-line rounded-2xl px-5 py-4 shadow-card reveal in group">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-[15px] list-none">
              Can you handle design and websites too?
              <span className="faq-plus w-8 h-8 rounded-full bg-paper border border-line flex items-center justify-center text-brand font-bold">
                +
              </span>
            </summary>
            <p className="text-muted text-[14px] mt-3 leading-relaxed">
              Yes. Print & creative design (brochures, flyers, standees, boards, magazine ads, social creatives) plus website design, development, e-commerce, AI chatbots, hosting and redesigns.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
