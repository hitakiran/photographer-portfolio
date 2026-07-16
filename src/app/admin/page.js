import { redirect } from "next/navigation";
import AdminContentEditor from "@/components/admin/AdminContentEditor";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Admin Panel | Carla Santos Photography",
};

export default async function AdminPage() {
  const supabase = await createClient();

  // This is the page-level safety check for /admin.
  // If there is no signed-in Supabase user, do not render the dashboard.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <AdminContentEditor />
    </main>
  );
}
