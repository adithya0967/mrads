'use client';

import React, { useEffect, useRef, useState } from 'react';

export type RevealVariant =
  'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'scale-up' | 'blur-in';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  staggerIndex?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  as?: React.ElementType;
}

export default function Reveal({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
  staggerIndex = 0,
  duration = 0.6,
  threshold = 0.1,
  rootMargin = '-30px',
  once = false,
  as: Component = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [position, setPosition] = useState<'below' | 'above'>('below');
  const [reducedMotion, setReducedMotion] = useState(false);

  // Calculate compound delay for entrance cascade
  const totalDelay = Math.max(0, delay + staggerIndex * 0.07);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        setReducedMotion(true);
        setInView(true);
        return;
      }
    }

    // Initialize relative position on mount
    const rect = el.getBoundingClientRect();
    if (rect.bottom < 0) {
      setPosition('above');
    } else {
      setPosition('below');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            // Re-arm when element is scrolled completely out of view.
            // Dynamically record exit direction so subsequent entry from opposite direction
            // provides the exact opposite motion vector.
            const entryRect = entry.boundingClientRect;
            if (entryRect.top < 0) {
              // Element exited off top of viewport
              setPosition('above');
            } else {
              // Element exited off bottom of viewport
              setPosition('below');
            }
            setInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  if (reducedMotion) {
    return (
      <Component ref={ref} className={className}>
        {children}
      </Component>
    );
  }

  // Determine transform based on variant and whether element is below or above viewport
  const getTransform = () => {
    if (inView) {
      return variant === 'scale-up' ? 'scale(1) translate3d(0, 0, 0)' : 'translate3d(0, 0, 0)';
    }

    const isAbove = position === 'above';

    switch (variant) {
      case 'fade-down':
        // Explicit inverted fade
        return isAbove ? 'translate3d(0, 30px, 0)' : 'translate3d(0, -30px, 0)';

      case 'slide-left':
        // Scroll-down entrance: enters from bottom-left (-32px, +16px) -> 0
        // Scroll-up entrance: enters from top-right (+32px, -16px) -> 0 (exact opposite)
        return isAbove ? 'translate3d(32px, -16px, 0)' : 'translate3d(-32px, 16px, 0)';

      case 'slide-right':
        // Scroll-down entrance: enters from bottom-right (+32px, +16px) -> 0
        // Scroll-up entrance: enters from top-left (-32px, -16px) -> 0 (exact opposite)
        return isAbove ? 'translate3d(-32px, -16px, 0)' : 'translate3d(32px, 16px, 0)';

      case 'scale-up':
        // Scroll-down entrance: scale-up from below
        // Scroll-up entrance: scale-up from above
        return isAbove
          ? 'scale(0.94) translate3d(0, -16px, 0)'
          : 'scale(0.94) translate3d(0, 16px, 0)';

      case 'blur-in':
        return isAbove ? 'translate3d(0, -14px, 0)' : 'translate3d(0, 14px, 0)';

      case 'fade-up':
      default:
        // Standard vertical reveal:
        // Scroll-down entrance: enters from below (+30px -> 0), exits upward (0 -> -30px)
        // Scroll-up entrance: enters from above (-30px -> 0), exits downward (0 -> +30px)
        return isAbove ? 'translate3d(0, -30px, 0)' : 'translate3d(0, 30px, 0)';
    }
  };

  const getFilter = () => {
    if (variant !== 'blur-in') return undefined;
    return inView ? 'blur(0px)' : 'blur(8px)';
  };

  const luxuryEase = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const currentDuration = inView ? duration : Math.min(0.35, duration);
  const currentTiming = inView ? luxuryEase : 'ease-out';
  const currentDelay = inView ? totalDelay : 0;

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        filter: getFilter(),
        transition: `opacity ${currentDuration}s ${currentTiming} ${currentDelay}s, transform ${currentDuration}s ${currentTiming} ${currentDelay}s, filter ${currentDuration}s ${currentTiming} ${currentDelay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Component>
  );
}
