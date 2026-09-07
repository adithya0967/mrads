import React from 'react';

export default function WhyPreviewSection() {
  return (
    <section id="why-preview" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 reveal in">
        <div>
          <p className="crumb">Why Mr. Ads</p>
          <h2 className="serif text-3xl sm:text-[42px] tracking-tight mt-2">One partner. Every local surface.</h2>
          <p className="text-muted mt-3 max-w-2xl">
            Six practical reasons growing brands plan with Mr. Ads — from reach to creative to campaign support.
          </p>
        </div>
        <a
          href="#why"
          className="btn-ghost shrink-0 inline-flex items-center gap-2 font-bold text-sm px-5 py-3 rounded-full text-navy"
        >
          Why brands choose us <i className="fa-solid fa-arrow-right text-xs"></i>
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <div className="bg-white border border-line rounded-3xl p-6 shadow-card card-hover reveal in">
          <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center text-lg">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <h3 className="font-extrabold mt-4">Hyperlocal Reach</h3>
          <p className="text-muted text-[14px] mt-2 leading-relaxed">
            Neighbourhood-level presence across residences, workplaces, retail and streets.
          </p>
        </div>
        <div className="bg-white border border-line rounded-3xl p-6 shadow-card card-hover reveal in reveal-d1">
          <div className="w-12 h-12 rounded-2xl bg-brand text-white flex items-center justify-center text-lg">
            <i className="fa-solid fa-layer-group"></i>
          </div>
          <h3 className="font-extrabold mt-4">Multiple Advertising Channels</h3>
          <p className="text-muted text-[14px] mt-2 leading-relaxed">
            Displays, moving media, offline distribution, print and digital — coordinated together.
          </p>
        </div>
        <div className="bg-white border border-line rounded-3xl p-6 shadow-card card-hover reveal in reveal-d2">
          <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center text-lg">
            <i className="fa-solid fa-pen-nib"></i>
          </div>
          <h3 className="font-extrabold mt-4">Creative & Digital Solutions</h3>
          <p className="text-muted text-[14px] mt-2 leading-relaxed">
            Design, print and web + AI support so your campaign looks premium everywhere.
          </p>
        </div>
        <div className="bg-white border border-line rounded-3xl p-6 shadow-card card-hover reveal in">
          <div className="w-12 h-12 rounded-2xl bg-brand text-white flex items-center justify-center text-lg">
            <i className="fa-solid fa-eye"></i>
          </div>
          <h3 className="font-extrabold mt-4">Better Brand Visibility</h3>
          <p className="text-muted text-[14px] mt-2 leading-relaxed">
            Premium placements + high-frequency repetition that keeps you memorable.
          </p>
        </div>
        <div className="bg-white border border-line rounded-3xl p-6 shadow-card card-hover reveal in reveal-d1">
          <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center text-lg">
            <i className="fa-solid fa-gears"></i>
          </div>
          <h3 className="font-extrabold mt-4">End-to-End Campaign Support</h3>
          <p className="text-muted text-[14px] mt-2 leading-relaxed">
            Planning, creatives, deployment and coordination — handled for you.
          </p>
        </div>
        <div className="bg-brand text-white border border-brand rounded-3xl p-6 shadow-card card-hover reveal in reveal-d2">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-lg">
            <i className="fa-solid fa-handshake"></i>
          </div>
          <h3 className="font-extrabold mt-4">One Partner, Multiple Solutions</h3>
          <p className="text-white/80 text-[14px] mt-2 leading-relaxed">
            Simplify vendors. One team across screens, streets, homes and online.
          </p>
          <a
            href="#contact"
            data-cta="One Partner"
            className="mt-4 inline-flex items-center gap-2 font-bold text-sm bg-white text-brand px-5 py-2.5 rounded-full"
          >
            Talk to us <i className="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
