import React from 'react';

// Neutral media slot standing in for real photography/video the user will
// supply. Swap the call site for a real <Image>/<video> once assets land —
// no other engine logic depends on this component's content.
export default function PlaceholderMedia({
  label,
  tone = 'neutral',
  className = '',
}: {
  label: string;
  tone?: 'neutral' | 'warm' | 'cool';
  className?: string;
}) {
  const toneGrad =
    tone === 'warm'
      ? 'from-[#2a1f16] via-[#171310] to-[#0a0b0d]'
      : tone === 'cool'
        ? 'from-[#151a22] via-[#0f1216] to-[#0a0b0d]'
        : 'from-[#1a1c22] via-[#101216] to-[#0a0b0d]';

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-gradient-to-br ${toneGrad} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0 1px, transparent 1px 14px)',
        }}
        aria-hidden="true"
      />
      <span className="absolute bottom-2 left-2 text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-white/25 select-none">
        {label}
      </span>
    </div>
  );
}
