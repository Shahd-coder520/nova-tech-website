"use client";

import React from 'react';

// Building the Footer component with social media icons and links
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76 0-1.5-.5-2.8-1.4-3.8.1-.3.6-1.8-.1-3.8 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7 0C6.2 2.2 5 2.6 5 2.6a10.8 10.8 0 0 0-.1 3.8A7 7 0 0 0 3.5 10c0 5.2 3 6.5 6 6.8-.3.3-.5.8-.6 1.5V22"></path>
    <path d="M8 22v-4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#040814] pt-16 pb-8 px-6 relative overflow-hidden z-10">
      
      {/* Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#3a7bd5]/10 blur-[100px] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* First Column: Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/data/NovaLogo.png" alt="Nova Tech Logo" className="w-8 h-8 object-contain rounded-full" />
              <span className="text-xl font-bold tracking-wide text-white">Nova Tech</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              شريكك التقني الموثوق. نقدم حلولاً برمجية مبتكرة، وأنظمة متكاملة تساعد الشركات على أتمتة أعمالها وتحقيق نمو مستدام في العصر الرقمي.
            </p>
          </div>

          {/* Second Column: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#products" className="hover:text-[#00d2ff] transition-colors">منتجاتنا</a></li>
              <li><a href="#services" className="hover:text-[#00d2ff] transition-colors">خدمات التطوير</a></li>
              <li><a href="#" className="hover:text-[#00d2ff] transition-colors">قصص النجاح</a></li>
              <li><a href="#" className="hover:text-[#00d2ff] transition-colors">المدونة التقنية</a></li>
            </ul>
          </div>

          {/* Third Column: Products */}
          <div>
            <h4 className="text-white font-bold mb-4">منتجاتنا</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#00d2ff] transition-colors">تطبيق لوميو</a></li>
              <li><a href="#" className="hover:text-[#00d2ff] transition-colors">نظام بيراميد ERP</a></li>
              <li><a href="#" className="hover:text-[#00d2ff] transition-colors">نظام رعاية</a></li>
              <li><a href="#" className="hover:text-[#00d2ff] transition-colors">تطبيق وصيلك</a></li>
            </ul>
          </div>

        </div>

        {/* The Underline */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Nova Tech. جميع الحقوق محفوظة.
          </p>
          
          {/* Contact & Social Media */}
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/share/18wWPxrdzP/" className="text-gray-400 hover:text-[#00d2ff] transition-colors">
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00d2ff] transition-colors">
              <GithubIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00d2ff] transition-colors">
              <LinkedinIcon />
            </a>
            <a href="https://www.instagram.com/nova.tech152?igsh=MWh1NXlyeXl0Y3Bsdg==" className="text-gray-400 hover:text-[#00d2ff] transition-colors">
              <InstagramIcon />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;