import { LessonHeader } from "@/components/lesson/lesson-header";
import { LessonSidebar } from "@/components/lesson/lesson-sidebar";
import { LessonContent } from "@/components/lesson/lesson-content";
import { LessonNavigation } from "@/components/lesson/lesson-navigation";

export default function LessonDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-deep">
      <LessonHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <LessonContent />
            <LessonNavigation />
          </div>
          <LessonSidebar />
        </div>
      </main>
    </div>
  );
}
