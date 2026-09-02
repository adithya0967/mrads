'use client';

import React, { useEffect, useRef } from 'react';
import { MotionValue } from 'framer-motion';

// Real billboard footage standing in for the graphic-design placeholders on
// every ad screen. Play/pause is gated on `progress` (each surface's own
// scroll-driven opacity) rather than left to unconditional autoPlay: every
// screen surface in the scene mounts one of these, and a dozen concurrent
// 1080p decodes would stutter the scroll animation even while fully
// off-screen. Subscribes directly to the MotionValue rather than via
// framer-motion's style prop, matching useMotionStyle's approach elsewhere
// in this engine (see its header comment for why).
function isMotionValue(v: unknown): v is MotionValue<number> {
  return !!v && typeof (v as any).get === 'function' && typeof (v as any).on === 'function';
}

export default function ScreenVideo({
  src,
  className = '',
  progress,
  applyOpacity = false,
}: {
  src: string;
  className?: string;
  progress?: MotionValue<number> | number;
  applyOpacity?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const setPlaying = (value: number) => {
      if (value > 0.02) {
        if (el.paused) el.play().catch(() => {});
      } else if (!el.paused) {
        el.pause();
      }
      if (applyOpacity) el.style.opacity = String(value);
    };

    const current =
      progress === undefined ? 1 : isMotionValue(progress) ? progress.get() : progress;
    setPlaying(current);

    if (isMotionValue(progress)) {
      return progress.on('change', setPlaying);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, applyOpacity]);

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
