'use client';

import React from 'react';
import Link from 'next/link';
import TargetShell from '@/components/TargetShell';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Reveal from '@/components/ui/Reveal';
import { ArrowRight, Globe, ShoppingCart, Bot, Server, CheckCircle2, Shield, Smartphone, Zap } from 'lucide-react';

const digitalSolutions = [
  {
    icon: Globe,
    title: 'Custom Business Websites',
    image: '/images/website.jpg',
    lead: 'Fast, credible, and mobile-first company websites engineered specifically to convert local real-world footfall and campaign attention into direct commercial enquiries.',
    features: [
      'Tailored editorial design matching your offline advertising collateral',
      'High-speed Next.js architecture with instant page loads',
      'SEO-structured local schema markup for neighbourhood discovery',
      'Integrated contact capture, click-to-call & WhatsApp routing',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Platforms & Stores',
    image: '/images/ecommerce.jpg',
    lead: 'Seamless digital storefronts that let customers discover your catalogue and complete orders effortlessly on smartphones with zero checkout friction.',
    features: [
      'Product catalogues optimized for rapid mobile browsing',
      'Instant UPI, card & net banking payment gateway integrations',
      'Automated order confirmation & SMS/WhatsApp delivery updates',
      'Inventory & discount coupon promotional engines',
    ],
  },
  {
    icon: Bot,
    title: 'AI Conversational Lead Chatbots',
    image: '/images/hero/campaign-soniq-audio.jpg',
    lead: 'Never miss an after-hours enquiry. Practical AI-driven conversational assistants that answer common customer questions, qualify intent, and capture leads 24/7.',
    features: [
      'Trained on your specific services, pricing guides & location FAQs',
      'Instant lead notification via email & WhatsApp to your sales desk',
      'Natural human-grade dialogue tailored to your brand voice',
      'Zero manual staffing required for off-peak lead triage',
    ],
  },
  {
    icon: Server,
    title: 'Managed Cloud Hosting & Maintenance',
    image: '/images/corporate.jpg',
    lead: 'Enterprise cloud hosting with continuous uptime monitoring, SSL security certificates, daily backups, and ongoing developer updates so your site remains pristine.',
    features: [
      '99.9% uptime with global CDN content acceleration',
      'Automated daily encrypted offsite backups',
      'Proactive security patching and vulnerability monitoring',
      'Dedicated engineering support for content & feature updates',
    ],
  },
];

const standards = [
  {
    icon: Smartphone,
    title: 'Mobile-First Perfection',
    desc: 'Over 85% of local campaign visitors arrive via mobile devices. Every layout is calibrated for one-thumb speed and clarity.',
  },
  {
    icon: Zap,
    title: 'Sub-Second Loading Speed',
    desc: 'Fast websites convert better. We engineer lightweight bundles and optimized image formats that load instantaneously.',
  },
  {
    icon: Shield,
    title: 'Security & Enterprise SEO',
    desc: 'SSL encryption, clean semantic HTML5, and schema.org structured data ensure maximum search discoverability.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Brief',
    desc: 'We map target audiences, locality focus, campaign KPIs, and required enquiry workflows.',
  },
  {
    step: '02',
    title: 'Visual Design & Copy',
    desc: 'Full desktop and mobile design system with copy tailored to your offline messaging.',
  },
  {
    step: '03',
    title: 'Engineering & Testing',
    desc: 'Next.js development, responsive cross-browser testing, SEO schema, and payment QA.',
  },
  {
    step: '04',
    title: 'Go-Live & Managed Care',
    desc: 'DNS routing, live analytics deployment, search console indexing, and ongoing care.',
  },
];

export default function DigitalPage() {
  return (
    <TargetShell>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Solutions / Website, Development & AI"
        title="The digital infrastructure where campaign curiosity converts."
        copy="A premier digital foundation ensures that every customer searching for your brand after seeing a screen or street ad finds an impressive, instant, and frictionless online experience."
      />

      {/* 2. Standards Highlights */}
      <section className="border-b border-line bg-[#080808]">
        <div className="container-site py-12">
          <div className="grid gap-6 sm:grid-cols-3">
            {standards.map((std, idx) => {
              const IconComponent = std.icon;
              return (
                <Reveal key={std.title} variant="fade-up" staggerIndex={idx} delay={0.1}>
                  <div
                    className="card-interactive rounded-xl border border-white/[0.08] bg-[#0D0D0D] p-6 hover:bg-[#141414] flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] text-brand mb-4 shadow-sm">
                        <IconComponent size={18} />
                      </div>
                      <h3 className="text-[16px] font-semibold text-paper">
                        {std.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-mute">
                        {std.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Detailed Digital Solutions */}
      <section className="border-b border-line bg-[#0D0D0D]">
        <div className="container-site py-20 md:py-28 space-y-24">
          {digitalSolutions.map((sol, index) => {
            const isOdd = index % 2 === 1;
            const IconComponent = sol.icon;

            return (
              <div
                key={sol.title}
                className="grid gap-12 lg:grid-cols-12 items-center"
              >
                {/* Visual */}
                <div
                  className={`lg:col-span-6 ${
                    isOdd ? 'lg:order-2' : ''
                  }`}
                >
                  <Reveal variant={isOdd ? 'slide-right' : 'slide-left'}>
                    <div className="card-interactive relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
                      <div className="img-reveal-box aspect-[16/10]">
                        <img
                          src={sol.image}
                          alt={sol.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-semibold tracking-wider text-paper uppercase">
                          Digital Capability
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 ${
                    isOdd ? 'lg:order-1' : ''
                  }`}
                >
                  <Reveal variant={isOdd ? 'slide-left' : 'slide-right'} delay={0.1}>
                    <div>
                      <div className="inline-flex items-center gap-2 text-[11px] font-bold text-brand uppercase tracking-wider mb-2">
                        <IconComponent size={14} />
                        <span>Capability</span>
                      </div>

                      <h2 className="font-serif text-[30px] sm:text-[36px] leading-tight tracking-tight text-paper font-normal">
                        {sol.title}
                      </h2>

                      <p className="mt-4 text-[15px] leading-relaxed text-mute">
                        {sol.lead}
                      </p>

                      <ul className="mt-6 space-y-2.5">
                        {sol.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5 text-[14px] text-mute">
                            <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                            <span className="text-[#D8D4CE]">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-4">
                      <Link
                        href="/contact"
                        className="btn-sheen btn-arrow inline-flex items-center gap-2 rounded-lg bg-brand hover:bg-brand-hover px-5 py-2.5 text-[13px] font-semibold text-paper shadow-md shadow-brand/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <span>Discuss Project</span>
                        <ArrowRight size={13} />
                      </Link>

                      <Link
                        href="/pricing"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] px-4 py-2.5 text-[13px] font-medium text-paper transition-all hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <span>Estimate Pricing</span>
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Development Workflow */}
      <section className="border-b border-line bg-[#080808]">
        <div className="container-site py-20">
          <Reveal variant="fade-up" className="max-w-xl mb-12">
            <p className="eyebrow text-brand">Development Workflow</p>
            <h3 className="mt-2 font-serif text-[28px] sm:text-[34px] leading-tight text-paper font-normal">
              From brief to high-performance live release.
            </h3>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <Reveal key={step.step} variant="fade-up" staggerIndex={idx} delay={0.1}>
                <div className="card-interactive p-6 rounded-xl border border-white/[0.08] bg-[#0D0D0D] hover:bg-[#141414] transition-colors h-full">
                  <span className="font-serif text-[26px] font-bold text-brand leading-none">
                    {step.step}
                  </span>
                  <h4 className="mt-3 text-[16px] font-semibold text-paper">{step.title}</h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-mute">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCta
        title="Ready to Build or Upgrade Your Digital Presence?"
        copy="Tell us about your business, website goals, or AI chatbot requirements. We will review and provide a detailed scope and delivery timeline."
      />
    </TargetShell>
  );
}
