export function CTASection() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary rounded-3xl p-12 overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl -ml-12 -mb-12"></div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-4xl font-extrabold mb-4">
              Nu rata ultimele noutăți!
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Alătură-te comunității noastre și fii primul care află despre
              ofertele speciale și evenimentele exclusive. Creează-ți cont
              gratuit astăzi.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-orange-100 focus:outline-none focus:bg-white/20 focus:border-white transition-colors"
                placeholder="Adresa ta de email"
                type="email"
              />
              <button
                className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-orange-50 transition-colors shadow-lg"
                type="button"
              >
                Mă Înscriu
              </button>
            </form>
            <p className="text-xs text-orange-200 mt-4">
              Nu trimitem spam. Te poți dezabona oricând.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
