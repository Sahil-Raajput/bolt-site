/* Top-of-page scroll progress bar. */
export function initScrollProgress() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  const onScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    bar.style.width = `${max > 0 ? (doc.scrollTop / max) * 100 : 0}%`;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
