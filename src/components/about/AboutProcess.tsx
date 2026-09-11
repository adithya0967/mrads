import React from 'react';
import Reveal from '@/components/ui/Reveal';

const steps = [
  {
    step: '01',
    title: 'Discover',
    body: 'City, audience, objective and the places they already occupy.',
  },
  {
    step: '02',
    title: 'Plan',
    body: 'Channels, duration, creative needs and a media plan you can act on.',
  },
  {
    step: '03',
    title: 'Create',
    body: 'Assets sized and written for screens, vehicles, print and digital.',
  },
  {
    step: '04',
    title: 'Deploy',
    body: 'Booking, production, installation and distribution on the ground.',
  },
  {
    step: '05',
    title: 'Support',
    body: 'Flighting, adjustments and a single point of contact through the campaign.',
  },
];

export default function AboutProcess() {
  return (
    <section className="border-b border-line">
      <div className="container-site py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">Process</p>
          <h2 className="mt-4 font-serif text-[32px] leading-tight tracking-tight md:text-[38px]">
            Discover → Plan → Create → Deploy → Support
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-5">
          {steps.map((n) => (
            <li key={n.step} className="border-t border-line pt-6">
              <p className="text-[12px] tracking-[0.16em] text-brand uppercase">
                {n.step}
              </p>
              <h3 className="mt-3 text-[16px] font-medium">
                {n.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-mute">
                {n.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
