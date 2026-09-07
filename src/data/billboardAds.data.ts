export type CampaignCategory = 
  | 'telecom' 
  | 'fashion' 
  | 'automotive' 
  | 'culinary' 
  | 'electronics' 
  | 'hospitality';

export interface CampaignSpec {
  label: string;
  value: string;
}

export interface AdCampaign {
  id: string;
  category: CampaignCategory;
  brandName: string;
  brandSub?: string;
  badge?: string;
  headline: string;
  subheadline: string;
  supportingCopy: string;
  ctaText: string;
  ctaSubtext?: string;
  locationOrTag?: string;
  specs?: CampaignSpec[];
  qrNotice?: string;
  visualUrl: string;
  visualAlt: string;
  accentColor: string; // Tailwind color class or hex
  accentGlow: string;
  duration: number; // in seconds
  layoutVariant: 'telecom' | 'fashion' | 'automotive' | 'culinary' | 'electronics' | 'hospitality';
}

export const SAMPLE_CAMPAIGNS: AdCampaign[] = [
  {
    id: 'campaign-telecom',
    category: 'telecom',
    brandName: 'AURA',
    brandSub: '5G NETWORK',
    badge: 'FLAGSHIP COMMERCIAL',
    headline: 'SPEED UNLEASHED',
    subheadline: 'Ultra-Fast 5G Connectivity',
    supportingCopy: 'Symmetrical 10 Gbps peak speeds with instant connectivity.',
    ctaText: 'GET 5G',
    ctaSubtext: 'Instant eSIM activation',
    locationOrTag: 'Nationwide 5G Coverage',
    specs: [
      { label: 'PEAK SPEED', value: '10 Gbps' },
      { label: 'LATENCY', value: '1 ms' },
      { label: 'RELIABILITY', value: '99.99%' },
    ],
    qrNotice: 'SCAN TO ACTIVATE',
    visualUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    visualAlt: 'Futuristic high-speed fiber optic and neon network trails across a cybernetic metropolis',
    accentColor: '#00F0FF',
    accentGlow: 'rgba(0, 240, 255, 0.35)',
    duration: 10,
    layoutVariant: 'telecom',
  },
  {
    id: 'campaign-fashion',
    category: 'fashion',
    brandName: 'ATELIER VENDÔME',
    brandSub: 'PARIS',
    badge: 'HAUTE COUTURE',
    headline: 'TIMELESS ELEGANCE',
    subheadline: 'Autumn / Winter Collection',
    supportingCopy: 'Hand-finished Italian cashmere and architectural silhouettes.',
    ctaText: 'DISCOVER',
    ctaSubtext: 'Private appointments available',
    locationOrTag: 'Indiranagar & UB City',
    specs: [
      { label: 'ORIGIN', value: 'Como, Italy' },
      { label: 'MATERIAL', value: 'Pure Cashmere' },
      { label: 'EDITION', value: 'Limited 150 Pcs' },
    ],
    visualUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
    visualAlt: 'Editorial haute couture model portrait in sculptural designer coat with dramatic warm lighting',
    accentColor: '#D4AF37',
    accentGlow: 'rgba(212, 175, 55, 0.3)',
    duration: 11,
    layoutVariant: 'fashion',
  },
  {
    id: 'campaign-automotive',
    category: 'automotive',
    brandName: 'VALENCE',
    brandSub: 'ELECTRIC GT',
    badge: 'PURE ELECTRIC GT',
    headline: 'PURE POWER',
    subheadline: '1,020 HP Pure Electric GT',
    supportingCopy: '0-100 km/h in 2.6 seconds of whisper-silent exhilaration.',
    ctaText: 'TEST DRIVE',
    ctaSubtext: 'Private track experience included',
    locationOrTag: 'Lavelle Road & Whitefield',
    specs: [
      { label: '0-100 KM/H', value: '2.6 SEC' },
      { label: 'WLTP RANGE', value: '720 KM' },
      { label: 'FAST CHARGE', value: '10-80% IN 14M' },
    ],
    qrNotice: 'SCAN FOR AR DEMO',
    visualUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600&auto=format&fit=crop',
    visualAlt: 'Sleek luxury electric performance sports coupé in dramatic dark studio rim lighting',
    accentColor: '#FF385C',
    accentGlow: 'rgba(255, 56, 92, 0.4)',
    duration: 12,
    layoutVariant: 'automotive',
  },
  {
    id: 'campaign-culinary',
    category: 'culinary',
    brandName: 'ROAST & ORIGIN',
    brandSub: 'ARTISAN COFFEE',
    badge: 'MICRO-LOT',
    headline: 'CRAFTED PERFECTION',
    subheadline: 'Single-Origin Ethiopian Yirgacheffe',
    supportingCopy: 'Sun-dried heirloom beans roasted in cast-iron drums.',
    ctaText: 'TASTE NOW',
    ctaSubtext: 'Fresh whole-beans roasted daily',
    locationOrTag: '100ft Road, Indiranagar',
    specs: [
      { label: 'ALTITUDE', value: '2,100 M' },
      { label: 'PROCESS', value: 'Natural Sun-Dried' },
      { label: 'NOTES', value: 'Bergamot · Cacao' },
    ],
    qrNotice: 'ORDER VIA APP',
    visualUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600&auto=format&fit=crop',
    visualAlt: 'Artisanal velvet espresso extraction with delicate microfoam latte art in warm glowing café',
    accentColor: '#E69C24',
    accentGlow: 'rgba(230, 156, 36, 0.35)',
    duration: 10,
    layoutVariant: 'culinary',
  },
  {
    id: 'campaign-electronics',
    category: 'electronics',
    brandName: 'SONIQ',
    brandSub: 'STUDIO AUDIO',
    badge: 'STUDIO REFERENCE',
    headline: 'PURE SOUND',
    subheadline: 'Reference Wireless Acoustics',
    supportingCopy: 'Custom 40mm beryllium drivers with hybrid adaptive ANC.',
    ctaText: 'PRE-ORDER',
    ctaSubtext: 'Includes aluminum stand',
    locationOrTag: 'Authorized Audio Specialists',
    specs: [
      { label: 'BATTERY', value: '48 HOURS' },
      { label: 'DRIVERS', value: '40mm Beryllium' },
      { label: 'ACTIVE ANC', value: 'Hybrid Adaptive' },
    ],
    visualUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop',
    visualAlt: 'Premium matte black studio headphones floating with architectural lighting and acoustic soundwave reflections',
    accentColor: '#38BDF8',
    accentGlow: 'rgba(56, 189, 248, 0.35)',
    duration: 10,
    layoutVariant: 'electronics',
  },
  {
    id: 'campaign-hospitality',
    category: 'hospitality',
    brandName: 'AZURE HORIZONS',
    brandSub: 'MALDIVES',
    badge: 'PRIVATE SANCTUARY',
    headline: 'ENDLESS HORIZON',
    subheadline: 'Private Overwater Ocean Pavilions',
    supportingCopy: 'Secluded villas perched over crystal turquoise lagoons.',
    ctaText: 'EXPLORE',
    ctaSubtext: 'Direct suite benefits',
    locationOrTag: 'Baa Atoll, Maldives',
    specs: [
      { label: 'VILLAS', value: 'Overwater Private' },
      { label: 'WELLNESS', value: 'Holistic Spa' },
      { label: 'SERVICE', value: '24/7 Island Butler' },
    ],
    visualUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop',
    visualAlt: 'Luxury overwater resort villa with private infinity pool overlooking pristine turquoise ocean waters at dawn',
    accentColor: '#2DD4BF',
    accentGlow: 'rgba(45, 212, 191, 0.35)',
    duration: 11,
    layoutVariant: 'hospitality',
  },
];
