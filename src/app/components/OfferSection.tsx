'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const services = [
  {
    icon: 'TvIcon',
    category: 'Digital Screens',
    title: 'Digital Display Network',
    description: 'Get premium visibility on carefully placed digital screens where your target audience naturally gathers and dwells.',
    metric: '30,000+ Screens · 20M+ Combined Reach',
  },
  {
    icon: 'TruckIcon',
    category: 'Transit & Outdoor',
    title: 'Transit & Outdoor Media',
    description: 'Drive city-wide brand awareness by placing your message on moving vehicles and highly visible transit corridors.',
    metric: 'Mysuru & Bengaluru Key Routes',
  },
  {
    icon: 'DocumentTextIcon',
    category: 'Print & Direct',
    title: 'Offline & Dark Store Inserts',
    description: 'Reach customers straight at home through flyers and official inserts inside bags from top quick-commerce apps.',
    metric: 'Swiggy Instamart · Zepto · Blinkit Partner',
  },
  {
    icon: 'FilmIcon',
    category: 'Featured Creative',
    title: 'Content Creation & Production',
    description: 'From creative concept to final delivery, we produce engaging promotional videos, motion graphics, and ad assets that convert.',
    metric: 'Plan · Shoot · Edit · Deliver',
  },
  {
    icon: 'GiftIcon',
    category: 'Corporate Gifting',
    title: 'Corporate Gifting Solutions',
    description: 'Strengthen business relationships and build internal brand affinity with thoughtful, premium, custom-branded gifts.',
    metric: 'Curated & Customized Products',
  },
  {
    icon: 'CodeBracketIcon',
    category: 'Digital Tech',
    title: 'Web Design & AI Solutions',
    description: 'Establish a powerful, scalable online presence with modern web development, e-commerce stores, and custom AI integrations.',
    metric: 'Mobile Friendly · SEO Ready · Secure',
  },
];

export default function OfferSection() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-[#0B0C0E] border-b border-[#22242B]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E52345] mb-3 block">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Advertising Solutions Built for Real-World Reach
            </h2>
          </div>
          <p className="text-[#9A9AA4] text-base font-normal max-w-md leading-relaxed">
            Advertising solutions designed to reach your audience wherever they live, work, dine, travel, and buy.
          </p>
        </div>

        {/* 6 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-[#14151A] border border-[#22242B] rounded-xl p-8 flex flex-col justify-between hover:border-[#E52345] hover:shadow-md hover:shadow-black/50 transition-all duration-300 group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0B0C0E] border border-[#22242B] flex items-center justify-center mb-6 group-hover:border-[#E52345]/50 transition-colors">
                  <Icon name={svc.icon} size={20} className="text-white group-hover:text-[#E52345] transition-colors" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A9AA4] mb-2 block">
                  {svc.category}
                </span>
                <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">
                  {svc.title}
                </h3>
                <p className="text-sm text-[#9A9AA4] leading-relaxed mb-6 font-normal">
                  {svc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#22242B] flex items-center justify-between">
                <span className="text-xs font-bold text-white">{svc.metric}</span>
                <Icon name="ArrowRightIcon" size={14} className="text-[#E52345]" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Solution Section: Content Creation & Production */}
        <div className="bg-[#14151A] border border-[#22242B] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Featured Copy */}
            <div className="lg:col-span-6 flex flex-col items-start gap-4">
              <span className="inline-block px-3 py-1 bg-[#E52345]/15 border border-[#E52345]/30 rounded-md text-xs font-bold uppercase tracking-wider text-[#E52345]">
                FEATURED SERVICE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Content Creation & <span className="text-[#E52345]">Production</span>
              </h3>
              <p className="text-base text-[#9A9AA4] leading-relaxed font-normal">
                High-impact visual stories tailored for digital screen networks and digital media. We handle end-to-end creative scriptwriting, professional promo video shoots, motion graphics, and ready-to-publish vertical ads.
              </p>

              <div className="grid grid-cols-2 gap-4 w-full pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E52345]" />
                  <span className="text-xs font-semibold text-white">Promo Video Shoots</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E52345]" />
                  <span className="text-xs font-semibold text-white">Motion Graphics & VFX</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E52345]" />
                  <span className="text-xs font-semibold text-white">Campaign Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E52345]" />
                  <span className="text-xs font-semibold text-white">Ready-to-Publish Ads</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E52345] text-white rounded-lg font-bold text-sm hover:bg-[#c91837] transition-colors"
                >
                  Request Production Portfolio
                  <Icon name="ArrowRightIcon" size={14} />
                </a>
              </div>
            </div>

            {/* Right: Editorial Photo Thumbnail */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-[#22242B] bg-[#0B0C0E] aspect-[16/10] shadow-md">
                <AppImage
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
                  alt="Professional video production team shooting commercial advertisement content"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


