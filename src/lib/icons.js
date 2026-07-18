/* Reusable inline SVG icons. Each entry is the inner markup of a 24x24 icon.
 * icon(name, cls) wraps it in an <svg> with the given class (default "ico").
 * Stroke icons carry their own stroke="currentColor"; fill icons carry fill="currentColor".
 */
const PATHS = {
  arrowUpRight:
    '<path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  play: '<path d="M8 5v14l11-7z" fill="currentColor"/>',
  trend:
    '<path d="M3 17l6-6 4 4 8-8" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 7h4v4" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  barChart:
    '<path d="M3 3v18h18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M7 14l4-4 3 3 5-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  target:
    '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>',
  penLine:
    '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  megaphone: '<path d="M3 11l10-8v5h8v6h-8v5z" fill="currentColor"/>',
  search:
    '<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" fill="none"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  zap: '<path d="M13 2L3 14h7l-1 8 10-12h-7z" fill="currentColor"/>',
  share2:
    '<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  mail:
    '<path d="M4 4h16v16H4z" stroke="currentColor" stroke-width="2" fill="none"/><path d="M4 6l8 6 8-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>',
  check:
    '<path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  phone:
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  mapPin:
    '<path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="2" fill="none"/>',
  twitter:
    '<path d="M22 5.8a8.3 8.3 0 0 1-2.36.65A4.1 4.1 0 0 0 21.4 4a8.2 8.2 0 0 1-2.6 1A4.1 4.1 0 0 0 12 8.7a11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.47A4.07 4.07 0 0 1 3 9.3v.05a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.07a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.67-6.25 11.67-11.67v-.53A8.18 8.18 0 0 0 22 5.8z" fill="currentColor"/>',
  linkedin:
    '<path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.5 4.73-2.5 5.06 0 6 3.33 6 7.66V24h-5v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24H8z" fill="currentColor"/>',
  instagram:
    '<rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>',
  star:
    '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>',
  quote:
    '<path d="M9 11H5a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h0a1 1 0 0 1 1 1v6zM20 11h-4a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h0a1 1 0 0 1 1 1v6z" fill="currentColor" opacity=".25"/><path d="M7 17V11a4 4 0 0 1 4-4M17 17V11a4 4 0 0 1 4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>',
};

export function icon(name, cls = 'ico') {
  const inner = PATHS[name];
  if (!inner) return '';
  return `<svg viewBox="0 0 24 24" class="${cls}" aria-hidden="true">${inner}</svg>`;
}

/** Monkey glyph for the logo mark (uses a 64x64 viewBox). */
export const MONKEY_MARK =
  '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M20 42c0-8 5.4-13 12-13s12 5 12 13" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/><circle cx="26" cy="26" r="3" fill="currentColor"/><circle cx="38" cy="26" r="3" fill="currentColor"/><path d="M16 16c2-4 6-6 10-5M48 16c-2-4-6-6-10-5" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></svg>';
