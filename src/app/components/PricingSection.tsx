'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const plans = [
  {
    emoji: '💼',
    name: 'Basic Plan',
    price: '₹3,500',
    unit: 'per display / month',
    description: 'Perfect for testing your first campaign in a single location.',
    badge: null,
    features: [
      'Minimum 3 months or 3 displays',
      '30-second ad slot',
      'Plays every 5 minutes',
      'Ideal for testing',
      'Single location focus',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    emoji: '📈',
    name: 'Growth Plan',
    price: '₹2,800–₹3,000',
    unit: 'per display / month',
    description: 'Best value for growing brands seeking multi-location visibility.',
    badge: 'Most Popular',
    features: [
      '5–9 displays',
      'Multi-location visibility',
      '30-second ad slot',
      'Better reach & repeated exposure',
      'Discounted pricing',
    ],
    cta: 'Block Slots Now',
    highlight: true,
  },
  {
    emoji: '🚀',
    name: 'Scale Plan',
    price: 'Custom Pricing',
    unit: '10+ displays',
    description: 'Maximum city-wide coverage for brands ready to dominate Bengaluru.',
    badge: null,
    features: [
      '10+ displays',
      'Maximum city-wide visibility',
      '30-second ad slot',
      'Priority placement',
      'Best rates available',
    ],
    cta: 'Contact Us',
    highlight: false,
  },
];

const included = [
  'Ad plays repeatedly as scheduled',
  'High-dwell waiting & common area views',
  'Targeted hyperlocal audience reach',
  'Active network maintenance & hosting',
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.price-card').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0) scale(1)';
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
            Pricing
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-foreground mb-4">
            Digital Display Screen Pricing
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Flexible packages based on number of display screens and campaign duration.
            Volume pricing available for multi-location bookings.
          </p>
        </div>

        {/* Bold callout */}
        <div className="text-center mb-12">
          <span className="inline-block px-6 py-3 bg-red-950/30 border border-red-900/40 rounded-full text-sm font-bold text-red-300">
            Select more display screens across our network to lower your cost per screen.
          </span>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`price-card relative rounded-3xl p-8 flex flex-col gap-6 border transition-all duration-500 ${
                plan.highlight
                  ? 'pricing-card-popular text-primary-foreground border-transparent shadow-2xl shadow-black/40 scale-105 md:scale-[1.04]'
                  : 'bg-background border-border hover:border-accent/30 hover:shadow-lg'
              }`}
              style={{
                opacity: 0,
                transform: `translateY(40px) scale(${plan.highlight ? '1.04' : '1'})`,
                transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 0.15}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 0.15}s`,
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-accent text-accent-foreground rounded-full text-xs font-extrabold uppercase tracking-widest shadow-lg">
                  {plan.badge}
                </div>
              )}

              {/* Plan header */}
              <div>
                <div className="text-2xl mb-2">{plan.emoji}</div>
                <h3 className={`font-extrabold text-xl mb-1 ${plan.highlight ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className={`border-t border-b py-5 ${plan.highlight ? 'border-white/10' : 'border-border'}`}>
                <div className={`text-3xl font-extrabold tracking-tight ${plan.highlight ? 'text-white' : 'text-foreground'}`}>
                  {plan.price}
                </div>
                <div className={`text-xs font-bold uppercase tracking-widest mt-1 ${plan.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>
                  {plan.unit}
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Icon
                      name="CheckCircleIcon"
                      size={16}
                      variant="solid"
                      className="shrink-0 mt-0.5 text-accent"
                    />
                    <span className={`text-sm font-medium ${plan.highlight ? 'text-white/80' : 'text-foreground/80'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-auto w-full py-4 rounded-full font-bold text-sm uppercase tracking-widest text-center transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-white text-accent hover:bg-white/90'
                    : 'bg-accent text-accent-foreground hover:bg-red-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Included in all plans */}
        <div className="mt-12 bg-background rounded-3xl p-8 border border-border">
          <h4 className="text-center font-extrabold text-foreground mb-6 uppercase tracking-widest text-xs">
            Included in All Screen Plans
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-accent shrink-0" />
                <span className="text-sm font-semibold text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Pricing Callout for other solutions */}
        <div className="mt-8 bg-gradient-to-r from-red-950/20 to-slate-900/40 rounded-3xl p-8 border border-red-900/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/30 shrink-0">
              <Icon name="SparklesIcon" size={24} className="text-accent" />
            </div>
            <div>
              <h4 className="font-extrabold text-foreground text-base mb-1">Looking for Transit, Print inserts, Gifting or Tech solutions?</h4>
              <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">
                Because these campaigns are customized to your specific geography, audience, products, or software requirements, we offer tailor-made quotes to guarantee the best ROI.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 bg-accent text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-colors shrink-0"
          >
            Request Custom Quote
          </a>
        </div>

        {/* Urgency */}
        <div className="mt-8 scarcity-strip rounded-2xl px-6 py-4 flex items-center gap-3 border border-red-900/40">
          <Icon name="ClockIcon" size={18} className="text-red-400 shrink-0" />
          <p className="text-sm font-semibold text-red-300">
            <strong>Limited slots per display.</strong> High-demand screens get booked quickly—reserve your slot in advance.
          </p>
        </div>
      </div>
    </section>
  );
}
