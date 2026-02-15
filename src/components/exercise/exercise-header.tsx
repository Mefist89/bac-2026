import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ExerciseHeader() {
  return (
    <header className="h-16 bg-white dark:bg-navy-deep border-b border-gray-200 dark:border-white/10 flex items-center justify-between px-6 shrink-0 z-20 shadow-sm">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-orange-600 transition-colors">
            R
          </div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rezolvă<span className="text-primary">Online</span>
          </h1>
        </Link>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-50 dark:bg-navy-surface px-6 py-2 rounded-full border border-gray-200 dark:border-white/10 flex items-center gap-3 shadow-sm">
        <span className="material-icons-round text-primary key={1}">timer</span>
        <span className="font-mono text-xl font-bold tracking-widest text-primary">
          02:45:12
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider ml-1">
          Timp rămas
        </span>
      </div>

      <Button className="bg-primary hover:bg-orange-600 text-white font-semibold shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 transition-all">
        <span className="material-icons-round mr-2 key={2}">check_circle</span>
        Finalizează Test
      </Button>
    </header>
  );
}
