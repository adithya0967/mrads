'use client';

import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useViewportProfile } from '@/hooks/useViewportProfile';
import CinematicJourney from './CinematicJourney';
import CinematicJourneyReduced from './CinematicJourneyReduced';

/**
 * Resolves prefers-reduced-motion + viewport width once, and picks the
 * matching renderer. Renders the static/reduced frame until mounted so
 * server and first client paint always agree (no hydration flash of the
 * wrong variant, no scroll-jacking before we know the user's preference).
 */
export default function CinematicJourneyRouter() {
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();
  const viewport = useViewportProfile();

  useEffect(() => setMounted(true), []);

  if (!mounted || viewport === null) {
    return <CinematicJourneyReduced />;
  }

  if (prefersReduced) {
    return <CinematicJourneyReduced />;
  }

  return <CinematicJourney mobile={viewport === 'mobile'} />;
}
