'use client';

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const processSteps = [
  {
    step: '01',
    title: 'Understand',
    description: 'Understand your target audience, campaign objective, and geographic focus.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'Select optimal locations, screen networks, and multi-channel advertising formats.',
  },
  {
    step: '03',
    title: 'Create',
    description:
      'Develop high-converting creative video assets or adapt existing brand collateral.',
  },
  {
    step: '04',
    title: 'Launch',
    description:
      'Deploy your campaign live across selected networks and monitor audience engagement.',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="process"
      className="py-20 md:py-28 bg-[#111318] border-b border-[#252830] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15]">
              Simple, Transparent Campaign Execution
            </h2>
          </div>
        </ScrollReveal>

        {/* 4-Step Horizontal Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {processSteps.map((stepItem, idx) => (
            <ScrollReveal
              key={stepItem.step}
              direction="up"
              staggerIndex={idx}
              totalItems={processSteps.length}
              staggerDelay={160}
            >
              <div className="pro-card rounded-2xl p-8 flex flex-col justify-between h-full group relative">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-[#B4233C] tracking-tight group-hover:scale-110 transition-transform block">
                      {stepItem.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#1A1D26] border border-[#2D313E] flex items-center justify-center text-xs font-extrabold text-[#9A9CA5] group-hover:border-[#B4233C]/50 group-hover:text-white transition-colors">
                      Step
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#F5F5F5] mb-3 tracking-tight group-hover:text-white transition-colors">
                    {stepItem.title}
                  </h3>
                  <p className="text-sm text-[#9A9CA5] leading-relaxed font-normal">
                    {stepItem.description}
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
