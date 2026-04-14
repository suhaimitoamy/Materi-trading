"""# Bab 23 — PDH dan PDL: Level Kunci Likuiditas Harian

> "Dalam trading intraday, High dan Low hari sebelumnya (PDH dan PDL) adalah magnet likuiditas yang tak terbantahkan. Memahami bagaimana harga berinteraksi dengan level ini adalah kunci untuk membaca bias harian dan mengantisipasi pergerakan besar."

## Mengapa Bab Ini Penting
Banyak trader seringkali terlalu fokus pada indikator atau pola *candle* yang kompleks, namun mengabaikan level harga yang paling jelas dan paling sering dihormati oleh pasar: **Previous Day High (PDH)** dan **Previous Day Low (PDL)**. Tanpa memahami pentingnya PDH dan PDL, Anda akan kehilangan referensi utama untuk menentukan *daily bias*, mengidentifikasi area *sweep* likuiditas, dan menempatkan target *profit* yang realistis. Ini adalah level yang dilihat oleh setiap algoritma dan setiap trader institusional.

Memahami **PDH** dan **PDL** adalah tentang membaca "peta jalan" likuiditas harian. Level ini bukan hanya sekadar angka di chart; mereka adalah area di mana *stop loss* terkumpul, *breakout trader* masuk, dan *profit taking* terjadi. Bab ini akan mengajarkan Anda cara mengintegrasikan PDH dan PDL ke dalam analisis *intraday* Anda untuk meningkatkan presisi *entry* dan *exit*.

## Tujuan Pembelajaran
Setelah mempelajari bab ini, pembaca diharapkan mampu:
*   Memahami definisi dan signifikansi PDH dan PDL sebagai level likuiditas.
*   Mengenali PDH dan PDL sebagai target alami untuk *delivery* harga harian.
*   Membaca bagaimana harga berinteraksi dengan PDH dan PDL (sweep, respect, continuation).
*   Menggunakan PDH dan PDL untuk memperhalus *daily bias* dan menentukan target *intraday*.
*   Menghindari kesalahan dalam menginterpretasikan *sweep* PDH/PDL sebagai sinyal *reversal* tunggal.

## 1. Apa Itu PDH dan PDL?
**PDH** (*Previous Day High*) adalah harga tertinggi yang dicapai pada hari trading sebelumnya. Sedangkan **PDL** (*Previous Day Low*) adalah harga terendah yang dicapai pada hari trading sebelumnya. Kedua level ini adalah referensi yang sangat penting karena mewakili batas-batas pergerakan harga di hari sebelumnya, dan seringkali menjadi area di mana likuiditas terkumpul.

**Karakteristik PDH dan PDL:**
*   **Level Obvious:** Sangat mudah diidentifikasi oleh semua partisipan pasar.
*   **Magnet Likuiditas:** Menarik harga untuk bergerak ke arahnya karena adanya *stop loss* dan *pending order*.
*   **Patokan Bias:** Memberikan petunjuk kuat tentang *daily bias* dan potensi arah *delivery* harga.

## 2. Mengapa PDH dan PDL Sangat Penting?
PDH dan PDL adalah level yang sangat penting karena beberapa alasan utama:

*   **Kumpulan Stop Loss:** Banyak trader menempatkan *stop loss* mereka di atas PDH atau di bawah PDL. Ini menciptakan *liquidity pool* yang menarik bagi institusi.
*   **Ekspektasi Breakout:** Trader ritel seringkali menunggu *breakout* di atas PDH atau di bawah PDL untuk masuk posisi, yang bisa menjadi umpan bagi *manipulation*.
*   **Level Referensi:** PDH dan PDL berfungsi sebagai level *support* atau *resistance* yang kuat, serta target *profit taking* yang logis.
*   **Clean Liquidity:** Level ini seringkali "bersih" dari *noise* dan menawarkan peluang *sweep* yang jelas.

## 3. Tabel: PDH vs PDL
| Fitur | PDH (Previous Day High) | PDL (Previous Day Low) |
| :--- | :--- | :--- |
| **Definisi** | Harga tertinggi hari sebelumnya | Harga terendah hari sebelumnya |
| **Likuiditas** | Buy-Side Liquidity | Sell-Side Liquidity |
| **Fungsi Utama** | Target Bullish, Resistance, Sweep | Target Bearish, Support, Sweep |
| **Konteks Bias** | Relevan untuk Daily Bias Bullish | Relevan untuk Daily Bias Bearish |
| **Interaksi Harga** | Raid, Breakout, Rejection | Raid, Breakdown, Rejection |

## 4. PDH dan PDL sebagai Draw on Liquidity
Dalam konsep ICT, harga selalu bergerak dari satu *liquidity pool* ke *liquidity pool* lainnya. PDH dan PDL adalah dua *liquidity pool* yang paling jelas dan paling sering menjadi target harian. Jika *daily bias* Anda *bullish*, harga kemungkinan besar akan membidik PDH. Sebaliknya, jika *daily bias* Anda *bearish*, PDL akan menjadi target utama.

**Skenario Draw on Liquidity:**
*   **Target PDH:** Jika harga berada di *discount* dan *daily bias* *bullish*, harga akan cenderung bergerak naik untuk mengambil *buy-side liquidity* di atas PDH.
*   **Target PDL:** Jika harga berada di *premium* dan *daily bias* *bearish*, harga akan cenderung bergerak turun untuk mengambil *sell-side liquidity* di bawah PDL.

## 5. Interaksi Harga dengan PDH/PDL
Harga dapat berinteraksi dengan PDH atau PDL dalam beberapa cara, dan penting untuk membedakannya:

1.  **Sweep (Raid):** Harga menembus PDH atau PDL secara singkat untuk mengambil *stop loss* atau *pending order*, lalu berbalik arah. Ini adalah bentuk *manipulation* yang sangat umum.
2.  **Breakout & Continuation:** Harga menembus PDH atau PDL dengan *displacement* yang kuat dan terus bergerak searah *breakout*, menunjukkan *momentum* yang kuat.
3.  **Rejection (Respect):** Harga mendekati PDH atau PDL, namun gagal menembusnya dan berbalik arah, menggunakan level tersebut sebagai *support* atau *resistance* yang kuat.

## 6. Menggunakan PDH dan PDL dengan Session Timing
PDH dan PDL menjadi lebih bermakna ketika digabungkan dengan *session timing*. Seringkali, *sweep* atau *breakout* PDH/PDL terjadi di *Kill Zone* London atau New York, di mana volume dan volatilitas pasar sedang tinggi.

**Contoh Skenario:**
*   **London Sweep PDL:** Asia membentuk *range*. London *Kill Zone* datang, menyapu PDL, lalu harga berbalik naik tajam untuk *delivery* *bullish* sepanjang sisa sesi.
*   **New York Sweep PDH:** London sudah bergerak *bullish* kuat, namun PDH belum tersentuh. New York *Kill Zone* datang, menyapu PDH, lalu harga berbalik turun untuk *delivery* *bearish*.

## 7. Hubungan dengan OHLC/OLHC
PDH dan PDL sangat cocok digabungkan dengan pembacaan urutan *candle* harian (OHLC/OLHC) yang sudah dibahas di bab sebelumnya. Mereka memberikan target konkret untuk *manipulation* awal dan *distribution* berikutnya.

*   **Skenario OLHC (Bullish):** Harga *open*, turun untuk menyapu PDL (membentuk *Low*), lalu *delivery* naik menuju PDH (membentuk *High* dan *Close*).
*   **Skenario OHLC (Bearish):** Harga *open*, naik untuk menyapu PDH (membentuk *High*), lalu *delivery* turun menuju PDL (membentuk *Low* dan *Close*).

## 8. Kesalahan Umum Trader
*   **Menganggap Sweep PDH/PDL Selalu Reversal:** Ini adalah kesalahan fatal. *Sweep* bisa menjadi awal dari *continuation* yang kuat setelah likuiditas diambil.
*   **Tidak Menandai Level Ini:** Mengabaikan PDH dan PDL berarti kehilangan referensi *liquidity objective* yang sangat jelas.
*   **Trading Tanpa Daily Bias:** Menggunakan PDH/PDL tanpa konteks *daily bias* yang jelas akan membuat keputusan *trading* menjadi spekulatif.
*   **Target Tidak Realistis:** Menentukan target *profit* yang terlalu jauh padahal *objective* harian utama baru PDH atau PDL.

## 9. Glosarium Bab 23
*   **PDH (Previous Day High):** Harga tertinggi yang dicapai pada hari trading sebelumnya.
*   **PDL (Previous Day Low):** Harga terendah yang dicapai pada hari trading sebelumnya.
*   **Draw on Liquidity:** Konsep bahwa harga akan bergerak menuju area di mana likuiditas terkumpul.
*   **Liquidity Pool:** Area di mana *stop loss* dan *pending order* terkumpul dalam jumlah besar.
*   **Raid:** Istilah lain untuk *sweep* likuiditas.

## 10. Ringkasan Bab
*   PDH dan PDL adalah level likuiditas kunci yang sangat penting untuk *intraday trading*.
*   Keduanya berfungsi sebagai magnet likuiditas, *support/resistance*, dan patokan *daily bias*.
*   Harga dapat melakukan *sweep*, *breakout*, atau *rejection* terhadap PDH/PDL.
*   Gabungkan PDH/PDL dengan *session timing* dan pola OHLC/OLHC untuk analisis yang lebih komprehensif.

## Penutup
Dengan memahami PDH dan PDL, chart *intraday* Anda akan menjadi jauh lebih jelas. Anda tidak lagi melihat gerakan sesi aktif sebagai *chaos*, tetapi mulai melihat bahwa pasar seringkali bekerja menuju dua level yang sangat sederhana namun sangat penting: *High* dan *Low* hari sebelumnya. Ini akan memberikan Anda keunggulan dalam mengidentifikasi *setup* probabilitas tinggi dan mengelola *trade* Anda dengan lebih percaya diri.

## Catatan
*Tugas Praktik: Setiap hari, tandai PDH dan PDL di chart Anda sebelum sesi London atau New York dimulai. Amati bagaimana harga berinteraksi dengan level tersebut. Apakah terjadi *sweep*, *breakout*, atau *rejection*? Catat hasilnya dalam jurnal trading Anda.*

## Referensi
[1] The Inner Circle Trader. (n.d.). *ICT Mentorship*. Diakses dari berbagai materi ICT yang tersedia secara publik.
"""
