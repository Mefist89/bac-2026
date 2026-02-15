import Link from "next/link";

export function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-navy-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Resurse Complete
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mt-2">
            Tot ce ai nevoie pentru nota 10
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon="menu_book"
            title="Teorie Explicată"
            description="Algoritmi, structuri de date și grafuri explicate pas cu pas, pe înțelesul tuturor."
            color="orange"
          />
          <FeatureCard
            icon="code"
            title="Exerciții Practice"
            description="Sute de probleme de C++ cu verificare automată și feedback instant."
            color="blue"
          />
          <FeatureCard
            icon="quiz"
            title="Teste BAC Anuale"
            description="Arhiva completă a subiectelor de Bacalaureat din 2009 până în prezent."
            color="purple"
          />
          <FeatureCard
            icon="smart_display"
            title="Rezolvări Video"
            description="Tutoriale video detaliate pentru cele mai dificile probleme de la examen."
            color="green"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
}) {
  const colorMap: Record<string, string> = {
    orange:
      "text-primary bg-orange-100 dark:bg-orange-900/20 group-hover:bg-primary",
    blue: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 group-hover:bg-blue-600",
    purple:
      "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/20 group-hover:bg-purple-600",
    green:
      "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 group-hover:bg-green-600",
  };

  const iconColorUnhover =
    color === "orange"
      ? "text-primary"
      : `text-${color}-600 dark:text-${color}-400`;

  return (
    <div className="group bg-white dark:bg-navy-deep p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${colorMap[color]}`}
      >
        <span
          className={`material-icons-round text-3xl group-hover:text-white transition-colors ${iconColorUnhover}`}
        >
          {icon}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>
      <Link
        href="#"
        className={`inline-flex items-center font-medium text-sm hover:underline ${color === "orange" ? "text-primary" : `text-${color}-600 dark:text-${color}-400`}`}
      >
        Vezi mai mult{" "}
        <span className="material-icons-round text-sm ml-1">arrow_forward</span>
      </Link>
    </div>
  );
}
