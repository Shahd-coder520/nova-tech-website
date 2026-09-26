import db from '@/lib/db';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Calendar } from 'lucide-react';

export default async function BlogPage() {
  const posts = db.prepare('SELECT * FROM posts ORDER BY id DESC').all() as any[];

  return (
    // Main container with dark background and right-to-left text direction
    <div className="min-h-screen bg-slate-950 font-sans text-white relative overflow-hidden" dir="rtl">
      
      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-900/30 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 text-center z-10">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Upper Banner */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-md">
            <Sparkles size={16} />
            <span>نبتكر حلولاً برمجية لصنع المستقبل</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            أحدث الأخبار من <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Nova Tech
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            منصة متكاملة تقدم لك تطبيقات استثنائية، وأنظمة متطورة لتسريع نمو شركتك بسلاسة واحترافية عالية. تابع أحدث إصداراتنا هنا.
          </p>
        </div>
      </header>

      {/* Cards Section */}
      <main className="relative max-w-6xl mx-auto px-6 pb-24 z-10">
        {posts.length === 0 ? (
          <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-16 text-center border border-slate-800 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <p className="text-slate-400 text-lg">لم يتم نشر أي مقالات حتى الآن.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                // Card styling with hover effects and transitions
                className="group flex flex-col bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500 opacity-90" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-700 font-bold text-2xl">
                      NOVA TECH
                    </div>
                  )}
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-1 relative">
                  <div className="flex items-center gap-2 text-xs font-medium text-cyan-400 mb-4">
                    <Calendar size={14} />
                    <span>أحدث الإصدارات</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-400 line-clamp-3 mb-6 leading-relaxed flex-1 text-sm">
                      {post.content.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ')}
                  </p>
                  
                  {/* Button */}
                  <div className="pt-4 border-t border-slate-800 mt-auto">
                    <Link 
                      href={`/blog/${post.id}`} 
                      className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm hover:text-cyan-300 transition-colors"
                    >
                      التفاصيل
                      <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}