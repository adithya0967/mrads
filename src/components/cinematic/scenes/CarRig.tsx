'use client';

import React, { useRef } from 'react';
import { MotionValue } from 'framer-motion';
import { useMotionStyle } from '../useMotionStyle';

export default function CarRig({
  x,
  opacity,
}: {
  x: MotionValue<number> | number;
  opacity: MotionValue<number> | number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useMotionStyle(ref, { x, opacity });

  return (
    <div
      className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[28vw] max-w-[360px] z-20"
      aria-hidden="true"
    >
      <div ref={ref} className="relative">
        {/* Soft shadow under truck chassis & wheels */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[95%] h-5 rounded-full blur-md"
          style={{ background: 'radial-gradient(ellipse, rgba(0,0,0,0.7) 0%, transparent 75%)' }}
        />

        <svg viewBox="0 0 260 85" className="w-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
          <defs>
            {/* Screen background gradient */}
            <linearGradient id="truckScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0a1526" />
              <stop offset="50%" stopColor="#0f223a" />
              <stop offset="100%" stopColor="#09111e" />
            </linearGradient>

            {/* Glowing accents on screen */}
            <linearGradient id="screenAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3" />
            </linearGradient>

            {/* Glass reflection glint */}
            <linearGradient id="screenGlint" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Undercarriage & Axle chassis */}
          <rect x="25" y="64" width="200" height="4" fill="#0d0e12" rx="1" />
          <rect x="40" y="61" width="40" height="5" fill="#181a20" />
          <rect x="195" y="61" width="25" height="5" fill="#181a20" />

          {/* Truck Cargo Box / Billboard Body */}
          <rect
            x="10"
            y="12"
            width="155"
            height="53"
            rx="4"
            fill="#14161c"
            stroke="#2a2d38"
            strokeWidth="1.2"
          />

          {/* Top Aerodynamic Fairing on Trailer */}
          <path d="M10 16 Q10 12 14 12 L161 12 Q165 12 165 16 Z" fill="#1e212b" />

          {/* Outer Screen Bezel / Frame */}
          <rect
            x="18"
            y="17"
            width="139"
            height="43"
            rx="3"
            fill="#08090b"
            stroke="#383c4a"
            strokeWidth="1.2"
          />

          {/* Integrated Digital Advertising Screen */}
          <rect x="21" y="20" width="133" height="37" rx="2" fill="url(#truckScreenGrad)" />

          {/* Digital Screen Content Graphics */}
          <line x1="21" y1="38.5" x2="154" y2="38.5" stroke="#1e293b" strokeWidth="0.5" opacity="0.6" />
          <line x1="87.5" y1="20" x2="87.5" y2="57" stroke="#1e293b" strokeWidth="0.5" opacity="0.6" />

          {/* Abstract dynamic graphic waveform on display */}
          <path
            d="M23 48 Q 45 32, 65 42 T 110 34 T 152 44 L 152 55 L 23 55 Z"
            fill="url(#screenAccentGrad)"
            opacity="0.25"
          />
          <path
            d="M23 45 Q 50 28, 80 40 T 135 32 T 152 40"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.2"
            opacity="0.85"
          />

          {/* Screen Ad Headline Text */}
          <text
            x="87.5"
            y="32"
            fill="#ffffff"
            fontSize="7.5"
            fontWeight="800"
            fontFamily="sans-serif"
            textAnchor="middle"
            letterSpacing="1.2"
          >
            MRADS
          </text>
          <text
            x="87.5"
            y="42"
            fill="#38bdf8"
            fontSize="3.8"
            fontWeight="600"
            fontFamily="sans-serif"
            textAnchor="middle"
            letterSpacing="0.8"
          >
            MOBILE ADVERTISING NETWORK
          </text>

          {/* Screen Glass Reflection Glint Overlay */}
          <rect x="21" y="20" width="133" height="37" rx="2" fill="url(#screenGlint)" />
          <line x1="21" y1="20" x2="154" y2="20" stroke="#38bdf8" strokeWidth="0.8" opacity="0.7" />

          {/* Cab Deflector / Connector Gap */}
          <path d="M165 24 L175 22 L175 64 L165 64 Z" fill="#111216" />
          <path d="M165 14 C170 14, 174 18, 177 22 L165 22 Z" fill="#1c1e26" />

          {/* Main Truck Cab Body */}
          <path
            d="M175 22 
               L200 22 
               C208 22, 218 29, 226 39 
               L236 50 
               C240 54, 241 60, 239 65 
               L175 65 Z"
            fill="#16181f"
            stroke="#2c2f3d"
            strokeWidth="1.2"
          />

          {/* Cab Windshield & Side Window */}
          <path
            d="M184 26 
               L198 26 
               C205 26, 213 32, 220 40 
               L224 46 
               L184 46 Z"
            fill="#090a0d"
            stroke="#2d303d"
            strokeWidth="1"
          />
          {/* Window Pillar divider */}
          <line x1="204" y1="26" x2="208" y2="46" stroke="#16181f" strokeWidth="2" />

          {/* Side Mirror */}
          <path d="M218 42 L224 43 L223 48 L217 46 Z" fill="#0d0e12" stroke="#383c4a" strokeWidth="0.8" />

          {/* Door Handle & Cab Panel Lines */}
          <line x1="184" y1="49" x2="216" y2="49" stroke="#242632" strokeWidth="0.8" />
          <rect x="190" y="51" width="5" height="1.5" fill="#3a3d4d" rx="0.5" />

          {/* Front Bumper & Grille Accent */}
          <path d="M228 54 L239 55 L237 65 L225 65 Z" fill="#1c1e26" />
          <line x1="230" y1="58" x2="238" y2="59" stroke="#353847" strokeWidth="1" />
          <line x1="229" y1="61" x2="237" y2="62" stroke="#353847" strokeWidth="1" />

          {/* Rear Red Tail Light */}
          <rect x="10" y="48" width="3" height="12" fill="#ef4444" rx="1" opacity="0.9" />

          {/* Front Headlight Assembly */}
          <path d="M233 50 L238 51 L237 57 L232 56 Z" fill="#fcd34d" />
          <rect x="234" y="52" width="3.5" height="4" fill="#ffffff" rx="0.5" />

          {/* Wheels (3 Axles: 2 Rear, 1 Front) */}
          {/* Rear Axle 1 */}
          <g transform="translate(42, 66)">
            <circle cx="0" cy="0" r="10" fill="#08090b" stroke="#2f323e" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="6" fill="#16181f" stroke="#474b5c" strokeWidth="1" />
            <circle cx="0" cy="0" r="2.5" fill="#64748b" />
          </g>

          {/* Rear Axle 2 */}
          <g transform="translate(68, 66)">
            <circle cx="0" cy="0" r="10" fill="#08090b" stroke="#2f323e" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="6" fill="#16181f" stroke="#474b5c" strokeWidth="1" />
            <circle cx="0" cy="0" r="2.5" fill="#64748b" />
          </g>

          {/* Front Axle */}
          <g transform="translate(206, 66)">
            <circle cx="0" cy="0" r="10" fill="#08090b" stroke="#2f323e" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="6" fill="#16181f" stroke="#474b5c" strokeWidth="1" />
            <circle cx="0" cy="0" r="2.5" fill="#64748b" />
          </g>
        </svg>

        {/* Tail light glow effect (Red behind truck) */}
        <div
          className="absolute bottom-[28%] left-[-4%] w-8 h-4 rounded-full blur-[8px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(239,68,68,0.75) 0%, transparent 75%)',
          }}
        />

        {/* Headlight beam glow effect (Amber/Gold ahead of truck) */}
        <div
          className="absolute bottom-[22%] right-[-8%] w-14 h-5 rounded-full blur-[8px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(251,191,36,0.9) 0%, transparent 75%)',
          }}
        />
        {/* Extended headlight ray */}
        <div
          className="absolute bottom-[18%] right-[-24%] w-24 h-8 rounded-full blur-[14px] opacity-60 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at left, rgba(253,230,138,0.5) 0%, rgba(251,191,36,0.15) 50%, transparent 80%)',
          }}
        />

        {/* Digital billboard screen ambient glow projection on road/truck */}
        <div
          className="absolute top-[20%] left-[8%] w-[50%] h-[50%] rounded-full blur-[20px] opacity-35 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(56,189,248,0.5) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
}

