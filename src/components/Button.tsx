import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'outline' | 'light';

type Props = {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-600 text-sm tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-60 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-500 text-ink-900 shadow-glow hover:bg-brand-400 hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-ink-700 hover:text-ink-900 hover:bg-ink-50',
  outline:
    'border border-ink-200 text-ink-800 hover:border-ink-900 hover:bg-ink-900 hover:text-white hover:-translate-y-0.5',
  light:
    'bg-white text-ink-900 hover:bg-brand-400 hover:-translate-y-0.5 shadow-card',
};

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...rest
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
