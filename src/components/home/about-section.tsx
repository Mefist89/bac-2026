import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-24 bg-white dark:bg-navy-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-full opacity-10 blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/5">
              <img
                alt="Student working on code collaboration"
                className="w-full h-auto object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJb-9Wv_v9MxQRRLC16-HzwV2U4zycGT1GaWw8Lyqf_J2klKvuRsvns0qHczWsxqBlmzSiF4plXi92ax9j46-oi2X1QnJm_2k-EvurgZYBw4sGxTc6helHRY7Kbo27Nv7zXhBL-GAIDLRs_qxKq4kwPNmMt52-9QKjm-qQR5xGBVQgbiXrY1vRy0_-fCT8dRgsMrLlrnAUe8vMSVZkZPNTqpND5uyQ5oqKgWwQFI_5qxmX4RUdoRp0OF2Wk_p3loJYnp_BP4x9tVyQ"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-navy-surface/90 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <span className="material-icons-round">trending_up</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Progres Rapid
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      95% dintre utilizatori și-au mărit nota.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
              Despre Platformă
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Învață logic, nu pe de rost.
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              Informatica este despre gândire structurată. Platforma noastră
              este construită pentru a te ajuta să înțelegi conceptele din
              spatele codului, oferindu-ți încrederea necesară pentru examen.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <span className="material-icons-round">psychology</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Învățare Adaptivă
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Sistemul îți recomandă exerciții bazate pe punctele tale
                    slabe.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-primary">
                  <span className="material-icons-round">groups</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Comunitate Activă
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Forum de discuții unde poți cere ajutor la orice problemă.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="#"
                className="inline-block px-8 py-3 rounded-lg bg-gray-100 dark:bg-white text-gray-900 dark:text-navy-deep font-semibold hover:bg-gray-200 transition-colors"
              >
                Află povestea noastră
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
