import React from 'react';

const clientData = [
  { codC: "c001", numeP: "Marcu Radu", telefon: "022485837", locatia: "https://maps.app.goo.gl/vygeA...", codQr: "Bitmap Image" },
  { codC: "c002", numeP: "Barbăscumpă Nelly", telefon: "022233460", locatia: "https://maps.app.goo.gl/95sdx...", codQr: "Bitmap Image" },
  { codC: "c003", numeP: "Fusu Leonid", telefon: "", locatia: "https://maps.app.goo.gl/gj45d...", codQr: "Bitmap Image" },
  { codC: "c004", numeP: "Dermenji Corina", telefon: "022113249", locatia: "https://maps.app.goo.gl/SKJi1...", codQr: "" },
  { codC: "c005", numeP: "Duca Viorelia", telefon: "022333333", locatia: "https://maps.app.goo.gl/vdR9f...", codQr: "Bitmap Image" },
];

const comandaData = [
  { cc: 1, codC: "c001", dataC: "02.02.2026", total: "300,00 lei", livrare: false },
  { cc: 2, codC: "c001", dataC: "05.02.2026", total: "550,00 lei", livrare: true },
  { cc: 3, codC: "c002", dataC: "02.02.2026", total: "453,00 lei", livrare: true },
  { cc: 4, codC: "c004", dataC: "06.01.2026", total: "1.000,00 lei", livrare: true },
  { cc: 5, codC: "c002", dataC: "06.01.2026", total: "2.020,00 lei", livrare: false },
  { cc: 6, codC: "c001", dataC: "11.02.2026", total: "300,00 lei", livrare: false },
  { cc: 7, codC: "c003", dataC: "19.02.2026", total: "670,00 lei", livrare: true },
];

export function AccessTables2() {
  return (
    <div className="space-y-6 w-full max-w-full overflow-hidden">
      {/* Client Table */}
      <div className="bg-white dark:bg-[#1e1e1e] rounded-lg border border-gray-300 dark:border-gray-600 shadow-md overflow-hidden text-[13px] font-sans" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
        {/* Tab Bar */}
        <div className="flex bg-[#e3e3e3] dark:bg-[#2d2d30] border-b border-gray-300 dark:border-gray-600">
           <div className="bg-white dark:bg-[#1e1e1e] flex items-center gap-2 px-3 py-1 border-r border-[#c1c1c1] dark:border-gray-600 shadow-[0_-2px_0_#0078d7_inset] relative -mb-px z-10">
             <span className="material-icons-round text-blue-600 text-[14px]">table_chart</span>
             <span className="font-semibold text-gray-800 dark:text-gray-200">Client</span>
             <span className="material-icons-round text-gray-400 text-[14px] ml-1 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">close</span>
           </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse whitespace-nowrap">
            <thead className="bg-[#f0f0f0] dark:bg-[#2d2d30] text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-600">
               <tr>
                 <th className="w-6 border-r border-gray-300 dark:border-gray-600 bg-[#f0f0f0] dark:bg-[#2d2d30]"></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">CodC <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">NumeP <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">Telefon <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">Locatia <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">CodQr <span className="text-[10px] text-gray-400">▼</span></th>
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-[#1e1e1e]">
              {clientData.map((row, i) => (
                <tr key={row.codC} className={i % 2 === 0 ? "bg-white dark:bg-[#1e1e1e]" : "bg-[#f9f9f9] dark:bg-[#252526]"}>
                  <td className="border-r border-gray-300 dark:border-gray-700 text-center text-[10px] text-gray-500 bg-[#f0f0f0] dark:bg-[#2d2d30] cursor-pointer">
                    +
                  </td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">{row.codC}</td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">{row.numeP}</td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">{row.telefon}</td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 cursor-pointer truncate max-w-[150px] overflow-hidden">{row.locatia}</td>
                  <td className="px-2 py-0.5 text-gray-800 dark:text-gray-200">{row.codQr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Comanda Table */}
      <div className="bg-white dark:bg-[#1e1e1e] rounded-lg border border-gray-300 dark:border-gray-600 shadow-md overflow-hidden text-[13px] font-sans" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
        {/* Tab Bar */}
        <div className="flex bg-[#e3e3e3] dark:bg-[#2d2d30] border-b border-gray-300 dark:border-gray-600">
           <div className="bg-white dark:bg-[#1e1e1e] flex items-center gap-2 px-3 py-1 border-r border-[#c1c1c1] dark:border-gray-600 shadow-[0_-2px_0_#0078d7_inset] relative -mb-px z-10">
             <span className="material-icons-round text-green-600 text-[14px]">table_chart</span>
             <span className="font-semibold text-gray-800 dark:text-gray-200">Comanda</span>
             <span className="material-icons-round text-gray-400 text-[14px] ml-1 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">close</span>
           </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse whitespace-nowrap">
            <thead className="bg-[#f0f0f0] dark:bg-[#2d2d30] text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-600">
               <tr>
                 <th className="w-6 border-r border-gray-300 dark:border-gray-600 bg-[#f0f0f0] dark:bg-[#2d2d30]"></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">CC <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">CodC <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">DataC <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 border-r border-gray-300 dark:border-gray-600 text-left font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">Total <span className="text-[10px] text-gray-400">▼</span></th>
                 <th className="px-2 py-0.5 text-center font-normal select-none cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#3e3e42]">Livrare <span className="text-[10px] text-gray-400">▼</span></th>
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-[#1e1e1e]">
              {comandaData.map((row, i) => (
                <tr key={row.cc} className={i % 2 === 0 ? "bg-white dark:bg-[#1e1e1e]" : "bg-[#f9f9f9] dark:bg-[#252526]"}>
                  <td className="border-r border-gray-300 dark:border-gray-700 text-center text-[10px] text-gray-500 bg-[#f0f0f0] dark:bg-[#2d2d30] cursor-pointer">
                    
                  </td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-right text-gray-800 dark:text-gray-200">{row.cc}</td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">{row.codC}</td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">{row.dataC}</td>
                  <td className="px-2 py-0.5 border-r border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">{row.total}</td>
                  <td className="px-2 py-0.5 flex justify-center items-center h-full">
                    <span className="material-icons-outlined text-[16px] text-gray-600 dark:text-gray-400">
                      {row.livrare ? 'check_box' : 'check_box_outline_blank'}
                    </span>
                  </td>
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
