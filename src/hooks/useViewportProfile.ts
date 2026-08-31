'use client';

import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 1024; // matches Tailwind `lg`

/**
 * Resolves 'desktop' | 'mobile' at the lg breakpoint. Returns null before
 * mount so callers can render a neutral first frame and avoid hydration
 * mismatch (window is unavailable during SSR).
 */
export function useViewportProfile(): 'desktop' | 'mobile' | null {
  const [profile, setProfile] = useState<'desktop' | 'mobile' | null>(null);

  useEffect(() => {
    const resolve = () => setProfile(window.innerWidth < MOBILE_BREAKPOINT ? 'mobile' : 'desktop');
    resolve();
    window.addEventListener('resize', resolve, { passive: true });
    return () => window.removeEventListener('resize', resolve);
  }, []);

  return profile;
}
