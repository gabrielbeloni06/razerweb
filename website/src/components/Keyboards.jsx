import React from 'react';
import { motion } from 'framer-motion';

const Keyboards = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col md:flex-row overflow-hidden relative">
      <div className="w-full md:w-1/2 h-screen flex flex-col justify-center px-12 md:px-24 z-10 bg-black relative">
        <div className="absolute top-0 right-0 w-32 h-full bg-razer-green transform skew-x-12 translate-x-16 opacity-20 blur-3xl"></div>
        
        <motion.h4 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-razer-green font-bold tracking-widest mb-4"
        >
          MECHANICAL PRECISION
        </motion.h4>
        <motion.h1 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-black text-white mb-6 uppercase"
        >
          Black<br/>Widow
        </motion.h1>
        <p className="text-gray-400 max-w-md mb-8">
          Sinta a diferença. Switches mecânicos Razer Green para a execução tátil e sonora definitiva.
        </p>
        <button className="w-fit border border-razer-green text-razer-green px-8 py-3 rounded hover:bg-razer-green hover:text-black transition-all font-bold">
          CUSTOMIZE
        </button>
      </div>
      <div className="w-full md:w-1/2 h-screen bg-[#111] relative flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] border border-white/10 rounded-full border-dashed"
        />
        
        <motion.div
           initial={{ x: 100, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ delay: 0.4, type: "spring" }}
           className="relative z-10"
        >
           <div className="w-[600px] h-[300px] bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-[0_0_50px_rgba(68,214,44,0.3)] flex items-center justify-center text-white/20 font-black text-4xl transform -rotate-12 hover:rotate-0 transition-transform duration-500">
              KEYBOARD IMG
           </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Keyboards;