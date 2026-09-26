"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Globe, Smartphone, Rocket, CheckCircle2, MapPin, ExternalLink } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Services: React.FC = () => {
  return (
    <section className="relative py-24 px-6 z-10 bg-gradient-to-b from-[#040814] to-[#040814]/80" id="services">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            تطوير مخصص، <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5]">وقصص نجاح</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            نحول أفكارك إلى تطبيقات ومواقع احترافية تواكب أحدث التقنيات وتضمن لك التفوق في السوق.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* First Column: Services List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Web Development */}
            <motion.div variants={itemVariants} className="flex gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#00d2ff]/10 border border-[#00d2ff]/20 flex items-center justify-center">
                <Globe className="w-7 h-7 text-[#00d2ff]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">تطوير مواقع الويب</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  نبني واجهات تفاعلية سلسة ومواقع متجاوبة تعكس هوية علامتك التجارية وتضمن تجربة مستخدم استثنائية لزوارك.
                </p>
              </div>
            </motion.div>

            {/*App Development */}
            <motion.div variants={itemVariants} className="flex gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#3a7bd5]/10 border border-[#3a7bd5]/20 flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-[#3a7bd5]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">تطبيقات الهواتف الذكية</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  نبرمج تطبيقات عالية الأداء لأنظمة iOS و Android، مع التركيز على سرعة الاستجابة ودقة التصميم لتحقيق أعلى نسب التفاعل.
                </p>
              </div>
            </motion.div>

            {/* Project Management */}
            <motion.div variants={itemVariants} className="flex gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Rocket className="w-7 h-7 text-gray-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">إدارة المشاريع والصيانة</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  نرافقك من الفكرة وحتى الإطلاق، مع توفير دعم فني مستمر، حماية للبيانات، وضمان عمل مشاريعك بكفاءة عالية على مدار الساعة.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Second Column: Success Story */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00d2ff]/20 to-[#3a7bd5]/20 blur-3xl -z-10 rounded-full"></div>
            
            <div className="glass-card p-8 border border-[#00d2ff]/30 relative overflow-hidden">
              {/* Success Banner */}
              <div className="absolute top-6 left-[-35px] -rotate-45 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white text-xs font-bold py-1 px-10 shadow-lg">
                قصة نجاح
              </div>

              <div className="flex items-center gap-4 mb-6 mt-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#040814] to-[#1a233a] border border-[#00d2ff]/50 flex items-center justify-center shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                  <MapPin className="w-8 h-8 text-[#00d2ff]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">تطبيق "وصيلك"</h3>
                  <p className="text-[#00d2ff] text-sm">تطبيق ديليفري متكامل</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                نموذج حي لقدرات Nova Tech في بناء أنظمة معقدة. تطبيق "وصيلك" هو منصة توصيل شاملة تم تصميمها وتطويرها لربط العملاء بالمتاجر والمندوبين بلحظات، مع تتبع دقيق للطلبات.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-gray-400">واجهات مستخدم تفاعلية وسريعة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-gray-400">لوحة تحكم حية لإدارة العمليات</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-gray-400">نظام مباع ومثبت الكفاءة في السوق</span>
                </div>
              </div>

              {/* Button to google play store*/}
            <a 
              href="https://play.google.com/store/apps/details?id=com.novatech.wasilak" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-[#00d2ff]/10 border border-white/10 hover:border-[#00d2ff]/30 text-white hover:text-[#00d2ff] py-3.5 rounded-xl text-sm font-bold transition-all duration-300 mt-8 max-w-xs"
            >
              عرض التطبيق
              <ExternalLink className="w-4 h-4" />
            </a>  
            </div>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 glass-card p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row-reverse items-center justify-between gap-10"
        >
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3a7bd5]/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="flex-1 space-y-6">
            <span className="text-[#00d2ff] text-sm font-bold tracking-wider">قصة نجاح: تطوير ويب</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white">موقع شركة RM Center</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              تصميم وبرمجة موقع ويب تعريفي متكامل يعكس الهوية البصرية للشركة، مع لوحة تحكم مخصصة لإدارة المحتوى والمقالات بسهولة.
            </p>
            <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#00d2ff]" /> واجهة عصرية متجاوبة مع كافة الشاشات.
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#00d2ff]" /> تحسين متقدم لمحركات البحث (SEO).
                </li>
            </ul>
            
            <a 
              href="https://www.rm-center.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-[#00d2ff]/10 border border-white/10 hover:border-[#00d2ff]/30 text-white hover:text-[#00d2ff] py-3.5 rounded-xl text-sm font-bold transition-all duration-300 mt-8 max-w-xs"
            >
              زيارة الموقع
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="flex-1 w-full flex justify-center relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#3a7bd5]/30 to-transparent rounded-3xl blur-2xl"></div>
             <div className="w-full max-w-lg aspect-video glass-card rounded-3xl border border-white/10 relative overflow-hidden p-2 flex items-center justify-center">
                <img 
                  src="/data/RM.png" 
                  alt="موقع RM" 
                  className="w-full h-full object-cover object-top rounded-2xl relative z-10 drop-shadow-2xl border border-white/5"
                />   
             </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;