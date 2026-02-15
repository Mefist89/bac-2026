<!DOCTYPE html>
<html class="light" lang="ro"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Rezolvă Online - Tema Luminoasă</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        "primary": "#f27f0d",
                        "primary-hover": "#d96e05",
                        "background-light": "#f9fafb", // Very light gray for main bg
                        "background-sidebar": "#ffffff", // White sidebar
                        "background-editor": "#fdf6e3", // Solarized Light base
                        "surface": "#ffffff", // Surface color for panels
                        "surface-accent": "#f3f4f6", // Light gray for accents
                        "text-main": "#333333", // Dark charcoal
                        "text-secondary": "#6b7280", // Gray text
                        "border-color": "#e5e7eb", // Light border
                        "code-bg": "#fdf6e3",
                    },
                    fontFamily: {
                        "display": ["Lexend", "sans-serif"],
                        "mono": ["JetBrains Mono", "monospace"],
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f3f4f6; 
        }
        ::-webkit-scrollbar-thumb {
            background: #d1d5db; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #9ca3af; 
        }.token-keyword { color: #859900; font-weight: bold; }.token-string { color: #2aa198; }.token-number { color: #d33682; }.token-comment { color: #93a1a1; font-style: italic; }.token-type { color: #b58900; }.token-function { color: #268bd2; }.line-numbers {
            counter-reset: line;
        }
        .code-line {
            display: block;
            line-height: 1.5rem;
        }
    </style>
</head>
<body class="bg-background-light font-display text-text-main h-screen flex flex-col overflow-hidden selection:bg-primary/20">
<header class="h-16 bg-white border-b border-border-color flex items-center justify-between px-6 shrink-0 z-20 shadow-sm">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-lg shadow-sm">
                R
            </div>
<h1 class="text-xl font-bold tracking-tight text-gray-900">Rezolvă<span class="text-primary">Online</span></h1>
</div>
<div class="absolute left-1/2 transform -translate-x-1/2 bg-gray-50 px-6 py-2 rounded-full border border-gray-200 flex items-center gap-3 shadow-sm">
<span class="material-icons-round text-primary">timer</span>
<span class="font-mono text-xl font-bold tracking-widest text-primary">02:45:12</span>
<span class="text-xs text-gray-500 font-medium uppercase tracking-wider ml-1">Timp rămas</span>
</div>
<button class="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-md shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0">
<span class="material-icons-round">check_circle</span>
            Finalizează Test
        </button>
</header>
<main class="flex-1 flex overflow-hidden">
<aside class="w-64 bg-background-sidebar border-r border-border-color flex flex-col overflow-y-auto shrink-0 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)] z-10">
<div class="p-4">
<h2 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Structură Examen</h2>
<div class="mb-6">
<h3 class="flex items-center justify-between text-sm font-semibold text-gray-700 mb-3 px-2">
                        Subiectul I
                        <span class="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded border border-green-200 font-medium">5/5</span>
</h3>
<div class="grid grid-cols-5 gap-2">
<button class="aspect-square rounded bg-primary text-white font-medium flex items-center justify-center text-sm shadow-sm shadow-primary/20 relative group hover:bg-primary-hover transition-colors">
                            1
                            <span class="absolute -top-1 -right-1 w-3 h-3 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm">
<span class="material-icons-round text-[10px] text-green-500 font-bold">check</span>
</span>
</button>
<button class="aspect-square rounded bg-primary text-white font-medium flex items-center justify-center text-sm shadow-sm shadow-primary/20 relative hover:bg-primary-hover transition-colors">
                            2
                            <span class="absolute -top-1 -right-1 w-3 h-3 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm">
<span class="material-icons-round text-[10px] text-green-500 font-bold">check</span>
</span>
</button>
<button class="aspect-square rounded bg-primary text-white font-medium flex items-center justify-center text-sm shadow-sm shadow-primary/20 relative hover:bg-primary-hover transition-colors">
                            3
                            <span class="absolute -top-1 -right-1 w-3 h-3 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm">
<span class="material-icons-round text-[10px] text-green-500 font-bold">check</span>
</span>
</button>
<button class="aspect-square rounded bg-primary text-white font-medium flex items-center justify-center text-sm shadow-sm shadow-primary/20 relative hover:bg-primary-hover transition-colors">
                            4
                            <span class="absolute -top-1 -right-1 w-3 h-3 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm">
<span class="material-icons-round text-[10px] text-green-500 font-bold">check</span>
</span>
</button>
<button class="aspect-square rounded bg-primary text-white font-medium flex items-center justify-center text-sm shadow-sm shadow-primary/20 relative hover:bg-primary-hover transition-colors">
                            5
                            <span class="absolute -top-1 -right-1 w-3 h-3 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm">
<span class="material-icons-round text-[10px] text-green-500 font-bold">check</span>
</span>
</button>
</div>
</div>
<div class="mb-6">
<h3 class="flex items-center justify-between text-sm font-semibold text-gray-700 mb-3 px-2">
                        Subiectul II
                        <span class="text-xs bg-orange-50 text-orange-600 px-2 py-0.5 rounded border border-orange-200 font-medium">1/2</span>
</h3>
<div class="grid grid-cols-5 gap-2">
<button class="aspect-square rounded bg-primary text-white font-medium flex items-center justify-center text-sm shadow-sm shadow-primary/20 relative hover:bg-primary-hover transition-colors">
                            1
                            <span class="absolute -top-1 -right-1 w-3 h-3 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm">
<span class="material-icons-round text-[10px] text-green-500 font-bold">check</span>
</span>
</button>
<button class="aspect-square rounded bg-white border border-gray-200 text-gray-500 hover:text-primary hover:bg-orange-50 hover:border-primary transition-colors font-medium flex items-center justify-center text-sm relative shadow-sm">
                            2
                        </button>
</div>
</div>
<div class="mb-6">
<h3 class="flex items-center justify-between text-sm font-semibold text-gray-700 mb-3 px-2">
                        Subiectul III
                        <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded border border-gray-200 font-medium">0/3</span>
</h3>
<div class="grid grid-cols-1 gap-2">
<button class="w-full text-left px-3 py-2 rounded bg-primary/5 border border-primary/20 text-primary font-semibold flex items-center justify-between text-sm transition-all shadow-sm">
<span>Problema 1</span>
<span class="material-icons-round text-base">edit</span>
</button>
<button class="w-full text-left px-3 py-2 rounded bg-white border border-transparent hover:border-gray-200 hover:bg-gray-50 text-gray-600 font-medium flex items-center justify-between text-sm transition-all">
<span>Problema 2</span>
</button>
<button class="w-full text-left px-3 py-2 rounded bg-white border border-transparent hover:border-gray-200 hover:bg-gray-50 text-gray-600 font-medium flex items-center justify-between text-sm transition-all">
<span>Problema 3</span>
</button>
</div>
</div>
<div class="mt-auto pt-6 border-t border-gray-100">
<button class="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors rounded hover:bg-gray-50">
<span class="material-icons-round text-gray-400">description</span>
                        Fișă de formule
                    </button>
<button class="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors rounded hover:bg-gray-50">
<span class="material-icons-round text-gray-400">help</span>
                        Instrucțiuni
                    </button>
</div>
</div>
</aside>
<section class="flex-1 bg-white overflow-y-auto px-8 py-6 relative">
<div class="max-w-3xl mx-auto pb-24">
<div class="flex items-center justify-between mb-6">
<span class="text-xs font-bold text-primary uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-100">Subiectul III</span>
<div class="flex items-center gap-2 text-gray-400">
<button class="hover:text-primary transition-colors p-1 rounded hover:bg-gray-100"><span class="material-icons-round">zoom_out</span></button>
<button class="hover:text-primary transition-colors p-1 rounded hover:bg-gray-100"><span class="material-icons-round">zoom_in</span></button>
</div>
</div>
<h2 class="text-3xl font-bold text-gray-900 mb-6 font-display">Problema 1. Divizori și Puteri</h2>
<div class="prose max-w-none text-gray-700 leading-relaxed font-normal">
<p class="mb-4 text-lg">
                        Scrieți un program C++ care citește de la tastatură un număr natural <code class="bg-gray-100 text-primary font-bold px-1.5 py-0.5 rounded border border-gray-200 font-mono text-sm">n</code> (<span class="font-serif italic font-semibold">n</span> ∈ [2, 10<sup>9</sup>]) și afișează pe ecran cel mai mare divizor prim al acestuia. Dacă numărul nu are divizori primi (caz imposibil pentru <span class="font-serif italic font-semibold">n</span> ≥ 2), se va afișa mesajul "NU".
                    </p>
<p class="mb-6">
                        Programul trebuie să fie eficient din punct de vedere al timpului de execuție, încadrându-se în limita de 0.1 secunde.
                    </p>
<div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
<div class="bg-gray-50 px-4 py-2.5 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">Exemplu 1</div>
<div class="p-4 space-y-4">
<div>
<span class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Intrare:</span>
<code class="block font-mono bg-gray-50 text-gray-800 p-2.5 rounded border border-gray-200 shadow-inner">24</code>
</div>
<div>
<span class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Ieșire:</span>
<code class="block font-mono bg-green-50 text-green-700 p-2.5 rounded border border-green-100 shadow-inner font-bold">3</code>
</div>
<p class="text-sm text-gray-500 italic bg-blue-50/50 p-2 rounded">Explicație: Divizorii primi ai lui 24 sunt 2 și 3. Cel mai mare este 3.</p>
</div>
</div>
<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
<div class="bg-gray-50 px-4 py-2.5 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">Exemplu 2</div>
<div class="p-4 space-y-4">
<div>
<span class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Intrare:</span>
<code class="block font-mono bg-gray-50 text-gray-800 p-2.5 rounded border border-gray-200 shadow-inner">17</code>
</div>
<div>
<span class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Ieșire:</span>
<code class="block font-mono bg-green-50 text-green-700 p-2.5 rounded border border-green-100 shadow-inner font-bold">17</code>
</div>
<p class="text-sm text-gray-500 italic bg-blue-50/50 p-2 rounded">Explicație: 17 este număr prim, deci cel mai mare divizor prim este el însuși.</p>
</div>
</div>
</div>
<div class="bg-yellow-50/50 rounded-lg p-5 border border-yellow-100">
<h3 class="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
<span class="material-icons-round text-yellow-600 text-lg">info</span>
                            Restricții și precizări
                        </h3>
<ul class="list-disc list-inside space-y-1.5 text-gray-600 text-sm pl-1">
<li>Numerele sunt naturale.</li>
<li>Se recomandă utilizarea tipurilor de date adecvate.</li>
<li>Timp maxim de execuție: 0.1s/test.</li>
<li>Memorie disponibilă: 8 MB.</li>
</ul>
</div>
</div>
</div>
<div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
</section>
<aside class="w-[45%] bg-background-editor border-l border-border-color flex flex-col shrink-0 relative shadow-[-4px_0_24px_-12px_rgba(0,0,0,0.05)] z-10">
<div class="h-10 bg-gray-100 border-b border-gray-200 flex items-center justify-between px-4 select-none">
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 px-3 py-1 rounded cursor-pointer shadow-sm hover:shadow transition-all">
<span class="w-2 h-2 rounded-full bg-blue-500"></span>
                        main.cpp
                    </div>
<span class="text-xs text-gray-400 font-medium">Nesalvat</span>
</div>
<div class="flex items-center gap-1">
<button class="p-1.5 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors" title="Settings">
<span class="material-icons-round text-lg">settings</span>
</button>
<button class="p-1.5 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors" title="Download Code">
<span class="material-icons-round text-lg">download</span>
</button>
<button class="p-1.5 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors" title="Reset Code">
<span class="material-icons-round text-lg">restart_alt</span>
</button>
</div>
</div>
<div class="flex-1 bg-background-editor overflow-y-auto font-mono text-sm leading-6 p-4 text-[#657b83] relative">
<div class="absolute left-0 top-0 bottom-0 w-12 border-r border-[#eee8d5] bg-[#fdf6e3] text-[#93a1a1] text-right pr-3 pt-4 select-none">
                    1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14
                </div>
<div class="pl-10 pt-0">
<div class="code-line"><span class="token-comment">// Rezolvarea pentru Problema 1 - Subiectul III</span></div>
<div class="code-line"><span class="token-keyword">#include</span> <span class="token-string">&lt;iostream&gt;</span></div>
<div class="code-line"><span class="token-keyword">using</span> <span class="token-keyword">namespace</span> std;</div>
<div class="code-line"></div>
<div class="code-line"><span class="token-keyword">int</span> <span class="token-function">main</span>() {</div>
<div class="code-line"> <span class="token-type">long long</span> n;</div>
<div class="code-line">    cin &gt;&gt; n;</div>
<div class="code-line"> </div>
<div class="code-line"> <span class="token-type">long long</span> max_div = <span class="token-number">0</span>;</div>
<div class="code-line"> <span class="token-comment">// Implementați logica aici</span></div>
<div class="code-line"> </div>
<div class="code-line"> <span class="token-keyword">if</span> (max_div == <span class="token-number">0</span>) {</div>
<div class="code-line">        cout &lt;&lt; <span class="token-string">"NU"</span>;</div>
<div class="code-line">    } <span class="token-keyword">else</span> {</div>
<div class="code-line">        cout &lt;&lt; max_div;</div>
<div class="code-line">    }</div>
<div class="code-line"> </div>
<div class="code-line"> <span class="token-keyword">return</span> <span class="token-number">0</span>;</div>
<div class="code-line">}</div>
</div>
<div class="absolute top-[170px] left-[78px] w-0.5 h-4 bg-gray-800 animate-pulse"></div>
</div>
<div class="h-44 bg-white border-t border-gray-200 flex flex-col shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
<div class="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
<span class="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
<span class="material-icons-round text-base">terminal</span> Output Consolă
                    </span>
<button class="text-xs text-gray-500 hover:text-red-500 flex items-center gap-1 transition-colors px-2 py-1 hover:bg-red-50 rounded">
<span class="material-icons-round text-sm">delete_sweep</span> Șterge
                    </button>
</div>
<div class="flex-1 p-4 font-mono text-sm text-gray-700 overflow-y-auto bg-gray-50/30">
<div class="flex gap-2 items-start">
<span class="text-green-600 mt-0.5">➜</span>
<span class="text-gray-600">Compilare cu succes... <span class="text-gray-400 text-xs">(0.42s)</span></span>
</div>
<div class="flex gap-2 mt-2 items-start">
<span class="text-blue-500 mt-0.5">➜</span>
<span>Rulare test preliminar:</span>
</div>
<div class="bg-white p-3 mt-2 rounded border border-gray-200 text-gray-800 shadow-sm font-semibold">
<div class="text-xs text-gray-400 font-normal uppercase mb-1">Rezultat:</div>
                        Input: 24<br/>
                        Output: 3
                    </div>
<div class="flex gap-2 mt-3 items-center bg-green-50 px-3 py-1.5 rounded-full w-max border border-green-100">
<span class="material-icons-round text-green-600 text-base">check_circle</span>
<span class="text-green-700 text-xs font-bold tracking-wide">CORECT</span>
</div>
</div>
</div>
<div class="absolute bottom-52 right-6 z-30">
<button class="group bg-primary hover:bg-primary-hover text-white rounded-full pl-5 pr-7 py-3 shadow-lg shadow-orange-500/30 flex items-center gap-3 transition-all hover:scale-105 active:scale-95 border-2 border-white">
<span class="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-white/30 transition-colors">
<span class="material-icons-round text-xl">play_arrow</span>
</span>
<span class="font-bold tracking-wide text-sm">RULEAZĂ COD</span>
</button>
</div>
</aside>
</main>
<div class="fixed inset-0 pointer-events-none opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-50 mix-blend-multiply"></div>

</body></html>
