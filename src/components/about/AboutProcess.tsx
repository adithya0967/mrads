import React from 'react';
import Reveal from '@/components/ui/Reveal';

const steps = [
  {
    step: '01',
    title: 'Discover',
    body: 'City, audience, objective and the neighbourhood places they already occupy.',
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
    <section className="border-b border-line bg-[#080808]">
      <div className="container-site py-20 md:py-28">
        <Reveal>
          <p className="eyebrow text-brand">Process</p>
          <h2 className="mt-4 font-serif text-[32px] sm:text-[40px] leading-tight tracking-tight text-paper font-normal">
            Discover → Plan → Create → Deploy → Support
          </h2>
          <p className="mt-3 text-[15px] text-mute max-w-xl">
            A single, accountable partner managing discovery, production, field installation, and real-world reporting.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((n) => (
            <li
              key={n.step}
              className="rounded-xl border border-white/[0.08] bg-[#0D0D0D] p-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-[26px] font-bold text-brand leading-none">
                  {n.step}
                </span>
                <h3 className="mt-4 text-[17px] font-semibold text-paper">
                  {n.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-mute">
                  {n.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
