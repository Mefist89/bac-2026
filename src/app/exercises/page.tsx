import { ExercisesHeader } from "@/components/exercises/exercises-header";
import { ExercisesFilters } from "@/components/exercises/exercises-filters";
import { ExercisesList } from "@/components/exercises/exercises-list";
import { ExerciseCard } from "@/components/exercises/exercise-card";
import { Pagination } from "@/components/lessons/pagination";

export default function ExercisesPage() {
  const exercises = [
    {
      id: 1,
      title: "Suma elementelor pare",
      description:
        "Scrieți un program care citește de la tastatură un număr natural n și apoi n numere naturale. Programul trebuie să calculeze suma numerelor pare citite.",
      category: "Vectori",
      categoryColor:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700/50",
      difficulty: "Ușor" as const,
      difficultyColor:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700/50",
      points: 100,
      status: "solved" as const,
    },
    {
      id: 2,
      title: "Parcurgere Spirală",
      description:
        "Se dă o matrice pătratică cu n linii și n coloane. Să se afișeze elementele matricei parcurgând-o în spirală, pornind din colțul stânga-sus.",
      category: "Matrice",
      categoryColor:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700/50",
      difficulty: "Mediu" as const,
      difficultyColor:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700/50",
      points: 250,
      status: "in-progress" as const,
      hint: "Încearcă să folosești 4 variabile pentru marginile curente ale spiralei (sus, jos, stânga, dreapta).",
    },
    {
      id: 3,
      title: "Drumul Minim (Dijkstra)",
      description:
        "Se dă un graf orientat ponderat conex. Determinați drumul de cost minim de la nodul de start S la toate celelalte noduri din graf.",
      category: "Grafuri",
      categoryColor:
        "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-700/50",
      difficulty: "Greu" as const,
      difficultyColor:
        "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-700/50",
      points: 500,
      status: "unstarted" as const,
    },
    {
      id: 4,
      title: "Vocale și Consoane",
      description:
        "Se dă un text cu cel mult 100 de caractere. Să se determine numărul de vocale din text. Se consideră vocale literele a, e, i, o, u, atât mici cât și mari.",
      category: "Șiruri de caractere",
      categoryColor:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700/50",
      difficulty: "Ușor" as const,
      difficultyColor:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700/50",
      points: 100,
      status: "unstarted" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-deep pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-12 relative overflow-hidden">
        <ExercisesHeader />
        <ExercisesFilters />
        <ExercisesList>
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} {...exercise} />
          ))}
        </ExercisesList>
        <div className="mt-12 flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
