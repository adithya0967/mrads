import React from 'react';

const problems = [
  'Weak local visibility — brands are present nationally, but absent in the neighbourhood.',
  'Mass media misses the people who live, work and shop a few streets away.',
  'High costs for limited, unfocused reach.',
  'Campaigns that appear once, then disappear — with no repeated local presence.',
];

const approach = [
  'Better audience targeting at the places people already choose to be.',
  'Repeated brand visibility across screens, streets, homes and retail.',
  'Improved engagement through context — dining, commuting, living, exercising.',
  'Stronger local recall that compounds over a campaign, not a single impression.',
];

export default function AdvantageSection() {
  return (
    <section className="border-b border-line bg-ink">
      <div className="container-site py-20 md:py-28">
        <div>
          <p className="eyebrow">The hyperlocal advantage</p>
          <h2 className="mt-4 max-w-2xl font-serif text-[32px] leading-tight tracking-tight text-paper md:text-[40px]">
            Mass media speaks to a city. Hyperlocal speaks to a neighbourhood.
          </h2>
        </div>

        <div className="mt-14 grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-[12px] tracking-[0.18em] text-mute uppercase font-medium">
              The problem
            </p>
            <ul className="mt-6 space-y-6">
              {problems.map((item) => (
                <li
                  key={item}
                  className="border-t border-line pt-5 text-[15px] leading-relaxed text-mute"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] tracking-[0.18em] text-brand uppercase font-medium">
              The Mr. Ads approach
            </p>
            <ul className="mt-6 space-y-6">
              {approach.map((item) => (
                <li
                  key={item}
                  className="border-t border-line pt-5 text-[15px] leading-relaxed text-paper"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
