export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'template' | 'guide';
  isPreviewable?: boolean;
}

export interface CourseModule {
  id: string;
  moduleNumber: number;
  title: string;
  subtitle: string;
  lessons: CourseLesson[];
}

export interface Course {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: 'ecommerce' | 'ads' | 'creative' | 'freelance' | 'finance' | 'ai';
  categoryLabel: string;
  image: string;
  isFeatured?: boolean;
  instructor: string;
  instructorRole: string;
  totalDuration: string;
  totalLessons: number;
  level: string;
  language: string;
  keyOutcomes: string[];
  description: string;
  modules: CourseModule[];
}

export const ALL_COURSES: Course[] = [
  {
    id: 'tiktok-ads',
    code: 'C002',
    title: 'TikTok Ads Mastery — Skills for Millionaires',
    shortTitle: 'TikTok Ads Mastery',
    tagline: 'Master the secret art of crafting high-converting viral TikTok Ads, scaling campaigns on auto-pilot, and multiplying eCommerce sales.',
    category: 'ads',
    categoryLabel: 'Digital Advertising',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1WP01vZPGmV6FohE_EDFSbp9gYLbeDTyTqOKGIHqQlmI22p5MnkkH8hwb_2UQ-3tD1IUW0MgutiXwDuJ_oFvlS5LLkVfaj2QNDMelGmNVe35ubBCUpdbbXtZHU4Cv1hyLPsaueHd-EECBZZnK5LMwTKHjJlzw0A9jwqYDGlysOhgfUULsg1V4eCuwmEFHCE5woffx4zdeM-xUCpqFDsm1_ud6WdoOBUPNPGZQ7A5NoYRVPWABuaRDY2nyk',
    isFeatured: true,
    instructor: 'Usman Ali & Team',
    instructorRole: 'Verified 8-Figure TikTok Media Buyer',
    totalDuration: '8.5 Hours',
    totalLessons: 38,
    level: 'Beginner to Advanced',
    language: 'Urdu / Hindi with English UI',
    keyOutcomes: [
      'Bypass Pakistani payment card rejections with verified agency accounts',
      'The 3-second viral hook creative architecture using CapCut',
      'CBO & ABO budget scaling from Rs. 2,000 to Rs. 100k/day',
      'Full Shopify & WooCommerce Events API pixel integration without data loss',
      'Local COD conversion rate optimization (TCS, Trax, CallCourier)'
    ],
    description: 'TikTok has fundamentally transformed social commerce worldwide. With organic reach declining across older networks, TikTok’s recommendation algorithm gives Pakistani brands, drop-shippers, and freelancers an unprecedented unfair advantage. In this complete masterclass, you will learn everything required to run high-ROI campaigns from scratch — bypassing Pakistani payment restrictions, setting up agency accounts, creating hook-heavy UGC creatives, and scaling budgets safely.',
    modules: [
      {
        id: 'm1',
        moduleNumber: 1,
        title: 'TikTok Ad Account Setup & Verification',
        subtitle: '5 Lessons · Pakistani billing & Agency accounts',
        lessons: [
          { id: 'l1', title: 'Overview of the TikTok Ads Ecosystem & 2026 Trends', duration: '12:30', type: 'video', isPreviewable: true },
          { id: 'l2', title: 'Business Center architecture & user permissions', duration: '16:15', type: 'video', isPreviewable: true },
          { id: 'l3', title: 'Unlocking Pakistani payment cards without rejection', duration: '18:45', type: 'video' },
          { id: 'l4', title: 'Agency accounts vs standard self-serve setups', duration: '14:20', type: 'video' },
          { id: 'l5', title: 'Account health checklist & avoiding shadowbans', duration: '10:05', type: 'guide' }
        ]
      },
      {
        id: 'm2',
        moduleNumber: 2,
        title: 'Creative Mastery & Viral Hook Scripts',
        subtitle: '8 Lessons · UGC creation & CapCut workflows',
        lessons: [
          { id: 'l6', title: 'The first 3 seconds: 12 formulaic viral hooks', duration: '24:18', type: 'video', isPreviewable: true },
          { id: 'l7', title: 'Sourcing creators & script templates for Pakistani audiences', duration: '19:40', type: 'video' },
          { id: 'l8', title: 'CapCut masterclass: Editing ads in under 15 minutes', duration: '22:15', type: 'video' },
          { id: 'l9', title: 'Text overlays, sound selection & TikTok trending audio', duration: '15:30', type: 'video' }
        ]
      },
      {
        id: 'm3',
        moduleNumber: 3,
        title: 'Pixel Tracking & Conversion API',
        subtitle: '6 Lessons · Shopify, WooCommerce & custom funnels',
        lessons: [
          { id: 'l10', title: 'TikTok Events API vs Standard Web Pixel', duration: '15:10', type: 'video' },
          { id: 'l11', title: '1-click Shopify Pixel & Events deduplication', duration: '21:04', type: 'video' },
          { id: 'l12', title: 'Setting up custom conversion events for Cash on Delivery', duration: '18:22', type: 'video' }
        ]
      },
      {
        id: 'm4',
        moduleNumber: 4,
        title: 'Targeting, CBO & Vertical Scaling',
        subtitle: '9 Lessons · Budgeting from Rs. 2,000 to Rs. 100k/day',
        lessons: [
          { id: 'l13', title: 'ABO vs CBO: When to use which budget method', duration: '31:50', type: 'video' },
          { id: 'l14', title: 'Surfing winning creatives without triggering ad fatigue', duration: '20:15', type: 'video' },
          { id: 'l15', title: 'Dayparting, automated rules & cut-loss triggers', duration: '26:40', type: 'video' }
        ]
      },
      {
        id: 'm5',
        moduleNumber: 5,
        title: 'Local Cash on Delivery (COD) Optimization',
        subtitle: '5 Lessons · Logistics, return reduction & SMS confirmation',
        lessons: [
          { id: 'l16', title: 'Automating WhatsApp & SMS order confirmations', duration: '17:30', type: 'video' },
          { id: 'l17', title: 'Reducing Return-to-Origin (RTO) below 12%', duration: '23:10', type: 'video' },
          { id: 'l18', title: 'Negotiating lower courier rates with TCS & Trax', duration: '14:45', type: 'guide' }
        ]
      },
      {
        id: 'm6',
        moduleNumber: 6,
        title: 'International Client Acquisition & Agency Scaling',
        subtitle: '5 Lessons · Upwork, Fiverr & foreign retainers',
        lessons: [
          { id: 'l19', title: 'Packaging TikTok Ads management for Dubai, UK & US clients', duration: '28:10', type: 'video' },
          { id: 'l20', title: 'Writing proposals that close $500–$2,000/mo retainers', duration: '32:00', type: 'video' },
          { id: 'l21', title: 'Client onboarding contracts & reporting templates', duration: '16:20', type: 'template' }
        ]
      }
    ]
  },
  {
    id: 'facebook-meta-ads',
    code: 'C003',
    title: 'Facebook & Instagram Marketing',
    shortTitle: 'Meta Marketing',
    tagline: 'Advanced Meta Ads strategies to dominate Facebook and Instagram feeds with high ROAS.',
    category: 'ads',
    categoryLabel: 'Digital Advertising',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1VUM8HkRh2suaSgdIkzXsgLoT-hbYAQfUuPbuDPChWbsv9f10GzGNFvHUHdSrXcPbIsD55nhK1LQ2HkANhhfXYSvIGpCC6SO5UfTtbYSHlSw-I9UrHOVbAJONZ0wvEMN3C6WfU4qyYGNq4PTDe8uS_-L8FBuI9Y4NKkRmNfWmG1TYIeJlz7uYD_waboTDRRY-VysuME0Gp4uQLE0l3lO4DF0mlNIEuhsLkYpDThMmKspK70PypiN6yYikk',
    instructor: 'Hamid Raza',
    instructorRole: 'Performance Marketing Lead',
    totalDuration: '7 Hours',
    totalLessons: 32,
    level: 'All Levels',
    language: 'Urdu',
    keyOutcomes: [
      'Meta Advantage+ Shopping Campaigns setup',
      'Dynamic product ads & catalog syncing',
      'Lookalike audiences built from Pakistan purchase data',
      'Creative testing frameworks for high-converting carousels'
    ],
    description: 'Dominate Meta advertising across Pakistan and global markets. Learn precision targeting, custom and lookalike audiences, retargeting funnels, and catalog sales that print orders 24/7.',
    modules: [
      {
        id: 'fb-m1',
        moduleNumber: 1,
        title: 'Meta Business Manager Architecture',
        subtitle: '4 Lessons · Assets & Domains',
        lessons: [
          { id: 'fb-l1', title: 'Business Manager verification & safety protocols', duration: '18:00', type: 'video' },
          { id: 'fb-l2', title: 'Domain verification & Aggregated Event Measurement', duration: '14:20', type: 'video' }
        ]
      },
      {
        id: 'fb-m2',
        moduleNumber: 2,
        title: 'High ROAS Campaign Structures',
        subtitle: '6 Lessons · Testing & Scaling',
        lessons: [
          { id: 'fb-l3', title: 'The 3-stage funnel: Top, Middle, and Bottom of Funnel', duration: '24:10', type: 'video' },
          { id: 'fb-l4', title: 'Retargeting cart abandoners with dynamic discounts', duration: '19:40', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'video-editing',
    code: 'C008',
    title: 'Video Editing Masterclass',
    shortTitle: 'Video Editing',
    tagline: 'Master Premiere Pro and CapCut for viral social media content creation and reels.',
    category: 'creative',
    categoryLabel: 'Creative & Video',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XWHh3j2ur2Z2rAHZpo-GlFX3_1B6NGTZlwT9facPGl4Kx9XdbHmSbt74ZWQa8o6gmLM74HspTnrO1ksp5l0RWP_3A208kuLcselHb_sYJWrwok_a87hMIqgbHm5u6M-pTDHhZR2kXa_0sD0-CTuyUatHhseip4sTdsXrkwNtaLHc1roGcjAgjd11nZ3un7cjfnbIVzy2kq_GxI4WKF3yyh8xX3auvAH_eZXKJU-Q5SUFKZWrcQI4OM24c',
    instructor: 'Daniyal Sheikh',
    instructorRole: 'Lead Motion Designer & Video Editor',
    totalDuration: '9.2 Hours',
    totalLessons: 41,
    level: 'Beginner to Pro',
    language: 'Urdu',
    keyOutcomes: [
      'Fast CapCut desktop shortcuts for viral TikToks & Reels',
      'Adobe Premiere Pro timeline mastery & sound engineering',
      'Alex Hormozi style animated subtitles and kinetic typography',
      'Color grading for commercial products & client reels'
    ],
    description: 'Video editors are the highest-paid freelancers in 2026. This comprehensive course teaches you how to turn raw smartphone footage into viral short-form content that clients eagerly pay $50–$150 per reel for.',
    modules: [
      {
        id: 've-m1',
        moduleNumber: 1,
        title: 'Short-Form Viral Anatomy',
        subtitle: '5 Lessons · Pacing & Hooks',
        lessons: [
          { id: 've-l1', title: 'Sound design tricks that keep retention over 80%', duration: '20:15', type: 'video' },
          { id: 've-l2', title: 'Dynamic text animators and kinetic presets', duration: '25:00', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'graphic-designing',
    code: 'C010',
    title: 'Graphic Designing Suite',
    shortTitle: 'Graphic Designing',
    tagline: 'Learn Photoshop, Illustrator, and Canva to craft high-converting visuals, logos & branding.',
    category: 'creative',
    categoryLabel: 'Creative & Video',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XHOeh2nOnLMdShHWeWPGVw7FORLsiLZR-DeKLWhnMx2gVYLWZzBz2YhKa22VTxU7wEujQmHCNUO7mhWkXlRE3BLZndR6_nHt_QMGwawyCAvOCn9JqI6uSNXXJivVXq4_K0gWzBDa0iI90Dlz4sfDzLspIOtSoCcztBE5Wp7h1n2CC0zntm140R0rExVhJGLEnco_1maDMt_kpwp5kirHYVQzdULuytVJp4ZzYfWCRB1u_hfZyocyyPYyA',
    instructor: 'Ayesha Siddiqui',
    instructorRole: 'Senior Brand Identity Designer',
    totalDuration: '11 Hours',
    totalLessons: 48,
    level: 'All Levels',
    language: 'Urdu',
    keyOutcomes: [
      'High-CTR eCommerce banner and carousel graphics',
      'Branding packages, logo concepts, and vector vectorization',
      'Canva Pro workflow for non-stop social media agencies',
      'Packaging and label design for local Pakistani products'
    ],
    description: 'Transform your creativity into consistent monthly revenue. Master Adobe Photoshop, Illustrator, and Canva to design brand identities, social media creatives, packaging, and high-CTR advertising banners.',
    modules: [
      {
        id: 'gd-m1',
        moduleNumber: 1,
        title: 'Commercial Ad Design Principles',
        subtitle: '6 Lessons · Typography & Layout',
        lessons: [
          { id: 'gd-l1', title: 'Color theory that drives purchase decisions', duration: '22:40', type: 'video' },
          { id: 'gd-l2', title: 'Product mockups with realistic 3D shadows', duration: '18:50', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'youtube-earning',
    code: 'C006',
    title: 'YouTube Growth & Monetization',
    shortTitle: 'YouTube Earning',
    tagline: 'Create, grow, and monetize cash cow faceless YouTube channels and earn global ad revenue.',
    category: 'freelance',
    categoryLabel: 'Freelancing & AI',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1VdM6BaoxaiRwQtRGhjgilUz1XoETVgpzxtBFbQuKBhFjKHdievnWzMgezV0rAnA7S7HuBjV3XWLrFJaqhRoZhhSNoVwNhcMkKKR9pg9I_IrO0TLIBYDnkL6N2N5PIB78Mz1tAJ7EsyG4Jhp4SLEAYHWq5cIszi2fsTGwOR4224eFBlxYeIFKstr5zcyxsrmlci1zVsuCoWANWnUDYhEAq6SEgTTw6Aty1xUwCq6YFutHDHbyn7VnQZJiE',
    instructor: 'Kashif Majeed',
    instructorRole: 'YouTube Gold Creator Awardee',
    totalDuration: '8.4 Hours',
    totalLessons: 36,
    level: 'Beginner to Advanced',
    language: 'Urdu',
    keyOutcomes: [
      'Faceless channel niches with high US/UK RPM ($8–$25 RPM)',
      'AI scriptwriting + voiceover workflow for automation',
      'Thumbnail click-through rate optimization (12%+ CTR formulas)',
      'AdSense pin setup & receiving international payments in Pakistan'
    ],
    description: 'Learn the automated faceless YouTube strategy that generates thousands of dollars per month without showing your face or using expensive camera gear.',
    modules: [
      {
        id: 'yt-m1',
        moduleNumber: 1,
        title: 'Niche Selection & RPM Analysis',
        subtitle: '4 Lessons · High CPC Topics',
        lessons: [
          { id: 'yt-l1', title: 'Finance, luxury & tech niches that pay 10x more', duration: '26:00', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'wordpress-web',
    code: 'C009',
    title: 'WordPress Web Development',
    shortTitle: 'WordPress Web',
    tagline: 'Design, build, and deploy high-converting websites and WooCommerce stores without coding.',
    category: 'creative',
    categoryLabel: 'Creative & Video',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1UtKO21YefgrJSYkqfcd2exI7CE7J2ovCXvnvnMiyrJb4VYmV9xebze-nqF2qwUFf49BKZ7ZVsZltXk2_v6ODDXerjASbznv_qs1onAjGDLCnbsthjOzfQr-DVjhgfScWqRUcu4q06UtW9ThZLKjm_Wd-OLmoABHKAtMfe0858rYrpUryGwq1Z47WGmxs1cWjeS_4v19LBtlfWCbg2CGtTbQL7SWfrefyG3puYlr6DSxk4T64y9Qe4Ofn0',
    instructor: 'Saad Ur Rehman',
    instructorRole: 'Full Stack Web Consultant',
    totalDuration: '10.5 Hours',
    totalLessons: 44,
    level: 'Beginner to Intermediate',
    language: 'Urdu',
    keyOutcomes: [
      'Complete Elementor Pro responsive landing page builds',
      'WooCommerce store setup with local Pakistani payment gateways',
      'Speed optimization & Google PageSpeed 90+ scores',
      'Selling web design gigs on Fiverr for $150–$500 per site'
    ],
    description: 'No code required. Build stunning eCommerce stores, agency portfolios, and corporate websites using WordPress and Elementor. Learn how to launch client sites in 24 hours.',
    modules: [
      {
        id: 'wp-m1',
        moduleNumber: 1,
        title: 'Domain, Hosting & WP Setup',
        subtitle: '5 Lessons · Server Configuration',
        lessons: [
          { id: 'wp-l1', title: 'CPanel setup, SSL installation & database creation', duration: '19:15', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'crypto-trading',
    code: 'C012',
    title: 'Crypto Trading & Analysis',
    shortTitle: 'Crypto Trading',
    tagline: 'Technical analysis, risk management, spot, and futures market setups with disciplined risk.',
    category: 'finance',
    categoryLabel: 'Financial Markets',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1WuRsQiFyAX4quMvF7aa0-j6Epa98fCuNvG06dsn2st6MU7OB_r0cGSk-Y2mEscYu1YcV7JN0u0xGdtJsQIM9qdqAkmIuoPTtAHhxRM4XhwHl3JUqQqqDF-GlcdL-JtSA6tmyDF4VmOg5x2JstCZ2gguSZTrKDui-z684JC7WVqRJWuat2mat48CP5rLzjDcoiIA1LjfvwsJlcbVdO-j7Rr9TLpF-9a-C_XNJP7KAVDPdn7IX2q4KZFQn8',
    instructor: 'Tariq Mehmood',
    instructorRole: 'Professional Crypto Analyst & Fund Manager',
    totalDuration: '9.8 Hours',
    totalLessons: 39,
    level: 'Intermediate to Advanced',
    language: 'Urdu',
    keyOutcomes: [
      'Price Action, Support & Resistance, and Order Block trading',
      'Binance & Bybit P2P safely in Pakistan without bank frozen issues',
      'Strict 1:3 risk-to-reward ratio money management rules',
      'Spot portfolio allocation for the upcoming bull cycle'
    ],
    description: 'Stop gambling in telegram signal groups. Learn institutional price action, candlestick mechanics, supply-and-demand zones, and how to protect capital while compounding gains.',
    modules: [
      {
        id: 'ct-m1',
        moduleNumber: 1,
        title: 'Price Action Foundations',
        subtitle: '6 Lessons · Chart Structure',
        lessons: [
          { id: 'ct-l1', title: 'Market structure breaks & liquidity sweeps', duration: '29:00', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'shopify-dropshipping',
    code: 'C004',
    title: 'Shopify Dropshipping Blueprint',
    shortTitle: 'Shopify Dropship',
    tagline: 'Product hunting, supplier sourcing, and 7-figure store setup for local & international eCom.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XPtG988rsPAQYqsN-s6I50qYf6OaLfJC42IV7ybTz1ALbKwtXJO_R961QQQkEYXBto5gzzJ6H3OGx47pkUoSW4ZJ_xn-4iS3RKibbWyEIuHQ3bE-odjsi6riy2MwVfizwzyKwf4r9CBIbOhUzQ1JT440wabWDu0HYlb_czz-5t9Csj5cL_uvnYWGfytV-WY6wocqmuYKdUGuIAte--aAOTnammUcV7OyPnfAIiGXcA9rJsb59oWGj0ng',
    instructor: 'Omair Siddiq',
    instructorRole: '7-Figure E-commerce Merchant',
    totalDuration: '12 Hours',
    totalLessons: 52,
    level: 'All Levels',
    language: 'Urdu',
    keyOutcomes: [
      'Finding winning viral products in Lahore, Karachi & Rawalpindi wholesale markets',
      'High-converting single product store architecture on Shopify',
      'Integrating Trax, PostEx & TCS COD shipping APIs',
      'Scaling international dropshipping to USA with AutoDS & CJ'
    ],
    description: 'The end-to-end blueprint to launch a profitable e-commerce brand. Discover how to source locally in Pakistan for Rs. 500 and sell online for Rs. 2,500+ with automated shipping.',
    modules: [
      {
        id: 'sd-m1',
        moduleNumber: 1,
        title: 'Local E-Com vs Global Dropshipping',
        subtitle: '6 Lessons · Business Models',
        lessons: [
          { id: 'sd-l1', title: 'Wholesale product sourcing in Shah Alam & Bolton Market', duration: '28:30', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'amazon-fba',
    code: 'C001',
    title: 'Amazon FBA Business',
    shortTitle: 'Amazon FBA',
    tagline: 'Wholesale and Private Label foundations on the worlds biggest marketplace from Pakistan.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XO8ujurWc7fXb2rkdMB2eTRlymScPhgEI2vqY5Smbxzf3jYftY5pC6KYqpstEmHUdevYd89qf2xmOksw4XZSQ5t5FS5oC1du5AmdOxY32kvYtOWYmXum-KH6er8UYqPoJ7qf7lnD1D_nIiCldveCuJbr6BbLqhJpSpNWkpiNeDBcw8Bm01J7ieIWp42HdZ4pWPSxzwfMdPp7xYlLzCyXFjXDmgvF38GZmK8_bEWHATpVMW6SvSoEuD3zE',
    instructor: 'Zubair Ahmed',
    instructorRole: 'Amazon PL Seller & Agency Founder',
    totalDuration: '14 Hours',
    totalLessons: 60,
    level: 'Intermediate to Advanced',
    language: 'Urdu',
    keyOutcomes: [
      'Helium 10 & Jungle Scout product validation criteria',
      'Opening US/UK LLC & Business Bank Account (Mercury / Wise)',
      'Alibaba supplier negotiations and sea shipping logistics',
      'Amazon PPC advertising optimization & listing ranking'
    ],
    description: 'Learn how Pakistani entrepreneurs sell on Amazon US and UK. Understand wholesale brand approvals, private label brand building, and international logistics.',
    modules: [
      {
        id: 'amz-m1',
        moduleNumber: 1,
        title: 'Product Hunting Criteria & Data Analysis',
        subtitle: '7 Lessons · Market Research',
        lessons: [
          { id: 'amz-l1', title: 'Finding low-competition $10k/mo revenue products', duration: '35:00', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'daraz-mastery',
    code: 'C005',
    title: 'Daraz Seller Mastery',
    shortTitle: 'Daraz Mastery',
    tagline: 'Rank listings on Pakistans largest marketplace and dominate 11.11 mega campaigns.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1WMb_ZdyYZuLeX-5VR23aYDG3pC8XhahZORU-kcFLBuhac9p6b3Tt3z4OYScS9Axo-aPQ0o2g-lkyfoz8Y-fHeQSLXwD2jMzdu-FArYI8mHNNpu-FVyiIWCYO4-MmzVsNHXlNwVqTmhrO9F25l7qbXKR6M2_XZF93OfdqNSUhAA4J9GPuvfXwDlNa-jlquhgkSvovAjSQ42dbMovYYZh1YI2kHpJzQl7uqSxQnYDWx4pXJeJPJ-mZAYjVE',
    instructor: 'Rehan Qureshi',
    instructorRole: 'Top Daraz Gold Seller',
    totalDuration: '6.5 Hours',
    totalLessons: 28,
    level: 'Beginner to Intermediate',
    language: 'Urdu',
    keyOutcomes: [
      'Daraz SEO & keyword ranking on search results page 1',
      'Seller Center order processing & packaging guidelines',
      'Participating in Flash Sales & 11.11 / 12.12 campaigns',
      'Building positive reviews and winning the Daraz Buy Box'
    ],
    description: 'Step-by-step masterclass on how to launch and scale on Daraz Pakistan with zero initial ad spend using organic marketplace algorithms.',
    modules: [
      {
        id: 'dz-m1',
        moduleNumber: 1,
        title: 'Daraz Algorithm & Organic Ranking',
        subtitle: '4 Lessons · Listing SEO',
        lessons: [
          { id: 'dz-l1', title: 'Keyword optimization in product titles & descriptions', duration: '18:30', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'persuasive-copywriting',
    code: 'C013',
    title: 'Persuasive Copywriting',
    shortTitle: 'Copywriting',
    tagline: 'Write high-converting ads, landing pages, emails, and video sales scripts that sell.',
    category: 'freelance',
    categoryLabel: 'Freelancing & AI',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1Uksu912FcbfPn9WXerC9tYTDzPM9_cpUSpsikDtTLAtYhynHRJ6Z-R7iWvPKvh_ZfOSS5OsWjGeiH82T-SwLGtuyT2pe15lzBjndU5VYIr2KchviD7B6MWSSWs3Cnvo4bggXnSSujcJrby8jSpD0_G-OXRUdxdUBzrxT9U378d00CJM-5QUQvvxJhfAcbhwgmtwLUjgzJApSAYta37M1SOHjoekwQsE_9yvtLXettjwOzTZk5zNpdwyBQ',
    instructor: 'Waqas Javed',
    instructorRole: 'Direct Response Copywriter',
    totalDuration: '7.2 Hours',
    totalLessons: 30,
    level: 'All Levels',
    language: 'Urdu / English examples',
    keyOutcomes: [
      'PAS & AIDA frameworks applied to social media ads',
      'High-converting landing page headline formulas',
      'Email marketing sequences that generate 30% of store revenue',
      'Writing cold outreach messages that get responses on LinkedIn'
    ],
    description: 'Copywriting is the multiplier skill behind every 7-figure marketer. Learn how to trigger human buying emotions and write words that make people pull out their wallets.',
    modules: [
      {
        id: 'cw-m1',
        moduleNumber: 1,
        title: 'Psychology of Buying Decisions',
        subtitle: '5 Lessons · Emotional Triggers',
        lessons: [
          { id: 'cw-l1', title: 'The 7 universal buying desires and how to tap them', duration: '22:10', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'chatgpt-ai',
    code: 'C014',
    title: 'ChatGPT-4 & AI Automations',
    shortTitle: 'ChatGPT-4 Mastery',
    tagline: 'Supercharge productivity, client workflows, prompt engineering, and business automation.',
    category: 'ai',
    categoryLabel: 'Freelancing & AI',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1VVXYx-iLI18isW-SSDY01RR72rtTqGwBCg-uWyTY3WjHiqFvrsxKqerlGOKSLHGO6Rpvq5bDB7RE0rIVRaBbz7xEIj4-Z0NRYbo41KQiVcZtSM8KjsJY2DhgH-RLdBJ898EFDCogbwxcD56viYuhFVnW1xjQJk1m8qeXNZmB-Bfl_S8zrWxjzmEE3Pdw9KwdlowopV-mM6CGI2uWdNx3zFRaAdG2glXppflG1508BbCoAfZRNFsHuJd78',
    instructor: 'Fahad Mustafa',
    instructorRole: 'AI Automation Consultant',
    totalDuration: '6 Hours',
    totalLessons: 27,
    level: 'All Levels',
    language: 'Urdu',
    keyOutcomes: [
      'Prompt engineering frameworks for 10x faster output',
      'Building custom GPTs for specific business workflows',
      'Automating customer support and lead qualification',
      'Creating AI-assisted content at scale'
    ],
    description: 'AI will not replace you, but someone using AI will. Learn to integrate ChatGPT-4, Claude, Midjourney, and Make.com into your daily freelancing and business operations.',
    modules: [
      {
        id: 'ai-m1',
        moduleNumber: 1,
        title: 'Advanced Prompting Frameworks',
        subtitle: '4 Lessons · Chain of Thought',
        lessons: [
          { id: 'ai-l1', title: 'Persona-based prompting for marketing & sales', duration: '17:40', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'stock-exchange',
    code: 'C015',
    title: 'Stock Exchange Trading',
    shortTitle: 'Stock Exchange',
    tagline: 'Fundamentals of local PSX equity markets and dividend portfolio building for passive wealth.',
    category: 'finance',
    categoryLabel: 'Financial Markets',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1VOIGt9xVbVT8lUTj2gLn_xzVrHzKRt4V_ikIEx3csIaCJ2F3-qyrC6jw58M7Ifjv8g3Wqewk_C0cSqoGduofp_ko7b8oyazCtskuuSYkZ3GmZhMiAhWFm1GOtNf4624q0RYwnGnlyEstLny58SETVM3-Cpzt3TgHVZv8Eqq2ct2kMJEwMhMEUmY5yrk3kKU11LzCqpz3GLiE35WHDYXGCJd-800OcRmz_84CHfD1MbcweEJbaOxVwg1ck',
    instructor: 'Nasir Iqbal',
    instructorRole: 'SECP Certified PSX Trader',
    totalDuration: '8.1 Hours',
    totalLessons: 34,
    level: 'Beginner to Intermediate',
    language: 'Urdu',
    keyOutcomes: [
      'How to open a CDC account & CDC sub-account in Pakistan',
      'Analyzing PSX annual reports, P/E ratios, and dividend yields',
      'Blue chip stock selection for consistent passive dividend income',
      'Technical charting & breakout trading on PSX 100 Index'
    ],
    description: 'Learn safe, regulated stock investing in the Pakistan Stock Exchange (PSX). Build an inflation-beating dividend portfolio with high-yield Pakistani companies.',
    modules: [
      {
        id: 'psx-m1',
        moduleNumber: 1,
        title: 'PSX Account Setup & Regulation',
        subtitle: '4 Lessons · CDC & Brokers',
        lessons: [
          { id: 'psx-l1', title: 'Selecting a reliable SECP-licensed broker & avoiding scams', duration: '21:30', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'fiverr-freelancing',
    code: 'C017',
    title: 'Fiverr Freelancing Blueprint',
    shortTitle: 'Fiverr Freelancing',
    tagline: 'Rank gig algorithms, buyer conversation techniques, and land top foreign clients for USD income.',
    category: 'freelance',
    categoryLabel: 'Freelancing & AI',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1VRf54ZeN8ol5N6uJzg1R3dywFyvhfY43o1Wb_q6eu3T4YLdmWokc4J65qb1K1ajkMhUrDWtGmU_WrwM1MqqgPl4xqSHKe9U6VpegfMe3yueBrJFd8Oxw_xpWdLMB2CTDi1gHVfwbQhNDoQ84d6o8mG-n82Wv9oQ6eZKZ2mdRN_I2k2HGQ2BlkwdOOXgWiEld8RzJ_9QKbP3u2R8FnpkC4eqQsl-oMXr5hHJJDsF0TmfmyQ7O3yk7Zz0g',
    instructor: 'Arslan Farooq',
    instructorRole: 'Top-Rated Seller on Fiverr ($150k+ Earned)',
    totalDuration: '9 Hours',
    totalLessons: 37,
    level: 'All Levels',
    language: 'Urdu',
    keyOutcomes: [
      'Low-competition gig research strategies with high buyer demand',
      'SEO optimized gig title, description, and thumbnail creation',
      'Buyer request & client communication etiquette for 5-star ratings',
      'Withdrawing money to Payoneer & Pakistani local banks'
    ],
    description: 'Start earning in US Dollars from home. Master the Fiverr search algorithm, create gigs that convert clicks into orders, and become a Top-Rated Freelancer in under 6 months.',
    modules: [
      {
        id: 'fiv-m1',
        moduleNumber: 1,
        title: 'Fiverr Algorithm & Keyword Placement',
        subtitle: '5 Lessons · First Page Ranking',
        lessons: [
          { id: 'fiv-l1', title: 'Finding keyword golden nuggets with under 1,000 competing gigs', duration: '24:00', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'upwork-agency',
    code: 'C018',
    title: 'Upwork Agency & High-Ticket Clients',
    shortTitle: 'Upwork Agency',
    tagline: 'Land $1,000–$5,000 monthly retainer clients on Upwork with proven proposal scripts.',
    category: 'freelance',
    categoryLabel: 'Freelancing & AI',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1V0YrBQWZInTeFbRDegqFmsqIsX7WNo7yKPwWhGE5co__-BnyevB8pBjvOGTi3sMyPiBRq5cK4q5pPY3wC7lihq6rtj8iEe9CbZ2RgECCsU8x3kke84EAOimTSydZHkSB2W7qB4TA4GKt3EcTLLxzcYuIFvNayGc7oP2V1977OEDX8b-9ADW8w0UxIySAiW0x3XPvDi0oqWjau2lct5YsK7Q0wrRV9t_joKEj7LBqpseZvTxitpZ8e_9S4',
    instructor: 'Bilal Khan',
    instructorRole: 'Upwork Top-Rated Plus Agency Owner',
    totalDuration: '7.5 Hours',
    totalLessons: 31,
    level: 'Intermediate to Advanced',
    language: 'Urdu',
    keyOutcomes: [
      'Writing video proposals via Loom that get 60%+ response rates',
      'Structuring monthly recurring retainer contracts',
      'Setting up an Upwork Agency profile to subcontract work',
      'Negotiating high hourly rates ($35–$75/hr)'
    ],
    description: 'Escape the $5 race to the bottom. Position yourself as a specialized consultant on Upwork and close high-ticket American and European businesses on long-term monthly retainers.',
    modules: [
      {
        id: 'up-m1',
        moduleNumber: 1,
        title: 'High-Ticket Profile Positioning',
        subtitle: '4 Lessons · Consultative Selling',
        lessons: [
          { id: 'up-l1', title: 'The headline and bio formula that commands $50+/hr', duration: '21:00', type: 'video' }
        ]
      }
    ]
  }
];
