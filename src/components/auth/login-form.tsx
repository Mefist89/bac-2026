"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/browser";
import { hasSupabaseEnv } from "@/lib/supabase/config";

const missingConfigMessage =
  "Lipsește configurarea Supabase. Adaugă NEXT_PUBLIC_SUPABASE_URL și NEXT_PUBLIC_SUPABASE_ANON_KEY.";

function getErrorMessage(error: unknown) {
  if (typeof error === "string" && error.length > 0) {
    return error;
  }

  if (error instanceof Error && error.message.length > 0) {
    return error.message;
  }

  return "Autentificarea a eșuat. Verifică datele și încearcă din nou.";
}

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next")?.startsWith("/")
    ? searchParams.get("next")
    : "/";
  const oauthError = searchParams.get("error");
  const hasConfig = hasSupabaseEnv();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage(null);
    setSuccessMessage(null);

    if (!hasConfig) {
      setErrorMessage(missingConfigMessage);
      return;
    }

    startTransition(async () => {
      try {
        const supabase = createClient();
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) {
          setErrorMessage(getErrorMessage(error));
          return;
        }

        setSuccessMessage("Autentificare reușită. Se încarcă pagina principală...");
        router.replace(nextPath ?? "/");
        router.refresh();
      } catch (error) {
        setErrorMessage(getErrorMessage(error));
      }
    });
  };

  const handleOAuthSignIn = (provider: "google" | "github") => {
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!hasConfig) {
      setErrorMessage(missingConfigMessage);
      return;
    }

    startTransition(async () => {
      try {
        const supabase = createClient();
        const redirectTo = new URL("/auth/callback", window.location.origin);
        redirectTo.searchParams.set("next", nextPath ?? "/");

        const { data, error } = await supabase.auth.signInWithOAuth({
          provider,
          options: {
            redirectTo: redirectTo.toString(),
          },
        });

        if (error) {
          setErrorMessage(getErrorMessage(error));
          return;
        }

        if (data.url) {
          window.location.assign(data.url);
        }
      } catch (error) {
        setErrorMessage(getErrorMessage(error));
      }
    });
  };

  const helperMessage =
    oauthError === "missing_config"
      ? missingConfigMessage
      : oauthError === "oauth_callback"
        ? "Autentificarea OAuth nu a putut fi finalizată. Verifică providerul în Supabase și încearcă din nou."
        : null;

  return (
    <div className="w-full max-w-md">
      <div className="lg:hidden flex items-center justify-center gap-2 mb-12">
        <div className="w-10 h-10 bg-[#f27f0d] flex items-center justify-center rounded-lg">
          <span className="material-icons text-white">code</span>
        </div>
        <span className="text-xl font-bold text-[#1f2937]">BAC INFO</span>
      </div>
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-[#1f2937] dark:text-white mb-2 font-display">
          Autentificare
        </h2>
        <p className="text-gray-500 dark:text-slate-400">
          Bine ai revenit! Intră cu email/parolă sau cu un provider activat în
          Supabase Auth.
        </p>
      </div>
      {helperMessage ? (
        <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-100">
          {helperMessage}
        </div>
      ) : null}
      {errorMessage ? (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-100">
          {errorMessage}
        </div>
      ) : null}
      {successMessage ? (
        <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-100">
          {successMessage}
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-[#1f2937] dark:text-slate-300 ml-1"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              mail
            </span>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#f27f0d]/20 focus:border-[#f27f0d] transition-all outline-none text-[#1f2937] dark:text-white placeholder:text-gray-400"
              placeholder="nume@exemplu.ro"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <label
              className="text-sm font-semibold text-[#1f2937] dark:text-slate-300"
              htmlFor="password"
            >
              Parolă
            </label>
            <span className="text-xs font-medium text-gray-400 dark:text-slate-500">
              Resetarea parolei poate fi adăugată separat.
            </span>
          </div>
          <div className="relative">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              lock
            </span>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#f27f0d]/20 focus:border-[#f27f0d] transition-all outline-none text-[#1f2937] dark:text-white placeholder:text-gray-400"
              placeholder="••••••••"
            />
          </div>
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className="w-full py-6 bg-[#f27f0d] hover:bg-[#f27f0d]/90 text-white font-bold rounded-xl shadow-lg shadow-[#f27f0d]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <span>{isPending ? "Se autentifică..." : "Conectează-te"}</span>
          <span className="material-icons text-lg">login</span>
        </Button>
      </form>
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-100 dark:border-slate-700"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-3 bg-white dark:bg-[#0F172A] text-gray-400 dark:text-slate-500 font-semibold tracking-wider">
            Sau continuă cu
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          disabled={isPending}
          onClick={() => handleOAuthSignIn("google")}
          className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 dark:border-slate-700 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCle2fBK7yQwrL-lDWYXY8oIT6R9uQzRmE6aUNrcc4r2gczPXlV9uCSUZ5wPgcajJpfvkuOYtZscVvT9BErwqhnfacp6iwO123KAfsYGwYjWt8j5QUrlFXel_BE16bqhthyIFrcGHwDcwOfGK2XNFqas8Qt0SFo2OO7pyvlpZD7yHuWVNYQMB6maTS08gfhRcAkLKrDu5La183bHi8I0WrY1PKS5mIWcTUQhqGDLqXP0PgjNvYoY8Q5e10cJaMNNuZV7_mWLVAfYtWB"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-bold text-[#1f2937] dark:text-white">
            Google
          </span>
        </button>
        <button
          type="button"
          disabled={isPending}
          onClick={() => handleOAuthSignIn("github")}
          className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 dark:border-slate-700 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQG3dvny75JdBG9ftDfWUXs269rnNuS9v76yco6_mAU2Oa3Q8RCKLPFnyEY5qQUAz_vDYyE3FZKV6E4MzvYdqxxs0sJ7n8FDn2b0R-O8bpfYKa3qU6AFG96ZuJ3QQxdw79PNt4xWRTJ8T5EDeMNAOyjl-4FPO7loUBxhcee65NgVyZEy4_tPT73QxMvn5dQtOjotzJGmOUCBAGXbYA8fkz0MEp7uAJEprmgOONLz8_sS_L9-n8wbVIqt7IelDZMOKGfd4NaZP7Su3a"
            alt="GitHub"
            className="w-5 h-5 dark:invert"
          />
          <span className="text-sm font-bold text-[#1f2937] dark:text-white">
            GitHub
          </span>
        </button>
      </div>
      <div className="mt-10 text-center">
        <p className="text-gray-600 dark:text-slate-400 font-medium text-sm">
          Conturile noi se gestionează în Supabase Auth sau printr-un flux de
          înregistrare dedicat.
        </p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-100 dark:border-slate-800/50 flex flex-wrap justify-center gap-6 text-xs text-gray-400 dark:text-slate-500 font-medium">
        <Link href="#" className="hover:text-[#f27f0d] transition-colors">
          Termeni și condiții
        </Link>
        <Link href="#" className="hover:text-[#f27f0d] transition-colors">
          Politică de confidențialitate
        </Link>
        <span>© 2024 BAC Info</span>
      </div>
    </div>
  );
}
