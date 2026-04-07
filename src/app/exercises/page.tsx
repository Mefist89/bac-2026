"use client";

import { motion } from "framer-motion";
import { ExercisesHeader } from "@/components/exercises/exercises-header";
import { ExercisesFilters } from "@/components/exercises/exercises-filters";
import { ExercisesList } from "@/components/exercises/exercises-list";
import { ExerciseCard } from "@/components/exercises/exercise-card";
import { Pagination } from "@/components/lessons/pagination";
import { StatusSelector } from "@/components/ui/status-selector";

export default function ExercisesPage() {
  const exercises = [
    {
      id: 1,
      title: "Baze de date (MS Access)",
      description:
        "Subiectul IV din testul de pretestare profil Uman. Include crearea tabelelor, stabilirea tipurilor de date, validarea câmpurilor și proiectarea unei interogări în MS Access.",
      tags: [
        { text: "Access", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700/50" },
        { text: "2026", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700/50" },
        { text: "Uman", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700/50" },
        { text: "Pretestare", color: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700/50" }
      ],
      points: 25,
      status: "in-progress" as const,
    },
    {
      id: 2,
      title: "Baze de date (MS Access)",
      description:
        "Subiectul IV din testul de exersare profil Real. Include crearea tabelelor cu tipuri de date complexe, măști de intrare și interogări parametrizate.",
      tags: [
        { text: "Access", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700/50" },
        { text: "2025", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700/50" },
        { text: "Real", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700/50" },
        { text: "Exersare", color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700/50" }
      ],
      points: 25,
      status: "unstarted" as const,
    },
    {
      id: 3,
      title: "Baze de date (MS Access)",
      description:
        "Subiectul IV din sesiunea de bază profil Uman. Concentrat pe gestionarea evenimentelor, chei străine, și validarea datelor introduse.",
      tags: [
        { text: "Access", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700/50" },
        { text: "2024", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700/50" },
        { text: "Uman", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700/50" },
        { text: "Bacalaureat", color: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-700/50" }
      ],
      points: 25,
      status: "unstarted" as const,
    },
    {
      id: 4,
      title: "Baze de date (MS Access)",
      description:
        "Subiectul IV din sesiunea de bacalaureat profil Real. Exercițiu complex ce combină mai multe tabele și interogări logice pentru obținerea seturilor de date.",
      tags: [
        { text: "Access", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700/50" },
        { text: "2024", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700/50" },
        { text: "Real", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700/50" },
        { text: "Sesiunea Suplimentară", color: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700/50" }
      ],
      points: 25,
      status: "unstarted" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-deep pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-12 relative overflow-hidden">
        <ExercisesHeader />
        <ExercisesFilters />
        <ExercisesList>
          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ExerciseCard {...exercise} />
            </motion.div>
          ))}
        </ExercisesList>
        <div className="mt-12 flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
