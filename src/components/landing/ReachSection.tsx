'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  key: string;
  category: string;
  badge?: string;
  target: number;
  dec: number;
  subtitle: string;
  barWidth: string;
  isLargest?: boolean;
}

const statsData: StatItem[] = [
  {
    key: 'restaurant',
    category: 'Restaurant',
    target: 1.5,
    dec: 1,
    subtitle: 'through 100+ screens',
    barWidth: '38%',
  },
  {
    key: 'apartment',
    category: 'Apartment',
    badge: '★ Largest',
    target: 15,
    dec: 0,
    subtitle: 'through 30,000+ screens',
    barWidth: '100%',
    isLargest: true,
  },
  {
    key: 'corporate',
    category: 'Corporate',
    target: 1.6,
    dec: 1,
    subtitle: 'through 1,300+ screens',
    barWidth: '42%',
  },
  {
    key: 'mall',
    category: 'Mall',
    target: 1.1,
    dec: 1,
    subtitle: 'through 145+ screens',
    barWidth: '30%',
  },
  {
    key: 'fitness',
    category: 'Fitness',
    target: 2,
    dec: 0,
    subtitle: 'through 170+ screens',
    barWidth: '52%',
  },
];

export default function ReachSection({
  onPrefill,
}: {
  onPrefill: (env: string | null, interest?: string | null) => void;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: string }>({
    restaurant: '0',
    apartment: '0',
    corporate: '0',
    mall: '0',
    fitness: '0',
  });

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = performance.now();
            const duration = 1400;

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(1, elapsed / duration);
              const ease = 1 - Math.pow(1 - progress, 3);

              const newCounts: { [key: string]: string } = {};
              statsData.forEach((item) => {
                const val = item.target * ease;
                newCounts[item.key] = val.toFixed(item.dec);
              });

              setCounts(newCounts);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                const finalCounts: { [key: string]: string } = {};
                statsData.forEach((item) => {
                  finalCounts[item.key] = item.target.toFixed(item.dec);
                });
                setCounts(finalCounts);
              }
            };

            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} id="reach" className="bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-40 w-[700px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse,rgba(217,35,45,.28),transparent 70%)' }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20 relative">
        <div className="text-center max-w-3xl mx-auto reveal in">
          <p className="text-[12px] font-bold tracking-[.2em] uppercase" style={{ color: '#FF8A8E' }}>
            Impact & Reach
          </p>
          <h2 className="serif text-3xl sm:text-[42px] tracking-tight mt-3">
            Opportunity to reach, at neighbourhood scale
          </h2>
          <p className="text-white/60 mt-3 text-[14.5px]">
            Figures below represent network opportunity to reach (not guaranteed impressions). Actual delivery depends on plan, locations and duration.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
          {statsData.map((item, idx) => {
            if (item.isLargest) {
              return (
                <div
                  key={item.key}
                  className="bg-white rounded-3xl p-6 text-center text-navy card-hover reveal in reveal-d1 border-2 border-brand"
                >
                  <p className="text-[11px] font-bold tracking-[.14em] uppercase text-brand">
                    {item.category} {item.badge}
                  </p>
                  <p className="num text-[40px] font-extrabold mt-2">
                    <span>{counts[item.key]}</span>M+
                  </p>
                  <p className="text-[13px] text-muted font-semibold mt-1">{item.subtitle}</p>
                  <div className="mt-4 h-1.5 rounded-full bg-paper overflow-hidden">
                    <div
                      className="reach-bar h-full rounded-full bg-navy transition-all duration-1000"
                      style={{ width: hasAnimated ? item.barWidth : '0%' }}
                    ></div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.key}
                className={`bg-white/[.07] border border-white/10 rounded-3xl p-6 text-center card-hover reveal in ${
                  idx % 2 === 1 ? 'reveal-d1' : idx === 2 ? 'reveal-d2' : ''
                }`}
              >
                <p className="text-[11px] font-bold tracking-[.14em] uppercase text-white/55">{item.category}</p>
                <p className="num text-[40px] font-extrabold mt-2">
                  <span>{counts[item.key]}</span>M+
                </p>
                <p className="text-[13px] text-white/65 font-semibold mt-1">{item.subtitle}</p>
                <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="reach-bar h-full rounded-full bg-brand transition-all duration-1000"
                    style={{ width: hasAnimated ? item.barWidth : '0%' }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 reveal in">
          <a
            href="#contact"
            onClick={() => onPrefill(null, 'Location List')}
            data-cta="Reach Estimate"
            className="bg-brand hover:bg-white hover:text-navy transition text-white font-bold text-sm px-7 py-3.5 rounded-full inline-flex items-center gap-2"
          >
            Get a location list <i className="fa-solid fa-arrow-right text-xs"></i>
          </a>
          <a
            href="#display"
            className="border border-white/25 hover:border-white transition font-bold text-sm px-7 py-3.5 rounded-full inline-flex items-center gap-2"
          >
            Explore display specs
          </a>
        </div>
      </div>
    </section>
  );
}
