"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExerciseHeader } from "@/components/exercise/exercise-header";
import { Button } from "@/components/ui/button";
import { AccessTables2 } from "@/components/exercise/access-tables-2";
import { StatusSelector } from "@/components/ui/status-selector";

export default function AccessExercisePage2() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  
  // State for Sarcina A
  const [ansA, setAnsA] = useState({
    codqr: { table: "", val: "" },
    datac: { table: "", val: "" },
    locatia: { table: "", val: "" },
  });
  
  // State for Sarcina B
  const [ansB, setAnsB] = useState<Record<string, string>>({
    format: "",
    required: "",
    editare: "",
    codc: "",
  });
  
  // State for Sarcina C
  const [ansC, setAnsC] = useState("");

  // State for Sarcina D (Pagina 2)
  const [ansD, setAnsD] = useState({
    rel1: "", rel2: "",
    cols: [
      { field: "", table: "", sort: "", show: false, criteria: "" },
      { field: "", table: "", sort: "", show: false, criteria: "" },
      { field: "", table: "", sort: "", show: false, criteria: "" },
      { field: "", table: "", sort: "", show: false, criteria: "" },
    ]
  });

  const handleReset = () => {
    setIsSubmitted(false);
    setAnsA({
      codqr: { table: "", val: "" },
      datac: { table: "", val: "" },
      locatia: { table: "", val: "" },
    });
    setAnsB({
      format: "",
      required: "",
      editare: "",
      codc: "",
    });
    setAnsC("");
    setAnsD({
      rel1: "", rel2: "",
      cols: [
        { field: "", table: "", sort: "", show: false, criteria: "" },
        { field: "", table: "", sort: "", show: false, criteria: "" },
        { field: "", table: "", sort: "", show: false, criteria: "" },
        { field: "", table: "", sort: "", show: false, criteria: "" },
      ]
    });
  };

  let correctCount = 0;
  const totalCount = 25; // 12 (A,B,C) + 13 (D)

  if (isSubmitted) {
    // Sarcina A (6 puncte)
    if (ansA.codqr.table === "client") correctCount++;
    if (["ole object", "ole", "attachment", "atașament", "atasament"].includes(ansA.codqr.val.trim().toLowerCase())) correctCount++;
    
    if (ansA.datac.table === "comanda") correctCount++;
    if (["date/time", "data/ora", "dată/oră", "date"].includes(ansA.datac.val.trim().toLowerCase())) correctCount++;
    
    if (ansA.locatia.table === "client") correctCount++;
    if (["hyperlink", "hiperlink"].includes(ansA.locatia.val.trim().toLowerCase())) correctCount++;

    // Sarcina B (4 puncte)
    if (ansB.format === "long") correctCount++;
    if (ansB.required === "no") correctCount++;
    if (ansB.editare === "formulare") correctCount++;
    if (ansB.codc === "primara") correctCount++;

    // Sarcina C (2 puncte)
    const rule = ansC.replace(/\s+/g, '').toLowerCase();
    if (
      (rule.includes(">=#01.01.2026#") && rule.includes("<=#31.12.2026#")) ||
      (rule.includes("between#01.01.2026#and#31.12.2026#")) ||
      (rule.includes(">=01.01.2026") && rule.includes("<=31.12.2026")) ||
      (rule.includes("between01.01.2026and31.12.2026")) ||
      (rule.includes("between\"01.01.2026\"and\"31.12.2026\"")) ||
      (rule.includes(">=\"01.01.2026\"") && rule.includes("<=\"31.12.2026\""))
    ) {
      correctCount += 2;
    }

    // Sarcina D (13 puncte)
    const rel1Correct = ansD.rel1.trim() === "1";
    const rel2Correct = ["∞", "infinit", "n", "m", "8"].includes(ansD.rel2.trim().toLowerCase());
    
    if (rel1Correct) correctCount++; // 1
    if (rel2Correct) correctCount++; // 1
    
    for (let colIndex = 0; colIndex < 4; colIndex++) {
      const ans = ansD.cols[colIndex];
      let expectedField = "";
      let expectedTable = "";
      
      if (colIndex === 0) { expectedField = "numep"; expectedTable = "client"; }
      else if (colIndex === 1) { expectedField = "livrare"; expectedTable = "comanda"; }
      else if (colIndex === 2) { expectedField = "total"; expectedTable = "comanda"; }
      else if (colIndex === 3) { expectedField = "datac"; expectedTable = "comanda"; }
      
      // Tabel și câmp corect
      if (ans.field.trim().toLowerCase() === expectedField && ans.table.trim().toLowerCase() === expectedTable) {
        correctCount++; // 4
      }
      
      // Alte criterii
      if (colIndex === 0) {
        if (ans.show) correctCount++; // 1
      }
      
      if (colIndex === 1) {
        const cr = ans.criteria.trim().toLowerCase();
        if (["yes", "adevărat", "adevarat", "true"].includes(cr)) correctCount++; // 1
      }
      
      if (colIndex === 2) {
        if (ans.show) correctCount++; // 1
        if (ans.criteria.replace(/\s+/g, '').includes(">400")) correctCount++; // 1
      }
      
      if (colIndex === 3) {
        if (ans.show) correctCount++; // 1
        if (["crescător", "ascending", "ascendent", "asc"].includes(ans.sort.trim().toLowerCase())) correctCount++; // 1
        const cr = ans.criteria.replace(/\s+/g, '').toLowerCase();
        if (cr === "month([datac])=2" || cr.includes("*.02.*") || cr === "luna([datac])=2" || cr === "luna([data])=2") correctCount++; // 1
      }
    }
  }

  // Effect to automatically save score to Supabase when "isSubmitted" becomes true
  useEffect(() => {
    if (isSubmitted) {
      fetch("/api/progress", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemType: "exercise",
          itemId: 2,
          status: "completed",
          score: correctCount,
          maxScore: totalCount
        }),
      }).catch(err => console.error("Failed to save score:", err));
    }
  }, [isSubmitted, correctCount, totalCount]);

  // Helper classes
  const getAClass = (key: keyof typeof ansA, type: "table" | "val") => {
    if (!isSubmitted) return "";
    let isCorrect = false;
    if (key === "codqr") isCorrect = type === "table" ? ansA.codqr.table === "client" : ["ole object", "ole", "attachment", "atașament", "atasament"].includes(ansA.codqr.val.trim().toLowerCase());
    else if (key === "datac") isCorrect = type === "table" ? ansA.datac.table === "comanda" : ["date/time", "data/ora", "dată/oră", "date"].includes(ansA.datac.val.trim().toLowerCase());
    else if (key === "locatia") isCorrect = type === "table" ? ansA.locatia.table === "client" : ["hyperlink", "hiperlink"].includes(ansA.locatia.val.trim().toLowerCase());
    return isCorrect ? "border-green-500 bg-green-50/30 dark:bg-green-900/10" : "border-red-500 bg-red-50/30 dark:bg-red-900/10";
  };

  const getBClass = (key: keyof typeof ansB, expected: string) => {
    if (!isSubmitted) return "";
    if (ansB[key] === expected) return "text-green-600 dark:text-green-500";
    if (ansB[key] !== "" && ansB[key] !== expected) return "text-red-500 dark:text-red-500";
    return "";
  };
  
  const getCClass = () => {
    if (!isSubmitted) return "";
    const rule = ansC.replace(/\s+/g, '').toLowerCase();
    const isCorrect = (rule.includes(">=#01.01.2026#") && rule.includes("<=#31.12.2026#")) ||
                      (rule.includes("between#01.01.2026#and#31.12.2026#")) ||
                      (rule.includes(">=01.01.2026") && rule.includes("<=31.12.2026")) ||
                      (rule.includes("between01.01.2026and31.12.2026")) ||
                      (rule.includes("between\"01.01.2026\"and\"31.12.2026\"")) ||
                      (rule.includes(">=\"01.01.2026\"") && rule.includes("<=\"31.12.2026\""));
    return isCorrect ? "border-green-500 outline-green-500 bg-green-50 dark:bg-green-900/20 text-green-800" : "border-red-500 outline-red-500 bg-red-50 dark:bg-red-900/20 text-red-800";
  };

  const getDRelClass = (key: 'rel1' | 'rel2') => {
    if (!isSubmitted) return "";
    const isCorrect = key === 'rel1' 
      ? (ansD.rel1.trim() === "1")
      : (["∞", "infinit", "n", "m", "8"].includes(ansD.rel2.trim().toLowerCase()));
      
    return isCorrect ? "border-green-500 text-green-700 bg-green-50/80" : "border-red-500 text-red-700 bg-red-50/80";
  };

  const getDFieldClass = (colIndex: number, field: keyof typeof ansD.cols[0]) => {
    if (!isSubmitted) return "";
    const ans = ansD.cols[colIndex];
    let isCorrect = false;
    
    if (colIndex === 0) { // NumeP
      if (field === 'field') isCorrect = ans.field.trim().toLowerCase() === "numep";
      if (field === 'table') isCorrect = ans.table.trim().toLowerCase() === "client";
      if (field === 'show') isCorrect = ans.show === true;
      if (field === 'sort' || field === 'criteria') isCorrect = true;
    } else if (colIndex === 1) { // Livrare
      if (field === 'field') isCorrect = ans.field.trim().toLowerCase() === "livrare";
      if (field === 'table') isCorrect = ans.table.trim().toLowerCase() === "comanda";
      if (field === 'show') isCorrect = ans.show === false;
      if (field === 'criteria') isCorrect = ["yes", "adevărat", "adevarat", "true"].includes(ans.criteria.trim().toLowerCase());
      if (field === 'sort') isCorrect = true;
    } else if (colIndex === 2) { // Total
      if (field === 'field') isCorrect = ans.field.trim().toLowerCase() === "total";
      if (field === 'table') isCorrect = ans.table.trim().toLowerCase() === "comanda";
      if (field === 'show') isCorrect = ans.show === true;
      if (field === 'criteria') isCorrect = ans.criteria.replace(/\s+/g, '').includes(">400");
      if (field === 'sort') isCorrect = true;
    } else if (colIndex === 3) { // DataC
      if (field === 'field') isCorrect = ans.field.trim().toLowerCase() === "datac";
      if (field === 'table') isCorrect = ans.table.trim().toLowerCase() === "comanda";
      if (field === 'show') isCorrect = ans.show === true;
      if (field === 'sort') isCorrect = ["crescător", "ascending", "ascendent", "asc"].includes(ans.sort.trim().toLowerCase());
      if (field === 'criteria') {
        const cr = ans.criteria.replace(/\s+/g, '').toLowerCase();
        isCorrect = cr === "month([datac])=2" || cr.includes("*.02.*") || cr === "luna([datac])=2" || cr === "luna([data])=2";
      }
    }

    return isCorrect ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-red-500 bg-red-50 dark:bg-red-900/20";
  };

  const updateAnsDCol = (colIndex: number, field: keyof typeof ansD.cols[0], value: any) => {
    const newCols = [...ansD.cols];
    newCols[colIndex] = { ...newCols[colIndex], [field]: value };
    setAnsD({ ...ansD, cols: newCols });
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background dark:bg-navy-deep font-display text-gray-900 dark:text-gray-100 selection:bg-primary/20">
      <ExerciseHeader />

      <main className="flex-1 flex overflow-hidden relative">
        <div className="flex-1 overflow-y-auto bg-gray-50/50 dark:bg-navy-deep relative custom-scrollbar">
          <div className="max-w-[1600px] w-full mx-auto px-6 py-8 lg:py-12 relative z-10">
            {/* Top Control Bar */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-8 bg-white/50 dark:bg-navy-surface/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm flex-wrap">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 min-w-max">
                {/* Pagination */}
                <div className="flex bg-gray-100/80 dark:bg-navy-deep/80 p-1.5 rounded-full border border-gray-200 dark:border-white/5 relative">
                   <button 
                     onClick={() => setCurrentPage(1)}
                     className={`relative z-10 px-5 py-2 rounded-full font-bold transition-all text-sm cursor-pointer ${currentPage === 1 ? 'text-white' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}`}
                   >
                     {currentPage === 1 && (
                       <motion.div
                         layoutId="active-nav-pill"
                         className="absolute inset-0 bg-primary rounded-full shadow-md"
                         transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                         style={{ zIndex: -1 }}
                       />
                     )}
                     Pagina 1
                   </button>
                   <button 
                     onClick={() => setCurrentPage(2)}
                     className={`relative z-10 px-5 py-2 rounded-full font-bold transition-all text-sm cursor-pointer ${currentPage === 2 ? 'text-white' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}`}
                   >
                     {currentPage === 2 && (
                       <motion.div
                         layoutId="active-nav-pill"
                         className="absolute inset-0 bg-primary rounded-full shadow-md"
                         transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                         style={{ zIndex: -1 }}
                       />
                     )}
                     Pagina 2
                   </button>
                </div>

                <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-white/10"></div>

                {/* Status */}
                <StatusSelector itemType="exercise" itemId={2} variant="compact" forceStatus={isSubmitted ? "completed" : undefined} />
              </div>

              <div className="flex items-center gap-3 flex-wrap justify-end min-w-max">
                {isSubmitted && (
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold px-4 py-2 rounded-full border border-green-200 dark:border-green-800/50 mr-2 flex items-center gap-2">
                    <span className="material-icons-round text-sm">check_circle</span>
                    Scor: {correctCount} / {totalCount}
                  </div>
                )}
                <Button asChild className="bg-primary hover:bg-orange-600 text-white rounded-full px-6 shadow-lg shadow-orange-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer">
                  <a href="/downloads/Access2.pdf" download>
                    <span className="material-icons-round text-sm">download</span>
                    Descarcă
                  </a>
                </Button>
                <Button 
                  onClick={handleReset}
                  className="rounded-full px-6 bg-blue-900 hover:bg-blue-800 dark:bg-[#1e2a4a] dark:hover:bg-[#2a3b63] text-white shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  Resetare
                </Button>
                <Button 
                  onClick={() => setIsSubmitted(true)}
                  className="relative bg-green-600 hover:bg-green-700 text-white rounded-full px-8 shadow-lg shadow-green-500/30 transition-all hover:scale-105 active:scale-95"
                >
                  {!isSubmitted && (
                    <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50 pointer-events-none"></span>
                  )}
                  Trimite
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-10">
              {/* Left Column */}
              <div className="flex flex-col gap-6 xl:sticky xl:top-0 h-fit max-h-full xl:max-h-[calc(100vh-100px)] xl:overflow-y-auto pr-2 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div>
                  <div className="mb-4">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-900/20 px-4 py-1.5 rounded-full border border-blue-100 dark:border-blue-800/50">
                      Subiectul IV. (25 de puncte)
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
                    Baze de Date: MS Access
                  </h1>
                </div>
                <div className="bg-white dark:bg-navy-surface rounded-2xl p-6 border border-gray-200 dark:border-white/5 shadow-sm">
                  <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                    În aplicația MS Access a fost creată o bază de date. Fragmente din conținutul tabelelor bazei de date sunt prezentate în <span className="italic font-bold">Imaginea 2</span>:
                  </p>
                </div>
                <AccessTables2 />
              </div>

              {/* Right Column: Sarcini */}
              <div className="space-y-10 xl:pb-12 h-fit">
                
                {/* PAGE 1 */}
                <div className={currentPage === 1 ? 'space-y-10 block' : 'hidden'}>
                  {/* Task A */}
                  <div className="bg-white dark:bg-navy-surface rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/5 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-black text-sm">A</span>
                      Selectare Tabele și Tip de date
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">Bifați în coloana <span className="font-bold">B</span> tabelul și scrieți în <span className="font-bold">C</span> tipurile corespunzătoare datelor din coloana <span className="font-bold">A</span>:</p>
                    <div className="overflow-hidden rounded-xl border">
                      <table className="w-full text-left text-sm border-collapse">
                        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-bold">
                          <tr>
                            <th className="p-3 border-r w-1/4 text-center">A</th>
                            <th className="p-3 border-r w-1/3 text-center">B</th>
                            <th className="p-3 text-center">C</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="p-4 border-r font-mono font-bold align-middle">CodQr</td>
                            <td className="p-4 border-r align-middle">
                              <label className="flex items-center gap-2 cursor-pointer mb-2"><input type="radio" disabled={isSubmitted} name="tbl-codqr" onChange={() => setAnsA({...ansA, codqr: {...ansA.codqr, table: "client"}})} className="w-4 h-4 text-primary" /><span className={`font-semibold ${ansA.codqr.table === "client" ? getAClass("codqr", "table") : ""}`}>Client</span></label>
                              <label className="flex items-center gap-2 cursor-pointer"><input type="radio" disabled={isSubmitted} name="tbl-codqr" onChange={() => setAnsA({...ansA, codqr: {...ansA.codqr, table: "comanda"}})} className="w-4 h-4 text-primary" /><span className={`font-semibold ${ansA.codqr.table === "comanda" ? getAClass("codqr", "table") : ""}`}>Comanda</span></label>
                            </td>
                            <td className="p-4 align-middle"><input type="text" disabled={isSubmitted} className={`w-full p-2 border rounded-lg bg-gray-50 dark:bg-navy-deep ${getAClass("codqr", "val")}`} value={ansA.codqr.val} onChange={(e) => setAnsA({...ansA, codqr: {...ansA.codqr, val: e.target.value}})} /></td>
                          </tr>
                          <tr>
                            <td className="p-4 border-r font-mono font-bold align-middle">DataC</td>
                            <td className="p-4 border-r align-middle">
                              <label className="flex items-center gap-2 cursor-pointer mb-2"><input type="radio" disabled={isSubmitted} name="tbl-datac" onChange={() => setAnsA({...ansA, datac: {...ansA.datac, table: "client"}})} className="w-4 h-4 text-primary" /><span className={`font-semibold ${ansA.datac.table === "client" ? getAClass("datac", "table") : ""}`}>Client</span></label>
                              <label className="flex items-center gap-2 cursor-pointer"><input type="radio" disabled={isSubmitted} name="tbl-datac" onChange={() => setAnsA({...ansA, datac: {...ansA.datac, table: "comanda"}})} className="w-4 h-4 text-primary" /><span className={`font-semibold ${ansA.datac.table === "comanda" ? getAClass("datac", "table") : ""}`}>Comanda</span></label>
                            </td>
                            <td className="p-4 align-middle"><input type="text" disabled={isSubmitted} className={`w-full p-2 border rounded-lg bg-gray-50 dark:bg-navy-deep ${getAClass("datac", "val")}`} value={ansA.datac.val} onChange={(e) => setAnsA({...ansA, datac: {...ansA.datac, val: e.target.value}})} /></td>
                          </tr>
                          <tr>
                            <td className="p-4 border-r font-mono font-bold align-middle">Locația</td>
                            <td className="p-4 border-r align-middle">
                              <label className="flex items-center gap-2 cursor-pointer mb-2"><input type="radio" disabled={isSubmitted} name="tbl-locatia" onChange={() => setAnsA({...ansA, locatia: {...ansA.locatia, table: "client"}})} className="w-4 h-4 text-primary" /><span className={`font-semibold ${ansA.locatia.table === "client" ? getAClass("locatia", "table") : ""}`}>Client</span></label>
                              <label className="flex items-center gap-2 cursor-pointer"><input type="radio" disabled={isSubmitted} name="tbl-locatia" onChange={() => setAnsA({...ansA, locatia: {...ansA.locatia, table: "comanda"}})} className="w-4 h-4 text-primary" /><span className={`font-semibold ${ansA.locatia.table === "comanda" ? getAClass("locatia", "table") : ""}`}>Comanda</span></label>
                            </td>
                            <td className="p-4 align-middle"><input type="text" disabled={isSubmitted} className={`w-full p-2 border rounded-lg bg-gray-50 dark:bg-navy-deep ${getAClass("locatia", "val")}`} value={ansA.locatia.val} onChange={(e) => setAnsA({...ansA, locatia: {...ansA.locatia, val: e.target.value}})} /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Task B */}
                  <div className="bg-white dark:bg-navy-surface rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/5 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-3"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-black text-sm">B</span>Proprietățile Câmpurilor</h2>
                    <div className="space-y-6">
                      <div className="flex flex-col gap-3">
                        <p className="text-sm">Formatul tipului de date pentru <span className="font-bold">24 noiembrie 2025</span>:</p>
                        <div className="flex gap-6 ml-4">
                          <label className={`flex items-center gap-2 cursor-pointer ${getBClass("format", "long")}`}><input type="radio" disabled={isSubmitted} name="b-format" onChange={() => setAnsB({...ansB, format: "long"})} className="w-4 h-4" /><span className="font-medium">Long Date</span></label>
                          <label className={`flex items-center gap-2 cursor-pointer ${getBClass("format", "short")}`}><input type="radio" disabled={isSubmitted} name="b-format" onChange={() => setAnsB({...ansB, format: "short"})} className="w-4 h-4" /><span className="font-medium">Short Date</span></label>
                          <label className={`flex items-center gap-2 cursor-pointer ${getBClass("format", "medium")}`}><input type="radio" disabled={isSubmitted} name="b-format" onChange={() => setAnsB({...ansB, format: "medium"})} className="w-4 h-4" /><span className="font-medium">Medium Date</span></label>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-sm">Proprietatea <span className="font-bold">Required</span> pentru <span className="font-bold">Telefon</span>:</p>
                        <div className="flex gap-6 ml-4">
                          <label className={`flex items-center gap-2 cursor-pointer ${getBClass("required", "yes")}`}><input type="radio" disabled={isSubmitted} name="b-req" onChange={() => setAnsB({...ansB, required: "yes"})} className="w-4 h-4" /><span className="font-medium">Yes</span></label>
                          <label className={`flex items-center gap-2 cursor-pointer ${getBClass("required", "no")}`}><input type="radio" disabled={isSubmitted} name="b-req" onChange={() => setAnsB({...ansB, required: "no"})} className="w-4 h-4" /><span className="font-medium">No</span></label>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-sm">Obiectul bazei de date care permite editarea înregistrărilor:</p>
                        <div className="flex gap-6 ml-4">
                          <label className={`flex items-center gap-2 cursor-pointer ${getBClass("editare", "formulare")}`}><input type="radio" disabled={isSubmitted} name="b-editare" onChange={() => setAnsB({...ansB, editare: "formulare"})} className="w-4 h-4" /><span className="font-medium">Formulare</span></label>
                          <label className={`flex items-center gap-2 cursor-pointer ${getBClass("editare", "rapoarte")}`}><input type="radio" disabled={isSubmitted} name="b-editare" onChange={() => setAnsB({...ansB, editare: "rapoarte"})} className="w-4 h-4" /><span className="font-medium">Rapoarte</span></label>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-sm">Câmpul <span className="font-bold">CodC</span> din tabelul <span className="font-bold">Client</span> este:</p>
                        <div className="flex gap-6 ml-4">
                          <label className={`flex items-center gap-2 cursor-pointer ${getBClass("codc", "primara")}`}><input type="radio" disabled={isSubmitted} name="b-codc" onChange={() => setAnsB({...ansB, codc: "primara"})} className="w-4 h-4" /><span className="font-medium">cheie primară</span></label>
                          <label className={`flex items-center gap-2 cursor-pointer ${getBClass("codc", "externa")}`}><input type="radio" disabled={isSubmitted} name="b-codc" onChange={() => setAnsB({...ansB, codc: "externa"})} className="w-4 h-4" /><span className="font-medium">cheie externă</span></label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Task C */}
                  <div className="bg-white dark:bg-navy-surface rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-3"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-black text-sm">C</span>Reguli de Validare</h2>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">Scrieți condiția din <span className="font-bold">Validation Rule</span> pentru date cuprinse între 01.01.2026 și 31.12.2026 inclusiv:</p>
                    <input type="text" disabled={isSubmitted} value={ansC} onChange={(e) => setAnsC(e.target.value)} placeholder="Validation Rule" className={`w-full p-3 font-mono border rounded-xl bg-gray-50 dark:bg-navy-deep ${getCClass()}`} />
                  </div>
                </div>

                {/* PAGE 2 */}
                <div className={currentPage === 2 ? 'space-y-10 block' : 'hidden'}>
                  <div className="bg-white dark:bg-navy-surface rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-black text-sm">2</span>
                      Design View Interogare
                    </h2>
                    <div className="max-w-none text-gray-700 dark:text-gray-300 font-medium mb-8">
                      <p>Utilizând tabelele bazei de date, completați toate elementele necesare, inclusiv relațiile, pentru a defini interogarea:</p>
                      <ul className="list-disc list-outside ml-6 space-y-2 mt-4 marker:text-primary">
                        <li>Va afișa datele a 3 câmpuri: <strong>NumeP</strong>, <strong>Total</strong> și <strong>DataC</strong>.</li>
                        <li>Va afișa numele și prenumele clientului (<strong>NumeP</strong>) care au comandat cu livrare (<strong>Livrare</strong>) cu preț total mai mare de 400 (<strong>Total</strong>) pe parcursul lunii februarie (<strong>DataC</strong>).</li>
                        <li>Datele vor fi sortate crescător după datele câmpului <strong>DataC</strong>.</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl border p-6 overflow-x-auto text-gray-900 mb-8" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
                      <h3 className="font-bold mb-6 text-gray-800 text-lg border-b pb-2">Relații între tabele</h3>
                      
                      <div className="text-sm text-gray-500 mb-4 flex items-center justify-center gap-2">
                         <span className="material-icons-round text-blue-500 text-lg">info</span>
                         <span>Completați tipul relației (1, ∞, n) pe linia de legătură.</span>
                         {!isSubmitted && (
                           <button 
                             onClick={() => setAnsD({...ansD, rel2: '∞'})} 
                             className="ml-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 px-2 py-1 rounded text-xs font-bold border border-gray-300 shadow-sm transition-colors flex items-center gap-1 cursor-pointer"
                           >
                             <span className="text-[10px] leading-none">Scrie</span> ∞
                           </button>
                         )}
                      </div>
                      <div className="flex items-start justify-center gap-24 py-4 min-w-[500px] relative h-[260px]">
                         {/* Static SVG Line visualization */}
                         <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                            {/* Path from Client.CodC (y=85) to Comanda.CodC (y=109) */}
                            <path 
                              d="M calc(50% - 3rem) 85 L calc(50% - 1.5rem) 85 L calc(50% + 1.5rem) 109 L calc(50% + 3rem) 109" 
                              stroke="black" strokeWidth="2" fill="none" 
                            />
                         </svg>

                         {/* Inputs for relation cardinality */}
                         <input 
                           disabled={isSubmitted} type="text" value={ansD.rel1} onChange={e => setAnsD({...ansD, rel1: e.target.value})} 
                           className={`absolute text-center outline-none border-b-2 bg-white/80 backdrop-blur-sm z-20 font-bold transition-all w-8 text-sm ${getDRelClass('rel1') || 'border-gray-500'}`} 
                           style={{ left: 'calc(50% - 2.25rem)', top: '61px', transform: 'translateX(-50%)' }} placeholder="1"
                         />
                         
                         <input 
                           disabled={isSubmitted} type="text" value={ansD.rel2} onChange={e => setAnsD({...ansD, rel2: e.target.value})} 
                           className={`absolute text-center outline-none border-b-2 bg-white/80 backdrop-blur-sm z-20 font-bold transition-all w-8 text-sm ${getDRelClass('rel2') || 'border-gray-500'}`} 
                           style={{ left: 'calc(50% + 2.25rem)', top: '85px', transform: 'translateX(-50%)' }} placeholder="∞"
                         />

                         {/* Client Box */}
                         <div className="bg-white border border-gray-400 w-48 shadow-[1px_1px_3px_rgba(0,0,0,0.2)] z-10 text-[13px] relative select-none cursor-default">
                            <div className="px-2 py-1 border-b border-red-800 font-bold h-[29px] flex items-center">Client</div>
                            <div className="pb-2 pt-1 flex flex-col">
                              {["*", "CodC", "NumeP", "Telefon", "Locatia", "CodQr"].map((field, idx) => (
                                 <div key={`cl-${idx}`} className="px-2 h-[24px] flex items-center gap-2">
                                    <span className="w-4 h-4 flex items-center justify-center">
                                       {field === 'CodC' && <span className="material-icons-round text-[14px] rotate-90 text-yellow-600 drop-shadow-sm">vpn_key</span>}
                                    </span>
                                    <span className={field === 'NumeP' ? 'text-red-900 font-semibold' : ''}>{field}</span>
                                 </div>
                              ))}
                            </div>
                         </div>

                         {/* Comanda Box */}
                         <div className="bg-white border border-gray-400 w-48 shadow-[1px_1px_3px_rgba(0,0,0,0.2)] z-10 text-[13px] relative select-none cursor-default">
                            <div className="px-2 py-1 border-b border-red-800 font-bold h-[29px] flex items-center">Comanda</div>
                            <div className="pb-2 pt-1 flex flex-col">
                              {["*", "CC", "CodC", "DataC", "Total", "Livrare"].map((field, idx) => (
                                 <div key={`co-${idx}`} className="px-2 h-[24px] flex items-center gap-2">
                                    <span className="w-4 h-4 flex items-center justify-center">
                                       {field === 'CC' && <span className="material-icons-round text-[14px] rotate-90 text-yellow-600 drop-shadow-sm">vpn_key</span>}
                                    </span>
                                    <span>{field}</span>
                                 </div>
                              ))}
                            </div>
                         </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-300 rounded-lg overflow-x-auto shadow-sm" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
                      <table className="w-full text-sm text-gray-900 border-collapse min-w-[600px]">
                        <tbody className="divide-y divide-gray-300">
                          <tr className="bg-[#e3e3e3] font-bold">
                            <td className="p-3 border-r border-gray-300 w-24">Field:</td>
                            {[0, 1, 2, 3].map(i => (
                               <td key={`field-${i}`} className="p-0 border-r border-gray-300"><input disabled={isSubmitted} type="text" className={`w-full p-3 outline-none border-2 border-transparent focus:border-primary bg-white ${getDFieldClass(i, 'field')}`} value={ansD.cols[i].field} onChange={e => updateAnsDCol(i, 'field', e.target.value)} /></td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-3 border-r border-gray-300 bg-[#e3e3e3] font-bold">Table:</td>
                            {[0, 1, 2, 3].map(i => (
                               <td key={`table-${i}`} className="p-0 border-r border-gray-300"><input disabled={isSubmitted} type="text" className={`w-full p-3 outline-none border-2 border-transparent focus:border-primary bg-white ${getDFieldClass(i, 'table')}`} value={ansD.cols[i].table} onChange={e => updateAnsDCol(i, 'table', e.target.value)} /></td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-3 border-r border-gray-300 bg-[#e3e3e3] font-bold">Sort:</td>
                            {[0, 1, 2, 3].map(i => (
                               <td key={`sort-${i}`} className="p-0 border-r border-gray-300"><input disabled={isSubmitted} type="text" className={`w-full p-3 outline-none border-2 border-transparent focus:border-primary bg-white ${getDFieldClass(i, 'sort')}`} value={ansD.cols[i].sort} onChange={e => updateAnsDCol(i, 'sort', e.target.value)} /></td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-3 border-r border-gray-300 bg-[#e3e3e3] font-bold">Show:</td>
                            {[0, 1, 2, 3].map(i => (
                               <td key={`show-${i}`} className={`p-0 border-r border-gray-300 text-center bg-white ${getDFieldClass(i, 'show')}`}><input disabled={isSubmitted} type="checkbox" className="w-5 h-5 align-middle outline-primary" checked={ansD.cols[i].show} onChange={e => updateAnsDCol(i, 'show', e.target.checked)} /></td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-3 border-r border-gray-300 bg-[#e3e3e3] font-bold">Criteria:</td>
                            {[0, 1, 2, 3].map(i => (
                               <td key={`crit-${i}`} className="p-0 border-r border-gray-300"><input disabled={isSubmitted} type="text" className={`w-full p-3 outline-none border-2 border-transparent focus:border-primary bg-white ${getDFieldClass(i, 'criteria')}`} value={ansD.cols[i].criteria} onChange={e => updateAnsDCol(i, 'criteria', e.target.value)} /></td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-3 border-r border-gray-300 bg-[#e3e3e3] font-bold">or:</td>
                            {[0, 1, 2, 3].map(i => (
                               <td key={`or-${i}`} className="p-0 border-r border-gray-300"><input disabled={isSubmitted} type="text" className="w-full p-3 outline-none bg-white" /></td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
