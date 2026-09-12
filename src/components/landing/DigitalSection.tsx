import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Business Websites',
    body: 'Clear, fast sites that introduce the brand properly — structured for enquiry, not decoration.',
  },
  {
    title: 'E-commerce Solutions',
    body: 'Catalogues, checkout and operations that match how you actually sell, without unnecessary complexity.',
  },
  {
    title: 'AI Chatbots',
    body: 'Practical conversation tools for common questions, lead capture and after-hours response.',
  },
  {
    title: 'Hosting & Maintenance',
    body: 'Stable hosting, updates and care so the site remains a working asset, not a neglected brochure.',
  },
  {
    title: 'Website Redesign',
    body: 'A considered rebuild when the current site no longer represents the business or converts.',
  },
];

const highlights = [
  'Professional online presence',
  'Mobile friendly',
  'SEO ready',
  'Scalable & secure',
  'Ongoing support',
];

const processSteps = [
  {
    step: '01',
    title: 'Discover',
    body: 'Audience, offer, constraints and the job the site must do.',
  },
  {
    step: '02',
    title: 'Design',
    body: 'Structure, writing and visual system before a line of production.',
  },
  {
    step: '03',
    title: 'Build & Launch',
    body: 'Development, content, testing and a calm, controlled go-live.',
  },
  {
    step: '04',
    title: 'Support',
    body: 'Hosting, iteration and assistance after launch.',
  },
];

export default function DigitalSection() {
  return (
    <section className="border-b border-line bg-graphite">
      <div className="container-site py-20 md:py-28">
        <div>
          <p className="eyebrow">Digital solutions</p>
          <h2 className="mt-4 max-w-xl font-serif text-[32px] leading-tight tracking-tight text-paper md:text-[40px]">
            The online presence that supports the local one.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mute">
            Websites, commerce and practical AI — designed to feel considered, not experimental.
          </p>
        </div>

        {/* 5-Item Capability Grid */}
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
          {services.map((item) => (
            <div key={item.title} className="bg-graphite p-6">
              <h3 className="text-[15px] font-medium text-paper">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-mute">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bullet Points */}
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
          {highlights.map((item) => (
            <p key={item} className="text-[13px] text-mute">
              <span className="mr-2 text-brand">—</span>
              {item}
            </p>
          ))}
        </div>

        {/* 4-Step Process */}
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <li key={item.step}>
              <p className="font-serif text-[20px] text-brand">
                {item.step}
              </p>
              <h3 className="mt-3 text-[15px] font-medium text-paper">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-mute">
                {item.body}
              </p>
            </li>
          ))}
        </ol>

        {/* Action Button */}
        <div className="mt-10">
          <Link
            href="/digital"
            className="btn-arrow inline-flex items-center justify-center gap-2 rounded-sm border border-line bg-transparent px-5 py-2.5 text-[13px] font-medium tracking-wide text-paper transition-colors duration-200 hover:border-paper/40 hover:bg-white/5"
          >
            Website, Development & AI
            <ArrowRight size={14} strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </section>
  );
}
