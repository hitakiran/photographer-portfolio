"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

// LoginForm handles the email/password auth flow in the browser.
// Supabase stores the session in cookies so middleware can protect /admin routes.
export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage("Invalid email or password");
      setIsSubmitting(false);
      return;
    }

    // Refresh lets Next.js re-check the new auth cookies before showing /admin.
    router.push("/admin");
    router.refresh();
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-semibold text-stone-700">
        Email
        <input
          autoComplete="email"
          className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 outline-none transition focus:border-stone-600 focus:ring-2 focus:ring-stone-200"
          disabled={isSubmitting}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
          type="email"
          value={email}
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-stone-700">
        Password
        <input
          autoComplete="current-password"
          className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 outline-none transition focus:border-stone-600 focus:ring-2 focus:ring-stone-200"
          disabled={isSubmitting}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Your password"
          required
          type="password"
          value={password}
        />
      </label>

      {errorMessage && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        className="rounded-full bg-stone-900 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
