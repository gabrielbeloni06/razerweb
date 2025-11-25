import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { products } from '../data/products';
import logoImg from '../assets/logo.png'; 

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = products[currentIndex];
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 500], [0, 150]);
  const yProduct = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <div 
      className="sticky top-0 z-0 w-full h-screen overflow-hidden transition-colors duration-700 ease-in-out flex items-center justify-center"
      style={{ backgroundColor: currentProduct.color }}
    >
      <motion.div 
        style={{ y: yBackground }} 
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
      >
        <img 
          src={logoImg} 
          alt="Razer Background" 
          className="w-[90vw] md:w-[60vw] h-auto opacity-10 blur-sm mix-blend-overlay"
        />
      </motion.div>
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 h-full items-center">
        <div className="text-white space-y-6 order-2 md:order-1 mt-10 md:mt-0">
          <motion.div
            key={currentProduct.id + "-text"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold tracking-widest uppercase mb-2 text-white/80">
              {currentProduct.text || "PERFORMANCE"}
            </h3>
            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-4 drop-shadow-lg">
              {currentProduct.name}
            </h2>
            <p className="text-lg opacity-90 max-w-md mb-8 leading-relaxed font-medium">
              {currentProduct.desc}
            </p>
            
            <div className="flex items-center gap-6">
              <button className="bg-white text-black px-8 py-4 font-bold rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all uppercase tracking-wider">
                Comprar Agora
              </button>
              <span className="text-2xl font-bold">{currentProduct.price}</span>
            </div>
          </motion.div>
        </div>
        <motion.div 
          style={{ y: yProduct, perspective: "1000px" }}
          className="relative h-[40vh] md:h-[60vh] flex items-center justify-center order-1 md:order-2"
        >
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentProduct.id}
              src={currentProduct.image}
              alt={currentProduct.name}
              className="max-h-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] object-contain z-20"
              initial={{ 
                opacity: 0, 
                rotateY: -90,
                scale: 0.5,
                x: 100 
              }}
              animate={{ 
                opacity: 1, 
                rotateY: 0,
                scale: 1, 
                x: 0,
                y: [0, -15, 0]
              }}
              exit={{ 
                opacity: 0, 
                rotateY: 90,
                scale: 0.5, 
                x: -100, 
                transition: { duration: 0.2 } 
              }}
              transition={{ 
                rotateY: { duration: 0.5, ease: "circOut" },
                scale: { duration: 0.5 },
                opacity: { duration: 0.4 },
                y: { 
                  repeat: Infinity, 
                  duration: 4, 
                  ease: "easeInOut"
                } 
              }}
            />
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6 z-30 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
        {products.map((product, index) => (
          <button
            key={product.id}
            onClick={() => setCurrentIndex(index)}
            className={`w-6 h-6 rounded-full border-2 border-white transition-all duration-300 relative group ${
              index === currentIndex ? "scale-125" : "hover:scale-110 opacity-70 hover:opacity-100"
            }`}
            style={{ backgroundColor: product.color }}
          >
             <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-bold text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {product.name.split(" - ")[1] || "Color"}
             </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;