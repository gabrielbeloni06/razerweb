import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Disc, Mic } from 'lucide-react';

const features = [
  { 
    title: "HyperSpeed Wireless", 
    desc: "Conexão de 2.4GHz ultra-rápida sem lags.",
    icon: <Wifi className="w-8 h-8"/> 
  },
  { 
    title: "TriForce Titanium", 
    desc: "Drivers de 50mm divididos em 3 partes para clareza total.",
    icon: <Disc className="w-8 h-8"/> 
  },
  { 
    title: "HyperClear Mic", 
    desc: "Captação de voz cristalina com cancelamento de ruído passivo.",
    icon: <Mic className="w-8 h-8"/> 
  },
];

const Details = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-32 relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-20 text-center uppercase"
        >
          Domine o <span className="text-razer-green">Jogo</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-razer-green hover:to-razer-green/0 transition-all duration-500"
            >
              <div className="bg-zinc-900 h-full p-8 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-razer-green/20 blur-[50px] rounded-full translate-x-full -translate-y-full group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform duration-700"></div>

                <div className="relative z-10 text-razer-green mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-razer-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;