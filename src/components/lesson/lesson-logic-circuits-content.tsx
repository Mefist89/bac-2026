import { Button } from "@/components/ui/button";

export function LessonLogicCircuitsContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">memory</span>
            </span>
            Circuite Logice Elementare
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            În inima oricărui calculator se află procesorul (CPU), care este format din miliarde de tranzistoare. Aceste tranzistoare sunt grupate pentru a forma <strong>porți logice (circuite logice elementare)</strong>, care efectuează operații de bază folosind doar 0 și 1 (fals și adevărat).
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Aceste circuite implementează fizic operațiile algebrei booleene pe care le-am învățat la expresiile logice din C++.
          </p>
        </div>
      </section>

      {/* Portile Fundamentale */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">cable</span>
            </span>
            1. Cele 3 Porți Logice Elementare
          </h2>

          <div className="space-y-6">
            {/* Poarta AND */}
            <div className="border border-indigo-200 dark:border-indigo-800/50 p-6 rounded-lg bg-indigo-50/30 dark:bg-indigo-900/10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-indigo-700 dark:text-indigo-400 font-bold text-xl mb-2">Poarta ȘI (AND)</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    Echivalentă cu operatorul <code>&&</code> în C++ sau înmulțirea logică. Ieșirea este 1 DOAR DACĂ toate intrările sunt 1. Dacă măcar o intrare e 0, ieșirea e 0.
                  </p>
                </div>
                <div className="bg-white dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 min-w-[200px]">
                  <h4 className="font-bold text-xs text-gray-500 uppercase text-center mb-2">Tabel de adevăr</h4>
                  <table className="w-full text-center text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="py-1">A</th><th className="py-1">B</th><th className="py-1 text-indigo-600 dark:text-indigo-400">Y</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>0</td><td>0</td><td className="font-bold">0</td></tr>
                      <tr><td>0</td><td>1</td><td className="font-bold">0</td></tr>
                      <tr><td>1</td><td>0</td><td className="font-bold">0</td></tr>
                      <tr><td>1</td><td>1</td><td className="font-bold text-indigo-600 dark:text-indigo-400">1</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Poarta OR */}
            <div className="border border-green-200 dark:border-green-800/50 p-6 rounded-lg bg-green-50/30 dark:bg-green-900/10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-green-700 dark:text-green-400 font-bold text-xl mb-2">Poarta SAU (OR)</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    Echivalentă cu operatorul <code>||</code> în C++ sau adunarea logică. Ieșirea este 1 dacă CEL PUȚIN O intrare este 1. Ieșirea e 0 doar când toate intrările sunt 0.
                  </p>
                </div>
                <div className="bg-white dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 min-w-[200px]">
                  <h4 className="font-bold text-xs text-gray-500 uppercase text-center mb-2">Tabel de adevăr</h4>
                  <table className="w-full text-center text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="py-1">A</th><th className="py-1">B</th><th className="py-1 text-green-600 dark:text-green-400">Y</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>0</td><td>0</td><td className="font-bold">0</td></tr>
                      <tr><td>0</td><td>1</td><td className="font-bold text-green-600 dark:text-green-400">1</td></tr>
                      <tr><td>1</td><td>0</td><td className="font-bold text-green-600 dark:text-green-400">1</td></tr>
                      <tr><td>1</td><td>1</td><td className="font-bold text-green-600 dark:text-green-400">1</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Poarta NOT */}
            <div className="border border-red-200 dark:border-red-800/50 p-6 rounded-lg bg-red-50/30 dark:bg-red-900/10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-red-700 dark:text-red-400 font-bold text-xl mb-2">Poarta NU (NOT / Inversor)</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    Echivalentă cu operatorul <code>!</code> în C++ sau negația logică. Această poartă are o singură intrare și inversează valoarea: din 0 face 1, iar din 1 face 0.
                  </p>
                </div>
                <div className="bg-white dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 min-w-[200px]">
                  <h4 className="font-bold text-xs text-gray-500 uppercase text-center mb-2">Tabel de adevăr</h4>
                  <table className="w-full text-center text-sm mx-auto w-3/4">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="py-1">A</th><th className="py-1 text-red-600 dark:text-red-400">Y</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>0</td><td className="font-bold text-red-600 dark:text-red-400">1</td></tr>
                      <tr><td>1</td><td className="font-bold">0</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clasificarea Circuitelor */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">account_tree</span>
            </span>
            2. Clasificarea Circuitelor Logice
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Porțile logice elementare pot fi interconectate pentru a forma structuri mult mai complexe care pot efectua adunări, reține date (memorie) etc. Aceste rețele se împart în două mari categorii:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-purple-200 dark:border-purple-800/50 p-6 rounded-lg bg-purple-50/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-icons-outlined text-purple-600 dark:text-purple-400">linear_scale</span>
                <h3 className="text-purple-700 dark:text-purple-400 font-bold">A. Circuite Combinaționale</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>Ieșirea depinde strict de starea intrărilor în momentul actual.</li>
                <li><strong>Nu au memorie!</strong> Nu își aduc aminte ce valori au fost înainte la intrare.</li>
                <li>Exemple: <strong>Sumatorul</strong> (adună două numere binare), decodificatorul, multiplexorul.</li>
              </ul>
            </div>

            <div className="border border-orange-200 dark:border-orange-800/50 p-6 rounded-lg bg-orange-50/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-icons-outlined text-orange-600 dark:text-orange-400">history</span>
                <h3 className="text-orange-700 dark:text-orange-400 font-bold">B. Circuite Secvențiale</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>Ieșirea depinde atât de starea intrărilor, cât și de <strong>starea lor anterioară</strong>.</li>
                <li><strong>Au memorie!</strong> Conțin elemente capabile să stocheze informație (0 sau 1).</li>
                <li>Exemple: <strong>Bistabilele (Flip-Flops)</strong>, registrele de memorie, numărătoarele.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Circuite Combinationale Frecvente */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">merge_type</span>
            </span>
            3. Circuite Combinaționale Frecvent Utilizate
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Acestea sunt "cărămizile" din care este construită unitatea aritmetico-logică (ALU) a procesorului. Nu au memorie.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="border border-indigo-200 dark:border-indigo-800/50 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold mb-2">Sumatorul (Adder)</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Efectuează adunarea aritmetică a numerelor binare. Un <strong>Semi-sumator (Half-Adder)</strong> adună doi biți (generând o sumă și un "transport"/carry), în timp ce un <strong>Sumator complet (Full-Adder)</strong> ține cont și de transportul de la rangul anterior.
              </p>
            </div>
            <div className="border border-indigo-200 dark:border-indigo-800/50 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold mb-2">Comparatorul</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Compară două cuvinte binare (A și B) și activează una dintre cele 3 ieșiri posibile: <code>A &gt; B</code>, <code>A = B</code> sau <code>A &lt; B</code>. Foarte util pentru luarea deciziilor (echivalentul unui <code>if</code> hardware).
              </p>
            </div>
            <div className="border border-indigo-200 dark:border-indigo-800/50 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold mb-2">Multiplexorul (MUX)</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Are mai multe linii de intrare pentru date, o singură linie de ieșire și câteva linii de selecție. Funcționează ca un "macaz": selectează o singură intrare pe care o trimite mai departe spre ieșire.
              </p>
            </div>
            <div className="border border-indigo-200 dark:border-indigo-800/50 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold mb-2">Decodificatorul</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Convertește o informație binară de la intrare (ex: n biți) într-un semnal pe una dintre cele 2<sup>n</sup> ieșiri posibile. Este esențial pentru selectarea adreselor de memorie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Circuite Secventiale Frecvente */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">update</span>
            </span>
            4. Circuite Secvențiale Frecvent Utilizate
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Acestea includ un semnal de ceas (clock) și au stări interne (memorie). Funcționarea lor se bazează pe succesiunea pașilor de timp.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-teal-200 dark:border-teal-800/50 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-teal-600 dark:text-teal-400 font-bold mb-2">Bistabilele (Flip-Flops)</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Sunt unitățile fundamentale de memorie. Un bistabil poate memora <strong>exact un bit</strong> de informație (0 sau 1) și își menține starea până la primirea unui nou impuls de comandă. 
              </p>
              <p className="text-xs text-gray-500 italic">Tipuri comune: RS, D (Data), JK, T (Toggle).</p>
            </div>
            
            <div className="border border-teal-200 dark:border-teal-800/50 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep md:col-span-2">
              <h3 className="text-teal-600 dark:text-teal-400 font-bold mb-3">Registre de Deplasare (Shift Registers)</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Un registru este un grup de bistabile (memorie). Un <strong>registru de deplasare</strong> nu doar memorează, ci la fiecare impuls de ceas își deplasează ("shiftează") conținutul cu o poziție:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-navy-surface p-3 rounded border border-gray-200 dark:border-gray-700">
                  <strong className="text-teal-700 dark:text-teal-400 text-sm">Deplasare Dreapta → Stânga (Shift Left)</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 mt-1">Biții se mută spre stânga. Matematic, este echivalent cu <strong>înmulțirea cu 2</strong> a numărului binar.</p>
                  <code className="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-1 block">
                    Initial: 0011 (3 în zecimal)<br/>
                    1 Pas: &nbsp;&nbsp;0110 (6 în zecimal)
                  </code>
                </div>
                <div className="bg-white dark:bg-navy-surface p-3 rounded border border-gray-200 dark:border-gray-700">
                  <strong className="text-teal-700 dark:text-teal-400 text-sm">Deplasare Stânga → Dreapta (Shift Right)</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 mt-1">Biții se mută spre dreapta. Matematic, este echivalent cu <strong>împărțirea la 2</strong> (partea întreagă).</p>
                  <code className="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-1 block">
                    Initial: 1100 (12 în zecimal)<br/>
                    1 Pas: &nbsp;&nbsp;0110 (6 în zecimal)
                  </code>
                </div>
              </div>
            </div>

            <div className="border border-teal-200 dark:border-teal-800/50 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep md:col-span-2">
              <h3 className="text-teal-600 dark:text-teal-400 font-bold mb-3">Numărătorul Binar Direct (Up-Counter)</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Este un circuit secvențial care numără impulsurile de ceas primite la intrare, generând secvența de numere binare în ordine crescătoare. Este folosit masiv în ceasuri digitale, temporizatoare sau pentru parcurgerea adreselor de memorie.
              </p>
              <div className="bg-white dark:bg-navy-surface p-3 rounded border border-gray-200 dark:border-gray-700 overflow-x-auto">
                <strong className="text-teal-700 dark:text-teal-400 text-sm block mb-2">Exemplu: Numărător Binar pe 3 biți (numără de la 0 la 7)</strong>
                <table className="w-full text-center text-xs">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="p-1">Impuls Ceas</th>
                      <th className="p-1">Q2</th>
                      <th className="p-1">Q1</th>
                      <th className="p-1">Q0</th>
                      <th className="p-1 text-gray-500">Valoare Zecimală</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    <tr><td>Start</td><td>0</td><td>0</td><td>0</td><td className="text-gray-500">0</td></tr>
                    <tr><td>Pasul 1</td><td>0</td><td>0</td><td>1</td><td className="text-gray-500">1</td></tr>
                    <tr><td>Pasul 2</td><td>0</td><td>1</td><td>0</td><td className="text-gray-500">2</td></tr>
                    <tr><td>Pasul 3</td><td>0</td><td>1</td><td>1</td><td className="text-gray-500">3</td></tr>
                    <tr><td colSpan={5} className="text-gray-400 text-center">...</td></tr>
                    <tr><td>Pasul 7</td><td>1</td><td>1</td><td>1</td><td className="text-gray-500">7 (Maxim)</td></tr>
                    <tr className="bg-red-50 dark:bg-red-900/10"><td>Pasul 8</td><td>0</td><td>0</td><td>0</td><td className="text-gray-500">0 (Se resetează)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Observation / Warning */}
      <section>
        <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-500 p-6 rounded-r-lg shadow-sm">
          <h3 className="text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wide mb-2 flex items-center gap-2">
            <span className="material-icons-outlined">info</span>
            Ce trebuie reținut pentru examen?
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li>
              Legătura dintre operațiile logice (ȘI, SAU, NU) și programarea în C++ (<code>&&</code>, <code>||</code>, <code>!</code>) este directă. Când scrieți un <code>if (a &gt; 0 && b &gt; 0)</code>, în procesor această decizie trece fizic printr-un circuit AND.
            </li>
            <li>
              Diferența cheie: <strong>Circuitele combinaționale NU au memorie</strong>, iar <strong>cele secvențiale AU memorie</strong>. Aceasta este o întrebare de teorie clasică.
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
