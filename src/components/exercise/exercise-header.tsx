import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ExerciseHeaderProps {
  onOpenSidebar?: () => void;
}

export function ExerciseHeader({ onOpenSidebar }: ExerciseHeaderProps) {
  return (
    <header className="h-16 bg-white dark:bg-navy-deep border-b border-gray-200 dark:border-white/10 flex items-center justify-between px-4 md:px-6 shrink-0 z-20 shadow-sm relative">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-500 dark:text-gray-400"
          onClick={onOpenSidebar}
        >
          <span className="material-icons-round text-2xl">menu</span>
        </Button>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-orange-600 transition-colors">
            R
          </div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white hidden sm:block">
            Rezolvă<span className="text-primary">Online</span>
          </h1>
        </Link>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-50 dark:bg-navy-surface px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-gray-200 dark:border-white/10 flex items-center gap-2 md:gap-3 shadow-sm min-w-max">
        <span className="material-icons-round text-primary text-lg md:text-xl">
          timer
        </span>
        <span className="font-mono text-lg md:text-xl font-bold tracking-widest text-primary">
          02:45:12
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider ml-1 hidden md:inline">
          Timp rămas
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Button className="bg-primary hover:bg-orange-600 text-white font-semibold shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 transition-all hidden md:flex">
          <span className="material-icons-round mr-2">check_circle</span>
          Finalizează Test
        </Button>
        <Button
          size="icon"
          className="md:hidden bg-primary text-white rounded-full"
        >
          <span className="material-icons-round">check</span>
        </Button>
      </div>
    </header>
  );
}
