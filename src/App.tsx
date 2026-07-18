import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkCarousel from './components/WorkCarousel';
import Services from './components/Services';
import Process from './components/Process';
import CTABanner from './components/CTABanner';
import Founder from './components/Founder';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-brand-400 via-brand-500 to-growth-500 transition-[width] duration-150"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <WorkCarousel />
        <Services />
        <Process />
        <CTABanner />
        <Founder />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
