import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import setupImg from '../assets/setup.png';
import backgroundImg from '../assets/background.png';

const Home = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 250]);
  const yCard = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-[150vh] bg-black text-white relative overflow-hidden">
      <div className="h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-50 select-none" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80"></div>
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        <motion.div style={{ y: yText, opacity: opacityText }} className="z-10 text-center relative">
          <h1 className="text-[12vw] font-black leading-none tracking-tighter mix-blend-screen drop-shadow-2xl">
            PROJECT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-razer-green to-emerald-400">
              GENESIS
            </span>
          </h1>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-razer-green z-20 font-mono text-sm tracking-widest"
        >
          SCROLL TO EXPLORE
        </motion.div>
      </div>
      <div className="relative z-20 py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-black mb-8 leading-tight">
              BEYOND <span className="text-razer-green">REALITY</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8 border-l-4 border-razer-green pl-6">
              Experimente a próxima geração de periféricos. Projetado para imersão total, desempenho inigualável e estética cyberpunk definitiva.
            </p>
            <div className="flex gap-4">
              {['IMMERSION', 'SPEED', 'CONTROL'].map((item) => (
                <span key={item} className="px-4 py-2 border border-white/20 rounded-full text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            style={{ y: yCard }}
            className="perspective-1000 flex justify-center"
          >
            <motion.div
              className="relative w-full max-w-md aspect-[4/5] bg-gradient-to-br from-zinc-800 to-black rounded-3xl border border-white/10 overflow-hidden shadow-2xl group"
              whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-razer-green/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <img 
                src={setupImg} 
                alt="Setup" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent z-20 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-3xl font-bold text-white mb-2">ULTIMATE SETUP</h3>
                <p className="text-razer-green font-mono text-sm">VIEW COLLECTION </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;