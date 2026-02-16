"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface MatchValueItem {
  id: string;
  label: string;
}

interface ValidationResult {
  isCorrect: boolean;
  correctValue: string;
}

interface MatchValueTypeProps {
  items: MatchValueItem[];
  placeholder?: string;
  onChange: (answers: Record<string, string>) => void;
  currentAnswers?: Record<string, string>;
  validation?: Record<string, ValidationResult>;
}

export function MatchValueType({
  items,
  placeholder = "int, float, char sau bool",
  onChange,
  currentAnswers = {},
  validation,
}: MatchValueTypeProps) {
  const handleInputChange = (id: string, value: string) => {
    if (!validation) {
      onChange({
        ...currentAnswers,
        [id]: value,
      });
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const letter = String.fromCharCode(97 + index); // a, b, c...
        const result = validation?.[item.id];
        const isCorrect = result?.isCorrect;
        const isWrong = result && !isCorrect;

        return (
          <div
            key={item.id}
            className={cn(
              "flex flex-col p-4 border rounded-xl transition-all",
              isCorrect
                ? "border-green-500 bg-green-50 dark:border-green-500/50 dark:bg-green-900/10"
                : isWrong
                  ? "border-red-500 bg-red-50 dark:border-red-500/50 dark:bg-red-900/10"
                  : "border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-navy-deep/50",
            )}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2 min-w-[80px]">
                <span
                  className={cn(
                    "font-bold",
                    isCorrect
                      ? "text-green-600 dark:text-green-400"
                      : isWrong
                        ? "text-red-600 dark:text-red-400"
                        : "text-primary dark:text-primary-light",
                  )}
                >
                  {letter})
                </span>
                <span className="font-mono font-bold text-lg text-gray-900 dark:text-white">
                  {item.label}
                </span>
              </div>
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder={placeholder}
                  value={currentAnswers[item.id] || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(item.id, e.target.value)
                  }
                  disabled={!!validation}
                  className={cn(
                    "w-full pr-10",
                    isCorrect
                      ? "border-green-500 focus-visible:ring-green-500 font-bold text-green-700 dark:text-green-300"
                      : isWrong
                        ? "border-red-500 focus-visible:ring-red-500 font-bold text-red-700 dark:text-red-300"
                        : "bg-white dark:bg-navy-surface border-gray-200 dark:border-gray-700",
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
            </div>

            {isWrong && (
              <div className="mt-2 ml-0 sm:ml-[96px] text-sm md:text-base flex items-center gap-2">
                <span className="text-red-600 dark:text-red-400 font-bold">
                  Răspuns corect:
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-0.5 rounded font-mono font-bold border border-green-200 dark:border-green-700">
                  {result?.correctValue}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
