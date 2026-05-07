import { Button } from "@/components/ui/button";

export function LessonLoopsComparisonContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">compare</span>
            </span>
            Structuri Repetitive: Pre-condiție vs Post-condiție
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            În limbajul C++ există trei tipuri principale de instrucțiuni repetitive: <code>for</code>, <code>while</code> și <code>do-while</code>. Deși toate servesc aceluiași scop general — repetarea unui bloc de cod —, modul în care evaluează condiția de oprire le împarte în două categorii fundamentale: structuri cu <strong>pre-condiție</strong> (test inițial) și structuri cu <strong>post-condiție</strong> (test final).
          </p>
        </div>
      </section>

      {/* Pre-conditie vs Post-conditie */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">rule</span>
            </span>
            1. Pre-condiție vs Post-condiție
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pre-condiție */}
            <div className="border border-indigo-200 dark:border-indigo-800/50 p-6 rounded-xl bg-indigo-50/50 dark:bg-indigo-900/10">
              <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-400 mb-3 flex items-center gap-2">
                <span className="material-icons-outlined">first_page</span>
                Test Inițial (Pre-condiție)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Condiția este verificată <strong>înainte</strong> de a se executa corpul buclei. Dacă condiția este falsă de la bun început, instrucțiunile <strong>nu se vor executa niciodată</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300 marker:text-indigo-500 font-bold">
                <li>Instrucțiunea FOR</li>
                <li>Instrucțiunea WHILE</li>
              </ul>
            </div>

            {/* Post-condiție */}
            <div className="border border-green-200 dark:border-green-800/50 p-6 rounded-xl bg-green-50/50 dark:bg-green-900/10">
              <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                <span className="material-icons-outlined">last_page</span>
                Test Final (Post-condiție)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Condiția este verificată <strong>după</strong> ce corpul buclei s-a executat. Acest lucru garantează că instrucțiunile se vor executa <strong>cel puțin o dată</strong>, indiferent de condiție.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300 marker:text-green-500 font-bold">
                <li>Instrucțiunea DO-WHILE</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tabel de comparatie */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">table_chart</span>
            </span>
            2. Comparație și Situații de Utilizare
          </h2>
          
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 mb-6">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 text-sm text-left">
              <thead className="bg-gray-50 dark:bg-navy-deep">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Instrucțiune</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Tip Test</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Număr Repetări</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Când o folosim?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr className="bg-white dark:bg-navy-surface">
                  <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400 font-bold">for</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Inițial</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">0, 1 sau de mai multe ori</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Când cunoaștem de la început <strong>numărul exact de pași</strong> (ex: parcurgerea unui vector).</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-navy-deep">
                  <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400 font-bold">while</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Inițial</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">0, 1 sau de mai multe ori</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Când numărul de pași este <strong>necunoscut</strong>, dar știm condiția de oprire (ex: prelucrarea cifrelor unui număr).</td>
                </tr>
                <tr className="bg-white dark:bg-navy-surface">
                  <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400 font-bold">do-while</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Final</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400"><strong>1</strong> sau de mai multe ori</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Când vrem să ne asigurăm că blocul se execută <strong>cel puțin o dată</strong>, indiferent de condiție (ex: validarea datelor citite).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Break și Continue */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">stop_circle</span>
            </span>
            3. Controlul suplimentar: break și continue
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Uneori, avem nevoie să modificăm comportamentul normal al unei bucle (fie să o oprim complet, fie să sărim peste un pas). Pentru aceasta, folosim instrucțiunile de control al fluxului <code>break</code> și <code>continue</code>. Ele pot fi folosite în oricare dintre structurile repetitive (<code>for</code>, <code>while</code>, <code>do-while</code>).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* break */}
            <div className="border border-red-200 dark:border-red-800/50 p-4 rounded-lg bg-red-50/30 dark:bg-red-900/10">
              <h3 className="text-red-600 dark:text-red-400 font-bold mb-2 flex items-center gap-2">
                <span className="material-icons-outlined text-base">close</span>
                Instrucțiunea BREAK
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Oprește <strong>definitiv și imediat</strong> execuția buclei în care se află. Programul continuă cu prima instrucțiune aflată după acolada de închidere a buclei.
              </p>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 1; i &lt;= 5; i++) {"{"}<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">if</span> (i == 3) {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400 font-bold">break;</span><br />
                &nbsp;&nbsp;{"}"}<br />
                &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-green-600">" "</span>;<br />
                {"}"}<br />
                <span className="text-gray-500">{"// Va afișa: 1 2"}</span><br />
                <span className="text-gray-500">{"// Când i devine 3, bucla se termină brusc."}</span>
              </code>
            </div>

            {/* continue */}
            <div className="border border-orange-200 dark:border-orange-800/50 p-4 rounded-lg bg-orange-50/30 dark:bg-orange-900/10">
              <h3 className="text-orange-600 dark:text-orange-400 font-bold mb-2 flex items-center gap-2">
                <span className="material-icons-outlined text-base">skip_next</span>
                Instrucțiunea CONTINUE
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Oprește doar <strong>pasul curent</strong> al buclei. Ignoră restul codului din bloc și trece imediat la următoarea iterație (următoarea evaluare a condiției).
              </p>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 1; i &lt;= 5; i++) {"{"}<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">if</span> (i == 3) {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400 font-bold">continue;</span><br />
                &nbsp;&nbsp;{"}"}<br />
                &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-green-600">" "</span>;<br />
                {"}"}<br />
                <span className="text-gray-500">{"// Va afișa: 1 2 4 5"}</span><br />
                <span className="text-gray-500">{"// A sărit doar peste afișarea lui 3."}</span>
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Observation / Warning */}
      <section>
        <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-500 p-6 rounded-r-lg shadow-sm">
          <h3 className="text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wide mb-2 flex items-center gap-2">
            <span className="material-icons-outlined">warning</span>
            Echivalența structurilor la Bacalaureat
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
            Un tip foarte frecvent de exercițiu la Bacalaureat îți cere să transformi un algoritm care folosește <code>for</code> într-unul echivalent care folosește <code>while</code>, sau din <code>while</code> în <code>do-while</code>.
          </p>
          <div className="bg-white/50 dark:bg-black/20 p-4 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
            <span className="text-gray-500 block mb-2">{"// Trecerea de la FOR la WHILE:"}</span>
            <code>
              <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 1; i &lt;= n; i++) {"{"}<br />
              &nbsp;&nbsp;<span className="text-gray-500">{"// instrucțiuni"}</span><br />
              {"}"}<br /><br />
              <span className="text-gray-500">{"// Este ECHIVALENT cu:"}</span><br />
              <span className="text-indigo-600 dark:text-indigo-400">int</span> i = 1; <span className="text-gray-500">{"// Inițializarea înainte de buclă"}</span><br />
              <span className="text-indigo-600 dark:text-indigo-400">while</span> (i &lt;= n) {"{"}<br />
              &nbsp;&nbsp;<span className="text-gray-500">{"// instrucțiuni"}</span><br />
              &nbsp;&nbsp;i++; <span className="text-gray-500">{"// Pasul la finalul blocului!"}</span><br />
              {"}"}
            </code>
          </div>
        </div>
      </section>

    </div>
  );
}
