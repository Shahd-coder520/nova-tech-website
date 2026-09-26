import db from '@/lib/db';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import Editor from '../../../components/Editor'; 

export const dynamic = 'force-dynamic';

// Server Action to handle form submission
export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  
  // 1. Resolve the parameters to get the post ID
  const { id } = await params;
  const postId = Number(id);

  const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(postId) as any;

  if (!post) {
    return (
      <div className="p-8 text-center mt-20">
        <h2 className="text-2xl font-bold text-slate-800">المقال غير موجود!</h2>
        <p className="text-slate-500 mt-2">نبحث عن المقال رقم: {postId}</p>
      </div>
    );
  }

  async function updatePost(formData: FormData) {
    'use server';
    
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const image = formData.get('image') as string;

    db.prepare('UPDATE posts SET title = ?, content = ?, image = ? WHERE id = ?')
      .run(title, content, image, postId);

    revalidatePath('/blog');
    revalidatePath('/dashboard/posts');
    
    redirect('/dashboard/posts');
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">تعديل المقال</h1>
      
      <form action={updatePost} className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <label className="block text-sm font-bold text-slate-700 mb-2">عنوان المقال</label>
          <input 
            type="text"
            name="title" 
            defaultValue={post.title} 
            required 
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
          />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <label className="block text-sm font-bold text-slate-700 mb-2">رابط الصورة الرئيسية</label>
          <input 
            type="text"
            name="image" 
            defaultValue={post.image || ''} 
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
          />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <label className="block text-sm font-bold text-slate-700 mb-2">المحتوى</label>
          <Editor defaultValue={post.content} />
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            حفظ التعديلات
          </button>
        </div>
      </form>
    </div>
  );
}