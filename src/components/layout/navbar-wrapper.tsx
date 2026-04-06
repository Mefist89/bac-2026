"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { hasSupabaseEnv } from "@/lib/supabase/config";

export function NavbarWrapper() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      if (!hasSupabaseEnv()) {
        setIsLoggedIn(false);
        return;
      }

      try {
        const { createClient } = await import("@/lib/supabase/browser");
        const supabase = createClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setIsLoggedIn(!!user);
      } catch {
        setIsLoggedIn(false);
      }
    }

    checkAuth();
  }, [pathname]);

  if (pathname === "/login") {
    return null;
  }

  return <Navbar isLoggedIn={isLoggedIn} />;
}
