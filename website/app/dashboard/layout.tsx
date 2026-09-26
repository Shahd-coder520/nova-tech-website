'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { Home, PlusCircle, FolderKanban, LogOut } from 'lucide-react'; // Importing icons from lucide-react

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const links = [
    { name: 'الرئيسية', href: '/dashboard', icon: <Home size={20} /> },
    { name: 'إضافة مقال', href: '/dashboard/add-post', icon: <PlusCircle size={20} /> },
    { name: 'إدارة المقالات', href: '/dashboard/posts', icon: <FolderKanban size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800" dir="rtl">
      {/* sidebar */}
      <aside className="w-64 bg-white border-l border-slate-200 flex flex-col justify-between shadow-sm">
        <div>
          <div className="p-8">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">NOVA<span className="text-blue-600"> PANEL</span></h2>
          </div>
          
          <nav className="px-4 space-y-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-slate-100">
          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all font-medium"
          >
            <LogOut size={20} />
            تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-slate-50">
        <div className="max-w-5xl mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}