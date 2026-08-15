'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

const whyPoints = [
  {
    icon: 'MapPinIcon',
    title: 'Hyperlocal Reach',
    description: 'Reach customers where they naturally spend time across dining venues, corporate offices, and residential hubs.',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Repeated Visibility',
    description: 'Your message is seen multiple times during a customer visit, driving high brand recall and impression efficiency.',
  },
  {
    icon: 'EyeIcon',
    title: 'High-Intent Environments',
    description: 'Reach audiences while they are relaxed, attentive, and engaged—away from digital clutter and skip buttons.',
  },
  {
    icon: 'SparklesIcon',
    title: 'Multi-Channel Network',
    description: 'Combine digital screens, transit, Q-commerce inserts, corporate gifting, and video production under one partner.',
  },
];

export default function WhyItWorksSection() {
  return (
    <section id="why" className="py-20 md:py-28 bg-[#0B0C0E] border-b border-[#22242B]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E52345] mb-3 block">
            WHY MR. ADS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Built for Maximum Brand Impact & Recall
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyPoints.map((point) => (
            <div
              key={point.title}
              className="bg-[#14151A] border border-[#22242B] rounded-xl p-8 flex flex-col justify-between hover:border-[#E52345] transition-all duration-300 shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0B0C0E] border border-[#22242B] flex items-center justify-center mb-6">
                  <Icon name={point.icon as any} size={20} className="text-[#E52345]" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">
                  {point.title}
                </h3>
                <p className="text-sm text-[#9A9AA4] leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
