"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

// LogoutButton signs the admin out and sends them back to the login page.
export default function LogoutButton() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // The login page also uses the /admin layout, so hide Logout there.
  if (pathname === "/admin/login") {
    return null;
  }

  async function handleLogout() {
    setIsLoggingOut(true);

    const supabase = createClient();
    await supabase.auth.signOut();

    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      className="rounded-full border border-stone-300 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-stone-700 transition hover:border-stone-900 hover:text-stone-900 disabled:cursor-not-allowed disabled:opacity-60"
      disabled={isLoggingOut}
      onClick={handleLogout}
      type="button"
    >
      {isLoggingOut ? "Logging out..." : "Logout"}
    </button>
  );
}
