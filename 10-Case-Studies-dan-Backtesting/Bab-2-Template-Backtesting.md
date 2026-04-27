# Bab 02 — Template Backtesting: Simulasi Laboratorium Anda

> "Jangan membawa sistem yang belum diuji ke akun nyata. Backtesting adalah laboratorium tempat trader menguji aturan, mengukur probabilitas, dan membangun kepercayaan diri berdasarkan data, bukan perasaan."

## Mengapa Bab Ini Penting

Banyak trader merasa sudah punya strategi hanya karena pernah melihat setup itu berhasil beberapa kali.

Mereka melihat contoh di YouTube, mencoba di chart, lalu menemukan beberapa entry yang tampak sempurna. Dari situ mereka langsung percaya bahwa sistemnya valid.

Ini berbahaya.

Satu atau dua contoh trade tidak cukup untuk membuktikan edge.

Market penuh variasi. Setup bisa menang di satu kondisi dan gagal di kondisi lain. Tanpa backtesting, trader tidak tahu:

- berapa win rate sebenarnya?
- berapa average win?
- berapa average loss?
- seberapa besar drawdown yang mungkin terjadi?
- sesi mana yang paling cocok?
- pair mana yang paling buruk?
- apakah sistem profit karena edge atau hanya karena kebetulan?

Backtesting membantu menjawab semua itu.

Namun backtesting bukan sekadar menekan tombol replay dan menebak arah candle.

Backtesting harus dicatat.

Jika tidak dicatat, tidak ada data. Jika tidak ada data, tidak ada evaluasi. Jika tidak ada evaluasi, trader hanya bermain-main dengan chart masa lalu.

Bab ini memberi template agar trader bisa menguji sistem secara rapi dan menghasilkan data yang bisa dipakai.

---

## Tujuan Pembelajaran

Setelah mempelajari bab ini, pembaca diharapkan mampu:

- memahami fungsi backtesting sebagai pengujian sistem
- menyiapkan lingkungan simulasi yang jujur
- memakai template spreadsheet backtesting
- mencatat hasil dalam satuan R
- menghitung win rate, Net R, expectancy, dan maximum drawdown
- membaca data berdasarkan sesi, setup, dan instrumen
- menghindari kesalahan umum seperti curve fitting dan cherry picking
- menentukan apakah sistem layak lanjut ke forward test

---

## 1. Apa Itu Backtesting?

Backtesting adalah proses menguji strategi pada data masa lalu.

Tujuannya bukan untuk membuktikan bahwa trader pasti menang.

Tujuannya adalah melihat bagaimana aturan strategi bekerja dalam banyak kondisi market.

Backtesting yang sehat menjawab:

- apakah setup ini sering muncul?
- apakah setup ini punya hasil positif dalam jangka panjang?
- kapan setup ini paling bagus?
- kapan setup ini paling buruk?
- seberapa besar losing streak yang harus disiapkan?
- apakah risk/reward realistis?

Backtesting membuat trader berhenti hanya percaya pada perasaan.

Ia mulai percaya pada data.

---

## 2. Backtesting Bukan Mencari Setup Sempurna

Kesalahan umum pemula adalah mencari contoh chart yang indah.

Mereka mundur ke masa lalu, melihat setup yang jelas, lalu berkata:

> "Kalau saya live waktu itu, saya pasti entry."

Padahal saat market berjalan nyata, setup tidak selalu terlihat sejelas itu.

Backtesting harus dilakukan seolah-olah trader tidak tahu masa depan.

Karena itu, gunakan:

- Bar Replay
- chart digeser dari kiri ke kanan
- rules yang sudah ditulis sebelum mulai
- data dicatat berurutan
- tidak melompati trade yang jelek

Backtesting bukan tempat membuktikan ego benar.

Backtesting adalah tempat menguji apakah aturan benar-benar punya edge.

---

## 3. Persiapan Sebelum Backtesting

Sebelum mulai, tentukan dulu aturan sistem.

Jangan backtest dengan aturan yang berubah-ubah.

Minimal tulis:

- instrumen yang diuji
- timeframe HTF
- timeframe entry
- sesi trading
- model entry
- syarat bias
- syarat sweep
- syarat MSS
- syarat FVG / POI
- aturan SL
- aturan TP
- risk per trade
- kapan tidak trade

Contoh:

```text
Instrumen: EURUSD
HTF: H1 dan M15
Entry: M5
Sesi: London Killzone
Setup: Sweep Asia Low + Bullish MSS + Return ke FVG
Risk: 1R
Target: Asia High atau minimal 1:2
Tidak trade: 30 menit sebelum news high impact
```

Jika aturan belum jelas, hasil backtest akan kacau.

---

## 4. Ukuran Sampel

Sampel terlalu kecil bisa menipu.

Melihat 5 trade menang beruntun tidak berarti sistem bagus.

Melihat 5 trade loss beruntun juga tidak berarti sistem buruk.

Panduan sederhana:

| Jumlah Sampel | Kegunaan |
|---:|---|
| 20 trade | Gambaran awal |
| 50 trade | Mulai terlihat pola |
| 100 trade | Lebih layak untuk evaluasi |
| 200+ trade | Lebih kuat secara statistik |

Untuk pemula, target awal yang sehat adalah 50 trade.

Setelah itu lanjutkan ke 100 trade.

Jangan langsung memakai uang nyata hanya karena 10 trade pertama profit.

---

## 5. Template Backtesting

Gunakan tabel berikut di Google Sheets atau Excel.

| No | Tanggal | Hari | Sesi | Instrumen | Arah | Setup Model | HTF Bias | Liquidity Sweep | Entry Trigger | POI | SL Logic | Target Logic | RR Awal | Hasil | R Realisasi | Screenshot | Catatan |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|---:|---|---:|---|---|
| 1 |  |  |  |  | Buy/Sell |  | Bullish/Bearish | BSL/SSL | MSS/FVG |  |  |  |  | Win/Loss/BE |  |  |  |
| 2 |  |  |  |  | Buy/Sell |  | Bullish/Bearish | BSL/SSL | MSS/FVG |  |  |  |  | Win/Loss/BE |  |  |  |

Kolom ini terlihat banyak, tetapi semuanya membantu evaluasi.

Jika ingin versi lebih sederhana, gunakan minimal:

| No | Tanggal | Sesi | Instrumen | Setup | Arah | Hasil | R | Screenshot | Catatan |
|---:|---|---|---|---|---|---|---:|---|---|
| 1 |  |  |  |  |  |  |  |  |  |

Namun untuk perkembangan serius, template lengkap lebih baik.

---

## 6. Penjelasan Kolom Penting

### Hari

Berguna untuk melihat apakah sistem lebih buruk di hari tertentu.

Contoh:

- Senin sering choppy
- Selasa sering reversal
- Rabu/Kamis lebih bagus untuk continuation
- Jumat sering profit taking

### Sesi

Berguna untuk melihat performa berdasarkan waktu.

Contoh:

- Asia
- London
- New York
- London Close

Jika satu sesi selalu merugikan, sesi itu bisa dikurangi.

### Setup Model

Catat model entry.

Contoh:

- Sweep + MSS
- OTE
- Silver Bullet
- FVG Return
- Unicorn
- Breaker

Ini membantu menemukan setup mana yang benar-benar punya edge.

### HTF Bias

Catat apakah bias besar bullish, bearish, atau netral.

Setup yang searah HTF mungkin punya performa berbeda dari setup counter-trend.

### R Realisasi

Catat hasil dalam R, bukan hanya uang.

Contoh:

- loss penuh = -1R
- breakeven = 0R
- profit 1:2 = +2R
- partial profit = +1.3R

R membuat evaluasi lebih objektif.

### Screenshot

Screenshot wajib jika ingin membangun playbook.

Minimal simpan:

- screenshot sebelum entry
- screenshot setelah trade selesai

---

## 7. Cara Melakukan Backtesting dengan Bar Replay

Langkah sederhana:

1. pilih instrumen
2. pilih periode waktu
3. aktifkan Bar Replay
4. mulai dari titik lama, bukan dari chart terbaru
5. tandai HTF bias
6. maju candle demi candle
7. tunggu setup sesuai rules
8. jika setup muncul, catat entry, SL, TP
9. lanjutkan replay sampai hasil selesai
10. isi tabel backtesting
11. ulangi sampai minimal 50–100 sampel

Aturan penting:

- jangan mengintip harga kanan
- jangan mengubah rules setelah melihat hasil
- jangan melewati setup yang kalah
- jangan hanya mengambil contoh yang cantik
- catat semua trade valid secara berurutan

---

## 8. The Big 4 Metrics

Setelah data terkumpul, hitung empat metrik utama.

### 1. Win Rate

Rumus:

```text
Win Rate = Jumlah Win / Total Trade x 100%
```

Contoh:

- total trade: 100
- win: 45
- win rate: 45%

Win rate tidak harus sangat tinggi jika RR sehat.

### 2. Net R

Net R adalah total hasil dalam satuan R.

Contoh:

```text
+2R -1R +3R -1R +0R = +3R
```

Net R menunjukkan hasil akhir sistem tanpa terganggu nominal uang.

### 3. Maximum Drawdown

Maximum drawdown adalah penurunan terbesar dari puncak performa.

Ini penting karena menunjukkan tekanan psikologis yang mungkin muncul saat live trading.

Contoh:

- equity R sempat naik ke +10R
- lalu turun ke +4R
- drawdown = -6R

Jika trader tahu sistem pernah mengalami drawdown -6R dalam backtest, ia tidak akan panik berlebihan saat live mengalami -3R atau -4R.

### 4. Trade Expectancy

Expectancy adalah rata-rata harapan hasil per trade.

Rumus sederhana:

```text
Expectancy = (Win Rate x Average Win) - (Loss Rate x Average Loss)
```

Contoh:

- win rate: 45% = 0.45
- average win: 2R
- loss rate: 55% = 0.55
- average loss: 1R

```text
(0.45 x 2) - (0.55 x 1) = 0.90 - 0.55 = +0.35R
```

Artinya, secara rata-rata, setiap trade bernilai positif +0.35R dalam jangka panjang.

---

## 9. Analisis Lanjutan dari Data

Setelah metrik utama dihitung, lakukan filter.

### Berdasarkan Sesi

| Sesi | Total Trade | Net R | Kesimpulan |
|---|---:|---:|---|
| Asia |  |  |  |
| London |  |  |  |
| New York |  |  |  |

### Berdasarkan Setup

| Setup | Total Trade | Net R | Kesimpulan |
|---|---:|---:|---|
| Sweep + MSS |  |  |  |
| Silver Bullet |  |  |  |
| OTE |  |  |  |

### Berdasarkan Hari

| Hari | Total Trade | Net R | Kesimpulan |
|---|---:|---:|---|
| Senin |  |  |  |
| Selasa |  |  |  |
| Rabu |  |  |  |
| Kamis |  |  |  |
| Jumat |  |  |  |

Filter seperti ini membantu menemukan keunggulan spesifik.

Mungkin sistem Anda bagus di London, tetapi buruk di Asia.

Mungkin bagus di Selasa–Kamis, tetapi buruk di Jumat.

Mungkin setup Sweep + MSS bagus, tetapi OTE tanpa sweep buruk.

Data seperti ini jauh lebih berguna daripada sekadar win rate total.

---

## 10. Kriteria Sistem Layak Lanjut

Sistem tidak harus sempurna untuk lanjut ke tahap berikutnya.

Namun minimal harus punya tanda sehat.

Kriteria awal:

- minimal 50–100 sampel
- Net R positif
- expectancy positif
- drawdown masih bisa diterima
- rules jelas dan bisa diulang
- screenshot setup terbaik terkumpul
- tidak hanya profit dari satu trade besar
- performa tidak bergantung pada cherry picking

Jika sistem memenuhi ini, lanjut ke forward test demo.

Jangan langsung live besar.

Tahap sehat:

1. backtest
2. forward test demo
3. live kecil
4. scaling bertahap

---

## 11. Forward Test Setelah Backtest

Backtest menguji masa lalu.

Forward test menguji masa depan secara real-time tanpa risiko besar.

Forward test bisa dilakukan di:

- akun demo
- paper trading
- akun live micro lot

Tujuannya:

- menguji apakah trader bisa mengikuti rules saat market berjalan real-time
- melihat apakah hasil backtest masih relevan
- melatih emosi dan disiplin
- menguji eksekusi manual

Sistem yang bagus di backtest belum tentu langsung mudah dijalankan live.

Karena saat live, ada emosi, ragu, FOMO, dan tekanan uang.

---

## 12. Kesalahan Umum Backtesting

### 1. Cherry picking

Hanya memilih contoh setup yang menang.

### 2. Curve fitting

Mengubah aturan berkali-kali agar cocok dengan data masa lalu.

### 3. Mengintip masa depan

Melihat hasil dulu baru menentukan entry.

### 4. Tidak mencatat semua trade

Setup kalah sering dilewati tanpa sadar.

### 5. Sampel terlalu kecil

10–20 trade belum cukup untuk kesimpulan kuat.

### 6. Tidak mencatat screenshot

Tanpa screenshot, sulit membangun playbook.

### 7. Tidak menghitung drawdown

Trader kaget saat live mengalami losing streak.

### 8. Mengubah risk saat simulasi

Risk harus konsisten agar hasil bisa dievaluasi.

---

## 13. Checklist Backtesting

Sebelum mulai, pastikan:

- strategi sudah ditulis jelas
- instrumen sudah dipilih
- timeframe sudah ditentukan
- sesi sudah ditentukan
- rules entry sudah jelas
- rules SL dan TP sudah jelas
- news filter sudah jelas
- spreadsheet sudah siap
- screenshot disimpan
- target sampel sudah ditentukan

Setelah selesai, pastikan:

- win rate dihitung
- Net R dihitung
- expectancy dihitung
- maximum drawdown dihitung
- performa difilter berdasarkan sesi/setup/hari
- kesimpulan sistem ditulis
- keputusan lanjut atau revisi ditentukan

---

## 14. Template Kesimpulan Backtest

Setelah menyelesaikan sampel, tulis kesimpulan seperti ini:

```text
Nama Sistem:
Instrumen:
Timeframe:
Sesi:
Jumlah Sampel:
Win Rate:
Net R:
Average Win:
Average Loss:
Expectancy:
Maximum Drawdown:
Sesi Terbaik:
Sesi Terburuk:
Setup Terbaik:
Setup Terburuk:
Kesalahan Umum:
Keputusan:
```

Contoh keputusan:

- lanjut forward test demo 1 bulan
- revisi aturan entry
- hapus sesi Asia
- hanya trade London
- turunkan target RR
- tambah filter news
- sistem belum layak live

---

## 15. Glosarium Bab 02

- **Backtesting:** pengujian strategi pada data masa lalu.
- **Bar Replay:** fitur untuk memutar ulang pergerakan chart candle demi candle.
- **Sample Size:** jumlah sampel trade yang digunakan untuk evaluasi.
- **Win Rate:** persentase trade menang dibanding total trade.
- **Net R:** total hasil dalam satuan risiko.
- **Maximum Drawdown:** penurunan terbesar dari puncak performa.
- **Expectancy:** rata-rata harapan hasil per trade.
- **Curve Fitting:** menyesuaikan aturan terlalu berlebihan agar cocok dengan data masa lalu.
- **Cherry Picking:** hanya memilih data yang mendukung hasil yang diinginkan.
- **Forward Test:** pengujian strategi secara real-time setelah backtest.

---

## 16. Ringkasan Bab

Inti bab ini adalah:

- backtesting menguji sistem dengan data, bukan perasaan
- strategi harus ditulis sebelum diuji
- hasil harus dicatat di spreadsheet
- hasil sebaiknya dihitung dalam R
- minimal 50–100 sampel lebih sehat untuk evaluasi
- metrik utama adalah win rate, Net R, maximum drawdown, dan expectancy
- data harus difilter berdasarkan sesi, setup, hari, dan instrumen
- backtest yang baik dilanjutkan ke forward test sebelum live besar
- hindari cherry picking, curve fitting, dan mengintip masa depan

---

## Penutup Terakhir Pustaka

Dengan menyelesaikan bab ini, seluruh kurikulum trading dalam repo ini sudah sampai pada titik praktik.

Anda sudah melewati fondasi, struktur, likuiditas, POI, timing, entry, risk, jurnal, psikologi, advanced concepts, dan akhirnya backtesting.

Tetapi akhir materi bukan akhir perjalanan.

Trading berkembang lewat siklus:

```text
Belajar → Backtest → Forward Test → Live Kecil → Jurnal → Review → Perbaiki → Ulangi
```

Jangan buru-buru mencari konsep baru jika konsep lama belum diuji.

Kumpulkan data. Catat hasil. Evaluasi proses. Perbaiki satu hal setiap periode.

Itulah cara trading berubah dari tebakan menjadi sistem.

## Catatan

*Tugas Akhir: buat spreadsheet backtesting dan selesaikan minimal 50 sampel pertama untuk satu setup saja. Jangan ganti setup di tengah jalan. Setelah 50 sampel, hitung win rate, Net R, expectancy, dan maximum drawdown. Dari sana, putuskan apakah sistem layak dilanjutkan ke 100 sampel atau perlu direvisi.*
