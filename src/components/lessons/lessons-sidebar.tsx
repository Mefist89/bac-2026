"use client";

export function LessonsSidebar() {
  return (
    <aside className="w-full lg:w-1/4 space-y-6">
      <div className="bg-white dark:bg-navy-surface p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white flex items-center gap-2">
          <span className="material-icons-outlined text-primary">search</span>{" "}
          Caută
        </h3>
        <div className="relative">
          <input
            className="w-full bg-gray-50 dark:bg-navy-deep border border-gray-200 dark:border-gray-700 rounded-lg py-2.5 px-4 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="Căutare lecții..."
            type="text"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-navy-surface p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white flex items-center gap-2">
          <span className="material-icons-outlined text-primary">school</span>{" "}
          Clasa
        </h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 bg-white focus:ring-primary"
              type="checkbox"
            />
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary transition">
              Clasa a IX-a
            </span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              defaultChecked
              className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 bg-white focus:ring-primary"
              type="checkbox"
            />
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary transition">
              Clasa a X-a
            </span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 bg-white focus:ring-primary"
              type="checkbox"
            />
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary transition">
              Clasa a XI-a
            </span>
          </label>
        </div>
      </div>

      <div className="bg-white dark:bg-navy-surface p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white flex items-center gap-2">
          <span className="material-icons-outlined text-primary">category</span>{" "}
          Categorii
        </h3>
        <ul className="space-y-2">
          <li>
            <a
              className="flex justify-between items-center text-primary font-semibold bg-primary/5 px-3 py-2 rounded-lg transition"
              href="#"
            >
              <span>Algoritmi Elementari</span>
              <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs font-bold">
                12
              </span>
            </a>
          </li>
          <li>
            <a
              className="flex justify-between items-center text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-navy-deep px-3 py-2 rounded-lg transition"
              href="#"
            >
              <span>Structuri de Date</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-xs font-medium">
                8
              </span>
            </a>
          </li>
          <li>
            <a
              className="flex justify-between items-center text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-navy-deep px-3 py-2 rounded-lg transition"
              href="#"
            >
              <span>Grafuri</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-xs font-medium">
                15
              </span>
            </a>
          </li>
          <li>
            <a
              className="flex justify-between items-center text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-navy-deep px-3 py-2 rounded-lg transition"
              href="#"
            >
              <span>Programare Dinamică</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-xs font-medium">
                6
              </span>
            </a>
          </li>
          <li>
            <a
              className="flex justify-between items-center text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-navy-deep px-3 py-2 rounded-lg transition"
              href="#"
            >
              <span>POO</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-xs font-medium">
                4
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
