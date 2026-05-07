import { Button } from "@/components/ui/button";

export function LessonDoWhileContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">update</span>
            </span>
            Instrucțiunea repetitivă DO WHILE
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Instrucțiunea <strong>do-while</strong> este o structură repetitivă cu <strong>test final</strong>. Spre deosebire de <code>while</code> sau <code>for</code> (care verifică condiția înainte de a executa ceva), instrucțiunea <code>do-while</code> garantează că blocul de cod se va executa <strong>cel puțin o dată</strong>, deoarece condiția este evaluată la finalul repetiției.
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
              <span className="text-indigo-600 dark:text-indigo-400">do</span> {"{"}<br />
              &nbsp;&nbsp;<span className="text-gray-500">{"// instrucțiuni care se execută cel puțin o dată"}</span><br />
              {"}"} <span className="text-indigo-600 dark:text-indigo-400">while</span> (condiție)<span className="text-red-500 font-bold">;</span> <span className="text-gray-500">{"// Nu uitați punctul și virgula la final!"}</span>
            </code>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Cea mai comună utilizare a acestei structuri este citirea cu validare. De exemplu, când vrei să ceri utilizatorului să introducă un număr pozitiv și repeți întrebarea până când dă o valoare corectă.
          </p>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
            <span className="text-gray-500 block mb-2">{"// Exemplu: Citirea cu validare a unui număr natural STRICT pozitiv"}</span>
            <code>
              <span className="text-indigo-600 dark:text-indigo-400">int</span> n;<br />
              <span className="text-indigo-600 dark:text-indigo-400">do</span> {"{"}<br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-green-600">"Introduceți un număr pozitiv: "</span>;<br />
              &nbsp;&nbsp;cin &gt;&gt; n;<br />
              {"}"} <span className="text-indigo-600 dark:text-indigo-400">while</span> (n &lt;= 0); <span className="text-gray-500">{"// Repetăm CÂT TIMP numărul este greșit (<= 0)"}</span><br /><br />
              cout &lt;&lt; <span className="text-green-600">"Ați introdus numărul corect: "</span> &lt;&lt; n;
            </code>
          </div>
        </div>
      </section>

      {/* Diferența dintre WHILE și DO-WHILE */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">compare_arrows</span>
            </span>
            2. Comparație: WHILE vs DO-WHILE
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Diferența majoră se observă atunci când condiția este falsă chiar de la început.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WHILE */}
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Cu WHILE</h3>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">int</span> x = 10;<br />
                <span className="text-indigo-600 dark:text-indigo-400">while</span> (x &lt; 5) {"{"}<br />
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-green-600">"Hello!"</span>;<br />
                {"}"}
              </code>
              <p className="text-sm text-gray-500 mt-2"><strong>Rezultat:</strong> Nu afișează absolut nimic, pentru că 10 nu este mai mic decât 5.</p>
            </div>

            {/* DO-WHILE */}
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Cu DO-WHILE</h3>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">int</span> x = 10;<br />
                <span className="text-indigo-600 dark:text-indigo-400">do</span> {"{"}<br />
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-green-600">"Hello!"</span>;<br />
                {"}"} <span className="text-indigo-600 dark:text-indigo-400">while</span> (x &lt; 5);
              </code>
              <p className="text-sm text-gray-500 mt-2"><strong>Rezultat:</strong> Afișează "Hello!" <strong>o singură dată</strong>, după care verifică condiția (10 &lt; 5 este Fals) și se oprește.</p>
            </div>
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
          <ul className="list-disc pl-5 space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li>
              <strong>Punct și virgulă obligatoriu:</strong> Mulți elevi uită să pună <code>;</code> după <code>while(condiție)</code> în structura <code>do-while</code>. Este o eroare de sintaxă (compilatorul va da eroare).
            </li>
            <li>
              <strong>Cazul lui zero:</strong> În lecția precedentă am văzut că algoritmul de numărare a cifrelor cu <code>while(n &gt; 0)</code> dă greș dacă numărul e chiar 0 (va zice că are 0 cifre, ceea ce e fals, 0 are o cifră). Acesta este cazul ideal în care rescriem cu <code>do-while</code>, astfel încât să extragă și să numere cifra "0" cel puțin o dată, abia apoi să verifice dacă mai sunt cifre.
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
