import { Button } from "@/components/ui/button";

export function LessonWhileContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">all_inclusive</span>
            </span>
            Instrucțiunea repetitivă WHILE
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Instrucțiunea <strong>while</strong> este o structură repetitivă cu test inițial. Este folosită atunci când numărul de repetări <strong>nu este cunoscut de la bun început</strong>, dar știm condiția care trebuie îndeplinită pentru ca repetiția să continue.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Se mai numește și ciclu condiționat anterior (sau cu test inițial), deoarece condiția este evaluată <strong>înainte</strong> de executarea blocului de instrucțiuni. Dacă de la bun început condiția este falsă, instrucțiunile nu se vor executa <strong>niciodată</strong>.
          </p>
        </div>
      </section>

      {/* Sintaxa */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">code</span>
            </span>
            1. Sintaxa de bază
          </h2>
          
          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200 mb-6">
            <code>
              <span className="text-indigo-600 dark:text-indigo-400">while</span> (condiție) {"{"}<br />
              &nbsp;&nbsp;<span className="text-gray-500">{"// instrucțiuni care se repetă CÂT TIMP condiția este ADEVĂRATĂ"}</span><br />
              {"}"}
            </code>
          </div>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
            <span className="text-gray-500 block mb-2">{"// Exemplu: Numărarea cifrelor unui număr (Extragerea cifrelor)"}</span>
            <code>
              <span className="text-indigo-600 dark:text-indigo-400">int</span> n = 1234;<br />
              <span className="text-indigo-600 dark:text-indigo-400">int</span> nrCifre = 0;<br /><br />
              <span className="text-indigo-600 dark:text-indigo-400">while</span> (n &gt; 0) {"{"}<br />
              &nbsp;&nbsp;<span className="text-gray-500">{"// int ultimaCifra = n % 10; // Dacă aveam nevoie de cifră"}</span><br />
              &nbsp;&nbsp;nrCifre++;<br />
              &nbsp;&nbsp;n = n / 10; <span className="text-gray-500">{"// Eliminăm ultima cifră (foarte important pentru a nu intra în buclă infinită)"}</span><br />
              {"}"}<br />
              cout &lt;&lt; <span className="text-green-600">"Numărul are "</span> &lt;&lt; nrCifre &lt;&lt; <span className="text-green-600">" cifre."</span>;
            </code>
          </div>
        </div>
      </section>

      {/* Algoritmi clasici cu WHILE */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">psychology</span>
            </span>
            2. Algoritmi clasici la Bacalaureat
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Instrucțiunea <code>while</code> este fundamentală pentru subiectele de Bacalaureat. Iată cele mai întâlnite două utilizări:
          </p>
          
          <div className="space-y-6">
            {/* Oglinditul */}
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">1. Oglinditul (inversul) unui număr</h3>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">int</span> n = 1234;<br />
                <span className="text-indigo-600 dark:text-indigo-400">int</span> oglindit = 0;<br />
                <span className="text-indigo-600 dark:text-indigo-400">while</span> (n != 0) {"{"}<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">int</span> c = n % 10; <span className="text-gray-500">{"// extragem ultima cifră"}</span><br />
                &nbsp;&nbsp;oglindit = oglindit * 10 + c; <span className="text-gray-500">{"// o adăugăm la oglindit"}</span><br />
                &nbsp;&nbsp;n = n / 10; <span className="text-gray-500">{"// tăiem cifra din n"}</span><br />
                {"}"}<br />
                <span className="text-gray-500">{"// la final oglindit va fi 4321"}</span>
              </code>
            </div>

            {/* CMMDC */}
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">2. C.M.M.D.C. prin scăderi repetate (Algoritmul lui Euclid)</h3>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">int</span> a = 12, b = 18;<br />
                <span className="text-indigo-600 dark:text-indigo-400">while</span> (a != b) {"{"}<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">if</span> (a &gt; b)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;a = a - b;<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">else</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;b = b - a;<br />
                {"}"}<br />
                <span className="text-gray-500">{"// la final 'a' (sau 'b') conține CMMDC-ul (care e 6)"}</span>
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
            Capcană la Bacalaureat
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li>
              <strong>Bucla Infinită:</strong> Când variabila folosită în condiția din <code>while</code> nu se modifică în interiorul blocului, ciclul nu se va termina niciodată. Asigură-te mereu că avansezi starea (ex: <code>n = n / 10</code>) în interiorul acoladelor!
            </li>
            <li>
              <strong>Cazul lui zero:</strong> Pentru extragerea cifrelor, dacă folosești <code>while(n &gt; 0)</code> și numărul inițial este efectiv <code>0</code>, bucla nu se execută deloc, iar dacă trebuia să obții cifra 0, algoritmul ar putea pica testul. E bine să tratezi numărul <code>0</code> separat sau să folosești structura <code>do-while</code> în anumite cazuri.
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
