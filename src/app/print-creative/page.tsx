'use client';

import React from 'react';
import Link from 'next/link';
import TargetShell from '@/components/TargetShell';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Reveal from '@/components/ui/Reveal';
import {
  ArrowRight,
  Palette,
  FileText,
  Image as ImageIcon,
  BookOpen,
  Share2,
  Layers,
} from 'lucide-react';

const creativeServices = [
  {
    icon: FileText,
    title: 'Brochure & Catalogue Design',
    image: '/images/brochure.jpg',
    lead: 'Multi-page sales collateral and product catalogues structured to tell your full commercial story with typography that commands attention.',
    specs: [
      { label: 'Formats', value: 'Bi-fold, tri-fold, multi-page booklets' },
      { label: 'Deliverables', value: 'Print-ready CMYK PDFs & web-view versions' },
      { label: 'Turnaround', value: '3–5 business days' },
    ],
  },
  {
    icon: ImageIcon,
    title: 'Flyer, Poster & Banner Design',
    image: '/images/poster.jpg',
    lead: 'Punchy single-sheet artwork engineered for street kiosks, door-to-door distribution, and wall takeovers where you have 2 seconds to hook attention.',
    specs: [
      { label: 'Formats', value: 'A5, A4, A3, outdoor hoarding sizing' },
      { label: 'Deliverables', value: 'High-res vector & vector raster assets' },
      { label: 'Turnaround', value: '2–3 business days' },
    ],
  },
  {
    icon: Layers,
    title: 'Standees & Exhibition Stall Branding',
    image: '/images/standee.jpg',
    lead: 'Event collateral, pull-up standees, backdrop flexes, and booth fascia graphics crafted to stop footfall in busy corporate parks and mall corridors.',
    specs: [
      { label: 'Formats', value: 'Roll-up banners, pop-up displays, stall wraps' },
      { label: 'Deliverables', value: 'Fabrication-ready vector layouts' },
      { label: 'Turnaround', value: '2–4 business days' },
    ],
  },
  {
    icon: Palette,
    title: 'Pole Kiosks & Street Signs',
    image: '/images/pole.jpg',
    lead: 'Turn everyday urban street fixtures into recurring memory anchors with high-contrast, weatherproof pole board layouts.',
    specs: [
      { label: 'Formats', value: 'Standard pole boards, no-parking plaques' },
      { label: 'Deliverables', value: 'Industrial signage templates' },
      { label: 'Turnaround', value: '2 business days' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Editorial & Magazine Advertisements',
    image: '/images/magazine.jpg',
    lead: 'High-aesthetic magazine advertisements designed with editorial elegance, calibrated whitespace, and sharp typographic hierarchy.',
    specs: [
      { label: 'Formats', value: 'Full-page, double-spread, half-page vertical' },
      { label: 'Deliverables', value: 'Pre-press certified editorial specs' },
      { label: 'Turnaround', value: '3 business days' },
    ],
  },
  {
    icon: Share2,
    title: 'Social Media & Cross-Platform Creatives',
    image: '/images/social.jpg',
    lead: 'Extend your physical campaign seamlessly online. Feed-ready Instagram carousels, LinkedIn banners, and WhatsApp broadcast templates.',
    specs: [
      { label: 'Formats', value: '1:1 square, 9:16 vertical reels/stories, landscape' },
      { label: 'Deliverables', value: 'WebP, PNG & editable source packs' },
      { label: 'Turnaround', value: '24–48 hours' },
    ],
  },
];

export default function PrintCreativePage() {
  return (
    <TargetShell>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Solutions / Print & Creative Design"
        title="Refined creatives that make every placement work harder."
        copy="One cohesive design language from street standees to digital feeds. We eliminate disjointed vendor artwork by creating production-ready assets tailored for each specific medium."
      />

      {/* 2. Creative Bundling Banner */}
      <section className="border-b border-line bg-[#080808]">
        <div className="container-site py-10">
          <Reveal variant="scale-up">
            <div className="rounded-xl border border-brand/30 bg-brand/5 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(216,31,66,0.08)]">
              <div className="max-w-xl">
                <span className="text-[11px] font-bold text-brand tracking-widest uppercase">
                  Campaign Bundling
                </span>
                <h3 className="font-serif text-[22px] sm:text-[26px] text-paper font-normal mt-1">
                  Bundle Creative Design with Any Media Flight
                </h3>
                <p className="mt-2 text-[14px] text-mute leading-relaxed">
                  Save time and cost by commissioning creative assets directly with your display
                  screen or transit media package.
                </p>
              </div>
              <Link
                href="/pricing"
                className="btn-sheen btn-arrow inline-flex items-center gap-2 rounded-lg bg-brand hover:bg-brand-hover px-6 py-3 text-[13.5px] font-semibold text-paper shadow-md shadow-brand/20 transition-all shrink-0 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Bundle in Media Plan</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Detailed Services Grid */}
      <section className="border-b border-line bg-[#0D0D0D]">
        <div className="container-site py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {creativeServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <Reveal
                  key={service.title}
                  variant="fade-up"
                  staggerIndex={idx}
                  delay={0.1}
                  className="h-full"
                >
                  <div className="card-interactive group h-full rounded-xl border border-white/[0.08] bg-[#141414] overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="img-reveal-box aspect-[16/10] relative overflow-hidden bg-black">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent pointer-events-none" />

                        <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-brand shadow-sm">
                          <IconComp size={16} />
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-[18px] font-semibold text-paper group-hover:text-brand transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-mute">{service.lead}</p>

                        <dl className="mt-5 space-y-2 border-t border-white/[0.06] pt-4 text-[12.5px]">
                          {service.specs.map((s) => (
                            <div
                              key={s.label}
                              className="grid grid-cols-3 gap-1 py-0.5 -mx-1.5 px-1.5 rounded hover:bg-white/[0.02] transition-colors"
                            >
                              <dt className="text-[#888888]">{s.label}</dt>
                              <dd className="col-span-2 text-[#D8D4CE] font-medium">{s.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2">
                      <Link
                        href="/contact"
                        className="btn-sheen btn-arrow inline-flex w-full items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 hover:border-brand/40 bg-white/[0.02] hover:bg-brand text-[13px] font-semibold text-paper transition-all hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <span>Commission Artwork</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Design Standards Strip */}
      <section className="border-b border-line bg-[#080808]">
        <div className="container-site py-20">
          <Reveal variant="fade-up" className="max-w-xl mb-12">
            <p className="eyebrow text-brand">Studio Standards</p>
            <h3 className="mt-2 font-serif text-[28px] sm:text-[34px] leading-tight text-paper font-normal">
              Designed for physical impact, not just screen mockups.
            </h3>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'High-Contrast Typography',
                desc: 'Typefaces selected and tracked for 2-second legibility on moving vehicles and busy street corridors.',
              },
              {
                title: 'Pre-Press Calibration',
                desc: 'Delivered in certified CMYK vector formats with true bleed margins so prints match mockups exactly.',
              },
              {
                title: 'Cross-Surface Continuity',
                desc: 'Your billboard visual translates seamlessly into lift screen loops, flyer cards, and social stories.',
              },
            ].map((std, idx) => (
              <Reveal key={std.title} variant="fade-up" staggerIndex={idx} delay={0.1}>
                <div className="card-interactive p-6 rounded-xl border border-white/[0.08] bg-[#0D0D0D] hover:bg-[#141414] transition-colors h-full">
                  <span className="w-2 h-2 rounded-full bg-brand inline-block mb-3 shadow-[0_0_6px_#D81F42]"></span>
                  <h4 className="text-[16px] font-semibold text-paper">{std.title}</h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-mute">{std.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCta
        title="Ready to Elevate Your Campaign Creative?"
        copy="Commission custom print collateral, outdoor artwork, or bundle complete creative services into your media flight."
      />
    </TargetShell>
  );
}
