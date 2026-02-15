<!DOCTYPE html>
<html lang="ro"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Exerciții Practice - Pregătire BAC Informatică</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"/>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#FF7425", // Vibrant Orange from screenshots
                        secondary: "#4C5FD5", // Purple/Blue accent
                        "background-light": "#F5F7FA",
                        "background-dark": "#0B0B26", // Deep dark blue background
                        "card-dark": "#151536", // Slightly lighter dark blue for cards
                        "card-border": "#2E2E5C",
                        "status-success": "#00C48C",
                        "status-warning": "#FFCF00",
                        "status-neutral": "#6E6E91",
                    },
                    fontFamily: {
                        display: ['Plus Jakarta Sans', 'sans-serif'],
                        body: ['Plus Jakarta Sans', 'sans-serif'],
                    },
                    borderRadius: {
                        DEFAULT: "0.75rem",
                    },
                },
            },
        };
    </script>
<style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .glass-effect {
            background: rgba(21, 21, 54, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .tooltip-arrow {
            position: absolute;
            bottom: -6px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid #FF7425;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 transition-colors duration-300 min-h-screen font-body">
<nav class="sticky top-0 z-50 w-full glass-effect border-b border-gray-200 dark:border-white/5">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between h-20">
<div class="flex items-center gap-12">
<div class="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<span class="material-icons-outlined text-primary text-4xl">school</span>
<span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">eduAct</span>
</div>
<div class="hidden md:block">
<div class="flex items-baseline space-x-8">
<a class="text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">Acasă</a>
<a class="text-primary dark:text-primary px-3 py-2 rounded-md text-sm font-bold bg-primary/10 transition-colors" href="#">Exerciții</a>
<a class="text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">Teorie</a>
<a class="text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">Clasament</a>
</div>
</div>
</div>
<div class="flex items-center gap-4">
<button class="p-2 rounded-full text-gray-400 hover:text-white transition-colors relative">
<span class="material-icons-outlined">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
</button>
<div class="flex items-center gap-3 pl-4 border-l border-gray-700">
<div class="text-right hidden sm:block">
<p class="text-sm font-bold text-white">Andrei Popescu</p>
<p class="text-xs text-primary font-medium">1250 Puncte</p>
</div>
<img alt="User Avatar" class="h-10 w-10 rounded-full border-2 border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwCBbUwbxYABkZJ1AqzVpLlWxuTYNuNGdazvjR8aYAU1q7iGD177qou9D6fJZtNcJVf08j2hogLVi5_BY5E0LpP3UXJ1ht8lwfZtAoyNIbaks-Z2OjUIsQkTvi0eJY8kfWspCc5-wdCW2fWVltonlQ1JWYNiB9OZx9jnY6VOVcOj3JHX9j-xfLdxlga20DxYxRvnBlRACbO3dpQw5uxaDMkLHqPBskn7vZqKf9yWcECqj0C36R5yOUVYNPQLD0UJbj066uE2w_236c"/>
</div>
</div>
</div>
</div>
</nav>
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
<div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
<div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
<div class="mb-12">
<h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                Exerciții <span class="text-primary">Practice</span>
</h1>
<p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                Pregătește-te pentru examenul de Bacalaureat la Informatică. Rezolvă probleme de C++, algoritmică și structuri de date.
            </p>
</div>
<div class="flex flex-col md:flex-row gap-6 mb-10 items-center justify-between bg-white dark:bg-card-dark p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-card-border">
<div class="relative w-full md:w-96">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-icons-outlined text-gray-400">search</span>
</div>
<input class="block w-full pl-10 pr-3 py-3 border-none rounded-xl leading-5 bg-gray-50 dark:bg-[#0B0B26] text-slate-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm" placeholder="Caută exerciții, concepte..." type="text"/>
</div>
<div class="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
<button class="px-5 py-2.5 rounded-lg text-sm font-medium bg-primary text-white shadow-lg shadow-primary/25 whitespace-nowrap transition-all hover:bg-orange-600">
                    Toate
                </button>
<button class="px-5 py-2.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-[#0B0B26] text-gray-600 dark:text-gray-400 border border-transparent hover:border-primary/30 whitespace-nowrap transition-all">
                    Vectori
                </button>
<button class="px-5 py-2.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-[#0B0B26] text-gray-600 dark:text-gray-400 border border-transparent hover:border-primary/30 whitespace-nowrap transition-all">
                    Matrice
                </button>
<button class="px-5 py-2.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-[#0B0B26] text-gray-600 dark:text-gray-400 border border-transparent hover:border-primary/30 whitespace-nowrap transition-all">
                    Grafuri
                </button>
<button class="px-5 py-2.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-[#0B0B26] text-gray-600 dark:text-gray-400 border border-transparent hover:border-primary/30 whitespace-nowrap transition-all">
                    Backtracking
                </button>
</div>
</div>
<div class="grid grid-cols-1 gap-6">
<div class="group relative bg-white dark:bg-card-dark rounded-2xl p-6 border border-gray-200 dark:border-card-border hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div class="flex-1">
<div class="flex items-center gap-3 mb-2">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-700/50">
                                Vectori
                            </span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
                                Ușor
                            </span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                            Suma elementelor pare
                        </h3>
<p class="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                            Scrieți un program care citește de la tastatură un număr natural n și apoi n numere naturale. Programul trebuie să calculeze suma numerelor pare citite.
                        </p>
</div>
<div class="flex items-center justify-between md:justify-end gap-6 md:w-auto w-full border-t md:border-t-0 border-gray-100 dark:border-white/5 pt-4 md:pt-0">
<div class="flex flex-col items-center">
<span class="text-xs text-slate-500 dark:text-slate-500 uppercase font-semibold tracking-wider">Puncte</span>
<span class="text-lg font-bold text-slate-900 dark:text-white">100</span>
</div>
<div class="flex flex-col items-center">
<span class="text-xs text-slate-500 dark:text-slate-500 uppercase font-semibold tracking-wider mb-1">Status</span>
<div class="flex items-center gap-1.5 text-status-success">
<span class="material-icons-outlined text-lg">check_circle</span>
<span class="text-sm font-bold">Rezolvat</span>
</div>
</div>
<button class="bg-gray-100 dark:bg-[#0B0B26] hover:bg-primary hover:text-white text-slate-700 dark:text-white p-3 rounded-xl transition-all duration-300 group-hover:translate-x-1">
<span class="material-icons-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
<div class="group relative bg-white dark:bg-card-dark rounded-2xl p-6 border border-gray-200 dark:border-card-border hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div class="flex-1">
<div class="flex items-center gap-3 mb-2">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-700/50">
                                Matrice
                            </span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700/50">
                                Mediu
                            </span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                            Parcurgere Spirală
                        </h3>
<p class="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                            Se dă o matrice pătratică cu n linii și n coloane. Să se afișeze elementele matricei parcurgând-o în spirală, pornind din colțul stânga-sus.
                        </p>
</div>
<div class="flex items-center justify-between md:justify-end gap-6 md:w-auto w-full border-t md:border-t-0 border-gray-100 dark:border-white/5 pt-4 md:pt-0">
<div class="flex flex-col items-center">
<span class="text-xs text-slate-500 dark:text-slate-500 uppercase font-semibold tracking-wider">Puncte</span>
<span class="text-lg font-bold text-slate-900 dark:text-white">250</span>
</div>
<div class="relative group/hint">
<button class="flex items-center gap-1 text-primary text-sm font-semibold hover:text-orange-400 transition-colors">
<span class="material-icons-outlined text-base">lightbulb</span>
<span>Hint</span>
</button>
<div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 bg-primary text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover/hint:opacity-100 group-hover/hint:visible transition-all duration-300 z-10 text-center">
                                Încearcă să folosești 4 variabile pentru marginile curente ale spiralei (sus, jos, stânga, dreapta).
                                <div class="tooltip-arrow"></div>
</div>
</div>
<div class="flex flex-col items-center">
<span class="text-xs text-slate-500 dark:text-slate-500 uppercase font-semibold tracking-wider mb-1">Status</span>
<div class="flex items-center gap-1.5 text-status-warning">
<span class="material-icons-outlined text-lg">pending</span>
<span class="text-sm font-bold">În lucru</span>
</div>
</div>
<button class="bg-primary text-white p-3 rounded-xl shadow-lg shadow-primary/30 hover:bg-orange-600 transition-all duration-300 group-hover:translate-x-1">
<span class="material-icons-outlined">play_arrow</span>
</button>
</div>
</div>
</div>
<div class="group relative bg-white dark:bg-card-dark rounded-2xl p-6 border border-gray-200 dark:border-card-border hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div class="flex-1">
<div class="flex items-center gap-3 mb-2">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-700/50">
                                Grafuri
                            </span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-700/50">
                                Greu
                            </span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                            Drumul Minim (Dijkstra)
                        </h3>
<p class="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                            Se dă un graf orientat ponderat conex. Determinați drumul de cost minim de la nodul de start S la toate celelalte noduri din graf.
                        </p>
</div>
<div class="flex items-center justify-between md:justify-end gap-6 md:w-auto w-full border-t md:border-t-0 border-gray-100 dark:border-white/5 pt-4 md:pt-0">
<div class="flex flex-col items-center">
<span class="text-xs text-slate-500 dark:text-slate-500 uppercase font-semibold tracking-wider">Puncte</span>
<span class="text-lg font-bold text-slate-900 dark:text-white">500</span>
</div>
<div class="flex flex-col items-center">
<span class="text-xs text-slate-500 dark:text-slate-500 uppercase font-semibold tracking-wider mb-1">Status</span>
<div class="flex items-center gap-1.5 text-status-neutral">
<span class="material-icons-outlined text-lg">radio_button_unchecked</span>
<span class="text-sm font-bold">Neînceput</span>
</div>
</div>
<button class="bg-gray-100 dark:bg-[#0B0B26] hover:bg-primary hover:text-white text-slate-700 dark:text-white p-3 rounded-xl transition-all duration-300 group-hover:translate-x-1">
<span class="material-icons-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
<div class="group relative bg-white dark:bg-card-dark rounded-2xl p-6 border border-gray-200 dark:border-card-border hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div class="flex-1">
<div class="flex items-center gap-3 mb-2">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700/50">
                                Șiruri de caractere
                            </span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
                                Ușor
                            </span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                            Vocale și Consoane
                        </h3>
<p class="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                            Se dă un text cu cel mult 100 de caractere. Să se determine numărul de vocale din text. Se consideră vocale literele a, e, i, o, u, atât mici cât și mari.
                        </p>
</div>
<div class="flex items-center justify-between md:justify-end gap-6 md:w-auto w-full border-t md:border-t-0 border-gray-100 dark:border-white/5 pt-4 md:pt-0">
<div class="flex flex-col items-center">
<span class="text-xs text-slate-500 dark:text-slate-500 uppercase font-semibold tracking-wider">Puncte</span>
<span class="text-lg font-bold text-slate-900 dark:text-white">100</span>
</div>
<div class="flex flex-col items-center">
<span class="text-xs text-slate-500 dark:text-slate-500 uppercase font-semibold tracking-wider mb-1">Status</span>
<div class="flex items-center gap-1.5 text-status-neutral">
<span class="material-icons-outlined text-lg">radio_button_unchecked</span>
<span class="text-sm font-bold">Neînceput</span>
</div>
</div>
<button class="bg-gray-100 dark:bg-[#0B0B26] hover:bg-primary hover:text-white text-slate-700 dark:text-white p-3 rounded-xl transition-all duration-300 group-hover:translate-x-1">
<span class="material-icons-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
<div class="mt-12 flex justify-center">
<nav aria-label="Pagination" class="isolate inline-flex -space-x-px rounded-md shadow-sm">
<a class="relative inline-flex items-center rounded-l-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-card-border hover:bg-gray-50 dark:hover:bg-card-dark focus:z-20 focus:outline-offset-0" href="#">
<span class="sr-only">Previous</span>
<span class="material-icons-outlined text-sm">chevron_left</span>
</a>
<a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-primary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="#">1</a>
<a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-card-border hover:bg-gray-50 dark:hover:bg-card-dark focus:z-20 focus:outline-offset-0" href="#">2</a>
<a class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-card-border hover:bg-gray-50 dark:hover:bg-card-dark focus:z-20 focus:outline-offset-0 md:inline-flex" href="#">3</a>
<span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-500 ring-1 ring-inset ring-gray-300 dark:ring-card-border focus:outline-offset-0">...</span>
<a class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-card-border hover:bg-gray-50 dark:hover:bg-card-dark focus:z-20 focus:outline-offset-0 md:inline-flex" href="#">8</a>
<a class="relative inline-flex items-center rounded-r-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-card-border hover:bg-gray-50 dark:hover:bg-card-dark focus:z-20 focus:outline-offset-0" href="#">
<span class="sr-only">Next</span>
<span class="material-icons-outlined text-sm">chevron_right</span>
</a>
</nav>
</div>
</main>
<footer class="bg-card-dark border-t border-card-border pt-16 pb-8">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div class="md:col-span-1">
<div class="flex items-center gap-2 mb-6">
<span class="material-icons-outlined text-primary text-3xl">school</span>
<span class="text-xl font-bold text-white">eduAct</span>
</div>
<p class="text-slate-400 text-sm leading-relaxed mb-6">
                        Platforma numărul 1 pentru pregătirea examenului de Bacalaureat la Informatică. Peste 1000 de exerciții și teste.
                    </p>
<div class="flex gap-4">
<a class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-colors" href="#">
<i class="text-sm material-icons-outlined" style="font-size: 16px;">facebook</i>
</a>
<a class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-colors" href="#">
<i class="text-sm material-icons-outlined" style="font-size: 16px;">smart_display</i>
</a>
<a class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-colors" href="#">
<i class="text-sm material-icons-outlined" style="font-size: 16px;">alternate_email</i>
</a>
</div>
</div>
<div>
<h4 class="text-white font-bold mb-6">Linkuri Rapide</h4>
<ul class="space-y-3 text-sm text-slate-400">
<li><a class="hover:text-primary transition-colors" href="#">Toate Cursurile</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Clasament Elevi</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Despre Noi</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 class="text-white font-bold mb-6">Resurse</h4>
<ul class="space-y-3 text-sm text-slate-400">
<li><a class="hover:text-primary transition-colors" href="#">Subiecte BAC 2023</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Variante Antrenament</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Compilator C++ Online</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Termeni și Condiții</a></li>
</ul>
</div>
<div>
<h4 class="text-white font-bold mb-6">Contact</h4>
<ul class="space-y-4 text-sm text-slate-400">
<li class="flex items-start gap-3">
<span class="material-icons-outlined text-primary text-lg">location_on</span>
<span>Str. Victoriei nr. 10, București, România</span>
</li>
<li class="flex items-center gap-3">
<span class="material-icons-outlined text-primary text-lg">phone</span>
<span>+40 722 123 456</span>
</li>
<li class="flex items-center gap-3">
<span class="material-icons-outlined text-primary text-lg">email</span>
<span>contact@eduact.ro</span>
</li>
</ul>
</div>
</div>
<div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-slate-500 text-sm">© 2024 eduAct. Toate drepturile rezervate.</p>
<div class="flex gap-6">
<a class="text-slate-500 text-sm hover:text-white transition-colors" href="#">Confidențialitate</a>
<a class="text-slate-500 text-sm hover:text-white transition-colors" href="#">Cookie-uri</a>
</div>
</div>
</div>
</footer>

</body></html>
