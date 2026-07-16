import LoginForm from "@/components/admin/LoginForm";

export const metadata = {
  title: "Admin Login | Carla Santos Photography",
};

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-stone-50 px-5 py-12">
      <section className="w-full max-w-md rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-stone-500">
          Captured by Carla
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-stone-900">Admin login</h1>
        <p className="mt-3 text-sm leading-6 text-stone-600">
          Sign in with the Supabase Auth user you created for testing.
        </p>

        <div className="mt-8">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
