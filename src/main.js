/* =====================================================================
   MonkeyReach — vanilla JS
   ===================================================================== */

/* ---------- Data ---------- */
const CASES = [
  {
    brand: 'Lumen Skincare',
    category: 'DTC Beauty',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '5.8x',
    metricLabel: 'ROAS in 90 days',
    blurb: 'Rebuilt the paid social funnel and scaled Meta spend 4x without blowing efficiency.',
    overlay: 'linear-gradient(to top, rgba(180,83,9,.85), rgba(217,119,6,.4), transparent)',
  },
  {
    brand: 'Northwind Bikes',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '+318%',
    metricLabel: 'Organic traffic',
    blurb: 'Programmatic SEO + content engine that ranks for 2,400 buyer-intent terms.',
    overlay: 'linear-gradient(to top, rgba(4,120,87,.85), rgba(5,150,105,.4), transparent)',
  },
  {
    brand: 'Apex SaaS',
    category: 'B2B Software',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '−42%',
    metricLabel: 'CAC reduction',
    blurb: 'Tightened LinkedIn paid + landing page overhaul cut cost-per-lead nearly in half.',
    overlay: 'linear-gradient(to top, rgba(42,50,60,.9), rgba(42,50,60,.4), transparent)',
  },
  {
    brand: 'Bloom & Co',
    category: 'Subscription',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '2.3x',
    metricLabel: 'LTV in 6 months',
    blurb: 'Email + lifecycle automation that turned one-time buyers into repeat revenue.',
    overlay: 'linear-gradient(to top, rgba(251,191,36,.85), rgba(52,211,153,.4), transparent)',
  },
  {
    brand: 'Forge Fitness',
    category: 'Local + DTC',
    image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '+187%',
    metricLabel: 'Lead volume',
    blurb: 'Google Ads + local SEO combo that filled 3 new studio locations in a quarter.',
    overlay: 'linear-gradient(to top, rgba(52,211,153,.85), rgba(245,158,11,.4), transparent)',
  },
  {
    brand: 'Atlas Travel',
    category: 'Marketplace',
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
    metric: '4.1x',
    metricLabel: 'Return on ad spend',
    blurb: 'Full-funnel paid + retargeting rebuild across Google, Meta and TikTok.',
    overlay: 'linear-gradient(to top, rgba(245,158,11,.85), rgba(28,35,43,.4), transparent)',
  },
];

const REVIEWS = [
  {
    quote:
      "MonkeyReach rebuilt our entire paid funnel in three weeks and ROAS went from 1.8x to 4.6x. They're the first agency that actually talked about revenue, not likes.",
    name: 'Sarah Lindqvist',
    role: 'CMO, Lumen Skincare',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      "Our organic traffic was flat for two years. Six months with the MonkeyReach team and we're up 218% — ranking for terms I didn't think were possible.",
    name: 'David Chen',
    role: 'Founder, Northwind Bikes',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      "They cut our CAC by 42% in one quarter. The level of rigor around testing and attribution is unlike any agency we've worked with. Worth every penny.",
    name: 'Priya Raman',
    role: 'VP Growth, Apex SaaS',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      "What I love is they tell me when something isn't working. No fluff, no excuses — just clear next steps. Our LTV has nearly doubled since we started.",
    name: 'Marcus Webb',
    role: 'CEO, Bloom & Co',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      "We filled three new studio locations in a quarter thanks to their local + paid combo. The reporting is so clear I finally understand where my money goes.",
    name: 'Elena Foster',
    role: 'Owner, Forge Fitness',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      "Full-funnel rebuild across Google, Meta and TikTok. ROAS hit 4.1x within two months. These folks genuinely care about the business, not just the ad account.",
    name: 'Tom Alvarez',
    role: 'Head of Marketing, Atlas Travel',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
];

const STAR_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
const TREND_SVG =
  '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M3 17l6-6 4 4 8-8" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 7h4v4" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* ---------- Render: work carousel ---------- */
function renderCases() {
  const track = document.getElementById('marquee-track');
  if (!track) return;
  const loop = [...CASES, ...CASES];
  track.innerHTML = loop
    .map(
      (c) => `
      <article class="case-card">
        <div class="case-media">
          <img src="${c.image}" alt="${c.brand}" loading="lazy" />
          <div class="case-overlay" style="background:${c.overlay}"></div>
          <div class="case-category">${c.category}</div>
          <div class="case-metric"><p class="num">${c.metric}</p><p class="lbl">${c.metricLabel}</p></div>
        </div>
        <div class="case-body">
          <div class="case-head">
            <h3 class="case-brand">${c.brand}</h3>
            <svg viewBox="0 0 24 24" class="ico case-arrow" aria-hidden="true"><path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
          </div>
          <p class="case-blurb">${c.blurb}</p>
          <div class="case-badge">${TREND_SVG} Verified result</div>
        </div>
      </article>`
    )
    .join('');
}

/* ---------- Render: reviews ---------- */
function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;
  grid.innerHTML = REVIEWS.map(
    (r) => `
    <figure class="reveal review-card">
      <div class="review-stars">${STAR_SVG.repeat(r.rating)}</div>
      <blockquote class="review-quote">"${r.quote}"</blockquote>
      <figcaption class="review-author">
        <img src="${r.avatar}" alt="${r.name}" loading="lazy" />
        <div><p class="review-name">${r.name}</p><p class="review-role">${r.role}</p></div>
      </figcaption>
    </figure>`
  ).join('');

  const stars = document.getElementById('rating-stars');
  if (stars) stars.innerHTML = STAR_SVG.repeat(5);
}

/* ---------- Scroll progress + sticky header ---------- */
function initScroll() {
  const bar = document.getElementById('progress-bar');
  const header = document.getElementById('site-header');
  const onScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    if (bar) bar.style.width = `${max > 0 ? (doc.scrollTop / max) * 100 : 0}%`;
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Mobile menu ---------- */
function initMenu() {
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

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const els = Array.from(document.querySelectorAll('.reveal'));
  if (!('IntersectionObserver' in window) || els.length === 0) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.getAttribute('data-delay');
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add('is-visible');
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  els.forEach((el) => io.observe(el));
}

/* ---------- Newsletter (no-op prevent) ---------- */
function initNews() {
  const form = document.getElementById('news-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('news-email');
    const btn = form.querySelector('button[type="submit"]');
    if (!input || !btn) return;
    btn.textContent = 'Subscribed ✓';
    input.value = '';
    setTimeout(() => (btn.textContent = 'Subscribe'), 2500);
  });
}

/* ---------- Footer year ---------- */
function initYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = `© ${new Date().getFullYear()} MonkeyReach. All rights reserved.`;
}

/* ---------- Boot ---------- */
function boot() {
  renderCases();
  renderReviews();
  initScroll();
  initMenu();
  initReveal();
  initNews();
  initYear();
}

document.addEventListener('DOMContentLoaded', boot);
