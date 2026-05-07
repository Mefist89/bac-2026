import { LessonHeader } from "@/components/lesson/lesson-header";
import { LessonSidebar } from "@/components/lesson/lesson-sidebar";
import { LessonContent } from "@/components/lesson/lesson-content";
import { LessonNavigation } from "@/components/lesson/lesson-navigation";
import { StatusSelector } from "@/components/ui/status-selector";
import fs from "fs";
import path from "path";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function LessonDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const lessonId = parseInt(id);

  let lessonData = {
    title: "",
    description: "",
    level: "",
    duration: "",
  };

  let content = "";
  let structuredData = null;
  let resources: { title: string; url: string; type: "pdf" | "code" }[] = [];

  if (lessonId === 1) {
    lessonData = {
      title: "Cantitatea de informație",
      description:
        "Sinteză despre sistemul de transmisie a informației, formulele lui Hartley, codificare și discretizare.",
      level: "Ușor",
      duration: "30 min",
    };

    try {
      const jsonPath = path.join(
        process.cwd(),
        "src/data/lessons/lesson-1.json",
      );
      if (fs.existsSync(jsonPath)) {
        const fileContent = fs.readFileSync(jsonPath, "utf-8");
        structuredData = JSON.parse(fileContent);
      } else {
        const filePath = path.join(
          process.cwd(),
          "src/data/lessons/lesson-1.md",
        );
        content = fs.readFileSync(filePath, "utf-8");
      }

      resources = [
        {
          title: "Teorie Completă (PDF)",
          url: "/materials/subiectul1/cantitatea_de_informatie_full.pdf",
          type: "pdf",
        },
        {
          title: "Rezumat (PDF)",
          url: "/materials/subiectul1/cantitatea_de_informatie_rezumat.pdf",
          type: "pdf",
        },
      ];
    } catch (error) {
      console.error("Error reading lesson file:", error);
      content = "Eroare la încărcarea lecției.";
    }
  } else if (lessonId === 2) {
    lessonData = {
      title: "Tipuri de Date",
      description:
        "Află totul despre tipurile de date fundamentale în C++: int, float, char, bool și modificatori.",
      level: "Ușor",
      duration: "30 min",
    };
  } else if (lessonId === 3) {
    lessonData = {
      title: "Tipuri de Date Structurate în C++",
      description:
        "Siruri de caractere (string), Structuri, Tablouri unidimensionale (vectori) si multidimensionale (matrice).",
      level: "Intermediar",
      duration: "25 min",
    };
  } else if (lessonId === 4) {
    lessonData = {
      title: "Tipul expresiilor în C++. Conversii de tip",
      description:
        "Tipul expresiilor în C++. Conversiile de tip în C++, conversii implicite și explicite.",
      level: "Intermediar",
      duration: "30 min",
    };
  } else if (lessonId === 5) {
    lessonData = {
      title: "Instrucțiunea IF",
      description:
        "Instrucțiuni decizionale (if, switch) și repetitive (for, while, do-while). Controlul fluxului de execuție.",
      level: "Începător",
      duration: "35 min",
    };
  } else if (lessonId === 6) {
    lessonData = {
      title: "Instrucțiunea SWITCH",
      description:
        "Instrucțiunea switch, structură decizională multiplă. Reguli de sintaxă, studii de caz și exemple practice.",
      level: "Începător",
      duration: "30 min",
    };
  } else if (lessonId === 7) {
    lessonData = {
      title: "Operatori și Priorități în C++",
      description:
        "Operatori aritmetici, relaționali, logici și la nivel de bit. Regulile de precedență și asociativitate.",
      level: "Intermediar",
      duration: "40 min",
    };
  } else if (lessonId === 8) {
    lessonData = {
      title: "Afișarea informației (iomanip)",
      description:
        "Formatarea afișării în C++ folosind biblioteca iomanip: setw, setprecision, scientific, fixed.",
      level: "Începător",
      duration: "25 min",
    };
  } else if (lessonId === 9) {
    lessonData = {
      title: "Instrucțiunea FOR",
      description:
        "Structura repetitivă cu număr cunoscut de pași. Sintaxă, exemple de parcurgere și capcane frecvente.",
      level: "Începător",
      duration: "30 min",
    };
  } else if (lessonId === 10) {
    lessonData = {
      title: "Instrucțiunea WHILE",
      description:
        "Structura repetitivă cu test inițial. Extragerea cifrelor unui număr, CMMDC, și alte aplicații clasice.",
      level: "Începător",
      duration: "30 min",
    };
  } else if (lessonId === 11) {
    lessonData = {
      title: "Instrucțiunea DO-WHILE",
      description:
        "Structura repetitivă cu test final. Execută codul cel puțin o dată. Comparație cu instrucțiunea while.",
      level: "Începător",
      duration: "20 min",
    };
  } else if (lessonId === 12) {
    lessonData = {
      title: "Pre/Post Condiție. Comparație for, while, do-while",
      description:
        "Diferența dintre testul inițial și cel final. Analiza și compararea celor 3 tipuri de structuri repetitive.",
      level: "Începător",
      duration: "25 min",
    };
  } else if (lessonId === 13) {
    lessonData = {
      title: "Tablouri Unidimensionale (Vectori)",
      description:
        "Declararea, inițializarea, citirea și afișarea unui vector. Indexarea de la zero și capcane frecvente.",
      level: "Începător",
      duration: "30 min",
    };
  } else if (lessonId === 14) {
    lessonData = {
      title: "Tablouri Bidimensionale (Matrice)",
      description:
        "Matrice: declarare, parcurgere prin linii și coloane. Diagonala principală și secundară.",
      level: "Mediu",
      duration: "35 min",
    };
  } else if (lessonId === 15) {
    lessonData = {
      title: "Șiruri de Caractere",
      description:
        "Reprezentarea textului în C++. Diferența dintre char[] și std::string. Funcții utile din cstring.",
      level: "Mediu",
      duration: "40 min",
    };
  } else if (lessonId === 16) {
    lessonData = {
      title: "Structuri de Date (Tipul Articol / struct)",
      description:
        "Definirea tipului struct. Accesarea câmpurilor și operații pe vectori de structuri (util la Subiectul II).",
      level: "Mediu",
      duration: "35 min",
    };
  } else if (lessonId === 17) {
    lessonData = {
      title: "Generalități despre Fișiere (<fstream>)",
      description:
        "Citirea și scrierea datelor folosind fișiere text (ifstream, ofstream). Citirea până la EOF.",
      level: "Începător",
      duration: "30 min",
    };
  } else if (lessonId === 18) {
    lessonData = {
      title: "Funcții (Subprograme) și Funcții fără tip (void)",
      description:
        "Componentele unei funcții (tip returnat, nume, parametri). Diferența dintre funcțiile cu tip și void.",
      level: "Mediu",
      duration: "40 min",
    };
  } else if (lessonId === 19) {
    lessonData = {
      title: "Sisteme de Numerație. Conversii Baza 2 ↔ Baza 10",
      description:
        "Transformarea din binar în zecimal (suma puterilor) și din zecimal în binar (împărțirea repetată).",
      level: "Începător",
      duration: "30 min",
    };
  } else if (lessonId === 20) {
    lessonData = {
      title: "Circuite Logice Elementare. Clasificare",
      description:
        "Cele 3 porți logice fundamentale (AND, OR, NOT) și diferența dintre circuitele combinaționale și cele secvențiale.",
      level: "Începător",
      duration: "25 min",
    };
  } else {
    lessonData = {
      title: "Grafuri și Aplicații",
      description:
        "Învață conceptele fundamentale despre grafuri neorientate, reprezentarea lor și algoritmii de parcurgere.",
      level: "Mediu",
      duration: "45 min",
    };
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-deep">
      <LessonHeader
        title={lessonData.title}
        description={lessonData.description}
        level={lessonData.level}
        duration={lessonData.duration}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <LessonContent
              lessonId={lessonId}
              content={content}
              structuredData={structuredData}
              resources={resources}
            />
            <LessonNavigation
              prevLessonId={lessonId > 1 ? lessonId - 1 : undefined}
              nextLessonId={lessonId < 20 ? lessonId + 1 : undefined}
            />
            <StatusSelector itemType="lesson" itemId={lessonId} />
          </div>
          {/* Don't show resources in sidebar for lesson 1 since they are now at the bottom */}
          <LessonSidebar resources={lessonId === 1 ? [] : resources} />
        </div>
      </main>
    </div>
  );
}
