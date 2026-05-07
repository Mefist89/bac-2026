import { Button } from "@/components/ui/button";

export function LessonNumSystemsContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">calculate</span>
            </span>
            Sisteme de Numerație (Baza 2 și Baza 10)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            În viața de zi cu zi folosim <strong>Sistemul Zecimal (Baza 10)</strong>, bazat pe 10 cifre: <code>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</code>. Totuși, calculatoarele funcționează la nivel fizic cu întrerupătoare (curent "oprit" sau "pornit"), de aceea folosesc <strong>Sistemul Binar (Baza 2)</strong>, care are doar două cifre: <code>0</code> și <code>1</code>.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Un exercițiu foarte clasic (inclusiv la examene/teste) este trecerea unui număr din baza 2 în baza 10 și invers.
          </p>
        </div>
      </section>

      {/* Din Binar in Zecimal */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">arrow_forward</span>
            </span>
            1. Conversia din Binar (Baza 2) în Zecimal (Baza 10)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Pentru a transforma un număr din baza 2 în baza 10, folosim regula dezvoltării în sumă de puteri ale bazei. Pe scurt: înmulțim fiecare cifră a numărului binar cu <code>2<sup>poziție</sup></code>, începând cu poziția <strong>0</strong> de la <strong>dreapta la stânga</strong>.
          </p>

          <div className="border-l-4 border-indigo-500 p-6 rounded-r-lg bg-gray-50 dark:bg-navy-deep font-mono text-sm mb-6">
            <h3 className="text-indigo-700 dark:text-indigo-400 font-bold mb-4">Exemplu: Transformăm numărul binar 1101 în zecimal</h3>
            
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-center border-collapse">
                <tbody>
                  <tr>
                    <td className="p-2 border-b border-gray-300 dark:border-gray-700 text-gray-500 text-xs">Poziția (Puterile lui 2)</td>
                    <td className="p-2 border border-gray-300 dark:border-gray-700 font-bold text-red-500">3</td>
                    <td className="p-2 border border-gray-300 dark:border-gray-700 font-bold text-red-500">2</td>
                    <td className="p-2 border border-gray-300 dark:border-gray-700 font-bold text-red-500">1</td>
                    <td className="p-2 border border-gray-300 dark:border-gray-700 font-bold text-red-500">0</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-gray-300 dark:border-gray-700 text-gray-500 text-xs">Cifrele Binare</td>
                    <td className="p-2 border border-gray-300 dark:border-gray-700 font-bold text-indigo-600 dark:text-indigo-400 text-lg">1</td>
                    <td className="p-2 border border-gray-300 dark:border-gray-700 font-bold text-indigo-600 dark:text-indigo-400 text-lg">1</td>
                    <td className="p-2 border border-gray-300 dark:border-gray-700 font-bold text-indigo-600 dark:text-indigo-400 text-lg">0</td>
                    <td className="p-2 border border-gray-300 dark:border-gray-700 font-bold text-indigo-600 dark:text-indigo-400 text-lg">1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <p>Calcul:</p>
              <p className="ml-4">= (1 × 2<sup>3</sup>) + (1 × 2<sup>2</sup>) + (0 × 2<sup>1</sup>) + (1 × 2<sup>0</sup>)</p>
              <p className="ml-4">= (1 × 8) + (1 × 4) + 0 + (1 × 1)</p>
              <p className="ml-4">= 8 + 4 + 0 + 1</p>
              <p className="ml-4 font-bold text-green-600 dark:text-green-400">= 13 (în baza 10)</p>
            </div>
          </div>
          
          <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800/50 text-sm text-gray-700 dark:text-gray-300">
            <strong>Sfat practic:</strong> Scrieți de la dreapta la stânga puterile lui 2 sub cifrele binare: <code>1, 2, 4, 8, 16, 32...</code> și apoi pur și simplu adunați puterile care au cifra <code>1</code> deasupra lor!
          </div>
        </div>
      </section>

      {/* Din Zecimal in Binar */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">arrow_back</span>
            </span>
            2. Conversia din Zecimal (Baza 10) în Binar (Baza 2)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Cea mai sigură metodă este <strong>împărțirea repetată la 2</strong>. Împărțim numărul la 2, reținem restul (care va fi mereu 0 sau 1), iar noul număr devine câtul. Repetăm procesul până când câtul ajunge 0. La final, <strong>citim resturile de jos în sus (în ordine inversă)</strong>.
          </p>

          <div className="border-l-4 border-green-500 p-6 rounded-r-lg bg-gray-50 dark:bg-navy-deep font-mono text-sm mb-6">
            <h3 className="text-green-700 dark:text-green-400 font-bold mb-4">Exemplu: Transformăm numărul zecimal 25 în binar</h3>
            
            <div className="space-y-3 text-gray-800 dark:text-gray-200 pl-4 border-l-2 border-gray-300 dark:border-gray-700 mb-4">
              <p>25 : 2 = 12, rest <span className="font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-1 rounded">1</span> ⬆️ <span className="text-gray-400 text-xs">(ultima cifră)</span></p>
              <p>12 : 2 = 6, rest <span className="font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-1 rounded">0</span> ⬆️</p>
              <p>6 : 2 = 3, rest <span className="font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-1 rounded">0</span> ⬆️</p>
              <p>3 : 2 = 1, rest <span className="font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-1 rounded">1</span> ⬆️</p>
              <p>1 : 2 = 0, rest <span className="font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-1 rounded">1</span> ⬆️ <span className="text-gray-400 text-xs">(prima cifră)</span></p>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300">
              Citind resturile de jos în sus, obținem:<br/>
              <span className="font-bold text-lg text-indigo-600 dark:text-indigo-400">25 (în baza 10) = 11001 (în baza 2)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Variabile logice */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">rule</span>
            </span>
            3. Variabile și Expresii Logice
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            În C++, adevărul și falsul sunt reprezentate prin tipul de date <strong><code>bool</code></strong>. O variabilă booleană poate avea doar două valori: <code>true</code> (Adevărat, valoarea numerică 1) sau <code>false</code> (Fals, valoarea numerică 0). 
            De fapt, în C++, orice număr diferit de 0 este considerat <code>true</code>, iar 0 este considerat <code>false</code>.
          </p>

          <div className="border border-cyan-200 dark:border-cyan-800/50 p-6 rounded-lg bg-cyan-50/30 dark:bg-cyan-900/10 mb-6">
            <h3 className="text-cyan-700 dark:text-cyan-400 font-bold mb-4">Operatori Logici Fundamentali</h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-navy-deep p-4 rounded border border-gray-200 dark:border-gray-700">
                <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold text-lg mr-2">&&</span>
                <strong>ȘI Logic (AND):</strong> Este <code>true</code> DOAR dacă <strong>amândouă</strong> expresiile sunt adevărate.
                <br/><span className="text-sm text-gray-500">Ex: <code>(x &gt; 0 && x &lt; 10)</code> - x aparține intervalului (0, 10).</span>
              </div>
              <div className="bg-white dark:bg-navy-deep p-4 rounded border border-gray-200 dark:border-gray-700">
                <span className="font-mono text-green-600 dark:text-green-400 font-bold text-lg mr-2">||</span>
                <strong>SAU Logic (OR):</strong> Este <code>true</code> dacă <strong>cel puțin una</strong> dintre expresii este adevărată.
                <br/><span className="text-sm text-gray-500">Ex: <code>(n == 0 || n == 1)</code> - n este fie 0, fie 1.</span>
              </div>
              <div className="bg-white dark:bg-navy-deep p-4 rounded border border-gray-200 dark:border-gray-700">
                <span className="font-mono text-red-600 dark:text-red-400 font-bold text-lg mr-2">!</span>
                <strong>NEGAȚIA Logică (NOT):</strong> Inversează valoarea (din true în false și invers).
                <br/><span className="text-sm text-gray-500">Ex: <code>!(x == 5)</code> este echivalent cu <code>x != 5</code>.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Functii logice */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">verified</span>
            </span>
            4. Funcții Logice (care returnează bool)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            O funcție logică este pur și simplu un subprogram care are tipul returnat <code>bool</code>. Aceste funcții sunt extrem de utile la examene pentru a scrie cod mai curat. De obicei, răspund la o întrebare de tip "DA sau NU".
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Exemplul 1 */}
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-purple-600 dark:text-purple-400 font-bold block mb-2">Exemplu: Verificarea Parității</h3>
              <code className="text-sm">
                <span className="text-gray-500">{"// Returnează true dacă n este par, false altfel"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">bool</span> estePar(<span className="text-indigo-600 dark:text-indigo-400">int</span> n) {"{"}<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">if</span> (n % 2 == 0) {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400 font-bold">return</span> <span className="text-indigo-600 dark:text-indigo-400">true</span>;<br />
                &nbsp;&nbsp;{"}"} <span className="text-indigo-600 dark:text-indigo-400">else</span> {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400 font-bold">return</span> <span className="text-indigo-600 dark:text-indigo-400">false</span>;<br />
                &nbsp;&nbsp;{"}"}<br />
                {"}"}<br /><br />
                
                <span className="text-gray-500">{"// Utilizare (foarte elegantă):"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">if</span> (estePar(10)) {"{"}<br />
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-green-600">"E par!"</span>;<br />
                {"}"}
              </code>
            </div>

            {/* Exemplul 2 */}
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-purple-600 dark:text-purple-400 font-bold block mb-2">Exemplu: Funcția Prim (Bacalaureat)</h3>
              <code className="text-sm">
                <span className="text-gray-500">{"// Funcție esențială la Subiectul III"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">bool</span> estePrim(<span className="text-indigo-600 dark:text-indigo-400">int</span> n) {"{"}<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">if</span> (n &lt; 2) <span className="text-red-600 dark:text-red-400 font-bold">return</span> <span className="text-indigo-600 dark:text-indigo-400">false</span>;<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">if</span> (n == 2) <span className="text-red-600 dark:text-red-400 font-bold">return</span> <span className="text-indigo-600 dark:text-indigo-400">true</span>;<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">if</span> (n % 2 == 0) <span className="text-red-600 dark:text-red-400 font-bold">return</span> <span className="text-indigo-600 dark:text-indigo-400">false</span>;<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">for</span>(<span className="text-indigo-600 dark:text-indigo-400">int</span> d=3; d*d&lt;=n; d+=2) {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">if</span> (n % d == 0) <span className="text-red-600 dark:text-red-400 font-bold">return</span> <span className="text-indigo-600 dark:text-indigo-400">false</span>;<br />
                &nbsp;&nbsp;{"}"}<br />
                &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400 font-bold">return</span> <span className="text-indigo-600 dark:text-indigo-400">true</span>;<br />
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
              <strong>Puterile lui 2:</strong> Pentru a nu face greșeli la examene (subiectul 1 grilă), scrieți-vă clar pe ciornă primele puteri ale lui 2: <code>1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024</code>.
            </li>
            <li>
              <strong>Ordinea resturilor:</strong> La transformarea din Zecimal în Binar, o greșeală comună este să scrieți resturile de sus în jos. Amințiți-vă: <strong>întotdeauna de jos în sus</strong>!
            </li>
            <li>
              <strong>Depășirea tipului int:</strong> Un număr zecimal mic (ex: 2000) poate genera un număr binar foarte lung care, stocat ca un <code>int</code> (ex: <code>11111010000</code>), poate duce la overflow. Dacă implementați algoritmul zecimal-&gt;binar în cod, este mai sigur să stocați binarul ca un `long long` sau `string`.
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
