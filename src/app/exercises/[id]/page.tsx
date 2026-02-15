"use client";

import { useState } from "react";
import { ExerciseHeader } from "@/components/exercise/exercise-header";
import { ExerciseSidebar } from "@/components/exercise/exercise-sidebar";
import { ProblemDescription } from "@/components/exercise/problem-description";
import { CodeEditor } from "@/components/exercise/code-editor";
import { ConsoleOutput } from "@/components/exercise/console-output";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function ExercisePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background dark:bg-navy-deep font-display text-gray-900 dark:text-gray-100 selection:bg-primary/20">
      <ExerciseHeader onOpenSidebar={() => setIsSidebarOpen(true)} />

      {/* Mobile Sidebar (Sheet) */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="p-0 w-80">
          <ExerciseSidebar />
        </SheetContent>
      </Sheet>

      <main className="flex-1 flex overflow-hidden relative">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex shrink-0">
          <ExerciseSidebar />
        </div>

        {/* Mobile Tabs View */}
        <div className="md:hidden flex-1 flex flex-col w-full">
          <Tabs defaultValue="problem" className="flex-1 flex flex-col">
            <TabsList className="w-full justify-start rounded-none border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-navy-surface px-4 h-12">
              <TabsTrigger
                value="problem"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-navy-deep"
              >
                Enunț
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-navy-deep"
              >
                Editor
              </TabsTrigger>
              <TabsTrigger
                value="console"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-navy-deep"
              >
                Consolă
              </TabsTrigger>
            </TabsList>
            <TabsContent value="problem" className="flex-1 m-0 overflow-y-auto">
              <ProblemDescription />
            </TabsContent>
            <TabsContent
              value="code"
              className="flex-1 m-0 overflow-hidden relative"
            >
              <CodeEditor />
              <div className="absolute bottom-6 right-6 z-30">
                <RunButton />
              </div>
            </TabsContent>
            <TabsContent value="console" className="flex-1 m-0">
              <div className="h-full bg-gray-50/30 dark:bg-black/20 p-4">
                <ConsoleOutput />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Desktop Split View */}
        <div className="hidden md:flex flex-1 overflow-hidden">
          <ProblemDescription />
          <aside className="w-[45%] bg-[#fdf6e3] dark:bg-[#1e1e1e] border-l border-gray-200 dark:border-white/10 flex flex-col shrink-0 relative shadow-[-4px_0_24px_-12px_rgba(0,0,0,0.05)] z-10 transition-all">
            <CodeEditor />
            <ConsoleOutput />
            <div className="absolute bottom-52 right-6 z-30">
              <RunButton />
            </div>
          </aside>
        </div>
      </main>
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-50 mix-blend-multiply dark:mix-blend-overlay"></div>
    </div>
  );
}

function RunButton() {
  return (
    <Button
      className="group bg-primary hover:bg-orange-600 text-white rounded-full pl-5 pr-7 py-6 shadow-lg shadow-orange-500/30 flex items-center gap-3 transition-all hover:scale-105 active:scale-95 border-2 border-white dark:border-navy-deep"
      size="lg"
    >
      <span className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-white/30 transition-colors">
        <span className="material-icons-round text-xl">play_arrow</span>
      </span>
      <span className="font-bold tracking-wide text-sm">RULEAZĂ COD</span>
    </Button>
  );
}
