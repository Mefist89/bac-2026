import Link from "next/link";

export function Hero() {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-navy-deep">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-900/20 to-transparent dark:from-blue-900/40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-6 border border-blue-200 dark:border-blue-800/50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold">Sesiunea BAC 2025</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              Pregătește-te pentru <br />
              <span className="bg-gradient-to-r from-primary to-orange-400 gradient-text text-transparent bg-clip-text">
                BAC-ul la Informatică
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Platforma completă de învățare care transformă codul în note de
              10. Accesează sute de probleme rezolvate, lecții video și simulări
              reale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-orange-500/40 hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group"
              >
                Începe Acum
                <span className="material-icons-round group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="#"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-navy-surface text-gray-800 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-icons-round text-primary">
                  play_circle
                </span>
                Explorează Lecțiile
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="material-icons-round text-green-500 text-base">
                  check_circle
                </span>
                <span>Programa C++</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons-round text-green-500 text-base">
                  check_circle
                </span>
                <span>Variante 2009-2024</span>
              </div>
            </div>
          </div>
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute w-[110%] h-[110%] bg-gradient-to-tr from-surface-dark to-transparent rounded-full border border-white/10 opacity-20 animate-pulse"></div>
            <div className="relative z-10 w-full max-w-lg">
              <div
                className="absolute -top-10 -right-10 bg-white dark:bg-navy-surface p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400">
                    <span className="material-icons-round">code</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Status Compilare
                    </p>
                    <p className="font-bold text-gray-900 dark:text-white">
                      Succes (100 puncte)
                    </p>
                  </div>
                </div>
              </div>
              {/* Using img tag as requested/provided in the design */}
              <img
                alt="Student learning to code on a laptop"
                className="rounded-3xl shadow-2xl border-4 border-white dark:border-white/10 object-cover h-96 w-full lg:h-auto transform -rotate-2 hover:rotate-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRQQdkmcTmSej9JMpbgAkv5YuHeIE1zKq6msJes0ZBSfH3BPQLh6Lz2wseDGh2h3LWGD_Lz1IeFiCgEz36wCyIZCOYwtMTjkN-YfbjkuvZNFJYKxegzsMChh8eKM9nSz1Roxv7M7g1J1wjxRf4bj5aDJTf_4VOSCw2MpUZy6QeF_QSQaeJoSAeK3p4s52zrRGfpql2_4BndoG2kyU8tFxNH8Ug5XDRb16JpahFHsPBFk_bpMfjWAULYru16XpHJZXkD29G6-WpzAu5"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl shadow-xl text-white max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-lg">Everyday</span>
                </div>
                <p className="text-sm opacity-90 italic">
                  "Ever tried. Ever failed. No matter. Try again. Fail again.
                  Fail better."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
