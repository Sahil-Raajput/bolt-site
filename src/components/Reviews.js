import { icon } from '../lib/icons.js';
import { REVIEWS } from '../data/content.js';

function card(r) {
  return /* html */ `
    <figure class="reveal review-card">
      <div class="review-stars">${icon('star', '').repeat(r.rating)}</div>
      <blockquote class="review-quote">"${r.quote}"</blockquote>
      <figcaption class="review-author">
        <img src="${r.avatar}" alt="${r.name}" loading="lazy" />
        <div><p class="review-name">${r.name}</p><p class="review-role">${r.role}</p></div>
      </figcaption>
    </figure>`;
}

export const html = /* html */ `
  <section id="reviews" class="section section-white">
    <div class="container section-head">
      <div class="reveal">
        <p class="eyebrow eyebrow-brand">Client reviews</p>
        <h2 class="section-title">Founders who'd hire us again.</h2>
      </div>
      <div class="reveal rating-badge">
        <div class="rating-stars">${icon('star', '').repeat(5)}</div>
        <div><p class="rating-val">4.9 / 5</p><p class="rating-sub">from 120+ verified clients</p></div>
      </div>
    </div>
    <div class="container reviews-grid">
      ${REVIEWS.map(card).join('')}
    </div>
  </section>
`;
