import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, ShoppingBag, Bot, Server, RefreshCw } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    body: 'Clear, high-converting sites that establish credibility and guide local visitors to inquire immediately.',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Platforms',
    body: 'Frictionless catalogues, fast mobile checkout, and inventory workflows that drive direct purchases.',
  },
  {
    icon: Bot,
    title: 'AI Lead Chatbots',
    body: '24/7 intelligent agents that answer common customer queries, capture contact details, and route leads instantly.',
  },
  {
    icon: Server,
    title: 'Managed Cloud Hosting',
    body: '99.9% uptime, SSL security, backups, and proactive updates so your digital storefront never goes dark.',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    body: 'Modernize outdated designs and improve speed while preserving your existing domain authority and search ranking.',
  },
];

const highlights = [
  'Hyperlocal campaign landing pages',
  'Mobile-first responsive architecture',
  'Search engine optimized (SEO)',
  'Secure cloud infrastructure',
  'Dedicated ongoing engineering support',
];

const processSteps = [
  {
    step: '01',
    title: 'Discover & Map',
    body: 'Clarify target locality, campaign objective, and the exact conversion action required.',
  },
  {
    step: '02',
    title: 'Design & Prototype',
    body: 'Editorial typography, responsive wireframes, and copywriting aligned with real-world ads.',
  },
  {
    step: '03',
    title: 'Engineer & Launch',
    body: 'Production build, multi-device testing, analytics integration, and monitored live deployment.',
  },
  {
    step: '04',
    title: 'Support & Scale',
    body: 'Continuous monitoring, performance tuning, and creative refreshes as your campaign expands.',
  },
];

export default function DigitalSection() {
  return (
    <section className="relative border-b border-line bg-[#080808] overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#C83A4B]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="container-site py-20 md:py-28 relative z-10">
        {/* Header Reveal */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal variant="fade-up" className="max-w-xl">
            <p className="eyebrow text-[#929292]">Digital Solutions</p>
            <h2 className="mt-4 font-serif text-[32px] sm:text-[42px] leading-tight tracking-tight text-paper font-normal">
              The online presence that supports the local one.
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={0.15} className="max-w-md">
            <p className="text-[15px] leading-relaxed text-mute">
              When street and screen ads generate high curiosity, a polished digital presence is
              where real conversions happen.
            </p>
          </Reveal>
        </div>

        {/* 5-Item Capability Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <Reveal
                key={item.title}
                variant="fade-up"
                staggerIndex={idx}
                delay={0.1}
                className="h-full"
              >
                <div className="card-interactive group h-full rounded-xl border border-white/[0.08] bg-[#0D0D0D] p-6 hover:bg-[#141414] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 text-brand group-hover:bg-brand group-hover:text-white group-hover:scale-110 transition-all duration-200 shadow-sm">
                      <IconComponent size={18} />
                    </div>
                    <h3 className="mt-5 text-[16px] font-semibold text-paper group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-mute">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Highlights Banner */}
        <Reveal variant="fade-up" delay={0.2} className="mt-10">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[13px] text-mute group">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_6px_#C83A4B]"></span>
                <span className="text-[#D8D4CE] group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 4-Step Process Grid */}
        <div className="mt-16 pt-12 border-t border-white/[0.06]">
          <Reveal variant="fade-up">
            <p className="eyebrow text-[#929292] mb-8">How We Build & Deploy</p>
          </Reveal>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, idx) => (
              <Reveal
                key={item.step}
                variant="fade-up"
                staggerIndex={idx}
                delay={0.15}
                as="li"
                className="relative"
              >
                <div className="flex items-center gap-3">
                  <p className="font-serif text-[30px] font-bold text-brand leading-none">
                    {item.step}
                  </p>
                  <div className="hidden lg:block flex-1 h-px bg-white/[0.08]" />
                </div>
                <h3 className="mt-3 text-[16px] font-semibold text-paper">{item.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-mute">{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Action Buttons */}
        <Reveal variant="fade-up" delay={0.3} className="mt-12">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/digital"
              className="btn-sheen btn-arrow inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand hover:bg-brand-hover px-6 py-3 text-[13.5px] font-semibold text-paper shadow-lg shadow-brand/20 transition-all duration-200 w-full sm:w-auto"
            >
              <span>Explore Digital Solutions</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.06] px-6 py-3 text-[13.5px] font-medium text-paper transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Discuss Website / AI Project</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
