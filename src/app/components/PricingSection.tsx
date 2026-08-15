'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

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
    <section id="pricing" className="py-20 md:py-28 bg-[#0B0C0E] border-b border-[#22242B]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E52345] mb-3 block">
            PRICING & PACKAGES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Transparent Display Screen Packages
          </h2>
          <p className="text-[#9A9AA4] text-base font-normal leading-relaxed mt-3">
            Scale your physical campaign coverage across Bengaluru venues with volume-based screen pricing.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-[#14151A] border rounded-xl p-8 flex flex-col justify-between transition-all duration-300 relative shadow-md ${
                plan.popular ? 'border-[#E52345] ring-1 ring-[#E52345]' : 'border-[#22242B] hover:border-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E52345] text-white px-3.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div>
                <div className="text-xl font-extrabold text-white mb-1">{plan.name}</div>
                <p className="text-xs text-[#9A9AA4] mb-6 leading-relaxed font-normal">
                  {plan.description}
                </p>

                <div className="py-4 border-t border-b border-[#22242B] mb-6">
                  <div className="text-3xl font-extrabold text-white tracking-tight">
                    {plan.price}
                  </div>
                  <div className="text-xs font-semibold text-[#9A9AA4] uppercase tracking-wider mt-1">
                    {plan.unit}
                  </div>
                </div>

                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-xs text-white font-medium">
                      <Icon name="CheckCircleIcon" size={16} className="text-[#E52345] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`w-full text-center py-3.5 rounded-lg font-bold text-sm transition-colors ${
                  plan.popular
                    ? 'bg-[#E52345] text-white hover:bg-[#c91837]'
                    : 'bg-[#1E2028] text-white hover:bg-[#2A2D37]'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note on Custom Formats */}
        <div className="bg-[#14151A] border border-[#22242B] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm font-semibold text-white">
            Need Transit Media, Q-Commerce bag inserts, Corporate Gifting or Web/AI custom quotes?
          </div>
          <a
            href="#contact"
            className="text-xs font-bold text-[#E52345] uppercase tracking-wider hover:underline shrink-0"
          >
            Request Custom Channel Quote →
          </a>
        </div>
      </div>
    </section>
  );
}


