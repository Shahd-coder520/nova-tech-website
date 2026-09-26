"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    /*Phone Number */
    const companyPhone = "+963943530333"; // Company's WhatsApp number in international format without spaces or dashes

    const messageText = `مرحباً فريق Nova Tech، لدي طلب جديد:
    
 الاسم: ${formData.name}
 رقم الهاتف: ${formData.phone}
 البريد الإلكتروني: ${formData.email || 'لا يوجد'}
 الخدمة المطلوبة: ${formData.service || 'غير محدد'}

 الرسالة:
${formData.message}`;

    const encodedText = encodeURIComponent(messageText);

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${companyPhone}&text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <section className="relative py-24 px-6 z-10" id="contact">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            دعنا نبني <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5]">المستقبل معاً</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            سواء كنت تبحث عن نظام محاسبي، تطبيق مخصص، أو أتمتة لعملياتك، فريقنا جاهز لتحويل رؤيتك إلى واقع.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d2ff]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">تواصل معنا مباشرة</h3>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#00d2ff]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">البريد الإلكتروني</p>
                  <p className="text-white font-semibold tracking-wider">info@nova-technology.cloud</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#00d2ff]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">رقم الهاتف</p>
                  <p className="text-white font-semibold tracking-wider" dir="ltr">+963 943 530 333</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#00d2ff]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">المقر الرئيسي</p>
                  <p className="text-white font-semibold">سوريا - السويداء</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-400 font-medium ml-1">
                    الاسم الكامل <span className="text-red-400">*</span>
                  </label>
                  <input 
                    required 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#040814]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00d2ff]/50 focus:ring-1 focus:ring-[#00d2ff]/50 transition-all" 
                    placeholder="Nova Tech" 
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-400 font-medium ml-1">
                    رقم الهاتف <span className="text-red-400">*</span>
                  </label>
                  <input 
                    required 
                    type="tel" 
                    dir="ltr"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full text-right bg-[#040814]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00d2ff]/50 focus:ring-1 focus:ring-[#00d2ff]/50 transition-all" 
                    placeholder="+963 943 530 333" 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-gray-400 font-medium ml-1">
                  البريد الإلكتروني <span className="text-gray-500">(اختياري)</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#040814]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00d2ff]/50 focus:ring-1 focus:ring-[#00d2ff]/50 transition-all" 
                  placeholder="info@nova-technology.cloud" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-gray-400 font-medium ml-1">نوع الخدمة المطلوبة</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#040814]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#00d2ff]/50 transition-all appearance-none"
                >
                  <option value="">اختر الخدمة...</option>
                  <option value="لوميو (الذكاء الاصطناعي)">تطبيق لوميو (الذكاء الاصطناعي)</option>
                  <option value="بيراميد (محاسبة ERP)">نظام بيراميد (محاسبة ERP)</option>
                  <option value="رعاية (إدارة العيادات)">نظام رعاية (إدارة العيادات)</option>
                  <option value="تطبيق / موقع مخصص">برمجة تطبيق / موقع مخصص</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-gray-400 font-medium ml-1">
                  رسالتك <span className="text-red-400">*</span>
                </label>
                <textarea 
                  required 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#040814]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00d2ff]/50 focus:ring-1 focus:ring-[#00d2ff]/50 transition-all resize-none" 
                  placeholder="حدثنا عن مشروعك..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-90 text-white py-3.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)]"
              >
                <Send className="w-4 h-4" />
                إرسال عبر واتساب
              </button>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;