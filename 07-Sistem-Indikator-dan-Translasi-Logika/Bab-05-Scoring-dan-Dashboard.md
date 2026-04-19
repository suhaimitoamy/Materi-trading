# Bab 5 — Scoring dan Dashboard: Mengukur Kualitas Setup Secara Objektif

> "Tidak semua setup diciptakan sama, meskipun terlihat memiliki pola yang identik. Di sinilah pentingnya sistem *scoring* dan *dashboard*. Sebuah sistem *scoring* mengkuantifikasi kualitas *setup* berdasarkan variabel yang ada, mengubah penilaian subjektif 'kayaknya bagus' menjadi angka yang terukur dan objektif."

## Mengapa Bab Ini Penting
Seringkali trader merasa bingung ketika berhadapan dengan beberapa *setup* di berbagai *pair* atau instrumen yang berbeda pada waktu bersamaan. Mana yang harus dipilih? Atau terkadang, trader memaksakan diri masuk ke *setup* yang memiliki banyak kekurangan (A- atau B *grade setup*) dengan ukuran risiko (*position sizing*) yang sama besar dengan *setup* berkualitas tinggi (A+ *grade setup*).

Tanpa sistem *scoring*, semua *setup* terlihat setara. Akibatnya, trader cenderung tidak konsisten dalam mengelola risiko dan sering kali mengalami kerugian besar pada peluang probabilitas rendah. Bab ini akan mengajarkan Anda bagaimana menerjemahkan aturan (*rules*) menjadi skor objektif, dan bagaimana menampilkan skor tersebut dalam sebuah *dashboard* agar Anda bisa membuat keputusan eksekusi dan manajemen risiko dengan cepat dan rasional.

## Tujuan Pembelajaran
Setelah mempelajari bab ini, pembaca diharapkan mampu:
*   Memahami konsep *scoring system* (sistem penilaian) untuk mengevaluasi kualitas *setup*.
*   Menentukan variabel-variabel kunci dari ICT/SMC yang bisa dikuantifikasi menjadi skor.
*   Merancang pembobotan (*weighting*) yang tepat untuk setiap variabel berdasarkan kepentingannya.
*   Membuat kategori *grade* (*A+, A, B, C*) untuk mengklasifikasikan *setup*.
*   Menyesuaikan manajemen risiko (*risk management*) berdasarkan *grade setup*.
*   Memahami fungsi *dashboard* visual sebagai alat bantu keputusan (*decision support tool*) yang efisien.

## 1. Apa Itu Scoring System?
*Scoring System* adalah metode untuk memberikan nilai numerik pada setiap aspek dari *setup* trading. Sistem ini bekerja dengan memeriksa daftar kriteria (checklist) yang telah ditentukan sebelumnya. Jika kriteria terpenuhi, *setup* mendapatkan poin; jika tidak, poinnya nol (atau bahkan minus).

Tujuan utama sistem *scoring* adalah **menghilangkan bias emosional**. Saat Anda menyukai pergerakan sebuah koin/pair, otak Anda akan mencari alasan pembenaran untuk *entry*. Namun, jika *dashboard* menunjukkan bahwa skor *setup* tersebut hanya 40/100, sistem akan memaksa Anda untuk berhenti dan berpikir lebih rasional.

## 2. Variabel Penilaian dalam Konsep ICT
Untuk membangun sistem *scoring* yang solid, kita harus menguraikan konsep besar menjadi variabel yang dapat dinilai. Berikut adalah contoh variabel yang sering digunakan dalam ekosistem ICT:

1.  **Alignment Bias (HTF ke LTF):** Apakah arah tren di *Higher Timeframe* (Daily/H4) selaras dengan *entry* di *Lower Timeframe* (M15/M5)?
2.  **Liquidity Sweep:** Apakah *setup* ini terbentuk setelah menyapu *major liquidity pool* (seperti Previous Daily High/Low, Session High/Low)?
3.  **Displacement Quality:** Seberapa kuat *Market Structure Shift* (MSS) terjadi? Apakah menghasilkan pergerakan yang impulsif dan meninggalkan *Fair Value Gap* (FVG) yang lebar?
4.  **Premium/Discount (Location):** Apakah area *entry* berada di zona *Discount* (untuk Buy) atau *Premium* (untuk Sell)?
5.  **Time / Killzone:** Apakah *setup* terbentuk di dalam jendela waktu probabilitas tinggi (seperti London atau New York Killzone)?
6.  **SMT Divergence:** Apakah ada konfirmasi divergensi *Smart Money Tool* (SMT) dengan aset berkorelasi (misal XAUUSD dengan DXY)?

## 3. Sistem Pembobotan (Weighting)
Tidak semua variabel memiliki tingkat kepentingan yang sama. *Liquidity Sweep* biasanya lebih kritis dibandingkan keberadaan *SMT Divergence*. Oleh karena itu, kita perlu memberikan bobot (poin) yang berbeda untuk setiap variabel.

**Contoh Tabel Skor Sederhana (Total 100 Poin):**

| Variabel (Kriteria) | Bobot (Poin Maksimal) | Penilaian |
| :--- | :--- | :--- |
| **HTF Alignment** | 20 Poin | Ya = 20, Tidak = 0 |
| **Liquidity Sweep** | 25 Poin | Major Sweep = 25, Minor = 10, Tidak = 0 |
| **Clear Displacement & MSS** | 20 Poin | Ya = 20, Tidak = 0 |
| **Premium/Discount Location** | 15 Poin | Ya (OTE) = 15, Agak tengah = 5, Tidak = 0 |
| **Killzone Timing** | 10 Poin | Dalam Killzone = 10, Di luar = 0 |
| **SMT Divergence** | 10 Poin | Ada = 10, Tidak = 0 |
| **Total Skor** | **100 Poin** | |

## 4. Grading dan Position Sizing Berbasis Skor
Setelah mendapatkan total skor, langkah selanjutnya adalah mengelompokkan *setup* tersebut ke dalam *grade* (peringkat). Setiap *grade* harus dikaitkan secara langsung dengan ukuran risiko (*risk per trade*) Anda.

*   **Grade A+ (Skor 90 - 100):** *Setup* sempurna. Semua bintang sejajar.
    *   *Tindakan:* Eksekusi dengan **Risiko Penuh** (Full Risk), misalnya 1% atau 2% dari *equity*.
*   **Grade A (Skor 75 - 89):** *Setup* sangat bagus, mungkin kurang di satu elemen minor (misal tidak ada SMT).
    *   *Tindakan:* Eksekusi dengan **Risiko Normal**, misalnya 0.5% - 1%.
*   **Grade B (Skor 50 - 74):** *Setup* menengah. Cukup valid tetapi probabilitasnya lebih rendah (misal melawan arah HTF).
    *   *Tindakan:* Eksekusi dengan **Setengah Risiko** (Half Risk), misalnya 0.25% - 0.5%, atau hanya *paper trade*.
*   **Grade C (Skor < 50):** *Setup* buruk atau prematur.
    *   *Tindakan:* **NO TRADE.** Abaikan *setup* ini.

## 5. Peran Dashboard Visual
Dalam praktiknya, menghitung skor secara manual setiap kali harga bergerak cepat bisa melelahkan dan rentan kesalahan. Di sinilah *dashboard* berperan. *Dashboard* adalah antarmuka visual (bisa berupa tabel di pojok layar TradingView yang dibangun via PineScript) yang secara otomatis menghitung dan menampilkan *state* saat ini beserta skor totalnya.

Sebuah *dashboard* yang baik harus mampu menampilkan:
*   *State* saat ini (Misal: *Waiting MSS*, *In Zone*, dll).
*   Checklist dari variabel-variabel kunci (Hijau jika terpenuhi, Merah jika belum).
*   Skor total secara *real-time*.
*   Rekomendasi *Grade* (A+, A, B, atau C).

Dengan *dashboard*, proses pengambilan keputusan bergeser dari "Saya rasa ini akan naik" menjadi "Dashboard menunjukkan skor 85 (Grade A), ini memenuhi syarat sistem saya, saya akan mengambil risiko 1%".

## 6. Glosarium Bab 5
*   **Scoring System:** Metode pemberian nilai berbasis poin untuk mengevaluasi kualitas dan probabilitas sebuah ide trading.
*   **Weighting:** Pembobotan nilai di mana elemen yang lebih krusial diberikan poin lebih tinggi.
*   **Grade:** Kategori peringkat sebuah *setup* (seperti A+, A, B) berdasarkan total skor yang diperoleh.
*   **Dashboard:** Tampilan antarmuka visual yang merangkum metrik utama, state, dan skor secara otomatis di layar *chart*.
*   **Decision Support Tool:** Alat bantu yang dirancang untuk membantu mengambil keputusan secara lebih logis dan terukur.

## 7. Ringkasan Bab
*   Sistem *scoring* mengubah penilaian *setup* yang subjektif menjadi kuantifikasi yang objektif.
*   Tidak semua *setup* setara; skor membantu menyaring *setup* probabilitas tinggi dari yang rendah.
*   Variabel-variabel utama ICT (seperti Sweep, MSS, Time, Location) harus diberi bobot sesuai kepentingannya.
*   Total skor harus secara langsung mempengaruhi ukuran risiko (*position sizing*). Anda hanya mengambil risiko maksimal pada *setup* Grade A+.
*   *Dashboard* visual mempermudah pemantauan kriteria dan skor di tengah pergerakan market yang cepat, mengurangi kelelahan mental.

## Penutup
Menyusun sistem *scoring* adalah langkah mendewasakan diri sebagai trader. Ini memaksa Anda untuk jujur terhadap kualitas analisa Anda sendiri. Anda tidak bisa membohongi sistem: jika skornya 40, itu bukan *trade* yang layak diambil, sebesar apapun keinginan emosional Anda. Di bab berikutnya, kita akan membahas **Invalidation Engine dan Expiry Logic**, elemen krusial untuk mengetahui kapan sebuah *setup* (yang tadinya punya skor tinggi) menjadi basi dan tidak boleh lagi dieksekusi.

## Catatan
*Tugas Praktik: Buatlah sistem scoring manual Anda sendiri di atas kertas. Tuliskan 5-7 variabel yang wajib ada dalam setup ideal Anda. Beri nilai bobot untuk masing-masing variabel (total maksimal 100). Saat Anda akan mengambil trade berikutnya, hitung dulu skornya sebelum menekan tombol buy/sell. Lakukan ini setidaknya untuk 10 trade ke depan.*
