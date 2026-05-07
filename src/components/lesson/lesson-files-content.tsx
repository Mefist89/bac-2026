import { Button } from "@/components/ui/button";

export function LessonFilesContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">snippet_folder</span>
            </span>
            Lucrul cu Fișiere Text în C++
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Până acum am citit date de la tastatură (cu <code>cin</code>) și am afișat rezultate pe ecran (cu <code>cout</code>). Însă, la Bacalaureat (și în practică), datele sunt adesea prea multe pentru a fi introduse manual de fiecare dată.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Aici intervine lucrul cu <strong>fișiere text</strong>. Pentru a putea citi și scrie în fișiere, trebuie să includem biblioteca <code>&lt;fstream&gt;</code> (File Stream). Aceasta ne oferă două tipuri de date esențiale: <code>ifstream</code> (pentru citire/input) și <code>ofstream</code> (pentru scriere/output).
          </p>
        </div>
      </section>

      {/* ifstream si ofstream */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">sync_alt</span>
            </span>
            1. Concepte de bază: Citire și Scriere
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Citire */}
            <div className="border border-indigo-200 dark:border-indigo-800/50 p-6 rounded-xl bg-indigo-50/50 dark:bg-indigo-900/10">
              <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-400 mb-3 flex items-center gap-2">
                <span className="material-icons-outlined text-base">login</span>
                ifstream (Input File Stream)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Se folosește pentru a <strong>citi</strong> date dintr-un fișier. Odată deschis fișierul, îl putem folosi exact așa cum foloseam <code>cin</code>.
              </p>
              <code>
                <span className="text-gray-500">{"// Declarăm o variabilă 'fin' și deschidem fișierul"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">ifstream</span> fin(<span className="text-green-600">"date.in"</span>);<br /><br />
                <span className="text-indigo-600 dark:text-indigo-400">int</span> x;<br />
                fin &gt;&gt; x; <span className="text-gray-500">{"// Citim x din fișier"}</span>
              </code>
            </div>

            {/* Scriere */}
            <div className="border border-green-200 dark:border-green-800/50 p-6 rounded-xl bg-green-50/50 dark:bg-green-900/10">
              <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                <span className="material-icons-outlined text-base">logout</span>
                ofstream (Output File Stream)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Se folosește pentru a <strong>scrie</strong> date într-un fișier. Odată deschis, îl putem folosi exact așa cum foloseam <code>cout</code>.
              </p>
              <code>
                <span className="text-gray-500">{"// Declarăm variabila 'fout' și deschidem/creăm fișierul"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">ofstream</span> fout(<span className="text-green-600">"date.out"</span>);<br /><br />
                <span className="text-indigo-600 dark:text-indigo-400">int</span> x = 10;<br />
                fout &lt;&lt; x; <span className="text-gray-500">{"// Scriem x în fișier"}</span>
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Exemple practice */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">code</span>
            </span>
            2. Exemple practice
          </h2>

          <div className="space-y-8">
            {/* Exemplul 1 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Exemplul 1: Citirea unui vector dintr-un fișier și afișarea sumei în alt fișier</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Fișierul <code>bac.in</code> conține pe prima linie un număr <code>n</code>, iar pe a doua linie <code>n</code> numere. Trebuie să scriem suma lor în <code>bac.out</code>.
              </p>
              <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep font-mono text-sm">
                <code>
                  <span className="text-indigo-600 dark:text-indigo-400">#include</span> &lt;iostream&gt;<br />
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">#include &lt;fstream&gt;</span> <span className="text-gray-500">{"// Nu uita biblioteca!"}</span><br />
                  <span className="text-indigo-600 dark:text-indigo-400">using namespace</span> std;<br /><br />
                  
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">ifstream fin(<span className="text-green-600">"bac.in"</span>);</span><br />
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">ofstream fout(<span className="text-green-600">"bac.out"</span>);</span><br /><br />
                  
                  <span className="text-indigo-600 dark:text-indigo-400">int</span> main() {"{"}<br />
                  &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">int</span> n, v[100], suma = 0;<br />
                  &nbsp;&nbsp;<span className="text-gray-500">{"// Folosim 'fin' în loc de 'cin'"}</span><br />
                  &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400 font-bold">fin</span> &gt;&gt; n;<br />
                  &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">for</span>(<span className="text-indigo-600 dark:text-indigo-400">int</span> i=0; i&lt;n; i++) {"{"}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400 font-bold">fin</span> &gt;&gt; v[i];<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;suma = suma + v[i];<br />
                  &nbsp;&nbsp;{"}"}<br /><br />
                  &nbsp;&nbsp;<span className="text-gray-500">{"// Folosim 'fout' în loc de 'cout'"}</span><br />
                  &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400 font-bold">fout</span> &lt;&lt; suma;<br /><br />
                  &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">return</span> 0;<br />
                  {"}"}
                </code>
              </div>
            </div>

            {/* Exemplul 2 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Exemplul 2: Citirea "până la sfârșitul fișierului" (EOF)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Deseori la Subiectul III (problema de eficiență), ți se dau numere într-un fișier, dar <strong>NU știi câte numere sunt</strong> (lipsește acel <code>n</code> de la început). În acest caz, trebuie să citești cât timp există date în fișier folosind construcția <code>while(fin &gt;&gt; x)</code>.
              </p>
              <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep font-mono text-sm">
                <code>
                  <span className="text-indigo-600 dark:text-indigo-400">#include</span> &lt;iostream&gt;<br />
                  <span className="text-indigo-600 dark:text-indigo-400">#include</span> &lt;fstream&gt;<br />
                  <span className="text-indigo-600 dark:text-indigo-400">using namespace</span> std;<br /><br />
                  
                  <span className="text-indigo-600 dark:text-indigo-400">ifstream</span> fin(<span className="text-green-600">"numere.in"</span>);<br /><br />
                  
                  <span className="text-indigo-600 dark:text-indigo-400">int</span> main() {"{"}<br />
                  &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">int</span> x;<br />
                  &nbsp;&nbsp;<span className="text-gray-500">{"// Expresia 'fin >> x' returnează 'true' cât timp reușește să citească ceva"}</span><br />
                  &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">while</span> (<span className="text-indigo-600 dark:text-indigo-400 font-bold">fin &gt;&gt; x</span>) {"{"}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-green-600">"Am citit numărul: "</span> &lt;&lt; x &lt;&lt; endl;<br />
                  &nbsp;&nbsp;{"}"}<br /><br />
                  &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">return</span> 0;<br />
                  {"}"}
                </code>
              </div>
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
              <strong>Fișierul .out se creează automat:</strong> Dacă fișierul pentru scriere (ex: <code>bac.out</code>) nu există pe hard disk, programul tău îl va crea automat. Totuși, fișierul pentru citire (<code>bac.in</code>) <strong>trebuie</strong> să existe deja, altfel programul nu va citi nimic!
            </li>
            <li>
              <strong>Declararea globală a variabilelor de fișier:</strong> Este o practică excelentă (mai ales la examen) să declari <code>ifstream fin("nume.in");</code> <strong>global</strong>, în afara funcției <code>main</code>. Astfel, vor putea fi folosite în orice subprogram.
            </li>
            <li>
              <strong>Nu uita biblioteca:</strong> Erorile de compilare de genul <code>"ifstream was not declared in this scope"</code> înseamnă 100% că ai uitat să scrii <code>#include &lt;fstream&gt;</code> la începutul codului.
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
