"use client";

import { useState } from "react";
import { ExerciseHeader } from "@/components/exercise/exercise-header";
import { Button } from "@/components/ui/button";
import { AccessTables } from "@/components/exercise/access-tables";

export default function AccessExercisePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // State for Sarcina A
  const [ansA, setAnsA] = useState({
    dateTime: { table: "", val: "" },
    ole: { table: "", val: "" },
    hyperlink: { table: "", val: "" },
  });
  
  // State for Sarcina B
  const [ansB, setAnsB] = useState<number | null>(null);
  
  // State for Sarcina C
  const [ansC, setAnsC] = useState({
    format: "", inputMask: "", caption: "", defaultValue: "",
    validationRule: "", validationText: "", required: "", indexed: ""
  });

  // State for Sarcina D
  const [ansD, setAnsD] = useState({
    rel1: "", rel2: "",
    cols: [
      { field: "", table: "", sort: "", show: false, criteria: "" },
      { field: "", table: "", sort: "", show: false, criteria: "" },
      { field: "", table: "", sort: "", show: false, criteria: "" },
      { field: "", table: "", sort: "", show: false, criteria: "" },
    ]
  });

  const [currentPage, setCurrentPage] = useState<1 | 2>(1);

  const correctA = {
    dateTime: { table: "evenimente", val: "data" },
    ole: { table: "evenimente", val: "afisa" },
    hyperlink: { table: "teatre", val: "web" },
  };
  
  const correctC = {
    format: "long date", caption: "calendar", defaultValue: "date()", 
    required: "yes", indexed: "no"
  };

  const getAClass = (key: keyof typeof ansA, type: "table" | "val") => {
    if (!isSubmitted) return "";
    const isCorrect = 
      type === "val" 
        ? ansA[key].val.trim().toLowerCase() === correctA[key].val
        : ansA[key].table === correctA[key].table;
        
    return isCorrect 
      ? "border-green-500 bg-green-50/30 dark:bg-green-900/10 focus:border-green-500 focus:ring-green-500/20" 
      : "border-red-500 bg-red-50/30 dark:bg-red-900/10 focus:border-red-500 focus:ring-red-500/20";
  };

  const getBClass = (num: number) => {
    if (!isSubmitted) return "";
    if (num === 2) return "text-green-600 dark:text-green-500"; // correct answer
    if (ansB === num && num !== 2) return "text-red-500 dark:text-red-500"; // wrong but selected
    return "";
  };

  const getCClass = (key: keyof typeof ansC) => {
    if (!isSubmitted) return "";
    const expected = (correctC as any)[key];
    if (expected) {
       return ansC[key].trim().toLowerCase() === expected
         ? "border-green-500 outline-green-500 bg-green-50 dark:bg-green-900/20"
         : "border-red-500 outline-red-500 bg-red-50 dark:bg-red-900/20";
    }
    return ansC[key] ? "border-gray-200 outline-gray-300" : "";
  };

  const getDRelClass = (key: 'rel1' | 'rel2') => {
    if (!isSubmitted) return "";
    const isCorrect = key === 'rel1' 
      ? (ansD.rel1.trim() === "∞" || ansD.rel1.trim().toLowerCase() === "infinit" || ansD.rel1.trim().toLowerCase() === "n" || ansD.rel1.trim().toLowerCase() === "m" || ansD.rel1.trim() === "8")
      : (ansD.rel2.trim() === "1");
      
    return isCorrect 
      ? "border-green-500 text-green-700 bg-green-50/80" 
      : "border-red-500 text-red-700 bg-red-50/80";
  };

  const getDFieldClass = (colIndex: number, field: keyof typeof ansD.cols[0]) => {
    if (!isSubmitted) return "";
    
    const ans = ansD.cols[colIndex];
    let isCorrect = false;
    
    if (colIndex === 0) {
      if (field === 'field') isCorrect = ans.field.trim().toLowerCase() === "web";
      if (field === 'table') isCorrect = ans.table.trim().toLowerCase() === "teatre";
      if (field === 'show') isCorrect = ans.show === true;
      if (field === 'sort' || field === 'criteria') isCorrect = true;
    } else if (colIndex === 1) {
      if (field === 'field') isCorrect = ans.field.trim().toLowerCase() === "denumire";
      if (field === 'table') isCorrect = ans.table.trim().toLowerCase() === "evenimente";
      if (field === 'show') isCorrect = ans.show === true;
      if (field === 'sort' || field === 'criteria') isCorrect = true;
    } else if (colIndex === 2) {
      if (field === 'field') isCorrect = ans.field.trim().toLowerCase() === "tip";
      if (field === 'table') isCorrect = ans.table.trim().toLowerCase() === "evenimente";
      if (field === 'show') isCorrect = ans.show === false;
      if (field === 'criteria') isCorrect = ans.criteria.replace(/\s+/g, '').toLowerCase().includes("like") && ans.criteria.toLowerCase().includes("comedie");
      if (field === 'sort') isCorrect = true;
    } else if (colIndex === 3) {
      if (field === 'field') isCorrect = ans.field.trim().toLowerCase() === "data";
      if (field === 'table') isCorrect = ans.table.trim().toLowerCase() === "evenimente";
      if (field === 'sort') isCorrect = ["crescător", "ascending", "ascendent", "asc"].includes(ans.sort.trim().toLowerCase());
      if (field === 'show') isCorrect = ans.show === true;
      if (field === 'criteria') {
        const cr = ans.criteria.replace(/\s+/g, '').toLowerCase();
        isCorrect = cr === "month([data])=1" || cr.includes("*.01.*");
      }
    }

    return isCorrect ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-red-500 bg-red-50 dark:bg-red-900/20";
  };

  const updateAnsDCol = (colIndex: number, field: keyof typeof ansD.cols[0], value: any) => {
    const newCols = [...ansD.cols];
    newCols[colIndex] = { ...newCols[colIndex], [field]: value };
    setAnsD({ ...ansD, cols: newCols });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setAnsA({
      dateTime: { table: "", val: "" },
      ole: { table: "", val: "" },
      hyperlink: { table: "", val: "" },
    });
    setAnsB(null);
    setAnsC({
      format: "", inputMask: "", caption: "", defaultValue: "",
      validationRule: "", validationText: "", required: "", indexed: ""
    });
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
  const totalCount = 25; // A:6 + B:2 + C:5 + D:12

  if (isSubmitted) {
    // Sarcina A
    if (ansA.dateTime.table === correctA.dateTime.table) correctCount++;
    if (ansA.dateTime.val.trim().toLowerCase() === correctA.dateTime.val) correctCount++;
    if (ansA.ole.table === correctA.ole.table) correctCount++;
    if (ansA.ole.val.trim().toLowerCase() === correctA.ole.val) correctCount++;
    if (ansA.hyperlink.table === correctA.hyperlink.table) correctCount++;
    if (ansA.hyperlink.val.trim().toLowerCase() === correctA.hyperlink.val) correctCount++;

    // Sarcina B
    if (ansB === 2) correctCount += 2; // 2 puncte

    // Sarcina C
    if (ansC.format.trim().toLowerCase() === correctC.format) correctCount++;
    if (ansC.caption.trim().toLowerCase() === correctC.caption) correctCount++;
    if (ansC.defaultValue.trim().toLowerCase() === correctC.defaultValue) correctCount++;
    if (ansC.required.trim().toLowerCase() === correctC.required) correctCount++;
    if (ansC.indexed.trim().toLowerCase() === correctC.indexed) correctCount++;

    // Sarcina D (Max 12 puncte)
    const rel1Correct = ansD.rel1.trim() === "1" || ansD.rel1.trim() === "∞" || ansD.rel1.trim().toLowerCase() === "infinit" || ansD.rel1.trim().toLowerCase() === "n" || ansD.rel1.trim().toLowerCase() === "m" || ansD.rel1.trim() === "8";
    if (rel1Correct) correctCount++; // 1 punct
    if (ansD.rel2.trim() === "1") correctCount++; // 1 punct
    
    for (let colIndex = 0; colIndex < 4; colIndex++) {
      const ans = ansD.cols[colIndex];
      let expectedField = "";
      let expectedTable = "";
      
      if (colIndex === 0) { expectedField = "web"; expectedTable = "teatre"; }
      else if (colIndex === 1) { expectedField = "denumire"; expectedTable = "evenimente"; }
      else if (colIndex === 2) { expectedField = "tip"; expectedTable = "evenimente"; }
      else if (colIndex === 3) { expectedField = "data"; expectedTable = "evenimente"; }
      
      // 1 punct per coloană pentru alegerea corectă a câmpului și tabelului (total 4)
      if (ans.field.trim().toLowerCase() === expectedField && ans.table.trim().toLowerCase() === expectedTable) {
        correctCount++; 
      }
      
      if (colIndex === 3) { // Data
        const vSort = ans.sort.trim().toLowerCase();
        if (["crescător", "ascending", "ascendent", "asc"].includes(vSort)) correctCount += 2; // 2 puncte pentru sortare
        
        const cr = ans.criteria.replace(/\s+/g, '').toLowerCase();
        if (cr === "month([data])=1" || cr.includes("*.01.*")) correctCount += 2; // 2 puncte pentru criteriu Data
      }
      
      if (colIndex === 2) { // Tip
        if (ans.criteria.trim().toLowerCase().includes("comed")) correctCount += 2; // 2 puncte pentru criteriu Tip
      }
    }
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background dark:bg-navy-deep font-display text-gray-900 dark:text-gray-100 selection:bg-primary/20">
      <ExerciseHeader />

      <main className="flex-1 flex overflow-hidden relative">
        <div className="flex-1 overflow-y-auto bg-gray-50/50 dark:bg-navy-deep relative custom-scrollbar">
          <div className="max-w-[1600px] w-full mx-auto px-6 py-8 lg:py-12 relative z-10">
            {/* Subject Badge & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-900/20 px-4 py-1.5 rounded-full border border-blue-100 dark:border-blue-800/50 self-start">
                Subiectul IV. (25 de puncte)
              </span>
              <div className="flex items-center gap-3 flex-wrap justify-end">
                {isSubmitted && (
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold px-4 py-2 rounded-full border border-green-200 dark:border-green-800/50 mr-2 flex items-center gap-2">
                    <span className="material-icons-round text-sm">check_circle</span>
                    Scor: {correctCount} / {totalCount}
                  </div>
                )}
                <Button asChild className="bg-primary hover:bg-orange-600 text-white rounded-full px-6 shadow-lg shadow-orange-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer">
                  <a href="/downloads/Access1.pdf" download>
                    <span className="material-icons-round text-sm">download</span>
                    Descarcă
                  </a>
                </Button>
                <Button 
                  onClick={handleReset}
                  className="rounded-full px-6 bg-blue-900 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-700 text-white shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  Resetare
                </Button>
                <Button 
                  onClick={() => setIsSubmitted(true)}
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 shadow-lg shadow-green-500/30 transition-all hover:scale-105 active:scale-95"
                >
                  Trimite
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column */}
              <div className="flex flex-col gap-6 xl:sticky xl:top-0 h-fit max-h-full xl:max-h-[calc(100vh-100px)] xl:overflow-y-auto custom-scrollbar pr-2 pb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
                    Baze de Date: MS Access
                  </h1>
                  <div className="prose dark:prose-invert max-w-none text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                      În aplicația MS Access a fost creată o bază de date. Fragmente din conținutul tabelelor bazei de date sunt prezentate în Imaginea 2.
                    </p>
                  </div>
                </div>
                <AccessTables />
              </div>

              {/* Right Column */}
              <div className="space-y-10 xl:pb-12 h-fit">
                {/* Pagination */}
                <div className="flex gap-2 border-b border-gray-200 dark:border-white/10 pb-4">
                   <button 
                     onClick={() => setCurrentPage(1)}
                     className={`px-6 py-2 rounded-full font-bold transition-all border ${currentPage === 1 ? 'border-primary bg-primary/10 text-primary shadow-sm' : 'border-gray-200 dark:border-navy-deep/50 bg-gray-50/50 dark:bg-navy-surface text-gray-500 hover:bg-gray-100 dark:hover:bg-navy-deep'}`}
                   >
                     Pagina 1
                   </button>
                   <button 
                     onClick={() => setCurrentPage(2)}
                     className={`px-6 py-2 rounded-full font-bold transition-all border ${currentPage === 2 ? 'border-primary bg-primary/10 text-primary shadow-sm' : 'border-gray-200 dark:border-navy-deep/50 bg-gray-50/50 dark:bg-navy-surface text-gray-500 hover:bg-gray-100 dark:hover:bg-navy-deep'}`}
                   >
                     Pagina 2
                   </button>
                </div>

                <div className={currentPage === 1 ? 'space-y-10 block' : 'hidden'}>
                {/* Task A */}
                <TaskContainer title="Sarcina A">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">
                    În tabelul de mai jos sunt date 3 tipuri de date (coloana A). Bifați în coloana B tabelul care conține câmpuri cu date de tipul respectiv. Scrieți în coloana C câte un câmp din tabelul bifat, care corespunde tipului din coloana A:
                  </p>
                  
                  <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
                    <table className="w-full text-left border-collapse bg-white dark:bg-navy-surface">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-navy-deep/80 text-gray-900 dark:text-gray-100">
                          <th className="p-4 border-b border-r border-gray-200 dark:border-white/10 font-bold text-center w-1/4">A</th>
                          <th className="p-4 border-b border-r border-gray-200 dark:border-white/10 font-bold text-center w-1/2">B</th>
                          <th className="p-4 border-b border-gray-200 dark:border-white/10 font-bold text-center w-1/4">C</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                        {/* rows mapped directly */}
                        <tr className="hover:bg-gray-50/50 dark:hover:bg-navy-deep/30 transition-colors">
                          <td className="p-4 border-r font-semibold font-mono text-center bg-gray-50 dark:bg-navy-deep/20 text-blue-700 dark:text-blue-300">Date/Time</td>
                          <td className="p-4 border-r border-gray-200 dark:border-white/10">
                            <div className={`p-2 border-2 rounded-lg ${getAClass('dateTime', 'table') || 'border-transparent'} flex flex-col gap-3 justify-center items-center transition-colors`}>
                              <label className={`flex items-center gap-3 group ${isSubmitted ? 'cursor-default opacity-80' : 'cursor-pointer'}`}>
                                <input disabled={isSubmitted} type="radio" name="A_dt" checked={ansA.dateTime.table === 'teatre'} onChange={() => setAnsA({...ansA, dateTime: {...ansA.dateTime, table: 'teatre'}})} className="w-5 h-5 rounded-full outline-offset-2 outline-primary disabled:cursor-default" />
                                <span className="font-medium">Teatre</span>
                              </label>
                              <label className={`flex items-center gap-3 group ${isSubmitted ? 'cursor-default opacity-80' : 'cursor-pointer'}`}>
                                <input disabled={isSubmitted} type="radio" name="A_dt" checked={ansA.dateTime.table === 'evenimente'} onChange={() => setAnsA({...ansA, dateTime: {...ansA.dateTime, table: 'evenimente'}})} className="w-5 h-5 rounded-full outline-offset-2 outline-primary disabled:cursor-default" />
                                <span className="font-medium">Evenimente</span>
                              </label>
                            </div>
                          </td>
                          <td className="p-4">
                            <input 
                              type="text" 
                              disabled={isSubmitted}
                              value={ansA.dateTime.val}
                              onChange={e => setAnsA({...ansA, dateTime: {...ansA.dateTime, val: e.target.value}})}
                              className={`w-full dark:bg-navy-deep border-2 rounded-lg px-4 py-2 outline-none transition-all disabled:opacity-80 disabled:cursor-not-allowed ${getAClass('dateTime', 'val') || 'bg-gray-50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20'}`}
                              placeholder="Nume câmp..."
                            />
                          </td>
                        </tr>
                        
                        {/* OLE */}
                        <tr className="hover:bg-gray-50/50 dark:hover:bg-navy-deep/30 transition-colors">
                          <td className="p-4 border-r font-semibold font-mono text-center bg-gray-50 dark:bg-navy-deep/20 text-purple-700 dark:text-purple-300">OLE Object</td>
                          <td className="p-4 border-r border-gray-200 dark:border-white/10">
                             <div className={`p-2 border-2 rounded-lg ${getAClass('ole', 'table') || 'border-transparent'} flex flex-col gap-3 justify-center items-center transition-colors`}>
                              <label className={`flex items-center gap-3 group ${isSubmitted ? 'cursor-default opacity-80' : 'cursor-pointer'}`}>
                                <input disabled={isSubmitted} type="radio" name="A_ole" checked={ansA.ole.table === 'teatre'} onChange={() => setAnsA({...ansA, ole: {...ansA.ole, table: 'teatre'}})} className="w-5 h-5 rounded-full outline-offset-2 outline-primary disabled:cursor-default" />
                                <span className="font-medium">Teatre</span>
                              </label>
                              <label className={`flex items-center gap-3 group ${isSubmitted ? 'cursor-default opacity-80' : 'cursor-pointer'}`}>
                                <input disabled={isSubmitted} type="radio" name="A_ole" checked={ansA.ole.table === 'evenimente'} onChange={() => setAnsA({...ansA, ole: {...ansA.ole, table: 'evenimente'}})} className="w-5 h-5 rounded-full outline-offset-2 outline-primary disabled:cursor-default" />
                                <span className="font-medium">Evenimente</span>
                              </label>
                            </div>
                          </td>
                          <td className="p-4">
                            <input 
                              type="text" 
                              disabled={isSubmitted}
                              value={ansA.ole.val}
                              onChange={e => setAnsA({...ansA, ole: {...ansA.ole, val: e.target.value}})}
                              className={`w-full dark:bg-navy-deep border-2 rounded-lg px-4 py-2 outline-none transition-all disabled:opacity-80 disabled:cursor-not-allowed ${getAClass('ole', 'val') || 'bg-gray-50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20'}`}
                              placeholder="Nume câmp..."
                            />
                          </td>
                        </tr>

                        {/* Hyperlink */}
                        <tr className="hover:bg-gray-50/50 dark:hover:bg-navy-deep/30 transition-colors">
                          <td className="p-4 border-r font-semibold font-mono text-center bg-gray-50 dark:bg-navy-deep/20 text-teal-700 dark:text-teal-300">Hyperlink</td>
                          <td className="p-4 border-r border-gray-200 dark:border-white/10">
                             <div className={`p-2 border-2 rounded-lg ${getAClass('hyperlink', 'table') || 'border-transparent'} flex flex-col gap-3 justify-center items-center transition-colors`}>
                              <label className={`flex items-center gap-3 group ${isSubmitted ? 'cursor-default opacity-80' : 'cursor-pointer'}`}>
                                <input disabled={isSubmitted} type="radio" name="A_hyper" checked={ansA.hyperlink.table === 'teatre'} onChange={() => setAnsA({...ansA, hyperlink: {...ansA.hyperlink, table: 'teatre'}})} className="w-5 h-5 rounded-full outline-offset-2 outline-primary disabled:cursor-default" />
                                <span className="font-medium">Teatre</span>
                              </label>
                              <label className={`flex items-center gap-3 group ${isSubmitted ? 'cursor-default opacity-80' : 'cursor-pointer'}`}>
                                <input disabled={isSubmitted} type="radio" name="A_hyper" checked={ansA.hyperlink.table === 'evenimente'} onChange={() => setAnsA({...ansA, hyperlink: {...ansA.hyperlink, table: 'evenimente'}})} className="w-5 h-5 rounded-full outline-offset-2 outline-primary disabled:cursor-default" />
                                <span className="font-medium">Evenimente</span>
                              </label>
                            </div>
                          </td>
                          <td className="p-4">
                            <input 
                              type="text" 
                              disabled={isSubmitted}
                              value={ansA.hyperlink.val}
                              onChange={e => setAnsA({...ansA, hyperlink: {...ansA.hyperlink, val: e.target.value}})}
                              className={`w-full dark:bg-navy-deep border-2 rounded-lg px-4 py-2 outline-none transition-all disabled:opacity-80 disabled:cursor-not-allowed ${getAClass('hyperlink', 'val') || 'bg-gray-50 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20'}`}
                              placeholder="Nume câmp..."
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TaskContainer>

                <TaskContainer title="Sarcina B">
                   <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">
                    Bifați numărul de câmpuri din tabelul <span className="font-bold underline decoration-orange-300 decoration-2 underline-offset-2">Evenimente</span> de tip numeric:
                  </p>
                  
                  <div className={`flex items-center gap-12 bg-white dark:bg-navy-surface p-6 rounded-xl border-2 ${isSubmitted ? (ansB === 2 ? 'border-green-500' : 'border-red-500') : 'border-gray-200 dark:border-white/10'} shadow-sm w-fit transition-colors`}>
                    {[0, 1, 2].map((num) => (
                      <label key={num} className={`flex items-center gap-3 group ${isSubmitted ? 'cursor-default opacity-80' : 'cursor-pointer'} ${getBClass(num)}`}>
                        <div className="relative flex items-center justify-center">
                          <input 
                            disabled={isSubmitted}
                            type="radio" 
                            name="numeric-fields" 
                            value={num} 
                            checked={ansB === num}
                            onChange={() => setAnsB(num)}
                            className={`w-6 h-6 border-2 border-gray-300 text-primary dark:border-gray-600 dark:bg-navy-deep peer appearance-none rounded-full checked:border-primary transition-all disabled:cursor-default ${isSubmitted ? '' : 'cursor-pointer'}`} 
                          />
                          <div className="absolute w-3 h-3 bg-primary rounded-full opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                        <span className="text-xl font-bold transition-colors">{num}</span>
                      </label>
                    ))}
                  </div>
                </TaskContainer>

                <TaskContainer title="Sarcina C">
                   <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 font-medium mb-8">
                    <p>
                      Se consideră un câmp de tip <span className="font-mono bg-gray-100 dark:bg-navy-deep px-2 py-1 rounded text-primary border border-gray-200 dark:border-white/10">Date/Time</span>. Completați proprietățile acestui câmp, astfel încât:
                    </p>
                    <ul className="list-disc list-outside ml-6 space-y-2 marker:text-primary">
                      <li>Denumirea câmpului la afișare va fi <strong className="text-gray-900 dark:text-white">Calendar</strong>;</li>
                      <li>Valoarea implicită este ziua actuală, dată prin funcția <strong className="text-gray-900 dark:text-white">Date()</strong>;</li>
                      <li>Datele din câmp nu sunt unice (valoarea <strong className="text-gray-900 dark:text-white">No</strong>);</li>
                      <li>Formatul de afișare <strong className="text-gray-900 dark:text-white">Long date</strong>;</li>
                      <li>Datele sunt obligatorii pentru introducere (valoarea <strong className="text-gray-900 dark:text-white">Yes</strong>).</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-[#f0f0f0] rounded-lg border border-gray-300 shadow-md overflow-hidden max-w-2xl text-sm font-sans" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
                    <div className="flex border-b border-gray-300 bg-[#e3e3e3] px-2 pt-2">
                      <div className="bg-white px-4 py-1 border-t border-l border-r border-gray-300 rounded-t shadow-[0_-1px_2px_rgba(0,0,0,0.05)] font-bold text-gray-800 z-10 relative -mb-px">General</div>
                      <div className="px-4 py-1 text-gray-600 hover:text-gray-800 cursor-pointer">Lookup</div>
                    </div>
                    
                    <div className="p-1 bg-white">
                      <table className="w-full border-collapse">
                        <tbody className="divide-y divide-gray-100">
                          <PropRow disabled={isSubmitted} label="Format" placeholder="Completare..." value={ansC.format} evalClass={getCClass('format')} onChange={(v) => setAnsC({...ansC, format: v})} />
                          <PropRow disabled={isSubmitted} label="Input Mask" placeholder="Completare..." value={ansC.inputMask} onChange={(v) => setAnsC({...ansC, inputMask: v})} />
                          <PropRow disabled={isSubmitted} label="Caption" placeholder="Completare..." value={ansC.caption} evalClass={getCClass('caption')} onChange={(v) => setAnsC({...ansC, caption: v})} />
                          <PropRow disabled={isSubmitted} label="Default Value" placeholder="Completare..." value={ansC.defaultValue} evalClass={getCClass('defaultValue')} onChange={(v) => setAnsC({...ansC, defaultValue: v})} />
                          <PropRow disabled={isSubmitted} label="Validation Rule" placeholder="Completare..." value={ansC.validationRule} onChange={(v) => setAnsC({...ansC, validationRule: v})} />
                          <PropRow disabled={isSubmitted} label="Validation Text" placeholder="Completare..." value={ansC.validationText} onChange={(v) => setAnsC({...ansC, validationText: v})} />
                          <PropRow disabled={isSubmitted} label="Required" placeholder="Completare..." value={ansC.required} evalClass={getCClass('required')} onChange={(v) => setAnsC({...ansC, required: v})} />
                          <PropRow disabled={isSubmitted} label="Indexed" placeholder="Completare..." value={ansC.indexed} evalClass={getCClass('indexed')} onChange={(v) => setAnsC({...ansC, indexed: v})} />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TaskContainer>
                </div>

                <div className={currentPage === 2 ? 'space-y-10 block' : 'hidden'}>
                  <TaskContainer title="Sarcina D">
                    <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 font-medium mb-8">
                      <p>Utilizând tabelele bazei de date, completați toate elementele necesare, inclusiv relațiile dintre tabele, pentru a defini în regimul <em>Design View</em> o interogare.</p>
                      <ul className="list-disc list-outside ml-6 space-y-2 marker:text-primary">
                        <li>Va afișa datele a 3 câmpuri: <strong>web</strong>, <strong>Denumire</strong> și <strong>Data</strong>.</li>
                        <li>Va afișa pagina web a teatrului care are evenimente în descrierea conținutului acestuia este inclus cuvântul comedie pe parcursul lunii ianuarie.</li>
                        <li>Datele vor fi sortate crescător după datele câmpului <strong>Data</strong>.</li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-[#f0f0f0] rounded-xl border border-gray-300 shadow-sm p-6 overflow-x-auto text-gray-900 mb-8" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
                      <h3 className="font-bold mb-6 text-gray-800 text-lg border-b pb-2">Relații între tabele</h3>
                      
                      <div className="text-sm text-gray-500 mb-4 flex items-center justify-center gap-2">
                         <span className="material-icons-round text-blue-500 text-lg">info</span>
                         <span>Completați tipul relației (1, ∞, n) pe linia de legătură.</span>
                         {!isSubmitted && (
                           <button 
                             onClick={() => setAnsD({...ansD, rel1: '∞'})} 
                             className="ml-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 px-2 py-1 rounded text-xs font-bold border border-gray-300 shadow-sm transition-colors flex items-center gap-1 cursor-pointer"
                           >
                             <span className="text-[10px] leading-none">Scrie</span> ∞
                           </button>
                         )}
                      </div>

                      <div className="flex items-start justify-center gap-24 py-4 min-w-[500px] relative h-[260px]">
                         {/* Static SVG Line visualization */}
                         <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                            {/* Path from Evenimente.ID (y=133) to Teatre.ID (y=85) */}
                            <path 
                              d="M calc(50% - 3rem) 133 L calc(50% - 1.5rem) 133 L calc(50% + 1.5rem) 85 L calc(50% + 3rem) 85" 
                              stroke="black" strokeWidth="2" fill="none" 
                            />
                         </svg>

                         {/* Inputs for relation cardinality */}
                         <input 
                           disabled={isSubmitted} 
                           type="text" 
                           value={ansD.rel1} 
                           onChange={e => setAnsD({...ansD, rel1: e.target.value})} 
                           className={`absolute text-center outline-none border-b-2 bg-white/80 backdrop-blur-sm z-20 font-bold transition-all w-8 text-sm disabled:opacity-90 disabled:cursor-not-allowed ${getDRelClass('rel1') || 'border-gray-500 hover:border-gray-800 focus:border-primary focus:text-primary'}`} 
                           style={{ left: 'calc(50% - 2.25rem)', top: '109px', transform: 'translateX(-50%)' }}
                           placeholder="∞"
                         />
                         
                         <input 
                           disabled={isSubmitted} 
                           type="text" 
                           value={ansD.rel2} 
                           onChange={e => setAnsD({...ansD, rel2: e.target.value})} 
                           className={`absolute text-center outline-none border-b-2 bg-white/80 backdrop-blur-sm z-20 font-bold transition-all w-8 text-sm disabled:opacity-90 disabled:cursor-not-allowed ${getDRelClass('rel2') || 'border-gray-500 hover:border-gray-800 focus:border-primary focus:text-primary'}`} 
                           style={{ left: 'calc(50% + 2.25rem)', top: '61px', transform: 'translateX(-50%)' }}
                           placeholder="1"
                         />

                         {/* Evenimente Box */}
                         <div className="bg-white border border-gray-400 w-48 shadow-[1px_1px_3px_rgba(0,0,0,0.2)] z-10 text-[13px] relative select-none">
                            <div className="px-2 py-1 border-b border-red-800 bg-white font-bold h-[29px] flex items-center text-black">Evenimente</div>
                            <div className="pb-2 pt-1 flex flex-col text-black">
                              {["*", "Id_ev", "Denumire", "ID", "Tip", "Afisa", "Data"].map((field, idx) => (
                                 <div 
                                    key={`ev-${idx}`}
                                    className={`px-2 h-[24px] flex items-center gap-2`}
                                 >
                                    <span className="w-4 h-4 flex items-center justify-center text-gray-500">
                                       {field === 'Id_ev' && <span className="material-icons-round text-[14px] rotate-90 text-yellow-600 drop-shadow-sm">vpn_key</span>}
                                    </span>
                                    <span>{field}</span>
                                 </div>
                              ))}
                            </div>
                         </div>

                         {/* Teatre Box */}
                         <div className="bg-white border border-gray-400 w-48 shadow-[1px_1px_3px_rgba(0,0,0,0.2)] z-10 text-[13px] relative select-none">
                            <div className="px-2 py-1 border-b border-red-800 bg-white font-bold h-[29px] flex items-center text-black">Teatre</div>
                            <div className="pb-2 pt-1 flex flex-col text-black">
                              {/* Add gap to make ID align nicely, but actually we use literal array as before */}
                              {["*", "ID", "Teatru", "Despre", "Sigla", "web"].map((field, idx) => (
                                 <div 
                                    key={`te-${idx}`}
                                    className={`px-2 h-[24px] flex items-center gap-2`}
                                 >
                                    <span className="w-4 h-4 flex items-center justify-center text-gray-500">
                                       {field === 'ID' && <span className="material-icons-round text-[14px] rotate-90 text-yellow-600 drop-shadow-sm">vpn_key</span>}
                                    </span>
                                    <span>{field}</span>
                                 </div>
                              ))}
                            </div>
                         </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-[#f0f0f0] border border-gray-300 rounded-lg overflow-x-auto shadow-sm" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
                      <table className="w-full text-sm text-gray-900 border-collapse min-w-[600px]">
                        <tbody className="divide-y divide-gray-300">
                          <tr className="bg-[#e3e3e3] font-bold">
                            <td className="p-3 border-r border-gray-300 w-24 align-middle">Field:</td>
                            {[0, 1, 2, 3].map(i => (
                               <td key={i} className="p-0 border-r border-gray-300 relative">
                                 <input disabled={isSubmitted} type="text" className={`w-full h-full p-3 outline-none border-2 border-transparent focus:border-primary disabled:opacity-80 disabled:cursor-not-allowed transition-colors bg-white ${getDFieldClass(i, 'field')}`} value={ansD.cols[i].field} onChange={e => updateAnsDCol(i, 'field', e.target.value)} />
                               </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-3 border-r border-gray-300 bg-[#e3e3e3] font-bold align-middle">Table:</td>
                            {[0, 1, 2, 3].map(i => (
                               <td key={i} className="p-0 border-r border-gray-300 relative">
                                 <input disabled={isSubmitted} type="text" className={`w-full h-full p-3 outline-none border-2 border-transparent focus:border-primary disabled:opacity-80 disabled:cursor-not-allowed transition-colors bg-white ${getDFieldClass(i, 'table')}`} value={ansD.cols[i].table} onChange={e => updateAnsDCol(i, 'table', e.target.value)} />
                               </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-3 border-r border-gray-300 bg-[#e3e3e3] font-bold align-middle">Sort:</td>
                            {[0, 1, 2, 3].map(i => (
                               <td key={i} className="p-0 border-r border-gray-300 relative">
                                 <input disabled={isSubmitted} type="text" className={`w-full h-full p-3 outline-none border-2 border-transparent focus:border-primary disabled:opacity-80 disabled:cursor-not-allowed transition-colors bg-white ${getDFieldClass(i, 'sort')}`} value={ansD.cols[i].sort} onChange={e => updateAnsDCol(i, 'sort', e.target.value)} />
                               </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-3 border-r border-gray-300 bg-[#e3e3e3] font-bold align-middle">Show:</td>
                            {[0, 1, 2, 3].map(i => (
                               <td key={i} className={`p-0 border-r border-gray-300 text-center bg-white border-2 border-transparent transition-colors ${getDFieldClass(i, 'show')}`}>
                                 <input disabled={isSubmitted} type="checkbox" className="w-5 h-5 align-middle outline outline-offset-2 outline-primary outline-0 focus:outline-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-80" checked={ansD.cols[i].show} onChange={e => updateAnsDCol(i, 'show', e.target.checked)} />
                               </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-3 border-r border-gray-300 bg-[#e3e3e3] font-bold align-middle">Criteria:</td>
                            {[0, 1, 2, 3].map(i => (
                               <td key={i} className="p-0 border-r border-gray-300 relative">
                                 <input disabled={isSubmitted} type="text" className={`w-full h-full p-3 outline-none border-2 border-transparent focus:border-primary disabled:opacity-80 disabled:cursor-not-allowed transition-colors bg-white ${getDFieldClass(i, 'criteria')}`} value={ansD.cols[i].criteria} onChange={e => updateAnsDCol(i, 'criteria', e.target.value)} />
                               </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-3 border-r border-gray-300 bg-[#e3e3e3] font-bold align-middle">or:</td>
                            {[0, 1, 2, 3].map(i => (
                               <td key={i} className="p-0 border-r border-gray-300 relative">
                                 <input disabled={isSubmitted} type="text" className="w-full h-full p-3 outline-none border-2 border-transparent bg-white disabled:bg-gray-50 disabled:cursor-not-allowed" />
                               </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TaskContainer>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fixed inset-0 pointer-events-none opacity-[0.2] dark:opacity-[0.1] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] z-0"></div>
        </div>
      </main>
    </div>
  );
}

function TaskContainer({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="bg-white/50 dark:bg-navy-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-white/40 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-linear-to-br from-primary to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 transform -rotate-6">
        <span className="material-icons-round text-white">quiz</span>
      </div>
      <h2 className="text-2xl font-bold ml-6 mb-8 text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10 pb-4">
        {title}
      </h2>
      <div className="pl-6">
        {children}
      </div>
    </div>
  );
}

function PropRow({ label, placeholder, value, onChange, evalClass, disabled }: { label: string, placeholder: string, value: string, onChange: (val: string) => void, evalClass?: string, disabled?: boolean }) {
  return (
    <tr>
      <td className="w-1/3 p-1.5 align-middle bg-[#f5f5f5] text-gray-700 border-r border-gray-200 font-medium whitespace-nowrap">
        {label}
      </td>
      <td className="w-2/3 p-0 align-middle">
        <input 
          type="text" 
          disabled={disabled}
          value={value}
          onChange={e => onChange(e.target.value)}
          className={`w-full px-2 py-1.5 focus:bg-blue-50 focus:outline outline-primary -outline-offset-2 transition-all bg-white disabled:bg-gray-50/50 disabled:text-gray-500 disabled:cursor-not-allowed text-gray-900 text-sm border-2 ${evalClass || 'border-transparent'}`}
          placeholder={placeholder}
        />
      </td>
    </tr>
  );
}
