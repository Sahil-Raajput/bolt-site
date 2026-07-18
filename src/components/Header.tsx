import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ink-100 bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(12,16,20,0.12)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Logo className={scrolled ? 'text-ink-900' : 'text-white'} />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-500 transition-colors duration-300 ${
                scrolled
                  ? 'text-ink-600 hover:text-ink-900 hover:bg-ink-50'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className={`text-sm font-500 transition-colors ${
              scrolled ? 'text-ink-600 hover:text-ink-900' : 'text-white/80 hover:text-white'
            }`}
          >
            Login
          </a>
          <Button href="#contact" variant={scrolled ? 'primary' : 'light'} className="px-5 py-2.5">
            Book a call
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`grid h-10 w-10 place-items-center rounded-xl md:hidden ${
            scrolled ? 'text-ink-900 hover:bg-ink-50' : 'text-white hover:bg-white/10'
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden border-t border-ink-100 bg-white transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-500 text-ink-700 hover:bg-ink-50"
            >
              {item.label}
            </a>
          ))}
          <Button href="#contact" variant="primary" className="mt-2 w-full py-3" onClick={() => setOpen(false)}>
            Book a call
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </nav>
      </div>
    </header>
  );
}
