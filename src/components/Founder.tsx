import { Quote } from 'lucide-react';

export default function Founder() {
  return (
    <section className="relative overflow-hidden bg-ink-50 py-24 lg:py-32">
      <div className="container-x">
        <div className="reveal grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Portrait */}
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-brand-400/40" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Maya Okafor, Founder & CEO of MonkeyReach"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-display text-lg font-700 text-white">Maya Okafor</p>
                <p className="text-sm text-white/70">Founder & CEO, MonkeyReach</p>
              </div>
            </div>
          </div>

          {/* Words */}
          <div>
            <Quote className="h-10 w-10 text-brand-400" />
            <blockquote className="mt-6 font-display text-2xl font-500 leading-snug tracking-tight text-ink-900 sm:text-3xl lg:text-[2rem] lg:leading-[1.3]">
              <span className="text-brand-500">"</span>
              I started MonkeyReach after watching too many brands pour money into agencies that
              reported on impressions instead of revenue. We do the opposite. We treat your budget
              like it's ours, we measure what actually moves the business, and we'd rather tell you
              the hard truth than sell you a pretty chart.
              <span className="text-brand-500">"</span>
            </blockquote>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ink-200 pt-6">
              <div>
                <p className="font-display text-2xl font-700 text-ink-900">7+ yrs</p>
                <p className="text-xs uppercase tracking-wider text-ink-400">Building brands</p>
              </div>
              <div>
                <p className="font-display text-2xl font-700 text-ink-900">$48M+</p>
                <p className="text-xs uppercase tracking-wider text-ink-400">Revenue driven</p>
              </div>
              <div>
                <p className="font-display text-2xl font-700 text-ink-900">180+</p>
                <p className="text-xs uppercase tracking-wider text-ink-400">Founders served</p>
              </div>
              <a
                href="#contact"
                className="ml-auto inline-flex items-center gap-1.5 text-sm font-600 text-brand-600 hover:text-brand-700"
              >
                Read Maya's story →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
