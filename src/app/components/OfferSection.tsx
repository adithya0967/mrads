'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import ScrollReveal from '@/components/ui/ScrollReveal';

const services = [
  {
    icon: 'TvIcon',
    category: 'Digital Screens',
    title: 'Digital Display Network',
    description:
      'Get premium visibility on carefully placed digital screens where your target audience naturally gathers and dwells.',
    metric: '30,000+ Screens · 20M+ Combined Reach',
  },
  {
    icon: 'TruckIcon',
    category: 'Transit & Outdoor',
    title: 'Transit & Outdoor Media',
    description:
      'Drive city-wide brand awareness by placing your message on moving vehicles and highly visible transit corridors.',
    metric: 'Mysuru & Bengaluru Key Routes',
  },
  {
    icon: 'DocumentTextIcon',
    category: 'Print & Direct',
    title: 'Offline & Dark Store Inserts',
    description:
      'Reach customers straight at home through flyers and official inserts inside bags from top quick-commerce apps.',
    metric: 'Swiggy Instamart · Zepto · Blinkit Partner',
  },
  {
    icon: 'FilmIcon',
    category: 'Featured Creative',
    title: 'Content Creation & Production',
    description:
      'From creative concept to final delivery, we produce engaging promotional videos, motion graphics, and ad assets that convert.',
    metric: 'Plan · Shoot · Edit · Deliver',
  },
  {
    icon: 'GiftIcon',
    category: 'Corporate Gifting',
    title: 'Corporate Gifting Solutions',
    description:
      'Strengthen business relationships and build internal brand affinity with thoughtful, premium, custom-branded gifts.',
    metric: 'Curated & Customized Products',
  },
  {
    icon: 'CodeBracketIcon',
    category: 'Digital Tech',
    title: 'Web Design & AI Solutions',
    description:
      'Establish a powerful, scalable online presence with modern web development, e-commerce stores, and custom AI integrations.',
    metric: 'Mobile Friendly · SEO Ready · Secure',
  },
];

export default function OfferSection() {
  return (
    <section
      id="solutions"
      className="py-20 md:py-28 bg-[#090A0C] border-b border-[#252830] relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#B4233C]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
                WHAT WE DO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15]">
                Advertising Solutions Built for Real-World Reach
              </h2>
            </div>
            <p className="text-[#9A9CA5] text-base font-normal max-w-md leading-relaxed">
              Advertising solutions designed to reach your audience wherever they live, work, dine,
              travel, and buy.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((svc, idx) => (
            <ScrollReveal
              key={svc.title}
              direction="up"
              staggerIndex={idx}
              totalItems={services.length}
              staggerDelay={130}
            >
              <div className="pro-card rounded-2xl p-8 flex flex-col justify-between h-full group overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#B4233C] before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity duration-300">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#252B3B] to-[#141720] border border-white/15 flex items-center justify-center group-hover:scale-110 group-hover:border-[#B4233C]/60 group-hover:shadow-[0_0_24px_rgba(180,35,60,0.35)] transition-all duration-300">
                      <Icon
                        name={svc.icon}
                        size={22}
                        className="text-[#F5F5F5] group-hover:text-[#B4233C] transition-colors"
                      />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#161922] border border-white/10 text-[10px] font-extrabold uppercase tracking-wider text-[#9A9CA5] group-hover:border-[#B4233C]/40 group-hover:text-[#F5F5F5] transition-colors">
                      {svc.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#F5F5F5] mb-3 tracking-tight group-hover:text-white transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-[#9A9CA5] leading-relaxed mb-6 font-normal group-hover:text-[#B0B3C3] transition-colors">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#D0D2DC] group-hover:text-white transition-colors">
                    {svc.metric}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#1A1D2A] border border-white/10 flex items-center justify-center text-[#B4233C] group-hover:bg-[#B4233C] group-hover:text-white group-hover:border-[#B4233C] group-hover:scale-110 shadow-md transition-all duration-300">
                    <Icon
                      name="ArrowRightIcon"
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Featured Solution Section: Content Creation & Production */}
        <ScrollReveal direction="up" delay={200}>
          <div className="glass-card-glow rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B4233C]/15 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B4233C]/10 blur-[90px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Left: Featured Copy */}
              <div className="lg:col-span-6 flex flex-col items-start gap-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#641C2B]/50 border border-[#B4233C]/40 rounded-full text-xs font-bold uppercase tracking-wider text-[#E85D75] shadow-inner">
                  <span className="w-2 h-2 rounded-full bg-[#B4233C] animate-pulse" />
                  FEATURED SERVICE
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight">
                  Content Creation & <span className="text-[#C83A4B]">Production</span>
                </h3>
                <p className="text-base text-[#9A9CA5] leading-relaxed font-normal">
                  High-impact visual stories tailored for digital screen networks and digital media.
                  We handle end-to-end creative scriptwriting, professional promo video shoots,
                  motion graphics, and ready-to-publish vertical ads.
                </p>

                <div className="grid grid-cols-2 gap-3 w-full pt-2">
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#141720]/80 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#B4233C]" />
                    <span className="text-xs font-semibold text-[#F5F5F5]">Promo Video Shoots</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#141720]/80 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#B4233C]" />
                    <span className="text-xs font-semibold text-[#F5F5F5]">
                      Motion Graphics & VFX
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#141720]/80 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#B4233C]" />
                    <span className="text-xs font-semibold text-[#F5F5F5]">Campaign Strategy</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#141720]/80 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#B4233C]" />
                    <span className="text-xs font-semibold text-[#F5F5F5]">
                      Ready-to-Publish Ads
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#B4233C] to-[#D13B55] text-white rounded-xl font-bold text-sm hover:from-[#C82A45] hover:to-[#E54863] transition-all shadow-lg shadow-[#B4233C]/25 hover:-translate-y-0.5"
                  >
                    Request Production Portfolio
                    <Icon name="ArrowRightIcon" size={14} />
                  </a>
                </div>
              </div>

              {/* Right: Editorial Photo Thumbnail */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#090A0C] aspect-[16/10] shadow-2xl group ring-1 ring-white/10">
                  <AppImage
                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
                    alt="Professional video production team shooting commercial advertisement content"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-semibold text-[#F5F5F5] backdrop-blur-md bg-black/60 border border-white/15 px-4 py-2.5 rounded-xl shadow-lg">
                    <span>4K Cinema Production Quality</span>
                    <span className="text-[#E85D75] font-extrabold">In-House Studio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
