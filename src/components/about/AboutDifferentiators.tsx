import React from 'react';
import Reveal from '@/components/ui/Reveal';

const differentiators = [
  {
    num: '01',
    title: 'Hyperlocal Reach',
    body: 'We place brands inside the neighbourhoods that matter — not just on city-wide inventories. Visibility is built around how people actually move through a locality.',
  },
  {
    num: '02',
    title: 'Multiple Advertising Channels',
    body: 'Digital screens, moving media, print, inserts and pharmacy covers work as one plan. One brief, several surfaces, a coherent presence.',
  },
  {
    num: '03',
    title: 'Creative & Digital Solutions',
    body: 'From print and outdoor creatives to websites, e-commerce and AI-assisted support, the message is designed to travel cleanly across every format.',
  },
  {
    num: '04',
    title: 'Better Brand Visibility',
    body: 'Repeated, well-placed appearances in dining rooms, lobbies, gyms and streets create familiarity. Familiarity is what local audiences act on.',
  },
  {
    num: '05',
    title: 'End-to-End Campaign Support',
    body: 'Discovery, planning, creative, deployment and reporting sit with one team. You are not coordinating vendors for every channel.',
  },
  {
    num: '06',
    title: 'One Partner, Multiple Solutions',
    body: 'Media, production, distribution and digital delivery under a single relationship — so the plan stays coherent from first conversation to last flight.',
  },
];

export default function AboutDifferentiators() {
  return (
    <section className="border-b border-line bg-[#0D0D0D] relative overflow-hidden">
      <div className="container-site py-20 md:py-28">
        <Reveal variant="fade-up">
          <p className="eyebrow text-brand">Differentiators</p>
          <h2 className="mt-4 max-w-xl font-serif text-[32px] sm:text-[40px] leading-tight tracking-tight text-paper font-normal">
            Why brands work with Mr. Ads.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((n, idx) => (
            <Reveal key={n.title} variant="fade-up" staggerIndex={idx} delay={0.1} className="h-full">
              <article className="card-interactive group h-full rounded-xl border border-white/[0.08] bg-[#141414]/60 p-7 hover:bg-[#141414] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="font-serif text-[26px] font-bold text-brand leading-none transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(216,31,66,0.6)]">
                    {n.num}
                  </span>
                  <h3 className="mt-4 text-[18px] font-semibold tracking-tight text-paper group-hover:text-white transition-colors">
                    {n.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-mute">
                    {n.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
