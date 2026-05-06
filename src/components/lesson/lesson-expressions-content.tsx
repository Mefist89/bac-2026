import { Button } from "@/components/ui/button";

export function LessonExpressionsContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">calculate</span>
            </span>
            Tipul Expresiilor
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            În limbajul C++, o expresie este formată din operanzi (variabile, constante) și operatori. Fiecare expresie, după ce este evaluată, are un <strong>rezultat</strong> care are o anumită valoare și un anumit <strong>tip de dată</strong>.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Regula generală este că tipul unei expresii este dat de cel mai "încăpător" (sau cel mai precis) tip de dată dintre operanzii care participă la acea expresie.
          </p>
        </div>
      </section>

      {/* Implicit Conversions */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">transform</span>
            </span>
            1. Conversia Implicită
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Conversia implicită este realizată automat de către compilator atunci când evaluăm o expresie cu operanzi de tipuri diferite.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-indigo-500 pl-4 py-1">
              <h4 className="font-bold text-gray-900 dark:text-white">Ierarhia de conversie (de la cel mai mic la cel mai mare):</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                <code>bool</code> &rarr; <code>char</code> &rarr; <code>short</code> &rarr; <code>int</code> &rarr; <code>long long</code> &rarr; <code>float</code> &rarr; <code>double</code>
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200 mb-6">
            <code>
              int a = 5;<br />
              double b = 2.5;<br />
              <span className="text-gray-500">{"// Expresia a + b va fi de tip double, deoarece double e superior lui int."}</span><br />
              <span className="text-gray-500">{"// Valoarea 5 este convertită automat la 5.0 înainte de adunare."}</span><br />
              double rezultat = a + b; <span className="text-gray-500">{"// rezultat = 7.5"}</span>
            </code>
          </div>
        </div>
      </section>

      {/* Explicit Conversions (Cast) */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">explicit</span>
            </span>
            2. Conversia Explicită (Casting)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Conversia explicită este forțată de către programator folosind operatorul de conversie numit <strong>cast</strong>. Aceasta este utilă pentru a evita trunchierile incorecte, în special la împărțirea numerelor întregi.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-primary mb-6">
            <li>
              <strong className="text-gray-900 dark:text-gray-200">
                Sintaxa C-style:
              </strong>{" "}
              <code>(tip_nou) expresie</code>
            </li>
          </ul>

          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold mb-2 block">{"// 1. Conversie int <-> float"}</span>
              <code>
                int x = 5, y = 2;<br />
                <span className="text-gray-500">{"// Împărțirea a doi întregi dă un întreg (5 / 2 dă 2)."}</span><br />
                float gresit = x / y; <span className="text-gray-500">{"// gresit va fi 2.0"}</span><br /><br />
                <span className="text-gray-500">{"// Folosim conversia explicită pentru a obține un rezultat real."}</span><br />
                float corect = (float)x / y; <span className="text-gray-500">{"// corect va fi 2.5"}</span><br /><br />
                <span className="text-gray-500">{"// Invers: float -> int (taie zecimalele)"}</span><br />
                float f = 3.99;<br />
                int i = (int)f; <span className="text-gray-500">{"// i va fi 3"}</span>
              </code>
            </div>

            <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold mb-2 block">{"// 2. Conversie char <-> int (Codul ASCII)"}</span>
              <code>
                char litera = 'A';<br />
                <span className="text-gray-500">{"// Aflăm codul ASCII al literei 'A'"}</span><br />
                int codAscii = (int)litera; <span className="text-gray-500">{"// codAscii va fi 65"}</span><br /><br />
                <span className="text-gray-500">{"// Invers: obținem caracterul pe baza unui cod ASCII"}</span><br />
                int cod = 97;<br />
                char caracter = (char)cod; <span className="text-gray-500">{"// caracter va fi 'a'"}</span>
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Predefined Functions */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">functions</span>
            </span>
            3. Funcții Predefinite în Expresii
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Limbajul C++ oferă o serie de funcții matematice predefinite extrem de utile în construirea expresiilor. Pentru a le folosi, trebuie să includem biblioteca <code>&lt;cmath&gt;</code> (sau <code>&lt;math.h&gt;</code>).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <code className="text-primary font-bold block mb-1">abs(x) / fabs(x)</code>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Modulul lui <code>x</code> (<code>abs</code> pt întregi, <code>fabs</code> pt reali).
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <code className="text-primary font-bold block mb-1">sqrt(x)</code>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Rădăcina pătrată a lui <code>x</code> (radicalul). Argumentul trebuie să fie pozitiv.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <code className="text-primary font-bold block mb-1">pow(x, y)</code>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Returnează <code>x</code> la puterea <code>y</code> (x<sup>y</sup>).
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <code className="text-primary font-bold block mb-1">floor(x) / ceil(x)</code>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <code>floor</code> rotunjește în jos, iar <code>ceil</code> rotunjește în sus.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <code className="text-primary font-bold block mb-1">trunc(x) / round(x)</code>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <code>trunc</code> taie zecimalele, <code>round</code> rotunjește la cel mai apropiat întreg.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <code className="text-primary font-bold block mb-1">exp(x)</code>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Returnează numărul lui Euler <code>e</code> la puterea <code>x</code> (e<sup>x</sup>).
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 p-4 rounded-r-lg">
            <h4 className="text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wide mb-1">
              Important pentru Bacalaureat
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Multe expresii aritmetice de la subiectul I vă vor cere să transcrieți formule matematice în C++. Atenție la ordinea operațiilor și folosiți <code>sqrt()</code> în loc de notația matematică clasică.
            </p>
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
            În grilele de la subiectul I este extrem de frecventă capcana împărțirii numerelor întregi. Rețineți întotdeauna că:
          </p>
          <div className="bg-white/50 dark:bg-black/20 p-4 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
            <code>
              10 / 3 <span className="text-gray-500">{"// este egal cu 3 (partea întreagă)"}</span><br />
              10.0 / 3 <span className="text-gray-500">{"// este egal cu 3.333... (deoarece un operand este real)"}</span><br />
              (double)10 / 3 <span className="text-gray-500">{"// este egal cu 3.333..."}</span>
            </code>
          </div>
        </div>
      </section>

    </div>
  );
}
