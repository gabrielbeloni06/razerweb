import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const text = "THX SPATIAL AUDIO • HYPERSPEED WIRELESS • TRIFORCE TITANIUM DRIVERS • ";
  const content = Array(4).fill(text).join(""); 

  return (
    <div className="w-full py-10 bg-razer-green overflow-hidden relative z-20 rotate-1 border-y-4 border-black">
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20
          }}
          className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter flex"
        >
          <span className="mr-4">{content}</span>
          <span className="mr-4">{content}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;