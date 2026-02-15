"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";

const defaultCode = `// Rezolvarea pentru Problema 1 - Subiectul III
#include <iostream>
using namespace std;

int main() {
    long long n;
    cin >> n;

    long long max_div = 0;
    // Implementați logica aici

    if (max_div == 0) {
        cout << "NU";
    } else {
        cout << max_div;
    }

    return 0;
}`;

export function CodeEditor() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [code, setCode] = useState(defaultCode);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-[#1e1e1e] text-gray-400">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col relative w-full">
      <div className="h-10 bg-gray-100 dark:bg-navy-deep border-b border-gray-200 dark:border-white/10 flex items-center justify-between px-4 select-none shrank-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-navy-surface border border-gray-200 dark:border-white/10 px-3 py-1 rounded cursor-pointer shadow-sm hover:shadow transition-all">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            main.cpp
          </div>
          <span className="text-xs text-gray-400 font-medium">Nesalvat</span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-xs"
            className="hover:bg-gray-200 dark:hover:bg-white/10 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors"
            title="Settings"
          >
            <span className="material-icons-round text-lg">settings</span>
          </Button>
          <Button
            variant="ghost"
            size="icon-xs"
            className="hover:bg-gray-200 dark:hover:bg-white/10 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors"
            title="Download Code"
          >
            <span className="material-icons-round text-lg">download</span>
          </Button>
          <Button
            variant="ghost"
            size="icon-xs"
            className="hover:bg-gray-200 dark:hover:bg-white/10 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors"
            onClick={() => setCode(defaultCode)}
            title="Reset Code"
          >
            <span className="material-icons-round text-lg">restart_alt</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden relative">
        <Editor
          height="100%"
          defaultLanguage="cpp"
          value={code}
          theme={resolvedTheme === "dark" ? "vs-dark" : "light"}
          onChange={(value) => setCode(value || "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            automaticLayout: true,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        />
      </div>
    </div>
  );
}
