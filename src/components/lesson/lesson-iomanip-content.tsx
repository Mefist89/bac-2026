import { Button } from "@/components/ui/button";

export function LessonIomanipContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">tune</span>
            </span>
            Afișarea informației alfanumerice (iomanip)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            În C++, fluxul de ieșire <code>cout</code> poate fi controlat și formatat pentru a afișa datele într-un mod specific (număr fix de zecimale, aliniere la dreapta, notație științifică etc.). Pentru a realiza acest lucru, folosim manipulatori de flux disponibili în biblioteca <code>&lt;iomanip&gt;</code>.
          </p>
          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200 mb-2">
            <code>#include &lt;iomanip&gt;</code>
          </div>
        </div>
      </section>

      {/* Manipulatorii */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">build</span>
            </span>
            1. Principalii Manipulatori
          </h2>
          
          <div className="space-y-8">
            {/* setw */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="font-mono text-indigo-600 dark:text-indigo-400">setw(n)</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Setează lățimea câmpului de afișare pentru <strong>următoarea valoare</strong> (și doar pentru ea) la <code>n</code> caractere. Valoarea este aliniată implicit la dreapta.
              </p>
              <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
                <code>
                  int x = 42;<br />
                  cout &lt;&lt; <span className="text-indigo-600 dark:text-indigo-400">setw</span>(5) &lt;&lt; x &lt;&lt; <span className="text-green-600">"|"</span>;<br />
                  <span className="text-gray-500">{"// Afișează:   42| (3 spații goale urmate de 42)"}</span>
                </code>
              </div>
            </div>

            {/* setprecision */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="font-mono text-indigo-600 dark:text-indigo-400">setprecision(n)</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Setează numărul de cifre semnificative (sau zecimale, când e folosit cu <code>fixed</code>) ce vor fi afișate pentru numerele reale. Spre deosebire de <code>setw</code>, setarea rămâne valabilă pentru toate afișările viitoare.
              </p>
              <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
                <code>
                  float pi = 3.14159;<br />
                  cout &lt;&lt; <span className="text-indigo-600 dark:text-indigo-400">setprecision</span>(3) &lt;&lt; pi;<br />
                  <span className="text-gray-500">{"// Afișează 3.14 (3 cifre în total)"}</span>
                </code>
              </div>
            </div>

            {/* fixed */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="font-mono text-indigo-600 dark:text-indigo-400">fixed</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Schimbă comportamentul lui <code>setprecision</code> astfel încât să se refere la numărul exact de zecimale de <strong>după virgulă</strong>, forțând totodată afișarea lor (inclusiv a zerourilor).
              </p>
              <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
                <code>
                  float f = 2.5;<br />
                  cout &lt;&lt; <span className="text-indigo-600 dark:text-indigo-400">fixed</span> &lt;&lt; <span className="text-indigo-600 dark:text-indigo-400">setprecision</span>(2) &lt;&lt; f;<br />
                  <span className="text-gray-500">{"// Afișează: 2.50"}</span>
                </code>
              </div>
            </div>

            {/* scientific */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="font-mono text-indigo-600 dark:text-indigo-400">scientific</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Afișează numerele reale în notație științifică (ex: <code>1.23e+02</code> care înseamnă 1.23 × 10²).
              </p>
              <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
                <code>
                  double x = 1234.56;<br />
                  cout &lt;&lt; <span className="text-indigo-600 dark:text-indigo-400">scientific</span> &lt;&lt; x;<br />
                  <span className="text-gray-500">{"// Afișează: 1.234560e+03"}</span>
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemple */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">play_circle</span>
            </span>
            2. Exemplu Complet
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Afișarea unui tabel aliniat este cel mai bun exemplu pentru utilizarea lor împreună.
          </p>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
            <code>
              <span className="text-gray-500">{"#include <iostream>"}</span><br />
              <span className="text-gray-500">{"#include <iomanip>"}</span><br />
              <span className="text-indigo-600 dark:text-indigo-400">using namespace</span> std;<br /><br />

              <span className="text-indigo-600 dark:text-indigo-400">int</span> main() {"{"}<br />
              &nbsp;&nbsp;<span className="text-gray-500">{"// Setăm formatul fix cu 2 zecimale pentru toate numerele viitoare"}</span><br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-indigo-600 dark:text-indigo-400">fixed</span> &lt;&lt; <span className="text-indigo-600 dark:text-indigo-400">setprecision</span>(2);<br /><br />
              
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-indigo-600 dark:text-indigo-400">setw</span>(10) &lt;&lt; <span className="text-green-600">"Produs"</span> &lt;&lt; <span className="text-indigo-600 dark:text-indigo-400">setw</span>(10) &lt;&lt; <span className="text-green-600">"Pret"</span> &lt;&lt; endl;<br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-indigo-600 dark:text-indigo-400">setw</span>(10) &lt;&lt; <span className="text-green-600">"Mar"</span> &lt;&lt; <span className="text-indigo-600 dark:text-indigo-400">setw</span>(10) &lt;&lt; 2.5 &lt;&lt; endl;<br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-indigo-600 dark:text-indigo-400">setw</span>(10) &lt;&lt; <span className="text-green-600">"Paine"</span> &lt;&lt; <span className="text-indigo-600 dark:text-indigo-400">setw</span>(10) &lt;&lt; 10.0 &lt;&lt; endl;<br /><br />

              &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">return</span> 0;<br />
              {"}"}
            </code>
          </div>
          <div className="mt-4 p-4 bg-black/5 dark:bg-white/5 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-200 whitespace-pre">
            <span className="text-gray-500 font-bold block mb-2">/* Output: */</span>
            {"    Produs      Pret\n       Mar      2.50\n     Paine     10.00"}
          </div>
        </div>
      </section>

      {/* Observation / Warning */}
      <section>
        <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-500 p-6 rounded-r-lg shadow-sm">
          <h3 className="text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wide mb-2 flex items-center gap-2">
            <span className="material-icons-outlined">warning</span>
            Capcană la Bacalaureat
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
            Țineți minte că <code className="font-bold">setw(n)</code> își pierde efectul imediat după prima variabilă afișată, așadar trebuie rescris înaintea fiecărui element pe care dorim să-l lățim. În schimb, <code className="font-bold">setprecision(n)</code> și <code className="font-bold">fixed</code> rămân active pentru tot restul programului odată aplicate!
          </p>
        </div>
      </section>

    </div>
  );
}
