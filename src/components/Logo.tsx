type Props = {
  className?: string;
  mark?: string;
};

/** MonkeyReach wordmark + monkey glyph. */
export default function Logo({ className = '', mark = 'text-brand-400' }: Props) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="MonkeyReach home">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink-900 ring-1 ring-white/10 transition-transform duration-300 group-hover:-rotate-6">
        <svg viewBox="0 0 64 64" className="h-6 w-6" fill="none" aria-hidden="true">
          <path d="M20 42c0-8 5.4-13 12-13s12 5 12 13" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" className={mark} />
          <circle cx="26" cy="26" r="3" fill="currentColor" className={mark} />
          <circle cx="38" cy="26" r="3" fill="currentColor" className={mark} />
          <path d="M16 16c2-4 6-6 10-5M48 16c-2-4-6-6-10-5" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" className={mark} />
        </svg>
      </span>
      <span className="font-display text-lg font-700 tracking-tight">
        Monkey<span className="text-brand-500">Reach</span>
      </span>
    </a>
  );
}
