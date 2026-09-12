import React from 'react';
import Reveal from '@/components/ui/Reveal';

const differentiators = [
  {
    title: 'Hyperlocal Reach',
    body: 'We place brands inside the neighbourhoods that matter — not just on city-wide inventories. Visibility is built around how people actually move through a locality.',
  },
  {
    title: 'Multiple Advertising Channels',
    body: 'Digital screens, moving media, print, inserts and pharmacy covers work as one plan. One brief, several surfaces, a coherent presence.',
  },
  {
    title: 'Creative & Digital Solutions',
    body: 'From print and outdoor creatives to websites, e-commerce and AI-assisted support, the message is designed to travel cleanly across every format.',
  },
  {
    title: 'Better Brand Visibility',
    body: 'Repeated, well-placed appearances in dining rooms, lobbies, gyms and streets create familiarity. Familiarity is what local audiences act on.',
  },
  {
    title: 'End-to-End Campaign Support',
    body: 'Discovery, planning, creative, deployment and reporting sit with one team. You are not coordinating vendors for every channel.',
  },
  {
    title: 'One Partner, Multiple Solutions',
    body: 'Media, production, distribution and digital delivery under a single relationship — so the plan stays coherent from first conversation to last flight.',
  },
];

export default function AboutDifferentiators() {
  return (
    <section className="border-b border-line bg-graphite">
      <div className="container-site py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">Differentiators</p>
          <h2 className="mt-4 max-w-xl font-serif text-[32px] leading-tight tracking-tight text-paper md:text-[38px]">
            Why brands work with Mr. Ads.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {differentiators.map((n, s) => (
            <Reveal key={n.title}>
              <article className="border-t border-line pt-6">
                <p className="font-serif text-[18px] text-mute">0{s + 1}</p>
                <h3 className="mt-3 text-[18px] font-medium tracking-tight text-paper">
                  {n.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mute">
                  {n.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
