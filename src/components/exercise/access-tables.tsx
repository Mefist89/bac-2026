import React from 'react';

const teatreData = [
  { id: "TDC", teatru: 'Teatrul Dramatic Rus de Stat "A. P. Cehov"', despre: "", web: "https://cehov.md/" },
  { id: "TEI", teatru: 'Teatrul național "Eugen Ionescu"', despre: "🎨 La Teatrul Național Eugène Ionesc...", web: "https://itei.md/" },
  { id: "TFN", teatru: 'Teatrul fără nume', despre: "Teatrul Republican pentru Copii și Tine...", web: "https://www.tfn.md/" },
  { id: "TGA", teatru: 'Teatrul Geneza Art', despre: "Teatrul Geneza Art (TGA) este unul din...", web: "https://www.genezaart.md/" },
  { id: "TL", teatru: 'Teatrul Luceafărul', despre: 'Teatrul Republican "Luceafărul" a fost...', web: "https://luceafarul.md/" },
  { id: "TME", teatru: 'Teatrul național "Mihai Eminescu"', despre: "Teatrul Național din Chișinău, prima in...", web: "https://tnme.md/" },
  { id: "TNO", teatru: 'Teatrul național de operă și balet "Maria Bie"', despre: "Pentru Republica Moldova, ca de altfe...", web: "https://www.tnob.md/" },
  { id: "TNS", teatru: 'Teatrul național SATIRICUS ION LUCA CARAG', despre: "SATIRICUS este un teatru de rezistență", web: "https://satiricus.md/" },
];

const evenimenteData = [
  { id_ev: 1, denumire: "Dosarele Siberiei", id: "TME", tip: "dramă, istorie 16+", afisa: "Paintbrush Picture", data: "04/03/2025" },
  { id_ev: 2, denumire: "Poveste de Crăciun", id: "TEI", tip: "spectacol copii 7+", afisa: "", data: "05/03/2026" },
  { id_ev: 3, denumire: "Visul unei nopți de vară", id: "TFN", tip: "comedie dramatică", afisa: "", data: "16/04/2026" },
  { id_ev: 4, denumire: "Take, Ianke și Cadâr", id: "TME", tip: "anti-poveste", afisa: "Paintbrush Picture", data: "05/04/2026" },
  { id_ev: 5, denumire: "Făt-frumos. Renaștere", id: "TL", tip: "spectacol 5+, poveste", afisa: "Paintbrush Picture", data: "12/02/2026" },
  { id_ev: 6, denumire: "Familionul", id: "TGA", tip: "comedie 16+", afisa: "Paintbrush Picture", data: "25/05/2026" },
  { id_ev: 7, denumire: "Arta conviețuirii", id: "TEI", tip: "comedie 16+", afisa: "", data: "26/07/2026" },
  { id_ev: 8, denumire: "Hamlet in sos picant", id: "TME", tip: "comedie", afisa: "Paintbrush Picture", data: "21/01/2026" },
];

export function AccessTables() {
  return (
    <div className="space-y-6 w-full max-w-full overflow-hidden">
      {/* Teatre Table */}
      <div className="bg-white dark:bg-[#1e1e1e] rounded-lg border border-gray-300 dark:border-gray-600 shadow-md overflow-hidden text-[13px] font-sans" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
        {/* Tab Bar */}
        <div className="flex bg-[#e3e3e3] dark:bg-[#2d2d30] border-b border-gray-300 dark:border-gray-600">
           <div className="bg-white dark:bg-[#1e1e1e] flex items-center gap-2 px-3 py-1 border-r border-[#c1c1c1] dark:border-gray-600 shadow-[0_-2px_0_#0078d7_inset] relative -mb-px z-10">
             <span className="material-icons-round text-blue-600 text-[14px]">table_chart</span>
             <span className="font-semibold text-gray-800 dark:text-gray-200">Teatre</span>
             <span className="material-icons-round text-gray-400 text-[14px] ml-1 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">close</span>
           </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse whitespace-nowrap">
            <thead className="bg-[#f0f0f0] dark:bg-[#2d2d30] text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-600">
               <tr>
                 <th className="w-6 border-r border-gray-300 dark:border-gray-600 bg-[#f0f0f0] dark:bg-[#2d2d30]"></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">ID <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">Teatru <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">Despre <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">web <span className="text-[10px] text-gray-400">▼</span></th>
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-[#1e1e1e]">
              {teatreData.map((row, i) => (
                <tr key={row.id} className={i % 2 === 0 ? "bg-white dark:bg-[#1e1e1e]" : "bg-[#f9f9f9] dark:bg-[#252526]"}>
                  <td className="border-r border-gray-300 dark:border-gray-700 text-center text-[10px] text-gray-500 bg-[#f0f0f0] dark:bg-[#2d2d30] cursor-pointer">
                    +
                  </td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">{row.id}</td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">{row.teatru}</td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 truncate max-w-[200px]">{row.despre}</td>
                  <td className="px-2 py-0.5 text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 cursor-pointer">{row.web}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Evenimente Table */}
      <div className="bg-white dark:bg-[#1e1e1e] rounded-lg border border-gray-300 dark:border-gray-600 shadow-md overflow-hidden text-[13px] font-sans" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
        {/* Tab Bar */}
        <div className="flex bg-[#e3e3e3] dark:bg-[#2d2d30] border-b border-gray-300 dark:border-gray-600">
           <div className="bg-white dark:bg-[#1e1e1e] flex items-center gap-2 px-3 py-1 border-r border-[#c1c1c1] dark:border-gray-600 shadow-[0_-2px_0_#0078d7_inset] relative -mb-px z-10">
             <span className="material-icons-round text-green-600 text-[14px]">table_chart</span>
             <span className="font-semibold text-gray-800 dark:text-gray-200">Evenimente</span>
             <span className="material-icons-round text-gray-400 text-[14px] ml-1 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">close</span>
           </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse whitespace-nowrap">
            <thead className="bg-[#f0f0f0] dark:bg-[#2d2d30] text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-600">
               <tr>
                 <th className="w-6 border-r border-gray-300 dark:border-gray-600 bg-[#f0f0f0] dark:bg-[#2d2d30]"></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">Id_ev <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">Denumire <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">ID <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">Tip <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">Afisa <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">Data <span className="text-[10px] text-gray-400">▼</span></th>
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-[#1e1e1e]">
              {evenimenteData.map((row, i) => (
                <tr key={row.id_ev} className={i % 2 === 0 ? "bg-white dark:bg-[#1e1e1e]" : "bg-[#f9f9f9] dark:bg-[#252526]"}>
                  <td className="border-r border-gray-300 dark:border-gray-700 text-center text-[10px] text-gray-500 bg-[#f0f0f0] dark:bg-[#2d2d30] cursor-pointer">
                    +
                  </td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-right text-gray-800 dark:text-gray-200">{row.id_ev}</td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">{row.denumire}</td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">{row.id}</td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">{row.tip}</td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">{row.afisa}</td>
                  <td className="px-2 py-0.5 text-gray-800 dark:text-gray-200 text-right">{row.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 italic">Imaginea 2</p>
    </div>
  );
}
