import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const diff = Math.random() * 10;
        const newProgress = Math.min(prev + diff, 100);
        
        if (newProgress === 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative flex flex-col items-center justify-center w-full max-w-md">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-razer-green/20 rounded-full blur-[80px]"
          animate={{ 
            opacity: [0.2, 0.4, 0.2], 
            scale: [0.8, 1.2, 0.8] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 mb-12 flex justify-center items-center"
        >
          <motion.img 
            src={logoImg} 
            alt="Razer" 
            className="w-32 md:w-40 h-auto object-contain drop-shadow-[0_0_15px_rgba(68,214,44,0.4)]"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="relative w-64 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-razer-green shadow-[0_0_20px_#44d62c] relative"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
          </motion.div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-razer-green rounded-full animate-pulse" />
          <span className="font-mono text-razer-green font-bold text-sm tracking-widest">
            SYSTEM LOADING... {Math.round(progress)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;