'use client';

import React from 'react';
import Link from 'next/link';
import TargetShell from '@/components/TargetShell';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import { ArrowRight, CheckCircle2, Bus, MapPin, Eye, Compass } from 'lucide-react';

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
      { label: 'Format', value: 'Illuminated backlit display panels' },
      { label: 'Route Type', value: 'Stationary eye-level road presence' },
      { label: 'Visibility', value: 'Extended dwell & 24/7 night lighting' },
    ],
  },
  {
    id: 'roadshow',
    title: 'Roadshows & Promotional Vehicles',
    image: '/images/roadshow.jpg',
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
          <p className="eyebrow text-[#888888] mb-4">Moving Formats</p>
          <div className="flex flex-wrap gap-2.5">
            {transitFormats.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                className="px-3.5 py-2 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 text-[13px] text-mute hover:text-paper transition-all"
              >
                {f.title.split(' ')[0]} {f.title.split(' ')[1]}
              </a>
            ))}
          </div>
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
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
                  <div className="img-zoom aspect-[16/10]">
                    <img
                      src={disp.image}
                      alt={disp.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
              </div>

              <div className="md:col-span-5">
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
                  <div className="grid grid-cols-3 gap-2 text-[13px]">
                    <dt className="text-[#888888]">Audience</dt>
                    <dd className="col-span-2 text-paper font-medium">{disp.audience}</dd>
                  </div>
                  {disp.specs.map((spec) => (
                    <div key={spec.label} className="grid grid-cols-3 gap-2 text-[13px]">
                      <dt className="text-[#888888]">{spec.label}</dt>
                      <dd className="col-span-2 text-[#D8D4CE]">{spec.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 flex items-center gap-3">
                  <Link
                    href={`/contact?requirement=${encodeURIComponent(disp.title)}`}
                    className="btn-arrow inline-flex items-center gap-2 rounded-lg bg-brand hover:bg-brand-hover px-5 py-2.5 text-[13px] font-semibold text-paper shadow-md transition-all"
                  >
                    <span>Plan this Route</span>
                    <ArrowRight size={13} />
                  </Link>

                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 hover:border-white/20 px-4 py-2.5 text-[13px] text-mute hover:text-paper transition-all"
                  >
                    <span>Add to Media Plan</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* 4. Cross-Links to Other Solutions */}
      <section className="border-b border-line bg-[#080808]">
        <div className="container-site py-16">
          <p className="text-[14.5px] text-mute">
            Explore other complementary channels:{' '}
            <Link
              href="/locations"
              className="text-paper underline decoration-brand/60 underline-offset-4 hover:text-brand transition-colors"
            >
              Display Advertising Screens
            </Link>
            ,{' '}
            <Link
              href="/offline-print"
              className="text-paper underline decoration-brand/60 underline-offset-4 hover:text-brand transition-colors"
            >
              Offline & Print Distribution
            </Link>
            , or{' '}
            <Link
              href="/digital"
              className="text-paper underline decoration-brand/60 underline-offset-4 hover:text-brand transition-colors"
            >
              Digital & AI Solutions
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCta
        title="Route Your Brand Through Key Metropolitan Corridors."
        copy="Tell us your target routes, fleet preference and duration — we will build a tailored moving media brief with complete route mapping."
      />
    </TargetShell>
  );
}
