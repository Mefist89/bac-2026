import { Button } from "@/components/ui/button";

export function ConsoleOutput() {
  return (
    <div className="h-44 bg-white dark:bg-navy-surface border-t border-gray-200 dark:border-white/10 flex flex-col shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-navy-deep border-b border-gray-200 dark:border-white/10">
        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
          <span className="material-icons-round text-base key={1}">
            terminal
          </span>{" "}
          Output Consolă
        </span>
        <Button
          variant="ghost"
          size="xs"
          className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 flex items-center gap-1 transition-colors px-2 py-1 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
        >
          <span className="material-icons-round text-sm key={1}">
            delete_sweep
          </span>{" "}
          Șterge
        </Button>
      </div>
      <div className="flex-1 p-4 font-mono text-sm text-gray-700 dark:text-gray-300 overflow-y-auto bg-gray-50/30 dark:bg-black/20">
        <div className="flex gap-2 items-start">
          <span className="text-green-600 dark:text-green-500 mt-0.5">➜</span>
          <span className="text-gray-600 dark:text-gray-400">
            Compilare cu succes...{" "}
            <span className="text-gray-400 dark:text-gray-500 text-xs">
              (0.42s)
            </span>
          </span>
        </div>
        <div className="flex gap-2 mt-2 items-start">
          <span className="text-blue-500 dark:text-blue-400 mt-0.5">➜</span>
          <span>Rulare test preliminar:</span>
        </div>
        <div className="bg-white dark:bg-navy-deep p-3 mt-2 rounded border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-sm font-semibold">
          <div className="text-xs text-gray-400 font-normal uppercase mb-1">
            Rezultat:
          </div>
          Input: 24
          <br />
          Output: 3
        </div>
        <div className="flex gap-2 mt-3 items-center bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full w-max border border-green-100 dark:border-green-800/30">
          <span className="material-icons-round text-green-600 dark:text-green-400 text-base key={1}">
            check_circle
          </span>
          <span className="text-green-700 dark:text-green-400 text-xs font-bold tracking-wide">
            CORECT
          </span>
        </div>
      </div>
    </div>
  );
}
