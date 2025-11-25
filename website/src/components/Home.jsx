import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-[200vh] bg-black text-white relative">
      <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <motion.h1 
          style={{ y: yText, opacity: opacityText }}
          className="text-[10vw] font-black leading-none tracking-tighter text-center z-10 mix-blend-exclusion"
        >
          PROJECT <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-razer-green to-emerald-600">
            GENESIS
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-xl text-zinc-500 max-w-lg text-center font-mono"
        >
          Uma reinterpretação completa da experiência de e-commerce. 
          Role para descobrir.
        </motion.p>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-razer-green"
        >
          ↓
        </motion.div>
      </div>
      <div className="relative z-10 bg-zinc-900 py-32 px-6 rounded-t-[3rem] -mt-20 border-t border-razer-green/20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">O FUTURO É <span className="text-razer-green">AGORA</span></h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Este projeto não é apenas uma loja. É uma demonstração de poder do React + Framer Motion.
              Cada pixel foi posicionado para criar imersão total.
            </p>
            <div className="flex gap-4">
              <div className="p-4 bg-black rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white">120Hz</h3>
                <span className="text-xs text-gray-500">SMOOTH SCROLL</span>
              </div>
              <div className="p-4 bg-black rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white">3D</h3>
                <span className="text-xs text-gray-500">INTERACTIONS</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] bg-gradient-to-tr from-razer-green/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-white/5">
            <span className="font-mono text-razer-green animate-pulse">
              [Ifoto]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;