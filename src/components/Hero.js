import { icon } from '../lib/icons.js';
import { HERO_STATS } from '../data/content.js';

export const html = /* html */ `
  <section id="top" class="hero">
    <div class="hero-bg" aria-hidden="true"></div>
    <div class="hero-glow hero-glow-1" aria-hidden="true"></div>
    <div class="hero-glow hero-glow-2" aria-hidden="true"></div>

    <div class="container hero-grid">
      <div class="hero-copy">
        <div class="reveal pill">
          <span class="ping"><span class="ping-dot"></span></span>
          Now accepting 4 new clients for Q3 2026
        </div>

        <h1 class="reveal hero-title" data-delay="80">
          Digital marketing that<br />
          actually <span class="shimmer">moves the needle.</span>
        </h1>

        <p class="reveal hero-sub" data-delay="160">
          We're MonkeyReach — a performance studio blending paid acquisition and organic growth
          into one engine. No vanity metrics. Just revenue you can take to the bank.
        </p>

        <div class="reveal hero-cta" data-delay="240">
          <a href="#contact" class="btn btn-primary btn-lg">Get a free growth audit ${icon('arrowUpRight')}</a>
          <a href="#work" class="btn btn-ghost-lg btn-lg">${icon('play')} See our work</a>
        </div>

        <dl class="reveal stats" data-delay="320">
          ${HERO_STATS.map(
    (s) => `<div class="stat"><dt>${s.value}</dt><dd>${s.label}</dd></div>`
  ).join('')}
        </dl>
      </div>

      <div class="reveal hero-visual" data-delay="200">
        <div class="dashboard">
          <div class="float-card float-card-1">
            <span class="float-ico ico-growth">${icon('trend', '')}</span>
            <div><p class="float-label">Conversions / mo</p><p class="float-value">+212%</p></div>
          </div>
          <div class="float-card float-card-2">
            <span class="float-ico ico-brand">${icon('users', '')}</span>
            <div><p class="float-label">Qualified leads</p><p class="float-value">3,840</p></div>
          </div>

          <div class="dash-card">
            <div class="dash-top">
              <div class="dash-dots"><span></span><span></span><span></span></div>
              <div class="dash-live">${icon('barChart')} live dashboard</div>
            </div>
            <p class="dash-cap">Revenue attribution</p>
            <div class="dash-revenue">
              <p class="dash-amount">$1.24M</p>
              <span class="dash-trend">${icon('trend')} 38.4%</span>
            </div>
            <div class="dash-chart">
              <svg viewBox="0 0 320 120" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#FBBF24" stop-opacity="0.5" />
                    <stop offset="100%" stop-color="#FBBF24" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#34D399" />
                    <stop offset="100%" stop-color="#FBBF24" />
                  </linearGradient>
                </defs>
                <path d="M0,100 L40,88 L80,92 L120,70 L160,76 L200,52 L240,58 L280,30 L320,18 L320,120 L0,120 Z" fill="url(#heroArea)" />
                <path d="M0,100 L40,88 L80,92 L120,70 L160,76 L200,52 L240,58 L280,30 L320,18" fill="none" stroke="url(#heroLine)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="dash-channels">
              <div class="ch"><p class="ch-k">Paid</p><p class="ch-v ch-brand">$612K</p></div>
              <div class="ch"><p class="ch-k">Organic</p><p class="ch-v ch-growth">$488K</p></div>
              <div class="ch"><p class="ch-k">Email</p><p class="ch-v ch-white">$140K</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
