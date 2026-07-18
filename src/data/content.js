/* All section content lives here so components stay presentational.
 * Update copy, metrics, images, and reviews from this one file.
 */

export const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
];

export const HERO_STATS = [
  { value: '4.2x', label: 'Avg. ROAS' },
  { value: '180+', label: 'Brands scaled' },
  { value: '$48M', label: 'Revenue driven' },
  { value: '7yr', label: 'In the trenches' },
];

export const SERVICES = [
  {
    id: 'paid',
    tag: '01 — Paid Marketing',
    title: 'Buy attention. Convert it into revenue.',
    subtitle:
      'Full-funnel paid acquisition across the platforms where your customers actually buy. We obsess over efficiency so every dollar works harder than the last.',
    icon: 'target',
    accent: 'brand',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=900',
    bullets: [
      'Meta, Google, TikTok & LinkedIn ads managed end-to-end',
      'Creative testing engine that finds winners in days, not months',
      'Daily budget pacing + weekly efficiency reviews',
      'Server-side tracking & attribution you can trust',
    ],
    tags: [
      { icon: 'megaphone', label: 'Paid Social' },
      { icon: 'search', label: 'Search & Shopping' },
      { icon: 'zap', label: 'Creative Production' },
      { icon: 'barChart', label: 'Analytics & Attribution' },
    ],
    overlay: 'Average client outcome',
    outcome: '4.2x return on ad spend',
    mediaTint: 'linear-gradient(to top right, rgba(180,83,9,.8), rgba(217,119,6,.4), transparent)',
    reverse: false,
  },
  {
    id: 'organic',
    tag: '02 — Organic Marketing',
    title: 'Build an asset that compounds while you sleep.',
    subtitle:
      "SEO, content and social that turn your brand into the obvious answer. Organic is slower to start but it's the cheapest revenue you'll ever earn — and it keeps paying.",
    icon: 'penLine',
    accent: 'growth',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=900',
    bullets: [
      'Programmatic SEO targeting hundreds of buyer-intent terms',
      'Content engine with editors, designers and distribution built-in',
      'Social presence that builds brand equity, not just followers',
      'Technical SEO, Core Web Vitals & site architecture audits',
    ],
    tags: [
      { icon: 'search', label: 'SEO Strategy' },
      { icon: 'penLine', label: 'Content Engine' },
      { icon: 'share2', label: 'Social & Brand' },
      { icon: 'mail', label: 'Email & Lifecycle' },
    ],
    overlay: 'Compounding outcome',
    outcome: '+218% organic traffic in 6 mo',
    mediaTint: 'linear-gradient(to top right, rgba(4,120,87,.8), rgba(5,150,105,.4), transparent)',
    reverse: true,
  },
];

export const PROCESS = [
  {
    n: '01',
    icon: 'search',
    title: 'Discover',
    desc: "We audit your funnel, audience, and data in week one. You get a clear, honest map of where revenue is leaking — and where it's waiting to be unlocked.",
    duration: 'Week 1',
  },
  {
    n: '02',
    icon: 'penLine',
    title: 'Build',
    desc: 'Creative, campaigns, landing pages and tracking go live. Everything is built to be measured, so we know what works the moment the data rolls in.',
    duration: 'Weeks 2–3',
  },
  {
    n: '03',
    icon: 'trend',
    title: 'Scale',
    desc: "We push budget into what's winning and cut what isn't. Weekly experiments find new angles while efficiency holds or improves.",
    duration: 'Ongoing',
  },
  {
    n: '04',
    icon: 'barChart',
    title: 'Compound',
    desc: 'Organic and lifecycle efforts stack on top of paid wins. Revenue stops being linear — each month builds on the last.',
    duration: 'Month 3+',
  },
];

export const CASES = [
  {
    brand: 'Lumen Skincare',
    category: 'DTC Beauty',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '5.8x',
    metricLabel: 'ROAS in 90 days',
    blurb: 'Rebuilt the paid social funnel and scaled Meta spend 4x without blowing efficiency.',
    overlay: 'linear-gradient(to top, rgba(180,83,9,.85), rgba(217,119,6,.4), transparent)',
  },
  {
    brand: 'Northwind Bikes',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '+318%',
    metricLabel: 'Organic traffic',
    blurb: 'Programmatic SEO + content engine that ranks for 2,400 buyer-intent terms.',
    overlay: 'linear-gradient(to top, rgba(4,120,87,.85), rgba(5,150,105,.4), transparent)',
  },
  {
    brand: 'Apex SaaS',
    category: 'B2B Software',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '−42%',
    metricLabel: 'CAC reduction',
    blurb: 'Tightened LinkedIn paid + landing page overhaul cut cost-per-lead nearly in half.',
    overlay: 'linear-gradient(to top, rgba(42,50,60,.9), rgba(42,50,60,.4), transparent)',
  },
  {
    brand: 'Bloom & Co',
    category: 'Subscription',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '2.3x',
    metricLabel: 'LTV in 6 months',
    blurb: 'Email + lifecycle automation that turned one-time buyers into repeat revenue.',
    overlay: 'linear-gradient(to top, rgba(251,191,36,.85), rgba(52,211,153,.4), transparent)',
  },
  {
    brand: 'Forge Fitness',
    category: 'Local + DTC',
    image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '+187%',
    metricLabel: 'Lead volume',
    blurb: 'Google Ads + local SEO combo that filled 3 new studio locations in a quarter.',
    overlay: 'linear-gradient(to top, rgba(52,211,153,.85), rgba(245,158,11,.4), transparent)',
  },
  {
    brand: 'Atlas Travel',
    category: 'Marketplace',
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '4.1x',
    metricLabel: 'Return on ad spend',
    blurb: 'Full-funnel paid + retargeting rebuild across Google, Meta and TikTok.',
    overlay: 'linear-gradient(to top, rgba(245,158,11,.85), rgba(28,35,43,.4), transparent)',
  },
];

export const REVIEWS = [
  {
    quote:
      "MonkeyReach rebuilt our entire paid funnel in three weeks and ROAS went from 1.8x to 4.6x. They're the first agency that actually talked about revenue, not likes.",
    name: 'Sarah Lindqvist',
    role: 'CMO, Lumen Skincare',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      "Our organic traffic was flat for two years. Six months with the MonkeyReach team and we're up 218% — ranking for terms I didn't think were possible.",
    name: 'David Chen',
    role: 'Founder, Northwind Bikes',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      "They cut our CAC by 42% in one quarter. The level of rigor around testing and attribution is unlike any agency we've worked with. Worth every penny.",
    name: 'Priya Raman',
    role: 'VP Growth, Apex SaaS',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      "What I love is they tell me when something isn't working. No fluff, no excuses — just clear next steps. Our LTV has nearly doubled since we started.",
    name: 'Marcus Webb',
    role: 'CEO, Bloom & Co',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      "We filled three new studio locations in a quarter thanks to their local + paid combo. The reporting is so clear I finally understand where my money goes.",
    name: 'Elena Foster',
    role: 'Owner, Forge Fitness',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      'Full-funnel rebuild across Google, Meta and TikTok. ROAS hit 4.1x within two months. These folks genuinely care about the business, not just the ad account.',
    name: 'Tom Alvarez',
    role: 'Head of Marketing, Atlas Travel',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
];

export const FOUNDER = {
  name: 'Maya Okafor',
  role: 'Founder & CEO, MonkeyReach',
  image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800',
  quote:
    "I started MonkeyReach after watching too many brands pour money into agencies that reported on impressions instead of revenue. We do the opposite. We treat your budget like it's ours, we measure what actually moves the business, and we'd rather tell you the hard truth than sell you a pretty chart.",
  stats: [
    { value: '7+ yrs', label: 'Building brands' },
    { value: '$48M+', label: 'Revenue driven' },
    { value: '180+', label: 'Founders served' },
  ],
};

export const FOOTER_COLS = [
  {
    title: 'Services',
    links: [
      { label: 'Paid Marketing', href: '#paid' },
      { label: 'Organic Marketing', href: '#organic' },
      { label: 'SEO & Content', href: '#organic' },
      { label: 'Email & Lifecycle', href: '#organic' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Work', href: '#work' },
      { label: 'Process', href: '#process' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Book a call', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Growth audit', href: '#contact' },
      { label: 'Case studies', href: '#work' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
];
