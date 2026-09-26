"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Bot, Calculator, Stethoscope, PenTool, Video, TrendingUp, BookOpen, CalendarDays, Activity, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const productsData = [
  {
    id: 1,
    title: "لوميو",
    badge: "الأكثر طلباً",
    description: "تطبيق ذكي لإدارة التفاعلات والترويج. ارتقِ بحملاتك التسويقية مع أدوات متقدمة مدمجة.",
    mainIcon: <Bot className="w-10 h-10 text-[#00d2ff]" />,
    features: [
      { icon: <PenTool className="w-4 h-4 text-[#00d2ff]" />, text: "كتابة الكابشن بالذكاء الاصطناعي" },
      { icon: <Video className="w-4 h-4 text-[#00d2ff]" />, text: "محرر فيديو ومونتاج مدمج" },
    ],
    detailsLink: "/products/lomio" 
  },
  {
    id: 2,
    title: "بيراميد",
    badge: "نظام ERP",
    description: "نظام محاسبي شامل مصمم للشركات لينافس كبرى الأنظمة العالمية مع واجهة سهلة الاستخدام.",
    mainIcon: <Calculator className="w-10 h-10 text-[#00d2ff]" />,
    features: [
      { icon: <TrendingUp className="w-4 h-4 text-[#00d2ff]" />, text: "إدارة مالية وتقارير دقيقة" },
      { icon: <BookOpen className="w-4 h-4 text-[#00d2ff]" />, text: "تخطيط متكامل لموارد المؤسسة" },
    ],
    detailsLink: "/products/pyramid"
  },
  {
    id: 3,
    title: "رعاية",
    badge: "مُحدَّث",
    description: "الحل الأمثل لإدارة العيادات. نظام ينظم سير العمل من مكتب الاستقبال وحتى غرفة الطبيب.",
    mainIcon: <Stethoscope className="w-10 h-10 text-[#00d2ff]" />,
    features: [
      { icon: <CalendarDays className="w-4 h-4 text-[#00d2ff]" />, text: "تنظيم المواعيد بذكاء" },
      { icon: <Activity className="w-4 h-4 text-[#00d2ff]" />, text: "إدارة السجلات والتشخيصات" },
    ],
    detailsLink: "/products/reaya"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Products: React.FC = () => {
  return (
    <section className="relative py-24 px-6 z-10" id="products">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            منتجاتنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5]">الرقمية</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            مجموعة من التطبيقات والأنظمة المصممة بعناية لحل مشاكل حقيقية ورفع كفاءة أعمالك.
          </motion.p>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {productsData.map((product) => (
            <motion.div 
              key={product.id}
              variants={cardVariants}
              className="glass-card p-6 group hover:border-[#00d2ff]/30 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d2ff]/0 to-[#00d2ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {product.mainIcon}
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/20">
                  {product.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{product.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6 flex-grow relative z-10">
                {product.description}
              </p>

              <div className="space-y-3 mt-auto relative z-10">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-[#040814] p-1.5 rounded-md border border-white/5">
                      {feature.icon}
                    </div>
                    <span className="text-xs text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex-shrink-0 relative z-20">
                <Link 
                  href={product.detailsLink}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#00d2ff]/30 text-[#00d2ff] hover:bg-[#00d2ff]/10 text-sm font-bold transition-colors duration-300 group/btn"
                >
                  عرض التفاصيل
                  <ArrowLeft className="w-4 h-4 transform group-hover/btn:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;