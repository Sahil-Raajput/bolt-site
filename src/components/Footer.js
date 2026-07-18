import { icon, MONKEY_MARK } from '../lib/icons.js';
import { FOOTER_COLS } from '../data/content.js';

const SOCIALS = [
  { icon: 'twitter', label: 'Twitter' },
  { icon: 'linkedin', label: 'LinkedIn' },
  { icon: 'instagram', label: 'Instagram' },
];

export const html = /* html */ `
  <footer class="footer">
    <div class="footer-bg" aria-hidden="true"></div>
    <div class="container footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="#top" class="logo logo-light" aria-label="MonkeyReach home">
            <span class="logo-mark logo-mark-light">${MONKEY_MARK}</span>
            <span class="logo-text logo-text-light">Monkey<span class="logo-accent">Reach</span></span>
          </a>
          <p class="footer-blurb">
            A performance-driven digital marketing studio. We blend paid and organic into one
            engine built to move revenue — not impressions.
          </p>
          <div class="footer-contact">
            <a href="mailto:hello@monkeyreach.com">${icon('mail')} hello@monkeyreach.com</a>
            <a href="tel:+18005550100">${icon('phone')} +1 (800) 555-0100</a>
            <p>${icon('mapPin')} Austin, TX · Remote-first</p>
          </div>
          <div class="footer-social">
            ${SOCIALS.map((s) => `<a href="#" aria-label="${s.label}">${icon(s.icon, '')}</a>`).join('')}
          </div>
        </div>

        <div class="footer-news">
          <h3 class="footer-news-title">Get the growth memo</h3>
          <p class="footer-news-sub">
            One practical marketing breakdown every other week. No fluff, no sales pitches.
            Unsubscribe anytime.
          </p>
          <form class="news-form" id="news-form">
            <input type="email" id="news-email" placeholder="you@company.com" required />
            <button type="submit" class="btn btn-primary">Subscribe ${icon('arrowUpRight')}</button>
          </form>
          <p class="news-note">Join 8,400+ founders and marketers reading.</p>
        </div>
      </div>

      <div class="footer-cols">
        ${FOOTER_COLS.map(
    (col) => /* html */ `
          <div>
            <p class="footer-col-title">${col.title}</p>
            <ul>${col.links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
          </div>`
  ).join('')}
      </div>

      <div class="footer-bottom">
        <p id="footer-year"></p>
        <div class="footer-legal"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
      </div>
    </div>
  </footer>
`;

/* Newsletter form (front-end only) + copyright year. */
export function init() {
  const form = document.getElementById('news-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('news-email');
      const btn = form.querySelector('button[type="submit"]');
      if (!input || !btn) return;
      btn.innerHTML = 'Subscribed ✓';
      input.value = '';
      setTimeout(() => (btn.innerHTML = 'Subscribe ' + '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'), 2500);
    });
  }
  const year = document.getElementById('footer-year');
  if (year) year.textContent = `© ${new Date().getFullYear()} MonkeyReach. All rights reserved.`;
}
