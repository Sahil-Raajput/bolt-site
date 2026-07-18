import { Star } from 'lucide-react';

type Review = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
};

const REVIEWS: Review[] = [
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
      'Our organic traffic was flat for two years. Six months with the MonkeyReach team and we\'re up 218% — ranking for terms I didn\'t think were possible.',
    name: 'David Chen',
    role: 'Founder, Northwind Bikes',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      'They cut our CAC by 42% in one quarter. The level of rigor around testing and attribution is unlike any agency we\'ve worked with. Worth every penny.',
    name: 'Priya Raman',
    role: 'VP Growth, Apex SaaS',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      'What I love is they tell me when something isn\'t working. No fluff, no excuses — just clear next steps. Our LTV has nearly doubled since we started.',
    name: 'Marcus Webb',
    role: 'CEO, Bloom & Co',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      'We filled three new studio locations in a quarter thanks to their local + paid combo. The reporting is so clear I finally understand where my money goes.',
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

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="reveal flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
      <div className="flex gap-1">
        {Array.from({ length: r.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-brand-400 text-brand-400" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
        "{r.quote}"
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
        <img
          src={r.avatar}
          alt={r.name}
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover ring-2 ring-white"
        />
        <div>
          <p className="font-600 text-sm text-ink-900">{r.name}</p>
          <p className="text-xs text-ink-400">{r.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-600 uppercase tracking-[0.2em] text-brand-600">
              Client reviews
            </p>
            <h2 className="mt-3 font-display text-3xl font-700 leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Founders who'd hire us again.
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-ink-50 px-5 py-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand-400 text-brand-400" />
              ))}
            </div>
            <div>
              <p className="font-display text-lg font-700 text-ink-900">4.9 / 5</p>
              <p className="text-xs text-ink-400">from 120+ verified clients</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
