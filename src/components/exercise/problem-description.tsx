import { Button } from "@/components/ui/button";

export function ProblemDescription() {
  return (
    <section className="flex-1 bg-white dark:bg-navy-deep overflow-y-auto px-8 py-6 relative">
      <div className="max-w-3xl mx-auto pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-full border border-orange-100 dark:border-orange-800/50">
            Subiectul III
          </span>
          <div className="flex items-center gap-2 text-gray-400">
            <Button
              variant="ghost"
              size="icon-xs"
              className="hover:text-primary transition-colors hover:bg-gray-100 dark:hover:bg-navy-surface"
            >
              <span className="material-icons-round key={1}">zoom_out</span>
            </Button>
            <Button
              variant="ghost"
              size="icon-xs"
              className="hover:text-primary transition-colors hover:bg-gray-100 dark:hover:bg-navy-surface"
            >
              <span className="material-icons-round key={2}">zoom_in</span>
            </Button>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-display">
          Problema 1. Divizori și Puteri
        </h2>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
          <p className="mb-4 text-lg">
            Scrieți un program C++ care citește de la tastatură un număr natural{" "}
            <code className="bg-gray-100 dark:bg-navy-surface text-primary font-bold px-1.5 py-0.5 rounded border border-gray-200 dark:border-white/10 font-mono text-sm">
              n
            </code>{" "}
            (<span className="font-serif italic font-semibold">n</span> ∈ [2, 10
            <sup>9</sup>]) și afișează pe ecran cel mai mare divizor prim al
            acestuia. Dacă numărul nu are divizori primi (caz imposibil pentru{" "}
            <span className="font-serif italic font-semibold">n</span> ≥ 2), se
            va afișa mesajul &quot;NU&quot;.
          </p>
          <p className="mb-6">
            Programul trebuie să fie eficient din punct de vedere al timpului de
            execuție, încadrându-se în limita de 0.1 secunde.
          </p>

          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ExampleCard
              title="Exemplu 1"
              input="24"
              output="3"
              explanation="Divizorii primi ai lui 24 sunt 2 și 3. Cel mai mare este 3."
            />
            <ExampleCard
              title="Exemplu 2"
              input="17"
              output="17"
              explanation="7 este număr prim, deci cel mai mare divizor prim este el însuși."
            />
          </div>

          <div className="bg-yellow-50/50 dark:bg-yellow-900/10 rounded-lg p-5 border border-yellow-100 dark:border-yellow-800/30">
            <h3 className="text-base font-bold text-gray-800 dark:text-yellow-100 mb-3 flex items-center gap-2">
              <span className="material-icons-round text-yellow-600 dark:text-yellow-400 text-lg key={1}">
                info
              </span>
              Restricții și precizări
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-600 dark:text-gray-400 text-sm pl-1">
              <li>Numerele sunt naturale.</li>
              <li>Se recomandă utilizarea tipurilor de date adecvate.</li>
              <li>Timp maxim de execuție: 0.1s/test.</li>
              <li>Memorie disponibilă: 8 MB.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-white dark:from-navy-deep to-transparent pointer-events-none"></div>
    </section>
  );
}

function ExampleCard({
  title,
  input,
  output,
  explanation,
}: {
  title: string;
  input: string;
  output: string;
  explanation: string;
}) {
  return (
    <div className="bg-white dark:bg-navy-surface rounded-xl border border-gray-200 dark:border-white/10 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gray-50 dark:bg-navy-deep/50 px-4 py-2.5 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200 dark:border-white/10">
        {title}
      </div>
      <div className="p-4 space-y-4">
        <div>
          <span className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">
            Intrare:
          </span>
          <code className="block font-mono bg-gray-50 dark:bg-navy-deep text-gray-800 dark:text-gray-200 p-2.5 rounded border border-gray-200 dark:border-white/10 shadow-inner">
            {input}
          </code>
        </div>
        <div>
          <span className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">
            Ieșire:
          </span>
          <code className="block font-mono bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-2.5 rounded border border-green-100 dark:border-green-800/30 shadow-inner font-bold">
            {output}
          </code>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 italic bg-blue-50/50 dark:bg-blue-900/10 p-2 rounded">
          Explicație: {explanation}
        </p>
      </div>
    </div>
  );
}
