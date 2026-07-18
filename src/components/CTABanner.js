import { icon } from '../lib/icons.js';

export const html = /* html */ `
  <section id="contact" class="section section-white cta-section">
    <div class="container">
      <div class="reveal cta-banner">
        <div class="cta-texture" aria-hidden="true"></div>
        <div class="cta-ring cta-ring-1" aria-hidden="true"></div>
        <div class="cta-ring cta-ring-2" aria-hidden="true"></div>
        <div class="cta-inner">
          <div class="cta-copy">
            <p class="cta-eyebrow">Ready when you are</p>
            <h2 class="cta-title">Let's turn your marketing<br />into a revenue engine.</h2>
            <p class="cta-sub">
              Book a free 30-minute growth audit. We'll show you exactly where you're leaving
              money on the table — no pitch, no pressure.
            </p>
          </div>
          <div class="cta-actions">
            <a href="#contact" class="btn btn-dark btn-lg">Book a free growth audit ${icon('arrowUpRight')}</a>
            <a href="tel:+18005550100" class="btn btn-outline-dark btn-lg">${icon('phone')} Talk to us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
