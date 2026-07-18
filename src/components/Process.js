import { icon } from '../lib/icons.js';
import { PROCESS } from '../data/content.js';

export const html = /* html */ `
  <section id="process" class="section section-dark">
    <div class="section-dark-bg" aria-hidden="true"></div>
    <div class="section-dark-glow g1" aria-hidden="true"></div>
    <div class="section-dark-glow g2" aria-hidden="true"></div>

    <div class="container">
      <div class="reveal section-dark-head">
        <p class="eyebrow eyebrow-brand-dark">How we work</p>
        <h2 class="section-title section-title-light">How we bring results.</h2>
        <p class="section-lead section-lead-light">
          No black boxes. No 90-page strategy decks that collect dust. Just four steps that turn
          ad spend and content into revenue you can forecast.
        </p>
      </div>

      <ol class="process-grid">
        ${PROCESS.map(
    (s, i) => /* html */ `
          <li class="reveal process-step" data-delay="${i * 90}">
            <div class="process-step-top">
              <span class="process-num">${s.n}</span>
              <span class="process-icon">${icon(s.icon, '')}</span>
            </div>
            <h3 class="process-title">${s.title}</h3>
            <p class="process-desc">${s.desc}</p>
            <span class="process-dur">${s.duration}</span>
          </li>`
  ).join('')}
      </ol>
    </div>
  </section>
`;
