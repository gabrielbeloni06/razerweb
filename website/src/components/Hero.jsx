import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = products[currentIndex];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden transition-colors duration-700 ease-in-out flex items-center justify-center"
      style={{ backgroundColor: currentProduct.color }}
    >
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <h1 className="text-[15vw] font-black text-white opacity-10 leading-none tracking-tighter">
          RAZER
        </h1>
      </div>
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
        <div className="relative h-[50vh] md:h-[70vh] flex items-center justify-center order-1 md:order-2">
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentProduct.id}
              src={currentProduct.image}
              alt={currentProduct.name}
              className="max-h-full drop-shadow-2xl object-contain"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 1.1, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
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