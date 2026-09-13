'use client';

import React from 'react';
import Link from 'next/link';
import TargetShell from '@/components/TargetShell';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Reveal from '@/components/ui/Reveal';
import { ArrowRight, CheckCircle2, Bus } from 'lucide-react';

const transitFormats = [
  {
    id: 'auto',
    title: 'Auto Rickshaw Branding',
    image: '/images/auto.jpg',
    lead: 'High-density neighbourhood movement. Autos weave through residential lanes, markets, and last-mile routes where larger outdoor formats cannot enter.',
    audience: 'Neighbourhood residents, daily shoppers & commuters',
    specs: [
      { label: 'Coverage', value: 'Residential & local market clusters' },
      { label: 'Format', value: 'Full hood & back panel vinyl wraps' },
      { label: 'Route Type', value: 'Hyperlocal last-mile journeys' },
      { label: 'Visibility', value: 'Continuous eye-level street presence' },
    ],
  },
  {
    id: 'cab',
    title: 'City Cab & Fleet Branding',
    image: '/images/cab.jpg',
    lead: 'City-wide circulation with premium commuter adjacency. Cabs carry your brand across central business districts, tech parks, airports, and luxury lifestyle corridors.',
    audience: 'Corporate professionals, travellers & urban shoppers',
    specs: [
      { label: 'Coverage', value: 'CBD, tech corridors & airport routes' },
      { label: 'Format', value: 'Door wraps & full fleet wraps' },
      { label: 'Route Type', value: 'Arterial & cross-city journeys' },
      { label: 'Visibility', value: 'High-mileage continuous exposure' },
    ],
  },
  {
    id: 'bus',
    title: 'Metropolitan Bus Branding',
    image: '/images/bus.jpg',
    lead: 'Large-format, unmissable presence on major arterial city highways. Metropolitan buses deliver sustained visibility along daily high-volume commuter arteries.',
    audience: 'Mass urban public & daily motorized traffic',
    specs: [
      { label: 'Coverage', value: 'Primary city arterial corridors' },
      { label: 'Format', value: 'Full bus side & rear wrap vinyls' },
      { label: 'Route Type', value: 'Fixed transit route corridors' },
      { label: 'Visibility', value: 'Mass-scale roadside dominance' },
    ],
  },
  {
    id: 'van',
    title: 'Mobile LED / Promo Van Branding',
    image: '/images/van.jpg',
    lead: 'A moving billboard you can route, park, and activate on demand. Mobile vans combine display scale with precision targeting across selected PIN codes and timings.',
    audience: 'Event crowds, specific localities & shoppers',
    specs: [
      { label: 'Coverage', value: 'Custom planned target zones & hubs' },
      { label: 'Format', value: 'Backlit boards or LED digital panels' },
      { label: 'Route Type', value: 'Custom scheduled route activation' },
      { label: 'Visibility', value: 'Staged dwell and mobile coverage' },
    ],
  },
  {
    id: 'shelter',
    title: 'Bus Shelter & Kiosk Branding',
    image: '/images/shelter.jpg',
    lead: 'Dwell-time visibility at key transit waiting points. Shelters place your brand right at eye level, exactly where daily audiences pause while commuting.',
    audience: 'Waiting commuters, pedestrians & traffic queues',
    specs: [
      { label: 'Coverage', value: 'High-footfall transit pickup stops' },
      { label: 'Format', value: 'Backlit static displays & digital panels' },
      { label: 'Route Type', value: 'Major arterial transit stop network' },
      { label: 'Visibility', value: 'Pedestrian and vehicular eye-level' },
    ],
  },
  {
    id: 'roadshow',
    title: 'Brand Activation & Roadshow Vans',
    image: '/images/streets.jpg',
    lead: 'High-energy on-ground promotional roadshows with branded vehicles, audio systems, product sampling, and brand ambassadors designed to generate local buzz.',
    audience: 'Local communities, retail crowds & students',
    specs: [
      { label: 'Coverage', value: 'Local high-density retail clusters' },
      { label: 'Format', value: 'Custom fabrication & sound stage' },
      { label: 'Route Type', value: 'Multi-day area roadshow route' },
      { label: 'Visibility', value: 'Interactive on-ground engagement' },
    ],
  },
];

export default function AdvertisingOnTheMovePage() {
  return (
    <TargetShell>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Solutions / Advertising on the Move"
        title="Your message travels with the city."
        copy="Moving media turns the city’s transit network into an unmissable mobile advertising platform — weaving through neighbourhood lanes, highway arteries, and commercial centres."
      />

      {/* 2. Format Navigation Quick Jump */}
      <section className="border-b border-line bg-[#080808]">
        <div className="container-site py-8">
          <Reveal variant="fade-up">
            <p className="eyebrow text-[#888888] mb-4">Moving Formats</p>
            <div className="flex flex-wrap gap-2.5">
              {transitFormats.map((f) => (
                <a
                  key={f.id}
                  href={`#${f.id}`}
                  className="px-3.5 py-2 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-brand/40 text-[13px] text-mute hover:text-paper transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  {f.title.split(' ')[0]} {f.title.split(' ')[1]}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Detailed Transit Format Sections */}
      {transitFormats.map((disp, index) => {
        const isOdd = index % 2 === 1;
        return (
          <section
            key={disp.id}
            id={disp.id}
            className={`scroll-mt-24 border-b border-line ${
              isOdd ? 'bg-[#0D0D0D]' : 'bg-[#080808]'
            }`}
          >
            <div className="container-site grid items-center gap-12 py-16 md:grid-cols-12 md:py-24">
              <div
                className={`md:col-span-7 ${
                  isOdd ? 'md:order-2' : ''
                }`}
              >
                <Reveal variant={isOdd ? 'slide-right' : 'slide-left'}>
                  <div className="card-interactive relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
                    <div className="img-reveal-box aspect-[16/10]">
                      <img
                        src={disp.image}
                        alt={disp.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-semibold tracking-wider text-paper uppercase">
                        Moving Media
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="md:col-span-5">
                <Reveal variant={isOdd ? 'slide-left' : 'slide-right'} delay={0.1}>
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold text-brand uppercase tracking-wider mb-2">
                    <Bus size={13} />
                    <span>Transit Format</span>
                  </div>
                  
                  <h2 className="font-serif text-[30px] sm:text-[36px] leading-tight tracking-tight text-paper font-normal">
                    {disp.title}
                  </h2>
                  
                  <p className="mt-4 text-[15px] leading-relaxed text-mute">
                    {disp.lead}
                  </p>

                  {/* Specs Table */}
                  <dl className="mt-8 space-y-3.5 border-t border-white/[0.08] pt-6">
                    <div className="grid grid-cols-3 gap-2 text-[13px] py-1 -mx-2 px-2 rounded hover:bg-white/[0.02] transition-colors">
                      <dt className="text-[#888888]">Audience</dt>
                      <dd className="col-span-2 text-paper font-medium">{disp.audience}</dd>
                    </div>
                    {disp.specs.map((spec) => (
                      <div key={spec.label} className="grid grid-cols-3 gap-2 text-[13px] py-1 -mx-2 px-2 rounded hover:bg-white/[0.02] transition-colors">
                        <dt className="text-[#888888]">{spec.label}</dt>
                        <dd className="col-span-2 text-[#D8D4CE]">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-4">
                    <Link
                      href="/contact"
                      className="btn-sheen btn-arrow inline-flex items-center gap-2 rounded-lg bg-brand hover:bg-brand-hover px-5 py-2.5 text-[13px] font-semibold text-paper shadow-md shadow-brand/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Check Transit Routes</span>
                      <ArrowRight size={13} />
                    </Link>

                    <Link
                      href="/pricing"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] px-4 py-2.5 text-[13px] font-medium text-paper transition-all hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Plan Fleet Flight</span>
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* 4. Transit Reach Benefits Grid */}
      <section className="border-b border-line bg-[#0D0D0D]">
        <div className="container-site py-20">
          <Reveal variant="fade-up" className="max-w-xl mb-12">
            <p className="eyebrow text-brand">Why Moving Media</p>
            <h3 className="mt-2 font-serif text-[28px] sm:text-[34px] leading-tight text-paper font-normal">
              Continuous visibility across arterial city corridors.
            </h3>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'High Mileage Exposure',
                desc: 'Vehicles log 100–250+ km daily across commercial and residential corridors.',
              },
              {
                title: 'Unavoidable Eye-Level Impact',
                desc: 'Pedestrians, commuters, and queueing vehicles look straight at street wraps.',
              },
              {
                title: 'PIN-Code Routing',
                desc: 'Target specific localities or arterial bottlenecks where your buyers dwell.',
              },
              {
                title: 'Compound Local Trust',
                desc: 'Daily recurring sightings make your brand feel like a familiar neighbourhood staple.',
              },
            ].map((b, idx) => (
              <Reveal key={b.title} variant="fade-up" staggerIndex={idx} delay={0.1}>
                <div className="card-interactive p-6 rounded-xl border border-white/[0.08] bg-[#141414]/60 hover:bg-[#141414] transition-colors h-full">
                  <CheckCircle2 size={18} className="text-brand mb-3" />
                  <h4 className="text-[16px] font-semibold text-paper">{b.title}</h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-mute">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCta
        title="Put Your Brand in Motion Across the City."
        copy="Tell us your target routes and audience hubs. We will plan the ideal fleet mix of autos, cabs, buses, and promo vans for maximum neighbourhood saturation."
      />
    </TargetShell>
  );
}
