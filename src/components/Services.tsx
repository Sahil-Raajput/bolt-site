import {
  Target,
  Megaphone,
  Search,
  PenLine,
  Share2,
  BarChart3,
  Mail,
  Zap,
  Check,
  ArrowUpRight,
} from 'lucide-react';

type Service = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  icon: typeof Target;
  accent: 'brand' | 'growth';
  image: string;
  bullets: string[];
  sub: { icon: typeof Search; label: string }[];
};

const SERVICES: Service[] = [
  {
    id: 'paid',
    tag: '01 — Paid Marketing',
    title: 'Buy attention. Convert it into revenue.',
    subtitle:
      'Full-funnel paid acquisition across the platforms where your customers actually buy. We obsess over efficiency so every dollar works harder than the last.',
    icon: Target,
    accent: 'brand',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=900',
    bullets: [
      'Meta, Google, TikTok & LinkedIn ads managed end-to-end',
      'Creative testing engine that finds winners in days, not months',
      'Daily budget pacing + weekly efficiency reviews',
      'Server-side tracking & attribution you can trust',
    ],
    sub: [
      { icon: Megaphone, label: 'Paid Social' },
      { icon: Search, label: 'Search & Shopping' },
      { icon: Zap, label: 'Creative Production' },
      { icon: BarChart3, label: 'Analytics & Attribution' },
    ],
  },
  {
    id: 'organic',
    tag: '02 — Organic Marketing',
    title: 'Build an asset that compounds while you sleep.',
    subtitle:
      "SEO, content and social that turn your brand into the obvious answer. Organic is slower to start but it's the cheapest revenue you'll ever earn — and it keeps paying.",
    icon: PenLine,
    accent: 'growth',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=900',
    bullets: [
      'Programmatic SEO targeting hundreds of buyer-intent terms',
      'Content engine with editors, designers and distribution built-in',
      'Social presence that builds brand equity, not just followers',
      'Technical SEO, Core Web Vitals & site architecture audits',
    ],
    sub: [
      { icon: Search, label: 'SEO Strategy' },
      { icon: PenLine, label: 'Content Engine' },
      { icon: Share2, label: 'Social & Brand' },
      { icon: Mail, label: 'Email & Lifecycle' },
    ],
  },
];

function ServiceCard({ s }: { s: Service }) {
  const isBrand = s.accent === 'brand';
  return (
    <article
      id={s.id}
      className="reveal group relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card transition-all duration-500 hover:shadow-glow"
    >
      <div className="grid md:grid-cols-[1.1fr_0.9fr]">
        {/* Left: content */}
        <div className="p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <span
              className={`grid h-11 w-11 place-items-center rounded-xl ${
                isBrand ? 'bg-brand-500/10 text-brand-600' : 'bg-growth-500/10 text-growth-600'
              }`}
            >
              <s.icon className="h-5 w-5" />
            </span>
            <span className="text-xs font-600 uppercase tracking-[0.18em] text-ink-400">
              {s.tag}
            </span>
          </div>

          <h3 className="mt-6 font-display text-2xl font-700 leading-tight tracking-tight text-ink-900 sm:text-3xl">
            {s.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink-500">{s.subtitle}</p>

          <ul className="mt-6 space-y-3">
            {s.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-ink-700">
                <span
                  className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                    isBrand ? 'bg-brand-500/15 text-brand-600' : 'bg-growth-500/15 text-growth-600'
                  }`}
                >
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          {/* Sub-disciplines */}
          <div className="mt-8 flex flex-wrap gap-2">
            {s.sub.map((x) => (
              <span
                key={x.label}
                className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-ink-50 px-3.5 py-1.5 text-xs font-600 text-ink-600 transition-colors hover:border-ink-200 hover:bg-white"
              >
                <x.icon className="h-3.5 w-3.5" />
                {x.label}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className={`mt-8 inline-flex items-center gap-1.5 text-sm font-600 transition-colors ${
              isBrand ? 'text-brand-600 hover:text-brand-700' : 'text-growth-600 hover:text-growth-700'
            }`}
          >
            Explore {s.tag.split(' — ')[1]}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Right: image with overlay stat */}
        <div className="relative min-h-[280px] overflow-hidden md:min-h-full">
          <img
            src={s.image}
            alt={s.tag}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 ${
              isBrand
                ? 'bg-gradient-to-tr from-brand-700/80 via-brand-600/40 to-transparent'
                : 'bg-gradient-to-tr from-growth-700/80 via-growth-600/40 to-transparent'
            }`}
          />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-xs font-500 uppercase tracking-wider text-white/70">
                {isBrand ? 'Average client outcome' : 'Compounding outcome'}
              </p>
              <p className="mt-1 font-display text-2xl font-700">
                {isBrand ? '4.2x return on ad spend' : '+218% organic traffic in 6 mo'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-600 uppercase tracking-[0.2em] text-brand-600">What we do</p>
          <h2 className="mt-3 font-display text-3xl font-700 leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Two engines. One growth machine.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Paid gets you revenue today. Organic builds the asset that funds tomorrow. We run both —
            and we make them talk to each other.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
