'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plus } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const faqs = [
  {
    q: 'What does hyperlocal advertising mean at Mr. Ads?',
    a: 'It means placing your brand in the specific neighbourhoods, venues and routes your audience already uses — restaurants, apartments, offices, malls, gyms, hostels, streets and homes — rather than buying broad, unfocused city inventory.',
  },
  {
    q: 'Do you work in one city or several?',
    a: 'We plan around the city and localities you need. Share the market, audience and goal; we build the media plan around available screens, streets and distribution in those areas.',
  },
  {
    q: 'Are the location figures guaranteed impressions?',
    a: 'No. Reach figures on this site denote network opportunity to reach — the scale of venues and surfaces in the network — not guaranteed impressions.',
  },
  {
    q: 'Can you handle creative as well as media?',
    a: 'Yes. Print, outdoor, digital display and social creatives can sit inside the same engagement, alongside websites and related digital work.',
  },
  {
    q: 'How do I start?',
    a: 'Request a media plan. Tell us the city, audience, channels of interest and a monthly budget range. We respond with a considered brief, not a generic rate card.',
  },
  {
    q: 'What is a typical campaign duration?',
    a: 'Most hyperlocal plans run for one to three months so the brand can repeat. Longer flights are common for apartments, pharmacies and transit, where familiarity compounds.',
  },
];

export default function AboutFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="border-b border-line bg-graphite relative overflow-hidden">
      <div className="container-site py-20 md:py-28">
        <Reveal variant="fade-up">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-serif text-[32px] leading-tight tracking-tight text-paper">
            Questions, answered briefly.
          </h2>
        </Reveal>

        <div className="mt-12 max-w-3xl">
          {faqs.map((n, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={n.q} variant="fade-up" staggerIndex={idx} delay={0.05}>
                <div className="border-t border-line py-5 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex cursor-pointer items-start justify-between gap-6 text-left text-[16px] font-medium text-paper group"
                    aria-expanded={isOpen}
                  >
                    <span className="group-hover:text-brand transition-colors duration-200">
                      {n.q}
                    </span>
                    <span
                      className={`mt-0.5 flex items-center justify-center w-6 h-6 rounded-full border border-white/10 text-mute transition-all duration-300 shrink-0 ${
                        isOpen
                          ? 'rotate-45 border-brand text-brand bg-[#D81F42]/10'
                          : 'group-hover:border-white/30'
                      }`}
                    >
                      <Plus size={14} />
                    </span>
                  </button>

                  <div
                    className={`accordion-content overflow-hidden ${isOpen ? 'is-open mt-3' : ''}`}
                  >
                    <div className="accordion-inner pr-10">
                      <p className="text-[15px] leading-relaxed text-mute">{n.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="fade-up" delay={0.2} className="mt-10">
          <Link
            href="/contact"
            className="btn-sheen btn-arrow inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-[13.5px] font-semibold text-paper shadow-md shadow-brand/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Request a Media Plan</span>
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
