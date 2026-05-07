import { Button } from "@/components/ui/button";

export function LessonForContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">loop</span>
            </span>
            Instrucțiunea repetitivă FOR
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Instrucțiunea <strong>for</strong> este o structură repetitivă (o buclă) folosită atunci când cunoaștem de la bun început de câte ori trebuie să se repete un anumit bloc de cod. Este cea mai des utilizată buclă pentru parcurgerea șirurilor, a vectorilor sau pentru generarea de secvențe matematice.
          </p>
        </div>
      </section>

      {/* Sintaxa */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">code</span>
            </span>
            1. Sintaxa de bază
          </h2>
          
          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200 mb-6">
            <code>
              <span className="text-indigo-600 dark:text-indigo-400">for</span> (inițializare; condiție; pas) {"{"}<br />
              &nbsp;&nbsp;<span className="text-gray-500">{"// instrucțiuni care se repetă"}</span><br />
              {"}"}
            </code>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Structura are trei componente principale în interiorul parantezelor rotunde, separate prin punct și virgulă (<code>;</code>):
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-primary mb-6">
            <li><strong>inițializare</strong>: se execută o singură dată, la început. Aici se declară sau se asignează valoarea inițială a contorului.</li>
            <li><strong>condiție</strong>: este evaluată la începutul fiecărui pas. Dacă este <code>adevărată</code>, bucla se execută. Dacă este <code>falsă</code>, bucla se oprește.</li>
            <li><strong>pas</strong>: se execută la finalul fiecărei iterații (repetări). Aici de obicei creștem sau scădem contorul (ex: <code>i++</code>, <code>i--</code>).</li>
          </ul>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
            <span className="text-gray-500 block mb-2">{"// Exemplu: Afișarea numerelor de la 1 la 5"}</span>
            <code>
              <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 1; i &lt;= 5; i++) {"{"}<br />
              &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-green-600">" "</span>;<br />
              {"}"}
            </code>
          </div>
          <p className="text-sm text-gray-500 mt-2 italic">Afișează: 1 2 3 4 5</p>
        </div>
      </section>

      {/* Exemple de parcurgere */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">swap_calls</span>
            </span>
            2. Variații ale instrucțiunii FOR
          </h2>
          
          <div className="space-y-6">
            {/* Parcurgere descrescătoare */}
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Parcurgerea descrescătoare</h3>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 10; i &gt;= 1; i--) {"{"}<br />
                &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-green-600">" "</span>;<br />
                {"}"}
              </code>
            </div>

            {/* Pas diferit de 1 */}
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Pas din 2 în 2 (Numere pare)</h3>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 0; i &lt;= 10; i += 2) {"{"}<br />
                &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-green-600">" "</span>;<br />
                {"}"}
              </code>
            </div>

            {/* Omiterea elementelor */}
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Omisiuni în antet (toate cele 3 părți sunt opționale)</h3>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">int</span> i = 1;<br />
                <span className="text-indigo-600 dark:text-indigo-400">for</span> (; i &lt;= 5;) {"{"}<br />
                &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-green-600">" "</span>;<br />
                &nbsp;&nbsp;i++; <span className="text-gray-500">{"// Pasul l-am mutat în corpul buclei"}</span><br />
                {"}"}
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
            Capcane frecvente la Bacalaureat
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li>
              <strong>Punct și virgulă după FOR:</strong> Dacă pui <code>;</code> imediat după paranteza de la for, instrucțiunile din acolade se vor executa doar o singură dată (la final), fiindcă bucla rulează de fapt o "instrucțiune vidă" la fiecare pas.
              <br /><code>for(int i=1; i&lt;=5; i++); {"{"} cout &lt;&lt; i; {"}"} // Afișează doar "6"</code>
            </li>
            <li>
              <strong>Vizibilitatea variabilei (Scope):</strong> Dacă declari contorul în interiorul for-ului (ex: <code>for(int i=0...)</code>), variabila <code>i</code> va înceta să existe ("moare") după ce se termină bucla! Dacă ai nevoie de valoarea ei mai târziu, declar-o deasupra buclei.
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
