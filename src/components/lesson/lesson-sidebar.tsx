export function LessonSidebar() {
  return (
    <aside className="lg:col-span-4 space-y-8">
      <div className="bg-white dark:bg-navy-surface p-6 rounded-2xl border border-gray-200 dark:border-gray-800 sticky top-24 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="material-icons-outlined text-primary">
            track_changes
          </span>
          Progresul Tău
        </h3>
        <div className="mb-6">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Capitol: Grafuri
            </span>
            <span className="text-2xl font-bold text-primary">65%</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <div className="bg-primary h-2.5 rounded-full w-[65%]"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/30 transition hover:bg-green-100 dark:hover:bg-green-900/20">
            <div className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full p-1 mr-3 shrink-0">
              <span className="material-icons-outlined text-sm">check</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                Concepte de bază
              </h4>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Finalizat
              </p>
            </div>
          </div>

          <div className="flex items-center p-3 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 dark:border-primary/20 relative overflow-hidden group hover:bg-primary/10 transition">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            <div className="bg-primary text-white rounded-full p-1 mr-3 animate-pulse shrink-0 shadow-sm shadow-primary/30">
              <span className="material-icons-outlined text-sm">
                play_arrow
              </span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight group-hover:text-primary transition">
                Matricea de Adiacență
              </h4>
              <p className="text-xs text-primary font-bold mt-0.5">
                În curs (Acum)
              </p>
            </div>
          </div>

          <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 opacity-60">
            <div className="bg-gray-200 dark:bg-gray-700 text-gray-500 rounded-full p-1 mr-3 shrink-0">
              <span className="material-icons-outlined text-sm">lock</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                Parcurgerea în Lățime (BFS)
              </h4>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Urmează
              </p>
            </div>
          </div>

          <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 opacity-60">
            <div className="bg-gray-200 dark:bg-gray-700 text-gray-500 rounded-full p-1 mr-3 shrink-0">
              <span className="material-icons-outlined text-sm">lock</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                Parcurgerea în Adâncime (DFS)
              </h4>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Urmează
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="material-icons-outlined text-primary">folder</span>
            Resurse Suplimentare
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition group"
                href="#"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 mr-3 group-hover:bg-red-200 dark:group-hover:bg-red-900/40 transition">
                  <span className="material-icons-outlined text-lg">
                    picture_as_pdf
                  </span>
                </span>
                <span className="font-medium">Fișă de lucru PDF</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition group"
                href="#"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/40 transition">
                  <span className="material-icons-outlined text-lg">code</span>
                </span>
                <span className="font-medium">Exemple cod sursă</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
