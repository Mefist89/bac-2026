import Link from "next/link";

export function BlogSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-navy-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
              Noutăți și Sfaturi
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Articole recente pentru pregătirea ta.
            </p>
          </div>
          <Link
            href="#"
            className="hidden md:flex items-center text-primary font-medium hover:underline"
          >
            Vezi toate articolele{" "}
            <span className="material-icons-round ml-1">arrow_forward</span>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ArticleCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAUmsNWbNcbvuqI_qjLknu3jWstF8EETrd5hhEMCEmkprbYlv3tGf9CSBO7BjCLItGLlmAUMpp4YnbiQYwWmRkLG2BAgmJvkry9ZtKLu1GssdJUGMi1NbTkcVG5f0_ioSZDTiKkzSiUi7Thu8N3hcvdE9_YSSZgRusm-L5fhaUUGnyNHwu-tEz7Xsg3ARhnXz1EtRUNBccR2Wo_ox1IQYzloPBfRJQaCXjkzNbjbUKk1KWZwaYjE-58uupzzL4ZUxramWBovvlFK3Ds"
            tag="Teorie"
            tagColor="primary"
            date="10 Oct 2024"
            title="Top 10 capcane în subiectele de Bacalaureat"
            description="Află care sunt cele mai frecvente greșeli pe care le fac elevii la Subiectul III și cum să le eviți."
          />
          <ArticleCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuABxShnE95yGEk6iWDrhBXh5AWsI9mOXS66SX66xdO2wzzJxHlKeHWyRjejQ0B-Qy_l44poXoXwKoFkbGbuNLaJs2JjuSrQy1GWc0xTaR2IKv0B6_D4ck9lXPkdVzeCOdxabP2TXOxII5fTJ1hdvdt6jfqE1VYamQM-4vhDCzQOhdSpSjsUFV41m9D7fXxThmx_ZW8InIIhl_XW3liw1fRKUaIHmY2hCuB_f5yhIGzStz_NmdpG49fjGAqUx9nsGL2GcJELQsApVGv-"
            tag="Exerciții"
            tagColor="blue"
            date="05 Oct 2024"
            title="Backtracking explicat simplu"
            description="Metoda backtracking pare complicată, dar cu aceste 3 exemple vizuale vei înțelege logica imediat."
          />
          <ArticleCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDe70oK5xoWlQ_YoUz2C8nLOiLu-gP4DMTSLc2RQZG9A3HknsP0Br4OAZhqNmU5gKqCGSbx9iRUWgrh-sAXVpnhLZqrcXoNBcxtr2l69R29kVz7zEV2EjgNwM0CZr0rdRG_rGnuUMI06MzsxsKBHnfjgTBKjchu5cFRVe0AxcnAQbbHVlauO3uAGWVm2KxoxE3W7xGBtB6FRIz1hLOgQ9H7dFR7HsAWLIqbnCpcOWd4jDIOPrfsBWxjBx92RqA8P7nHegTn7pB7JZem"
            tag="Motivație"
            tagColor="purple"
            date="28 Sep 2024"
            title="Cum să te organizezi eficient"
            description="Un plan de studiu pe 3 luni care acoperă toată materia pentru BAC la Informatică."
          />
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ image, tag, tagColor, date, title, description }: any) {
  const bgMap: Record<string, string> = {
    primary: "bg-primary",
    blue: "bg-blue-600",
    purple: "bg-purple-600",
  };
  return (
    <article className="bg-white dark:bg-navy-deep rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all group">
      <div className="relative h-48 overflow-hidden">
        <img
          alt="Article cover"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={image}
        />
        <div
          className={`absolute top-4 left-4 ${bgMap[tagColor]} text-white text-xs font-bold px-2 py-1 rounded`}
        >
          {tag}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
          <span className="material-icons-round text-sm">calendar_today</span>{" "}
          {date}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <Link
          href="#"
          className="text-primary font-medium text-sm hover:underline"
        >
          Citește articolul
        </Link>
      </div>
    </article>
  );
}
