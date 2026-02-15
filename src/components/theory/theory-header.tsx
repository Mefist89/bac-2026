export function TheoryHeader() {
  return (
    <div className="relative mb-12">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
        Teorie și <span className="text-secondary">Concepte</span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
        Învață fundamentele programării. Lecții structurate despre algoritmi,
        structuri de date și limbajul C++.
      </p>
    </div>
  );
}
