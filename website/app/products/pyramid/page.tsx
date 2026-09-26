"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Send, Star, Calculator, PieChart, ShieldCheck } from 'lucide-react';

export default function PyramidProductPage() {
  return (
    <div className="relative min-h-screen bg-[#040814] overflow-hidden pt-24 pb-24 px-6">
      
      {/* background glowing */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3a7bd5] opacity-[0.05] blur-[150px] -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto">
        
        {/* Upper Bar */}
        <Link href="/#products" className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors mb-12 group">
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          العودة للمنتجات
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#3a7bd5]/10 border border-[#3a7bd5]/20 text-[#00d2ff] text-sm font-bold mb-2">
              نظام محاسبي (ERP)
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              نظام <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5]">بيراميد</span>
            </h1>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              الحل الأمثل لإدارة موارد شركتك. نظام محاسبي وإداري شامل يغنيك عن تعقيد الأنظمة التقليدية، ويوفر لك تقارير دقيقة وتحكماً كاملاً بالمبيعات، المخزون، والموظفين في مكان واحد.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Main CTA Button */}
              <Link 
                href="/#contact"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                تواصل معنا لطلب النظام
              </Link>
            </div>
            
            {/* Features */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <PieChart className="w-4 h-4 text-[#00d2ff]" /> تقارير لحظية
              </div>
            </div>
          </motion.div>

          {/* Image */}
            <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
                    >
                      {/* Glowing*/}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#00d2ff]/20 to-transparent rounded-3xl blur-2xl"></div>
                      
                      {/* Image Frame*/}
                      <div className="glass-card aspect-square rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center p-2">
                         
                         <img 
                           src="/data/PyramidLogo.png" 
                           alt="واجهة نظام بيراميد" 
                           className="w-full h-full object-contain rounded-2xl relative z-10 drop-shadow-2xl"
                         />
                         
                      </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
}