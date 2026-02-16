export function LessonGraphContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">hub</span>
            </span>
            Definiția Grafului Neorientat
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Un <strong>graf neorientat</strong> este o pereche ordonată{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-primary font-bold">
              G = (V, E)
            </code>
            , unde:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-primary mb-6">
            <li>
              <strong className="text-gray-900 dark:text-gray-200">V</strong>{" "}
              este o mulțime finită și nevidă de elemente numite{" "}
              <em>vârfuri</em> (sau noduri).
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-200">E</strong>{" "}
              este o mulțime de perechi neordonate de vârfuri distincte, numite{" "}
              <em>muchii</em>.
            </li>
          </ul>
          <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-primary p-4 rounded-r-lg">
            <h4 className="text-primary font-bold text-sm uppercase tracking-wide mb-1">
              Observație Importantă
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Într-un graf neorientat, muchia (x, y) este identică cu muchia (y,
              x). Relația de adiacență este simetrică.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">grid_on</span>
            </span>
            Reprezentarea Grafurilor: Matricea de Adiacență
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Matricea de adiacență este o matrice pătratică binară{" "}
            <code className="text-primary font-bold">A</code> de dimensiune{" "}
            <code className="text-primary font-bold">n x n</code>, unde{" "}
            <code className="text-primary font-bold">n</code> este numărul de
            vârfuri.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-[#1A1A35] rounded-xl p-4 flex items-center justify-center border border-gray-200 dark:border-gray-700 min-h-[200px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10"></div>
              <div className="relative w-48 h-48">
                <svg
                  className="w-full h-full stroke-gray-800 dark:stroke-white fill-none stroke-2"
                  viewBox="0 0 100 100"
                >
                  <line x1="20" x2="80" y1="20" y2="20"></line>
                  <line x1="20" x2="20" y1="20" y2="80"></line>
                  <line x1="20" x2="80" y1="80" y2="80"></line>
                  <line x1="80" x2="80" y1="20" y2="80"></line>
                  <line x1="20" x2="80" y1="20" y2="80"></line>
                  <circle
                    className="fill-primary stroke-none"
                    cx="20"
                    cy="20"
                    r="6"
                  ></circle>
                  <text
                    className="fill-gray-500 dark:fill-gray-400 text-[8px] font-sans font-bold"
                    x="15"
                    y="15"
                  >
                    1
                  </text>
                  <circle
                    className="fill-primary stroke-none"
                    cx="80"
                    cy="20"
                    r="6"
                  ></circle>
                  <text
                    className="fill-gray-500 dark:fill-gray-400 text-[8px] font-sans font-bold"
                    x="85"
                    y="15"
                  >
                    2
                  </text>
                  <circle
                    className="fill-primary stroke-none"
                    cx="20"
                    cy="80"
                    r="6"
                  ></circle>
                  <text
                    className="fill-gray-500 dark:fill-gray-400 text-[8px] font-sans font-bold"
                    x="15"
                    y="85"
                  >
                    4
                  </text>
                  <circle
                    className="fill-primary stroke-none"
                    cx="80"
                    cy="80"
                    r="6"
                  ></circle>
                  <text
                    className="fill-gray-500 dark:fill-gray-400 text-[8px] font-sans font-bold"
                    x="85"
                    y="85"
                  >
                    3
                  </text>
                </svg>
              </div>
              <p className="absolute bottom-2 text-xs text-gray-400">
                Fig 1. Graf G cu 4 noduri
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                <table className="min-w-full text-center text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="py-2 px-3 text-gray-500 font-medium font-mono">
                        A[i][j]
                      </th>
                      <th className="py-2 px-3 font-mono">1</th>
                      <th className="py-2 px-3 font-mono">2</th>
                      <th className="py-2 px-3 font-mono">3</th>
                      <th className="py-2 px-3 font-mono">4</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-[#1A1A35] text-gray-700 dark:text-gray-300 font-mono">
                    <tr>
                      <td className="bg-gray-50 dark:bg-gray-800/50 font-bold text-gray-500">
                        1
                      </td>
                      <td>0</td>
                      <td className="text-primary font-bold">1</td>
                      <td>0</td>
                      <td className="text-primary font-bold">1</td>
                    </tr>
                    <tr>
                      <td className="bg-gray-50 dark:bg-gray-800/50 font-bold text-gray-500">
                        2
                      </td>
                      <td className="text-primary font-bold">1</td>
                      <td>0</td>
                      <td className="text-primary font-bold">1</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="bg-gray-50 dark:bg-gray-800/50 font-bold text-gray-500">
                        3
                      </td>
                      <td>0</td>
                      <td className="text-primary font-bold">1</td>
                      <td>0</td>
                      <td className="text-primary font-bold">1</td>
                    </tr>
                    <tr>
                      <td className="bg-gray-50 dark:bg-gray-800/50 font-bold text-gray-500">
                        4
                      </td>
                      <td className="text-primary font-bold">1</td>
                      <td>0</td>
                      <td className="text-primary font-bold">1</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                Matricea de adiacență corespunzătoare
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="bg-[#0f0f24] px-4 py-2 flex justify-between items-center border-b border-gray-700">
              <span className="text-gray-400 text-xs font-mono">
                C++ Implementation
              </span>
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="bg-[#1e1e3f] p-4 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300">
              <pre>
                <code>
                  <span className="code-comment">
                    {"// Citirea matricei de adiacență din fișier"}
                  </span>
                  {"\n"}
                  <span className="code-keyword">#include</span>{" "}
                  <span className="code-string">&lt;iostream&gt;</span>
                  {"\n"}
                  <span className="code-keyword">#include</span>{" "}
                  <span className="code-string">&lt;fstream&gt;</span>
                  {"\n"}
                  <span className="code-keyword">using namespace</span> std;
                  {"\n"}
                  <span className="code-type">int</span> a[
                  <span className="code-number">101</span>][
                  <span className="code-number">101</span>], n;{"\n"}
                  <span className="code-type">int</span>{" "}
                  <span className="code-function">main</span>() {"{"}
                  {"\n"}
                  {"    "}ifstream f(
                  <span className="code-string">&quot;graf.in&quot;</span>
                  );{"\n"}
                  {"    "}f &gt;&gt; n;{"\n"}
                  {"    "}
                  <span className="code-type">int</span> x, y;{"\n"}
                  {"    "}
                  <span className="code-comment">
                    {"// Citim perechi de muchii (x, y)"}
                  </span>
                  {"\n"}
                  {"    "}
                  <span className="code-keyword">while</span> (f &gt;&gt; x
                  &gt;&gt; y) {"{"}
                  {"\n"}
                  {"        "}a[x][y] = <span className="code-number">1</span>;
                  {"\n"}
                  {"        "}a[y][x] = <span className="code-number">1</span>;{" "}
                  <span className="code-comment">
                    {"// Graful este neorientat"}
                  </span>
                  {"\n"}
                  {"    "}
                  {"}"}
                  {"\n"}
                  {"    "}
                  <span className="code-comment">{"// Afișare matrice"}</span>
                  {"\n"}
                  {"    "}
                  <span className="code-keyword">for</span>(
                  <span className="code-type">int</span> i ={" "}
                  <span className="code-number">1</span>; i &lt;= n; i++) {"{"}
                  {"\n"}
                  {"        "}
                  <span className="code-keyword">for</span>(
                  <span className="code-type">int</span> j ={" "}
                  <span className="code-number">1</span>; j &lt;= n; j++)
                  {"\n"}
                  {"            "}cout &lt;&lt; a[i][j] &lt;&lt;{" "}
                  <span className="code-string">&quot; &quot;</span>;{"\n"}
                  {"        "}cout &lt;&lt; endl;{"\n"}
                  {"    "}
                  {"}"}
                  {"\n"}
                  {"    "}
                  <span className="code-keyword">return</span>{" "}
                  <span className="code-number">0</span>;{"\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">psychology</span>
            </span>
            Proprietăți Importante
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="bg-gray-50 dark:bg-navy-deep p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition duration-300">
              <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                Gradul unui nod
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Numărul de muchii incidente cu nodul respectiv. Se notează cu{" "}
                <span className="font-mono text-primary font-bold">d(x)</span>.
              </p>
            </li>
            <li className="bg-gray-50 dark:bg-navy-deep p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition duration-300">
              <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                Teorema 1
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Suma gradelor tuturor nodurilor este dublul numărului de muchii:{" "}
                <span className="font-mono text-primary font-bold">
                  ∑ d(x) = 2 * m
                </span>
                .
              </p>
            </li>
            <li className="bg-gray-50 dark:bg-navy-deep p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition duration-300">
              <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                Nod Izolat
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Un nod cu gradul 0 (nu are nici o muchie incidentă).
              </p>
            </li>
            <li className="bg-gray-50 dark:bg-navy-deep p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition duration-300">
              <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                Nod Terminal
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Un nod cu gradul 1 (o singură muchie incidentă).
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
