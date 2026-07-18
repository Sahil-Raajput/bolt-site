/* =====================================================================
   MonkeyReach — app entry
   Assembles the section components into #app, then runs each one's
   init() for any interactivity it owns.
   ===================================================================== */

import * as Header from './components/Header.js';
import { html as Hero } from './components/Hero.js';
import { html as Work } from './components/WorkCarousel.js';
import { html as Services } from './components/Services.js';
import { html as Process } from './components/Process.js';
import { html as CTA } from './components/CTABanner.js';
import { html as Founder } from './components/Founder.js';
import { html as Reviews } from './components/Reviews.js';
import * as Footer from './components/Footer.js';
import { initReveal } from './lib/reveal.js';
import { initScrollProgress } from './lib/scroll.js';

function boot() {
  const app = document.getElementById('app');
  if (!app) return;

  // Render the page in document order.
  app.innerHTML = [
    Header.html,
    `<main>${[Hero, Work, Services, Process, CTA, Founder, Reviews].join('')}</main>`,
    Footer.html,
  ].join('');

  // Per-component interactivity.
  Header.init();
  Footer.init();

  // App-wide behaviours.
  initScrollProgress();
  initReveal();
}

document.addEventListener('DOMContentLoaded', boot);
