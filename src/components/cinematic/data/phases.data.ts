// Named scroll phases for the cinematic journey. Every visual property in the
// engine is a pure function of scrollYProgress against these ranges, so
// reverse/fast/repeated scrolling is correct without any special-case code.

export const TOTAL_JOURNEY_VH = 700;
export const TOTAL_JOURNEY_VH_MOBILE = 420;

export type PhaseName = 'hero' | 'approach' | 'immersion' | 'reveal' | 'drive' | 'transition';

interface PhaseDef {
  name: PhaseName;
  startVh: number;
  endVh: number;
}

// Desktop phase table (fractions of TOTAL_JOURNEY_VH)
export const PHASES: PhaseDef[] = [
  { name: 'hero', startVh: 0, endVh: 80 },
  { name: 'approach', startVh: 80, endVh: 200 },
  { name: 'immersion', startVh: 200, endVh: 340 },
  { name: 'reveal', startVh: 340, endVh: 420 },
  { name: 'drive', startVh: 420, endVh: 640 },
  { name: 'transition', startVh: 640, endVh: 700 },
];

// Mobile phase table scaled to a shorter, simplified track
export const PHASES_MOBILE: PhaseDef[] = [
  { name: 'hero', startVh: 0, endVh: 55 },
  { name: 'approach', startVh: 55, endVh: 130 },
  { name: 'immersion', startVh: 130, endVh: 220 },
  { name: 'reveal', startVh: 220, endVh: 270 },
  { name: 'drive', startVh: 270, endVh: 390 },
  { name: 'transition', startVh: 390, endVh: 420 },
];

function frac(vh: number, total: number): number {
  return vh / total;
}

export function phaseRange(name: PhaseName, mobile = false): [number, number] {
  const table = mobile ? PHASES_MOBILE : PHASES;
  const total = mobile ? TOTAL_JOURNEY_VH_MOBILE : TOTAL_JOURNEY_VH;
  const p = table.find((p) => p.name === name)!;
  return [frac(p.startVh, total), frac(p.endVh, total)];
}

export function vhToFrac(vh: number, mobile = false): number {
  return frac(vh, mobile ? TOTAL_JOURNEY_VH_MOBILE : TOTAL_JOURNEY_VH);
}
