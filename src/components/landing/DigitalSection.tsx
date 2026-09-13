import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, ShoppingBag, Bot, Server, RefreshCw } from 'lucide-react';

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
    <section className="relative border-b border-line bg-[#080808]">
      <div className="container-site py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow text-[#929292]">Digital Solutions</p>
            <h2 className="mt-4 font-serif text-[32px] sm:text-[42px] leading-tight tracking-tight text-paper font-normal">
              The online presence that supports the local one.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-mute">
            When street and screen ads generate high curiosity, a polished digital presence is where real conversions happen.
          </p>
        </div>

        {/* 5-Item Capability Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-xl border border-white/[0.08] bg-[#0D0D0D] p-6 hover:border-brand/40 hover:bg-[#141414] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 text-brand group-hover:bg-brand group-hover:text-white transition-all">
                    <IconComponent size={18} />
                  </div>
                  <h3 className="mt-5 text-[16px] font-semibold text-paper group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-mute">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights Banner */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-[13px] text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
              <span className="text-[#D8D4CE]">{item}</span>
            </div>
          ))}
        </div>

        {/* 4-Step Process Grid */}
        <div className="mt-16 pt-12 border-t border-white/[0.06]">
          <p className="eyebrow text-[#929292] mb-8">How We Build & Deploy</p>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <li key={item.step} className="relative">
                <p className="font-serif text-[28px] font-bold text-brand leading-none">
                  {item.step}
                </p>
                <h3 className="mt-3 text-[16px] font-semibold text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-mute">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/digital"
            className="btn-arrow inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand hover:bg-brand-hover px-6 py-3 text-[13.5px] font-semibold text-paper shadow-lg shadow-brand/20 transition-all duration-200 w-full sm:w-auto"
          >
            <span>Explore Digital Solutions</span>
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] px-6 py-3 text-[13.5px] font-medium text-paper transition-all duration-200 w-full sm:w-auto"
          >
            <span>Discuss Website / AI Project</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
