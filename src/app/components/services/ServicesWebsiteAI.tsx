import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { mrAdsFacts } from '@/data/mrAdsFacts.data';

function NetworkMotif() {
  const nodes = [
    [20, 30],
    [70, 15],
    [85, 55],
    [50, 50],
    [15, 70],
    [65, 80],
  ];
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl border border-[#1c1e24] bg-[#0a0b0d] overflow-hidden">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        {nodes.map(([x1, y1], i) =>
          nodes
            .slice(i + 1)
            .map(([x2, y2], j) => (
              <line
                key={`${i}-${j}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#B4233C"
                strokeWidth="0.3"
                opacity="0.25"
              />
            ))
        )}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i === 3 ? 3.5 : 2}
            fill={i === 3 ? '#B4233C' : '#F5F5F5'}
            opacity={i === 3 ? 1 : 0.6}
          />
        ))}
      </svg>
    </div>
  );
}

export default function ServicesWebsiteAI() {
  const { websiteAI } = mrAdsFacts;

  return (
    <section id="website-ai" className="py-16 md:py-24 bg-[#090A0C] border-b border-[#252830]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollReveal direction="right">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
              WEBSITE DESIGN, DEVELOPMENT & AI SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15] mb-6">
              {websiteAI.tagline}
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A9CA5] block mb-2">
                  Core Services
                </span>
                <ul className="flex flex-col gap-1.5">
                  {websiteAI.coreServices.map((s) => (
                    <li key={s} className="text-sm text-[#F5F5F5] font-medium">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A9CA5] block mb-2">
                  Key Benefits
                </span>
                <ul className="flex flex-col gap-1.5">
                  {websiteAI.keyBenefits.map((b) => (
                    <li key={b} className="text-sm text-[#F5F5F5] font-medium">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={100}>
            <NetworkMotif />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
