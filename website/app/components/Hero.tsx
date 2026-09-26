"use client";

import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center z-10">
      
      {/* Background Glow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d2ff] opacity-[0.01] blur-[220px] -z-10 rounded-full pointer-events-none"
      ></motion.div>

      {/*Uppercase Text*/}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-5 py-2 rounded-full mb-10 inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm"
      >
        <Sparkles className="w-4 h-4 text-[#00d2ff]" />
        <span className="text-sm font-medium text-gray-300 tracking-wide">نبتكر حلولاً برمجية تصنع المستقبل</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold text-white leading-[1.3] mb-8 max-w-4xl tracking-tight"
      >
        ارتقِ بأعمالك مع قوة <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5]">
          الذكاء الاصطناعي
        </span>
      </motion.h1>

      {/* Sub Heading */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed font-light"
      >
        منصة متكاملة تقدم لك تطبيقات استثنائية، وأنظمة متطورة لتسريع نمو شركتك بسلاسة واحترافية عالية.
      </motion.p>
    </section>
  );
};

export default Hero;