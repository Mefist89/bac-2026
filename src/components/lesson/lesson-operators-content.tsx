import { Button } from "@/components/ui/button";

export function LessonOperatorsContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">functions</span>
            </span>
            Operatori și Priorități în C++
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            În C++, un operator este un simbol care indică compilatorului să efectueze anumite manipulări matematice sau logice. Limbajul dispune de o gamă largă de operatori pe care trebuie să îi cunoști foarte bine, mai ales prioritățile (ordinea în care se evaluează) și asociativitatea lor.
          </p>
        </div>
      </section>

      {/* Categorii de Operatori */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">category</span>
            </span>
            1. Categorii Principale
          </h2>
          
          <div className="space-y-6">
            {/* Aditivi */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Operatori Aditivi</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Efectuează operații matematice de adunare și scădere.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300 marker:text-indigo-500">
                <li><code>+</code> (Adunare): Se aplică pe numere întregi și reale.</li>
                <li><code>-</code> (Scădere): Se aplică pe numere întregi și reale.</li>
              </ul>
            </div>

            {/* Multiplicativi */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Operatori Multiplicativi</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Efectuează operații matematice de înmulțire și împărțire.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300 marker:text-indigo-500">
                <li><code>*</code> (Înmulțire): Calculează produsul a două numere.</li>
                <li><code>/</code> (Împărțire): Pentru numere întregi returnează <strong>câtul împărțirii întregi</strong> (ex: 5/2 dă 2). Pentru numere reale returnează rezultatul exact (ex: 5.0/2.0 dă 2.5).</li>
                <li><code>%</code> (Modulo): Returnează <strong>restul împărțirii</strong> a două numere <strong>întregi</strong> (ex: 5%2 dă 1). Nu se poate aplica pe numere cu zecimale!</li>
              </ul>
            </div>

            {/* Relaționali */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Operatori Relaționali și de Egalitate</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Compară două valori și returnează un rezultat boolean (adevărat=1, fals=0).</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300 marker:text-indigo-500">
                <li><code>&lt;</code> (Mai mic), <code>&gt;</code> (Mai mare)</li>
                <li><code>&lt;=</code> (Mai mic sau egal), <code>&gt;=</code> (Mai mare sau egal)</li>
                <li><code>==</code> (Egalitate): Verifică dacă două valori sunt egale. A nu se confunda cu <code>=</code> (atribuire)!</li>
                <li><code>!=</code> (Diferit): Verifică dacă două valori sunt inegale.</li>
              </ul>
            </div>

            {/* Logici */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Operatori Logici</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Folosiți pentru combinarea mai multor condiții relaționale.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300 marker:text-indigo-500">
                <li><code>&&</code> (ȘI Logic): Adevărat doar dacă AMBELE condiții sunt adevărate.</li>
                <li><code>||</code> (SAU Logic): Adevărat dacă CEL PUȚIN O condiție este adevărată.</li>
                <li><code>!</code> (NEGAȚIE Logică): Schimbă valoarea de adevăr (adevărat devine fals, fals devine adevărat).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Priorități */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">format_list_numbered</span>
            </span>
            2. Prioritățile Operatorilor
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Prioritatea (precedența) determină ordinea în care operatorii sunt evaluați într-o expresie fără paranteze. Operatorii cu prioritate mai mare sunt evaluați primii.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 mb-6">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 text-sm text-left">
              <thead className="bg-gray-50 dark:bg-navy-deep">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Nivel Prioritate</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Operatori</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Asociativitate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr className="bg-white dark:bg-navy-surface">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">1 (cea mai mare)</td>
                  <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400">() [] .</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Stânga-Dreapta</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-navy-deep">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">2</td>
                  <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400">! ++ -- (tip)</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Dreapta-Stânga</td>
                </tr>
                <tr className="bg-white dark:bg-navy-surface">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">3</td>
                  <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400">* / %</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Stânga-Dreapta</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-navy-deep">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">4</td>
                  <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400">+ -</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Stânga-Dreapta</td>
                </tr>
                <tr className="bg-white dark:bg-navy-surface">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">5</td>
                  <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400">&lt; &lt;= &gt; &gt;=</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Stânga-Dreapta</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-navy-deep">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">6</td>
                  <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400">== !=</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Stânga-Dreapta</td>
                </tr>
                <tr className="bg-white dark:bg-navy-surface">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">7</td>
                  <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400">&&</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Stânga-Dreapta</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-navy-deep">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">8</td>
                  <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400">||</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Stânga-Dreapta</td>
                </tr>
                <tr className="bg-white dark:bg-navy-surface">
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">9</td>
                  <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400">= += -= *= /=</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Dreapta-Stânga</td>
                </tr>
              </tbody>
            </table>
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
            Atenție la combinarea operatorilor logici cu cei relaționali și aritmetici, dar și la operatorul MODULO (<code>%</code>).
          </p>
          <div className="bg-white/50 dark:bg-black/20 p-4 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
            <code>
              <span className="text-gray-500">{"// 1. Modulo NU se poate aplica pe float/double!"}</span><br />
              <span className="text-red-500">float</span> x = 5.5 % 2; <span className="text-gray-500">{"// Eroare de compilare!"}</span><br /><br />
              <span className="text-gray-500">{"// 2. Evaluarea scurtcircuitată a expresiilor logice"}</span><br />
              int a = 0, b = 5;<br />
              <span className="text-indigo-600 dark:text-indigo-400">if</span> (a != 0 && b/a &gt; 1) <span className="text-gray-500">{"// NU dă eroare!"}</span><br />
              <span className="text-gray-500">{"/* Dacă 'a != 0' este FALS, partea a doua (b/a) NU se mai evaluează, prevenind eroarea de împărțire la zero (Short-circuit evaluation). */"}</span>
            </code>
          </div>
        </div>
      </section>

    </div>
  );
}
