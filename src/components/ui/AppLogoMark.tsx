'use client';

import React, { memo } from 'react';

interface AppLogoMarkProps {
  className?: string;
  size?: number | string;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Official Mr. Ads billboard/display mark.
 * High-performance vector SVG with customizable size, stroke, and color.
 */
const AppLogoMark = memo(function AppLogoMark({
  className = '',
  size = 24,
  strokeWidth = 3.6,
  color = 'currentColor',
  style,
}: AppLogoMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 48"
      width={size}
      height={typeof size === 'number' ? Math.round((size * 48) / 80) : undefined}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M 18 2 L 72 2 A 6 6 0 0 1 78 8 L 78 30 A 6 6 0 0 1 72 36 L 8 36 A 6 6 0 0 1 2 30 L 2 18"
        strokeWidth={strokeWidth}
      />
      <path d="M 40 36 L 40 46" strokeWidth={strokeWidth} />
    </svg>
  );
});

export default AppLogoMark;
