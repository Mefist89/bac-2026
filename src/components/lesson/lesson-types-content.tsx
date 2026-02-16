import { Button } from "@/components/ui/button";

export function LessonTypesContent() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
            <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">code</span>
            </span>
            Introducere
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Cea mai importantă caracteristică a unei informații în C++ este{" "}
            <strong>tipul ei</strong>. Pentru toate variabilele trebuie cunoscut
            tipul acesteia, fapt care permite diverse operații specifice sau
            limitează valorile pe care le poate lua.
          </p>
        </div>
      </section>

      {/* Integer Types */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">numbers</span>
            </span>
            1. Tipul int
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Este cel mai utilizat tip de date și permite memorarea unui{" "}
            <strong>număr întreg</strong> (fără virgulă, atât pozitive, cât și
            negative).
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-primary mb-6">
            <li>
              <strong className="text-gray-900 dark:text-gray-200">
                Memorie:
              </strong>{" "}
              4 octeți (32 biți).
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-200">
                Interval de valori:
              </strong>{" "}
              [-2.147.483.648, 2.147.483.647] (aprox. ±2 miliarde).
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-200">
                Când îl folosim:
              </strong>{" "}
              Dacă numărul nu depășește 9 cifre.
            </li>
          </ul>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200 mb-6">
            <code>int x = 15;</code>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 p-4 rounded-r-lg">
            <h4 className="text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wide mb-1">
              Observație
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Există și varianta <code>short int</code> (sau simplu{" "}
              <code>short</code>), care ocupă 2 octeți și reține valori între
              -32768 și 32767.
            </p>
          </div>
        </div>
      </section>

      {/* Long Long */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">expand</span>
            </span>
            2. Tipul long long
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Permite memorarea numerelor întregi foarte mari.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-primary mb-6">
            <li>
              <strong className="text-gray-900 dark:text-gray-200">
                Memorie:
              </strong>{" "}
              8 octeți (64 biți).
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-200">
                Interval de valori:
              </strong>{" "}
              [-9*10^18, 9*10^18].
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-200">
                Capacitate:
              </strong>{" "}
              Până la 18-19 cifre.
            </li>
          </ul>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
            <code>
              long long x = 1000000000000;{" "}
              <span className="text-gray-500">{"// 13 cifre"}</span>
            </code>
          </div>
        </div>
      </section>

      {/* Float & Double */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">functions</span>
            </span>
            3. Tipurile float și double
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Acestea rețin <strong>numere reale</strong> (cu virgulă), pozitive
            sau negative. Separatorul zecimal este punctul (<code>.</code>).
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-left text-sm whitespace-nowrap">
              <thead className="uppercase tracking-wider border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-navy-deep text-gray-500 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Tip
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Memorie
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Descriere
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 font-mono text-primary font-bold">
                    float
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    4 octeți
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Precizie simplă
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-mono text-primary font-bold">
                    double
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    8 octeți
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Precizie dublă (recomandat)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 dark:bg-navy-deep p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200">
            <code>
              float nr1 = 1.23;
              <br />
              double nr2 = 4.56E-03;{" "}
              <span className="text-gray-500">{"// 0.00456"}</span>
            </code>
          </div>
        </div>
      </section>

      {/* Char & Bool & Void */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Char */}
        <div className="bg-white dark:bg-navy-surface p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
            <span className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">abc</span>
            </span>
            4. Tipul char
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Reține un <strong>singur caracter</strong>.
          </p>
          <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300 mb-4">
            <li>
              <strong>Memorie:</strong> 1 octet.
            </li>
            <li>
              <strong>Valori:</strong> -128 la 127 (ASCII).
            </li>
          </ul>
          <div className="bg-gray-50 dark:bg-navy-deep p-3 rounded-lg font-mono text-xs text-gray-800 dark:text-gray-200">
            <code>char c1 = &apos;a&apos;;</code>
          </div>
        </div>

        {/* Bool */}
        <div className="bg-white dark:bg-navy-surface p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
            <span className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">check_box</span>
            </span>
            5. Tipul bool
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Valori logice: <strong>adevărat</strong> (1) sau{" "}
            <strong>fals</strong> (0).
          </p>
          <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300 mb-4">
            <li>
              <strong>Memorie:</strong> 1 octet.
            </li>
          </ul>
          <div className="bg-gray-50 dark:bg-navy-deep p-3 rounded-lg font-mono text-xs text-gray-800 dark:text-gray-200">
            <code>bool ok = true;</code>
          </div>
        </div>
      </section>

      {/* Signed vs Unsigned */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
            <span className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">exposure</span>
            </span>
            7. Modificatori: signed vs unsigned
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Pentru tipurile întregi și char.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
              <strong className="text-gray-900 dark:text-white block mb-1">
                signed (implicit)
              </strong>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cuprinde numere negative și pozitive.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
              <strong className="text-gray-900 dark:text-white block mb-1">
                unsigned
              </strong>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Doar numere pozitive (limita superioară se dublează).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Resources (PDFs) */}
      <section>
        <div className="bg-white dark:bg-navy-surface p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
            <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 p-2 rounded-lg mr-3">
              <span className="material-icons-outlined">attach_file</span>
            </span>
            Resurse Suplimentare
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/files/subiectul-ii/Tipuri_de_date.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Button
                variant="outline"
                className="h-auto py-3 px-4 flex items-center gap-3 w-full sm:w-auto hover:border-primary hover:text-primary transition-colors bg-gray-50 dark:bg-navy-deep"
              >
                <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2 rounded">
                  <span className="material-icons-outlined text-lg">
                    picture_as_pdf
                  </span>
                </span>
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white">
                    Tipuri de date (Full)
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    PDF • 17 MB
                  </div>
                </div>
              </Button>
            </a>
            <a
              href="/files/subiectul-ii/Tipuri_de_date_rezumat.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Button
                variant="outline"
                className="h-auto py-3 px-4 flex items-center gap-3 w-full sm:w-auto hover:border-primary hover:text-primary transition-colors bg-gray-50 dark:bg-navy-deep"
              >
                <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2 rounded">
                  <span className="material-icons-outlined text-lg">
                    picture_as_pdf
                  </span>
                </span>
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white">
                    Tipuri de date (Rezumat)
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    PDF • 374 KB
                  </div>
                </div>
              </Button>
            </a>
            <a href="/test-online/2" className="no-underline">
              <Button
                variant="outline"
                className="h-auto py-3 px-4 flex items-center gap-3 w-full sm:w-auto hover:border-primary hover:text-primary transition-colors bg-gray-50 dark:bg-navy-deep"
              >
                <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 p-2 rounded">
                  <span className="material-icons-outlined text-lg">quiz</span>
                </span>
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white">
                    Test Online
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Verifică-ți cunoștințele
                  </div>
                </div>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
