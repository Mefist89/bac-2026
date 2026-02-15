import { Button } from "@/components/ui/button";

export function ExerciseSidebar() {
  return (
    <aside className="w-64 bg-background dark:bg-navy-surface border-r border-gray-200 dark:border-white/10 flex flex-col overflow-y-auto shrink-0 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)] z-10">
      <div className="p-4">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
          Structură Examen
        </h2>

        {/* Subiectul I */}
        <div className="mb-6">
          <h3 className="flex items-center justify-between text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 px-2">
            Subiectul I
            <span className="text-xs bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-0.5 rounded border border-green-200 dark:border-green-800 font-medium">
              5/5
            </span>
          </h3>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Button
                key={i}
                className="aspect-square rounded bg-primary text-white font-medium flex items-center justify-center text-sm shadow-sm hover:bg-orange-600 transition-colors relative group p-0 min-w-0"
              >
                {i}
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-white dark:bg-navy-surface border border-gray-100 dark:border-white/10 rounded-full flex items-center justify-center shadow-sm">
                  <span className="material-icons-round text-[10px] text-green-500 font-bold key={i}">
                    check
                  </span>
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Subiectul II */}
        <div className="mb-6">
          <h3 className="flex items-center justify-between text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 px-2">
            Subiectul II
            <span className="text-xs bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded border border-orange-200 dark:border-orange-800 font-medium">
              1/2
            </span>
          </h3>
          <div className="grid grid-cols-5 gap-2">
            <Button className="aspect-square rounded bg-primary text-white font-medium flex items-center justify-center text-sm shadow-sm hover:bg-orange-600 transition-colors relative group p-0 min-w-0">
              1
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-white dark:bg-navy-surface border border-gray-100 dark:border-white/10 rounded-full flex items-center justify-center shadow-sm">
                <span className="material-icons-round text-[10px] text-green-500 font-bold key={1}">
                  check
                </span>
              </span>
            </Button>
            <Button
              variant="outline"
              className="aspect-square rounded bg-white dark:bg-navy-deep border border-gray-200 dark:border-white/20 text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-orange-50 dark:hover:bg-orange-900/10 hover:border-primary transition-colors font-medium flex items-center justify-center text-sm relative shadow-sm p-0 min-w-0"
            >
              2
            </Button>
          </div>
        </div>

        {/* Subiectul III */}
        <div className="mb-6">
          <h3 className="flex items-center justify-between text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 px-2">
            Subiectul III
            <span className="text-xs bg-gray-100 dark:bg-navy-deep text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded border border-gray-200 dark:border-white/10 font-medium">
              0/3
            </span>
          </h3>
          <div className="grid grid-cols-1 gap-2">
            <Button
              variant="ghost"
              className="w-full justify-between h-auto py-2 px-3 bg-primary/5 dark:bg-primary/20 border border-primary/20 text-primary font-semibold hover:bg-primary/10 transition-all shadow-sm"
            >
              Problema 1
              <span className="material-icons-round text-base key={1}">
                edit
              </span>
            </Button>
            {[2, 3].map((i) => (
              <Button
                key={i}
                variant="outline"
                className="w-full justify-between h-auto py-2 px-3 bg-white dark:bg-navy-deep border border-transparent hover:border-gray-200 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-navy-surface text-gray-600 dark:text-gray-400 font-medium transition-all"
              >
                Problema {i}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/10 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded hover:bg-gray-50 dark:hover:bg-navy-surface"
          >
            <span className="material-icons-round text-gray-400 dark:text-gray-500 key={1}">
              description
            </span>
            Fișă de formule
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded hover:bg-gray-50 dark:hover:bg-navy-surface"
          >
            <span className="material-icons-round text-gray-400 dark:text-gray-500 key={2}">
              help
            </span>
            Instrucțiuni
          </Button>
        </div>
      </div>
    </aside>
  );
}
