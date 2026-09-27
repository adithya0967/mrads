export interface PitchDeckService {
  id: string;
  title: string;
  subtitle: string;
  category:
    | 'display'
    | 'quick-commerce'
    | 'software-tech'
    | 'transit'
    | 'content-video'
    | 'corporate-gifting';
  categoryLabel: string;
  badge: string;
  badgeColor?: string;
  isPriority?: boolean; // Major concentration on Display, Quick Commerce & Software
  image: string;
  description: string;
  metrics: { label: string; value: string }[];
  specs: {
    screenSize?: string;
    adSlot?: string;
    playsPerDay?: string;
    repeats?: string;
    uptime?: string;
    reach?: string;
    availableMediums?: string[];
    coreBenefits?: string[];
  };
  link: string;
  ctaText: string;
}

export const PITCH_DECK_SERVICES: PitchDeckService[] = [
  // ==========================================
  // 1. DISPLAY ADVERTISING (PITCH DECK CORE)
  // ==========================================
  {
    id: 'display-restaurant',
    title: 'Restaurant Display Advertising',
    subtitle: '1.5 Million+ Reach · 100+ Screens',
    category: 'display',
    categoryLabel: 'Display Advertising (DOOH)',
    badge: '1.5M+ Captive Reach',
    badgeColor: 'brand',
    isPriority: true,
    image: '/images/restaurant-display.jpg',
    description:
      'High-impact 50" screens positioned directly in dining and waiting areas, capturing high-intent audiences with repeated visibility every 5 minutes.',
    metrics: [
      { label: 'Audience Reach', value: '1.5M+ Consumers' },
      { label: 'Screen Size', value: '50" Commercial UHD' },
      { label: 'Ad Slot', value: '25 Seconds' },
      { label: 'Daily Plays', value: '180x / Day' },
    ],
    specs: {
      screenSize: '50" Commercial Digital Screens',
      adSlot: '25 Seconds Slot',
      playsPerDay: '180 Times Per Day',
      repeats: 'Once Every 5 Minutes',
      uptime: '7:30 AM – 10:00 PM (14.5 Hours)',
      reach: '2,000–3,000 customers daily per restaurant',
      availableMediums: ['Dining Area Displays', 'Waiting Zone Screens', 'Tabletop Smart Kiosks'],
      coreBenefits: [
        'High-intent audience engagement during meals',
        'Repeated visibility every 5 minutes',
        'Premium screens in top dining areas',
        'Strong recall when customers are relaxed',
      ],
    },
    link: '/locations#restaurant',
    ctaText: 'Explore Restaurant Network',
  },
  {
    id: 'display-apartment',
    title: 'Apartment Lift & Lobby Displays',
    subtitle: '15 Million+ Reach · 30,000+ Screens',
    category: 'display',
    categoryLabel: 'Display Advertising (DOOH)',
    badge: '30,000+ Screens Network',
    badgeColor: 'brand',
    isPriority: true,
    image: '/images/apartment.jpg',
    description:
      'High-visibility digital screens inside elevators and building lobbies across premium high-rise towers, influencing entire affluent households.',
    metrics: [
      { label: 'Total Reach', value: '15 Million+' },
      { label: 'Active Screens', value: '30,000+ Units' },
      { label: 'Ad Slot', value: '10 Seconds' },
      { label: 'Daily Frequency', value: '720x / Day' },
    ],
    specs: {
      screenSize: '32" HD Digital Screens',
      adSlot: '10 Seconds Slot',
      playsPerDay: '720 Times Per Day',
      repeats: 'Once Every 90 Seconds',
      uptime: '6:00 AM – 12:00 AM (18 Hours)',
      reach: '15 Million+ residents across luxury societies',
      availableMediums: [
        'Digital Lift Screens',
        'Lobby Smart Displays',
        'Posters',
        'Bike Stations',
        'BTL Activation',
      ],
      coreBenefits: [
        'Reach households across premium apartments',
        'High-visibility lift and lobby screens',
        'Influence the entire household purchase cycle',
        'Unmatched local brand recall starting at 6 AM',
      ],
    },
    link: '/locations#apartment',
    ctaText: 'View Apartment Coverage',
  },
  // ==========================================
  // 2. QUICK COMMERCE & OFFLINE DISTRIBUTION
  // ==========================================
  {
    id: 'qc-darkstore-inserts',
    title: 'Quick Commerce Dark Store Inserts',
    subtitle: 'Trackable Area-Wise Distribution Through Official Dark Stores',
    category: 'quick-commerce',
    categoryLabel: 'Quick Commerce & Distribution',
    badge: '100% Guaranteed Unbox',
    badgeColor: 'brand',
    isPriority: true,
    image: '/images/newspaper.jpg',
    description:
      'Place your flyers, coupons, and product samples directly inside official 10-minute grocery delivery bags delivered to residential doorsteps.',
    metrics: [
      { label: 'Delivery Speed', value: '10-Min Delivery Bags' },
      { label: 'Open Rate', value: '100% Table Unbox' },
      { label: 'Partner Stores', value: 'Official Dark Stores' },
      { label: 'Geo Precision', value: 'Pincode Level' },
    ],
    specs: {
      reach: 'Hyperlocal residential households via 10-min grocery delivery',
      availableMediums: [
        'Official Dark Store Bag Inserts',
        'Product Sample Drops',
        'Exclusive QR Discount Inserts',
      ],
      coreBenefits: [
        'Trackable, area-wise distribution through official partner dark stores',
        'Hyperlocal residential reach directly inside homes',
        'Zero wastage — guaranteed 100% unpackaging by the customer',
        'Instant QR scanning and mobile conversion at the kitchen table',
      ],
    },
    link: '/offline-print',
    ctaText: 'Plan Quick Commerce Campaign',
  },
  {
    id: 'qc-pharmacy-covers',
    title: 'Pharmacy Cover Advertising',
    subtitle: 'Direct Brand Visibility Through Partner Pharmacies',
    category: 'quick-commerce',
    categoryLabel: 'Quick Commerce & Distribution',
    badge: 'Long Household Retention',
    badgeColor: 'brand',
    isPriority: true,
    image: '/images/pharmacy.jpg',
    description:
      'Branded prescription covers and medicine bags distributed through partner chemist counters, stored in medicine cabinets for weeks.',
    metrics: [
      { label: 'Distribution', value: 'Partner Chemist Stores' },
      { label: 'Retention', value: 'Multi-Week Household Shelf' },
      { label: 'Context', value: 'High Trust & Essential' },
      { label: 'Target Sectors', value: 'Healthcare, Education, Retail' },
    ],
    specs: {
      reach: 'Local families seeking health, wellness, and essential goods',
      availableMediums: [
        'Branded Medicine Covers',
        'Custom Rx Sleeves',
        'Counter Top Brand Displays',
      ],
      coreBenefits: [
        'Distributed through official partner pharmacies',
        'Practical take-home branding with repeated visibility',
        'Ideal for healthcare, education, retail, and local businesses',
        'Exceptional cost-per-impression value in residential circles',
      ],
    },
    link: '/offline-print',
    ctaText: 'Get Pharmacy Cover Rates',
  },

  // ==========================================
  // 3. BUILDING SOFTWARE, TECH & AI SOLUTIONS
  // ==========================================
  {
    id: 'tech-business-websites',
    title: 'Business Websites & Web Apps',
    subtitle: 'Smart Digital Solutions for Modern Businesses',
    category: 'software-tech',
    categoryLabel: 'Website, Tech & AI Solutions',
    badge: 'High-Converting & SEO Ready',
    badgeColor: 'brand',
    isPriority: true,
    image: '/images/website.jpg',
    description:
      'Editorial, ultra-fast business websites and landing pages engineered to convert real-world ad traffic into high-intent inbound inquiries.',
    metrics: [
      { label: 'Tech Stack', value: 'Next.js & Modern UI' },
      { label: 'Load Speed', value: 'Sub-Second Global CDN' },
      { label: 'Optimization', value: '100% Mobile & SEO Ready' },
      { label: 'Security', value: 'Enterprise SSL & DDoS' },
    ],
    specs: {
      reach: 'Global & hyperlocal digital web traffic',
      coreBenefits: [
        'Professional Online Presence with luxury editorial aesthetics',
        'Mobile-friendly responsive architecture for all screen sizes',
        'SEO ready with local business schema and fast indexing',
        'Scalable & secure cloud hosting infrastructure',
        'Ongoing engineering support and regular updates',
      ],
      availableMediums: [
        'Custom Business Portals',
        'Campaign Landing Pages',
        'Interactive Web Applications',
      ],
    },
    link: '/digital',
    ctaText: 'Build Your Website',
  },
  {
    id: 'tech-ai-chatbots',
    title: '24/7 Intelligent AI Lead Chatbots',
    subtitle: 'Autonomous Lead Qualification & Smart Routing',
    category: 'software-tech',
    categoryLabel: 'Website, Tech & AI Solutions',
    badge: '24/7 Autonomous AI',
    badgeColor: 'brand',
    isPriority: true,
    image: '/images/social.jpg',
    description:
      'AI agents trained on your services, inventory, and pricing that engage web and WhatsApp visitors 24/7, answering queries and booking leads.',
    metrics: [
      { label: 'Availability', value: '24/7 / 365 Days' },
      { label: 'Training', value: 'Trained on Your Data' },
      { label: 'Channels', value: 'Web & WhatsApp Bots' },
      { label: 'Routing', value: 'Instant CRM Handoff' },
    ],
    specs: {
      reach: 'Every incoming digital visitor across channels',
      coreBenefits: [
        'Answers common customer queries accurately within seconds',
        'Qualifies leads by budget, location, and requirement in natural chat',
        'Captures verified phone numbers and routes hot leads to your sales reps',
        'Continuous learning from customer interactions',
      ],
      availableMediums: [
        'Website Interactive Chat Widgets',
        'WhatsApp Business AI Bots',
        'CRM Webhook Integrations',
      ],
    },
    link: '/digital',
    ctaText: 'Deploy AI Chatbot',
  },
  // ==========================================
  // 4. CONTENT CREATION & VIDEO PRODUCTION
  // ==========================================
  {
    id: 'content-video-production',
    title: 'End-to-End Video Production',
    subtitle: 'From Creative Ideas To Campaign Execution',
    category: 'content-video',
    categoryLabel: 'Content & Video Production',
    badge: '4K Cinema & DOOH Motion',
    badgeColor: 'brand',
    isPriority: false,
    image: '/images/creative.jpg',
    description:
      'Full-service creative production covering strategy, 4K shoot, motion graphics, and delivery formatted for DOOH screens and digital ads.',
    metrics: [
      { label: 'Process', value: 'Plan → Shoot → Edit → Deliver' },
      { label: 'Formats', value: 'Vertical DOOH & 4K Cinema' },
      { label: 'Motion', value: '3D Graphics & Animations' },
      { label: 'Turnaround', value: 'Fast Ready-to-Publish' },
    ],
    specs: {
      reach: 'Omnichannel multi-format delivery',
      availableMediums: [
        'DOOH Screen Commercials',
        'Brand Story Videos',
        'Motion Graphics',
        'Social Media Video Ads',
      ],
      coreBenefits: [
        '1. Understand: Campaign goals and audience planning',
        '2. Create: Professional 4K videos, motion graphics, and audio',
        '3. Publish: Real-time content deployment onto our digital screens',
        '4. Optimize: Campaign performance review and creative refreshes',
      ],
    },
    link: '/print-creative',
    ctaText: 'Discuss Video Project',
  },
  // ==========================================
  // 6. CORPORATE GIFTING SOLUTIONS
  // ==========================================
  {
    id: 'gifting-corporate-kits',
    title: 'Corporate Gifting Solutions',
    subtitle: 'Thoughtful Gifts That Strengthen Business Relationships',
    category: 'corporate-gifting',
    categoryLabel: 'Corporate Gifting Solutions',
    badge: 'Custom Branded Hampers',
    badgeColor: 'brand',
    isPriority: false,
    image: '/images/standee.jpg',
    description:
      'Customized employee joining kits, welcome hampers, festive gift boxes, and bespoke merchandise that leave an enduring impression.',
    metrics: [
      { label: 'Welcome Kits', value: 'New Hire Onboarding' },
      { label: 'Festive Boxes', value: 'Diwali & New Year Hampers' },
      { label: 'Merchandise', value: 'Custom Tech & Apparel' },
      { label: 'Fulfillment', value: 'Doorstep Courier Delivery' },
    ],
    specs: {
      reach: 'Employees, VIP clients, and conference attendees',
      availableMediums: [
        'Welcome Kits & Employee Joining Kits',
        'Festive Gift Hampers',
        'Customized Tech & Apparel Merchandise',
        'Event & Conference Delegate Gifts',
      ],
      coreBenefits: [
        'Custom laser engraving and luxury unboxing packaging',
        'Curated selection of high-utility premium products',
        'Bulk fulfillment and doorstep shipping across India',
      ],
    },
    link: '/contact',
    ctaText: 'Request Gifting Catalogue',
  },
];
