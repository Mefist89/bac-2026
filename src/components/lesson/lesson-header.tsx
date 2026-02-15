import Link from "next/link";

export function LessonHeader() {
  return (
    <div className="bg-white dark:bg-navy-surface py-12 border-b border-gray-200 dark:border-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
              <Link href="/lessons" className="hover:text-primary transition">
                Lecții
              </Link>
              <span className="material-icons-outlined text-xs">
                chevron_right
              </span>
              <a href="#" className="hover:text-primary transition">
                Clasa a XI-a
              </a>
              <span className="material-icons-outlined text-xs">
                chevron_right
              </span>
              <span className="text-primary font-medium">Grafuri</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight font-display">
              Teorie: Grafuri și Aplicații
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Învață conceptele fundamentale despre grafuri neorientate,
              reprezentarea lor și algoritmii de parcurgere.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold border border-green-200 dark:border-green-800 uppercase tracking-wider">
              Nivel: Mediu
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-bold border border-blue-200 dark:border-blue-800 flex items-center gap-1 uppercase tracking-wider">
              <span className="material-icons-outlined text-[14px]">
                schedule
              </span>{" "}
              45 min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
