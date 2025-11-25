import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFilled((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative w-40 h-40">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(68,214,44,0.5)]">
          <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="#333" strokeWidth="2" />
          <defs>
            <clipPath id="liquid-mask">
              <motion.rect 
                x="0" 
                width="100" 
                height="100"
                initial={{ y: 100 }}
                animate={{ y: 100 - filled }}
              />
            </clipPath>
          </defs>
          <path 
            d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" 
            fill="#44d62c" 
            clipPath="url(#liquid-mask)"
          />
        </svg>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
           <span className="text-razer-green font-bold tracking-[0.5em] text-xs animate-pulse">
             SYSTEM BOOTING {filled}%
           </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;