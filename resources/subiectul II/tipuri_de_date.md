Iată textul structurat în format **Markdown**, optimizat pentru claritate, cu tabele de sinteză și formatare specifică pentru cod și formule matematice.

---

# Tipuri de date în C++: numere întregi, reale, caractere și altele

**Autor:** Dominic Satnoianu

Cea mai importantă caracteristică a unei informații în C++ este **tipul ei**. Pentru toate variabilele trebuie cunoscut tipul acesteia, fapt care permite diverse operații specifice sau limitează valorile pe care le poate lua.

---

## 1. Tipul `int`

Este cel mai utilizat tip de date și permite memorarea unui **număr întreg** (fără virgulă, atât pozitive, cât și negative).

- **Memorie:** 4 octeți (32 biți).
- **Interval de valori:** de la la (aprox. miliarde).
- **Când îl folosim:** Dacă numărul nu depășește 9 cifre.

**Exemplu:**

```cpp
int x = 15;

```

> **Observație:** Există și varianta `short int` (sau simplu `short`), care ocupă 2 octeți și reține valori între și .

---

## 2. Tipul `long long`

Permite memorarea numerelor întregi foarte mari.

- **Memorie:** 8 octeți (64 biți).
- **Interval de valori:** de la la .
- **Capacitate:** Până la 18-19 cifre.

**Exemplu:**

```cpp
long long x = 1000000000000; // 13 cifre

```

---

## 3. Tipurile `float` și `double`

Acestea rețin **numere reale** (cu virgulă), pozitive sau negative. Separatorul zecimal este punctul (`.`).

| Tip      | Memorie  | Descriere                         |
| -------- | -------- | --------------------------------- |
| `float`  | 4 octeți | Precizie simplă                   |
| `double` | 8 octeți | Precizie dublă (cel mai utilizat) |

**Exemplu:**

```cpp
float nr1 = 1.23;
double nr2 = 4.56E-03; // 4.56 * 10^-3 = 0.00456

```

---

## 4. Tipul `char`

Reține un **singur caracter**: literă, simbol sau cifră. Fiecare caracter are un corespondent numeric numit **cod ASCII**.

- **Memorie:** 1 octet (8 biți).
- **Valori:** Între -128 și 127.
- **Sintaxă:** Caracterele se delimitează prin apostroafe (`'`).

**Exemplu:**

```cpp
char c1 = 'a';
char c2 = 97; // Reține tot 'a', deoarece codul ASCII al lui 'a' este 97

```

---

## 5. Tipul `bool`

Folosit pentru valori logice: **adevărat** sau **fals**.

- **Valori posibile:** `0` (false) și `1` (true).
- **Memorie:** 1 octet (deși teoretic ar fi suficient 1 bit, unitatea minimă adresabilă este octetul).

**Exemplu:**

```cpp
bool ok = true, gasit = false;

```

---

## 6. Tipul `void`

Înseamnă "nimic". Variabilele obișnuite **nu** pot fi declarate cu acest tip. Este utilizat în special pentru funcții care nu returnează un rezultat.

---

## 7. Modificatori: `signed` vs `unsigned`

Pentru tipurile întregi (`int`, `short`, `long long`) și `char`, putem specifica dacă numărul are sau nu semn.

- **`signed` (implicit):** Cuprinde atât numere negative, cât și pozitive.
- **`unsigned`:** Cuprinde doar numere pozitive (începând cu 0), dar limita superioară se dublează.

**Comparație `int`:**

- `int`: …
- `unsigned int`: …

---

### Resurse suplimentare

- [PbInfo: Tipuri de date C/C++](https://www.pbinfo.ro)
- [EzInfo: Tipuri de date](https://ezinfo.ro)
- [Cplusplus.com: Variables and types](https://www.google.com/search?q=https://learn.microsoft.com/en-us/cpp/cpp/data-types-cpp)

---
