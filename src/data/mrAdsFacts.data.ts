// Single source of truth for all Mr. Ads facts, sourced only from
// docs/HYPERLOCAL ADVERTISING SOLUTIONS PITCH DECK PDF.pdf. Do not add
// any figure, claim, or partner here that is not backed by that deck.

export interface DisplayVertical {
  id: 'restaurant' | 'apartment' | 'corporate' | 'mall' | 'fitness' | 'play-zone' | 'pg-hostel';
  label: string;
  reachHeadline: string;
  bullets: string[];
  screenSize?: string;
  adSlot?: string;
  plays?: string;
  repeats?: string;
  upTime?: string;
  mediums?: string[];
  placement?: string;
}

export interface WhyPillar {
  id: string;
  title: string;
  description: string;
}

export const mrAdsFacts = {
  brand: 'Mr. Ads',
  tagline: 'Hyperlocal Advertising',
  positioning: 'Connecting Brands with the Right Audience through Innovative Advertising Solutions',
  heroHeadline: ['WE BUILD', 'BRANDS IN THE', 'REAL WORLD'],

  displayAdvertising: [
    {
      id: 'restaurant',
      label: 'Restaurant',
      reachHeadline: 'An opportunity to reach 1.5 Million+ through 100+ screens',
      bullets: [
        'Reach 2,000–3,000 customers daily',
        'Premium screens in dining & waiting areas',
        'High-intent audience engagement',
        'Repeated visibility every 5 minutes',
      ],
      screenSize: '50"',
      adSlot: '25 seconds',
      plays: '180 times per day',
      repeats: 'Once every 5 minutes',
      upTime: '7:30 AM – 10 PM (14.5h)',
    },
    {
      id: 'apartment',
      label: 'Apartment',
      reachHeadline: 'An opportunity to reach 15 Million+ through 30,000+ screens',
      bullets: [
        'Reach households across premium apartments',
        'High-visibility lift and lobby screens',
        'Influence the entire household',
        'Strong local brand recall',
      ],
      screenSize: '32"',
      adSlot: '10 seconds',
      plays: '720 times per day',
      repeats: 'Once every 90 seconds',
      upTime: '6:00 AM – 12 AM (18h)',
      mediums: ['Posters', 'Digital Screens', 'Bike Stations', 'BTL Activation'],
    },
    {
      id: 'corporate',
      label: 'Corporate',
      reachHeadline: 'An opportunity to reach 1.6 Million+ through 1,300+ screens',
      bullets: [
        'Reach working professionals and decision-makers',
        'Premium corporate screen placements',
        'Repeated daily visibility',
        'Engage high-value urban audiences',
      ],
      screenSize: '32"',
      adSlot: '10 seconds',
      plays: '420 times per day',
      repeats: 'Once every 2 minutes',
      upTime: '8:00 AM – 10 PM (14h)',
      mediums: ['Large Format Digital Displays', 'BTL Activation', 'Static Screens'],
    },
    {
      id: 'mall',
      label: 'Mall',
      reachHeadline: 'An opportunity to reach 1.1 Million+ through 145+ screens',
      bullets: [
        'Reach shoppers in high-footfall retail environments',
        'Engage customers during shopping and entertainment experiences',
        'Influence purchase decisions through repeated visibility',
      ],
      upTime: '10:00 AM – 10:00 PM (12h)',
      mediums: ['BTL Activation', 'Digital Screens', 'Bike Station', 'Poster'],
    },
    {
      id: 'fitness',
      label: 'Fitness Space',
      reachHeadline: 'An opportunity to reach 2 Million+ through 170+ screens',
      bullets: [
        'Reach health-conscious and active audiences',
        'Premium screen placements inside fitness centers',
        'Connect with young urban consumers',
      ],
      screenSize: '55"',
      adSlot: '15 seconds',
      plays: '480 times per day',
      repeats: 'Once every 2 minutes',
      upTime: '6 AM – 10 PM (16h)',
      placement: 'Workout & waiting areas',
    },
    {
      id: 'play-zone',
      label: 'Play Zone',
      reachHeadline:
        'An opportunity to reach families and young parents in high-engagement environments',
      bullets: [
        'Reach parents, families, and young children',
        'High-visibility screens in play and waiting areas',
        'Influence family purchase decisions',
      ],
      adSlot: '15–25 seconds',
      plays: 'Throughout operating hours',
      repeats: 'Every few minutes',
      upTime: 'Based on facility operating hours',
      mediums: ['Digital Screens', 'BTL Activation'],
      placement: 'Play & waiting areas',
    },
    {
      id: 'pg-hostel',
      label: 'PG & Hostel',
      reachHeadline: 'An opportunity to reach students and young working professionals',
      bullets: [
        'Reach students and young working professionals',
        'High-frequency visibility in common areas',
        'Promote brands, apps, food services, and local businesses',
      ],
      adSlot: '10 seconds',
      plays: 'Throughout operating hours',
      repeats: 'Every few minutes',
      upTime: 'Based on facility operating hours',
      mediums: ['Digital Screens', 'Posters', 'BTL Activation'],
      placement: 'Common areas & reception zones',
    },
  ] as DisplayVertical[],

  onTheMove: {
    tagline: 'Moving Brand Visibility Across High-Traffic Urban Locations',
    channels: [
      'Auto Branding',
      'Cab Branding',
      'Bus Branding',
      'Mobile Van Branding',
      'Bus Shelter Branding',
      'Road Shows & Promotional Vehicle Campaigns',
    ],
    busShelter: {
      reachHeadline: 'Reach 40,000+ daily',
      location: 'Mysuru',
      shelters: '10',
      adArea: '230 sq ft',
      visibility: '24 x 7',
    },
  },

  offlineCreative: {
    tagline: 'Designs That Blend Creativity and Brand Impact',
    creative: [
      'Brochure & Catalogue Design',
      'Flyer, Poster & Banner Design',
      'Standee & Stall Branding',
      'Pole Boards & No-Parking Boards',
      'Magazine Advertisements',
      'Social Media Creatives',
      'Promotional Marketing Materials',
    ],
    distributionTagline: 'Strategic Flyer Distribution That Delivers Local Reach',
    distributionServices: [
      'Hand-to-Hand Flyer Distribution',
      'Door-to-Door Flyer Distribution',
      'Apartment Promotions',
      'Event & Campaign Promotions',
    ],
    coverageAreas: [
      'Metro & Bus Stations',
      'Shopping Malls',
      'Residential Communities',
      'Markets & High-Footfall Locations',
    ],
  },

  quickCommerce: {
    tagline: 'Reach Homes Through Official Partners',
    bullets: [
      'Trackable, area-wise distribution through official dark stores',
      'Hyperlocal residential reach',
    ],
    partners: ['Swiggy Instamart', 'Blinkit', 'Zepto'],
  },

  pharmacyCover: {
    tagline: 'Direct Brand Visibility Through Pharmacy Covers',
    bullets: [
      'Distributed through partner pharmacies',
      'Practical take-home branding with repeated visibility',
      'Ideal for healthcare, education, retail, and local business promotions',
    ],
  },

  websiteAI: {
    tagline: 'Smart Digital Solutions for Modern Businesses',
    coreServices: [
      'Business Websites',
      'E-Commerce Solutions',
      'AI Chatbots',
      'Hosting & Maintenance',
      'Website Redesign',
    ],
    keyBenefits: [
      'Professional Online Presence',
      'Mobile Friendly',
      'SEO Ready',
      'Scalable & Secure',
      'Ongoing Support',
    ],
  },

  whyChooseMrAds: [
    {
      id: 'hyperlocal-reach',
      title: 'Hyperlocal Reach',
      description: 'Target audiences through multiple advertising channels.',
    },
    {
      id: 'multiple-channels',
      title: 'Multiple Advertising Channels',
      description: 'Restaurants, apartments, moving media, and offline campaigns.',
    },
    {
      id: 'creative-digital',
      title: 'Creative & Digital Solutions',
      description: 'Design, video production, websites, and AI solutions.',
    },
    {
      id: 'brand-visibility',
      title: 'Better Brand Visibility',
      description: 'Repeated exposure for stronger brand recall.',
    },
    {
      id: 'end-to-end',
      title: 'End-to-End Campaign Support',
      description: 'From ideas to execution and campaign management.',
    },
    {
      id: 'one-partner',
      title: 'One Partner, Multiple Solutions',
      description: 'Integrated solutions for business growth.',
    },
  ] as WhyPillar[],

  finalCTA: {
    headline: ['YOUR HYPERLOCAL', 'ADVERTISING PARTNER'],
    options: [
      'Media Plans',
      'Campaign Pricing',
      'Demo Videos',
      'Location List',
      'Creative Services',
      'Customized Advertising Solutions',
    ],
  },

  contact: {
    phone: '+91 96865 44644',
    phoneHref: 'tel:+919686544644',
    whatsappHref: 'https://wa.me/919686544644',
    email: 'knowus@mr-ads.in',
    emailHref: 'mailto:knowus@mr-ads.in',
  },
};

export type MrAdsFacts = typeof mrAdsFacts;
