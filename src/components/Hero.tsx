import { ArrowUpRight, Play, TrendingUp, BarChart3, Users } from 'lucide-react';
import Button from './Button';

const STATS = [
  { value: '4.2x', label: 'Avg. ROAS' },
  { value: '180+', label: 'Brands scaled' },
  { value: '$48M', label: 'Revenue driven' },
  { value: '7yr', label: 'In the trenches' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-950 text-white">
      {/* Background layers */}
      <div className="absolute inset-0 grid-noise opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-[360px] w-[460px] rounded-full bg-growth-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-16 pb-24 pt-32 md:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32">
        {/* Left: copy */}
        <div className="max-w-2xl">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-500 tracking-wide text-white/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-growth-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-growth-400" />
            </span>
            Now accepting 4 new clients for Q3 2026
          </div>

          <h1
            className="reveal mt-6 font-display text-4xl font-700 leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            data-reveal-delay="80"
          >
            Digital marketing that
            <br />
            actually <span className="shimmer-text animate-shimmer">moves the needle.</span>
          </h1>

          <p
            className="reveal mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            data-reveal-delay="160"
          >
            We're MonkeyReach — a performance studio blending paid acquisition and organic growth
            into one engine. No vanity metrics. Just revenue you can take to the bank.
          </p>

          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row" data-reveal-delay="240">
            <Button href="#contact" variant="primary" className="px-7 py-3.5 text-base">
              Get a free growth audit
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              href="#work"
              variant="outline"
              className="border-white/20 text-white hover:border-white hover:bg-white hover:text-ink-900 px-7 py-3.5 text-base"
            >
              <Play className="h-4 w-4" />
              See our work
            </Button>
          </div>

          {/* Stats */}
          <dl className="reveal mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4" data-reveal-delay="320">
            {STATS.map((s) => (
              <div key={s.label} className="bg-ink-900/40 px-5 py-5 backdrop-blur">
                <dt className="font-display text-2xl font-700 text-brand-400">{s.value}</dt>
                <dd className="mt-1 text-xs font-500 uppercase tracking-wider text-white/50">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: dashboard mockup */}
        <div className="reveal relative lg:pl-4" data-reveal-delay="200">
          <div className="relative mx-auto max-w-md">
            {/* Floating accent cards */}
            <div className="absolute -left-6 top-16 z-20 hidden animate-float rounded-2xl border border-white/10 bg-ink-800/90 p-3 shadow-card-dark backdrop-blur sm:block">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-growth-500/15 text-growth-400">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-white/50">Conversions / mo</p>
                  <p className="font-display text-sm font-700 text-white">+212%</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -right-4 bottom-24 z-20 hidden animate-float rounded-2xl border border-white/10 bg-ink-800/90 p-3 shadow-card-dark backdrop-blur sm:block"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500/15 text-brand-400">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-white/50">Qualified leads</p>
                  <p className="font-display text-sm font-700 text-white">3,840</p>
                </div>
              </div>
            </div>

            {/* Main dashboard card */}
            <div className="relative z-10 rounded-3xl border border-white/10 bg-gradient-to-b from-ink-800/90 to-ink-900/90 p-5 shadow-card-dark backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-brand-400/80" />
                  <span className="h-3 w-3 rounded-full bg-growth-400/80" />
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/50">
                  <BarChart3 className="h-3.5 w-3.5" /> live dashboard
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs text-white/50">Revenue attribution</p>
                <div className="mt-1 flex items-end justify-between">
                  <p className="font-display text-3xl font-700 text-white">$1.24M</p>
                  <span className="inline-flex items-center gap-1 rounded-full bg-growth-500/15 px-2 py-0.5 text-xs font-600 text-growth-300">
                    <TrendingUp className="h-3 w-3" /> 38.4%
                  </span>
                </div>
              </div>

              {/* Chart */}
              <div className="mt-5 h-32 w-full">
                <svg viewBox="0 0 320 120" className="h-full w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#34D399" />
                      <stop offset="100%" stopColor="#FBBF24" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,100 L40,88 L80,92 L120,70 L160,76 L200,52 L240,58 L280,30 L320,18 L320,120 L0,120 Z"
                    fill="url(#heroArea)"
                  />
                  <path
                    d="M0,100 L40,88 L80,92 L120,70 L160,76 L200,52 L240,58 L280,30 L320,18"
                    fill="none"
                    stroke="url(#heroLine)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Mini channels */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { k: 'Paid', v: '$612K', c: 'text-brand-400' },
                  { k: 'Organic', v: '$488K', c: 'text-growth-400' },
                  { k: 'Email', v: '$140K', c: 'text-white' },
                ].map((m) => (
                  <div key={m.k} className="rounded-xl bg-white/5 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-white/40">{m.k}</p>
                    <p className={`mt-0.5 font-display text-sm font-700 ${m.c}`}>{m.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
