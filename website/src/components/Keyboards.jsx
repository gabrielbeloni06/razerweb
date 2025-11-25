import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import keyboardBlack from '../assets/keyboard.png';
import keyboardWhite from '../assets/tecladob.png';
import keyboardGold from '../assets/tecladoc.png';
import setupImg from '../assets/teclado.png'; 

const themes = [
  { 
    id: 1, 
    name: "Green", 
    color: "#282828ff", 
    accent: "bg-razer-green",
    image: keyboardBlack
  },
  { 
    id: 2, 
    name: "Quartz", 
    color: "#bfbfbfff", 
    accent: "bg-pink-400",
    image: keyboardWhite
  },
  { 
    id: 3, 
    name: "Mercury", 
    color: "#ffbc1fff", 
    accent: "bg-gray-200",
    image: keyboardGold
  }
];

const Keyboards = () => {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 1000], [0, 100]);
  const yImg = useTransform(scrollY, [0, 1000], [0, -50]);
  const rotateImg = useTransform(scrollY, [0, 1000], [-12, 0]);
  const yCard = useTransform(scrollY, [500, 1500], [100, -100]);
  const opacitySection2 = useTransform(scrollY, [500, 800], [0, 1]);

  return (
    <div className="w-full bg-black overflow-x-hidden">
      <div className="w-full min-h-screen flex flex-col md:flex-row relative z-10">
        <div className="w-full md:w-1/2 h-screen flex flex-col justify-center px-12 md:px-24 z-10 bg-black relative">
          <motion.div 
            className={`absolute top-0 right-0 w-32 h-full opacity-20 blur-3xl transform skew-x-12 translate-x-16 transition-colors duration-700 ${currentTheme.accent}`} 
          />
          
          <motion.div style={{ y: yText }}>
            <motion.h4 
              className="font-bold tracking-widest mb-4 transition-colors duration-500"
              style={{ color: currentTheme.color }}
            >
              MECHANICAL PRECISION
            </motion.h4>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase leading-none">
              Huntsman<br/>
            </h1>
            <p className="text-gray-400 max-w-md mb-8 text-lg">
              Sinta a diferença. Switches mecânicos projetados para a execução tátil e sonora definitiva em jogos.
            </p>
            
            <div className="flex gap-4 mb-10">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setCurrentTheme(theme)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${currentTheme.id === theme.id ? 'border-white scale-125' : 'border-transparent opacity-50 hover:opacity-100'}`}
                  style={{ backgroundColor: theme.color }}
                />
              ))}
            </div>

            <button 
              className="px-8 py-3 rounded font-bold border transition-all duration-300 hover:text-black"
              style={{ borderColor: currentTheme.color, color: currentTheme.color, backgroundColor: 'transparent' }}
              onMouseEnter={(e) => { e.target.style.backgroundColor = currentTheme.color; e.target.style.color = 'black'; }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = currentTheme.color; }}
            >
              CUSTOMIZE
            </button>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 h-screen bg-[#111] relative flex items-center justify-center overflow-hidden">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[600px] h-[600px] border border-white/5 rounded-full border-dashed"
          />
          
          <motion.div
             style={{ y: yImg, rotate: rotateImg }}
             className="relative z-10 w-[80%]"
          >
             <AnimatePresence mode="wait">
               <motion.img 
                 key={currentTheme.id}
                 src={currentTheme.image}
                 alt="Keyboard"
                 initial={{ opacity: 0, scale: 0.8, x: 50 }}
                 animate={{ opacity: 1, scale: 1, x: 0 }}
                 exit={{ opacity: 0, scale: 0.8, x: -50 }}
                 transition={{ type: "spring", stiffness: 200, damping: 20 }}
                 className="w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                 style={{ filter: `drop-shadow(0 0 30px ${currentTheme.color}40)` }}
               />
             </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <motion.section 
        style={{ opacity: opacitySection2 }}
        className="min-h-screen relative z-20 bg-black flex items-center justify-center py-20 overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="order-2 md:order-1">
             <motion.h2 
               initial={{ x: -100, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="text-5xl md:text-7xl font-black text-white mb-6 uppercase"
             >
               Ultimate <span style={{ color: currentTheme.color }} className="transition-colors duration-500">Control</span>
             </motion.h2>
             <motion.p 
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-gray-400 text-xl leading-relaxed border-l-4 pl-6"
               style={{ borderColor: currentTheme.color }}
             >
               Experimente a iluminação Razer Chroma RGB mais imersiva de todas. Com underglow em todos os lados e teclas individualmente iluminadas.
             </motion.p>
           </div>
           <motion.div 
             style={{ y: yCard }}
             className="order-1 md:order-2 perspective-1000"
           >
             <motion.div
               className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
               whileHover={{ rotateY: -10, rotateX: 10, scale: 1.05 }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
             >
               <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 ${currentTheme.accent}`} />
               <img 
                 src={setupImg} 
                 alt="Immersion" 
                 className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
               
               <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white">FEITO PARA VENCER</h3>
               </div>
             </motion.div>
           </motion.div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 to-black z-0 pointer-events-none" />
      </motion.section>
      <section className="min-h-screen relative z-20 bg-[#050505] flex flex-col items-center justify-center py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-12 uppercase"
          >
            Assista ao <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Review</span>
          </motion.h2>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1.5 }}
            className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden border-2 shadow-[0_0_100px_rgba(0,0,0,0.5)] group"
            style={{ borderColor: currentTheme.color }}
          >
            <div 
              className="absolute inset-0 blur-[100px] opacity-20 -z-10 transition-colors duration-700"
              style={{ backgroundColor: currentTheme.color }}
            />

            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/qv-dBMg-_pU?autoplay=0&controls=1&rel=0" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>

          <div className="mt-16 flex justify-center">
            <button 
              className="px-12 py-5 font-black text-xl rounded-full text-black transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
              style={{ backgroundColor: currentTheme.color, boxShadow: `0 0 20px ${currentTheme.color}60` }}
            >
              COMPRAR AGORA
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Keyboards;