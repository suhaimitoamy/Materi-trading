# Bab 2 — Template Backtesting: Simulasi Laboratorium Anda

> "Jangan pernah membawa senjata yang belum Anda uji ke medan pertempuran riil. Backtesting adalah laboratorium pribadi Anda; di sanalah Anda menguji peluru, memperbaiki bidikan, dan yang paling penting, di sanalah Anda berlatih untuk tidak berkedip saat pelatuk ditarik puluhan kali tanpa hasil."

## Mengapa Bab Ini Penting
Di Bab 17 pada Folder 07, kita telah membahas secara teori mengapa *Backtesting* itu krusial dan bahaya dari optimasi berlebih (*Curve Fitting*). Kini saatnya kita beralih ke ranah praktis. Bagaimana persisnya Anda mencatat ratusan data transaksi masa lalu (*Bar Replay*) tanpa kehilangan arah?

Bab ini menyediakan *blueprint* operasional: sebuah **Template Backtesting** siap pakai. Jika Anda hanya memajukan *candle* demi *candle* di TradingView tanpa mendokumentasikannya, Anda sedang bermain *video game*, bukan melakukan simulasi. Data yang tidak tercatat tidak dapat dievaluasi keunggulannya (*Edge*). Dengan *template* yang terstruktur, Anda akan mengumpulkan metrik statistik matematis yang membuktikan kepada otak Anda bahwa strategi ini, jika dijalankan 100 kali secara mekanis, akan mencetak uang.

## Tujuan Pembelajaran
Setelah mempelajari bab ini, pembaca diharapkan mampu:
*   Menyiapkan lingkungan simulasi (*Backtesting Environment*) menggunakan fitur Replay di platform charting.
*   Menggunakan Template Backtesting (Excel/Google Sheets) secara disiplin untuk merekam data transaksi historis.
*   Menghitung dan mengevaluasi "The Big 3 Metrics" (Win Rate, Expectancy, dan Maximum Drawdown) dari hasil *backtest*.
*   Menemukan korelasi antara kondisi pasar spesifik dengan performa strategi melalui proses penyaringan data (*Filtering*).
*   Membangun rasa percaya diri tanpa syarat terhadap sistem sebelum menggunakannya di *live market*.

## Persiapan Simulasi
1.  **Platform:** TradingView (fitur *Bar Replay*).
2.  **Rentang Waktu (Sample Size):** Pilih satu *pair* (misal: EURUSD). Mundur ke belakang minimal 3-6 bulan untuk *day trading*, atau selesaikan tepat 100 sampel transaksi secara berurutan. (Tidak boleh melompati hari secara acak).
3.  **Tutup Mata pada Harga Kanan:** Jujurlah pada diri sendiri. Jika Anda curang mengintip harga masa depan, simulasi Anda menjadi sampah.

## Template Backtesting (Salin ke Spreadsheet/Excel)

Buatlah *Spreadsheet* dengan kolom-kolom berikut ini:

| No. | Tanggal & Waktu | Hari | Instrumen | Arah (L/S) | Setup Model | HTF Bias | Eksekusi (LTF) | Hasil (W/L/BE) | R/R Awal | R Realisasi | Durasi Trade | Catatan Visual |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 12/05 09:30 | Sel | EURUSD | Long | Silver Bullet | Bullish | M5 MSS | Win | 1:2.5 | +2.5R | 2.5 Jam | *Link Screenshot* |
| 2 | 13/05 04:00 | Rab | EURUSD | Short | OTE + FVG | Bearish | M5 Engulf | Loss | 1:3.0 | -1.0R | 30 Mnt | *Link Screenshot* |

### Penjelasan Kolom Kunci:
*   **Hari (Sel, Rab, dll):** Sangat krusial. Pada akhir *backtest* 100 trade, Anda harus memfilter data ini untuk menemukan hari apa Anda memiliki *Win Rate* terburuk (misalnya: Senin sering *choppy*).
*   **Arah (L/S):** *Long* (Buy) atau *Short* (Sell). Berguna untuk melihat apakah strategi Anda lebih jago naik atau turun.
*   **R/R Awal vs R Realisasi:** (Rasio *Risk/Reward*). Mungkin target awal Anda 1:3, tapi *trade* berbalik arah di tengah jalan dan Anda terkena *Break-Even* (0 R).
*   **Catatan Visual:** Simpan *link* tangkapan layar (bisa menggunakan *tool* seperti Gyazo atau Lightshot) dari *trade* saat dieksekusi. Ini menjadi *Playbook* Anda.

## Mengevaluasi "The Big 3 Metrics"
Setelah tabel Anda terisi penuh 100 transaksi beruntun, Anda wajib menghitung tiga metrik inti ini (gunakan rumus Excel):

### 1. Win Rate (Tingkat Kemenangan)
*(Total Kemenangan / Total Transaksi) x 100.*
Jika Anda melakukan 100 transaksi, dan 45 di antaranya adalah *Win* (termasuk *win* parsial) sementara 55 adalah *Loss*, maka *Win Rate* Anda 45%.
**Ekspektasi:** Untuk sistem SMC dengan R/R tinggi (1:2 atau lebih), *Win Rate* 40% hingga 55% adalah angka profesional yang sangat sehat. Jangan berkecil hati.

### 2. Maximum Drawdown (Rangkaian Kekalahan Terburuk)
Ini adalah angka yang akan menyelamatkan kewarasan Anda saat *live trading*.
Cari di baris Excel Anda: "Berapa banyak *Loss* berturut-turut terpanjang yang saya alami dalam 100 transaksi ini?"
Jika jawabannya adalah "8 kali Loss beruntun," Anda telah menemukan skenario kiamat strategi Anda. Saat bertrading *live* nanti dan Anda mengalami 5x Loss beruntun, Anda tidak akan panik atau mengubah indikator, karena Anda sudah tahu bahwa sistem ini bisa bertahan hingga 8x Loss dan pada akhirnya tetap profit di trade ke-100.

### 3. Trade Expectancy (Harapan Matematis)
Rumus: `(Win Rate % x Rata-rata Profit R) - (Loss Rate % x Rata-rata Loss R)`.
Contoh sistem kita (Win 45%, R/R 1:2):
`(0.45 x 2) - (0.55 x 1) = 0.90 - 0.55 = +0.35 R`.
**Arti Angka Ini:** Setiap kali Anda menekan tombol eksekusi (meskipun *trade* tersebut *Loss* sekalipun), secara statistik Anda sedang "mencetak" +0.35 R (misal $3.5 jika 1R=$10) dalam probabilitas jangka panjang. Selama hasilnya **positif**, sistem Anda adalah mesin pencetak uang.

## Merangkul Kebosanan
*Backtesting* itu membosankan. Ini adalah pekerjaan kasar (*grunt work*) yang membuat 95% pemula menyerah dan memilih mencari jalan pintas indikator ajaib. Namun, mereka yang menolak jalan pintas dan bersedia mengisi 100 baris Excel ini dengan keringat mereka sendiri akan lulus dengan kepercayaan diri besi (Iron Confidence) yang tidak bisa dibeli dengan harga berapa pun.

## 1. Glosarium Bab 2 (Template Backtesting)
*   **Backtesting Environment:** Ruang simulasi (biasanya menggunakan fitur *replay* grafik) yang dirancang untuk sedekat mungkin mereplikasi kondisi saat transaksi dilakukan secara langsung (live).
*   **Trade Expectancy (Harapan Tradisional):** Rumus statistik yang menunjukkan rata-rata nominal atau persentase profit yang diharapkan dari setiap eksekusi tunggal berdasarkan kumpulan data historis yang besar.
*   **Sample Size (Ukuran Sampel):** Jumlah minimum data transaksi historis (direkomendasikan > 100 *trade* berurutan) yang diperlukan agar kesimpulan statistik dari uji coba tersebut memiliki signifikansi yang valid (tidak terpengaruh variasi acak sementara).
*   **Drawdown Period:** Fase di mana kurva ekuitas/modal simulasi mengalami penurunan secara signifikan dari puncaknya akibat serangkaian kerugian.
*   **R Realisasi:** Nilai kelipatan rasio profit/loss nyata yang dibukukan (*closed*), yang mungkin berbeda dari ekspektasi R/R di awal karena dinamika pergerakan pasar.

## 2. Ringkasan Bab
*   Fitur simulasi tanpa didokumentasikan di dalam sebuah *Spreadsheet* secara disiplin bukanlah *backtesting*, melainkan sekadar bermain-main menebak pergerakan historis.
*   Template Excel yang ketat memaksa trader untuk mencatat parameter seperti Hari Eksekusi, Konfirmasi LTF, dan Target Rasio secara mendetail untuk memfasilitasi evaluasi data tahap lanjut.
*   Penting untuk mengevaluasi tidak hanya jumlah untung, namun secara spesifik metrik *Win Rate*, *Maximum Drawdown*, dan *Trade Expectancy*.
*   Mendeteksi *Maximum Drawdown* historis adalah kunci utama untuk mempertahankan ketenangan mental saat trader kelak menghadapi masa-masa buruk di *live market*.
*   Jika *Trade Expectancy* secara statistik terbukti bernilai positif pada sampel >100 trade, trader memiliki keunggulan objektif (Edge) di pasar yang siap dikonversi ke akun nyata.

## Penutup Terakhir Pustaka
Selamat! Dengan mempelajari dan, semoga saja, mempraktikkan pengisian jurnal simulasi ini, Anda telah menyelesaikan seluruh rute panjang repositori ini—dari Folder 00 (Glosarium) hingga Folder 10. Anda kini memiliki *Library* utuh tentang cara memandang pasar, menyusun sistem, dan mengelola pikiran Anda. Repositori ini akan selalu ada di sini sebagai "Rak Buku" Anda. Berhentilah mencari trik baru. Kembalilah ke halaman pertama, eksekusi, uji, evaluasi, dan ulangi. Keberhasilan dalam trading hanyalah pengulangan yang membosankan dari kebiasaan-kebiasaan brilian. Sampai jumpa di kurva probabilitas.

## Catatan
*Tugas Akhir: Buat tabel Spreadsheet (seperti contoh di atas). Komitmenkan akhir pekan ini (Sabtu dan Minggu) untuk menyelesaikan minimal 50 transaksi simulasi pertama Anda. Jangan berhenti sebelum Anda menyelesaikan baris ke-50. Temukan Expectancy dan Drawdown Anda sendiri.*
