'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds (fallback if staggerIndex not provided)
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number; // Duration in milliseconds
  threshold?: number;
  once?: boolean;
  staggerIndex?: number; // Index of item in grid/list (0, 1, 2, ...)
  totalItems?: number; // Total number of items in grid/list
  staggerDelay?: number; // Delay per item in ms (default 140ms)
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 550,
  threshold = 0.12,
  once = false,
  staggerIndex,
  staggerDelay = 140,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fallback if IntersectionObserver is not available
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Compute standard stagger delay
  const getComputedDelay = (): number => {
    if (staggerIndex !== undefined) {
      return staggerIndex * staggerDelay;
    }
    return delay;
  };

  // Standard transform based on direction
  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 36px, 0) scale(0.97)';
      case 'down':
        return 'translate3d(0, -36px, 0) scale(0.97)';
      case 'left':
        return 'translate3d(36px, 0, 0) scale(0.97)';
      case 'right':
        return 'translate3d(-36px, 0, 0) scale(0.97)';
      case 'none':
      default:
        return 'translate3d(0, 20px, 0) scale(0.97)';
    }
  };

  const computedDelay = isVisible ? getComputedDelay() : 0;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${computedDelay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
