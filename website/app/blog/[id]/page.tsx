import db from '@/lib/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  // Bring the parameters from the URL and convert the ID to a number
  const resolvedParams = await params;
  const postId = Number(resolvedParams.id);

  // 1. Log the post ID for debugging purposes
  console.log("🔍 رقم المقال المطلوب:", postId);

  // 2. Fetch the post from the database using the provided ID
  const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(postId) as any;

  console.log("📦 البيانات المرجعة من القاعدة:", post ? "موجودة" : "غير موجودة");

  // 3. If the post is not found, trigger a 404 page
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white relative overflow-hidden" dir="rtl">
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-900/20 rounded-full blur-[150px] pointer-events-none"></div>

      <main className="relative max-w-4xl mx-auto px-6 py-24 z-10">
        
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-12 font-semibold"
        >
          <ArrowRight size={20} />
          العودة إلى المدونة
        </Link>

        {/* Post Content */}
        <article className="bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-800 overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.05)]">
          
          {/* Image Container */}
          <div className="relative h-[300px] md:h-[450px] w-full bg-slate-950 border-b border-slate-800">
            {post.image ? (
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover opacity-90" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-800 font-bold text-5xl">
                NOVA TECH
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-cyan-400 mb-8">
              <div className="flex items-center gap-1.5 bg-cyan-950/50 px-4 py-2 rounded-full border border-cyan-800/50 shadow-inner">
                <Sparkles size={16} />
                <span>إصدار حصري</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Calendar size={16} />
                <span>تم النشر مؤخراً</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
              {post.title}
            </h1>

            {/* Converted HTML Content */}
          <div 
              className="text-slate-300 text-lg md:text-xl leading-loose font-medium 
              [&>ul]:list-disc [&>ul]:mr-8 [&>ul]:mb-6 
              [&>ol]:list-decimal [&>ol]:mr-8 [&>ol]:mb-6 
              [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:mb-4 [&>h1]:text-white
              [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:text-white
              [&>p]:mb-4 [&>strong]:text-cyan-400"
              dangerouslySetInnerHTML={{ __html: post.content }} 
          />
            
          </div>
        </article>

      </main>
    </div>
  );
}