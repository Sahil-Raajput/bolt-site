import { icon } from '../lib/icons.js';
import { SERVICES } from '../data/content.js';

function serviceCard(s) {
  const cls = s.reverse ? 'service-card service-card-reverse' : 'service-card';
  const body = /* html */ `
    <div class="service-body">
      <div class="service-head">
        <span class="service-icon service-icon-${s.accent}">${icon(s.icon, '')}</span>
        <span class="service-tag">${s.tag}</span>
      </div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-sub">${s.subtitle}</p>
      <ul class="service-bullets">
        ${s.bullets.map((b) => `<li><span class="check check-${s.accent}"></span>${b}</li>`).join('')}
      </ul>
      <div class="service-tags">
        ${s.tags.map((t) => `<span>${icon(t.icon)}${t.label}</span>`).join('')}
      </div>
      <a href="#contact" class="service-link service-link-${s.accent}">
        Explore ${s.tag.split(' — ')[1]} ${icon('arrowUpRight')}
      </a>
    </div>`;

  const media = /* html */ `
    <div class="service-media service-media-${s.accent}">
      <img src="${s.image}" alt="${s.tag}" loading="lazy" />
      <div class="service-overlay" style="background:${s.mediaTint}"></div>
      <div class="service-overlay-card">
        <p>${s.overlay}</p>
        <p class="service-overlay-value">${s.outcome}</p>
      </div>
    </div>`;

  return /* html */ `<article id="${s.id}" class="reveal ${cls}">${s.reverse ? media + body : body + media}</article>`;
}

export const html = /* html */ `
  <section id="services" class="section section-white">
    <div class="container section-center">
      <p class="reveal eyebrow eyebrow-brand">What we do</p>
      <h2 class="reveal section-title" data-delay="60">Two engines. One growth machine.</h2>
      <p class="reveal section-lead section-lead-center" data-delay="120">
        Paid gets you revenue today. Organic builds the asset that funds tomorrow. We run both —
        and we make them talk to each other.
      </p>
    </div>
    <div class="container services-stack">
      ${SERVICES.map(serviceCard).join('')}
    </div>
  </section>
`;
