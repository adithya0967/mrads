import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: 'Display Advertising',
    description:
      'Digital screens in restaurants, apartments, offices, malls, gyms, play zones and hostels — where people pause.',
    image: '/images/display.jpg',
    to: '/locations',
    featured: true,
  },
  {
    title: 'Advertising on the Move',
    description:
      'Autos, cabs, buses, vans, shelters and roadshows that carry the brand through the city.',
    image: '/images/streets.jpg',
    to: '/advertising-on-the-move',
    featured: false,
  },
  {
    title: 'Offline & Print Distribution',
    description:
      'Flyers, inserts and pharmacy covers that reach homes, streets and high-footfall retail.',
    image: '/images/flyers.jpg',
    to: '/offline-print',
    featured: false,
  },
  {
    title: 'Print & Creative Design',
    description:
      'Brochures, posters, standees, pole boards, magazine ads and social creatives, produced with intent.',
    image: '/images/creative.jpg',
    to: '/print-creative',
    featured: false,
  },
  {
    title: 'Newspaper & Quick Commerce Inserts',
    description:
      'Inserts that travel with morning papers and last-mile grocery deliveries into the household.',
    image: '/images/newspaper.jpg',
    to: '/offline-print',
    featured: false,
  },
  {
    title: 'Pharmacy Cover Advertising',
    description:
      'Storefront and shutter covers on neighbourhood pharmacies — daily, unavoidable local presence.',
    image: '/images/pharmacy.jpg',
    to: '/offline-print',
    featured: false,
  },
  {
    title: 'Website, Development & AI',
    description:
      'Business sites, e-commerce, chatbots, hosting and redesign — the digital layer of a local campaign.',
    image: '/images/website.jpg',
    to: '/digital',
    featured: false,
  },
];

export default function SolutionsSection() {
  return (
    <section className="border-b border-line bg-ink" id="solutions">
      <div className="container-site py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Advertising solutions</p>
            <h2 className="mt-4 max-w-lg font-serif text-[32px] leading-tight tracking-tight text-paper md:text-[40px]">
              One network. Several ways to be seen.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-mute">
            Choose a surface — or let us combine them. Every format is planned as part of a single local presence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <article
              key={item.title}
              className={item.featured ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <Link href={item.to} className="group block">
                <div
                  className={`img-zoom ${
                    item.featured ? 'aspect-[16/9]' : 'aspect-[16/10]'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[17px] font-medium tracking-tight text-paper">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[14px] leading-relaxed text-mute">
                      {item.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    strokeWidth={1.6}
                    className="mt-1 shrink-0 text-mute transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand"
                  />
                </div>
                <span className="mt-3 inline-block text-[12px] tracking-wide text-mute uppercase transition-colors duration-200 group-hover:text-paper">
                  View
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
