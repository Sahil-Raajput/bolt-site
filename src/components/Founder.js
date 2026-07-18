import { icon } from '../lib/icons.js';
import { FOUNDER } from '../data/content.js';

export const html = /* html */ `
  <section class="section section-light founder-section">
    <div class="container founder-grid">
      <div class="reveal founder-portrait">
        <div class="portrait-frame" aria-hidden="true"></div>
        <div class="portrait-img">
          <img src="${FOUNDER.image}" alt="${FOUNDER.name}, ${FOUNDER.role}" loading="lazy" />
          <div class="portrait-caption">
            <p class="portrait-name">${FOUNDER.name}</p>
            <p class="portrait-role">${FOUNDER.role}</p>
          </div>
        </div>
      </div>
      <div class="reveal founder-words">
        ${icon('quote', 'quote-mark')}
        <blockquote class="founder-quote">
          <span class="q-mark">"</span>${FOUNDER.quote}<span class="q-mark">"</span>
        </blockquote>
        <div class="founder-stats">
          ${FOUNDER.stats
            .map(
              (s) => `<div><p class="fs-val">${s.value}</p><p class="fs-lbl">${s.label}</p></div>`
            )
            .join('')}
          <a href="#contact" class="founder-link">Read Maya's story →</a>
        </div>
      </div>
    </div>
  </section>
`;
