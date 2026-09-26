"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '/#home' },
    { name: 'منتجاتنا', href: '/#products' },
    { name: 'خدماتنا', href: '/#services' },
    { name: 'المدونة', href: '/blog' } // Blog link added
  ];

  return (
    <nav 
      className={`fixed left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full px-8 flex justify-between items-center z-50 transition-all duration-500 ease-in-out
      ${isScrolled 
        ? 'top-4 py-3 glass-card shadow-[0_10px_30px_rgba(0,210,255,0.05)]' 
        : 'top-8 py-5 bg-transparent' 
      }`}
    >
      
      {/* Logo - back to home */}
      <Link href="/#home" className="flex items-center gap-3 cursor-pointer group">
        <div className="relative overflow-hidden rounded-full">
          <img 
            src="/data/NovaLogo.png" 
            alt="Nova Tech Logo" 
            className="w-10 h-10 object-contain rounded-full transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <span className="text-xl font-bold tracking-wide text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00d2ff] group-hover:to-[#3a7bd5]">
          Nova Tech
        </span>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-300">
        {navLinks.map((item, index) => (
          <li key={index} className="relative group py-2">
            <Link href={item.href} className="group-hover:text-white transition-colors duration-300">
              {item.name}
            </Link>
            <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] transition-all duration-300 ease-out group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <div>
        <Link href="/#contact" className="inline-block relative bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_15px_rgba(0,210,255,0.3)] hover:shadow-[0_0_25px_rgba(0,210,255,0.6)]">
          تواصل معنا
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;