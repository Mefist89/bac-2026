import { LessonsHeader } from "@/components/lessons/lessons-header";
import { LessonsSidebar } from "@/components/lessons/lessons-sidebar";
import { LessonsGrid } from "@/components/lessons/lessons-grid";
import { Pagination } from "@/components/lessons/pagination";

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-deep">
      <LessonsHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <LessonsSidebar />
          <div className="w-full lg:w-3/4">
            <LessonsGrid />
            <Pagination />
          </div>
        </div>
      </main>
    </div>
  );
}
