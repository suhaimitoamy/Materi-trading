# Bab 2 — Template Backtesting: Membangun Kepercayaan Diri

> "Jika Anda tidak bisa menunjukkan kepada saya 100 *trade* historis berturut-turut dari strategi Anda beserta hasil statistiknya, Anda sebenarnya tidak memiliki strategi. Anda hanya memiliki sekelompok asumsi yang menunggu untuk dihancurkan oleh pasar."

## Mengapa Bab Ini Penting
Kebanyakan trader ritel pemula sering kali berpindah-pindah strategi setiap kali mereka mengalami tiga kali *loss* beruntun (fenomena *Strategy Hopping*). Hari Senin mereka menggunakan *Support & Resistance*, hari Rabu mereka mencoba *Order Block*, dan hari Jumat mereka kembali ke persilangan indikator *Moving Average*. Mengapa ini sering terjadi? Karena mereka tidak memiliki "Kepercayaan Diri Besi" (*Iron Confidence*). Dan kepercayaan diri yang kokoh tidak datang dari menonton video YouTube atau membaca buku ini, melainkan datang dari pembuktian pribadi melalui proses **Backtesting**.

Bab ini penting karena menjabarkan metode konkret tentang cara Anda mengumpulkan data mandiri untuk sistem trading Anda. *Backtesting* adalah proses menyimulasikan strategi di masa lalu untuk memprediksi performanya di masa depan. Tanpa data *backtesting*, Anda pada dasarnya sedang menembak dalam gelap. Jika Anda tahu dari data bahwa strategi Anda secara historis akan memberikan *Loss* 4 kali berturut-turut sebelum akhirnya memberikan *Win* beruntun, maka Anda tidak akan panik ketika Anda benar-benar menghadapi 4 kali *Loss* tersebut di akun *live*.

## Tujuan Pembelajaran
Setelah mempelajari bab ini, pembaca diharapkan mampu:
*   Memahami perbedaan mendasar antara *Forward Testing* (demo) dan *Backtesting* (simulasi masa lalu).
*   Membuat *Spreadsheet* jurnal simulasi yang ketat dan fungsional.
*   Mengukur secara mandiri probabilitas kemenangan (*Win Rate*), rata-rata pengembalian (*Expectancy*), dan titik terburuk (*Maximum Drawdown*) dari sistem pribadi.
*   Menghilangkan ilusi "harus selalu benar", dan mulai berfokus pada keunggulan statistik jangka panjang.
*   Menemukan dan memperbaiki kebocoran dalam SOP eksekusi (misalnya, strategi terbukti menguntungkan di sesi London, namun selalu rugi di sesi Asia).

## 1. Alat yang Anda Butuhkan
Sebelum memulai proses *backtesting*, Anda memerlukan tiga fondasi utama:
1.  **Platform Charting dengan Fitur Replay:** TradingView (paket esensial/premium) adalah standar industri. Anda butuh fitur *Bar Replay* agar Anda tidak "mengintip" atau berbuat curang dengan melihat pergerakan harga di sisi kanan *chart* sebelum saat eksekusi tiba.
2.  **Buku Catatan Digital (Spreadsheet):** Google Sheets, Microsoft Excel, atau Notion. Anda wajib mencatat setiap *trade* yang dieksekusi secara manual.
3.  **Sistem yang Sudah Memiliki Aturan Baku (SOP):** Anda tidak bisa melakukan *backtesting* pada *feeling* atau intuisi. Anda hanya bisa mem-*backtest* variabel yang pasti. Misalnya: "Saya hanya mencari *Buy* jika terjadi *Liquidity Sweep* di sesi London, lalu muncul *Bullish MSS* di M5."

## 2. Struktur Kolom Spreadsheet Jurnal Backtesting
Jangan membuat struktur yang terlalu rumit. Kolom Anda harus berfokus pada dua hal: **Konteks** (Mengapa Anda masuk?) dan **Hasil** (Apa yang terjadi?). Berikut adalah rekomendasi kolom untuk *spreadsheet* Anda:

*   **No. Trade:** (1, 2, 3... hingga 100)
*   **Tanggal Simulasi & Sesi:** (Misal: 14 Mei 2023 / London)
*   **Pair/Instrumen:** (Misal: EURUSD)
*   **Arah Eksekusi:** (Long / Short)
*   **Konteks HTF (Bias):** (Bullish/Bearish Daily/H4)
*   **Trigger (Pemicu Entry):** (FVG, Order Block, Breaker)
*   **Risk (Risiko %):** (Tetap di angka 1% per trade)
*   **R/R Target (Rencana Awal):** (Misal: 1:2 atau 1:3)
*   **R Realisasi (Hasil Akhir):** (+2R, -1R, atau Breakeven 0R)
*   **Screenshots (Bukti):** Tautan gambar *chart* sebelum Anda *entry* dan setelah harga menyentuh TP/SL.
*   **Catatan Evaluasi:** (Misalnya: "Saya hampir *closing* manual karena panik, tetapi harga akhirnya sampai ke TP. Harus lebih bersabar.")

## 3. Matematika Harapan (Trade Expectancy)
Setelah Anda mengumpulkan 100 *trade* berturut-turut, Anda dapat menemukan *Edge* (Keunggulan) Anda yang sebenarnya.

**Rumus Harapan:**
`Expectancy = (Win Rate % x Rata-rata Profit per Win) - (Loss Rate % x Rata-rata Loss per Loss)`

Contoh sistem kita (Win 45%, R/R 1:2):
*   Rata-rata Profit = 2R
*   Rata-rata Loss = 1R
*   Expectancy = (0.45 x 2) - (0.55 x 1)
*   Expectancy = 0.9 - 0.55 = **+0.35R per trade**.

Artinya, secara statistik, setiap kali Anda menekan tombol eksekusi tanpa memedulikan emosi sesaat, Anda *diharapkan* akan mendapatkan keuntungan +0.35R (atau 0.35% jika risiko Anda 1%). Jika Anda mengeksekusi 100 *trade*, Anda akan meraup profit sekitar +35R dalam jangka panjang, *meskipun* persentase kemenangan (*Win Rate*) Anda hanya 45%. Ini adalah fakta statistik yang akan menyelamatkan psikologi Anda.

## 4. Merangkul Kebosanan
Proses *Backtesting* itu sangat membosankan. Ini adalah pekerjaan kasar (*grunt work*) yang monoton, yang biasanya membuat 95% pemula menyerah dan memilih jalan pintas dengan mencari indikator ajaib atau *signal* berbayar. Namun, percayalah, mereka yang menolak jalan pintas dan bersedia secara mandiri mengisi 100 baris Excel ini dengan keringat mereka sendiri akan lulus dengan gelar kepercayaan diri besi (*Iron Confidence*) yang tidak bisa dibeli dengan harga berapa pun di pasar.

## Glosarium
*   **Backtesting Environment:** Ruang simulasi (biasanya menggunakan fitur *bar replay* pada grafik) yang dirancang untuk sedekat mungkin mereplikasi kondisi *real-time* saat transaksi dilakukan secara langsung (*live*).
*   **Trade Expectancy (Harapan Matematis):** Rumus statistik probabilitas yang menunjukkan rata-rata nominal atau persentase profit yang *diharapkan* dari setiap eksekusi tunggal berdasarkan kumpulan data historis yang valid.
*   **Sample Size (Ukuran Sampel):** Jumlah minimum data transaksi historis (sangat direkomendasikan > 100 *trade* berurutan) yang diperlukan agar kesimpulan statistik dari uji coba tersebut memiliki signifikansi yang valid dan tidak sekadar kebetulan (terpengaruh variasi acak sementara).
*   **Drawdown Period:** Fase menyakitkan di mana kurva ekuitas/modal simulasi mengalami penurunan secara signifikan dari titik puncaknya akibat serangkaian kerugian berturut-turut.
*   **R Realisasi:** Nilai kelipatan rasio profit/loss nyata yang benar-benar dibukukan (*closed*), yang mungkin berbeda dari ekspektasi target R/R di awal karena dinamika atau penutupan dini.

## Ringkasan
*   Hanya menekan tombol simulasi (*play*) tanpa mendokumentasikan setiap proses ke dalam sebuah *Spreadsheet* secara disiplin bukanlah sebuah proses *backtesting*, melainkan sekadar bermain-main menebak pergerakan historis (yang tidak berguna).
*   Template Excel yang ketat memaksa trader untuk mencatat parameter vital seperti Hari Eksekusi, Konfirmasi LTF, dan Target Rasio secara mendetail untuk memfasilitasi evaluasi data tahap lanjut guna menemukan kelemahan sistem.
*   Sangat penting untuk mengevaluasi tidak hanya total jumlah untung yang didapat, namun secara spesifik fokus pada metrik *Win Rate*, *Maximum Drawdown*, dan *Trade Expectancy*.
*   Meskipun *Win Rate* (tingkat kemenangan) berada di bawah 50%, seorang trader masih bisa mencetak profitabilitas yang konsisten dan luar biasa di pasar asalkan memiliki *Trade Expectancy* bernilai positif dan *Risk to Reward* (R/R) yang rasional.

## Penutup
Selamat! Dengan mempelajari dan, semoga saja, mempraktikkan pengisian jurnal simulasi di atas, Anda telah berhasil menyelesaikan seluruh rute panjang repositori ini—dari tahap pengenalan di Folder 00 (Glosarium) hingga implementasi akhir di Folder 10. Anda kini telah memiliki sebuah *Library* (pustaka) utuh dan komprehensif tentang cara memandang struktur pasar, merangkai narasi *Smart Money*, menyusun sistem operasi mekanis, dan yang paling krusial: mengelola pikiran Anda sendiri di hadapan ketidakpastian pasar.

Repositori ini akan selalu ada di sini sebagai "Rak Buku Khusus" Anda. Berhentilah mencari trik-trik teknikal baru yang hanya membuang waktu. Kembalilah ke halaman pertama repositori ini, pilih salah satu model eksekusi (seperti *Silver Bullet* atau *Turtle Soup*), eksekusi, lakukan pengujian tanpa henti, evaluasi hasil data Anda, dan ulangi. Keberhasilan dalam dunia trading secara harfiah hanyalah pengulangan yang konsisten dan membosankan dari kebiasaan-kebiasaan brilian. Sampai jumpa di kurva probabilitas!

## Catatan (Tugas Praktik)
*Tugas Akhir: Buat tabel Spreadsheet (seperti contoh pada Bab ini atau yang lebih sesuai dengan gaya Anda). Komitmenkan akhir pekan ini (Sabtu dan Minggu) untuk menyelesaikan minimal 50 transaksi simulasi pertama Anda. Jangan berhenti, jangan ubah strategi, dan jangan curang sebelum Anda menyelesaikan baris ke-50 di jurnal Anda. Temukan *Expectancy* (Harapan Positif) dan *Drawdown* terpanjang Anda sendiri dari data tersebut.*
