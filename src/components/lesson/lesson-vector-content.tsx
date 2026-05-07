import { Button } from "@/components/ui/button";

export function LessonVectorContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">data_array</span>
            </span>
            Tablouri Unidimensionale (Vectori)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Un <strong>tablou unidimensional</strong> (cunoscut și sub numele de <strong>vector</strong> sau <em>array</em>) este o structură de date omogenă care ocupă un spațiu contiguu (continuu) în memorie. Asta înseamnă că poate stoca un număr fix de elemente <strong>de același tip</strong> (de exemplu, doar numere întregi, sau doar caractere).
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Fiecare element din vector poate fi accesat direct (în timp constant O(1)) folosind un <strong>index</strong> (poziție).
          </p>
        </div>
      </section>

      {/* Declarare și Accesare */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">dns</span>
            </span>
            1. Declararea și accesarea elementelor
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Declararea unui vector</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Trebuie specificat tipul de date, numele vectorului și <strong>capacitatea maximă</strong> între paranteze drepte <code>[]</code>.
              </p>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">int</span> v[100]; <span className="text-gray-500">{"// Vector de max 100 de elemente de tip int"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">float</span> temperaturi[30]; <span className="text-gray-500">{"// Vector de max 30 de numere reale"}</span>
              </code>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Inițializarea la declarare</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Putem oferi valorile inițiale între acolade <code>{"{}"}</code>. Elementele neprecizate devin 0.
              </p>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">int</span> a[5] = {"{10, 20, 30, 40, 50}"};<br />
                <span className="text-indigo-600 dark:text-indigo-400">int</span> b[100] = {"{0}"}; <span className="text-gray-500">{"// Toate cele 100 de elemente devin 0"}</span>
              </code>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Indexarea de la ZERO</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            În limbajul C++, primul element dintr-un vector se află la <strong>indexul 0</strong>, NU la indexul 1. Ultimul element al unui vector de capacitate <code>n</code> se află la indexul <code>n-1</code>.
          </p>

          <div className="flex justify-center mb-6">
            <div className="flex border-2 border-indigo-200 dark:border-indigo-800 rounded-lg overflow-hidden font-mono">
              <div className="flex flex-col border-r-2 border-indigo-200 dark:border-indigo-800">
                <span className="bg-indigo-50 dark:bg-indigo-900/50 p-2 text-center text-xs text-gray-500 font-bold">Index 0</span>
                <span className="p-4 text-center text-lg bg-white dark:bg-navy-surface">10</span>
              </div>
              <div className="flex flex-col border-r-2 border-indigo-200 dark:border-indigo-800">
                <span className="bg-indigo-50 dark:bg-indigo-900/50 p-2 text-center text-xs text-gray-500 font-bold">Index 1</span>
                <span className="p-4 text-center text-lg bg-white dark:bg-navy-surface">20</span>
              </div>
              <div className="flex flex-col border-r-2 border-indigo-200 dark:border-indigo-800">
                <span className="bg-indigo-50 dark:bg-indigo-900/50 p-2 text-center text-xs text-gray-500 font-bold">Index 2</span>
                <span className="p-4 text-center text-lg bg-white dark:bg-navy-surface">30</span>
              </div>
              <div className="flex flex-col border-r-2 border-indigo-200 dark:border-indigo-800 opacity-50">
                <span className="bg-gray-100 dark:bg-gray-800 p-2 text-center text-xs text-gray-500">...</span>
                <span className="p-4 text-center text-lg bg-gray-50 dark:bg-gray-900">...</span>
              </div>
              <div className="flex flex-col">
                <span className="bg-indigo-50 dark:bg-indigo-900/50 p-2 text-center text-xs text-gray-500 font-bold">Index n-1</span>
                <span className="p-4 text-center text-lg bg-white dark:bg-navy-surface">99</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
            <code>
              a[0] = 10; <span className="text-gray-500">{"// Accesăm/modificăm primul element"}</span><br />
              cout &lt;&lt; a[2];  <span className="text-gray-500">{"// Afișează al treilea element (valoarea 30)"}</span>
            </code>
          </div>
        </div>
      </section>

      {/* Citire si Afisare */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">input</span>
            </span>
            2. Citirea și Afișarea (cu instrucțiunea FOR)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Deoarece știm exact câte elemente are un vector, cel mai potrivit mod de a-l parcurge este folosind ciclul <code>for</code>. 
            În probleme, vom folosi adesea o variabilă <code>n</code> care reprezintă <strong>numărul efectiv</strong> de elemente pe care dorim să le stocăm, mai mic sau egal cu capacitatea maximă declarată.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Citirea vectorului (0-indexed)</h3>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">int</span> n, v[100];<br />
                cin &gt;&gt; n; <span className="text-gray-500">{"// Citim nr de elemente"}</span><br /><br />
                <span className="text-gray-500">{"// Parcurgem de la 0 la n-1"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 0; i &lt; n; i++) {"{"}<br />
                &nbsp;&nbsp;cin &gt;&gt; v[i];<br />
                {"}"}
              </code>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Afișarea vectorului</h3>
              <code>
                <span className="text-gray-500">{"// Afișăm elementele separate prin spațiu"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 0; i &lt; n; i++) {"{"}<br />
                &nbsp;&nbsp;cout &lt;&lt; v[i] &lt;&lt; <span className="text-green-600">" "</span>;<br />
                {"}"}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Exemple */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">code</span>
            </span>
            3. Exemple de probleme clasice
          </h2>
          
          <div className="space-y-6">
            {/* Exemplul 1 */}
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Exemplul 1: Suma elementelor pare dintr-un vector</h3>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">int</span> n, v[100], suma = 0;<br />
                cin &gt;&gt; n;<br />
                <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 0; i &lt; n; i++) {"{"}<br />
                &nbsp;&nbsp;cin &gt;&gt; v[i];<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">if</span> (v[i] % 2 == 0) {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;suma = suma + v[i];<br />
                &nbsp;&nbsp;{"}"}<br />
                {"}"}<br />
                cout &lt;&lt; <span className="text-green-600">"Suma elementelor pare este: "</span> &lt;&lt; suma;
              </code>
            </div>

            {/* Exemplul 2 */}
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Exemplul 2: Determinarea elementului maxim</h3>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">int</span> n, v[100];<br />
                cin &gt;&gt; n;<br />
                <span className="text-gray-500">{"// Mai întâi citim toate elementele"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 0; i &lt; n; i++) cin &gt;&gt; v[i];<br /><br />
                
                <span className="text-gray-500">{"// Presupunem că primul element este maximul"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">int</span> maxim = v[0];<br />
                <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 1; i &lt; n; i++) {"{"}<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">if</span> (v[i] &gt; maxim) {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;maxim = v[i];<br />
                &nbsp;&nbsp;{"}"}<br />
                {"}"}<br />
                cout &lt;&lt; <span className="text-green-600">"Elementul maxim este: "</span> &lt;&lt; maxim;
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
              <strong>Depășirea limitelor (Out of Bounds):</strong> Declararea lui <code>v[10]</code> înseamnă că poți accesa indicii <code>0, 1, ..., 9</code>. Dacă încerci să accesezi <code>v[10]</code>, programul va citi o zonă de memorie interzisă și fie va crăpa ("Segmentation fault"), fie va returna o valoare "gunoi" (garbage value).
            </li>
            <li>
              <strong>Indexarea de la 1:</strong> Mulți profesori și unele manuale preferă să ignore `v[0]` și să indexeze vectorii de la 1 la n (<code>for(i=1; i&lt;=n; i++)</code>). Acest lucru este perfect valid la Bacalaureat, dar trebuie să fii atent să declari vectorul cu o unitate mai mare (ex: <code>v[101]</code> pentru `n=100`) ca să nu iasă din memorie pe ultima poziție. 
            </li>
            <li>
              <strong>Declararea globală vs locală:</strong> La Bacalaureat este recomandat să declari vectorii mari (ex: <code>v[10000]</code>) la nivel **global** (în afara oricărei funcții, inclusiv `main()`). Vectorii globali sunt automat inițializați cu 0 și alocați pe *Data Segment* în loc de *Stack*, evitând astfel eroarea de *Stack Overflow*.
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
