'use client';

import React from 'react';
import Link from 'next/link';
import TargetShell from '@/components/TargetShell';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import { ArrowRight, Palette, FileText, Image as ImageIcon, Sparkles, BookOpen, Share2, Layers } from 'lucide-react';

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
          <div className="rounded-xl border border-brand/30 bg-brand/5 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[11px] font-bold text-brand tracking-widest uppercase">
                Campaign Bundling
              </span>
              <h3 className="font-serif text-[22px] sm:text-[26px] text-paper font-normal mt-1">
                Bundle Creative Design with Any Media Flight
              </h3>
              <p className="mt-2 text-[14px] text-mute leading-relaxed">
                Save time and cost by commissioning creative assets directly with your display screen or transit media package.
              </p>
            </div>
            <Link
              href="/pricing"
              className="btn-arrow inline-flex items-center gap-2 rounded-lg bg-brand hover:bg-brand-hover px-6 py-3 text-[13.5px] font-semibold text-paper shadow-md transition-all shrink-0"
            >
              <span>Bundle in Media Plan</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Detailed Services Grid */}
      <section className="border-b border-line bg-[#0D0D0D]">
        <div className="container-site py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {creativeServices.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-xl border border-white/[0.08] bg-[#141414] overflow-hidden hover:border-brand/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="img-zoom aspect-[16/10] relative overflow-hidden bg-black">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-brand">
                        <IconComp size={16} />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-[18px] font-semibold text-paper group-hover:text-brand transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-mute">
                        {service.lead}
                      </p>

                      <dl className="mt-5 space-y-2 border-t border-white/[0.06] pt-4 text-[12.5px]">
                        {service.specs.map((s) => (
                          <div key={s.label} className="grid grid-cols-3 gap-1">
                            <dt className="text-[#888888]">{s.label}</dt>
                            <dd className="col-span-2 text-[#D8D4CE] font-medium">{s.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href={`/contact?requirement=Print%20%26%20Creative%20Design&brief=${encodeURIComponent(`Interested in: ${service.title}`)}`}
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:text-brand-hover transition-colors"
                    >
                      <span>Request Creative Quote</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Cross-links */}
      <section className="border-b border-line bg-[#080808]">
        <div className="container-site py-16">
          <p className="text-[14.5px] text-mute">
            Combine creative design with physical reach:{' '}
            <Link
              href="/locations"
              className="text-paper underline decoration-brand/60 underline-offset-4 hover:text-brand transition-colors"
            >
              Digital Display Screens
            </Link>
            ,{' '}
            <Link
              href="/offline-print"
              className="text-paper underline decoration-brand/60 underline-offset-4 hover:text-brand transition-colors"
            >
              Offline Flyer & Insert Drops
            </Link>
            , or{' '}
            <Link
              href="/advertising-on-the-move"
              className="text-paper underline decoration-brand/60 underline-offset-4 hover:text-brand transition-colors"
            >
              Moving Vehicle Wraps
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCta
        title="Commission High-Converting Campaign Creatives."
        copy="Tell us about your brand guidelines, collateral needs and target launch date — we will produce print-ready artwork engineered for maximum real-world engagement."
      />
    </TargetShell>
  );
}
