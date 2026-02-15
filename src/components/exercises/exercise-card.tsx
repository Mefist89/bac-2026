"use client";

import Link from "next/link";

interface ExerciseCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryColor: string; // e.g. "bg-purple-100 text-purple-800"
  difficulty: "Ușor" | "Mediu" | "Greu";
  difficultyColor: string; // e.g. "bg-blue-100 text-blue-800"
  points: number;
  status: "solved" | "in-progress" | "unstarted";
  hint?: string;
}

export function ExerciseCard({
  id,
  title,
  description,
  category,
  categoryColor,
  difficulty,
  difficultyColor,
  points,
  status,
  hint,
}: ExerciseCardProps) {
  return (
    <div className="group relative bg-white dark:bg-navy-surface rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${categoryColor}`}
            >
              {category}
            </span>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${difficultyColor}`}
            >
              {difficulty}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-6 md:w-auto w-full border-t md:border-t-0 border-gray-100 dark:border-gray-800 pt-4 md:pt-0">
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 dark:text-gray-500 uppercase font-bold tracking-wider">
              Puncte
            </span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {points}
            </span>
          </div>

          {status === "in-progress" && hint && (
            <div className="relative group/hint">
              <button className="flex items-center gap-1 text-primary text-sm font-semibold hover:text-orange-400 transition-colors">
                <span className="material-icons-outlined text-base">
                  lightbulb
                </span>
                <span>Hint</span>
              </button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 bg-primary text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover/hint:opacity-100 group-hover/hint:visible transition-all duration-300 z-10 text-center">
                {hint}
                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-primary"></div>
              </div>
            </div>
          )}

          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 dark:text-gray-500 uppercase font-bold tracking-wider mb-1">
              Status
            </span>
            <div
              className={`flex items-center gap-1.5 ${
                status === "solved"
                  ? "text-green-500"
                  : status === "in-progress"
                    ? "text-yellow-500"
                    : "text-gray-400"
              }`}
            >
              <span className="material-icons-outlined text-lg">
                {status === "solved"
                  ? "check_circle"
                  : status === "in-progress"
                    ? "pending"
                    : "radio_button_unchecked"}
              </span>
              <span className="text-sm font-bold">
                {status === "solved"
                  ? "Rezolvat"
                  : status === "in-progress"
                    ? "În lucru"
                    : "Neînceput"}
              </span>
            </div>
          </div>

          <Link
            href={`/exercises/${id}`}
            className="bg-gray-100 dark:bg-navy-deep hover:bg-primary hover:text-white text-gray-700 dark:text-white p-3 rounded-xl transition-all duration-300 group-hover:translate-x-1"
          >
            <span className="material-icons-outlined">
              {status === "in-progress" ? "play_arrow" : "arrow_forward"}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
