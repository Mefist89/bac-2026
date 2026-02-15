<!DOCTYPE html>
<html class="scroll-smooth" lang="ro"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>BAC Info Prep - Pregătire Bacalaureat Informatică</title>
<meta content="Platforma ta completă pentru pregătirea examenului de Bacalaureat la Informatică. Teorie, exerciții și teste rezolvate." name="description"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#f97316", // Vibrant Orange from reference
                        secondary: "#6366f1", // Indigo/Purple accent
                        "background-light": "#f3f4f6", // Light gray for light mode
                        "background-dark": "#0f172a", // Deep Navy/Slate for dark mode (main theme)
                        "surface-dark": "#1e293b", // Slightly lighter navy for cards
                        "surface-light": "#ffffff", // White for cards in light mode
                    },
                    fontFamily: {
                        display: ["'Outfit'", "sans-serif"],
                        body: ["'Inter'", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "0.5rem",
                        'xl': '1rem',
                        '2xl': '1.5rem',
                        '3xl': '2rem',
                    },
                    backgroundImage: {
                        'hero-pattern': "url('https://www.transparenttextures.com/patterns/cubes.png')",
                    }
                },
            },
        };
    </script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=Outfit:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
<style>
        body {
            font-family: 'Inter', sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Outfit', sans-serif;
        }
        .gradient-text {
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 transition-colors duration-300">
<nav class="fixed w-full z-50 bg-surface-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex justify-between items-center h-20">
<div class="flex-shrink-0 flex items-center gap-2">
<span class="material-icons-round text-primary text-4xl">terminal</span>
<span class="font-display font-bold text-2xl text-gray-900 dark:text-white">BAC<span class="text-primary">Info</span></span>
</div>
<div class="hidden md:flex items-center space-x-8">
<a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="#">Acasă</a>
<a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="#">Lecții</a>
<a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="#">Teorie</a>
<a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="#">Exerciții</a>
<a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="#">Teste BAC</a>
<a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="#">Contact</a>
</div>
<div class="hidden md:flex items-center gap-4">
<button class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" id="theme-toggle">
<span class="material-icons-round text-gray-600 dark:text-gray-300">dark_mode</span>
</button>
<a class="bg-primary hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-orange-500/30" href="#">
                        Intră în cont
                    </a>
</div>
<div class="md:hidden flex items-center gap-4">
<button class="text-gray-600 dark:text-gray-300 hover:text-primary">
<span class="material-icons-round text-3xl">menu</span>
</button>
</div>
</div>
</div>
</nav>
<header class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-900/20 to-transparent dark:from-blue-900/40 pointer-events-none"></div>
<div class="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div class="grid lg:grid-cols-2 gap-12 items-center">
<div class="text-center lg:text-left">
<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-6 border border-blue-200 dark:border-blue-800">
<span class="relative flex h-3 w-3">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
</span>
<span class="text-sm font-semibold">Sesiunea BAC 2025</span>
</div>
<h1 class="text-5xl lg:text-6xl font-display font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                        Pregătește-te pentru <br/>
<span class="bg-gradient-to-r from-primary to-orange-400 gradient-text text-transparent">BAC-ul la Informatică</span>
</h1>
<p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Platforma completă de învățare care transformă codul în note de 10. Accesează sute de probleme rezolvate, lecții video și simulări reale.
                    </p>
<div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a class="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-orange-500/40 hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group" href="#">
                            Începe Acum
                            <span class="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
<a class="w-full sm:w-auto px-8 py-4 bg-white dark:bg-surface-dark text-gray-800 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2" href="#">
<span class="material-icons-round text-primary">play_circle</span>
                            Explorează Lecțiile
                        </a>
</div>
<div class="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 dark:text-gray-400">
<div class="flex items-center gap-2">
<span class="material-icons-round text-green-500 text-base">check_circle</span>
<span>Programa C++</span>
</div>
<div class="flex items-center gap-2">
<span class="material-icons-round text-green-500 text-base">check_circle</span>
<span>Variante 2009-2024</span>
</div>
</div>
</div>
<div class="relative lg:h-[600px] flex items-center justify-center">
<div class="absolute w-[110%] h-[110%] bg-gradient-to-tr from-surface-dark to-transparent rounded-full border border-white/10 opacity-20 animate-pulse"></div>
<div class="relative z-10 w-full max-w-lg">
<div class="absolute -top-10 -right-10 bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce" style="animation-duration: 3s;">
<div class="flex items-center gap-3">
<div class="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400">
<span class="material-icons-round">code</span>
</div>
<div>
<p class="text-xs text-gray-500 dark:text-gray-400">Status Compilare</p>
<p class="font-bold text-gray-900 dark:text-white">Succes (100 puncte)</p>
</div>
</div>
</div>
<img alt="Student learning to code on a laptop" class="rounded-3xl shadow-2xl border-4 border-white dark:border-gray-800 object-cover h-96 w-full lg:h-auto transform -rotate-2 hover:rotate-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRQQdkmcTmSej9JMpbgAkv5YuHeIE1zKq6msJes0ZBSfH3BPQLh6Lz2wseDGh2h3LWGD_Lz1IeFiCgEz36wCyIZCOYwtMTjkN-YfbjkuvZNFJYKxegzsMChh8eKM9nSz1Roxv7M7g1J1wjxRf4bj5aDJTf_4VOSCw2MpUZy6QeF_QSQaeJoSAeK3p4s52zrRGfpql2_4BndoG2kyU8tFxNH8Ug5XDRb16JpahFHsPBFk_bpMfjWAULYru16XpHJZXkD29G6-WpzAu5"/>
<div class="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl shadow-xl text-white max-w-xs">
<div class="flex items-center gap-2 mb-2">
<span class="material-icons-round text-yellow-300">star</span>
<span class="font-bold text-lg">4.9/5</span>
</div>
<p class="text-sm opacity-90">Rating din partea elevilor care au promovat cu brio.</p>
</div>
</div>
</div>
</div>
</div>
</header>
<section class="py-20 bg-white dark:bg-surface-dark relative">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-16">
<span class="text-primary font-semibold tracking-wider uppercase text-sm">Resurse Complete</span>
<h2 class="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mt-2">Tot ce ai nevoie pentru nota 10</h2>
</div>
<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div class="group bg-gray-50 dark:bg-background-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
<div class="w-14 h-14 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
<span class="material-icons-round text-primary text-3xl group-hover:text-white transition-colors">menu_book</span>
</div>
<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Teorie Explicată</h3>
<p class="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                        Algoritmi, structuri de date și grafuri explicate pas cu pas, pe înțelesul tuturor.
                    </p>
<a class="inline-flex items-center text-primary font-medium text-sm hover:underline" href="#">
                        Vezi mai mult <span class="material-icons-round text-sm ml-1">arrow_forward</span>
</a>
</div>
<div class="group bg-gray-50 dark:bg-background-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
<div class="w-14 h-14 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<span class="material-icons-round text-blue-600 dark:text-blue-400 text-3xl group-hover:text-white transition-colors">code</span>
</div>
<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Exerciții Practice</h3>
<p class="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                        Sute de probleme de C++ cu verificare automată și feedback instant.
                    </p>
<a class="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline" href="#">
                        Vezi mai mult <span class="material-icons-round text-sm ml-1">arrow_forward</span>
</a>
</div>
<div class="group bg-gray-50 dark:bg-background-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
<div class="w-14 h-14 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
<span class="material-icons-round text-purple-600 dark:text-purple-400 text-3xl group-hover:text-white transition-colors">quiz</span>
</div>
<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Teste BAC Anuale</h3>
<p class="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                        Arhiva completă a subiectelor de Bacalaureat din 2009 până în prezent.
                    </p>
<a class="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium text-sm hover:underline" href="#">
                        Vezi mai mult <span class="material-icons-round text-sm ml-1">arrow_forward</span>
</a>
</div>
<div class="group bg-gray-50 dark:bg-background-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
<div class="w-14 h-14 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
<span class="material-icons-round text-green-600 dark:text-green-400 text-3xl group-hover:text-white transition-colors">smart_display</span>
</div>
<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Rezolvări Video</h3>
<p class="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                        Tutoriale video detaliate pentru cele mai dificile probleme de la examen.
                    </p>
<a class="inline-flex items-center text-green-600 dark:text-green-400 font-medium text-sm hover:underline" href="#">
                        Vezi mai mult <span class="material-icons-round text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
<section class="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex flex-col lg:flex-row items-center gap-16">
<div class="w-full lg:w-1/2 relative">
<div class="absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20 blur-2xl"></div>
<div class="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
<div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-surface-dark">
<img alt="Student working on code collaboration" class="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJb-9Wv_v9MxQRRLC16-HzwV2U4zycGT1GaWw8Lyqf_J2klKvuRsvns0qHczWsxqBlmzSiF4plXi92ax9j46-oi2X1QnJm_2k-EvurgZYBw4sGxTc6helHRY7Kbo27Nv7zXhBL-GAIDLRs_qxKq4kwPNmMt52-9QKjm-qQR5xGBVQgbiXrY1vRy0_-fCT8dRgsMrLlrnAUe8vMSVZkZPNTqpND5uyQ5oqKgWwQFI_5qxmX4RUdoRp0OF2Wk_p3loJYnp_BP4x9tVyQ"/>
<div class="absolute bottom-6 left-6 right-6 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
<div class="flex items-center gap-4">
<div class="bg-primary/20 p-3 rounded-full text-primary">
<span class="material-icons-round">trending_up</span>
</div>
<div>
<h4 class="font-bold text-gray-900 dark:text-white">Progres Rapid</h4>
<p class="text-xs text-gray-500 dark:text-gray-400">95% dintre utilizatori și-au mărit nota.</p>
</div>
</div>
</div>
</div>
</div>
<div class="w-full lg:w-1/2">
<span class="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Despre Platformă</span>
<h2 class="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
                        Învață logic, nu pe de rost.
                    </h2>
<p class="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                        Informatica este despre gândire structurată. Platforma noastră este construită pentru a te ajuta să înțelegi conceptele din spatele codului, oferindu-ți încrederea necesară pentru examen.
                    </p>
<div class="space-y-6">
<div class="flex gap-4">
<div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
<span class="material-icons-round">psychology</span>
</div>
<div>
<h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Învățare Adaptivă</h4>
<p class="text-gray-600 dark:text-gray-400 text-sm">Sistemul îți recomandă exerciții bazate pe punctele tale slabe.</p>
</div>
</div>
<div class="flex gap-4">
<div class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-primary">
<span class="material-icons-round">groups</span>
</div>
<div>
<h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Comunitate Activă</h4>
<p class="text-gray-600 dark:text-gray-400 text-sm">Forum de discuții unde poți cere ajutor la orice problemă.</p>
</div>
</div>
</div>
<div class="mt-10">
<a class="inline-block px-8 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-opacity" href="#">
                            Află povestea noastră
                        </a>
</div>
</div>
</div>
</div>
</section>
<section class="py-20 bg-white dark:bg-surface-dark">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex justify-between items-end mb-12">
<div>
<h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">Noutăți și Sfaturi</h2>
<p class="text-gray-500 dark:text-gray-400">Articole recente pentru pregătirea ta.</p>
</div>
<a class="hidden md:flex items-center text-primary font-medium hover:underline" href="#">
                    Vezi toate articolele <span class="material-icons-round ml-1">arrow_forward</span>
</a>
</div>
<div class="grid md:grid-cols-3 gap-8">
<article class="bg-gray-50 dark:bg-background-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
<div class="relative h-48 overflow-hidden">
<img alt="Code on screen" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUmsNWbNcbvuqI_qjLknu3jWstF8EETrd5hhEMCEmkprbYlv3tGf9CSBO7BjCLItGLlmAUMpp4YnbiQYwWmRkLG2BAgmJvkry9ZtKLu1GssdJUGMi1NbTkcVG5f0_ioSZDTiKkzSiUi7Thu8N3hcvdE9_YSSZgRusm-L5fhaUUGnyNHwu-tEz7Xsg3ARhnXz1EtRUNBccR2Wo_ox1IQYzloPBfRJQaCXjkzNbjbUKk1KWZwaYjE-58uupzzL4ZUxramWBovvlFK3Ds"/>
<div class="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">Teorie</div>
</div>
<div class="p-6">
<div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
<span class="material-icons-round text-sm">calendar_today</span> 10 Oct 2024
                        </div>
<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">Top 10 capcane în subiectele de Bacalaureat</h3>
<p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                            Află care sunt cele mai frecvente greșeli pe care le fac elevii la Subiectul III și cum să le eviți.
                        </p>
<a class="text-primary font-medium text-sm hover:underline" href="#">Citește articolul</a>
</div>
</article>
<article class="bg-gray-50 dark:bg-background-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
<div class="relative h-48 overflow-hidden">
<img alt="Keyboard close up" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABxShnE95yGEk6iWDrhBXh5AWsI9mOXS66SX66xdO2wzzJxHlKeHWyRjejQ0B-Qy_l44poXoXwKoFkbGbuNLaJs2JjuSrQy1GWc0xTaR2IKv0B6_D4ck9lXPkdVzeCOdxabP2TXOxII5fTJ1hdvdt6jfqE1VYamQM-4vhDCzQOhdSpSjsUFV41m9D7fXxThmx_ZW8InIIhl_XW3liw1fRKUaIHmY2hCuB_f5yhIGzStz_NmdpG49fjGAqUx9nsGL2GcJELQsApVGv-"/>
<div class="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">Exerciții</div>
</div>
<div class="p-6">
<div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
<span class="material-icons-round text-sm">calendar_today</span> 05 Oct 2024
                        </div>
<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">Backtracking explicat simplu</h3>
<p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                            Metoda backtracking pare complicată, dar cu aceste 3 exemple vizuale vei înțelege logica imediat.
                        </p>
<a class="text-primary font-medium text-sm hover:underline" href="#">Citește articolul</a>
</div>
</article>
<article class="bg-gray-50 dark:bg-background-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
<div class="relative h-48 overflow-hidden">
<img alt="Student studying" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe70oK5xoWlQ_YoUz2C8nLOiLu-gP4DMTSLc2RQZG9A3HknsP0Br4OAZhqNmU5gKqCGSbx9iRUWgrh-sAXVpnhLZqrcXoNBcxtr2l69R29kVz7zEV2EjgNwM0CZr0rdRG_rGnuUMI06MzsxsKBHnfjgTBKjchu5cFRVe0AxcnAQbbHVlauO3uAGWVm2KxoxE3W7xGBtB6FRIz1hLOgQ9H7dFR7HsAWLIqbnCpcOWd4jDIOPrfsBWxjBx92RqA8P7nHegTn7pB7JZem"/>
<div class="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">Motivație</div>
</div>
<div class="p-6">
<div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
<span class="material-icons-round text-sm">calendar_today</span> 28 Sep 2024
                        </div>
<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">Cum să te organizezi eficient</h3>
<p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                            Un plan de studiu pe 3 luni care acoperă toată materia pentru BAC la Informatică.
                        </p>
<a class="text-primary font-medium text-sm hover:underline" href="#">Citește articolul</a>
</div>
</article>
</div>
</div>
</section>
<section class="py-20 bg-background-light dark:bg-background-dark">
<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="relative bg-primary rounded-3xl p-10 md:p-16 overflow-hidden shadow-2xl">
<div class="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
<div class="absolute bottom-0 right-0 w-64 h-64 bg-black opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
<div class="relative z-10 text-center text-white">
<h2 class="text-3xl md:text-4xl font-display font-bold mb-4">Gata să începi pregătirea?</h2>
<p class="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
                        Alătură-te celor peste 5000 de elevi care se pregătesc deja cu noi. Creează-ți cont gratuit astăzi.
                    </p>
<form class="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
<input class="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-orange-100 focus:outline-none focus:bg-white/20 focus:border-white transition-colors" placeholder="Adresa ta de email" type="email"/>
<button class="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-orange-50 transition-colors shadow-lg" type="button">
                            Mă Înscriu
                        </button>
</form>
<p class="text-xs text-orange-200 mt-4">Nu trimitem spam. Te poți dezabona oricând.</p>
</div>
</div>
</div>
</section>
<footer class="bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div>
<div class="flex items-center gap-2 mb-6">
<span class="material-icons-round text-primary text-3xl">terminal</span>
<span class="font-display font-bold text-xl text-gray-900 dark:text-white">BAC<span class="text-primary">Info</span></span>
</div>
<p class="text-gray-500 dark:text-gray-400 text-sm mb-6">
                        Platforma #1 pentru pregătirea examenului de Bacalaureat la Informatică în România.
                    </p>
<div class="flex space-x-4">
<a class="text-gray-400 hover:text-primary transition-colors" href="#"><i class="material-icons-round">facebook</i></a>
<a class="text-gray-400 hover:text-primary transition-colors" href="#"><i class="material-icons-round">smart_display</i></a> 
<a class="text-gray-400 hover:text-primary transition-colors" href="#"><i class="material-icons-round">camera_alt</i></a> 
</div>
</div>
<div>
<h4 class="font-bold text-gray-900 dark:text-white mb-6">Platformă</h4>
<ul class="space-y-4 text-sm text-gray-500 dark:text-gray-400">
<li><a class="hover:text-primary transition-colors" href="#">Despre Noi</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Lecții Video</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Planuri Tarifare</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Profesori</a></li>
</ul>
</div>
<div>
<h4 class="font-bold text-gray-900 dark:text-white mb-6">Resurse</h4>
<ul class="space-y-4 text-sm text-gray-500 dark:text-gray-400">
<li><a class="hover:text-primary transition-colors" href="#">Subiecte BAC</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Compilator Online</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Formule &amp; Algoritmi</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 class="font-bold text-gray-900 dark:text-white mb-6">Contact</h4>
<ul class="space-y-4 text-sm text-gray-500 dark:text-gray-400">
<li class="flex items-start gap-3">
<span class="material-icons-round text-primary text-base mt-0.5">location_on</span>
<span>București, România</span>
</li>
<li class="flex items-center gap-3">
<span class="material-icons-round text-primary text-base">phone</span>
<span>+40 700 123 456</span>
</li>
<li class="flex items-center gap-3">
<span class="material-icons-round text-primary text-base">email</span>
<span>contact@bacinfo.ro</span>
</li>
</ul>
</div>
</div>
<div class="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
                    © 2024 BAC Info Prep. Toate drepturile rezervate.
                </p>
<div class="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
<a class="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Termeni și Condiții</a>
<a class="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Confidențialitate</a>
</div>
</div>
</div>
</footer>
<script>
        const themeToggleBtn = document.getElementById('theme-toggle');
        // Check for saved user preference, if any, on load of the website
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        themeToggleBtn.addEventListener('click', function() {
            // if set via local storage previously
            if (localStorage.theme === 'dark') {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        });
    </script>

</body></html>
