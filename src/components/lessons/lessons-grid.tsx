import { LessonCard } from "./lesson-card";

// Mock data based on the design
const LESSONS = [
  {
    id: 1,
    title: "Cantitatea de informație",
    description:
      "Sinteză despre sistemul de transmisie a informației, formulele lui Hartley, codificare și discretizare.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyPNO1CbXPranoEMdPv9Ym_K9LWFk-nNj8Dj73_9m9Fo-Y4GQVjatdHVrVau4Aran2k43zgRyPDfgudPTE174QK2ccQIoEIdd3qo3kXm7V0N2gY9EOhPilQhkpcZZ6p2u2Iiwefdjr5sSrcGuSxwCM8JYNDlJwyZKylOrPXXJHv3rLSV5ufwVvOtxZLLI0ZoWurIkYFaBJMjWy76Ax8LZ3lJbxB8jupZPD2VJP1WcytexGBkMCUc6KXOP0t-_pD_UPRb9NsrP3mXcJ", // Keep existing or update if possible
    category: "Fundamente",
    categoryColor: "text-blue-600",
    difficulty: "Ușor" as const,
    difficultyColor: "bg-green-500",
    duration: "30 min",
    grade: "Clasa a IX-a",
    isPremium: false,
  },
  {
    id: 2,
    title: "Tipuri de Date în C++",
    description:
      "Află totul despre tipurile de date fundamentale în C++: int, float, char, bool și modificatori.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_2GIzjZ6VxsoSJbUfo38WHmnp0paPQT4I1l-Nbx_g40yb5Rys24kY3plStXv19IqXSVQlPRy3GOHnQvvklcmrIBnbWCysBTG9sMX7JexzKn30RapfrKb_penjuoJgHECYYjNpIwJgoOr0R21JUWMAbeJqzWxK-Phrv2AkyGG7Xw4MNx8P6vl-O9m7-wg44_bPTmec685Btfls3bQ8b2pqpAm7FnN1M-PpQn0w0L9NOFtjR7BRUo2zNIw8N7OH3UFjKpV5KW7zCae5",
    category: "C++",
    categoryColor: "text-indigo-600",
    difficulty: "Ușor" as const,
    difficultyColor: "bg-green-500",
    duration: "30 min",
    grade: "Clasa a IX-a",
    isPremium: false,
  },
  {
    id: 3,
    title: "Parcurgerea Grafurilor (BFS & DFS)",
    description:
      "Algoritmii de parcurgere în lățime și în adâncime. Aplicații practice și implementare C++.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQz6aO69qZnxi_9DW2OPMxeRRfHprnNS7r08dVsvOqIkpCUtY5Mwf10vOnD2OyzNO78JyEDrW1sm8sG1oc7EwaRgt5yaIt4GIse-hZDy_pwHehul3mkXzo8i0HQxNfHXi1TltPwYmfGpk8_Sgs8RkB0R-J42ruLJ9bZwRr_JyNJ5A8vf19IWvU7EEV_gtU65yA_rn92OYLWX2ziu5fsLL_WyWl5Dzbyah3BKqrfPdewoHtdqHQqRwdghiG1qELRdDRuaJ9H3Z1jDkm",
    category: "Grafuri",
    categoryColor: "text-indigo-600",
    difficulty: "Avansat" as const,
    difficultyColor: "bg-red-500",
    duration: "90 min",
    grade: "Clasa a XI-a",
    isPremium: true,
  },
  {
    id: 4,
    title: "Matrice și Vectori",
    description:
      "Manipularea tablourilor bidimensionale. Parcurgerea în spirală și elemente de pe diagonale.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0q0KXHUwmZKLt8Q6gHuAEHPS3Ij5UcRtb7GOKm-mXqDNFHT7kVFfXr76w4g5lOdDML88omSzJQatYNUt_kUrRpahpoihQq00BLtQvYo8BPSgYXZjHYZRelFT_Z8lgotyAqL8CwW5HDVDo7gWTJONK1A6xcYqpD-OSSNtAwqiWqzNXM0emu1LcXfjKdwpzP6bhLbjYwaZGQXfA-k69Jz02HSY4Jc0hQ7c_Nb7rCrrUaoB5QnyefBWwiGfmb4SEXrmX1cUHvEFh4uBA",
    category: "Tablouri",
    categoryColor: "text-blue-600",
    difficulty: "Mediu" as const,
    difficultyColor: "bg-yellow-500",
    duration: "50 min",
    grade: "Clasa a IX-a",
    isPremium: false,
  },
  {
    id: 5,
    title: "Metoda Backtracking",
    description:
      "Generarea permutărilor, combinărilor și aranjamentelor. Problema damelor și labirintul.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBHGHV6FghL1nFAW54U2slptatF2tDAKjGqkjCHCCkBKUCWYsOBgGmASuEQXBsa3tmi0mMKpuc_-oFoOb8TPsmZHyNbU4ZuBmeE0bDmsnyxXbxwCK7_2B9QB-TOIkT8tcuwB6PH0w5rRrMOXEaMOHoYQYhlE_mKiPboGanskg05YyXDJphxZAPK-ErQwzRHzRic4oVVE-3fGM0bREJm4RXtVC57N3Dm3wMj2QsLHPkeE2pW3DEoY5gdEfyfCR8mEl00Q-FnVkM6oKH",
    category: "Backtracking",
    categoryColor: "text-pink-600",
    difficulty: "Avansat" as const,
    difficultyColor: "bg-red-500",
    duration: "120 min",
    grade: "Clasa a X-a",
    isPremium: true,
  },
  {
    id: 6,
    title: "Șiruri de Caractere",
    description:
      "Funcții predefinite în <cstring>. Prelucrarea textelor, palindroame și anagrame.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8XJPFooG2UP_fmdRAySmqeDNgeMoUsBrwB0IqLBaAk9_gotVUhQvY2xCi3kPj-F-GK7b2yWJBtUQ--ogr8bK1r5qieEGOKdOWA76un1Ss_3er-XiZ-9je5d0NjL-iGxPeOSx0KOobA8JkjsHy63A93cBPag9YiIl3PKgT9pDYucmIuw8QJ1nCXHTauCH4kKTTf8yYs8DYYTAaMQsU2UKMy2SRE5aB_4xVKXJJVPvPl3ljg69Q4L1qCdUhY7e0Xe_Y_JjEfdX9rvjt",
    category: "Șiruri",
    categoryColor: "text-teal-600",
    difficulty: "Ușor" as const,
    difficultyColor: "bg-green-500",
    duration: "40 min",
    grade: "Clasa a X-a",
    isPremium: false,
  },
];

export function LessonsGrid() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center mb-6 bg-white dark:bg-navy-surface p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-0">
          Afișare{" "}
          <span className="font-bold text-gray-900 dark:text-white">9</span>{" "}
          rezultate din{" "}
          <span className="font-bold text-gray-900 dark:text-white">45</span>
        </p>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Sortare:
          </span>
          <select className="bg-gray-50 dark:bg-navy-deep border-0 text-sm rounded-lg focus:ring-2 focus:ring-primary text-gray-700 dark:text-gray-200 py-2 pl-3 pr-8 cursor-pointer hover:bg-gray-100 dark:hover:bg-navy-deep/80 transition outline-none">
            <option>Cele mai noi</option>
            <option>Popularitate</option>
            <option>Dificultate (Crescator)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {LESSONS.map((lesson) => (
          <LessonCard key={lesson.id} {...lesson} />
        ))}
      </div>
    </>
  );
}
