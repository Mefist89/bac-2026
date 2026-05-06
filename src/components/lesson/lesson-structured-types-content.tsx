import { Button } from "@/components/ui/button";

export function LessonStructuredTypesContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">account_tree</span>
            </span>
            Introducere
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Spre deosebire de tipurile de date simple (care pot memora o singură valoare la un moment dat),{" "}
            <strong>tipurile de date structurate</strong> permit stocarea și manipularea unor colecții de date, adesea de același tip, sub un singur nume. Acestea sunt fundamentale pentru organizarea eficientă a informațiilor în probleme complexe.
          </p>
        </div>
      </section>

      {/* Vectori */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">data_array</span>
            </span>
            1. Tablouri unidimensionale (Vectori)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Un vector este o structură de date liniară care memorează o secvență de elemente de <strong>același tip</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-primary mb-6">
            <li>
              <strong className="text-gray-900 dark:text-gray-200">
                Declarare:
              </strong>{" "}
              <code>tip_date nume_vector[dimensiune_maxima];</code>
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-200">
                Indexare:
              </strong>{" "}
              Accesarea elementelor se face prin indici, de la <code>0</code> până la <code>dimensiune - 1</code>.
            </li>
          </ul>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200 mb-6">
            <code>
              int v[100]; <span className="text-gray-500">{"// Vector de maxim 100 de numere întregi"}</span>
              <br />
              v[0] = 15;  <span className="text-gray-500">{"// Atribuire valoare primului element"}</span>
            </code>
          </div>
        </div>
      </section>

      {/* Matrice */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">grid_on</span>
            </span>
            2. Tablouri bidimensionale (Matrice)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            O matrice este un tablou cu două dimensiuni (linii și coloane). Poate fi privită ca un "vector de vectori".
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-primary mb-6">
            <li>
              <strong className="text-gray-900 dark:text-gray-200">
                Declarare:
              </strong>{" "}
              <code>tip_date nume_matrice[numar_linii][numar_coloane];</code>
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-200">
                Indexare:
              </strong>{" "}
              Specificând indicele liniei și indicele coloanei.
            </li>
          </ul>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
            <code>
              int a[50][50]; <span className="text-gray-500">{"// Matrice cu max 50 linii și 50 coloane"}</span>
              <br />
              a[2][3] = 7;   <span className="text-gray-500">{"// Elementul de pe linia 2, coloana 3"}</span>
            </code>
          </div>
        </div>
      </section>

      {/* Strings */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">sort_by_alpha</span>
            </span>
            3. Șiruri de caractere
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Sunt tablouri unidimensionale în care fiecare element este de tip <code>char</code>. Un șir se termină mereu cu caracterul nul <code>&apos;\0&apos;</code>.
          </p>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-200 mb-6 border border-gray-200 dark:border-gray-700">
            <code>char s[256] = "Salut"; <span className="text-gray-500">{"// 'S', 'a', 'l', 'u', 't', '\\0'"}</span></code>
          </div>

          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 p-1.5 rounded-lg mr-2">
              <span className="material-icons-outlined text-sm">functions</span>
            </span>
            Funcții predefinite (biblioteca &lt;cstring&gt;)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <code className="text-primary font-bold block mb-1">strlen(s)</code>
              <p className="text-sm text-gray-600 dark:text-gray-400">Returnează numărul de caractere (fără <code>&apos;\0&apos;</code>).</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <code className="text-primary font-bold block mb-1">strcpy(dest, src)</code>
              <p className="text-sm text-gray-600 dark:text-gray-400">Copiază șirul <code>src</code> în <code>dest</code>.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <code className="text-primary font-bold block mb-1">strcat(dest, src)</code>
              <p className="text-sm text-gray-600 dark:text-gray-400">Concatenează <code>src</code> la finalul lui <code>dest</code>.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <code className="text-primary font-bold block mb-1">strcmp(s1, s2)</code>
              <p className="text-sm text-gray-600 dark:text-gray-400">Compară lexicografic (0 dacă sunt egale, &lt;0 sau &gt;0 altfel).</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <code className="text-primary font-bold block mb-1">strchr(s, ch)</code>
              <p className="text-sm text-gray-600 dark:text-gray-400">Caută prima apariție a caracterului <code>ch</code> în <code>s</code>.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <code className="text-primary font-bold block mb-1">strstr(s1, s2)</code>
              <p className="text-sm text-gray-600 dark:text-gray-400">Caută prima apariție a șirului <code>s2</code> în <code>s1</code>.</p>
            </div>
          </div>

          {/* std::string */}
          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white flex items-center">
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 p-1.5 rounded-lg mr-2">
              <span className="material-icons-outlined text-sm">text_format</span>
            </span>
            Șiruri moderne (biblioteca &lt;string&gt;)
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            În C++ modern se recomandă utilizarea tipului <code>std::string</code>. Acesta gestionează automat memoria și oferă operatori intutivi pentru manipulare.
          </p>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
            <code>
              #include &lt;string&gt;<br /><br />
              string s1 = "Salut";<br />
              string s2 = " Lume";<br />
              string s3 = s1 + s2; <span className="text-gray-500">{"// Concatenare: s3 devine \"Salut Lume\""}</span><br /><br />
              if (s1 == "Salut") &#123;<br />
              &nbsp;&nbsp;<span className="text-gray-500">{"// Compararea se face direct cu operatorul =="}</span><br />
              &#125;<br /><br />
              int lungime = s1.length(); <span className="text-gray-500">{"// Aflarea lungimii (sau s1.size())"}</span>
            </code>
          </div>

        </div>
      </section>

      {/* Struct */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">schema</span>
            </span>
            4. Structuri (struct)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Permite gruparea mai multor date de <strong>tipuri diferite</strong> sub un singur nume. Componentele se numesc <em>câmpuri</em> sau <em>membri</em>.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-primary mb-6">
            <li>
              <strong className="text-gray-900 dark:text-gray-200">Declarare:</strong> Se folosește cuvântul cheie <code>struct</code>.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-200">Accesare:</strong> Câmpurile se accesează prin operatorul punct (<code>.</code>).
            </li>
          </ul>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
            <code>
              struct Elev &#123;<br />
              &nbsp;&nbsp;char nume[50];<br />
              &nbsp;&nbsp;int varsta;<br />
              &nbsp;&nbsp;float medie;<br />
              &#125;;<br /><br />
              Elev e1;<br />
              e1.medie = 9.50; <span className="text-gray-500">{"// Accesarea câmpului medie"}</span>
            </code>
          </div>
        </div>
      </section>

    </div>
  );
}
