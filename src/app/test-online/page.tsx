import { TestOnlineHeader } from "@/components/test-online/test-online-header";
import { TestOnlineFilters } from "@/components/test-online/test-online-filters";
import { TestOnlineList } from "@/components/test-online/test-online-list";
import { TestOnlineCard } from "@/components/test-online/test-online-card";
import { Pagination } from "@/components/lessons/pagination";

export default function TestOnlinePage() {
  const tests = [
    {
      id: 1,
      title: "Test: Introducere în Grafuri",
      description:
        "Verifică-ți cunoștințele despre definițiile de bază ale grafurilor neorientate și orientate, grade, și reprezentări.",
      category: "Grafuri",
      categoryColor:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700/50",
      difficulty: "Ușor" as const,
      difficultyColor:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700/50",
      questionsCount: 15,
      status: "completed" as const,
    },
    {
      id: 2,
      title: "Simulare BAC 2024 (Model)",
      description:
        "Test complet de 3 ore, structurat conform modelului oficial de Bacalaureat. Include toate cele 3 subiecte.",
      category: "Simulări",
      categoryColor:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700/50",
      difficulty: "Avansat" as const,
      difficultyColor:
        "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-700/50",
      questionsCount: 30,
      status: "not_started" as const,
    },
    {
      id: 3,
      title: "Test: Algoritmi Elementari",
      description:
        "Probleme de bază cu vectori, matrice, și prelucrarea cifrelor unui număr. Ideal pentru recapitulare.",
      category: "Algoritmi",
      categoryColor:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700/50",
      difficulty: "Mediu" as const,
      difficultyColor:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700/50",
      questionsCount: 20,
      status: "in_progress" as const,
    },
    {
      id: 4,
      title: "Test: Șiruri de Caractere",
      description:
        "Funcții predefinite (cstring), prelucrarea șirurilor, și probleme tipice de la subiectul II.",
      category: "Limbajul C++",
      categoryColor:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/50",
      difficulty: "Mediu" as const,
      difficultyColor:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700/50",
      questionsCount: 12,
      status: "not_started" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-deep pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-12 relative overflow-hidden">
        <TestOnlineHeader />
        <TestOnlineFilters />
        <TestOnlineList>
          {tests.map((test) => (
            <TestOnlineCard key={test.id} {...test} />
          ))}
        </TestOnlineList>
        <div className="mt-12 flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
