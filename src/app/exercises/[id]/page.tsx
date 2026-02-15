import { ExerciseHeader } from "@/components/exercise/exercise-header";
import { ExerciseSidebar } from "@/components/exercise/exercise-sidebar";
import { ProblemDescription } from "@/components/exercise/problem-description";
import { CodeEditor } from "@/components/exercise/code-editor";
import { ConsoleOutput } from "@/components/exercise/console-output";
import { Button } from "@/components/ui/button";

export default function ExercisePage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background dark:bg-navy-deep font-display text-gray-900 dark:text-gray-100 selection:bg-primary/20">
      <ExerciseHeader />
      <main className="flex-1 flex overflow-hidden">
        <ExerciseSidebar />
        <ProblemDescription />
        <aside className="w-[45%] bg-[#fdf6e3] dark:bg-[#1e1e1e] border-l border-gray-200 dark:border-white/10 flex flex-col shrink-0 relative shadow-[-4px_0_24px_-12px_rgba(0,0,0,0.05)] z-10">
          <CodeEditor />
          <ConsoleOutput />
          <div className="absolute bottom-52 right-6 z-30">
            <Button
              className="group bg-primary hover:bg-orange-600 text-white rounded-full pl-5 pr-7 py-6 shadow-lg shadow-orange-500/30 flex items-center gap-3 transition-all hover:scale-105 active:scale-95 border-2 border-white dark:border-navy-deep"
              size="lg"
            >
              <span className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <span className="material-icons-round text-xl key={1}">
                  play_arrow
                </span>
              </span>
              <span className="font-bold tracking-wide text-sm">
                RULEAZĂ COD
              </span>
            </Button>
          </div>
        </aside>
      </main>
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-50 mix-blend-multiply dark:mix-blend-overlay"></div>
    </div>
  );
}
