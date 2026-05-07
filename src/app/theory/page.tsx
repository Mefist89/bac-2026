import { TheoryHeader } from "@/components/theory/theory-header";
import { TheoryFilters } from "@/components/theory/theory-filters";
import { TheoryList } from "@/components/theory/theory-list";
import { TheoryCard } from "@/components/theory/theory-card";
import { Pagination } from "@/components/lessons/pagination";

export default async function TheoryPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;

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
      title: "Tipuri de Date Simple în C++",
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
      title: "Tipuri de Date Structurate în C++",
      description:
        "Siruri de caractere (string), Structuri, Tablouri unidimensionale (vectori) si multidimensionale (matrice).",
      category: "C++",
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
      title: "Tipul expresiilor în C++. Conversii de tip în limbajul C++",
      description:
        "Tipul expresiilor în C++. Conversiile de tip în C++, conversii implicite și explicite.",
      category: "C++",
      categoryColor:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700/50",
      difficulty: "Intermediar" as const,
      difficultyColor:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700/50",
      duration: "30 min",
      status: "unread" as const,
    },
    {
      id: 5,
      title: "Teorie: Instrucțiunea IF",
      description:
        "Instrucțiunea if, formele ei și echivalente. Reguli de sintaxă, studii de caz și exemple practice.",
      category: "C++",
      categoryColor:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/50",
      difficulty: "Începător" as const,
      difficultyColor:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700/50",
      duration: "35 min",
      status: "unread" as const,
    },
    {
      id: 6,
      title: "Teorie: Instrucțiunea SWITCH",
      description:
        "Instrucțiunea switch, structură decizională multiplă. Reguli de sintaxă, studii de caz și exemple practice cu break și default.",
      category: "C++",
      categoryColor:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700/50",
      difficulty: "Intermediar" as const,
      difficultyColor:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700/50",
      duration: "45 min",
      status: "unread" as const,
    },
    {
      id: 7,
      title: "Teorie: Operatori în C++ și Priorități",
      description:
        "Operatori aritmetici, relaționali, logici și la nivel de bit. Regulile de precedență și asociativitate.",
      category: "C++",
      categoryColor:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/50",
      difficulty: "Intermediar" as const,
      difficultyColor:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700/50",
      duration: "40 min",
      status: "unread" as const,
    },
    {
      id: 8,
      title: "Teorie: Afișarea informației (iomanip)",
      description:
        "Formatarea afișării în C++ folosind biblioteca iomanip: setw, setprecision, scientific, fixed. Cum să creezi un output curat și aliniat.",
      category: "C++",
      categoryColor:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/50",
      difficulty: "Începător" as const,
      difficultyColor:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700/50",
      duration: "25 min",
      status: "unread" as const,
    },
    {
      id: 9,
      title: "Teorie: Instrucțiunea FOR",
      description:
        "Structura repetitivă cu număr cunoscut de pași. Sintaxă, exemple de parcurgere și capcane frecvente.",
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
      id: 10,
      title: "Teorie: Instrucțiunea WHILE",
      description:
        "Structura repetitivă cu test inițial. Extragerea cifrelor unui număr, CMMDC, și alte aplicații clasice.",
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
      id: 11,
      title: "Teorie: Instrucțiunea DO-WHILE",
      description:
        "Structura repetitivă cu test final. Execută codul cel puțin o dată. Comparație cu instrucțiunea while.",
      category: "C++",
      categoryColor:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/50",
      difficulty: "Începător" as const,
      difficultyColor:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700/50",
      duration: "20 min",
      status: "unread" as const,
    },
    {
      id: 12,
      title: "Teorie: Structuri Repetitive - Comparație",
      description:
        "Diferența dintre pre-condiție și post-condiție. Când să folosești for, while sau do-while și cum să le transformi unele în altele.",
      category: "C++",
      categoryColor:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/50",
      difficulty: "Începător" as const,
      difficultyColor:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700/50",
      duration: "25 min",
      status: "unread" as const,
    },
    {
      id: 13,
      title: "Teorie: Tablouri Unidimensionale (Vectori)",
      description:
        "Declararea, inițializarea, citirea și afișarea unui vector. Indexarea de la zero și capcane frecvente la Bacalaureat.",
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
      id: 14,
      title: "Teorie: Tablouri Bidimensionale (Matrice)",
      description:
        "Matrice: declarare, parcurgere prin linii și coloane. Diagonala principală și secundară.",
      category: "C++",
      categoryColor:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/50",
      difficulty: "Mediu" as const,
      difficultyColor:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700/50",
      duration: "35 min",
      status: "unread" as const,
    },
    {
      id: 15,
      title: "Teorie: Șiruri de Caractere",
      description:
        "Reprezentarea textului în C++. Diferența dintre char[] și std::string. Citirea cu spații și funcții esențiale din cstring.",
      category: "C++",
      categoryColor:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/50",
      difficulty: "Mediu" as const,
      difficultyColor:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700/50",
      duration: "40 min",
      status: "unread" as const,
    },
    {
      id: 16,
      title: "Teorie: Structuri de Date (Tipul Articol / struct)",
      description:
        "Definirea tipului struct. Accesarea câmpurilor și operații pe vectori de structuri (util la Subiectul II).",
      category: "C++",
      categoryColor:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/50",
      difficulty: "Mediu" as const,
      difficultyColor:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700/50",
      duration: "35 min",
      status: "unread" as const,
    },
    {
      id: 17,
      title: "Teorie: Generalități despre Fișiere (<fstream>)",
      description:
        "Citirea și scrierea datelor folosind fișiere text (ifstream, ofstream). Citirea până la EOF (End Of File).",
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
      id: 18,
      title: "Teorie: Funcții (Subprograme) și Funcții fără tip (void)",
      description:
        "Componentele unei funcții (tip returnat, nume, parametri). Diferența dintre funcțiile cu tip și funcțiile void.",
      category: "C++",
      categoryColor:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/50",
      difficulty: "Mediu" as const,
      difficultyColor:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700/50",
      duration: "40 min",
      status: "unread" as const,
    },
    {
      id: 19,
      title: "Teorie: Sisteme de Numerație (Baza 2 și Baza 10)",
      description:
        "Transformarea din binar în zecimal (suma puterilor) și din zecimal în binar (împărțirea repetată).",
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
      id: 20,
      title: "Teorie: Circuite Logice Elementare",
      description:
        "Cele 3 porți logice fundamentale (AND, OR, NOT) și clasificarea circuitelor (combinaționale vs. secvențiale).",
      category: "Sisteme Logice",
      categoryColor:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700/50",
      difficulty: "Începător" as const,
      difficultyColor:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700/50",
      duration: "25 min",
      status: "unread" as const,
    },
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(theories.length / itemsPerPage);

  // Calculate index range
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get current page theories
  const currentTheories = theories.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-deep pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-12 relative overflow-hidden">
        <TheoryHeader />
        <TheoryFilters />
        <TheoryList>
          {currentTheories.map((theory) => (
            <TheoryCard key={theory.id} {...theory} />
          ))}
        </TheoryList>
        <div className="mt-12 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/theory"
          />
        </div>
      </div>
    </div>
  );
}
