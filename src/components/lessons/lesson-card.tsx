import Link from "next/link";
import Image from "next/image";

interface LessonCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string; // e.g. "text-blue-600"
  difficulty: "Ușor" | "Mediu" | "Avansat";
  difficultyColor: string; // e.g. "bg-green-500"
  duration: string;
  grade: string;
  isPremium?: boolean;
}

export function LessonCard({
  id,
  title,
  description,
  image,
  category,
  categoryColor,
  difficulty,
  difficultyColor,
  duration,
  grade,
  isPremium = false,
}: LessonCardProps) {
  return (
    <div className="bg-white dark:bg-navy-surface rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-48 bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-60"></div>
        <div
          className={`absolute top-3 left-3 bg-white/95 backdrop-blur ${categoryColor} text-xs font-bold px-2.5 py-1 rounded shadow-sm`}
        >
          {category}
        </div>
        <div
          className={`absolute top-3 right-3 ${difficultyColor} text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1 shadow-sm`}
        >
          <span className="material-icons-outlined text-[14px]">
            {difficulty === "Avansat"
              ? "fitness_center"
              : difficulty === "Mediu"
                ? "assessment"
                : "speed"}
          </span>{" "}
          {difficulty}
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium mb-3 uppercase tracking-wide">
          <span className="flex items-center gap-1">
            <span className="material-icons-outlined text-[16px]">
              schedule
            </span>{" "}
            {duration}
          </span>
          <span>•</span>
          <span>{grade}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 line-clamp-2 grow leading-relaxed">
          {description}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
          {isPremium ? (
            <span className="text-white bg-slate-800 font-bold text-xs px-2 py-1 rounded flex items-center gap-1">
              <span className="material-icons-outlined text-[14px]">star</span>{" "}
              Premium
            </span>
          ) : (
            <span className="text-primary font-bold text-sm bg-primary/5 px-2 py-1 rounded">
              Gratuit
            </span>
          )}
          <Link
            href={`/lessons/${id}`}
            className="inline-flex items-center text-sm font-bold text-slate-800 dark:text-white hover:text-primary transition group-hover:translate-x-1 duration-300"
          >
            Începe
            <span className="material-icons-outlined text-sm ml-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
