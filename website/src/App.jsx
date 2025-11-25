import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hero from './components/Hero';
import Keyboards from './components/Keyboards';
import Mice from './components/Mice';
import Details from './components/Details';
import Marquee from './components/Marquee';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className='bg-[#111] font-sans text-white'>
      <AnimatePresence mode='wait'>
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/headsets" element={
              <>
                <Hero />
                <div className="relative z-10 bg-[#0a0a0a]">
                  <Marquee />
                  <Details />
                </div>
              </>
            } />
            <Route path="/keyboards" element={<Keyboards />} />
            <Route path="/mice" element={<Mice />} />

          </Routes>
        </>
      )}
    </main>
  );
}

export default App;