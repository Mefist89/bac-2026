import { TheoryHeader } from "@/components/theory/theory-header";
import { TheoryFilters } from "@/components/theory/theory-filters";
import { TheoryList } from "@/components/theory/theory-list";
import { TheoryCard } from "@/components/theory/theory-card";
import { Pagination } from "@/components/lessons/pagination";

export default function TheoryPage() {
  const theories = [
    {
      id: 1,
      title: "Cantitatea de informație",
      description:
        "Sinteză despre sistemul de transmisie a informației, formulele lui Hartley, codificare și discretizare.",
      category: "Fundamente",
      categoryColor:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700/50",
      difficulty: "Începător" as const,
      difficultyColor:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700/50",
      duration: "30 min",
      status: "read" as const,
    },
    {
      id: 2,
      title: "Tipuri de Date în C++",
      description:
        "Află totul despre tipurile de date fundamentale în C++: int, float, char, bool și modificatori.",
      category: "C++",
      categoryColor:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/50",
      difficulty: "Începător" as const,
      difficultyColor:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700/50",
      duration: "30 min",
      status: "unread" as const,
    },
    {
      id: 3,
      title: "Parcurgerea în Adâncime (DFS)",
      description:
        "Algoritmul DFS, implementare recursivă și iterativă (stivă). Componente conexe, sortare topologică.",
      category: "Algoritmi",
      categoryColor:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700/50",
      difficulty: "Intermediar" as const,
      difficultyColor:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700/50",
      duration: "25 min",
      status: "unread" as const,
    },
    {
      id: 4,
      title: "Arbori și Arbori Binari",
      description:
        "Definiția arborilor, terminologie (rădăcină, frunze, înălțime). Arbori binari de căutare (BST).",
      category: "Structuri de date",
      categoryColor:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700/50",
      difficulty: "Intermediar" as const,
      difficultyColor:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700/50",
      duration: "30 min",
      status: "unread" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-deep pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-12 relative overflow-hidden">
        <TheoryHeader />
        <TheoryFilters />
        <TheoryList>
          {theories.map((theory) => (
            <TheoryCard key={theory.id} {...theory} />
          ))}
        </TheoryList>
        <div className="mt-12 flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
