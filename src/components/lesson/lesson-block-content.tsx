"use client";

import { Button } from "@/components/ui/button";
import { MarkdownRenderer } from "@/components/ui/markdown-renderer";
import { cn } from "@/lib/utils";
import "katex/dist/katex.min.css";

interface Formula {
  label: string;
  latex: string;
}

interface Section {
  title: string;
  icon: string;
  color: string;
  content: string;
  formulas?: Formula[];
}

interface Resource {
  title: string;
  url: string;
  type: "pdf" | "code";
  size?: string; // Optional size string
}

interface LessonBlockContentProps {
  data: {
    sections: Section[];
  };
  resources?: Resource[];
}

const colorMap: Record<string, { bg: string; text: string; iconBg: string }> = {
  blue: {
    bg: "bg-blue-50 dark:bg-blue-900/10",
    text: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
  },
  indigo: {
    bg: "bg-indigo-50 dark:bg-indigo-900/10",
    text: "text-indigo-600 dark:text-indigo-400",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
  },
  purple: {
    bg: "bg-purple-50 dark:bg-purple-900/10",
    text: "text-purple-600 dark:text-purple-400",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
  },
  pink: {
    bg: "bg-pink-50 dark:bg-pink-900/10",
    text: "text-pink-600 dark:text-pink-400",
    iconBg: "bg-pink-100 dark:bg-pink-900/30",
  },
  red: {
    bg: "bg-red-50 dark:bg-red-900/10",
    text: "text-red-600 dark:text-red-400",
    iconBg: "bg-red-100 dark:bg-red-900/30",
  },
  green: {
    bg: "bg-green-50 dark:bg-green-900/10",
    text: "text-green-600 dark:text-green-400",
    iconBg: "bg-green-100 dark:bg-green-900/30",
  },
  yellow: {
    bg: "bg-yellow-50 dark:bg-yellow-900/10",
    text: "text-yellow-600 dark:text-yellow-400",
    iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
  },
  orange: {
    bg: "bg-orange-50 dark:bg-orange-900/10",
    text: "text-orange-600 dark:text-orange-400",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
  },
};

export function LessonBlockContent({
  data,
  resources,
}: LessonBlockContentProps) {
  if (!data || !data.sections) return null;

  return (
    <div className="space-y-8">
      {data.sections.map((section, index) => {
        const colors = colorMap[section.color] || colorMap.blue;

        return (
          <section key={index}>
            <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm transition-all hover:shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span
                  className={cn(
                    "p-2 rounded-lg mr-3 flex items-center justify-center",
                    colors.iconBg,
                    colors.text,
                  )}
                >
                  <span className="material-icons-outlined">
                    {section.icon}
                  </span>
                </span>
                {section.title}
              </h2>

              <div className="mb-6">
                <MarkdownRenderer content={section.content} />
              </div>

              {section.formulas && section.formulas.length > 0 && (
                <div className="grid gap-4 mt-6">
                  {section.formulas.map((formula, fIndex) => (
                    <div
                      key={fIndex}
                      className={cn(
                        "p-4 rounded-xl border border-gray-200 dark:border-gray-700",
                        colors.bg,
                      )}
                    >
                      <h4
                        className={cn(
                          "font-bold text-sm uppercase tracking-wide mb-2 opacity-80",
                          colors.text,
                        )}
                      >
                        {formula.label}
                      </h4>
                      <div className="text-xl md:text-2xl font-serif text-gray-900 dark:text-white py-1">
                        <MarkdownRenderer content={`$$${formula.latex}$$`} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Resources Section */}
      {resources && resources.length > 0 && (
        <section>
          <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 p-2 rounded-lg mr-3">
                <span className="material-icons-outlined">attach_file</span>
              </span>
              Resurse Suplimentare
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              {resources.map((res, idx) => (
                <a
                  key={idx}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <Button
                    variant="outline"
                    className="h-auto py-3 px-4 flex items-center gap-3 w-full sm:w-auto hover:border-primary hover:text-primary transition-colors bg-gray-50 dark:bg-navy-deep"
                  >
                    <span
                      className={cn(
                        "p-2 rounded",
                        res.type === "pdf"
                          ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                          : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
                      )}
                    >
                      <span className="material-icons-outlined text-lg">
                        {res.type === "pdf" ? "picture_as_pdf" : "code"}
                      </span>
                    </span>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white">
                        {res.title}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {res.type.toUpperCase()}{" "}
                        {res.size ? `• ${res.size}` : ""}
                      </div>
                    </div>
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
