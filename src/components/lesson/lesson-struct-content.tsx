import { Button } from "@/components/ui/button";

export function LessonStructContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">data_object</span>
            </span>
            Structuri de Date Neomogene (Tipul Articol / struct)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Până acum, am învățat despre vectori și matrice, care sunt structuri de date <strong>omogene</strong> (toate elementele au același tip, ex: doar <code>int</code>). Dar ce facem dacă vrem să grupăm date de tipuri <em>diferite</em> care aparțin aceleiași entități logic? (de exemplu, un "Elev" care are un "nume" de tip șir de caractere și o "medie" de tip real).
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Aici intervine tipul <strong>articol</strong> (cunoscut în C/C++ drept <code>struct</code>). O structură grupează mai multe variabile de tipuri diferite sub un singur nume. Componentele structurii se numesc <strong>câmpuri</strong> (sau membri).
          </p>
        </div>
      </section>

      {/* Definire și Declarare */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">design_services</span>
            </span>
            1. Definirea tipului și Declararea variabilelor
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Definirea unui tip nou (struct)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Definirea se face de obicei global, deasupra funcției <code>main()</code>. Cuvântul cheie este <code>struct</code>, urmat de numele noului tip și blocurile de câmpuri între acolade. <strong>Obligatoriu</strong> se pune <code>;</code> la finalul acoladei!
              </p>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">struct</span> <span className="text-purple-600 dark:text-purple-400">Elev</span> {"{"}<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">char</span> nume[50];<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">int</span> varsta;<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">float</span> medie;<br />
                {"}"}; <span className="text-red-500 font-bold">{"// Nu uita punctul și virgula!"}</span>
              </code>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Declararea variabilelor</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Odată definit tipul <code>Elev</code>, îl putem folosi ca pe orice alt tip de date standard (cum ar fi <code>int</code>).
              </p>
              <code>
                <span className="text-gray-500">{"// Declarăm o singură variabilă de tip Elev"}</span><br />
                <span className="text-purple-600 dark:text-purple-400">Elev</span> e1, e2;<br /><br />
                <span className="text-gray-500">{"// Putem declara și un VECTOR de structuri (foarte util la Bac!)"}</span><br />
                <span className="text-purple-600 dark:text-purple-400">Elev</span> clasa[30]; <span className="text-gray-500">{"// Un vector cu 30 de elevi"}</span>
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Accesarea Câmpurilor */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">ads_click</span>
            </span>
            2. Accesarea câmpurilor (Operatorul punct)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Pentru a citi, modifica sau afișa un câmp specific dintr-o structură, folosim <strong>operatorul punct (<code>.</code>)</strong>: <code>nume_variabila.nume_camp</code>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Variabilă simplă</h3>
              <code>
                <span className="text-purple-600 dark:text-purple-400">Elev</span> e1;<br /><br />
                <span className="text-gray-500">{"// Atribuire valori"}</span><br />
                e1.varsta = 18;<br />
                e1.medie = 9.50;<br />
                strcpy(e1.nume, <span className="text-green-600">"Popescu Ion"</span>);<br /><br />
                <span className="text-gray-500">{"// Citire de la tastatură"}</span><br />
                cin &gt;&gt; e1.varsta;<br />
                cin.get();<br />
                cin.getline(e1.nume, 50);
              </code>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Vector de structuri</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Pentru vectori, precizăm mai întâi indexul din vector, apoi folosim punctul pentru câmp: <code>v[i].camp</code>
              </p>
              <code>
                <span className="text-purple-600 dark:text-purple-400">Elev</span> clasa[30];<br /><br />
                <span className="text-gray-500">{"// Accesăm media primului elev"}</span><br />
                clasa[0].medie = 10;<br /><br />
                <span className="text-gray-500">{"// Afișăm vârsta elevului de pe poziția i"}</span><br />
                cout &lt;&lt; clasa[i].varsta;
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
            3. Exemplu practic: Găsirea elevului cu media maximă
          </h2>
          
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
            <code>
              <span className="text-indigo-600 dark:text-indigo-400">int</span> n;<br />
              <span className="text-purple-600 dark:text-purple-400">Elev</span> clasa[100];<br />
              cin &gt;&gt; n;<br />
              <span className="text-gray-500">{"// Citirea datelor (simplificată)"}</span><br />
              <span className="text-indigo-600 dark:text-indigo-400">for</span>(<span className="text-indigo-600 dark:text-indigo-400">int</span> i=0; i&lt;n; i++) {"{"}<br />
              &nbsp;&nbsp;cin &gt;&gt; clasa[i].nume &gt;&gt; clasa[i].medie;<br />
              {"}"}<br /><br />
              
              <span className="text-gray-500">{"// Căutarea maximului"}</span><br />
              <span className="text-indigo-600 dark:text-indigo-400">float</span> max_medie = clasa[0].medie;<br />
              <span className="text-indigo-600 dark:text-indigo-400">int</span> poz_max = 0;<br /><br />
              
              <span className="text-indigo-600 dark:text-indigo-400">for</span>(<span className="text-indigo-600 dark:text-indigo-400">int</span> i=1; i&lt;n; i++) {"{"}<br />
              &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">if</span>(clasa[i].medie &gt; max_medie) {"{"}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;max_medie = clasa[i].medie;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;poz_max = i; <span className="text-gray-500">{"// Reținem poziția elevului eminent"}</span><br />
              &nbsp;&nbsp;{"}"}<br />
              {"}"}<br /><br />
              
              cout &lt;&lt; <span className="text-green-600">"Cel mai bun elev este "</span> &lt;&lt; clasa[poz_max].nume &lt;&lt; <span className="text-green-600">" cu media "</span> &lt;&lt; max_medie;
            </code>
          </div>
        </div>
      </section>

      {/* Observation / Warning */}
      <section>
        <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-500 p-6 rounded-r-lg shadow-sm">
          <h3 className="text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wide mb-2 flex items-center gap-2">
            <span className="material-icons-outlined">warning</span>
            Subiectul 2, Exercițiul 1 la Bacalaureat
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li>
              Tipul de date <code>struct</code> apare <strong>garantat</strong> la Subiectul II, Exercițiul 1 (varianta pe variante). 
              De obicei cerința sună așa: "Scrieți o secvență de instrucțiuni pentru a accesa și modifica..." sau "Ce se va afișa în urma executării secvenței?".
            </li>
            <li>
              <strong>Atribuirea directă între structuri:</strong> Spre deosebire de tablouri, structurile de <strong>același tip</strong> pot fi atribuite direct cu operatorul <code>=</code>.<br/>
              <code>e1 = e2; <span className="text-gray-500">// Copiază automat TOATE câmpurile din e2 în e1</span></code>
            </li>
            <li>
              <strong>Structuri imbricate:</strong> Un câmp al unei structuri poate fi de tipul altei structuri! De exemplu, structura <code>Elev</code> ar putea avea un câmp <code>data_nasterii</code> de tipul <code>Data</code>. În acest caz vom folosi operatorul punct de două ori: <code>e1.data_nasterii.an</code>.
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
