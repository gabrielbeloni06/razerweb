import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Lenis from 'lenis';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';

function App() {
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
    <main className='bg-[#111] font-sans'>
      <Navbar />
      
      <Hero />
      
      <div className="relative z-10 bg-[#0a0a0a]">
        <Marquee /> 
        <Details />
        
        <footer className="py-12 text-center text-zinc-600 border-t border-zinc-900 bg-black">
          <p className="text-sm">DESIGNED FOR GAMERS. BY GAMERS.</p>
          <p className="text-xs mt-2 opacity-50">© 2025 Razer Clone Concept.</p>
        </footer>
      </div>
    </main>
  );
}

export default App;