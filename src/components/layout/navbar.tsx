import Link from "next/link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-surface-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 shrink-0">
          <div className="shrink-0 flex items-center gap-2">
            <span className="material-icons-round text-primary text-4xl">
              terminal
            </span>
            <span className="font-display font-bold text-2xl text-gray-900 dark:text-white">
              BAC<span className="text-primary">Info</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Acasă
            </Link>
            <Link
              href="/lessons"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Lecții
            </Link>
            <Link
              href="/theory"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Teorie
            </Link>
            <Link
              href="/exercises"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Exerciții
            </Link>
            <Link
              href="/test-online"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Test Online
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Teste BAC
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="https://notebooklm.google.com/notebook/cbc559cb-4eb6-47ed-be2f-1416fb7f05c4"
              target="_blank"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Ajutor AI
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/login"
              className="bg-primary hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-orange-500/30"
            >
              Intră în cont
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  <span className="material-icons-round text-3xl">menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/"
                    className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    Acasă
                  </Link>
                  <Link
                    href="/lessons"
                    className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    Lecții
                  </Link>
                  <Link
                    href="/theory"
                    className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    Teorie
                  </Link>
                  <Link
                    href="/exercises"
                    className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    Exerciții
                  </Link>
                  <Link
                    href="/test-online"
                    className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    Test Online
                  </Link>
                  <Link
                    href="#"
                    className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    Teste BAC
                  </Link>
                  <Link
                    href="#"
                    className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    href="https://notebooklm.google.com/notebook/cbc559cb-4eb6-47ed-be2f-1416fb7f05c4"
                    target="_blank"
                    className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    Ajutor AI
                  </Link>
                  <hr className="my-2 border-gray-200 dark:border-white/10" />
                  <Link
                    href="/login"
                    className="bg-primary hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-orange-500/30 text-center"
                  >
                    Intră în cont
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
