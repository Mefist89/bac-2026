"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/footer";

export function FooterWrapper() {
  const pathname = usePathname();
  const isExercisePage = pathname?.startsWith("/exercises/");
  const isLessonPage = pathname?.startsWith("/lessons/");
  const isLoginPage = pathname === "/login";

  if (isExercisePage || isLessonPage || isLoginPage) {
    return null;
  }

  return <Footer />;
}
