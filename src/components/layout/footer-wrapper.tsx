"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/footer";

export function FooterWrapper() {
  const pathname = usePathname();
  const isExercisePage = pathname?.startsWith("/exercises/");
  const isLessonPage = pathname?.startsWith("/lessons/");

  if (isExercisePage || isLessonPage) {
    return null;
  }

  return <Footer />;
}
