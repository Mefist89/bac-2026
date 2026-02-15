<!DOCTYPE html>
<html lang="ro"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Lecții - Lista de cursuri informatică</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: "#f97316", 
                        "primary-hover": "#ea580c",
                        "background-main": "#f8fafc", // Very light gray/white for main background
                        "surface-card": "#ffffff", // Pure white for cards
                        "text-main": "#1e293b", // Slate 800 for main text
                        "text-muted": "#64748b", // Slate 500 for secondary text
                        "border-subtle": "#e2e8f0", // Light slate border
                    },
                    fontFamily: {
                        display: ["Inter", "sans-serif"],
                        body: ["Inter", "sans-serif"],
                    },
                    boxShadow: {
                        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
                    }
                },
            },
        };
    </script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
</head>
<body class="bg-background-main text-text-main font-body antialiased">
<nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border-subtle shadow-sm">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex justify-between h-20 items-center">
<div class="flex-shrink-0 flex items-center gap-2">
<span class="material-icons-outlined text-primary text-3xl">school</span>
<span class="font-display font-bold text-2xl text-slate-900">Info<span class="text-primary">BAC</span></span>
</div>
<div class="hidden md:flex space-x-8 items-center">
<a class="text-slate-600 hover:text-primary transition font-medium" href="#">Acasă</a>
<a class="text-primary font-bold transition" href="#">Lecții</a>
<a class="text-slate-600 hover:text-primary transition font-medium" href="#">Exerciții</a>
<a class="text-slate-600 hover:text-primary transition font-medium" href="#">Despre Noi</a>
</div>
<div class="flex items-center gap-4">
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary-hover transition-all transform hover:scale-105" href="#">
                        Contul Meu
                    </a>
</div>
</div>
</div>
</nav>
<header class="relative bg-white border-b border-border-subtle overflow-hidden">
<div class="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 text-center">
<span class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4 border border-primary/20">Pregătire BAC Informatică</span>
<h1 class="text-4xl md:text-5xl font-bold font-display mb-4 text-slate-900">Bibliotecă de Lecții</h1>
<p class="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">Explorează conceptele fundamentale, algoritmii și structurile de date necesare pentru a obține nota 10 la examenul de bacalaureat.</p>
</div>
</header>
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div class="flex flex-col lg:flex-row gap-8">
<aside class="w-full lg:w-1/4 space-y-6">
<div class="bg-surface-card p-6 rounded-2xl shadow-soft border border-border-subtle">
<h3 class="font-bold text-lg mb-4 text-slate-900 flex items-center gap-2">
<span class="material-icons-outlined text-primary">search</span> Caută
                    </h3>
<div class="relative">
<input class="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 text-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition placeholder-slate-400" placeholder="Căutare lecții..." type="text"/>
</div>
</div>
<div class="bg-surface-card p-6 rounded-2xl shadow-soft border border-border-subtle">
<h3 class="font-bold text-lg mb-4 text-slate-900 flex items-center gap-2">
<span class="material-icons-outlined text-primary">school</span> Clasa
                    </h3>
<div class="space-y-3">
<label class="flex items-center space-x-3 cursor-pointer group">
<input class="form-checkbox h-5 w-5 text-primary rounded border-slate-300 bg-white focus:ring-primary" type="checkbox"/>
<span class="text-slate-600 group-hover:text-primary transition">Clasa a IX-a</span>
</label>
<label class="flex items-center space-x-3 cursor-pointer group">
<input checked="" class="form-checkbox h-5 w-5 text-primary rounded border-slate-300 bg-white focus:ring-primary" type="checkbox"/>
<span class="text-slate-600 group-hover:text-primary transition">Clasa a X-a</span>
</label>
<label class="flex items-center space-x-3 cursor-pointer group">
<input class="form-checkbox h-5 w-5 text-primary rounded border-slate-300 bg-white focus:ring-primary" type="checkbox"/>
<span class="text-slate-600 group-hover:text-primary transition">Clasa a XI-a</span>
</label>
</div>
</div>
<div class="bg-surface-card p-6 rounded-2xl shadow-soft border border-border-subtle">
<h3 class="font-bold text-lg mb-4 text-slate-900 flex items-center gap-2">
<span class="material-icons-outlined text-primary">category</span> Categorii
                    </h3>
<ul class="space-y-2">
<li>
<a class="flex justify-between items-center text-primary font-semibold bg-primary/5 px-3 py-2 rounded-lg transition" href="#">
<span>Algoritmi Elementari</span>
<span class="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs font-bold">12</span>
</a>
</li>
<li>
<a class="flex justify-between items-center text-slate-600 hover:text-primary hover:bg-slate-50 px-3 py-2 rounded-lg transition" href="#">
<span>Structuri de Date</span>
<span class="bg-slate-100 text-slate-500 px-2 py-0.5 rounded text-xs font-medium">8</span>
</a>
</li>
<li>
<a class="flex justify-between items-center text-slate-600 hover:text-primary hover:bg-slate-50 px-3 py-2 rounded-lg transition" href="#">
<span>Grafuri</span>
<span class="bg-slate-100 text-slate-500 px-2 py-0.5 rounded text-xs font-medium">15</span>
</a>
</li>
<li>
<a class="flex justify-between items-center text-slate-600 hover:text-primary hover:bg-slate-50 px-3 py-2 rounded-lg transition" href="#">
<span>Programare Dinamică</span>
<span class="bg-slate-100 text-slate-500 px-2 py-0.5 rounded text-xs font-medium">6</span>
</a>
</li>
<li>
<a class="flex justify-between items-center text-slate-600 hover:text-primary hover:bg-slate-50 px-3 py-2 rounded-lg transition" href="#">
<span>POO</span>
<span class="bg-slate-100 text-slate-500 px-2 py-0.5 rounded text-xs font-medium">4</span>
</a>
</li>
</ul>
</div>
</aside>
<div class="w-full lg:w-3/4">
<div class="flex flex-wrap justify-between items-center mb-6 bg-surface-card p-4 rounded-xl shadow-soft border border-border-subtle">
<p class="text-sm text-slate-500 mb-2 sm:mb-0">Afișare <span class="font-bold text-slate-900">9</span> rezultate din <span class="font-bold text-slate-900">45</span></p>
<div class="flex items-center gap-3">
<span class="text-sm text-slate-500">Sortare:</span>
<select class="bg-slate-50 border-0 text-sm rounded-lg focus:ring-2 focus:ring-primary text-slate-700 py-2 pl-3 pr-8 cursor-pointer hover:bg-slate-100 transition">
<option>Cele mai noi</option>
<option>Popularitate</option>
<option>Dificultate (Crescator)</option>
</select>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
<div class="bg-surface-card rounded-2xl overflow-hidden shadow-soft border border-border-subtle hover:shadow-hover hover:border-primary/30 transition-all duration-300 group flex flex-col h-full">
<div class="relative h-48 bg-slate-100 overflow-hidden">
<img alt="Code on screen" class="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyPNO1CbXPranoEMdPv9Ym_K9LWFk-nNj8Dj73_9m9Fo-Y4GQVjatdHVrVau4Aran2k43zgRyPDfgudPTE174QK2ccQIoEIdd3qo3kXm7V0N2gY9EOhPilQhkpcZZ6p2u2Iiwefdjr5sSrcGuSxwCM8JYNDlJwyZKylOrPXXJHv3rLSV5ufwVvOtxZLLI0ZoWurIkYFaBJMjWy76Ax8LZ3lJbxB8jupZPD2VJP1WcytexGBkMCUc6KXOP0t-_pD_UPRb9NsrP3mXcJ"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div class="absolute top-3 left-3 bg-white/95 backdrop-blur text-blue-600 text-xs font-bold px-2.5 py-1 rounded shadow-sm">Algoritmi</div>
<div class="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1 shadow-sm">
<span class="material-icons-outlined text-[14px]">speed</span> Ușor
                            </div>
</div>
<div class="p-6 flex flex-col flex-grow">
<div class="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3 uppercase tracking-wide">
<span class="flex items-center gap-1"><span class="material-icons-outlined text-[16px]">schedule</span> 45 min</span>
<span>•</span>
<span>Clasa a IX-a</span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition leading-tight">Divizibilitate și Primaritate</h3>
<p class="text-slate-600 text-sm mb-5 line-clamp-2 flex-grow leading-relaxed">
                                Învață cum să verifici dacă un număr este prim, descompunerea în factori primi și cel mai mare divizor comun.
                            </p>
<div class="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
<span class="text-primary font-bold text-sm bg-primary/5 px-2 py-1 rounded">Gratuit</span>
<a class="inline-flex items-center text-sm font-bold text-slate-800 hover:text-primary transition group-hover:translate-x-1 duration-300" href="#">
                                    Începe
                                    <span class="material-icons-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
<div class="bg-surface-card rounded-2xl overflow-hidden shadow-soft border border-border-subtle hover:shadow-hover hover:border-primary/30 transition-all duration-300 group flex flex-col h-full">
<div class="relative h-48 bg-slate-100 overflow-hidden">
<img alt="Sorting algorithm visualization" class="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_2GIzjZ6VxsoSJbUfo38WHmnp0paPQT4I1l-Nbx_g40yb5Rys24kY3plStXv19IqXSVQlPRy3GOHnQvvklcmrIBnbWCysBTG9sMX7JexzKn30RapfrKb_penjuoJgHECYYjNpIwJgoOr0R21JUWMAbeJqzWxK-Phrv2AkyGG7Xw4MNx8P6vl-O9m7-wg44_bPTmec685Btfls3bQ8b2pqpAm7FnN1M-PpQn0w0L9NOFtjR7BRUo2zNIw8N7OH3UFjKpV5KW7zCae5"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div class="absolute top-3 left-3 bg-white/95 backdrop-blur text-purple-600 text-xs font-bold px-2.5 py-1 rounded shadow-sm">Sortare</div>
<div class="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1 shadow-sm">
<span class="material-icons-outlined text-[14px]">assessment</span> Mediu
                            </div>
</div>
<div class="p-6 flex flex-col flex-grow">
<div class="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3 uppercase tracking-wide">
<span class="flex items-center gap-1"><span class="material-icons-outlined text-[16px]">schedule</span> 60 min</span>
<span>•</span>
<span>Clasa a X-a</span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition leading-tight">Metode de Sortare</h3>
<p class="text-slate-600 text-sm mb-5 line-clamp-2 flex-grow leading-relaxed">
                                Bubble Sort, Selection Sort și Insertion Sort explicate pas cu pas. Analiza complexității.
                            </p>
<div class="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
<span class="text-primary font-bold text-sm bg-primary/5 px-2 py-1 rounded">Gratuit</span>
<a class="inline-flex items-center text-sm font-bold text-slate-800 hover:text-primary transition group-hover:translate-x-1 duration-300" href="#">
                                    Începe
                                    <span class="material-icons-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
<div class="bg-surface-card rounded-2xl overflow-hidden shadow-soft border border-border-subtle hover:shadow-hover hover:border-primary/30 transition-all duration-300 group flex flex-col h-full">
<div class="relative h-48 bg-slate-100 overflow-hidden">
<img alt="Graph structure" class="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQz6aO69qZnxi_9DW2OPMxeRRfHprnNS7r08dVsvOqIkpCUtY5Mwf10vOnD2OyzNO78JyEDrW1sm8sG1oc7EwaRgt5yaIt4GIse-hZDy_pwHehul3mkXzo8i0HQxNfHXi1TltPwYmfGpk8_Sgs8RkB0R-J42ruLJ9bZwRr_JyNJ5A8vf19IWvU7EEV_gtU65yA_rn92OYLWX2ziu5fsLL_WyWl5Dzbyah3BKqrfPdewoHtdqHQqRwdghiG1qELRdDRuaJ9H3Z1jDkm"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div class="absolute top-3 left-3 bg-white/95 backdrop-blur text-indigo-600 text-xs font-bold px-2.5 py-1 rounded shadow-sm">Grafuri</div>
<div class="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1 shadow-sm">
<span class="material-icons-outlined text-[14px]">fitness_center</span> Avansat
                            </div>
</div>
<div class="p-6 flex flex-col flex-grow">
<div class="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3 uppercase tracking-wide">
<span class="flex items-center gap-1"><span class="material-icons-outlined text-[16px]">schedule</span> 90 min</span>
<span>•</span>
<span>Clasa a XI-a</span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition leading-tight">Parcurgerea Grafurilor (BFS &amp; DFS)</h3>
<p class="text-slate-600 text-sm mb-5 line-clamp-2 flex-grow leading-relaxed">
                                Algoritmii de parcurgere în lățime și în adâncime. Aplicații practice și implementare C++.
                            </p>
<div class="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
<span class="text-white bg-slate-800 font-bold text-xs px-2 py-1 rounded flex items-center gap-1"><span class="material-icons-outlined text-[14px]">star</span> Premium</span>
<a class="inline-flex items-center text-sm font-bold text-slate-800 hover:text-primary transition group-hover:translate-x-1 duration-300" href="#">
                                    Începe
                                    <span class="material-icons-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
<div class="bg-surface-card rounded-2xl overflow-hidden shadow-soft border border-border-subtle hover:shadow-hover hover:border-primary/30 transition-all duration-300 group flex flex-col h-full">
<div class="relative h-48 bg-slate-100 overflow-hidden">
<img alt="Matrix binary code" class="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0q0KXHUwmZKLt8Q6gHuAEHPS3Ij5UcRtb7GOKm-mXqDNFHT7kVFfXr76w4g5lOdDML88omSzJQatYNUt_kUrRpahpoihQq00BLtQvYo8BPSgYXZjHYZRelFT_Z8lgotyAqL8CwW5HDVDo7gWTJONK1A6xcYqpD-OSSNtAwqiWqzNXM0emu1LcXfjKdwpzP6bhLbjYwaZGQXfA-k69Jz02HSY4Jc0hQ7c_Nb7rCrrUaoB5QnyefBWwiGfmb4SEXrmX1cUHvEFh4uBA"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div class="absolute top-3 left-3 bg-white/95 backdrop-blur text-blue-600 text-xs font-bold px-2.5 py-1 rounded shadow-sm">Tablouri</div>
<div class="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1 shadow-sm">
<span class="material-icons-outlined text-[14px]">assessment</span> Mediu
                            </div>
</div>
<div class="p-6 flex flex-col flex-grow">
<div class="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3 uppercase tracking-wide">
<span class="flex items-center gap-1"><span class="material-icons-outlined text-[16px]">schedule</span> 50 min</span>
<span>•</span>
<span>Clasa a IX-a</span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition leading-tight">Matrice și Vectori</h3>
<p class="text-slate-600 text-sm mb-5 line-clamp-2 flex-grow leading-relaxed">
                                Manipularea tablourilor bidimensionale. Parcurgerea în spirală și elemente de pe diagonale.
                            </p>
<div class="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
<span class="text-primary font-bold text-sm bg-primary/5 px-2 py-1 rounded">Gratuit</span>
<a class="inline-flex items-center text-sm font-bold text-slate-800 hover:text-primary transition group-hover:translate-x-1 duration-300" href="#">
                                    Începe
                                    <span class="material-icons-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
<div class="bg-surface-card rounded-2xl overflow-hidden shadow-soft border border-border-subtle hover:shadow-hover hover:border-primary/30 transition-all duration-300 group flex flex-col h-full">
<div class="relative h-48 bg-slate-100 overflow-hidden">
<img alt="Backtracking maze" class="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBHGHV6FghL1nFAW54U2slptatF2tDAKjGqkjCHCCkBKUCWYsOBgGmASuEQXBsa3tmi0mMKpuc_-oFoOb8TPsmZHyNbU4ZuBmeE0bDmsnyxXbxwCK7_2B9QB-TOIkT8tcuwB6PH0w5rRrMOXEaMOHoYQYhlE_mKiPboGanskg05YyXDJphxZAPK-ErQwzRHzRic4oVVE-3fGM0bREJm4RXtVC57N3Dm3wMj2QsLHPkeE2pW3DEoY5gdEfyfCR8mEl00Q-FnVkM6oKH"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div class="absolute top-3 left-3 bg-white/95 backdrop-blur text-pink-600 text-xs font-bold px-2.5 py-1 rounded shadow-sm">Backtracking</div>
<div class="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1 shadow-sm">
<span class="material-icons-outlined text-[14px]">fitness_center</span> Avansat
                            </div>
</div>
<div class="p-6 flex flex-col flex-grow">
<div class="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3 uppercase tracking-wide">
<span class="flex items-center gap-1"><span class="material-icons-outlined text-[16px]">schedule</span> 120 min</span>
<span>•</span>
<span>Clasa a X-a</span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition leading-tight">Metoda Backtracking</h3>
<p class="text-slate-600 text-sm mb-5 line-clamp-2 flex-grow leading-relaxed">
                                Generarea permutărilor, combinărilor și aranjamentelor. Problema damelor și labirintul.
                            </p>
<div class="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
<span class="text-white bg-slate-800 font-bold text-xs px-2 py-1 rounded flex items-center gap-1"><span class="material-icons-outlined text-[14px]">star</span> Premium</span>
<a class="inline-flex items-center text-sm font-bold text-slate-800 hover:text-primary transition group-hover:translate-x-1 duration-300" href="#">
                                    Începe
                                    <span class="material-icons-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
<div class="bg-surface-card rounded-2xl overflow-hidden shadow-soft border border-border-subtle hover:shadow-hover hover:border-primary/30 transition-all duration-300 group flex flex-col h-full">
<div class="relative h-48 bg-slate-100 overflow-hidden">
<img alt="Character strings" class="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8XJPFooG2UP_fmdRAySmqeDNgeMoUsBrwB0IqLBaAk9_gotVUhQvY2xCi3kPj-F-GK7b2yWJBtUQ--ogr8bK1r5qieEGOKdOWA76un1Ss_3er-XiZ-9je5d0NjL-iGxPeOSx0KOobA8JkjsHy63A93cBPag9YiIl3PKgT9pDYucmIuw8QJ1nCXHTauCH4kKTTf8yYs8DYYTAaMQsU2UKMy2SRE5aB_4xVKXJJVPvPl3ljg69Q4L1qCdUhY7e0Xe_Y_JjEfdX9rvjt"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div class="absolute top-3 left-3 bg-white/95 backdrop-blur text-teal-600 text-xs font-bold px-2.5 py-1 rounded shadow-sm">Șiruri</div>
<div class="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1 shadow-sm">
<span class="material-icons-outlined text-[14px]">speed</span> Ușor
                            </div>
</div>
<div class="p-6 flex flex-col flex-grow">
<div class="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3 uppercase tracking-wide">
<span class="flex items-center gap-1"><span class="material-icons-outlined text-[16px]">schedule</span> 40 min</span>
<span>•</span>
<span>Clasa a X-a</span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition leading-tight">Șiruri de Caractere</h3>
<p class="text-slate-600 text-sm mb-5 line-clamp-2 flex-grow leading-relaxed">
                                Funcții predefinite în `<cstring>`. Prelucrarea textelor, palindroame și anagrame.
                            </cstring></p>
<div class="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
<span class="text-primary font-bold text-sm bg-primary/5 px-2 py-1 rounded">Gratuit</span>
<a class="inline-flex items-center text-sm font-bold text-slate-800 hover:text-primary transition group-hover:translate-x-1 duration-300" href="#">
                                    Începe
                                    <span class="material-icons-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
<div class="mt-12 flex justify-center">
<nav class="flex items-center gap-2 bg-white p-2 rounded-xl shadow-soft border border-border-subtle">
<button class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 transition">
<span class="material-icons-outlined">chevron_left</span>
</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-md transform hover:scale-105 transition">1</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-600 font-medium transition">2</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-600 font-medium transition">3</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 transition">
<span class="material-icons-outlined">chevron_right</span>
</button>
</nav>
</div>
</div>
</div>
</main>
<footer class="bg-white border-t border-border-subtle mt-12 py-12">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div class="col-span-1 md:col-span-1">
<div class="flex items-center gap-2 mb-4">
<span class="material-icons-outlined text-primary text-2xl">school</span>
<span class="font-display font-bold text-xl text-slate-900">Info<span class="text-primary">BAC</span></span>
</div>
<p class="text-sm text-slate-500 leading-relaxed">
                        Platforma ta completă pentru pregătirea examenului de bacalaureat la informatică.
                    </p>
</div>
<div>
<h4 class="font-bold text-slate-900 mb-4">Resurse</h4>
<ul class="space-y-2 text-sm text-slate-500">
<li><a class="hover:text-primary transition" href="#">Lecții Teoretice</a></li>
<li><a class="hover:text-primary transition" href="#">Probleme Rezolvate</a></li>
<li><a class="hover:text-primary transition" href="#">Subiecte BAC</a></li>
<li><a class="hover:text-primary transition" href="#">Variante Antrenament</a></li>
</ul>
</div>
<div>
<h4 class="font-bold text-slate-900 mb-4">Suport</h4>
<ul class="space-y-2 text-sm text-slate-500">
<li><a class="hover:text-primary transition" href="#">Întrebări Frecvente</a></li>
<li><a class="hover:text-primary transition" href="#">Contact</a></li>
<li><a class="hover:text-primary transition" href="#">Termeni și Condiții</a></li>
</ul>
</div>
<div>
<h4 class="font-bold text-slate-900 mb-4">Abonează-te</h4>
<p class="text-xs text-slate-500 mb-3">Primește săptămânal probleme noi și sfaturi pentru examen.</p>
<div class="flex gap-2">
<input class="bg-slate-50 border border-slate-200 text-sm rounded-lg px-3 py-2 w-full focus:outline-none focus:border-primary text-slate-700 transition" placeholder="Emailul tău" type="email"/>
<button class="bg-primary hover:bg-primary-hover text-white rounded-lg px-4 py-2 transition text-sm font-medium shadow-sm">Trimite</button>
</div>
</div>
</div>
<div class="border-t border-slate-200 mt-12 pt-8 text-center text-sm text-slate-400">
                © 2024 InfoBAC România. Toate drepturile rezervate.
            </div>
</div>
</footer>

</body></html>
