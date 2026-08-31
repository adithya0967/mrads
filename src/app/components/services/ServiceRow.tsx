import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ServiceRow({
  align = 'left',
  eyebrow,
  title,
  body,
  visual,
  bullets,
}: {
  align?: 'left' | 'right';
  eyebrow: string;
  title: string;
  body?: string;
  visual: React.ReactNode;
  bullets?: string[];
}) {
  const textFirst = align === 'left';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-14 md:py-20 border-b border-[#1c1e24] last:border-b-0">
      <ScrollReveal
        direction={textFirst ? 'right' : 'left'}
        className={textFirst ? 'lg:order-1' : 'lg:order-2'}
      >
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
          {eyebrow}
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15] mb-4">
          {title}
        </h3>
        {body && <p className="text-[#9A9CA5] text-base leading-relaxed mb-4 max-w-md">{body}</p>}
        {bullets && bullets.length > 0 && (
          <ul className="flex flex-col gap-2 max-w-md">
            {bullets.map((b) => (
              <li key={b} className="text-sm text-[#9A9CA5] flex items-start gap-2">
                <span className="mt-2 w-1 h-1 rounded-full bg-[#B4233C] shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        )}
      </ScrollReveal>
      <ScrollReveal
        direction={textFirst ? 'left' : 'right'}
        delay={100}
        className={textFirst ? 'lg:order-2' : 'lg:order-1'}
      >
        {visual}
      </ScrollReveal>
    </div>
  );
}
