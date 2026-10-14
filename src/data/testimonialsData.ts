export interface Testimonial {
  id: string;
  name: string;
  city: string;
  role: string;
  enrolledCourse: string;
  avatarInitial: string;
  avatarBg: string;
  timeAgo: string;
  urduMessage: string;
  englishTranslation?: string;
  proofBadge: string;
  badgeType: 'revenue' | 'orders' | 'client' | 'feedback';
  rating: number;
}

export const STUDENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 't0-gilgit',
    name: 'Kashif Ali',
    city: 'Gilgit',
    role: 'Shopify Store Owner',
    enrolledCourse: 'TikTok Ads + COD Logistics',
    avatarInitial: 'K',
    avatarBg: 'bg-orange-600',
    timeAgo: 'Just now',
    urduMessage: '“Main Gilgit se apna e-commerce brand run kar raha hoon. EcomSkills ke TikTok Ads module seekhnay ke baad Gilgit me beth kar daily poore Pakistan me 25 to 30 confirmed COD parcels deliver ho rahay hain! Mentors on WhatsApp (+92 355 5317704) are extremely cooperative.”',
    englishTranslation: 'Running my e-commerce brand from Gilgit. After learning the TikTok Ads module, shipping 25-30 confirmed COD orders daily across Pakistan!',
    proofBadge: 'Daily Orders: 28+ Parcels',
    badgeType: 'orders',
    rating: 5
  },
  {
    id: 't1',
    name: 'Hamza Tariq',
    city: 'Lahore',
    role: 'Store Owner',
    enrolledCourse: 'TikTok Ads + Shopify',
    avatarInitial: 'H',
    avatarBg: 'bg-emerald-600',
    timeAgo: 'Yesterday 11:42 PM',
    urduMessage: '“Sir, Alhamdulillah! TikTok campaign launch kiye huay 4 days huay hain aur daily 18 to 22 confirmed Cash on Delivery orders aa rahay hain! CBO formula really worked like magic. JazakAllah for this bundle!”',
    englishTranslation: 'Alhamdulillah, 4 days after launching the TikTok campaign, we are getting 18-22 confirmed COD orders daily! The CBO scaling formula worked like magic.',
    proofBadge: 'Daily Revenue: PKR 48,000+',
    badgeType: 'revenue',
    rating: 5
  },
  {
    id: 't2',
    name: 'Maryam Farooq',
    city: 'Karachi',
    role: 'Freelancer on Upwork',
    enrolledCourse: 'TikTok Ads Mastery',
    avatarInitial: 'M',
    avatarBg: 'bg-orange-600',
    timeAgo: 'Monday 4:15 PM',
    urduMessage: '“Landed my very first direct international client from Dubai for TikTok Media Buying! Closed at $650 retainership. Course ka Agency Account setup module was life-saving.”',
    englishTranslation: 'Landed my first international client from Dubai for TikTok Media Buying! Closed at $650 monthly retainership.',
    proofBadge: '$650 / Month Retainer',
    badgeType: 'client',
    rating: 5
  },
  {
    id: 't3',
    name: 'Zeeshan Malik',
    city: 'Rawalpindi',
    role: 'TikTok Ads Batch 2026',
    enrolledCourse: 'All-Access 15+ Bundle',
    avatarInitial: 'Z',
    avatarBg: 'bg-amber-600',
    timeAgo: '3 Days Ago',
    urduMessage: '“Bhai Rs. 5,000 me itna content koi nahi deta! Mentor support replies within 20 minutes whenever TikTok pixel gives issues. 10/10 recommended!”',
    englishTranslation: 'Nobody provides this much value for Rs. 5,000! Mentor support replies within 20 minutes whenever pixel gives issues.',
    proofBadge: '5.0 Star Feedback',
    badgeType: 'feedback',
    rating: 5
  },
  {
    id: 't4',
    name: 'Ali Raza',
    city: 'Lahore',
    role: 'E-commerce Brand Owner',
    enrolledCourse: 'TikTok Ads & Shopify',
    avatarInitial: 'A',
    avatarBg: 'bg-blue-600',
    timeAgo: '12:01 PM',
    urduMessage: '“EcomSkills has been a complete game changer for me. The TikTok Ads section alone helped me cut costs by 30% while increasing store orders! Just hit 180 parcels today.”',
    englishTranslation: 'Cut customer acquisition cost by 30% and shipped 180 parcels in a single day.',
    proofBadge: 'Daily Profit: PKR 24,500',
    badgeType: 'revenue',
    rating: 5
  },
  {
    id: 't5',
    name: 'Fatima Zahra',
    city: 'Karachi',
    role: 'Freelancer & Editor',
    enrolledCourse: 'Video Editing + TikTok',
    avatarInitial: 'F',
    avatarBg: 'bg-purple-600',
    timeAgo: '11:27 AM',
    urduMessage: '“Congratulations on hitting $5k! That was my dream milestone. Started freelancing video editing alongside TikTok Ads, already closed 2 international clients from UK.”',
    englishTranslation: 'Closed 2 international UK clients for TikTok creative editing.',
    proofBadge: 'Upwork Top-Rated Badge',
    badgeType: 'client',
    rating: 5
  },
  {
    id: 't6',
    name: 'Bilawal Khan',
    city: 'Peshawar',
    role: 'Daraz Gold Seller',
    enrolledCourse: 'Daraz + TikTok Bundle',
    avatarInitial: 'B',
    avatarBg: 'bg-teal-600',
    timeAgo: '02:40 PM',
    urduMessage: '“Main pehlay sirf Daraz par depend tha, lekin TikTok Spark Ads seekhnay ke baad direct website se weekly 300+ orders nikaal raha hoon! Trax COD integration guide was perfect.”',
    englishTranslation: 'Was dependent only on Daraz, but after learning TikTok Spark Ads, now pulling 300+ direct website orders weekly.',
    proofBadge: 'Weekly Orders: 320+ Parcels',
    badgeType: 'orders',
    rating: 5
  }
];
