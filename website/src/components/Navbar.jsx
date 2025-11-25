import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import logoImg from '../assets/logo.png'; 

const Navbar = () => {
  const location = useLocation();
  const links = [
    { name: 'HOME', path: '/' },
    { name: 'HEADSETS', path: '/headsets' },
    { name: 'KEYBOARDS', path: '/keyboards' },
    { name: 'MOUSE', path: '/mice' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 mix-blend-difference text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
          <img src={logoImg} alt="Razer" className="h-10 w-auto object-contain" />
        </Link>
        <ul className="hidden md:flex gap-10 font-bold uppercase tracking-widest text-xs">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <Link to={link.path} className={`transition-colors ${location.pathname === link.path ? 'text-razer-green' : 'text-white/70 hover:text-white'}`}>
                {link.name}
              </Link>
              {location.pathname === link.path && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-razer-green shadow-[0_0_10px_#44d62c]"/>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 cursor-pointer opacity-70 hover:text-razer-green transition-colors" />
          <div className="relative cursor-pointer group">
            <ShoppingBag className="w-5 h-5 opacity-70 group-hover:text-razer-green transition-colors" />
            <span className="absolute -top-2 -right-2 bg-razer-green text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
          </div>
          <Menu className="w-6 h-6 md:hidden cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;