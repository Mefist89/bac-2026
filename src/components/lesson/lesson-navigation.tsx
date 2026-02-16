import Link from "next/link";

interface LessonNavigationProps {
  prevLessonId?: number;
  nextLessonId?: number;
}

export function LessonNavigation({
  prevLessonId,
  nextLessonId,
}: LessonNavigationProps) {
  return (
    <div className="flex justify-between items-center pt-8">
      <div className="flex-1">
        {prevLessonId ? (
          <Link href={`/lessons/${prevLessonId}`}>
            <button className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition font-medium">
              <span className="material-icons-outlined mr-2">arrow_back</span>
              Lecția anterioară
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="flex items-center text-gray-300 dark:text-gray-700 cursor-not-allowed font-medium"
          >
            <span className="material-icons-outlined mr-2">arrow_back</span>
            Lecția anterioară
          </button>
        )}
      </div>

      <div className="flex-1 flex justify-end">
        {nextLessonId ? (
          <Link href={`/lessons/${nextLessonId}`}>
            <button className="bg-linear-to-r from-primary to-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 flex items-center hover:shadow-orange-500/50 transition transform hover:-translate-y-1">
              Următoarea Lecție
              <span className="material-icons-outlined ml-2">
                arrow_forward
              </span>
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 px-8 py-3 rounded-full font-bold flex items-center cursor-not-allowed"
          >
            Următoarea Lecție
            <span className="material-icons-outlined ml-2">arrow_forward</span>
          </button>
        )}
      </div>
    </div>
  );
}
