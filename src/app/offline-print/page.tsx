'use client';

import React from 'react';
import Link from 'next/link';
import TargetShell from '@/components/TargetShell';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import { ArrowRight, CheckCircle2, Layers, MapPin, ShieldCheck, Home } from 'lucide-react';

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
          <p className="eyebrow text-[#888888] mb-4">Distribution Channels</p>
          <div className="flex flex-wrap gap-2.5">
            {offlineChannels.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="px-3.5 py-2 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 text-[13px] text-mute hover:text-paper transition-all"
              >
                {c.title}
              </a>
            ))}
          </div>
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
              <div
                className={`md:col-span-7 ${
                  isOdd ? 'md:order-2' : ''
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
                  <div className="img-zoom aspect-[16/10]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
              </div>

              <div className="md:col-span-5">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold text-brand uppercase tracking-wider mb-2">
                  <Layers size={13} />
                  <span>Offline Channel</span>
                </div>

                <h2 className="font-serif text-[30px] sm:text-[36px] leading-tight tracking-tight text-paper font-normal">
                  {item.title}
                </h2>

                <p className="mt-4 text-[15px] leading-relaxed text-mute">
                  {item.lead}
                </p>

                {/* Key Coverage Zones */}
                <div className="mt-6">
                  <p className="text-[11px] font-bold tracking-wider text-[#888888] uppercase mb-2.5">
                    Target Coverage Zones
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.locations.map((loc) => (
                      <span
                        key={loc}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-[12px] text-[#D8D4CE]"
                      >
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specs Table */}
                <dl className="mt-6 space-y-3 border-t border-white/[0.08] pt-5">
                  {item.specs.map((spec) => (
                    <div key={spec.label} className="grid grid-cols-3 gap-2 text-[13px]">
                      <dt className="text-[#888888]">{spec.label}</dt>
                      <dd className="col-span-2 text-[#D8D4CE]">{spec.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 flex items-center gap-3">
                  <Link
                    href={`/contact?requirement=${encodeURIComponent(item.title)}`}
                    className="btn-arrow inline-flex items-center gap-2 rounded-lg bg-brand hover:bg-brand-hover px-5 py-2.5 text-[13px] font-semibold text-paper shadow-md transition-all"
                  >
                    <span>Plan Distribution</span>
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
              Digital Display Screens
            </Link>
            ,{' '}
            <Link
              href="/print-creative"
              className="text-paper underline decoration-brand/60 underline-offset-4 hover:text-brand transition-colors"
            >
              Print & Creative Design
            </Link>
            , or{' '}
            <Link
              href="/advertising-on-the-move"
              className="text-paper underline decoration-brand/60 underline-offset-4 hover:text-brand transition-colors"
            >
              Advertising on the Move
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCta
        title="Reach Verified Households in Your Locality."
        copy="Tell us your target PIN codes, quantity, and campaign flight — we will engineer a trackable, door-to-door physical distribution plan."
      />
    </TargetShell>
  );
}
