"use client";

interface TestRunnerHeaderProps {
  title: string;
  timeLeft?: string; // Optional for now
}

export function TestRunnerHeader({
  title,
  timeLeft = "30:00",
}: TestRunnerHeaderProps) {
  return (
    <div className="bg-white dark:bg-navy-surface border-b border-gray-200 dark:border-gray-800 px-4 py-4 sticky top-0 z-30 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white font-display">
            {title}
          </h1>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-mono bg-gray-100 dark:bg-navy-deep px-3 py-1.5 rounded-lg">
          <span className="material-icons-outlined text-lg">timer</span>
          <span className="font-bold">{timeLeft}</span>
        </div>
      </div>
    </div>
  );
}
