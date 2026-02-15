export function LessonNavigation() {
  return (
    <div className="flex justify-between items-center pt-8">
      <button className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition font-medium">
        <span className="material-icons-outlined mr-2">arrow_back</span>
        Lecția anterioară
      </button>
      <button className="bg-linear-to-r from-primary to-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 flex items-center hover:shadow-orange-500/50 transition transform hover:-translate-y-1">
        Următoarea Lecție
        <span className="material-icons-outlined ml-2">arrow_forward</span>
      </button>
    </div>
  );
}
