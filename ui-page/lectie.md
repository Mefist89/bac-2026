<!DOCTYPE html>
<html lang="ro"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Teorie - Grafuri și Aplicații | eduAct</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"/>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#FF7E21", 
                        "primary-hover": "#e66b15",
                        "secondary": "#5B58EB",
                        "background-light": "#F5F5F7",
                        "background-dark": "#0B0B1E",
                        "surface-dark": "#15152B",
                        "surface-light": "#FFFFFF",
                        "text-light": "#1B1B1B",
                        "text-dark": "#FFFFFF",
                        "text-muted-light": "#666666",
                        "text-muted-dark": "#A0A0B0",
                        "accent-blue": "#4A47E5"
                    },
                    fontFamily: {
                        display: ["Urbanist", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "0.5rem",
                    },
                },
            },
        };
    </script>
<style>
        body {
            font-family: 'Urbanist', sans-serif;
        }.code-keyword { color: #C792EA; }
        .code-type { color: #FFCB6B; }
        .code-string { color: #C3E88D; }
        .code-comment { color: #676E95; font-style: italic; }
        .code-function { color: #82AAFF; }
        .code-number { color: #F78C6C; }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
<nav class="bg-surface-light dark:bg-[#0f0f24] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex justify-between h-20 items-center">
<div class="flex items-center">
<div class="flex-shrink-0 flex items-center gap-2">
<div class="bg-gradient-to-br from-primary to-orange-600 w-10 h-10 rounded-lg flex items-center justify-center text-white">
<span class="material-icons-outlined">school</span>
</div>
<span class="font-bold text-2xl tracking-tight dark:text-white">eduAct</span>
</div>
</div>
<div class="hidden md:flex items-center space-x-8">
<a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition" href="#">Acasă</a>
<a class="text-primary font-semibold px-3 py-2 text-sm transition" href="#">Lecții</a>
<a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition" href="#">Probleme</a>
<a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition" href="#">Simulări</a>
<a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition" href="#">Blog</a>
</div>
<div class="flex items-center space-x-4">
<button class="p-2 rounded-full text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition">
<span class="material-icons-outlined">search</span>
</button>
<button class="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/30 transition transform hover:-translate-y-0.5">
                        Contul Meu
                    </button>
</div>
</div>
</div>
</nav>
<div class="bg-surface-light dark:bg-surface-dark py-12 border-b border-gray-200 dark:border-gray-800 relative overflow-hidden">
<div class="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<div class="flex items-center space-x-2 text-sm text-text-muted-light dark:text-text-muted-dark mb-3">
<a class="hover:text-primary transition" href="#">Lecții</a>
<span class="material-icons-outlined text-xs">chevron_right</span>
<a class="hover:text-primary transition" href="#">Clasa a XI-a</a>
<span class="material-icons-outlined text-xs">chevron_right</span>
<span class="text-primary">Grafuri</span>
</div>
<h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                        Teorie: Grafuri și Aplicații
                    </h1>
<p class="mt-2 text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl">
                        Învață conceptele fundamentale despre grafuri neorientate, reprezentarea lor și algoritmii de parcurgere.
                    </p>
</div>
<div class="flex items-center gap-3">
<span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold border border-green-200 dark:border-green-800">
                        Nivel: Mediu
                    </span>
<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-semibold border border-blue-200 dark:border-blue-800">
<span class="material-icons-outlined text-[14px] align-middle mr-1">schedule</span> 45 min
                    </span>
</div>
</div>
</div>
</div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div class="lg:col-span-8 space-y-8">
<section class="prose dark:prose-invert max-w-none">
<div class="bg-surface-light dark:bg-surface-dark p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
<h2 class="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
<span class="bg-primary/10 text-primary p-2 rounded-lg mr-3">
<span class="material-icons-outlined">hub</span>
</span>
                            Definiția Grafului Neorientat
                        </h2>
<p class="text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-4">
                            Un <strong>graf neorientat</strong> este o pereche ordonată <code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-primary">G = (V, E)</code>, unde:
                        </p>
<ul class="list-disc pl-5 space-y-2 text-text-muted-light dark:text-text-muted-dark marker:text-primary mb-6">
<li><strong class="text-gray-900 dark:text-gray-200">V</strong> este o mulțime finită și nevidă de elemente numite <em>vârfuri</em> (sau noduri).</li>
<li><strong class="text-gray-900 dark:text-gray-200">E</strong> este o mulțime de perechi neordonate de vârfuri distincte, numite <em>muchii</em>.</li>
</ul>
<div class="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-primary p-4 rounded-r-lg">
<h4 class="text-primary font-bold text-sm uppercase tracking-wide mb-1">Observație Importantă</h4>
<p class="text-gray-700 dark:text-gray-300 text-sm">
                                Într-un graf neorientat, muchia (x, y) este identică cu muchia (y, x). Relația de adiacență este simetrică.
                            </p>
</div>
</div>
</section>
<section>
<div class="bg-surface-light dark:bg-surface-dark p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
<h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
<span class="bg-secondary/10 text-secondary p-2 rounded-lg mr-3">
<span class="material-icons-outlined">grid_on</span>
</span>
                            Reprezentarea Grafurilor: Matricea de Adiacență
                        </h2>
<p class="text-text-muted-light dark:text-text-muted-dark mb-6">
                            Matricea de adiacență este o matrice pătratică binară <code class="text-primary">A</code> de dimensiune <code class="text-primary">n x n</code>, unde <code class="text-primary">n</code> este numărul de vârfuri.
                        </p>
<div class="grid md:grid-cols-2 gap-6 mb-8">
<div class="bg-white dark:bg-[#1A1A35] rounded-xl p-4 flex items-center justify-center border border-gray-200 dark:border-gray-700 min-h-[200px] relative overflow-hidden group">
<div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
<div class="relative w-48 h-48">
<svg class="w-full h-full stroke-gray-800 dark:stroke-white fill-none stroke-2" viewBox="0 0 100 100">
<line x1="20" x2="80" y1="20" y2="20"></line>
<line x1="20" x2="20" y1="20" y2="80"></line>
<line x1="20" x2="80" y1="80" y2="80"></line>
<line x1="80" x2="80" y1="20" y2="80"></line>
<line x1="20" x2="80" y1="20" y2="80"></line>
<circle class="fill-primary stroke-none" cx="20" cy="20" r="6"></circle>
<text class="fill-gray-500 dark:fill-gray-400 text-[8px] font-sans" x="15" y="15">1</text>
<circle class="fill-primary stroke-none" cx="80" cy="20" r="6"></circle>
<text class="fill-gray-500 dark:fill-gray-400 text-[8px] font-sans" x="85" y="15">2</text>
<circle class="fill-primary stroke-none" cx="20" cy="80" r="6"></circle>
<text class="fill-gray-500 dark:fill-gray-400 text-[8px] font-sans" x="15" y="85">4</text>
<circle class="fill-primary stroke-none" cx="80" cy="80" r="6"></circle>
<text class="fill-gray-500 dark:fill-gray-400 text-[8px] font-sans" x="85" y="85">3</text>
</svg>
</div>
<p class="absolute bottom-2 text-xs text-gray-400">Fig 1. Graf G cu 4 noduri</p>
</div>
<div class="flex flex-col justify-center">
<div class="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
<table class="min-w-full text-center text-sm">
<thead class="bg-gray-100 dark:bg-gray-800">
<tr>
<th class="py-2 px-3 text-gray-500 font-medium">A[i][j]</th>
<th class="py-2 px-3">1</th>
<th class="py-2 px-3">2</th>
<th class="py-2 px-3">3</th>
<th class="py-2 px-3">4</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-[#1A1A35] text-gray-700 dark:text-gray-300 font-mono">
<tr>
<td class="bg-gray-50 dark:bg-gray-800/50 font-bold text-gray-500">1</td>
<td>0</td><td class="text-primary font-bold">1</td><td>0</td><td class="text-primary font-bold">1</td>
</tr>
<tr>
<td class="bg-gray-50 dark:bg-gray-800/50 font-bold text-gray-500">2</td>
<td class="text-primary font-bold">1</td><td>0</td><td class="text-primary font-bold">1</td><td>0</td>
</tr>
<tr>
<td class="bg-gray-50 dark:bg-gray-800/50 font-bold text-gray-500">3</td>
<td>0</td><td class="text-primary font-bold">1</td><td>0</td><td class="text-primary font-bold">1</td>
</tr>
<tr>
<td class="bg-gray-50 dark:bg-gray-800/50 font-bold text-gray-500">4</td>
<td class="text-primary font-bold">1</td><td>0</td><td class="text-primary font-bold">1</td><td>0</td>
</tr>
</tbody>
</table>
</div>
<p class="text-xs text-center mt-2 text-text-muted-light dark:text-text-muted-dark">Matricea de adiacență corespunzătoare</p>
</div>
</div>
<div class="mt-8 rounded-xl overflow-hidden shadow-lg border border-gray-800">
<div class="bg-[#0f0f24] px-4 py-2 flex justify-between items-center border-b border-gray-700">
<span class="text-gray-400 text-xs font-mono">C++ Implementation</span>
<div class="flex space-x-1.5">
<div class="w-3 h-3 rounded-full bg-red-500"></div>
<div class="w-3 h-3 rounded-full bg-yellow-500"></div>
<div class="w-3 h-3 rounded-full bg-green-500"></div>
</div>
</div>
<div class="bg-[#1e1e3f] p-4 overflow-x-auto text-sm font-mono leading-relaxed">
<pre><code><span class="code-comment">// Citirea matricei de adiacență din fișier</span>
<span class="code-keyword">#include</span> <span class="code-string">&lt;iostream&gt;</span>
<span class="code-keyword">#include</span> <span class="code-string">&lt;fstream&gt;</span>
<span class="code-keyword">using namespace</span> std;
<span class="code-type">int</span> a[<span class="code-number">101</span>][<span class="code-number">101</span>], n;
<span class="code-type">int</span> <span class="code-function">main</span>() {
    ifstream f(<span class="code-string">"graf.in"</span>);
    f &gt;&gt; n;
    <span class="code-type">int</span> x, y;
    <span class="code-comment">// Citim perechi de muchii (x, y)</span>
    <span class="code-keyword">while</span> (f &gt;&gt; x &gt;&gt; y) {
        a[x][y] = <span class="code-number">1</span>;
        a[y][x] = <span class="code-number">1</span>; <span class="code-comment">// Graful este neorientat</span>
    }
    <span class="code-comment">// Afișare matrice</span>
    <span class="code-keyword">for</span>(<span class="code-type">int</span> i = <span class="code-number">1</span>; i &lt;= n; i++) {
        <span class="code-keyword">for</span>(<span class="code-type">int</span> j = <span class="code-number">1</span>; j &lt;= n; j++)
            cout &lt;&lt; a[i][j] &lt;&lt; <span class="code-string">" "</span>;
        cout &lt;&lt; endl;
    }
    <span class="code-keyword">return</span> <span class="code-number">0</span>;
}</code></pre>
</div>
</div>
</div>
</section>
<section>
<div class="bg-surface-light dark:bg-surface-dark p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
<h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
<span class="bg-accent-blue/10 text-accent-blue p-2 rounded-lg mr-3">
<span class="material-icons-outlined">psychology</span>
</span>
                            Proprietăți Importante
                        </h2>
<ul class="grid md:grid-cols-2 gap-4">
<li class="bg-background-light dark:bg-background-dark p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition duration-300">
<h5 class="font-bold text-gray-900 dark:text-white mb-2">Gradul unui nod</h5>
<p class="text-sm text-text-muted-light dark:text-text-muted-dark">Numărul de muchii incidente cu nodul respectiv. Se notează cu <span class="font-mono text-primary">d(x)</span>.</p>
</li>
<li class="bg-background-light dark:bg-background-dark p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition duration-300">
<h5 class="font-bold text-gray-900 dark:text-white mb-2">Teorema 1</h5>
<p class="text-sm text-text-muted-light dark:text-text-muted-dark">Suma gradelor tuturor nodurilor este dublul numărului de muchii: <span class="font-mono text-primary">∑ d(x) = 2 * m</span>.</p>
</li>
<li class="bg-background-light dark:bg-background-dark p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition duration-300">
<h5 class="font-bold text-gray-900 dark:text-white mb-2">Nod Izolat</h5>
<p class="text-sm text-text-muted-light dark:text-text-muted-dark">Un nod cu gradul 0 (nu are nici o muchie incidentă).</p>
</li>
<li class="bg-background-light dark:bg-background-dark p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition duration-300">
<h5 class="font-bold text-gray-900 dark:text-white mb-2">Nod Terminal</h5>
<p class="text-sm text-text-muted-light dark:text-text-muted-dark">Un nod cu gradul 1 (o singură muchie incidentă).</p>
</li>
</ul>
</div>
</section>
<div class="flex justify-between items-center pt-8">
<button class="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition">
<span class="material-icons-outlined mr-2">arrow_back</span>
                        Lecția anterioară
                    </button>
<button class="bg-gradient-to-r from-primary to-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 flex items-center hover:shadow-orange-500/50 transition transform hover:-translate-y-1">
                        Următoarea Lecție
                        <span class="material-icons-outlined ml-2">arrow_forward</span>
</button>
</div>
</div>
<div class="lg:col-span-4 space-y-8">
<div class="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-800 sticky top-24">
<h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Progresul Tău</h3>
<div class="mb-6">
<div class="flex justify-between items-end mb-2">
<span class="text-sm font-medium text-gray-500 dark:text-gray-400">Capitol: Grafuri</span>
<span class="text-2xl font-bold text-primary">65%</span>
</div>
<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
<div class="bg-primary h-2.5 rounded-full" style="width: 65%"></div>
</div>
</div>
<div class="space-y-4">
<div class="flex items-center p-3 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/30">
<div class="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full p-1 mr-3">
<span class="material-icons-outlined text-sm">check</span>
</div>
<div>
<h4 class="text-sm font-semibold text-gray-900 dark:text-white">Concepte de bază</h4>
<p class="text-xs text-gray-500">Finalizat</p>
</div>
</div>
<div class="flex items-center p-3 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 dark:border-primary/20 relative overflow-hidden">
<div class="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
<div class="bg-primary text-white rounded-full p-1 mr-3 animate-pulse">
<span class="material-icons-outlined text-sm">play_arrow</span>
</div>
<div>
<h4 class="text-sm font-semibold text-gray-900 dark:text-white">Matricea de Adiacență</h4>
<p class="text-xs text-gray-500">În curs (Acum)</p>
</div>
</div>
<div class="flex items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 opacity-60">
<div class="bg-gray-200 dark:bg-gray-700 text-gray-500 rounded-full p-1 mr-3">
<span class="material-icons-outlined text-sm">lock</span>
</div>
<div>
<h4 class="text-sm font-semibold text-gray-900 dark:text-white">Parcurgerea în Lățime (BFS)</h4>
<p class="text-xs text-gray-500">Urmează</p>
</div>
</div>
<div class="flex items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 opacity-60">
<div class="bg-gray-200 dark:bg-gray-700 text-gray-500 rounded-full p-1 mr-3">
<span class="material-icons-outlined text-sm">lock</span>
</div>
<div>
<h4 class="text-sm font-semibold text-gray-900 dark:text-white">Parcurgerea în Adâncime (DFS)</h4>
<p class="text-xs text-gray-500">Urmează</p>
</div>
</div>
</div>
<div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
<h4 class="text-sm font-bold text-gray-900 dark:text-white mb-3">Resurse Suplimentare</h4>
<ul class="space-y-2">
<li>
<a class="flex items-center text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition" href="#">
<span class="material-icons-outlined text-base mr-2">description</span>
                                    Fișă de lucru PDF
                                </a>
</li>
<li>
<a class="flex items-center text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition" href="#">
<span class="material-icons-outlined text-base mr-2">code</span>
                                    Exemple cod sursă
                                </a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<footer class="bg-surface-dark text-white py-12 border-t border-gray-800">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div class="col-span-1 md:col-span-1">
<div class="flex items-center gap-2 mb-4">
<div class="bg-primary w-8 h-8 rounded-md flex items-center justify-center text-white">
<span class="material-icons-outlined text-sm">school</span>
</div>
<span class="font-bold text-xl tracking-tight">eduAct</span>
</div>
<p class="text-gray-400 text-sm leading-relaxed">
                        Platforma ta de pregătire pentru Bacalaureat la Informatică. Teorie, probleme și comunitate.
                    </p>
</div>
<div>
<h5 class="text-lg font-bold mb-4">Link-uri Rapide</h5>
<ul class="space-y-2 text-sm text-gray-400">
<li><a class="hover:text-primary transition" href="#">Despre Noi</a></li>
<li><a class="hover:text-primary transition" href="#">Toate Cursurile</a></li>
<li><a class="hover:text-primary transition" href="#">Contact</a></li>
<li><a class="hover:text-primary transition" href="#">Termeni și Condiții</a></li>
</ul>
</div>
<div>
<h5 class="text-lg font-bold mb-4">Cursuri Populare</h5>
<ul class="space-y-2 text-sm text-gray-400">
<li><a class="hover:text-primary transition" href="#">C++ Basics</a></li>
<li><a class="hover:text-primary transition" href="#">Algoritmi Fundamentali</a></li>
<li><a class="hover:text-primary transition" href="#">Structuri de Date</a></li>
<li><a class="hover:text-primary transition" href="#">Programare Dinamică</a></li>
</ul>
</div>
<div>
<h5 class="text-lg font-bold mb-4">Abonează-te</h5>
<p class="text-gray-400 text-sm mb-4">Primește noutăți și materiale gratuite.</p>
<div class="flex">
<input class="bg-[#1e1e3f] border-none text-white text-sm rounded-l-lg focus:ring-1 focus:ring-primary w-full px-4 py-2" placeholder="Email-ul tău" type="email"/>
<button class="bg-primary hover:bg-primary-hover px-4 py-2 rounded-r-lg text-white font-medium transition">Trimite</button>
</div>
</div>
</div>
<div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                © 2024 eduAct Theme. Toate drepturile rezervate.
            </div>
</div>
</footer>

</body></html>
