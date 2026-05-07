import { Button } from "@/components/ui/button";

export function LessonMatrixContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">grid_on</span>
            </span>
            Tablouri Bidimensionale (Matrice)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Un <strong>tablou bidimensional</strong> (sau <strong>matrice</strong>) este o structură de date care poate fi privită ca un tabel cu <strong>linii</strong> și <strong>coloane</strong>. Practic, este un "vector de vectori". Orice element dintr-o matrice este identificat unic prin doi indici: primul pentru linia pe care se află, și al doilea pentru coloană.
          </p>
        </div>
      </section>

      {/* Declarare și Accesare */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">apps</span>
            </span>
            1. Declararea și coordonatele
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Declararea unei matrice</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Specificăm tipul de date, numele și două perechi de paranteze drepte: <code>[Linii][Coloane]</code>.
              </p>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">int</span> a[50][50]; <span className="text-gray-500">{"// 50 linii, 50 coloane"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">float</span> m[10][20]; <span className="text-gray-500">{"// 10 linii, 20 coloane"}</span>
              </code>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Accesarea unui element</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Pentru a folosi elementul de pe linia <code>i</code> și coloana <code>j</code>, scriem <code>a[i][j]</code>.
              </p>
              <code>
                a[0][0] = 5; <span className="text-gray-500">{"// Elementul din colțul stânga-sus"}</span><br />
                cout &lt;&lt; a[2][3]; <span className="text-gray-500">{"// Linia 2, Coloana 3"}</span>
              </code>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Reprezentarea vizuală (Indexare de la 0)</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Asemănător vectorilor, în C++, atât liniile cât și coloanele sunt numerotate începând de la indexul <strong>0</strong>. O matrice <code>a[3][4]</code> va avea liniile <code>0, 1, 2</code> și coloanele <code>0, 1, 2, 3</code>.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 mb-6 font-mono text-center">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
              <thead className="bg-indigo-50 dark:bg-indigo-900/50">
                <tr>
                  <th className="px-4 py-2 border-r border-gray-200 dark:border-gray-800 text-gray-500">a[L][C]</th>
                  <th className="px-4 py-2 border-r border-gray-200 dark:border-gray-800 text-indigo-700 dark:text-indigo-300">Col 0</th>
                  <th className="px-4 py-2 border-r border-gray-200 dark:border-gray-800 text-indigo-700 dark:text-indigo-300">Col 1</th>
                  <th className="px-4 py-2 border-r border-gray-200 dark:border-gray-800 text-indigo-700 dark:text-indigo-300">Col 2</th>
                  <th className="px-4 py-2 text-indigo-700 dark:text-indigo-300">Col 3</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-navy-surface divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800 bg-indigo-50/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 font-bold">Linia 0</td>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800">a[0][0]</td>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800">a[0][1]</td>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800">a[0][2]</td>
                  <td className="px-4 py-3">a[0][3]</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800 bg-indigo-50/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 font-bold">Linia 1</td>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800">a[1][0]</td>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800">a[1][1]</td>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800">a[1][2]</td>
                  <td className="px-4 py-3">a[1][3]</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800 bg-indigo-50/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 font-bold">Linia 2</td>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800">a[2][0]</td>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800">a[2][1]</td>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800">a[2][2]</td>
                  <td className="px-4 py-3">a[2][3]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Parcurgere */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">repeat</span>
            </span>
            2. Parcurgerea unei matrice
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Pentru a parcurge toate elementele unei matrice, avem nevoie de <strong>două structuri repetitive imbricate</strong> (un <code>for</code> în interiorul altui <code>for</code>). Primul `for` fixează linia, iar al doilea `for` "mătură" toate coloanele de pe acea linie.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Citirea matricei (n linii, m coloane)</h3>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">int</span> n, m, a[50][50];<br />
                cin &gt;&gt; n &gt;&gt; m;<br /><br />
                <span className="text-gray-500">{"// Parcurgem liniile"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 0; i &lt; n; i++) {"{"}<br />
                &nbsp;&nbsp;<span className="text-gray-500">{"// Parcurgem coloanele pe linia i"}</span><br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> j = 0; j &lt; m; j++) {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;cin &gt;&gt; a[i][j];<br />
                &nbsp;&nbsp;{"}"}<br />
                {"}"}
              </code>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Afișarea matricei</h3>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 0; i &lt; n; i++) {"{"}<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> j = 0; j &lt; m; j++) {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; a[i][j] &lt;&lt; <span className="text-green-600">" "</span>;<br />
                &nbsp;&nbsp;{"}"}<br />
                &nbsp;&nbsp;<span className="text-gray-500">{"// Trecem la rând nou la finalul fiecărei linii!"}</span><br />
                &nbsp;&nbsp;cout &lt;&lt; endl;<br />
                {"}"}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Matrice Pătratică și Diagonale */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">square</span>
            </span>
            3. Matrice Pătratice și Diagonale
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            O matrice este <strong>pătratică</strong> atunci când numărul de linii este egal cu numărul de coloane (<code>n == m</code>). Într-o astfel de matrice apar două concepte esențiale la examen: <strong>Diagonala Principală</strong> și <strong>Diagonala Secundară</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border-l-4 border-indigo-500 p-4 rounded-r-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold mb-2">Diagonala Principală</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Formată din elementele din colțul stânga-sus spre dreapta-jos. Condiția matematică pentru un element de pe diagonala principală este:
              </p>
              <div className="bg-indigo-100 dark:bg-indigo-900/40 text-center p-2 rounded font-mono font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                i == j
              </div>
              <p className="text-xs text-gray-500 italic">Exemplu elemente: a[0][0], a[1][1], a[2][2]...</p>
            </div>

            <div className="border-l-4 border-green-500 p-4 rounded-r-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-green-600 dark:text-green-400 font-bold mb-2">Diagonala Secundară</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Formată din elementele din colțul dreapta-sus spre stânga-jos. Condiția matematică (dacă indexăm de la 0 la n-1) este:
              </p>
              <div className="bg-green-100 dark:bg-green-900/40 text-center p-2 rounded font-mono font-bold text-green-700 dark:text-green-300 mb-2">
                i + j == n - 1
              </div>
              <p className="text-xs text-gray-500 italic">Exemplu pt n=3: a[0][2], a[1][1], a[2][0]</p>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-2 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <strong>Atenție!</strong> Dacă obișnuiți să indexați matricele de la <code>1</code> la <code>n</code>, formula pentru diagonala secundară devine: <code>i + j == n + 1</code>. Ambele variante sunt acceptate la Bacalaureat, dar fiți consistenți.
          </p>
        </div>
      </section>

      {/* Exemple */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">code</span>
            </span>
            4. Exemple de probleme clasice
          </h2>
          
          <div className="space-y-6">
            {/* Exemplul 1: Suma totală */}
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Exemplul 1: Suma totală a elementelor</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Pentru a afla suma tuturor elementelor, folosim o variabilă <code>suma</code> (inițializată cu 0) și adunăm fiecare element în timpul parcurgerii complete.
              </p>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">int</span> sumaTotala = 0;<br />
                <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 0; i &lt; n; i++) {"{"}<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> j = 0; j &lt; m; j++) {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;sumaTotala = sumaTotala + a[i][j];<br />
                &nbsp;&nbsp;{"}"}<br />
                {"}"}<br />
                cout &lt;&lt; <span className="text-green-600">"Suma tuturor elementelor: "</span> &lt;&lt; sumaTotala;
              </code>
            </div>

            {/* Exemplul 2: Suma pe rând */}
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Exemplul 2: Suma elementelor pe fiecare rând (linie)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Pentru a calcula suma pe fiecare rând, <strong>resetăm</strong> variabila <code>sumaLinie</code> la <code>0</code> la începutul fiecărei linii (imediat după primul <code>for</code>).
              </p>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> i = 0; i &lt; n; i++) {"{"}<br />
                &nbsp;&nbsp;<span className="text-gray-500">{"// Resetăm suma la 0 pentru noua linie"}</span><br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">int</span> sumaLinie = 0; <br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">for</span> (<span className="text-indigo-600 dark:text-indigo-400">int</span> j = 0; j &lt; m; j++) {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;sumaLinie = sumaLinie + a[i][j];<br />
                &nbsp;&nbsp;{"}"}<br />
                &nbsp;&nbsp;<span className="text-gray-500">{"// Afișăm suma după ce am terminat de adunat toate elementele de pe linia i"}</span><br />
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-green-600">"Suma pe linia "</span> &lt;&lt; i &lt;&lt; <span className="text-green-600">" este: "</span> &lt;&lt; sumaLinie &lt;&lt; endl;<br />
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
              <strong>Declarare Inversată:</strong> Nu confundați liniile cu coloanele. Mereu primul grup <code>[]</code> se referă la linie, și al doilea <code>[]</code> la coloană. <code>a[linie][coloana]</code>.
            </li>
            <li>
              <strong>For-uri cu același contor:</strong> Asigurați-vă că folosiți variabile de contor diferite (ex: <code>i</code> și <code>j</code>) pentru cele două bucle for imbricate. Folosirea lui `i` în ambele va distruge complet programul.
            </li>
            <li>
              <strong>Limitări de memorie:</strong> Spre deosebire de vectori, o matrice crește exponențial. O matrice `int a[1000][1000]` are un milion de elemente (aprox 4 MB de RAM). O matrice `int a[10000][10000]` probabil va duce la eroare de memorie "Size of array is too large".
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
