"use client";

import { Button } from "@/components/ui/button";

interface TestRunnerFooterProps {
  onCheck: () => void;
  onReset: () => void;
  onNext: () => void;
  onPrev: () => void;
  isLastQuestion: boolean;
  isFirstQuestion: boolean;
}

export function TestRunnerFooter({
  onCheck,
  onReset,
  onNext,
  onPrev,
  isLastQuestion,
  isFirstQuestion,
}: TestRunnerFooterProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
      <div className="flex gap-4 w-full sm:w-auto">
        <Button
          onClick={onCheck}
          className="bg-gray-500 hover:bg-gray-600 text-white font-medium px-6"
        >
          Verifică Răspunsurile
        </Button>
        <Button
          onClick={onReset}
          className="bg-gray-500 hover:bg-gray-600 text-white font-medium px-6"
        >
          Resetează
        </Button>
      </div>

      <div className="flex gap-2 w-full sm:w-auto justify-end">
        <Button
          variant="outline"
          onClick={onPrev}
          disabled={isFirstQuestion}
          className="gap-2"
        >
          <span className="material-icons-outlined text-sm">arrow_back</span>
          Anterior
        </Button>
        <Button
          variant="default" // Primary style
          onClick={onNext}
          disabled={isLastQuestion}
          className="gap-2 bg-primary hover:bg-orange-600"
        >
          Următorul
          <span className="material-icons-outlined text-sm">arrow_forward</span>
        </Button>
      </div>
    </div>
  );
}
