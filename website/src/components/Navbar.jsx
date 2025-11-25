import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 mix-blend-difference text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-white">
             <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2-1-2-1-2 1 2 1zm0-3l-5 2.5 5 2.5 5-2.5L12 8z"/>
          </svg>
          <span className="text-2xl font-bold tracking-tighter hidden md:block">RAZER</span>
        </div>
        <ul className="hidden md:flex gap-8 font-medium uppercase tracking-wider text-sm">
          {['Store', 'PC', 'Console', 'Mobile', 'Lifestyle'].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"/>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <Search className="w-6 h-6 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" />
          <div className="relative cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
          </div>
          <Menu className="w-6 h-6 md:hidden cursor-pointer" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;