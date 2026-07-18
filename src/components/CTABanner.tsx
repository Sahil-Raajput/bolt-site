import { ArrowUpRight, Phone } from 'lucide-react';
import Button from './Button';

export default function CTABanner() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-500 to-brand-600 px-6 py-14 shadow-glow sm:px-12 lg:px-16 lg:py-20">
          {/* Texture */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(12,16,20,0.25) 0, transparent 40%)',
            }}
            aria-hidden="true"
          />
          {/* Floating circles */}
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/20" aria-hidden="true" />
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/20" aria-hidden="true" />

          <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-600 uppercase tracking-[0.2em] text-ink-900/70">
                Ready when you are
              </p>
              <h2 className="mt-3 font-display text-3xl font-700 leading-[1.1] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
                Let's turn your marketing
                <br className="hidden sm:block" /> into a revenue engine.
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-900/80">
                Book a free 30-minute growth audit. We'll show you exactly where you're leaving
                money on the table — no pitch, no pressure.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
              <Button
                href="#contact"
                variant="light"
                className="w-full justify-center bg-ink-900 text-white px-7 py-4 text-base hover:bg-ink-800 hover:bg-white sm:w-auto"
              >
                Book a free growth audit
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <a
                href="tel:+18005550100"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink-900/20 px-7 py-4 text-base font-600 text-ink-900 transition-colors hover:bg-ink-900/10 sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
