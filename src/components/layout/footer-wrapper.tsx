"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/footer";

export function FooterWrapper() {
  const pathname = usePathname();
  const isExercisePage = pathname?.startsWith("/exercises/");

  if (isExercisePage) {
    return null;
  }

  return <Footer />;
}
