import React from 'react';
import Reveal from '@/components/ui/Reveal';

export default function AboutPhilosophy() {
  return (
    <section className="border-b border-line">
      <div className="container-site grid gap-12 py-20 md:grid-cols-12 md:py-28">
        {/* Left Column: Heading */}
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Philosophy</p>
          <h2 className="mt-4 font-serif text-[32px] leading-tight tracking-tight text-paper md:text-[38px]">
            Visibility is a matter of place, not volume.
          </h2>
        </Reveal>

        {/* Right Column: Narrative */}
        <Reveal className="md:col-span-6 md:col-start-7" delay={0.06}>
          <div className="space-y-5 text-[16px] leading-relaxed text-mute">
            <p>
              People do not live in media plans. They live in apartments, eat in restaurants, work
              in offices, shop in malls, train in gyms, wait in play zones, and move through
              streets. Mr. Ads starts there.
            </p>
            <p>
              The company combines digital display advertising, advertising on the move, offline
              distribution, print and creative, newspaper and quick-commerce inserts, pharmacy cover
              advertising, and websites, development and AI solutions.
            </p>
            <p>
              The aim is simple: repeated, well-placed presence for brands that need to be known
              locally — with one partner accountable for the whole campaign.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
