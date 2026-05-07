import { Button } from "@/components/ui/button";

export function LessonStringsContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">text_fields</span>
            </span>
            Șiruri de Caractere
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            În C++, un <strong>șir de caractere</strong> (string) este folosit pentru a stoca text (cuvinte, propoziții). Există două modalități principale de a lucra cu text în C++: folosind <strong>tablouri de caractere</strong> (stilul limbajului C, bazat pe <code>char[]</code> terminat cu <code>\0</code>) și folosind clasa modernă <code>std::string</code>.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            La examene precum Bacalaureatul, ambele variante sunt adesea acceptate, însă cunoașterea funcțiilor din biblioteca <code>&lt;cstring&gt;</code> pentru tablourile clasice este esențială.
          </p>
        </div>
      </section>

      {/* Stil C vs C++ */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">code</span>
            </span>
            1. Șiruri clasice (char[]) vs std::string
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Stilul clasic C (char array)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Un vector de tip <code>char</code>. <strong>Atenție:</strong> Ultimul caracter stocat este mereu terminatorul de șir <code>{`'\\0'`}</code> (NULL).
              </p>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">char</span> s[101]; <span className="text-gray-500">{"// Maxim 100 caractere + '\\0'"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">char</span> nume[] = <span className="text-green-600">"Ion"</span>; <span className="text-gray-500">{"// Dimensiune 4 ('I', 'o', 'n', '\\0')"}</span>
              </code>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Stilul modern (std::string)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Necesită <code>#include &lt;string&gt;</code>. Își gestionează singur memoria și este mult mai sigur și ușor de utilizat.
              </p>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">string</span> s; <span className="text-gray-500">{"// Șir gol"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">string</span> nume = <span className="text-green-600">"Ion"</span>;
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Citire */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">input</span>
            </span>
            2. Citirea de la tastatură
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Citirea unui text care conține <strong>spații</strong> necesită o atenție deosebită, deoarece operatorul standard <code>cin &gt;&gt;</code> se oprește la primul spațiu alb întâlnit.
          </p>

          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Citim un singur cuvânt (fără spații)</h3>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">char</span> cuvant[50];<br />
                cin &gt;&gt; cuvant; <span className="text-gray-500">{"// Dacă scriem 'Salut Lume', va citi doar 'Salut'"}</span>
              </code>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Citim o linie întreagă (cu spații) pentru char[]</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Folosim metoda <code>cin.get()</code> sau <code>cin.getline()</code>.</p>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">char</span> propozitie[100];<br />
                <span className="text-gray-500">{"// Citeste maxim 99 caractere pana la '\\n' (Enter)"}</span><br />
                cin.getline(propozitie, 100); 
              </code>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Citim o linie întreagă (cu spații) pentru std::string</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Folosim funcția globală <code>getline(cin, s)</code>.</p>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">string</span> propozitie;<br />
                getline(cin, propozitie); 
              </code>
            </div>
          </div>
        </div>
      </section>
      
      {/* Functii din cstring */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">build</span>
            </span>
            3. Funcții esențiale din &lt;cstring&gt;
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Pentru a manipula tablourile de caractere (<code>char[]</code>), se includ funcțiile din biblioteca <code>#include &lt;cstring&gt;</code>. Iată cele mai importante 4 funcții pentru Bacalaureat:
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 mb-6 font-mono text-sm">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
              <thead className="bg-indigo-50 dark:bg-indigo-900/50">
                <tr>
                  <th className="px-4 py-3 text-left border-r border-gray-200 dark:border-gray-800 text-indigo-700 dark:text-indigo-300">Funcție</th>
                  <th className="px-4 py-3 text-left text-indigo-700 dark:text-indigo-300">Descriere și Exemplu</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-navy-surface divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800 font-bold text-indigo-600 dark:text-indigo-400">strlen(s)</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    Returnează <strong>lungimea</strong> șirului (numărul de caractere), fără a număra și terminatorul <code>\0</code>.<br/>
                    <code className="text-xs bg-gray-100 dark:bg-gray-800 p-1 rounded mt-1 inline-block">int len = strlen("Salut"); // len va fi 5</code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800 font-bold text-indigo-600 dark:text-indigo-400">strcpy(dest, sursa)</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Copiază</strong> șirul <code>sursa</code> în șirul <code>dest</code> (suprascriind conținutul vechi).<br/>
                    <code className="text-xs bg-gray-100 dark:bg-gray-800 p-1 rounded mt-1 inline-block">char a[20]; strcpy(a, "Test"); // a devine "Test"</code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800 font-bold text-indigo-600 dark:text-indigo-400">strcat(dest, sursa)</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Alătură (concatenează)</strong> șirul <code>sursa</code> la sfârșitul șirului <code>dest</code>.<br/>
                    <code className="text-xs bg-gray-100 dark:bg-gray-800 p-1 rounded mt-1 inline-block">char a[20]="Buna"; strcat(a, " Ziua"); // a devine "Buna Ziua"</code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-gray-200 dark:border-gray-800 font-bold text-indigo-600 dark:text-indigo-400">strcmp(s1, s2)</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Compară lexicografic (alfabetic)</strong> două șiruri. Returnează:<br/>
                    • <code>0</code> dacă șirurile sunt egale<br/>
                    • <code>&lt; 0</code> dacă s1 &lt; s2 alfabetic<br/>
                    • <code>&gt; 0</code> dacă s1 &gt; s2 alfabetic<br/>
                    <code className="text-xs bg-gray-100 dark:bg-gray-800 p-1 rounded mt-1 inline-block">if(strcmp(a, b) == 0) // ...</code>
                  </td>
                </tr>
              </tbody>
            </table>
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
              <strong>Atribuirea directă e interzisă pentru char[]:</strong> Nu poți face <code>s1 = s2;</code> sau <code>s1 = "Ceva";</code> (doar la inițializare pe aceeași linie cu declararea). Pentru a schimba valoarea unui `char[]` ulterior, <strong>trebuie</strong> să folosești <code>strcpy(s1, "Ceva");</code>. Erorile de genul "Array type is not assignable" sunt dese.
            </li>
            <li>
              <strong>Eroarea <code>cin.get()</code> lăsat în buffer:</strong> Dacă citești un număr (<code>cin &gt;&gt; n;</code>) și imediat după aceea citești un șir cu <code>cin.getline(s, 100);</code>, funcția getline va citi caracterul "Enter" rămas de la număr și șirul va fi gol. Pune mereu un <code>cin.get();</code> între citirea numărului și a șirului pentru a consuma Enter-ul.
            </li>
            <li>
              <strong>Terminatorul de șir:</strong> Pentru a elimina ultimul caracter dintr-un `char s[100]`, ajunge să pui terminatorul cu o poziție mai la stânga: <code>s[strlen(s)-1] = '\0';</code>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
