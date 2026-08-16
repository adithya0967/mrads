'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/components/ui/ScrollReveal';

const whyPoints = [
  {
    icon: 'MapPinIcon',
    title: 'Hyperlocal Reach',
    description:
      'Reach customers where they naturally spend time across dining venues, corporate offices, and residential hubs.',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Repeated Visibility',
    description:
      'Your message is seen multiple times during a customer visit, driving high brand recall and impression efficiency.',
  },
  {
    icon: 'EyeIcon',
    title: 'High-Intent Environments',
    description:
      'Reach audiences while they are relaxed, attentive, and engaged—away from digital clutter and skip buttons.',
  },
  {
    icon: 'SparklesIcon',
    title: 'Multi-Channel Network',
    description:
      'Combine digital screens, transit, Q-commerce inserts, corporate gifting, and video production under one partner.',
  },
];

export default function WhyItWorksSection() {
  return (
    <section
      id="why"
      className="py-20 md:py-28 bg-[#090A0C] border-b border-[#252830] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
              WHY MR. ADS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15]">
              Built for Maximum Brand Impact & Recall
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyPoints.map((point, idx) => (
            <ScrollReveal
              key={point.title}
              direction="up"
              staggerIndex={idx}
              totalItems={whyPoints.length}
              staggerDelay={160}
            >
              <div className="pro-card rounded-3xl p-8 flex flex-col justify-between h-full group overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#B4233C] before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity duration-300">
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#252B3B] to-[#141720] border border-white/15 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#B4233C]/60 group-hover:shadow-[0_0_24px_rgba(180,35,60,0.35)] transition-all duration-300">
                    <Icon
                      name={point.icon}
                      size={24}
                      className="text-[#E85D75] group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#F5F5F5] mb-3 tracking-tight group-hover:text-white transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#9A9CA5] leading-relaxed font-normal group-hover:text-[#B0B3C3] transition-colors">
                    {point.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
