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
            <ScrollReveal key={plan.name} direction="up" delay={idx * 100}>
              <div
                className={`pro-card rounded-2xl p-8 flex flex-col justify-between h-full transition-all duration-300 relative group ${
                  plan.popular
                    ? 'border-[#B4233C]/80 shadow-[0_0_30px_rgba(180,35,60,0.25)] ring-1 ring-[#B4233C]/50'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B4233C] text-white px-4 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-lg shadow-[#B4233C]/40 border border-white/20">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="text-xl font-extrabold text-[#F5F5F5] mb-1 group-hover:text-white transition-colors">
                    {plan.name}
                  </div>
                  <p className="text-xs text-[#9A9CA5] mb-6 leading-relaxed font-normal">
                    {plan.description}
                  </p>

                  <div className="py-4 border-t border-b border-[#252830] mb-6">
                    <div className="text-3xl font-extrabold text-[#F5F5F5] tracking-tight group-hover:text-[#B4233C] transition-colors">
                      {plan.price}
                    </div>
                    <div className="text-xs font-semibold text-[#9A9CA5] uppercase tracking-wider mt-1">
                      {plan.unit}
                    </div>
                  </div>

                  <ul className="flex flex-col gap-3 mb-8">
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2.5 text-xs text-[#D0D2DC] font-medium"
                      >
                        <Icon
                          name="CheckCircleIcon"
                          size={16}
                          className="text-[#B4233C] shrink-0"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className={`w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all shadow-md ${
                    plan.popular
                      ? 'bg-[#B4233C] text-white hover:bg-[#D13B55] shadow-[#B4233C]/20 hover:-translate-y-0.5'
                      : 'bg-[#1C1F2B] text-[#F5F5F5] border border-[#2D313E] hover:bg-[#252938] hover:border-[#B4233C]/50'
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
          <div className="glass-card-glow border border-[#252830] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm font-semibold text-[#F5F5F5]">
              Need Transit Media, Q-Commerce bag inserts, Corporate Gifting or Web/AI custom quotes?
            </div>
            <a
              href="#contact"
              className="text-xs font-bold text-[#B4233C] uppercase tracking-wider hover:text-[#D13B55] transition-colors hover:underline shrink-0"
            >
              Request Custom Channel Quote →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
