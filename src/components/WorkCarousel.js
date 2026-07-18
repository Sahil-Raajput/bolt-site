import { icon } from '../lib/icons.js';
import { CASES } from '../data/content.js';

function caseCard(c) {
  return /* html */ `
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
          ${icon('arrowUpRight', 'ico case-arrow')}
        </div>
        <p class="case-blurb">${c.blurb}</p>
        <div class="case-badge">${icon('trend')} Verified result</div>
      </div>
    </article>`;
}

export const html = /* html */ `
  <section id="work" class="section section-light">
    <div class="container section-head">
      <div class="reveal">
        <p class="eyebrow eyebrow-brand">Our work</p>
        <h2 class="section-title">Campaigns that paid for themselves.</h2>
      </div>
      <p class="reveal section-lead">
        A snapshot of brands we've scaled across paid and organic. Every number is
        attributable, not estimated.
      </p>
    </div>
    <div class="marquee" id="marquee">
      <div class="marquee-track" id="marquee-track">
        ${[...CASES, ...CASES].map(caseCard).join('')}
      </div>
      <div class="marquee-fade marquee-fade-left"></div>
      <div class="marquee-fade marquee-fade-right"></div>
    </div>
  </section>
`;
