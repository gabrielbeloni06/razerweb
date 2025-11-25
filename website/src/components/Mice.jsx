import React from 'react';
import { motion } from 'framer-motion';
const Mice = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden pt-20">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 select-none whitespace-nowrap">
        VIPER V3
      </h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-right space-y-12 hidden md:block"
        >
          <div>
            <h3 className="text-razer-green font-bold text-2xl">35K DPI</h3>
            <p className="text-gray-500">Sensor Óptico Gen-2</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-2xl">54 GRAMAS</h3>
            <p className="text-gray-500">Design Ultra-leve</p>
          </div>
        </motion.div>
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 1.5 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-razer-green blur-[80px] opacity-40 animate-pulse"></div>
             <div className="w-64 h-96 bg-zinc-800 rounded-[3rem] border-2 border-zinc-700 relative z-10 flex items-center justify-center shadow-2xl">
               <span className="text-white font-bold">MOUSE IMG</span>
             </div>
          </motion.div>
        </div>
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="space-y-12 hidden md:block"
        >
          <div>
            <h3 className="text-razer-green font-bold text-2xl">8000 Hz</h3>
            <p className="text-gray-500">HyperPolling Wireless</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-2xl">90 HORAS</h3>
            <p className="text-gray-500">Bateria de longa duração</p>
          </div>
        </motion.div>

      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button className="bg-razer-green text-black px-10 py-4 font-black rounded-full hover:shadow-[0_0_30px_#44d62c] transition-shadow uppercase tracking-wider">
          Comprar Agora
        </button>
      </div>
    </div>
  );
};

export default Mice;