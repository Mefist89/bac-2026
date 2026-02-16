"use client";

import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

interface ValidationResult {
  isCorrect: boolean;
  correctValue: string;
}

interface ShortAnswerTypeProps {
  placeholder?: string;
  currentAnswer?: string;
  onChange: (answer: string) => void;
  validation?: ValidationResult;
}

export function ShortAnswerType({
  placeholder = "Introduceți răspunsul...",
  currentAnswer,
  onChange,
  validation,
}: ShortAnswerTypeProps) {
  const isCorrect = validation?.isCorrect;
  const isWrong = validation && !isCorrect;

  return (
    <div className="max-w-md">
      <div className="relative">
        <Input
          type="text"
          placeholder={placeholder}
          value={currentAnswer || ""}
          onChange={(e) => !validation && onChange(e.target.value)}
          disabled={!!validation}
          className={cn(
            "bg-white dark:bg-navy-surface h-12 text-lg pr-10 transition-all",
            isCorrect
              ? "border-green-500 focus-visible:ring-green-500 font-bold text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/10"
              : isWrong
                ? "border-red-500 focus-visible:ring-red-500 font-bold text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-900/10"
                : "border-gray-200 dark:border-gray-700",
          )}
        />
        {isCorrect && (
          <span className="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-green-500 pointer-events-none">
            check_circle
          </span>
        )}
        {isWrong && (
          <span className="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none">
            cancel
          </span>
        )}
      </div>

      {isWrong && (
        <div className="mt-2 text-sm md:text-base flex items-center gap-2">
          <span className="text-red-600 dark:text-red-400 font-bold">
            Răspuns corect:
          </span>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-0.5 rounded font-mono font-bold border border-green-200 dark:border-green-700">
            {validation.correctValue}
          </span>
        </div>
      )}
    </div>
  );
}
