'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TargetShell from '@/components/TargetShell';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Reveal from '@/components/ui/Reveal';
import {
  Monitor,
  Bus,
  FileText,
  Palette,
  Globe,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const solutionPillars = [
  {
    id: 'display',
    title: 'Display Advertising Network (DOOH)',
    tagline: 'Captive audience. High dwell time.',
    icon: Monitor,
    href: '/locations',
    image: '/images/display.jpg',
    summary:
      'Place your brand inside dining rooms, lift lobbies, gym floors, premium mall corridors and corporate tech parks. Where audiences pause and stay for 20 to 60+ minutes.',
    metrics: [
      { value: '2,400+', label: 'Dining screens' },
      { value: '1,100+', label: 'Residential lifts' },
      { value: '35 min', label: 'Avg. dwell time' },
    ],
    features: [
      'Digital screens running synchronized daytime & evening rotations',
      'Hyperlocal venue clustering by neighbourhood and consumer demographics',
      'Proof-of-play logs and scheduled campaign flight management',
      'No clutter: high visual share of voice per screen',
    ],
  },
  {
    id: 'moving',
    title: 'Advertising on the Move (Transit)',
    tagline: 'Continuous circulation across urban arteries.',
    icon: Bus,
    href: '/advertising-on-the-move',
    image: '/images/streets.jpg',
    summary:
      'Autos, city cabs, metropolitan buses and custom mobile LED vans that weave through residential lanes, arterial corridors and tech hubs.',
    metrics: [
      { value: 'Metropolitan', label: 'Fleet reach' },
      { value: '12+ hrs', label: 'Daily road time' },
      { value: 'Eye-level', label: 'Street impact' },
    ],
    features: [
      'Full exterior vinyl wraps on auto rickshaws for last-mile street recall',
      'Corporate and airport route targeting through branded city cabs',
      'High-capacity arterial visibility on metropolitan public transit buses',
      'Geofenced mobile LED vans for event launches and targeted roadshows',
    ],
  },
  {
    id: 'offline',
    title: 'Offline & Print Distribution',
    tagline: 'Delivered directly into neighbourhood households.',
    icon: FileText,
    href: '/offline-print',
    image: '/images/flyers.jpg',
    summary:
      'Direct doorstep distribution, verified newspaper inserts, quick-commerce dark store drops, and neighbourhood pharmacy covers.',
    metrics: [
      { value: '100%', label: 'Doorstep reach' },
      { value: 'PIN-code', label: 'Targeted delivery' },
      { value: 'Multi-day', label: 'In-home retention' },
    ],
    features: [
      'Supervised flyer distribution at transit hubs and gated societies',
      'Official morning newspaper insertions delivered directly into homes',
      'E-commerce dark store delivery bag inserts reaching active shoppers',
      'Branded pharmacy medicine covers kept and seen repeatedly for weeks',
    ],
  },
  {
    id: 'creative',
    title: 'Print & Creative Design',
    tagline: 'Built to stop footfall and command attention.',
    icon: Palette,
    href: '/print-creative',
    image: '/images/creative.jpg',
    summary:
      'From standees, brochures, and outdoor hoarding graphics to social media kits and brand collateral designed with editorial restraint.',
    metrics: [
      { value: 'Studio', label: 'Production quality' },
      { value: 'CMYK & Web', label: 'Ready assets' },
      { value: 'Fast', label: 'Turnaround times' },
    ],
    features: [
      'Multi-page sales brochures and product catalogues with sharp typography',
      'Pull-up standees and stall flexes for exhibition & mall activations',
      'Weatherproof street pole boards and no-parking warning plaques',
      'Editorial magazine layouts and high-contrast newspaper creative',
    ],
  },
  {
    id: 'digital',
    title: 'Website, Development & AI',
    tagline: 'Converting local footfall into digital pipeline.',
    icon: Globe,
    href: '/digital',
    image: '/images/website.jpg',
    summary:
      'Modern, high-performance company websites, frictionless mobile e-commerce storefronts, and automated AI lead-qualification chatbots.',
    metrics: [
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '24/7', label: 'AI lead capture' },
      { value: '< 1.5s', label: 'Page load speed' },
    ],
    features: [
      'Modern, editorial business websites tailored for local conversions',
      'Fast e-commerce catalogues with frictionless payment flows',
      'Automated AI conversational assistants for instant response',
      'Ongoing managed cloud hosting, backups and SEO maintenance',
    ],
  },
];

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPillars =
    activeTab === 'all'
      ? solutionPillars
      : solutionPillars.filter((p) => p.id === activeTab);

  return (
    <TargetShell>
      {/* 1. Hero */}
      <PageHero
        eyebrow="Solutions / Advertising Ecosystem"
        title="One network. Multiple surfaces. Total local recall."
        copy="Mr. Ads combines indoor digital screens, moving city transit, doorstep print distribution, studio creative design, and modern digital web solutions under a single, cohesive campaign partner."
      />

      {/* 2. Interactive Channel Filter Tabs */}
      <section className="border-b border-line bg-[#080808]">
        <div className="container-site py-8 sm:py-10">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 shrink-0 ${
                activeTab === 'all'
                  ? 'bg-brand text-white shadow-md shadow-brand/25'
                  : 'bg-white/[0.04] text-mute hover:text-paper hover:bg-white/[0.08]'
              }`}
            >
              All Solutions
            </button>
            {solutionPillars.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 shrink-0 ${
                  activeTab === p.id
                    ? 'bg-brand text-white shadow-md shadow-brand/25'
                    : 'bg-white/[0.04] text-mute hover:text-paper hover:bg-white/[0.08]'
                }`}
              >
                {p.title.split(' ')[0]} {p.title.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Solution Showcases */}
      <section className="border-b border-line bg-[#0D0D0D]">
        <div className="container-site py-20 md:py-28 space-y-24">
          {filteredPillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="scroll-mt-28 grid gap-12 lg:grid-cols-12 items-center"
              >
                {/* Visual Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <Reveal variant={isReversed ? 'slide-right' : 'slide-left'}>
                    <div className="card-interactive relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
                      <div className="img-reveal-box aspect-[16/10]">
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-semibold tracking-wider text-paper uppercase">
                          {pillar.tagline}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-between ${
                    isReversed ? 'lg:order-1' : ''
                  }`}
                >
                  <Reveal variant={isReversed ? 'slide-left' : 'slide-right'} delay={0.1}>
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-semibold text-brand tracking-wider uppercase mb-4">
                        <IconComponent size={14} />
                        <span>Channel Overview</span>
                      </div>

                      <h2 className="font-serif text-[30px] sm:text-[38px] leading-tight tracking-tight text-paper font-normal">
                        {pillar.title}
                      </h2>

                      <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-mute">
                        {pillar.summary}
                      </p>

                      {/* Metric Badges */}
                      <div className="mt-6 grid grid-cols-3 gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                        {pillar.metrics.map((m) => (
                          <div key={m.label}>
                            <p className="font-serif text-[18px] sm:text-[20px] font-bold text-paper">
                              {m.value}
                            </p>
                            <p className="mt-0.5 text-[11px] text-[#888888] uppercase tracking-wider">
                              {m.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Key Features Bullet Points */}
                      <ul className="mt-6 space-y-2.5">
                        {pillar.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5 text-[14px] text-mute">
                            <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                            <span className="text-[#D8D4CE]">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-4">
                      <Link
                        href={pillar.href}
                        className="btn-sheen btn-arrow inline-flex items-center gap-2 rounded-lg bg-brand hover:bg-brand-hover px-5 py-2.5 text-[13px] font-semibold text-paper shadow-md shadow-brand/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <span>Explore Channel Page</span>
                        <ArrowRight size={13} />
                      </Link>

                      <Link
                        href="/pricing"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] px-4 py-2.5 text-[13px] font-medium text-paper transition-all hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <span>Get Plan</span>
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Multi-Channel Synergy Strip */}
      <section className="border-b border-line bg-[#080808]">
        <div className="container-site py-16 sm:py-20">
          <Reveal variant="scale-up">
            <div className="rounded-2xl border border-brand/30 bg-gradient-to-r from-brand/10 via-transparent to-brand/5 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(216,31,66,0.1)]">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold text-brand uppercase tracking-widest mb-2">
                  <Sparkles size={13} className="animate-pulse" /> Synchronized Flights
                </span>
                <h3 className="font-serif text-[28px] sm:text-[34px] font-normal leading-tight text-paper">
                  The Compound Multiplier Effect
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-mute">
                  When an audience member spots your branded bus in the morning, sees your digital display during dinner, and receives your brochure at their doorstep, trust compounds 3x faster than any single-medium buy.
                </p>
              </div>

              <Link
                href="/pricing"
                className="btn-sheen btn-arrow inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand hover:bg-brand-hover px-7 py-3.5 text-[14px] font-semibold text-paper shadow-lg shadow-brand/20 transition-all shrink-0 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Build a Combined Media Plan</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCta
        title="Ready to Build Your Local Advertising Strategy?"
        copy="Tell us who you need to reach and where — we will prepare a complete media plan combining the right screens, transit routes, and physical distribution."
      />
    </TargetShell>
  );
}
