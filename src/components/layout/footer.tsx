import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-charcoal-footer text-gray-500 dark:text-gray-300 py-16 border-t border-gray-100 dark:border-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="material-icons-round text-primary text-3xl">
                school
              </span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white font-heading">
                BAC Info Prep
              </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
              Platforma #1 pentru pregătirea examenului de Bacalaureat la
              Informatică în România.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <span className="material-icons-round">language</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <span className="material-icons-round">smart_display</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <span className="material-icons-round">alternate_email</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">
              Platformă
            </h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Lecții Video
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Planuri Tarifare
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Profesori
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">
              Resurse
            </h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Subiecte BAC
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Compilator Online
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Formule & Algoritmi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-icons-round text-primary text-base mt-0.5">
                  location_on
                </span>
                <span>București, România</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-round text-primary text-base">
                  phone
                </span>
                <span>+40 700 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-round text-primary text-base">
                  email
                </span>
                <span>contact@bacinfo.ro</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            © 2024 BAC Info Prep. Toate drepturile rezervate.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
            <Link
              href="#"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Termeni și Condiții
            </Link>
            <Link
              href="#"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Confidențialitate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
