import { LessonHeader } from "@/components/lesson/lesson-header";
import { LessonSidebar } from "@/components/lesson/lesson-sidebar";
import { LessonContent } from "@/components/lesson/lesson-content";
import { LessonNavigation } from "@/components/lesson/lesson-navigation";
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
              nextLessonId={lessonId < 2 ? lessonId + 1 : undefined}
            />
          </div>
          {/* Don't show resources in sidebar for lesson 1 since they are now at the bottom */}
          <LessonSidebar resources={lessonId === 1 ? [] : resources} />
        </div>
      </main>
    </div>
  );
}
