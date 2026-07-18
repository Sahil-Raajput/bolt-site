import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const COLS = [
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
];

const SOCIALS = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 grid-noise opacity-40" aria-hidden="true" />

      <div className="container-x relative">
        {/* Top: brand + newsletter */}
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.3fr_1fr] lg:py-20">
          <div className="max-w-md">
            <Logo className="text-white" />
            <p className="mt-5 text-base leading-relaxed text-white/60">
              A performance-driven digital marketing studio. We blend paid and organic into one
              engine built to move revenue — not impressions.
            </p>

            <div className="mt-7 space-y-3 text-sm">
              <a href="mailto:hello@monkeyreach.com" className="flex items-center gap-3 text-white/70 transition-colors hover:text-brand-400">
                <Mail className="h-4 w-4 text-brand-400" /> hello@monkeyreach.com
              </a>
              <a href="tel:+18005550100" className="flex items-center gap-3 text-white/70 transition-colors hover:text-brand-400">
                <Phone className="h-4 w-4 text-brand-400" /> +1 (800) 555-0100
              </a>
              <p className="flex items-center gap-3 text-white/70">
                <MapPin className="h-4 w-4 text-brand-400" /> Austin, TX · Remote-first
              </p>
            </div>

            <div className="mt-7 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-brand-400"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:pl-8">
            <h3 className="font-display text-xl font-700">Get the growth memo</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              One practical marketing breakdown every other week. No fluff, no sales pitches.
              Unsubscribe anytime.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-brand-400/60 focus:bg-white/10"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-500 px-5 py-3 text-sm font-600 text-ink-900 transition-all hover:-translate-y-0.5 hover:bg-brand-400"
              >
                Subscribe
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-3 text-xs text-white/40">
              Join 8,400+ founders and marketers reading.
            </p>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {COLS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-600 uppercase tracking-[0.18em] text-white/40">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/70 transition-colors hover:text-brand-400"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} MonkeyReach. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
