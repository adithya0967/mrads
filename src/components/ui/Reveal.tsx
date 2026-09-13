'use client';

import React, { useEffect, useRef, useState } from 'react';

export type RevealVariant =
  | 'fade-up'
  | 'fade-down'
  | 'slide-left'
  | 'slide-right'
  | 'scale-up'
  | 'blur-in';

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
  const [reducedMotion, setReducedMotion] = useState(false);

  // Calculate compound delay
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            // Re-arm when element is scrolled completely out of view
            // to allow dynamic scroll-down and scroll-up reveal effects
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

  // Determine initial vs in-view styles per variant
  const getTransform = () => {
    if (inView) {
      return variant === 'scale-up' ? 'scale(1) translate3d(0, 0, 0)' : 'translate3d(0, 0, 0)';
    }

    switch (variant) {
      case 'fade-down':
        // Downward entrance momentum (scroll-down effect)
        return 'translate3d(0, -32px, 0)';
      case 'slide-left':
        return 'translate3d(-32px, 0, 0)';
      case 'slide-right':
        return 'translate3d(32px, 0, 0)';
      case 'scale-up':
        return 'scale(0.94) translate3d(0, 16px, 0)';
      case 'blur-in':
        return 'translate3d(0, 0, 0)';
      case 'fade-up':
      default:
        return 'translate3d(0, 28px, 0)';
    }
  };

  const getFilter = () => {
    if (variant !== 'blur-in') return undefined;
    return inView ? 'blur(0px)' : 'blur(8px)';
  };

  const luxuryEase = 'cubic-bezier(0.16, 1, 0.3, 1)';

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        filter: getFilter(),
        transition: `opacity ${duration}s ${luxuryEase} ${totalDelay}s, transform ${duration}s ${luxuryEase} ${totalDelay}s, filter ${duration}s ${luxuryEase} ${totalDelay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Component>
  );
}
