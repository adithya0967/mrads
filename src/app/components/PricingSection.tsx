'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/components/ui/ScrollReveal';

const plans = [
  {
    name: 'Basic Plan',
    price: '₹3,500',
    unit: 'per display / month',
    description: 'Ideal for testing campaigns in single locations.',
    popular: false,
    features: [
      'Minimum 3 months or 3 displays',
      '30-second ad duration slot',
      'Plays every 5 minutes (12× / hr)',
      'High-dwell restaurant visibility',
      'Standard ad rotation',
    ],
    cta: 'Select Basic Plan',
  },
  {
    name: 'Growth Plan',
    price: '₹2,800–₹3,000',
    unit: 'per display / month',
    description: 'Best value for multi-location brand expansion across Bengaluru.',
    popular: true,
    features: [
      '5–9 displays across active locations',
      'Multi-neighborhood coverage',
      '30-second ad duration slot',
      'High repeated exposure',
      'Discounted volume rates',
    ],
    cta: 'Book Growth Slots',
  },
  {
    name: 'Scale Plan',
    price: 'Custom Pricing',
    unit: '10+ displays',
    description: 'Maximum city-wide dominance for corporate enterprise brands.',
    popular: false,
    features: [
      '10+ displays city-wide',
      'Priority location placement',
      'Integrated multi-channel bundling',
      'Dedicated account manager',
      'Custom frequency options',
    ],
    cta: 'Contact for Quote',
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 md:py-28 bg-[#090A0C] border-b border-[#252830] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
              PRICING & PACKAGES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15]">
              Transparent Display Screen Packages
            </h2>
            <p className="text-[#9A9CA5] text-base font-normal leading-relaxed mt-3">
              Scale your physical campaign coverage across Bengaluru venues with volume-based screen
              pricing.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {plans.map((plan, idx) => (
            <ScrollReveal
              key={plan.name}
              direction="up"
              staggerIndex={idx}
              totalItems={plans.length}
              staggerDelay={180}
            >
              <div
                className={`${
                  plan.popular ? 'pro-card-popular' : 'pro-card'
                } rounded-3xl p-8 flex flex-col justify-between h-full relative group overflow-hidden`}
              >
                {/* Top glow accent line */}
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-transparent via-[#E85D75] to-transparent opacity-100'
                      : 'bg-gradient-to-r from-transparent via-[#B4233C] to-transparent opacity-0 group-hover:opacity-100'
                  }`}
                />

                {plan.popular && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B4233C] to-[#E85D75] text-white px-5 py-1 rounded-b-xl text-[11px] font-extrabold uppercase tracking-widest shadow-lg shadow-[#B4233C]/50 border-x border-b border-white/20 z-10">
                    ★ Most Popular
                  </div>
                )}

                <div className={plan.popular ? 'pt-3' : ''}>
                  <div className="text-xl font-extrabold text-[#F5F5F5] mb-1 group-hover:text-white transition-colors">
                    {plan.name}
                  </div>
                  <p className="text-xs text-[#9A9CA5] mb-6 leading-relaxed font-normal group-hover:text-[#B0B3C3] transition-colors">
                    {plan.description}
                  </p>

                  <div className="py-5 border-t border-b border-white/10 mb-6 bg-white/[0.02] -mx-8 px-8">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] tracking-tight group-hover:text-[#E85D75] transition-colors">
                      {plan.price}
                    </div>
                    <div className="text-[11px] font-bold text-[#9A9CA5] uppercase tracking-widest mt-1">
                      {plan.unit}
                    </div>
                  </div>

                  <ul className="flex flex-col gap-3.5 mb-8">
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-3 text-xs text-[#D0D2DC] font-medium"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#B4233C]/20 border border-[#B4233C]/50 flex items-center justify-center shrink-0">
                          <Icon
                            name="CheckCircleIcon"
                            size={13}
                            className="text-[#E85D75]"
                          />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className={`w-full text-center py-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#B4233C] to-[#E85D75] text-white hover:from-[#C82A45] hover:to-[#F06E84] shadow-lg shadow-[#B4233C]/30 hover:-translate-y-0.5'
                      : 'bg-[#181C26] text-[#F5F5F5] border border-white/15 hover:bg-[#222838] hover:border-[#B4233C]/60 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note on Custom Formats */}
        <ScrollReveal direction="up" delay={250}>
          <div className="glass-card-glow border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="text-sm font-semibold text-[#F5F5F5] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#B4233C] shrink-0" />
              Need Transit Media, Q-Commerce bag inserts, Corporate Gifting or Web/AI custom quotes?
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#E85D75] uppercase tracking-wider hover:text-white transition-colors shrink-0 group"
            >
              Request Custom Channel Quote
              <Icon name="ArrowRightIcon" size={13} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
