import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
  return (
    <section className="border-b border-line bg-graphite">
      <div className="container-site py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-serif text-[32px] leading-tight tracking-tight text-paper">
            Questions, answered briefly.
          </h2>
        </Reveal>

        <div className="mt-12 max-w-3xl">
          {faqs.map((n) => (
            <details key={n.q} className="faq-item group border-t border-line py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[16px] font-medium text-paper">
                {n.q}
                <span className="mt-0.5 text-mute transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl pr-10 text-[15px] leading-relaxed text-mute">
                {n.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="btn-arrow inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-5 py-2.5 text-[13px] font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-brand-hover"
          >
            Request a Media Plan
            <ArrowRight size={14} strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </section>
  );
}
