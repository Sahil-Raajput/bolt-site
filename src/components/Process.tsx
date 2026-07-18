import { Search, PencilRuler, Rocket, LineChart } from 'lucide-react';

const STEPS = [
  {
    n: '01',
    icon: Search,
    title: 'Discover',
    desc: "We audit your funnel, audience, and data in week one. You get a clear, honest map of where revenue is leaking — and where it's waiting to be unlocked.",
    duration: 'Week 1',
  },
  {
    n: '02',
    icon: PencilRuler,
    title: 'Build',
    desc: 'Creative, campaigns, landing pages and tracking go live. Everything is built to be measured, so we know what works the moment the data rolls in.',
    duration: 'Weeks 2–3',
  },
  {
    n: '03',
    icon: Rocket,
    title: 'Scale',
    desc: "We push budget into what's winning and cut what isn't. Weekly experiments find new angles while efficiency holds or improves.",
    duration: 'Ongoing',
  },
  {
    n: '04',
    icon: LineChart,
    title: 'Compound',
    desc: 'Organic and lifecycle efforts stack on top of paid wins. Revenue stops being linear — each month builds on the last.',
    duration: 'Month 3+',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink-950 py-24 text-white lg:py-32">
      <div className="absolute inset-0 grid-noise opacity-50" aria-hidden="true" />
      <div
        className="absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-growth-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-600 uppercase tracking-[0.2em] text-brand-400">How we work</p>
          <h2 className="mt-3 font-display text-3xl font-700 leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            How we bring results.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">
            No black boxes. No 90-page strategy decks that collect dust. Just four steps that turn
            ad spend and content into revenue you can forecast.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="reveal group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06]"
              data-reveal-delay={i * 90}
            >
              {/* Connector */}
              {i < STEPS.length - 1 && (
                <span
                  className="absolute right-0 top-1/2 hidden h-px w-6 translate-x-full bg-gradient-to-r from-white/20 to-transparent lg:block"
                  aria-hidden="true"
                />
              )}

              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-700 text-white/15 transition-colors group-hover:text-brand-400/60">
                  {s.n}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/10 text-brand-400 transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-500/20">
                  <s.icon className="h-5 w-5" />
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-700">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{s.desc}</p>

              <p className="mt-5 inline-flex rounded-full bg-white/5 px-3 py-1 text-xs font-600 uppercase tracking-wider text-white/50">
                {s.duration}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
