import db from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import Editor from '../../components/Editor';

export default function AddPostPage() {
  
  // Server Action to handle form submission
  async function addPost(formData: FormData) {
    'use server';
    
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const image = formData.get('image') as string;

    // Insert the new post into the database
    db.prepare("INSERT INTO posts (title, content, image) VALUES (?, ?, ?)")
      .run(title, content, image);

    // Update the page and redirect to the posts management page
    revalidatePath('/dashboard/posts');
    redirect('/dashboard/posts');
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">إضافة مقال جديد</h1>
      
      <form action={addPost} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">عنوان المقال</label>
          <input name="title" required className="w-full p-2 border rounded-lg" placeholder="اكتب عنواناً جذاباً..." />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">رابط الصورة</label>
          <input name="image" className="w-full p-2 border rounded-lg" placeholder="ضع رابط الصورة هنا..." />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">المحتوى</label>
          <Editor defaultValue="" />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          حفظ ونشر المقال
        </button>
      </form>
    </div>
  );
}