# Tipuri de Date Structurate în C++

Spre deosebire de tipurile de date simple (care pot memora o singură valoare la un moment dat), **tipurile de date structurate** permit stocarea și manipularea unor colecții de date, adesea de același tip, sub un singur nume.

În C++, cele mai importante tipuri de date structurate folosite pentru Bacalaureat sunt:

## 1. Tablouri unidimensionale (Vectori)
Un vector este o structură de date liniară care memorează o secvență de elemente de același tip.
- **Declarare:** `tip_date nume_vector[dimensiune_maxima];`
- **Exemplu:**
```cpp
int v[100]; // Un vector de maxim 100 de elemente de tip întreg
```
- Accesarea unui element se face prin indici, începând de la `0` până la `dimensiune - 1` (ex: `v[0]`, `v[1]`).

## 2. Tablouri bidimensionale (Matrice)
O matrice este un tablou cu două dimensiuni (linii și coloane). Poate fi privită ca un "vector de vectori".
- **Declarare:** `tip_date nume_matrice[numar_linii][numar_coloane];`
- **Exemplu:**
```cpp
int a[50][50]; // O matrice de maxim 50 de linii și 50 de coloane
```
- Accesarea unui element se face specificând indicele liniei și indicele coloanei (ex: `a[2][3]`).

## 3. Șiruri de caractere
Șirurile de caractere sunt tablouri unidimensionale în care fiecare element este un caracter (tipul `char`). În limbajul C/C++, un șir de caractere se termină întotdeauna cu caracterul nul `\0`.
- **Declarare:** `char nume_sir[dimensiune_maxima];`
- **Exemplu:**
```cpp
char s[256]; // Un șir care poate conține maxim 255 de caractere plus terminatorul '\0'
```
- Manipularea lor se face folosind funcții predefinite din biblioteca `<cstring>` (ex: `strlen`, `strcpy`, `strcmp`).

## 4. Structuri (`struct`)
Spre deosebire de tablouri (care grupează date de același tip), o structură (înregistrare) permite gruparea mai multor date de **tipuri diferite** sub un singur nume. Acestea se numesc *câmpuri* sau *membri*.
- **Declarare:**
```cpp
struct Elev {
    char nume[50];
    int varsta;
    float medie;
};
```
- **Utilizare:**
```cpp
Elev e1; // Se declară o variabilă e1 de tipul structurii Elev
e1.medie = 9.50; // Accesarea unui câmp se face folosind operatorul punct (.)
```

Aceste structuri sunt fundamentale pentru rezolvarea problemelor complexe și organizarea eficientă a datelor în memorie.
