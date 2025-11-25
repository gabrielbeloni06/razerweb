import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import mouseBlack from '../assets/mouseb.png';
import mouseYellow from '../assets/mousec.png';
import mouseWhite from '../assets/mouse.png';
import setupImg from '../assets/card.jpg';

const styles = [
  { 
    id: 2, 
    name: "Pro", 
    color: "#5c5c5cff",
    image: mouseBlack,
    size: "h-[400px] md:h-[600px]" 
  },
  { 
    id: 3, 
    name: "Stealth", 
    color: "#eaeaeaff",
    image: mouseWhite,
    size: "h-[150px] md:h-[10px]" 
  },
  { 
    id: 1, 
    name: "Gold", 
    color: "#eab308",
    image: mouseYellow,
    size: "h-[350px] md:h-[550px]" 
  }
];

const Mice = () => {
  const [currentStyle, setCurrentStyle] = useState(styles[0]);
  const { scrollY } = useScroll();
  const yBgText = useTransform(scrollY, [0, 500], [0, 100]);
  const yProduct = useTransform(scrollY, [0, 500], [0, -50]);
  const xCard = useTransform(scrollY, [300, 1000], [100, 0]);
  const opacitySec2 = useTransform(scrollY, [400, 700], [0, 1]);

  return (
    <div className="w-full bg-black overflow-x-hidden">
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        <motion.h1 
          style={{ y: yBgText, color: `${currentStyle.color}10` }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black select-none whitespace-nowrap transition-colors duration-700"
        >
        </motion.h1>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10 px-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-right space-y-12 hidden md:block"
          >
            <div>
              <h3 className="font-bold text-3xl transition-colors duration-500" style={{ color: currentStyle.color }}>35K DPI</h3>
              <p className="text-gray-500">Focus Pro Optical Gen-2</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-3xl">54G</h3>
              <p className="text-gray-500">Ultra-lightweight Design</p>
            </div>
          </motion.div>

          <div className="flex flex-col items-center justify-center">
            <motion.div
              style={{ y: yProduct }}
              className="relative perspective-1000"
            >
               <motion.div 
                  className="absolute inset-0 blur-[80px] opacity-40 animate-pulse transition-colors duration-700"
                  style={{ backgroundColor: currentStyle.color }}
               />
               
               <AnimatePresence mode="wait">
                 <motion.img
                   key={currentStyle.id}
                   src={currentStyle.image} 
                   alt="Mouse"
                   initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                   animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                   exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                   transition={{ type: "spring", duration: 1 }}
                   className="relative z-10 h-[300px] md:h-[500px] w-auto object-contain drop-shadow-2xl"
                 />
               </AnimatePresence>
            </motion.div>

            <div className="flex gap-4 mt-12 backdrop-blur-md bg-white/5 px-6 py-3 rounded-full border border-white/10">
               {styles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setCurrentStyle(style)}
                    className={`w-4 h-4 rounded-full transition-transform duration-300 ${currentStyle.id === style.id ? 'scale-150' : 'hover:scale-125'}`}
                    style={{ backgroundColor: style.color }}
                  />
               ))}
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="space-y-12 hidden md:block"
          >
            <div>
              <h3 className="font-bold text-3xl transition-colors duration-500" style={{ color: currentStyle.color }}>8K HZ</h3>
              <p className="text-gray-500">HyperPolling Wireless</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-3xl">90H</h3>
              <p className="text-gray-500">Battery Life</p>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <span className="text-white/30 text-sm tracking-widest uppercase">Scroll Down</span>
          </motion.div>
        </div>
      </div>
      <section className="min-h-screen relative z-20 bg-[#0a0a0a] flex items-center justify-center py-24 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <motion.div 
             style={{ x: xCard, opacity: opacitySec2 }}
             className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group"
           >
             <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10" />
             <img 
               src={setupImg} 
               alt="Speed" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
             />
             <motion.div 
               className="absolute bottom-8 left-8 z-20"
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
             >
                <h3 className="text-4xl font-black text-white mb-2">ESPORTS EVOLVED</h3>
                <p style={{ color: currentStyle.color }} className="font-mono">FOR THE PROS</p>
             </motion.div>
           </motion.div>
           <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
           >
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-none">
                NOTHING <br/> WEIGHS YOU <span className="transition-colors duration-500" style={{ color: currentStyle.color }}>DOWN</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Criado com os melhores atletas de esports do mundo. O Viper V3 Pro apresenta nosso formato mais refinado, garantindo manuseio e controle impecáveis.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <motion.div 
                      className="h-full rounded-full"
                      style={{ backgroundColor: currentStyle.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.random() * 60 + 40}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                    />
                  </div>
                ))}
              </div>
           </motion.div>
        </div>
      </section>
      <section className="min-h-screen relative z-20 bg-black flex flex-col items-center justify-center py-20">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50" />
        </div>

        <div className="container mx-auto px-6 relative z-10 w-full">
           <div className="flex justify-between items-end mb-10 border-b border-white/10 pb-6">
              <motion.h2 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-white uppercase"
              >
                In <span style={{ color: currentStyle.color }} className="transition-colors duration-500">Action</span>
              </motion.h2>
              <p className="hidden md:block text-gray-500 font-mono text-sm">OFFICIAL TRAILER</p>
           </div>

           <motion.div
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ type: "spring", damping: 20 }}
             className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
           >
             <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/C28fG6aN6bM?autoplay=0&controls=0&rel=0" 
                title="Razer Viper" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors pointer-events-none" />
           </motion.div>

           <div className="mt-20 text-center">
             <h3 className="text-2xl font-bold text-white mb-6">READY TO UPGRADE?</h3>
             <button 
                className="px-12 py-4 font-black rounded-full text-black transition-transform hover:scale-105"
                style={{ backgroundColor: currentStyle.color }}
             >
                ADICIONAR AO CARRINHO
             </button>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Mice;