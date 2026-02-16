"use client";

import { cn } from "@/lib/utils";

interface QuestionNavigatorProps {
  totalQuestions: number;
  currentQuestionIndex: number;
  onQuestionSelect: (index: number) => void;
  answers: Record<number, unknown>; // Track answered questions
}

export function QuestionNavigator({
  totalQuestions,
  currentQuestionIndex,
  onQuestionSelect,
  answers,
}: QuestionNavigatorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {Array.from({ length: totalQuestions }).map((_, index) => {
        const isAnswered = answers[index] !== undefined;
        const isActive = currentQuestionIndex === index;

        return (
          <button
            key={index}
            onClick={() => onQuestionSelect(index)}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all",
              isActive
                ? "bg-primary text-white shadow-lg shadow-primary/30 scale-110"
                : isAnswered
                  ? "bg-primary/20 text-primary hover:bg-primary/30"
                  : "bg-gray-200 dark:bg-navy-deep text-gray-500 hover:bg-gray-300 dark:hover:bg-navy-surface",
            )}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
