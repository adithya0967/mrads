import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const solutions = [
  {
    title: 'Display Advertising Network',
    category: 'Digital Screens (DOOH)',
    description:
      'High-definition digital screens in restaurants, apartments, corporate parks, premium malls, gyms, play zones, and PG clusters.',
    image: '/images/display.jpg',
    to: '/locations',
    featured: true,
    tag: 'Highest Dwell Time',
  },
  {
    title: 'Advertising on the Move',
    category: 'Transit & Fleet',
    description:
      'Autos, cabs, buses, promotional mobile vans, and commuter shelters that carry your brand through arterial city corridors.',
    image: '/images/streets.jpg',
    to: '/advertising-on-the-move',
    featured: false,
    tag: 'City-Wide Circulation',
  },
  {
    title: 'Offline & Print Distribution',
    category: 'Household Reach',
    description:
      'Flyer distribution, newspaper inserts, and quick-commerce dark store bag drops delivered directly to residential doorsteps.',
    image: '/images/flyers.jpg',
    to: '/offline-print',
    featured: false,
    tag: 'Doorstep Impact',
  },
  {
    title: 'Print & Creative Design',
    category: 'Brand Collateral',
    description:
      'Brochures, standees, posters, pole kiosks, magazine spreads, and social creatives built to turn real-world footfall into recall.',
    image: '/images/creative.jpg',
    to: '/print-creative',
    featured: false,
    tag: 'Studio Quality',
  },
  {
    title: 'Pharmacy Cover Advertising',
    category: 'Hyperlocal Retail',
    description:
      'Branded covers and shutter displays on busy neighbourhood pharmacies — repeated daily visibility every time medicine is brought home.',
    image: '/images/pharmacy.jpg',
    to: '/offline-print',
    featured: false,
    tag: 'Daily Retention',
  },
  {
    title: 'Website, Development & AI',
    category: 'Digital Infrastructure',
    description:
      'High-converting business sites, e-commerce stores, automated AI lead-capture chatbots, and managed cloud hosting.',
    image: '/images/website.jpg',
    to: '/digital',
    featured: false,
    tag: 'Conversion Hub',
  },
];

export default function SolutionsSection() {
  return (
    <section className="relative border-b border-line bg-[#080808] overflow-hidden" id="solutions">
      {/* Ambient background depth */}
      <div className="absolute -top-32 right-10 w-[550px] h-[550px] bg-[#D81F42]/[0.035] rounded-full blur-[150px] pointer-events-none" />

      <div className="container-site py-20 md:py-28 relative z-10">
        {/* Header Reveal */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal variant="fade-down" className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-semibold text-brand tracking-widest uppercase mb-3">
              <Sparkles size={12} className="animate-pulse" />
              <span>Full-Stack Advertising</span>
            </div>
            <h2 className="font-serif text-[32px] sm:text-[42px] leading-tight tracking-tight text-paper font-normal">
              One network. Several ways to be seen.
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={0.15} className="max-w-sm">
            <p className="text-[14px] leading-relaxed text-mute">
              Pick a single channel or build a synchronized multi-surface presence. Every format is planned as part of one cohesive local campaign.
            </p>
            <Link
              href="/solutions"
              className="btn-arrow mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:text-brand-hover transition-colors"
            >
              <span>Explore all channel details</span>
              <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>

        {/* Solutions Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, idx) => (
            <Reveal
              key={item.title}
              variant="fade-up"
              staggerIndex={idx}
              delay={0.1}
              className={`h-full flex flex-col ${item.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <article
                className="card-interactive group flex-1 flex flex-col rounded-2xl border border-white/[0.08] bg-[#0D0D0D] overflow-hidden"
              >
                <Link href={item.to} className="block flex-1 flex flex-col">
                  <div
                    className={`img-reveal-box relative overflow-hidden bg-black ${
                      item.featured ? 'aspect-[16/9]' : 'aspect-[16/10]'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/30 to-transparent" />
                    
                    {/* Category & Tag Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-semibold tracking-wider text-paper uppercase transition-transform duration-200 group-hover:scale-105">
                        {item.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-brand/90 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm transition-all duration-200 group-hover:shadow-[0_0_12px_rgba(216,31,66,0.6)]">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-[19px] sm:text-[21px] font-semibold tracking-tight text-paper group-hover:text-brand transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-mute">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-[12px] font-semibold tracking-wider text-paper uppercase group-hover:text-brand transition-colors">
                        View Channel Details
                      </span>
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.05] group-hover:bg-brand text-paper transition-all duration-200 shadow-sm group-hover:shadow-md group-hover:shadow-brand/30">
                        <ArrowRight size={13} className="transform group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
