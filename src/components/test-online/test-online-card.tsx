"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface TestOnlineCardProps {
  id: number | string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  difficulty: "Ușor" | "Mediu" | "Avansat";
  difficultyColor: string;
  questionsCount: number;
  status: "completed" | "in_progress" | "not_started";
}

export function TestOnlineCard({
  id,
  title,
  description,
  category,
  categoryColor,
  difficulty,
  difficultyColor,
  questionsCount,
  status,
}: TestOnlineCardProps) {
  return (
    <div className="group relative bg-white dark:bg-navy-surface rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span
              className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border",
                categoryColor,
              )}
            >
              {category}
            </span>
            <span
              className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border",
                difficultyColor,
              )}
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
          <div className="flex flex-col items-center min-w-[60px]">
            <span className="text-xs text-gray-500 dark:text-gray-500 uppercase font-bold tracking-wider">
              Întrebări
            </span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {questionsCount}
            </span>
          </div>

          <div className="flex flex-col items-center min-w-[80px]">
            <span className="text-xs text-gray-500 dark:text-gray-500 uppercase font-bold tracking-wider mb-1">
              Status
            </span>
            <div
              className={cn(
                "flex items-center gap-1.5",
                status === "completed"
                  ? "text-green-500"
                  : status === "in_progress"
                    ? "text-yellow-500"
                    : "text-gray-400",
              )}
            >
              <span className="material-icons-outlined text-lg">
                {status === "completed"
                  ? "check_circle"
                  : status === "in_progress"
                    ? "timelapse"
                    : "radio_button_unchecked"}
              </span>
              <span className="text-sm font-bold">
                {status === "completed"
                  ? "Complet"
                  : status === "in_progress"
                    ? "În curs"
                    : "Neînceput"}
              </span>
            </div>
          </div>

          <Link
            href={`/test-online/${id}`}
            className="bg-gray-100 dark:bg-navy-deep hover:bg-primary hover:text-white text-gray-700 dark:text-white p-3 rounded-xl transition-all duration-300 group-hover:translate-x-1"
          >
            <span className="material-icons-outlined">play_arrow</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
