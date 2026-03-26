"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";

export function NavbarWrapper() {
  const pathname = usePathname();

  if (pathname === "/login") {
    return null;
  }

  return <Navbar />;
}
