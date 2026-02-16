"use client";

import { cn } from "@/lib/utils";

interface SingleChoiceItem {
  id: string;
  text: string;
}

interface ValidationResult {
  isCorrect: boolean;
  correctValue: string;
}

interface SingleChoiceTypeProps {
  items: SingleChoiceItem[];
  currentAnswer?: string;
  onChange: (answer: string) => void;
  validation?: ValidationResult; // Single validation result for the whole question
}

export function SingleChoiceType({
  items,
  currentAnswer,
  onChange,
  validation,
}: SingleChoiceTypeProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const letter = String.fromCharCode(97 + index); // a, b, c...
        const isSelected = currentAnswer === item.id;

        // Validation Logic
        const isCorrectOption =
          validation && item.id === validation.correctValue;
        const isSelectedandWrong = validation && isSelected && !isCorrectOption;

        let containerClass =
          "bg-white dark:bg-navy-surface border-gray-200 dark:border-gray-700 hover:border-primary/50";
        let markerClass = "border-gray-300 dark:border-gray-600";

        if (validation) {
          if (isCorrectOption) {
            containerClass =
              "bg-green-50 dark:bg-green-900/10 border-green-500 dark:border-green-500/50";
            markerClass = "border-green-500 bg-green-500 text-white";
          } else if (isSelectedandWrong) {
            containerClass =
              "bg-red-50 dark:bg-red-900/10 border-red-500 dark:border-red-500/50";
            markerClass = "border-red-500 bg-red-500 text-white";
          } else {
            containerClass =
              "bg-gray-50 dark:bg-navy-deep/50 border-gray-200 dark:border-gray-700 opacity-60";
          }
        } else if (isSelected) {
          containerClass = "bg-primary/5 border-primary shadow-sm";
          markerClass = "border-primary bg-primary text-white";
        }

        return (
          <div
            key={item.id}
            onClick={() => !validation && onChange(item.id)}
            className={cn(
              "flex items-center gap-4 p-4 border rounded-xl transition-all",
              !validation && "cursor-pointer",
              containerClass,
            )}
          >
            <div
              className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                markerClass,
              )}
            >
              {(isSelected || isCorrectOption) && (
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              )}
            </div>

            <div className="flex-1">
              <span
                className={cn(
                  "font-bold mr-2",
                  validation
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-500",
                )}
              >
                {letter})
              </span>
              <span className="text-gray-900 dark:text-white">{item.text}</span>
            </div>

            {validation && isCorrectOption && (
              <span className="material-icons-outlined text-green-500">
                check_circle
              </span>
            )}
            {validation && isSelectedandWrong && (
              <span className="material-icons-outlined text-red-500">
                cancel
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
