'use client';

import React, { useState } from 'react';

interface DisplaySectionProps {
  onPrefill: (env: string | null, interest?: string | null) => void;
}

export default function DisplaySection({ onPrefill }: DisplaySectionProps) {
  const [activeTab, setActiveTab] = useState('env-restaurant');

  const handleTabClick = (envId: string) => {
    setActiveTab(envId);
    const el = document.getElementById(envId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="display" className="bg-[#0B101D] border-y border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="reveal in">
          <p className="crumb">
            <a href="#home">Home</a> / <a href="#solutions">Solutions</a> / Display Advertising
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-2">
            <div>
              <h2 className="serif text-3xl sm:text-[42px] tracking-tight text-white">Display Advertising</h2>
              <p className="text-slate-400 mt-3 max-w-2xl">
                Premium digital screens placed where attention lives — dining, living, working, shopping, training and playing. Each environment below shows Audience · Placement · Format · Frequency · Operating Hours.
              </p>
            </div>
            <a
              href="#contact"
              onClick={() => onPrefill('Location List', 'Location List')}
              data-interest="Location List"
              data-cta="Location List"
              className="btn-primary shrink-0 inline-flex items-center gap-2 font-bold text-sm px-6 py-3.5 rounded-full text-white"
            >
              Request location list <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>

        {/* Env sub-nav */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 reveal in" id="envTabs" role="tablist" aria-label="Display environments">
          <button
            onClick={() => handleTabClick('env-restaurant')}
            className={`tab-btn text-[13px] font-bold px-4 py-2.5 rounded-full border border-slate-700 bg-[#121B2D] text-slate-200 ${
              activeTab === 'env-restaurant' ? 'on' : ''
            }`}
          >
            Restaurant
          </button>
          <button
            onClick={() => handleTabClick('env-apartment')}
            className={`tab-btn text-[13px] font-bold px-4 py-2.5 rounded-full border border-slate-700 bg-[#121B2D] text-slate-200 ${
              activeTab === 'env-apartment' ? 'on' : ''
            }`}
          >
            Apartment
          </button>
          <button
            onClick={() => handleTabClick('env-corporate')}
            className={`tab-btn text-[13px] font-bold px-4 py-2.5 rounded-full border border-slate-700 bg-[#121B2D] text-slate-200 ${
              activeTab === 'env-corporate' ? 'on' : ''
            }`}
          >
            Corporate
          </button>
          <button
            onClick={() => handleTabClick('env-mall')}
            className={`tab-btn text-[13px] font-bold px-4 py-2.5 rounded-full border border-slate-700 bg-[#121B2D] text-slate-200 ${
              activeTab === 'env-mall' ? 'on' : ''
            }`}
          >
            Mall
          </button>
          <button
            onClick={() => handleTabClick('env-fitness')}
            className={`tab-btn text-[13px] font-bold px-4 py-2.5 rounded-full border border-slate-700 bg-[#121B2D] text-slate-200 ${
              activeTab === 'env-fitness' ? 'on' : ''
            }`}
          >
            Fitness
          </button>
          <button
            onClick={() => handleTabClick('env-play')}
            className={`tab-btn text-[13px] font-bold px-4 py-2.5 rounded-full border border-slate-700 bg-[#121B2D] text-slate-200 ${
              activeTab === 'env-play' ? 'on' : ''
            }`}
          >
            Play Zone
          </button>
          <button
            onClick={() => handleTabClick('env-pg')}
            className={`tab-btn text-[13px] font-bold px-4 py-2.5 rounded-full border border-slate-700 bg-[#121B2D] text-slate-200 ${
              activeTab === 'env-pg' ? 'on' : ''
            }`}
          >
            PG & Hostel
          </button>
        </div>

        <div className="grid gap-6 mt-6">
          {/* RESTAURANT */}
          <article id="env-restaurant" className="env-card bg-[#121B2D] rounded-3xl border border-slate-800 shadow-card overflow-hidden reveal in scroll-mt-32">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto img-zoom overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
                  alt="Premium restaurant dining area with digital screens"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-brand text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                  Opportunity to reach 1.5M+ · 100+ screens
                </span>
              </div>
              <div className="p-6 sm:p-9">
                <p className="crumb">Display · Restaurant</p>
                <h3 className="text-2xl font-extrabold mt-2 text-white">Restaurant Displays</h3>
                <p className="text-slate-400 text-[14.5px] mt-2 leading-relaxed">
                  Reach 2,000–3,000 customers daily in premium dining & waiting areas. High-intent engagement while guests wait, order and dine — repeated every 5 minutes.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Audience</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">Diners & waiting guests</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Placement</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">Dining / waiting areas</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Format</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">50” screen · 25-sec slot</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Frequency</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">180 plays/day · every 5 min</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4 col-span-2">
                    <p className="spec-label">Operating Hours</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">7:30 AM – 10 PM (14.5 H)</p>
                    <div className="mt-2 h-1.5 bg-[#090D16] rounded-full overflow-hidden border border-slate-700">
                      <div className="h-full bg-brand rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="text-[12px] font-bold bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">
                    Ideal for: Food · Retail · Apps · Local offers
                  </span>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    onClick={() => onPrefill('Restaurant Displays')}
                    className="btn-primary text-center font-bold text-sm px-6 py-3.5 rounded-full"
                  >
                    Plan restaurant screens
                  </a>
                  <a
                    href="#contact"
                    onClick={() => onPrefill(null, 'Demo Videos')}
                    className="btn-ghost text-center font-bold text-sm px-6 py-3.5 rounded-full text-slate-200 hover:text-white"
                  >
                    Request demo video
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* APARTMENT */}
          <article id="env-apartment" className="env-card bg-[#121B2D] rounded-3xl border-2 border-slate-700 shadow-card overflow-hidden reveal in scroll-mt-32">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-9 order-2 lg:order-1">
                <p className="crumb">Display · Apartment</p>
                <h3 className="text-2xl font-extrabold mt-2 text-white">
                  Apartment Displays{' '}
                  <span className="ml-2 align-middle text-[11px] font-bold bg-brand text-white px-2.5 py-1 rounded-full tracking-wide">
                    LARGEST NETWORK
                  </span>
                </h3>
                <p className="text-slate-400 text-[14.5px] mt-2 leading-relaxed">
                  Reach households in premium apartments via lift & lobby screens. Influence household decisions and build lasting local recall, right at home.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Audience</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">Resident households</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Placement</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">Lift / lobby screens</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Format</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">32” screen · 10-sec slot</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Frequency</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">720 plays/day · every 90 sec</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4 col-span-2">
                    <p className="spec-label">Operating Hours</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">6 AM – 12 AM (18 H)</p>
                    <div className="mt-2 h-1.5 bg-[#090D16] rounded-full overflow-hidden border border-slate-700">
                      <div className="h-full bg-brand rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="spec-label mb-2">Also available</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[12px] font-bold bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Posters</span>
                    <span className="text-[12px] font-bold bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Digital screens</span>
                    <span className="text-[12px] font-bold bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Bike stations</span>
                    <span className="text-[12px] font-bold bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">BTL activation</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center">
                  <a
                    href="#contact"
                    onClick={() => onPrefill('Apartment Displays')}
                    className="btn-primary text-center font-bold text-sm px-6 py-3.5 rounded-full w-full sm:w-auto"
                  >
                    Plan apartment screens
                  </a>
                  <span className="inline-flex items-center justify-center text-[12.5px] font-bold text-brand bg-brand/10 border border-brand/30 px-4 py-2 rounded-full">
                    Opportunity to reach 15M+ · 30,000+ screens
                  </span>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto img-zoom overflow-hidden order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop"
                  alt="Premium apartment residential towers"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <span className="absolute bottom-4 left-4 bg-[#121B2D]/90 backdrop-blur border border-slate-700 text-white text-[12px] font-bold px-3.5 py-2 rounded-full">
                  Lift · Lobby · Community
                </span>
              </div>
            </div>
          </article>

          {/* CORPORATE */}
          <article id="env-corporate" className="env-card bg-[#121B2D] rounded-3xl border border-slate-800 shadow-card overflow-hidden reveal in scroll-mt-32">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto img-zoom overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern corporate office lounge"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-[#162238] border border-slate-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                  Opportunity to reach 1.6M+ · 1,300+ screens
                </span>
              </div>
              <div className="p-6 sm:p-9">
                <p className="crumb">Display · Corporate</p>
                <h3 className="text-2xl font-extrabold mt-2 text-white">Corporate Displays</h3>
                <p className="text-slate-400 text-[14.5px] mt-2 leading-relaxed">
                  Working professionals & decision-makers in premium placements. Repeated visibility among high-value urban audiences through the workday.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Audience</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">Professionals & decision-makers</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Placement</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">Premium office points</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Format</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">32” screen · 10-sec slot</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Frequency</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">420 plays/day · every 2 min</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4 col-span-2">
                    <p className="spec-label">Operating Hours</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">8 AM – 10 PM (14 H)</p>
                    <div className="mt-2 h-1.5 bg-[#090D16] rounded-full overflow-hidden border border-slate-700">
                      <div className="h-full bg-brand rounded-full" style={{ width: '58%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="spec-label mb-2">Mediums</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[12px] font-bold bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Large-format digital displays</span>
                    <span className="text-[12px] font-bold bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">BTL activation</span>
                    <span className="text-[12px] font-bold bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Static screens</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="#contact"
                    onClick={() => onPrefill('Corporate Displays')}
                    className="btn-primary font-bold text-sm px-6 py-3.5 rounded-full inline-block"
                  >
                    Plan corporate screens
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* MALL */}
          <article id="env-mall" className="env-card bg-[#121B2D] rounded-3xl border border-slate-800 shadow-card overflow-hidden reveal in scroll-mt-32">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-9 order-2 lg:order-1">
                <p className="crumb">Display · Mall</p>
                <h3 className="text-2xl font-extrabold mt-2 text-white">Mall Displays</h3>
                <p className="text-slate-400 text-[14.5px] mt-2 leading-relaxed">
                  High-footfall shoppers in shopping & entertainment environments. Influence purchase decisions through repeated visibility close to the point of sale.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Audience</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">Shoppers & families</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Placement</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">Retail & entertainment zones</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Format</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">Digital screens + BTL</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Frequency</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">Repeated visibility, all day</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4 col-span-2">
                    <p className="spec-label">Operating Hours</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">10 AM – 10 PM (12 H)</p>
                    <div className="mt-2 h-1.5 bg-[#090D16] rounded-full overflow-hidden border border-slate-700">
                      <div className="h-full bg-brand rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="spec-label mb-2">Mediums</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[12px] font-bold bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">BTL activation</span>
                    <span className="text-[12px] font-bold bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Digital screens</span>
                    <span className="text-[12px] font-bold bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Bike station</span>
                    <span className="text-[12px] font-bold bg-[#162238] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-full">Posters</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    onClick={() => onPrefill('Mall Displays')}
                    className="btn-primary font-bold text-sm px-6 py-3.5 rounded-full inline-block"
                  >
                    Plan mall screens
                  </a>
                  <span className="text-[12.5px] font-bold text-brand bg-brand/10 border border-brand/30 px-4 py-2 rounded-full">
                    Opportunity to reach 1.1M+ · 145+ screens
                  </span>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto img-zoom overflow-hidden order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1000&auto=format&fit=crop"
                  alt="Shoppers inside a bright modern mall"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
              </div>
            </div>
          </article>

          {/* FITNESS */}
          <article id="env-fitness" className="env-card bg-[#121B2D] rounded-3xl border border-slate-800 shadow-card overflow-hidden reveal in scroll-mt-32">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto img-zoom overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
                  alt="Premium fitness centre with members training"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-brand text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                  Opportunity to reach 2M+ · 170+ screens
                </span>
              </div>
              <div className="p-6 sm:p-9">
                <p className="crumb">Display · Fitness</p>
                <h3 className="text-2xl font-extrabold mt-2 text-white">Fitness Space Displays</h3>
                <p className="text-slate-400 text-[14.5px] mt-2 leading-relaxed">
                  Health-conscious, active audiences in premium fitness-centre placements. Reach young urban consumers in workout & waiting areas with high dwell time.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Audience</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">Active & health-conscious</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Placement</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">Workout / waiting areas</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Format</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">55” screen · 15-sec slot</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4">
                    <p className="spec-label">Frequency</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">480 plays/day · every 2 min</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-2xl p-4 col-span-2">
                    <p className="spec-label">Operating Hours</p>
                    <p className="font-bold text-[13.5px] mt-1.5 text-white">6 AM – 10 PM (16 H)</p>
                    <div className="mt-2 h-1.5 bg-[#090D16] rounded-full overflow-hidden border border-slate-700">
                      <div className="h-full bg-brand rounded-full" style={{ width: '66%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="#contact"
                    onClick={() => onPrefill('Fitness Space Displays')}
                    className="btn-primary font-bold text-sm px-6 py-3.5 rounded-full inline-block"
                  >
                    Plan fitness screens
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* PLAY + PG */}
          <div className="grid lg:grid-cols-2 gap-6">
            <article id="env-play" className="env-card bg-[#121B2D] rounded-3xl border border-slate-800 shadow-card overflow-hidden reveal in scroll-mt-32 flex flex-col">
              <div className="h-52 overflow-hidden img-zoom relative">
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=900&auto=format&fit=crop"
                  alt="Family play zone with children playing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-[#162238] border border-slate-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                  Family purchase influence
                </span>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <p className="crumb">Display · Play Zone</p>
                <h3 className="text-xl font-extrabold mt-2 text-white">Play Zone Displays</h3>
                <p className="text-slate-400 text-[14px] mt-2 leading-relaxed">
                  Parents, families and young children in play / waiting areas. Shape family purchase conversations where kids and parents spend quality time.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-5 text-[13px]">
                  <div className="bg-[#162238] border border-slate-700/80 rounded-xl p-3.5">
                    <p className="spec-label">Format</p>
                    <p className="font-bold mt-1 text-white">Digital screens · 15–25 sec</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-xl p-3.5">
                    <p className="spec-label">Frequency</p>
                    <p className="font-bold mt-1 text-white">Repeats every few minutes</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-xl p-3.5">
                    <p className="spec-label">Placement</p>
                    <p className="font-bold mt-1 text-white">Play / waiting areas</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-xl p-3.5">
                    <p className="spec-label">Hours</p>
                    <p className="font-bold mt-1 text-white">Per facility hours</p>
                  </div>
                </div>
                <p className="text-[12px] text-slate-400 mt-4 font-semibold">Mediums: digital screens · BTL activation</p>
                <a
                  href="#contact"
                  onClick={() => onPrefill('Play Zone Displays')}
                  className="btn-ghost text-center font-bold text-sm px-6 py-3 rounded-full text-slate-200 hover:text-white mt-auto"
                >
                  Plan play-zone screens
                </a>
              </div>
            </article>

            <article id="env-pg" className="env-card bg-[#121B2D] rounded-3xl border border-slate-800 shadow-card overflow-hidden reveal in reveal-d1 scroll-mt-32 flex flex-col">
              <div className="h-52 overflow-hidden img-zoom relative">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=900&auto=format&fit=crop"
                  alt="PG and hostel common living area for students"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-[#162238] border border-slate-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                  Youth & early-career
                </span>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <p className="crumb">Display · PG & Hostel</p>
                <h3 className="text-xl font-extrabold mt-2 text-white">PG & Hostel Displays</h3>
                <p className="text-slate-400 text-[14px] mt-2 leading-relaxed">
                  Students and young working professionals via common-area visibility. Perfect for brands, apps, food and local businesses targeting youth.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-5 text-[13px]">
                  <div className="bg-[#162238] border border-slate-700/80 rounded-xl p-3.5">
                    <p className="spec-label">Format</p>
                    <p className="font-bold mt-1 text-white">Digital screens · 10-sec slot</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-xl p-3.5">
                    <p className="spec-label">Frequency</p>
                    <p className="font-bold mt-1 text-white">Repeats every few minutes</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-xl p-3.5">
                    <p className="spec-label">Placement</p>
                    <p className="font-bold mt-1 text-white">Common / reception areas</p>
                  </div>
                  <div className="bg-[#162238] border border-slate-700/80 rounded-xl p-3.5">
                    <p className="spec-label">Hours</p>
                    <p className="font-bold mt-1 text-white">Per facility hours</p>
                  </div>
                </div>
                <p className="text-[12px] text-slate-400 mt-4 font-semibold">Mediums: digital screens · posters · BTL activation</p>
                <a
                  href="#contact"
                  onClick={() => onPrefill('PG & Hostel Displays')}
                  className="btn-ghost text-center font-bold text-sm px-6 py-3 rounded-full text-slate-200 hover:text-white mt-auto"
                >
                  Plan PG & hostel screens
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
