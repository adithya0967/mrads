export interface BillboardAdSlide {
  id: string;
  brand: string;
  brandTagline: string;
  headline: string;
  subtitle: string;
  stats?: string;
  poweredBy: string;
  theme: {
    bgGradient: string;
    accentColor: string;
    textColor: string;
    badgeBg: string;
    overlayGlow: string;
  };
  type: 'velaris' | 'mrads' | 'transit' | 'hyperlocal';
}

export const billboardAdSlides: BillboardAdSlide[] = [
  {
    id: 'velaris-ev',
    brand: 'VELARIS',
    brandTagline: 'A CLEANER TOMORROW TOGETHER',
    headline: 'DRIVE A BRIGHTER TOMORROW',
    subtitle: 'SUSTAINABLE LUXURY FOR A BOLDER WORLD',
    poweredBy: 'MR.ADS',
    theme: {
      bgGradient: 'from-[#0b101d] via-[#141b2d] to-[#1c2438]',
      accentColor: '#38bdf8',
      textColor: '#f8fafc',
      badgeBg: 'rgba(56, 189, 248, 0.15)',
      overlayGlow: 'radial-gradient(circle at 75% 45%, rgba(56,189,248,0.2) 0%, transparent 60%)',
    },
    type: 'velaris',
  },
  {
    id: 'mrads-core',
    brand: 'MR.ADS',
    brandTagline: 'REAL PLACES. REAL PEOPLE. REAL IMPACT.',
    headline: 'DOMINATE THE STREETS',
    subtitle: 'HIGH-IMPACT DIGITAL & OOH MEDIA ACROSS INDIA',
    stats: '30,000+ SCREENS • 15M+ DAILY IMPRESSIONS',
    poweredBy: 'MR.ADS NETWORK',
    theme: {
      bgGradient: 'from-[#0d0714] via-[#1a0c2e] to-[#2a0e44]',
      accentColor: '#a855f7',
      textColor: '#ffffff',
      badgeBg: 'rgba(168, 85, 247, 0.2)',
      overlayGlow: 'radial-gradient(circle at 30% 50%, rgba(168,85,247,0.25) 0%, transparent 65%)',
    },
    type: 'mrads',
  },
  {
    id: 'neo-transit',
    brand: 'NEO TRANSIT',
    brandTagline: 'URBAN MOBILITY ADVERTISING',
    headline: 'FUTURE-READY MOBILITY',
    subtitle: 'ALWAYS IN MOTION ACROSS HIGH-TRAFFIC CORRIDORS',
    stats: 'AUTO • CAB • BUS • MOBILE VEHICLE BRANDING',
    poweredBy: 'MR.ADS ON THE MOVE',
    theme: {
      bgGradient: 'from-[#051712] via-[#092921] to-[#0e3b30]',
      accentColor: '#34d399',
      textColor: '#f0fdf4',
      badgeBg: 'rgba(52, 211, 153, 0.18)',
      overlayGlow: 'radial-gradient(circle at 70% 60%, rgba(52,211,153,0.22) 0%, transparent 60%)',
    },
    type: 'transit',
  },
  {
    id: 'hyperlocal-reach',
    brand: 'HYPERLOCAL DIRECT',
    brandTagline: 'SWIGGY INSTAMART • BLINKIT • ZEPTO',
    headline: 'HYPERLOCAL PRECISION',
    subtitle: 'DIRECT-TO-DOORSTEP BRAND EXPOSURE IN 15 MINS',
    stats: '100% TRACKABLE NEIGHBORHOOD PENETRATION',
    poweredBy: 'MR.ADS QUICK COMMERCE',
    theme: {
      bgGradient: 'from-[#1c0a00] via-[#2d1202] to-[#421b04]',
      accentColor: '#fb923c',
      textColor: '#fff7ed',
      badgeBg: 'rgba(251, 146, 60, 0.2)',
      overlayGlow: 'radial-gradient(circle at 40% 40%, rgba(251,146,60,0.25) 0%, transparent 60%)',
    },
    type: 'hyperlocal',
  },
];
