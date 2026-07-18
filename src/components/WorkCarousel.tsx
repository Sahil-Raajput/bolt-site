import { TrendingUp, ArrowUpRight } from 'lucide-react';

type Case = {
  brand: string;
  category: string;
  image: string;
  metric: string;
  metricLabel: string;
  blurb: string;
  accent: string;
};

const CASES: Case[] = [
  {
    brand: 'Lumen Skincare',
    category: 'DTC Beauty',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '5.8x',
    metricLabel: 'ROAS in 90 days',
    blurb: 'Rebuilt the paid social funnel and scaled Meta spend 4x without blowing efficiency.',
    accent: 'from-brand-500/80 to-brand-700/80',
  },
  {
    brand: 'Northwind Bikes',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '+318%',
    metricLabel: 'Organic traffic',
    blurb: 'Programmatic SEO + content engine that ranks for 2,400 buyer-intent terms.',
    accent: 'from-growth-500/80 to-growth-700/80',
  },
  {
    brand: 'Apex SaaS',
    category: 'B2B Software',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '−42%',
    metricLabel: 'CAC reduction',
    blurb: 'Tightened LinkedIn paid + landing page overhaul cut cost-per-lead nearly in half.',
    accent: 'from-ink-600/80 to-ink-800/80',
  },
  {
    brand: 'Bloom & Co',
    category: 'Subscription',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '2.3x',
    metricLabel: 'LTV in 6 months',
    blurb: 'Email + lifecycle automation that turned one-time buyers into repeat revenue.',
    accent: 'from-brand-400/80 to-growth-500/80',
  },
  {
    brand: 'Forge Fitness',
    category: 'Local + DTC',
    image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '+187%',
    metricLabel: 'Lead volume',
    blurb: 'Google Ads + local SEO combo that filled 3 new studio locations in a quarter.',
    accent: 'from-growth-400/80 to-brand-500/80',
  },
  {
    brand: 'Atlas Travel',
    category: 'Marketplace',
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '4.1x',
    metricLabel: 'Return on ad spend',
    blurb: 'Full-funnel paid + retargeting rebuild across Google, Meta and TikTok.',
    accent: 'from-brand-500/80 to-ink-700/80',
  },
];

function Card({ c }: { c: Case }) {
  return (
    <article className="group relative w-[340px] shrink-0 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card sm:w-[380px]">
      <div className="relative h-52 overflow-hidden">
        <img
          src={c.image}
          alt={c.brand}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${c.accent} opacity-80 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-600 uppercase tracking-wider text-ink-800 backdrop-blur">
          {c.category}
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="font-display text-3xl font-700 leading-none">{c.metric}</p>
          <p className="mt-1 text-xs font-500 text-white/80">{c.metricLabel}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-700 text-ink-900">{c.brand}</h3>
          <ArrowUpRight className="h-4 w-4 text-ink-300 transition-all group-hover:text-brand-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.blurb}</p>
        <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-600 text-growth-600">
          <TrendingUp className="h-3.5 w-3.5" /> Verified result
        </div>
      </div>
    </article>
  );
}

export default function WorkCarousel() {
  const loop = [...CASES, ...CASES];
  return (
    <section id="work" className="bg-ink-50 py-24 lg:py-32">
      <div className="container-x">
        <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-600 uppercase tracking-[0.2em] text-brand-600">Our work</p>
            <h2 className="mt-3 font-display text-3xl font-700 leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Campaigns that paid for themselves.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink-500">
            A snapshot of brands we've scaled across paid and organic. Every number is
            attributable, not estimated.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-50 to-transparent" />
        <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
          {loop.map((c, i) => (
            <Card key={`${c.brand}-${i}`} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
