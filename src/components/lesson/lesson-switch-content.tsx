import { Button } from "@/components/ui/button";

export function LessonSwitchContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">alt_route</span>
            </span>
            Instrucțiunea decizională SWITCH
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Instrucțiunea <strong>switch</strong> este o structură decizională multiplă, foarte utilă atunci când trebuie să alegem o opțiune dintr-un set de valori posibile (de exemplu, un meniu, zilele săptămânii, note). Poate înlocui un șir lung și greu de citit de instrucțiuni <code>if - else if - else</code>.
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
              <span className="text-indigo-600 dark:text-indigo-400">switch</span> (expresie) {"{"}<br />
              &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">case</span> valoare1:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"// instrucțiuni pentru valoare1"}</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500 font-bold">break</span>;<br />
              &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">case</span> valoare2:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"// instrucțiuni pentru valoare2"}</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500 font-bold">break</span>;<br />
              &nbsp;&nbsp;<span className="text-gray-500">{"// pot exista oricâte case-uri"}</span><br />
              &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">default</span>:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"// instrucțiuni executate dacă nicio altă valoare nu s-a potrivit"}</span><br />
              {"}"}
            </code>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-primary mb-6">
            <li><strong>expresie</strong>: trebuie să producă un rezultat de tip întreg sau caracter (<code>int</code> sau <code>char</code>). Nu se pot folosi tipuri reale (<code>float</code>, <code>double</code>) sau șiruri de caractere (<code>string</code>).</li>
            <li><strong>case valoare</strong>: valorile trebuie să fie expresii constante. Când <code>expresie == valoare</code>, execuția sare la acea etichetă.</li>
            <li><strong>break</strong>: oprește execuția blocului switch și iese afară. Dacă este omis, se vor executa TOATE instrucțiunile următoare (efectul de <em>fall-through</em>).</li>
            <li><strong>default</strong>: este opțional, similar cu ultimul <code>else</code>. Se execută doar dacă niciun case nu s-a potrivit.</li>
          </ul>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
            <code>
              int ziua = 3;<br />
              <span className="text-indigo-600 dark:text-indigo-400">switch</span> (ziua) {"{"}<br />
              &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">case</span> 1: cout &lt;&lt; <span className="text-green-600">"Luni"</span>; <span className="text-red-500">break</span>;<br />
              &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">case</span> 2: cout &lt;&lt; <span className="text-green-600">"Marți"</span>; <span className="text-red-500">break</span>;<br />
              &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">case</span> 3: cout &lt;&lt; <span className="text-green-600">"Miercuri"</span>; <span className="text-red-500">break</span>;<br />
              &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">default</span>: cout &lt;&lt; <span className="text-green-600">"Eroare: nu există această zi"</span>;<br />
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
            În exercițiile grilă se oferă adesea un cod cu <code>switch</code> din care a fost omis intenționat cuvântul cheie <code>break</code>. Amintiți-vă că, fără <code>break</code>, programul va executa <strong>toate</strong> instrucțiunile de sub cazul găsit adevărat, indiferent de condițiile de la următoarele case-uri!
          </p>
          <div className="bg-white/50 dark:bg-black/20 p-4 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
            <code>
              int x = 1;<br />
              <span className="text-indigo-600 dark:text-indigo-400">switch</span> (x) {"{"}<br />
              &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">case</span> 1: cout &lt;&lt; <span className="text-green-600">"A"</span>; <span className="text-gray-500">{"// Se afișează A"}</span><br />
              &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">case</span> 2: cout &lt;&lt; <span className="text-green-600">"B"</span>; <span className="text-gray-500">{"// Se afișează B pentru că lipsește break!"}</span><br />
              &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">default</span>: cout &lt;&lt; <span className="text-green-600">"C"</span>; <span className="text-gray-500">{"// Se afișează C pentru că lipsește break!"}</span><br />
              {"}"} <span className="text-gray-500">{"// Rezultat afișat: ABC"}</span>
            </code>
          </div>
        </div>
      </section>

    </div>
  );
}
