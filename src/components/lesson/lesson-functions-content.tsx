import { Button } from "@/components/ui/button";

export function LessonFunctionsContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">functions</span>
            </span>
            Funcții (Subprograme). Componente și Funcții fără tip (void)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            În programare, o <strong>funcție</strong> (sau subprogram) este un bloc de cod reutilizabil, proiectat să îndeplinească o singură sarcină specifică. Când avem un program complex (cum ar fi la Subiectul III de la Bacalaureat), este mult mai eficient să-l împărțim în funcții mai mici.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Folosind funcții, evităm scrierea repetată a aceluiași cod, facem programul mai ușor de citit, de înțeles și de depanat (găsit erori).
          </p>
        </div>
      </section>

      {/* Componentele unei functii */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">view_in_ar</span>
            </span>
            1. Componentele unei Funcții (Antetul / Semnătura)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Orice funcție este definită prin <strong>antetul</strong> ei (prima linie) și <strong>corpul</strong> ei (instrucțiunile dintre acolade). Antetul specifică exact cum comunică funcția cu restul programului.
          </p>

          <div className="bg-gray-50 dark:bg-navy-deep p-6 rounded-xl border border-gray-200 dark:border-gray-700 font-mono mb-6">
            <div className="text-center mb-4">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-500 pb-1">Tip_Returnat</span>
              <span className="mx-2 text-gray-400"> </span>
              <span className="text-green-600 dark:text-green-400 font-bold border-b-2 border-green-500 pb-1">Nume_Functie</span>
              <span className="text-gray-800 dark:text-gray-200">(</span>
              <span className="text-purple-600 dark:text-purple-400 font-bold border-b-2 border-purple-500 pb-1">Lista_Parametri</span>
              <span className="text-gray-800 dark:text-gray-200">) {"{"}</span>
            </div>
            <div className="text-center text-gray-500 italic mb-4">
              // Corpul funcției...
            </div>
            <div className="text-center text-gray-800 dark:text-gray-200">
              {"}"}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-indigo-200 dark:border-indigo-800/50 p-4 rounded-lg bg-indigo-50/30 dark:bg-indigo-900/10">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-bold mb-2">1. Tipul Returnat</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Specifică ce tip de dată "întoarce" funcția (ex: <code>int</code>, <code>float</code>, <code>bool</code>). Dacă funcția întoarce o valoare, <strong>trebuie</strong> să folosească instrucțiunea <code>return</code>.
              </p>
            </div>
            
            <div className="border border-green-200 dark:border-green-800/50 p-4 rounded-lg bg-green-50/30 dark:bg-green-900/10">
              <h3 className="text-green-600 dark:text-green-400 font-bold mb-2">2. Numele Funcției</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Este un identificator (asemănător cu numele variabilelor) folosit pentru a "apela" (chema) funcția din <code>main</code> sau din alte părți.
              </p>
            </div>
            
            <div className="border border-purple-200 dark:border-purple-800/50 p-4 rounded-lg bg-purple-50/30 dark:bg-purple-900/10">
              <h3 className="text-purple-600 dark:text-purple-400 font-bold mb-2">3. Parametrii</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                "Datele de intrare" ale funcției, separate prin virgulă. Fiecare parametru trebuie să aibă specificat tipul lui (ex: <code>int a, int b</code>).
              </p>
            </div>
          </div>

          <div className="mt-6 border-l-4 border-gray-400 p-4 bg-gray-100 dark:bg-gray-800/50 rounded-r-lg">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Exemplu de funcție cu tip (întoarce un rezultat):</h4>
            <code>
              <span className="text-gray-500">{"// Primește 2 numere întregi și returnează suma lor (tot un întreg)"}</span><br />
              <span className="text-indigo-600 dark:text-indigo-400">int</span> suma(<span className="text-indigo-600 dark:text-indigo-400">int</span> a, <span className="text-indigo-600 dark:text-indigo-400">int</span> b) {"{"}<br />
              &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">int</span> s = a + b;<br />
              &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400 font-bold">return</span> s; <span className="text-gray-500">{"// Valoarea 's' ia locul apelului funcției"}</span><br />
              {"}"}
            </code>
          </div>
        </div>
      </section>

      {/* Functii void */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">block</span>
            </span>
            2. Funcții fără tip (void)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Dacă o funcție nu trebuie să "întoarcă" nicio valoare către programul care a apelat-o (de exemplu, o funcție care doar afișează un mesaj pe ecran, sau care modifică vectori prin referință), ea se declară cu tipul special <strong><code>void</code></strong> ("gol" în engleză).
          </p>

          <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg bg-gray-50 dark:bg-navy-deep font-mono text-sm mb-6">
            <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Exemplu de funcție void (Afișează un divizor)</h3>
            <code>
              <span className="text-gray-500">{"// Tipul 'void' înseamnă că nu avem 'return valoare;' la final"}</span><br />
              <span className="text-red-600 dark:text-red-400 font-bold">void</span> afiseazaMesaj(<span className="text-indigo-600 dark:text-indigo-400">int</span> x) {"{"}<br />
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-green-600">"Numărul este: "</span> &lt;&lt; x &lt;&lt; endl;<br />
              &nbsp;&nbsp;<span className="text-gray-500">{"// Se poate folosi un 'return;' simplu (fără valoare) pentru a forța ieșirea din funcție, dar nu e obligatoriu la final."}</span><br />
              {"}"}
            </code>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
               <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">Cum apelăm o funcție CU tip (int, bool)</h4>
               <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Trebuie să capturăm rezultatul într-o variabilă sau să-l afișăm direct:</p>
               <code>
                 <span className="text-indigo-600 dark:text-indigo-400">int</span> x = suma(5, 3);<br />
                 cout &lt;&lt; suma(10, 20);
               </code>
             </div>
             <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
               <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Cum apelăm o funcție FĂRĂ tip (void)</h4>
               <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">O apelăm pur și simplu ca pe o instrucțiune de sine stătătoare. Nu îi putem atribui o valoare!</p>
               <code>
                 afiseazaMesaj(50); <span className="text-gray-500">{"// Corect"}</span><br />
                 <span className="line-through text-red-500">int x = afiseazaMesaj(50);</span> <span className="text-red-500 font-bold text-xs ml-1">{"// EROARE"}</span>
               </code>
             </div>
          </div>
        </div>
      </section>

      {/* Declaratii si Apeluri */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">integration_instructions</span>
            </span>
            3. Sintaxa declarațiilor (Prototipul) și a apelurilor
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-cyan-500 p-4 rounded-r-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-cyan-700 dark:text-cyan-400 font-bold mb-2">Declararea (Prototipul) vs Definiția</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                În C++, o funcție trebuie să fie "cunoscută" de compilator înainte de a fi apelată. Avem două variante:
              </p>
              <ul className="list-disc pl-5 mb-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li><strong>Varianta 1 (Cea mai simplă):</strong> Scriem <strong>definiția completă</strong> a funcției (cu tot cu acolade și cod) <em>deasupra</em> funcției <code>main()</code>.</li>
                <li><strong>Varianta 2 (Prototipul):</strong> Scriem doar <strong>declarația (prototipul)</strong> deasupra lui <code>main()</code>, urmată de punct și virgulă <code>;</code>. Apoi, scriem definiția completă <em>dedesubtul</em> lui <code>main()</code>. Aceasta este utilă când avem multe funcții.</li>
              </ul>
              <code>
                <span className="text-gray-500">{"// Prototipul (Declarația)"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">int</span> calculeazaProdus(<span className="text-indigo-600 dark:text-indigo-400">int</span> x, <span className="text-indigo-600 dark:text-indigo-400">int</span> y)<span className="text-red-500 font-bold">;</span><br /><br />
                
                <span className="text-indigo-600 dark:text-indigo-400">int</span> main() {"{"}<br />
                &nbsp;&nbsp;cout &lt;&lt; calculeazaProdus(5, 4); <span className="text-gray-500">{"// Apelul"}</span><br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">return</span> 0;<br />
                {"}"}<br /><br />
                
                <span className="text-gray-500">{"// Definiția completă"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">int</span> calculeazaProdus(<span className="text-indigo-600 dark:text-indigo-400">int</span> x, <span className="text-indigo-600 dark:text-indigo-400">int</span> y) {"{"}<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">return</span> x * y;<br />
                {"}"}
              </code>
            </div>

            <div className="border-l-4 border-blue-500 p-4 rounded-r-lg bg-gray-50 dark:bg-navy-deep">
              <h3 className="text-blue-700 dark:text-blue-400 font-bold mb-2">Apelul funcțiilor</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Apelul</strong> înseamnă momentul când funcția este executată. Sintaxa este <code>Nume_Functie(argument1, argument2)</code>. 
                <br/><strong>Atenție:</strong> La apel, transmitem <em>valori</em> (sau variabile), NU tipul lor! Nu scriem niciodată <code>calculeazaProdus(int 5, int 4)</code> la apel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Domenii de vizibilitate */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">visibility</span>
            </span>
            4. Domeniul de vizibilitate. Variabile Globale vs Locale
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Locul unde declari o variabilă determină unde poate fi ea "văzută" și folosită în program. Acesta se numește <strong>domeniu de vizibilitate (scope)</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-yellow-200 dark:border-yellow-800/50 p-4 rounded-lg bg-yellow-50/30 dark:bg-yellow-900/10">
              <h3 className="text-yellow-700 dark:text-yellow-400 font-bold mb-2">Variabile Locale</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Declarate <strong>în interiorul</strong> unei funcții (sau unui bloc de cod <code>{"{ ... }"}</code>). Ele "trăiesc" și pot fi folosite doar acolo. Când funcția se termină, variabilele locale sunt distruse.
              </p>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">void</span> test() {"{"}<br />
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">int</span> x = 5; <span className="text-gray-500">{"// Variabilă locală"}</span><br />
                {"}"}<br />
                <span className="text-gray-500">{"// Aici, 'x' NU există."}</span>
              </code>
            </div>

            <div className="border border-blue-200 dark:border-blue-800/50 p-4 rounded-lg bg-blue-50/30 dark:bg-blue-900/10">
              <h3 className="text-blue-700 dark:text-blue-400 font-bold mb-2">Variabile Globale</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Declarate <strong>în afara</strong> oricărei funcții (de obicei sus, sub <code>#include</code>). Ele pot fi văzute și modificate de <strong>orice</strong> funcție din program.
              </p>
              <code>
                <span className="text-indigo-600 dark:text-indigo-400">int</span> G = 10; <span className="text-gray-500">{"// Variabilă globală"}</span><br />
                <span className="text-indigo-600 dark:text-indigo-400">void</span> test() {"{"}<br />
                &nbsp;&nbsp;G++; <span className="text-gray-500">{"// Funcția 'vede' și modifică pe G"}</span><br />
                {"}"}
              </code>
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Comunicarea prin variabile globale și Efecte Colaterale</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Deși funcțiile comunică în mod normal prin parametri (la intrare) și prin <code>return</code> (la ieșire), ele pot comunica și <strong>modificând direct variabile globale</strong>. 
            Când o funcție modifică o variabilă globală, se spune că produce un <strong>efect colateral (side effect)</strong>. Această practică trebuie folosită cu prudență, deoarece face programul greu de urmărit, însă la Bacalaureat este des întâlnită (ex: modificarea unui vector global într-o funcție <code>void</code>).
          </p>
        </div>
      </section>

      {/* Recursivitatea */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">all_inclusive</span>
            </span>
            5. Recursivitatea (Introducere)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            O funcție se numește <strong>recursivă</strong> dacă, în timpul execuției ei, <strong>se autoapelează</strong> (se cheamă pe ea însăși). Recursivitatea este o alternativă elegantă (dar uneori periculoasă) la buclele <code>for</code> sau <code>while</code>.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Orice funcție recursivă corectă are două elemente vitale:
          </p>
          <ul className="list-decimal pl-5 mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Condiția de oprire (Cazul de bază):</strong> Când trebuie să se oprească din auto-apelare. Fără ea, funcția s-ar apela la infinit (provocând eroarea Stack Overflow).</li>
            <li><strong>Autoapelul:</strong> Apelul către ea însăși, dar cu date modificate (care o apropie pas cu pas de condiția de oprire).</li>
          </ul>

          <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg bg-gray-50 dark:bg-navy-deep font-mono text-sm">
            <h3 className="text-indigo-600 dark:text-indigo-400 font-bold block mb-2">Exemplu Clasic: Factorialul (N!)</h3>
            <code>
              <span className="text-gray-500">{"// 5! = 5 * 4! (Calculat recursiv)"}</span><br />
              <span className="text-indigo-600 dark:text-indigo-400">int</span> fact(<span className="text-indigo-600 dark:text-indigo-400">int</span> n) {"{"}<br />
              &nbsp;&nbsp;<span className="text-gray-500">{"// 1. Condiția de oprire"}</span><br />
              &nbsp;&nbsp;<span className="text-indigo-600 dark:text-indigo-400">if</span> (n == 0) {"{"}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400 font-bold">return</span> 1;<br />
              &nbsp;&nbsp;{"}"}<br />
              &nbsp;&nbsp;<span className="text-gray-500">{"// 2. Autoapelul (cu un pas mai aproape de 0)"}</span><br />
              &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400 font-bold">return</span> n * fact(n - 1);<br />
              {"}"}
            </code>
          </div>
        </div>
      </section>

      {/* Observation / Warning */}
      <section>
        <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-500 p-6 rounded-r-lg shadow-sm">
          <h3 className="text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wide mb-2 flex items-center gap-2">
            <span className="material-icons-outlined">warning</span>
            Reguli vitale la Subiectul III (Bacalaureat)
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li>
              <strong>Când folosești void:</strong> La Subiectul 3, cerința îți spune clar: <em>"Subprogramul X <strong>furnizează</strong> prin parametrul P valoarea..."</em> (atunci folosești `void` și parametru prin referință `&`) SAU <em>"Subprogramul X <strong>returnează</strong> valoarea..."</em> (atunci funcția va avea tip, ex: `int`, și vei folosi `return`).
            </li>
            <li>
              <strong>Ordinea parametrilor:</strong> Numele și ordinea parametrilor trebuie să respecte EXACT cerința din subiect. Dacă cerința spune `f(n, a)`, nu poți declara funcția cu parametrii invers (`f(a, n)`).
            </li>
            <li>
              <strong>Un singur return:</strong> Când o funcție cu tip (ex: `int`) ajunge la o instrucțiune `return`, ea <strong>se oprește instantaneu</strong>, chiar dacă era într-o buclă `for` sau `while`. Acest lucru este foarte util pentru a ieși rapid din funcții când am găsit ceea ce căutam.
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
