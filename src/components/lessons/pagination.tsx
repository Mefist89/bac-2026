export function Pagination() {
  return (
    <div className="mt-12 flex justify-center">
      <nav className="flex items-center gap-2 bg-white dark:bg-navy-surface p-2 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-navy-deep text-gray-500 dark:text-gray-400 transition">
          <span className="material-icons-outlined">chevron_left</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-md transform hover:scale-105 transition">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-navy-deep text-gray-600 dark:text-gray-300 font-medium transition">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-navy-deep text-gray-600 dark:text-gray-300 font-medium transition">
          3
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-navy-deep text-gray-500 dark:text-gray-400 transition">
          <span className="material-icons-outlined">chevron_right</span>
        </button>
      </nav>
    </div>
  );
}
