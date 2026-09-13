'use client';

import React from 'react';
import Link from 'next/link';
import TargetShell from '@/components/TargetShell';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Reveal from '@/components/ui/Reveal';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';

const offlineChannels = [
  {
    id: 'flyers',
    title: 'Offline Flyer Distribution',
    image: '/images/flyers.jpg',
    lead: 'Targeted physical distribution placed directly into hands, on doorsteps, and across high-footfall civic intersections with supervised ground discipline.',
    locations: [
      'Metro stations & transit interchanges',
      'Gated residential apartment societies',
      'Shopping malls & local markets',
      'Bus stations & high-density walkaways',
      'Commercial tech park entry plazas',
    ],
    specs: [
      { label: 'Distribution Mode', value: 'Hand-to-hand & doorstep insertion' },
      { label: 'Targeting', value: 'PIN code & demographic clustering' },
      { label: 'Audit & Tracking', value: 'Supervised distribution logs' },
      { label: 'Collateral Sizing', value: 'A5, A4 & custom fold brochures' },
    ],
  },
  {
    id: 'inserts',
    title: 'Newspaper & Quick Commerce Inserts',
    image: '/images/newspaper.jpg',
    lead: 'Reach households at their breakfast table or upon grocery unboxing. Inserts travel through official newspaper vendors and quick-commerce dark store deliveries.',
    locations: [
      'Morning daily newspapers (English & Regional)',
      'Quick-commerce delivery package insertions',
      'Gated residential communities',
      'Premium residential villa societies',
      'High-income neighbourhood clusters',
    ],
    specs: [
      { label: 'Distribution Mode', value: 'Vendor insert & dark store pack-in' },
      { label: 'Targeting', value: 'Locality & dark store catchment zones' },
      { label: 'Retention', value: 'In-home table dwell time' },
      { label: 'Tracking', value: 'Area-wise batch reconciliation' },
    ],
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy Cover Advertising',
    image: '/images/pharmacy.jpg',
    lead: 'Branded medical covers and storefront branding across neighbourhood chemist shops. A high-utility physical format kept and reused inside resident homes.',
    locations: [
      'Neighbourhood independent chemists',
      'Healthcare retail hubs & clinic clusters',
      'High-density residential market areas',
      'Hospital adjacent pharmacy rows',
    ],
    specs: [
      { label: 'Distribution Mode', value: 'Over-the-counter customer handoff' },
      { label: 'Format', value: 'Heavyweight branded medicine pouches' },
      { label: 'Reusability', value: 'High retention in domestic medicine kits' },
      { label: 'Targeting', value: 'Locality & healthcare corridor' },
    ],
  },
];

export default function OfflinePrintPage() {
  return (
    <TargetShell>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Solutions / Offline & Print Distribution"
        title="Physical media that lands in hands and homes."
        copy="Direct-to-consumer print and distribution engineered with area-level discipline — bypassing digital noise to place tangible brand collateral in front of verified local households."
      />

      {/* 2. Format Jump Bar */}
      <section className="border-b border-line bg-[#080808]">
        <div className="container-site py-8">
          <Reveal variant="fade-up">
            <p className="eyebrow text-[#888888] mb-4">Distribution Channels</p>
            <div className="flex flex-wrap gap-2.5">
              {offlineChannels.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="px-3.5 py-2 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-brand/40 text-[13px] text-mute hover:text-paper transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  {c.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Detailed Distribution Channels */}
      {offlineChannels.map((item, index) => {
        const isOdd = index % 2 === 1;
        return (
          <section
            key={item.id}
            id={item.id}
            className={`scroll-mt-24 border-b border-line ${
              isOdd ? 'bg-[#0D0D0D]' : 'bg-[#080808]'
            }`}
          >
            <div className="container-site grid items-center gap-12 py-16 md:grid-cols-12 md:py-24">
              <div className={`md:col-span-7 ${isOdd ? 'md:order-2' : ''}`}>
                <Reveal variant={isOdd ? 'slide-right' : 'slide-left'}>
                  <div className="card-interactive relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
                    <div className="img-reveal-box aspect-[16/10]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-semibold tracking-wider text-paper uppercase">
                        Doorstep Distribution
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="md:col-span-5">
                <Reveal variant={isOdd ? 'slide-left' : 'slide-right'} delay={0.1}>
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold text-brand uppercase tracking-wider mb-2">
                    <Layers size={13} />
                    <span>Offline Channel</span>
                  </div>

                  <h2 className="font-serif text-[30px] sm:text-[36px] leading-tight tracking-tight text-paper font-normal">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-[15px] leading-relaxed text-mute">{item.lead}</p>

                  {/* Key Coverage Zones */}
                  <div className="mt-6">
                    <p className="text-[11px] font-bold tracking-wider text-[#888888] uppercase mb-2.5">
                      Target Coverage Zones
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.locations.map((loc) => (
                        <span
                          key={loc}
                          className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-[12px] text-[#D8D4CE] hover:border-brand/40 transition-colors"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specs Table */}
                  <dl className="mt-8 space-y-3.5 border-t border-white/[0.08] pt-6">
                    {item.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="grid grid-cols-3 gap-2 text-[13px] py-1 -mx-2 px-2 rounded hover:bg-white/[0.02] transition-colors"
                      >
                        <dt className="text-[#888888]">{spec.label}</dt>
                        <dd className="col-span-2 text-paper font-medium">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-4">
                    <Link
                      href="/contact"
                      className="btn-sheen btn-arrow inline-flex items-center gap-2 rounded-lg bg-brand hover:bg-brand-hover px-5 py-2.5 text-[13px] font-semibold text-paper shadow-md shadow-brand/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Check Locality Slots</span>
                      <ArrowRight size={13} />
                    </Link>

                    <Link
                      href="/pricing"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] px-4 py-2.5 text-[13px] font-medium text-paper transition-all hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Estimate Cost</span>
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* 4. Distribution Assurance Strip */}
      <section className="border-b border-line bg-[#0D0D0D]">
        <div className="container-site py-20">
          <Reveal variant="fade-up" className="max-w-xl mb-12">
            <p className="eyebrow text-brand">Distribution Discipline</p>
            <h3 className="mt-2 font-serif text-[28px] sm:text-[34px] leading-tight text-paper font-normal">
              Direct physical engagement with zero wastage.
            </h3>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Supervisor Verification',
                desc: 'On-ground team leaders monitor route deliveries, verify society approvals, and compile deployment logs.',
              },
              {
                title: 'High In-Home Table Retention',
                desc: 'Flyers and inserts placed on dining tables and in medicine pouches stay in sight for days, not fleeting seconds.',
              },
              {
                title: 'Contextual Neighborhood Timing',
                desc: 'Delivered at the morning breakfast hour or evening homecoming when families are relaxed and receptive.',
              },
            ].map((d, idx) => (
              <Reveal key={d.title} variant="fade-up" staggerIndex={idx} delay={0.1}>
                <div className="card-interactive p-6 rounded-xl border border-white/[0.08] bg-[#141414]/60 hover:bg-[#141414] transition-colors h-full">
                  <CheckCircle2 size={18} className="text-brand mb-3" />
                  <h4 className="text-[16px] font-semibold text-paper">{d.title}</h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-mute">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCta
        title="Deliver Your Message Straight to Verified Doorsteps."
        copy="Tell us the PIN codes, apartment societies, or transit intersections you want to reach. We will plan supervised flyer, insert, and pharmacy distribution."
      />
    </TargetShell>
  );
}
