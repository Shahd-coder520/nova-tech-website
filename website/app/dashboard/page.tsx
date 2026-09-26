import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // 1. bring the session to check if the user is logged in
  const session = await getServerSession();

  // 2. If the user is not logged in, redirect them to the login page
  if (!session) {
    redirect("/login");
  }

  // 3. If the user is logged in, render the dashboard content
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          لوحة التحكم
        </h1>
        
        <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700">
            أهلاً بكِ يا <span className="text-blue-600">{session.user?.name}</span>! 👋
          </h2>
          <p className="mt-2 text-gray-500">
            أنتِ الآن مسجلة الدخول بالبريد الإلكتروني: {session.user?.email}
          </p>
          
          <div className="mt-8 rounded-lg bg-blue-50 p-4 border border-blue-100">
            <p className="text-sm text-blue-800">
              هذه الصفحة محمية بالكامل. لا يمكن لأي شخص الوصول إليها بدون تسجيل الدخول أولاً.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}