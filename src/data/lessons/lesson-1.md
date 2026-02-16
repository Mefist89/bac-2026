Iată sinteza materialului despre **Cantitatea de informație și codificarea datelor**, structurată pentru o parcurgere rapidă, utilizând exclusiv text și formule matematice conform solicitării:

---

## 1. Sistemul general de transmisie a informației

Informația circulă de la o **sursă** către un **destinatar** prin intermediul unui mediu fizic numit **canal de transmisie**.

- **Sursa** este descrisă printr-o variabilă care ia valori dintr-o mulțime finită de mesaje posibile.

- **Mesajele** sunt transmise prin canalul de comunicație, unde pot apărea **perturbații** (zgomote) ce pot altera conținutul acestora.

- Valoarea mesajului devine cunoscută destinatarului doar după recepționarea acestuia.

---

## 2. Determinarea cantității de informație

Cantitatea de informație conținută într-un mesaj emis de o sursă se calculează în funcție de numărul de mesaje posibile.

- **Formula generală (Hartley):** $I = \log_2 N$.

- **Unitatea de măsură:** Se utilizează **bitul**, care reprezintă cantitatea de informație dintr-un mesaj al unei surse cu doar două variante posibile ($N=2$).

- **Formula pentru biți:** Pentru sursa-etalon unde $N=2^k$, relația devine $k = \log_2 2^k$.

- **Volumul total de informație ($V$):** Dacă se transmit $M$ mesaje, cantitatea totală este $V = M \cdot I$.

---

## 3. Codificarea și decodificarea informației

Procesul de transformare a mesajelor în cuvinte (șiruri de semne) se numește **codificare**, iar operația inversă este **decodificarea**.

- **Alfabetul binar:** Este format din două semne, reprezentate de obicei prin cifrele $0, 1$.

- **Cuvântul binar:** Reprezintă un șir finit de semne binare, unde $l$ este lungimea cuvântului.

- **Condiția de decodificare univocă:** Pentru ca fiecare mesaj să aibă un cod distinct, lungimea $l$ a cuvintelor unui cod pozițional trebuie să satisfacă inegalitatea $2^l \ge N$, ceea ce implică $l \ge \log_2 N$.

- Lungimea cuvintelor de cod trebuie să fie mai mare sau egală cu cantitatea de informație a unui mesaj.

---

## 4. Informatizarea imaginilor și a sunetului (Discretizarea)

Pentru a evalua informația din mesaje continue (imagini, sunet), acestea trebuie discretizate în spațiu, timp sau valoare.

### Imaginea monocromă și color

- Imaginea este descompusă în **pixeli** (microzone) cu ajutorul unui **rastru** de dimensiuni $m \times n$.

- **Imagine monocromă:** $I = m \cdot n \cdot \log_2 k$, unde $k$ este numărul de niveluri de luminanță (cuante).

- **Imagine color:** Se obține prin suprapunerea a trei culori primare (roșu, verde, albastru), formula fiind $I = 3 \cdot m \cdot n \cdot \log_2 k$.

### Secvențe video

- Imaginile în mișcare se discretizează în timp prin cadre pe secundă (frecvența $\nu$).

- **Volumul video ($V_{video}$):** Pentru o durată $t$, volumul este $V_{video} = \nu \cdot t \cdot I_{cadru}$, unde $I_{cadru}$ este informația dintr-un singur cadru.

---

## 5. Unități de măsură și multipli

Pe lângă bit, se utilizează **octetul** (byte), definit ca fiind format din 8 biți. Multiplii acestora se calculează folosind puterile lui 2:

- $1 \text{ Byte} = 8 \text{ bits}$.

- $1 \text{ KB} = 1024 \text{ Bytes} = 2^{10} \text{ Bytes}$.

- $1 \text{ MB} = 1024 \text{ KB} = 2^{20} \text{ Bytes}$.

- $1 \text{ GB} = 1024 \text{ MB} = 2^{30} \text{ Bytes}$.

---
