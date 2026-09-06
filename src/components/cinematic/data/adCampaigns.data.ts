// Fictional advertising-campaign creatives shown on the billboard and passing
// surfaces during the cinematic journey. Every entry here is an INVENTED
// demo creative for showing what Mr. Ads screens can display — none of these
// are real Mr. Ads clients, and none may reuse a real brand name or logo.
// Real Mr. Ads facts live only in src/data/mrAdsFacts.data.ts.

export interface AdCampaign {
  id: string;
  category:
    | 'Automotive'
    | 'Luxury Goods'
    | 'Technology'
    | 'Fashion'
    | 'Food & Beverage'
    | 'Real Estate'
    | 'Entertainment'
    | 'Mr. Ads';
  brand: string;
  headline: string;
  subhead: string;
  palette: { base: string; accent: string };
  poweredByMrAds?: boolean;
  imageSlot: string; // human-readable label for the placeholder / future upload
}

export const adCampaigns: AdCampaign[] = [
  {
    id: 'velaris-gt',
    category: 'Automotive',
    brand: 'VELARIS GT',
    headline: 'Silence at 250 km/h.',
    subhead: 'The all-electric grand tourer.',
    palette: { base: '#0d0d10', accent: '#c9a961' },
    imageSlot: 'Luxury automotive campaign — full-bleed car photo',
  },
  {
    id: 'chrono-luxe',
    category: 'Luxury Goods',
    brand: 'CHRONO LUXE',
    headline: 'Time, Engineered.',
    subhead: 'Swiss automatic movement, reimagined.',
    palette: { base: '#101014', accent: '#d4af6a' },
    imageSlot: 'Luxury watch campaign — macro product photo',
  },
  {
    id: 'pulse-audio',
    category: 'Technology',
    brand: 'PULSE AUDIO',
    headline: 'Hear Everything. Feel Nothing Else.',
    subhead: 'Adaptive noise-cancelling, all day.',
    palette: { base: '#0a0f14', accent: '#4fd1c5' },
    imageSlot: 'Tech / audio campaign — product-in-use photo',
  },
  {
    id: 'maison-eight',
    category: 'Fashion',
    brand: 'MAISON EIGHT',
    headline: 'Tailored for the City.',
    subhead: 'The Autumn Capsule Collection.',
    palette: { base: '#14100f', accent: '#e0a96d' },
    imageSlot: 'Fashion campaign — editorial photo',
  },
  {
    id: 'artisan-table',
    category: 'Food & Beverage',
    brand: 'ARTISAN TABLE',
    headline: 'Slow Food. Fast Table.',
    subhead: 'Wood-fired, every night.',
    palette: { base: '#120d0a', accent: '#e8734a' },
    imageSlot: 'Food & beverage campaign — plated dish photo',
  },
  {
    id: 'skyline-residences',
    category: 'Real Estate',
    brand: 'SKYLINE RESIDENCES',
    headline: 'Come Home to the View.',
    subhead: '3 & 4 BHK residences, now open.',
    palette: { base: '#0c1014', accent: '#7fb8d9' },
    imageSlot: 'Real estate campaign — architectural render/photo',
  },
  {
    id: 'nightframe',
    category: 'Entertainment',
    brand: 'NIGHTFRAME FESTIVAL',
    headline: 'Three Nights. One City.',
    subhead: 'Tickets on sale now.',
    palette: { base: '#0f0a14', accent: '#b06fe0' },
    imageSlot: 'Entertainment / festival campaign — event photo',
  },
  {
    id: 'mrads-house',
    category: 'Mr. Ads',
    brand: 'MR. ADS',
    headline: 'Your Brand. Everywhere That Matters.',
    subhead: 'Hyperlocal Advertising Solutions.',
    palette: { base: '#0a0a0c', accent: '#b4233c' },
    poweredByMrAds: true,
    imageSlot: 'Mr. Ads house ad — no photo needed, typographic only',
  },
];

export function getCampaign(id: string): AdCampaign {
  const found = adCampaigns.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown ad campaign id: ${id}`);
  return found;
}
