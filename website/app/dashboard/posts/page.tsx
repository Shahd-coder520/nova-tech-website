import db from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { Trash2, Pencil } from 'lucide-react';
import Link from 'next/link';

export default async function PostsPage() {
  // Bring all posts from the database
  const posts = db.prepare('SELECT * FROM posts ORDER BY id DESC').all() as any[];

  // Delete post server action
  async function deletePost(formData: FormData) {
    'use server';
    const id = formData.get('id');
    
    // Delete the post from the database acording to the provided ID
    db.prepare('DELETE FROM posts WHERE id = ?').run(id);
    
    // Refresh the page to reflect the changes
    revalidatePath('/dashboard/posts');
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">إدارة المقالات</h1>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
          {posts.length} مقالات
        </span>
      </div>

      {/* Check if there are no posts */}
      {posts.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 rounded-lg border border-dashed border-slate-300">
          <p className="text-slate-500 text-lg">لا يوجد مقالات حتى الآن.</p>
          <p className="text-slate-400 text-sm mt-2">اذهبي إلى "إضافة مقال" لنشر أول محتوى لكِ!</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-right">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
              <tr>
                <th className="p-4 font-semibold w-16">الرقم</th>
                <th className="p-4 font-semibold w-24">الصورة</th>
                <th className="p-4 font-semibold">العنوان</th>
                <th className="p-4 font-semibold w-32 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-slate-500 font-medium">#{post.id}</td>
                  <td className="p-4">
                    {post.image ? (
                      <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-lg shadow-sm border border-slate-100" />
                    ) : (
                      <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-xs border border-slate-200">لا صورة</div>
                    )}
                  </td>
                  <td className="p-4 font-semibold text-slate-800">{post.title}</td>
                  <td className="p-4">
                    <div className="flex gap-2 justify-center">
                      {/* Edit Button */}
                      <button className="text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition" title="تعديل">
                          <Link 
                          href={`/dashboard/edit-post/${post.id}`} 
                          className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors inline-flex items-center justify-center"
                          title="تعديل المقال"
                      >
                      <Pencil size={20} />
                      </Link>
                      </button>
                      
                      {/* Delete Button */}
                      <form action={deletePost}>
                        <input type="hidden" name="id" value={post.id} />
                        <button type="submit" className="text-red-600 hover:bg-red-100 p-2 rounded-lg transition" title="حذف">
                          <Trash2 size={18} />
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}