import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { products } from '../data/products';

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
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
      >
        <h1 className="text-[15vw] font-black text-white opacity-10 leading-none tracking-tighter">
          RAZER
        </h1>
      </motion.div>
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 h-full items-center">
        <div className="text-white space-y-6 order-2 md:order-1">
          <motion.div
            key={currentProduct.id + "-text"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold tracking-widest uppercase mb-2">
              {currentProduct.text}
            </h3>
            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-4">
              {currentProduct.name}
            </h2>
            <p className="text-lg opacity-90 max-w-md mb-8">
              {currentProduct.desc}
            </p>
            
            <div className="flex items-center gap-6">
              <button className="bg-white text-black px-8 py-3 font-bold rounded-full hover:scale-105 transition-transform">
                COMPRAR
              </button>
              <span className="text-2xl font-bold">{currentProduct.price}</span>
            </div>
          </motion.div>
        </div>
        <motion.div 
        style={{ y: yProduct }}
        className="relative h-[50vh] md:h-[70vh] flex items-center justify-center order-1 md:order-2 perspective-1000"
        >
        <AnimatePresence mode='wait'>
            <motion.img
            key={currentProduct.id}
            src={currentProduct.image}
            alt={currentProduct.name}
            className="max-h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-contain z-20"
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
                transition: { duration: 0.3 } 
            }}
            transition={{ 
                rotateY: { duration: 0.6, ease: "circOut" },
                scale: { duration: 0.6 },
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {products.map((product, index) => (
          <button
            key={product.id}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
              index === currentIndex ? "scale-150 bg-white" : "bg-transparent hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;