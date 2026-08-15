'use client';

import React from 'react';

const processSteps = [
  {
    step: '01',
    title: 'Understand',
    description: 'Understand your target audience, campaign objective, and geographic focus.',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Select optimal locations, screen networks, and multi-channel advertising formats.',
  },
  {
    step: '03',
    title: 'Create',
    description: 'Develop high-converting creative video assets or adapt existing brand collateral.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Deploy your campaign live across selected networks and monitor audience engagement.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#111318] border-b border-[#252830]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
            OUR PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15]">
            Simple, Transparent Campaign Execution
          </h2>
        </div>

        {/* 4-Step Horizontal Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {processSteps.map((stepItem) => (
            <div
              key={stepItem.step}
              className="bg-[#090A0C] border border-[#252830] rounded-xl p-8 flex flex-col justify-between hover:border-[#B4233C] transition-colors relative shadow-md"
            >
              <div>
                <div className="text-3xl font-extrabold text-[#B4233C] mb-4">
                  {stepItem.step}
                </div>
                <h3 className="text-xl font-extrabold text-[#F5F5F5] mb-3 tracking-tight">
                  {stepItem.title}
                </h3>
                <p className="text-sm text-[#9A9CA5] leading-relaxed font-normal">
                  {stepItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
