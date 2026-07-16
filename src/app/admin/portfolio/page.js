import { redirect } from "next/navigation";
import AdminPortfolioManager from "@/components/admin/AdminPortfolioManager";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Photo Manager | Carla Santos Photography",
};

export default async function AdminPortfolioPage() {
  const supabase = await createClient();

  // Keep this admin page protected even if someone visits the URL directly.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <AdminPortfolioManager />
    </main>
  );
}
