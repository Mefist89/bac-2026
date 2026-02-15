export function LessonsHeader() {
  return (
    <header className="relative bg-white dark:bg-navy-surface border-b border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] dark:invert"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 text-sm font-bold mb-4 border border-orange-200 dark:border-orange-500/30">
          Pregătire BAC Informatică
        </span>
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
          Bibliotecă de Lecții
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Explorează conceptele fundamentale, algoritmii și structurile de date
          necesare pentru a obține nota 10 la examenul de bacalaureat.
        </p>
      </div>
    </header>
  );
}
