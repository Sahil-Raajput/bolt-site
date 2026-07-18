import { icon, MONKEY_MARK } from '../lib/icons.js';
import { NAV } from '../data/content.js';

export const html = /* html */ `
  <div class="scroll-progress" aria-hidden="true"><span id="progress-bar"></span></div>
  <header id="site-header" class="header">
    <div class="container header-inner">
      <a href="#top" class="logo" aria-label="MonkeyReach home">
        <span class="logo-mark">${MONKEY_MARK}</span>
        <span class="logo-text">Monkey<span class="logo-accent">Reach</span></span>
      </a>
      <nav class="nav-desktop" aria-label="Primary">
        ${NAV.map((n) => `<a href="${n.href}">${n.label}</a>`).join('')}
      </nav>
      <div class="nav-cta">
        <a href="#contact" class="link-muted">Login</a>
        <a href="#contact" class="btn btn-primary">Book a call ${icon('arrowUpRight')}</a>
      </div>
      <button id="menu-btn" class="menu-btn" aria-label="Toggle menu" aria-expanded="false">
        <span class="menu-bar"></span><span class="menu-bar"></span>
      </button>
    </div>
    <div id="mobile-drawer" class="mobile-drawer" aria-hidden="true">
      <nav class="container mobile-nav">
        ${NAV.map((n) => `<a href="${n.href}">${n.label}</a>`).join('')}
        <a href="#contact" class="btn btn-primary btn-block">Book a call ${icon('arrowUpRight')}</a>
      </nav>
    </div>
  </header>
`;

/* Sticky-header frosted state on scroll + mobile menu toggle. */
export function init() {
  const header = document.getElementById('site-header');
  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const btn = document.getElementById('menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (!btn || !drawer) return;
  const toggle = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    drawer.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  btn.addEventListener('click', () => toggle(!drawer.classList.contains('open')));
  drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggle(false)));
}
