'use client';

import { useEffect } from 'react';
import type { RefObject } from 'react';
import { MotionValue } from 'framer-motion';

/**
 * Direct, imperative DOM style binding for scroll-linked MotionValues.
 *
 * framer-motion 13.x's `style={{...}}` binding on `motion.*` components
 * auto-promotes simple numeric/string MotionValues (opacity, x, scale, ...)
 * to a native Web Animations API Animation for hardware acceleration. That
 * promotion assumes a real-time playback animation and, for values derived
 * from useScroll/useTransform, ends up desynced from actual scroll position
 * (the WAAPI animation runs on its own wall-clock timeline instead of being
 * scrubbed frame-by-frame to scroll progress) — verified via a minimal
 * repro: getAnimations() showed playState "running" with its own linear
 * easing keyframes, drifting away from the true scroll-derived value.
 *
 * Subscribing directly to each MotionValue's 'change' event and writing the
 * resulting CSS text to the DOM ourselves sidesteps that optimization
 * entirely and guarantees the rendered style is always an exact, reversible
 * function of the current scrollYProgress — which is the core invariant
 * the cinematic engine depends on for reverse/fast/repeated scroll safety.
 */

// MotionValue<T> is invariant in T, so a single MV<number | string> alias
// would reject a plain MotionValue<string> or MotionValue<number>. Union the
// concrete forms instead so both are accepted directly.
type NumericValue = number | MotionValue<number>;
type LengthValue = number | string | MotionValue<number> | MotionValue<string>;

export interface MotionStyleValues {
  opacity?: NumericValue;
  x?: LengthValue;
  y?: LengthValue;
  scale?: NumericValue;
  rotateY?: NumericValue;
}

function isMotionValue(v: unknown): v is MotionValue<any> {
  return !!v && typeof (v as any).get === 'function' && typeof (v as any).on === 'function';
}

function toCssLength(v: number | string): string {
  return typeof v === 'number' ? `${v}px` : v;
}

export function useMotionStyle(
  ref: RefObject<(HTMLElement | SVGElement) | null>,
  values: MotionStyleValues
) {
  const { opacity, x, y, scale, rotateY } = values;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const applyOpacity = () => {
      if (opacity === undefined) return;
      const v = isMotionValue(opacity) ? opacity.get() : opacity;
      el.style.opacity = String(v);
    };

    const applyTransform = () => {
      if (x === undefined && y === undefined && scale === undefined && rotateY === undefined)
        return;
      const parts: string[] = [];
      if (x !== undefined) parts.push(`translateX(${toCssLength(isMotionValue(x) ? x.get() : x)})`);
      if (y !== undefined) parts.push(`translateY(${toCssLength(isMotionValue(y) ? y.get() : y)})`);
      if (scale !== undefined) parts.push(`scale(${isMotionValue(scale) ? scale.get() : scale})`);
      if (rotateY !== undefined)
        parts.push(`rotateY(${isMotionValue(rotateY) ? rotateY.get() : rotateY}deg)`);
      el.style.transform = parts.join(' ');
    };

    applyOpacity();
    applyTransform();

    const unsubs: Array<() => void> = [];
    if (isMotionValue(opacity)) unsubs.push(opacity.on('change', applyOpacity));
    if (isMotionValue(x)) unsubs.push(x.on('change', applyTransform));
    if (isMotionValue(y)) unsubs.push(y.on('change', applyTransform));
    if (isMotionValue(scale)) unsubs.push(scale.on('change', applyTransform));
    if (isMotionValue(rotateY)) unsubs.push(rotateY.on('change', applyTransform));

    return () => unsubs.forEach((u) => u());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, opacity, x, y, scale, rotateY]);
}
