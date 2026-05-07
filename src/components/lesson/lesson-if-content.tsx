import { Button } from "@/components/ui/button";

export function LessonIfContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">call_split</span>
            </span>
            Instrucțiunea decizională IF
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            În limbajul C++, instrucțiunea <strong>if</strong> este folosită pentru a testa o condiție (o expresie logică). Dacă acea condiție este adevărată (diferită de zero), se va executa un bloc de cod, altfel se poate executa un alt bloc de cod prin intermediul clauzei <strong>else</strong>.
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
              <span className="text-indigo-600 dark:text-indigo-400">if</span> (condiție) {"{"}<br />
              &nbsp;&nbsp;<span className="text-gray-500">{"// instrucțiuni care se execută dacă condiția este ADEVĂRATĂ"}</span><br />
              {"}"} <span className="text-indigo-600 dark:text-indigo-400">else</span> {"{"}<br />
              &nbsp;&nbsp;<span className="text-gray-500">{"// instrucțiuni care se execută dacă condiția este FALSĂ"}</span><br />
              {"}"}
            </code>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Ramura <code>else</code> este opțională. Dacă nu avem nevoie de ea, putem scrie simplu doar <code>if (conditie) {"{ ... }"}</code>. De asemenea, dacă avem o singură instrucțiune în corpul lui if sau else, acoladele <code>{"{}"}</code> pot lipsi, deși este o bună practică să le includem mereu.
          </p>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200 mb-6">
            <code>
              int nota = 8;<br />
              <span className="text-indigo-600 dark:text-indigo-400">if</span> (nota &gt;= 5) {"{"}<br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-green-600">"Promovat"</span>;<br />
              {"}"} <span className="text-indigo-600 dark:text-indigo-400">else</span> {"{"}<br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-green-600">"Nepromovat"</span>;<br />
              {"}"}
            </code>
          </div>
        </div>
      </section>

      {/* Condiții multiple */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">account_tree</span>
            </span>
            2. Structuri decizionale înlănțuite (if-else if)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Când avem mai multe posibilități distincte, putem folosi structura <code>else if</code>. Se va executa primul bloc a cărui condiție este adevărată, iar restul vor fi ignorate.
          </p>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
            <code>
              int numar = 0;<br />
              <span className="text-indigo-600 dark:text-indigo-400">if</span> (numar &gt; 0) {"{"}<br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-green-600">"Pozitiv"</span>;<br />
              {"}"} <span className="text-indigo-600 dark:text-indigo-400">else if</span> (numar &lt; 0) {"{"}<br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-green-600">"Negativ"</span>;<br />
              {"}"} <span className="text-indigo-600 dark:text-indigo-400">else</span> {"{"}<br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-green-600">"Zero"</span>;<br />
              {"}"}
            </code>
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
            Cea mai comună greșeală în scrierea condițiilor este confundarea operatorului de egalitate <code>==</code> cu operatorul de atribuire <code>=</code>. Această greșeală este adesea testată în grile!
          </p>
          <div className="bg-white/50 dark:bg-black/20 p-4 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
            <code>
              int x = 5;<br />
              <span className="text-gray-500">{"// GREȘIT: aicea îi atribuim lui x valoarea 0, iar expresia evaluează la 0 (fals)."}</span><br />
              <span className="text-indigo-600 dark:text-indigo-400">if</span> (x = 0) {"{ ... }"}<br /><br />
              <span className="text-gray-500">{"// CORECT: verificăm dacă x este egal cu 0."}</span><br />
              <span className="text-indigo-600 dark:text-indigo-400">if</span> (x == 0) {"{ ... }"}
            </code>
          </div>
        </div>
      </section>

    </div>
  );
}
