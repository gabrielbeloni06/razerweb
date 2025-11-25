import React from 'react';
import Hero from './components/Hero';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';

function App() {
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