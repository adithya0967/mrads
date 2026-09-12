import React from 'react';

const reasons = [
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

export default function WhySection() {
  return (
    <section className="border-b border-line bg-graphite">
      <div className="container-site py-20 md:py-28">
        <div>
          <p className="eyebrow">Why Mr. Ads</p>
          <h2 className="mt-4 max-w-xl font-serif text-[32px] leading-tight tracking-tight text-paper md:text-[40px]">
            Six reasons brands stay with one partner.
          </h2>
        </div>

        <ol className="mt-14">
          {reasons.map((item, index) => {
            const isOdd = index % 2 === 1;
            return (
              <li
                key={item.title}
                className={`grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-10 ${
                  isOdd ? 'md:text-right' : ''
                }`}
              >
                <span
                  className={`font-serif text-[22px] text-mute md:col-span-2 ${
                    isOdd ? 'md:col-start-11' : ''
                  }`}
                >
                  0{index + 1}
                </span>
                <div
                  className={`md:col-span-8 ${
                    isOdd ? 'md:col-start-3 md:row-start-1' : 'md:col-start-4'
                  }`}
                >
                  <h3 className="text-[18px] font-medium tracking-tight text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-mute">
                    {item.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
