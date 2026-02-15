export function ExercisesFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-10 items-center justify-between bg-white dark:bg-navy-surface p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
      <div className="relative w-full md:w-96">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="material-icons-outlined text-gray-400">search</span>
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border-none rounded-xl leading-5 bg-gray-50 dark:bg-navy-deep text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm"
          placeholder="Caută exerciții, concepte..."
        />
      </div>
      <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
        <button className="px-5 py-2.5 rounded-lg text-sm font-medium bg-primary text-white shadow-lg shadow-primary/25 whitespace-nowrap transition-all hover:bg-orange-600">
          Toate
        </button>
        <button className="px-5 py-2.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-navy-deep text-gray-600 dark:text-gray-400 border border-transparent hover:border-primary/30 whitespace-nowrap transition-all">
          Vectori
        </button>
        <button className="px-5 py-2.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-navy-deep text-gray-600 dark:text-gray-400 border border-transparent hover:border-primary/30 whitespace-nowrap transition-all">
          Matrice
        </button>
        <button className="px-5 py-2.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-navy-deep text-gray-600 dark:text-gray-400 border border-transparent hover:border-primary/30 whitespace-nowrap transition-all">
          Grafuri
        </button>
        <button className="px-5 py-2.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-navy-deep text-gray-600 dark:text-gray-400 border border-transparent hover:border-primary/30 whitespace-nowrap transition-all">
          Backtracking
        </button>
      </div>
    </div>
  );
}
