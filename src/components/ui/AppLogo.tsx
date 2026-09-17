'use client';

import React, { memo, useMemo } from 'react';
import AppImage from './AppImage';

interface AppLogoProps {
  src?: string; // Image source (optional)
  variant?: 'full' | 'mark'; // Full wordmark logo or standalone icon mark
  theme?: 'dark' | 'light'; // Dark bg (white logo) or light bg (dark logo)
  width?: number;
  height?: number;
  size?: number; // Base sizing
  className?: string;
  onClick?: () => void;
  priority?: boolean;
}

const AppLogo = memo(function AppLogo({
  src,
  variant = 'full',
  theme = 'dark',
  width,
  height,
  size = 36,
  className = '',
  onClick,
  priority = true,
}: AppLogoProps) {
  const containerClassName = useMemo(() => {
    const classes = ['inline-flex items-center select-none'];
    if (onClick) classes.push('cursor-pointer hover:opacity-85 transition-opacity');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [onClick, className]);

  // Determine default source based on variant & theme if not explicitly passed
  const resolvedSrc = useMemo(() => {
    if (src) return src;
    if (variant === 'mark') {
      return theme === 'light'
        ? '/assets/images/logo_mark_dark.png'
        : '/assets/images/logo_mark_white.png';
    }
    return theme === 'light' ? '/assets/images/app_logo_dark.png' : '/assets/images/app_logo.png';
  }, [src, variant, theme]);

  // Aspect ratio calculations:
  // Full logo is ~ 213 x 52 (ratio ~ 4.1 : 1)
  // Mark is ~ 80 x 48 (ratio ~ 1.67 : 1)
  const calcWidth = useMemo(() => {
    if (width) return width;
    if (variant === 'mark') {
      return Math.round((size * 80) / 48);
    }
    return Math.round((size * 213) / 52);
  }, [width, size, variant]);

  const calcHeight = height || size;

  return (
    <div className={containerClassName} onClick={onClick}>
      <AppImage
        src={resolvedSrc}
        alt="Mr. Ads"
        width={calcWidth}
        height={calcHeight}
        className="flex-shrink-0 object-contain"
        priority={priority}
        unoptimized={resolvedSrc.endsWith('.svg')}
      />
    </div>
  );
});

export default AppLogo;
