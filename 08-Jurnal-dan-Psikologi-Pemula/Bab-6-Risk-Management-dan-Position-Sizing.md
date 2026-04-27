# Bab 06 — Risk Management dan Position Sizing: Sabuk Pengaman Akun Anda

> "Tujuan utama seorang trader pada tahun pertamanya bukan mencetak uang, melainkan bertahan hidup. Anda tidak bisa belajar probabilitas, psikologi, atau flow market jika modal sudah habis di awal perjalanan. Risk management adalah pagar yang menjaga trader tetap hidup cukup lama untuk berkembang."

## Mengapa Bab Ini Penting

Banyak trader pemula terlalu fokus mencari setup yang akurat. Mereka mengejar indikator, sinyal, strategi, dan model entry yang terlihat menjanjikan.

Namun ada satu kenyataan penting:

Setup bagus tetap bisa loss.

Trader yang benar arah pun tetap bisa rugi jika lot terlalu besar. Trader yang punya win rate tinggi pun bisa bangkrut jika satu loss menghapus banyak profit sebelumnya.

Inilah kenapa risk management lebih penting daripada sekadar mencari entry.

Risk management menjawab pertanyaan paling penting sebelum entry:

- berapa besar saya siap rugi jika salah?
- di mana ide saya invalid?
- apakah ukuran posisi saya sesuai jarak stop loss?
- apakah satu trade ini bisa merusak akun saya?
- apakah saya masih bisa berpikir jernih jika trade ini loss?

Trader yang tidak punya risk management sebenarnya tidak sedang trading. Ia sedang bertaruh.

Bab ini membahas bagaimana melindungi akun melalui fixed risk, position sizing, risk/reward, dan batas kerugian yang sehat.

---

## Tujuan Pembelajaran

Setelah mempelajari bab ini, pembaca diharapkan mampu:

- memahami fungsi risk management sebagai perlindungan akun
- membedakan fixed risk dan fixed lot
- menghitung ukuran posisi berdasarkan jarak stop loss
- memahami hubungan win rate, RR, dan expectancy
- menentukan batas risiko harian dan mingguan
- menghindari overleveraging
- menjaga psikologi tetap stabil melalui risiko yang terukur

---

## 1. Risk Management adalah Fondasi Bertahan Hidup

Trading adalah permainan probabilitas. Tidak ada setup yang menang 100%.

Karena itu, pertanyaan utama bukan:

> "Apakah trade ini pasti menang?"

Pertanyaan yang lebih sehat adalah:

> "Jika trade ini kalah, apakah akun saya tetap aman?"

Trader yang matang tidak takut loss kecil. Ia takut loss besar yang tidak terkendali.

Loss kecil adalah biaya bisnis. Loss besar adalah tanda sistem perlindungan rusak.

Risk management membuat trader bisa:

- menerima loss tanpa panik
- bertahan melewati losing streak
- menghindari margin call
- menjaga konsistensi eksekusi
- menilai performa sistem secara objektif

Tanpa risk management, semua ilmu teknikal mudah hancur oleh satu keputusan lot yang salah.

---

## 2. Fixed Risk: Kerugian Harus Tetap Terkontrol

Fixed risk berarti trader menentukan batas kerugian maksimal per trade dalam persentase akun.

Contoh umum:

- 0.25% per trade
- 0.5% per trade
- 1% per trade
- 2% per trade sebagai batas agresif

Untuk pemula, risk kecil lebih sehat.

Contoh modal $1.000:

| Risk | Kerugian Maksimal |
|---:|---:|
| 0.25% | $2.50 |
| 0.5% | $5 |
| 1% | $10 |
| 2% | $20 |

Angka ini terlihat kecil, tetapi justru itu tujuannya.

Trading bukan soal menang besar sekali. Trading adalah kemampuan bertahan dan mengulang edge dalam jangka panjang.

Jika risk terlalu besar, trader akan:

- takut entry
- cepat panik saat floating loss
- memindahkan SL
- revenge trading setelah loss
- sulit berpikir objektif

Risk yang terlalu besar bukan hanya masalah angka. Ia juga merusak psikologi.

---

## 3. Kenapa Fixed Lot Berbahaya

Banyak pemula memakai lot tetap.

Contoh:

> "Akun saya $1.000, saya selalu pakai 0.1 lot."

Ini terlihat sederhana, tetapi berbahaya.

Masalahnya, jarak stop loss setiap trade berbeda.

Contoh:

| Trade | Lot | Jarak SL | Risiko |
|---|---:|---:|---:|
| A | 0.1 | 10 pips | $10 |
| B | 0.1 | 30 pips | $30 |
| C | 0.1 | 50 pips | $50 |

Lot sama, tetapi risiko berubah drastis.

Artinya, trader tidak benar-benar mengontrol risiko.

Yang benar bukan lot tetap, tetapi risiko tetap.

Lot boleh berubah. Risiko harus tetap terkendali.

---

## 4. Stop Loss Ditentukan oleh Invalidation

Sebelum menghitung lot, trader harus tahu dulu di mana stop loss diletakkan.

Stop loss tidak boleh ditentukan hanya karena ingin rugi kecil.

Stop loss harus mengikuti titik invalidasi.

Invalidation menjawab:

> "Di mana ide trading saya terbukti salah?"

Contoh:

- buy setelah sweep SSL dan bullish MSS
- entry di bullish FVG
- ide buy invalid jika low sweep ditembus lagi dengan jelas

Maka stop loss harus berada di area yang secara logis membatalkan ide buy tersebut.

Jika stop loss terlalu dekat hanya demi RR terlihat besar, harga mudah menyentuh SL oleh noise normal.

Jika stop loss terlalu jauh tanpa alasan, risiko menjadi tidak efisien.

Urutan yang benar:

1. Tentukan ide trading.
2. Tentukan invalidation.
3. Tentukan stop loss.
4. Hitung lot berdasarkan jarak stop loss.
5. Pastikan risiko tetap sesuai batas.

---

## 5. Cara Menghitung Position Sizing

Position sizing adalah proses menghitung ukuran posisi agar jika SL tersentuh, kerugian tetap sesuai batas risiko.

Rumus sederhana:

```text
Nilai Risiko Uang = Modal x Persentase Risiko
Nilai per Pip = Nilai Risiko Uang / Jarak SL
Ukuran Lot = Nilai per Pip / Nilai Pip per 1 Lot
```

Contoh EURUSD:

- modal: $1.000
- risiko: 1%
- risiko uang: $10
- jarak SL: 25 pips
- nilai 1 lot: sekitar $10/pip

Hitung:

```text
$10 / 25 pips = $0.40 per pip
$0.40 / $10 = 0.04 lot
```

Maka ukuran posisi yang mendekati adalah 0.04 lot.

Jika setup lain punya SL 10 pips:

```text
$10 / 10 pips = $1 per pip
$1 / $10 = 0.10 lot
```

Lot berubah karena jarak SL berubah. Tetapi kerugian maksimal tetap $10.

Itulah inti position sizing.

---

## 6. Contoh Perbandingan Position Sizing

Misal modal $1.000 dan risiko tetap 1% atau $10.

| Jarak SL | Risiko Uang | Nilai Per Pip | Estimasi Lot EURUSD |
|---:|---:|---:|---:|
| 10 pips | $10 | $1.00/pip | 0.10 lot |
| 20 pips | $10 | $0.50/pip | 0.05 lot |
| 25 pips | $10 | $0.40/pip | 0.04 lot |
| 50 pips | $10 | $0.20/pip | 0.02 lot |

Kesimpulannya:

- SL makin lebar, lot harus makin kecil
- SL makin sempit, lot boleh lebih besar
- risiko uang tetap sama

Ini membuat akun tetap terlindungi meskipun setup berbeda-beda.

---

## 7. Win Rate Tidak Cukup Tanpa Risk/Reward

Banyak pemula mengejar win rate tinggi.

Mereka berpikir:

> "Kalau win rate 80%, pasti profit."

Tidak selalu.

Sistem dengan win rate tinggi tetap bisa rugi jika loss jauh lebih besar dari win.

Contoh buruk:

- 8 win x +$5 = +$40
- 2 loss x -$30 = -$60
- hasil akhir = -$20

Win rate 80%, tetapi tetap rugi.

Sebaliknya, sistem dengan win rate 40% bisa profit jika RR sehat.

Contoh:

- 4 win x +2.5R = +10R
- 6 loss x -1R = -6R
- hasil akhir = +4R

Win rate hanya 40%, tetapi sistem tetap profit.

Karena itu, trader harus memahami hubungan antara:

- win rate
- average win
- average loss
- risk/reward
- expectancy

---

## 8. Risk/Reward yang Sehat

Risk/Reward atau RR membandingkan potensi profit dengan risiko.

Contoh:

- risiko: 1R
- target: 2R
- RR = 1:2

RR sehat bukan berarti harus selalu besar. RR harus realistis sesuai struktur market.

RR terlalu kecil membuat trader butuh win rate sangat tinggi.

RR terlalu besar tetapi tidak realistis membuat target jarang tercapai.

Panduan sederhana:

| RR | Catatan |
|---|---|
| 1:1 | Butuh win rate tinggi |
| 1:1.5 | Masih masuk akal untuk scalping tertentu |
| 1:2 | Sehat untuk banyak model entry |
| 1:3 | Bagus jika target likuiditas jelas |
| Di atas 1:5 | Harus sangat selektif dan tidak dipaksakan |

Target harus mengikuti draw on liquidity, bukan angka RR yang dipaksakan.

---

## 9. Daily Loss Limit dan Weekly Loss Limit

Risk management bukan hanya per trade. Trader juga butuh batas harian dan mingguan.

### Daily Loss Limit

Contoh aturan:

- maksimal loss 2R per hari
- maksimal 2 trade loss berturut-turut
- setelah daily loss limit tercapai, trading selesai

Fungsi daily loss limit adalah mencegah satu hari buruk menghancurkan akun.

### Weekly Loss Limit

Contoh aturan:

- maksimal loss 5R per minggu
- jika tercapai, minggu itu berhenti real trading
- lanjut hanya review atau paper trade

Fungsi weekly loss limit adalah mencegah emosi berlarut-larut setelah beberapa hari buruk.

Trader yang tidak punya batas akan terus mencoba memperbaiki keadaan saat kondisi mental justru makin lemah.

---

## 10. Risiko dan Psikologi Saling Terhubung

Risk management bukan hanya matematika. Risk management juga alat psikologi.

Jika risk terlalu besar, emosi akan membesar.

Contoh:

- trader takut entry karena rugi terlalu besar
- trader memindahkan SL karena tidak siap loss
- trader revenge karena loss terasa menyakitkan
- trader cepat TP karena takut profit hilang

Banyak masalah psikologi sebenarnya berawal dari ukuran risiko yang tidak sesuai kapasitas mental.

Jika risk dibuat lebih kecil, trader bisa lebih tenang.

Trader yang tenang lebih mudah mengikuti rules.

Jadi, jika psikologi sering rusak, jangan hanya menyalahkan mental. Periksa juga ukuran risiko.

---

## 11. Kesalahan Umum Risk Management

### 1. Pakai lot tetap tanpa menghitung SL

Risiko berubah-ubah tanpa disadari.

### 2. Menentukan SL berdasarkan uang, bukan struktur

SL jadi tidak logis dan mudah terkena noise.

### 3. Risk terlalu besar untuk ukuran akun

Psikologi rusak dan trader sulit objektif.

### 4. Menaikkan lot setelah loss

Ini sering menjadi awal revenge trading.

### 5. Tidak punya daily loss limit

Satu hari buruk bisa berubah menjadi kerusakan besar.

### 6. Mengejar RR terlalu besar

Target dipaksakan, lalu profit yang sehat berubah menjadi loss.

### 7. Tidak mencatat hasil dalam R

Evaluasi jadi kabur karena terlalu fokus pada nominal uang.

---

## 12. Checklist Risk Sebelum Entry

Sebelum entry, jawab:

- di mana entry saya?
- di mana invalidation?
- di mana SL?
- berapa jarak SL?
- berapa risiko uang saya?
- berapa lot yang sesuai?
- target ke mana?
- apakah RR realistis?
- apakah trade ini masih sesuai daily loss limit?
- apakah saya siap menerima loss tanpa revenge?

Jika bagian risk belum jelas, entry belum boleh dilakukan.

---

## 13. Glosarium Bab 06

- **Risk Management:** aturan untuk membatasi risiko agar akun tetap terlindungi.
- **Position Sizing:** proses menghitung ukuran posisi berdasarkan risiko uang dan jarak stop loss.
- **Fixed Risk:** risiko tetap dalam persentase atau nominal per trade.
- **Fixed Lot:** memakai lot yang sama di semua trade tanpa menyesuaikan jarak SL.
- **Risk/Reward Ratio:** perbandingan antara potensi rugi dan potensi profit.
- **R-Multiple:** satuan hasil trade berdasarkan risiko awal.
- **Daily Loss Limit:** batas kerugian harian yang jika tercapai membuat trader berhenti.
- **Overleveraging:** memakai ukuran posisi terlalu besar dibanding modal.
- **Expectancy:** harapan matematis rata-rata dari sistem trading dalam jangka panjang.

---

## 14. Ringkasan Bab

Inti bab ini adalah:

- risk management adalah fondasi bertahan hidup
- trader harus mengontrol risiko sebelum mengejar profit
- fixed risk lebih sehat daripada fixed lot
- stop loss harus mengikuti invalidation, bukan rasa nyaman
- position sizing menjaga kerugian tetap konsisten meskipun SL berbeda-beda
- win rate tinggi tidak menjamin profit jika RR buruk
- daily loss limit dan weekly loss limit melindungi trader dari hari buruk
- risk yang terlalu besar sering merusak psikologi
- hasil trading sebaiknya dievaluasi dalam R, bukan hanya uang

---

## Penutup

Trading yang sehat dimulai dari kemampuan menerima risiko secara sadar.

Jika Anda tahu berapa besar kerugian maksimal sebelum entry, di mana ide Anda salah, dan kapan harus berhenti, maka market tidak lagi terasa seperti ancaman liar. Market tetap tidak bisa dikendalikan, tetapi risiko Anda bisa.

Di bab berikutnya, kita akan membuat proses evaluasi mingguan menjadi lebih praktis melalui **Template Review Mingguan**.

## Catatan

*Tugas Praktik: ambil tiga setup terakhir Anda. Hitung ulang apakah lot yang digunakan sudah sesuai dengan risiko tetap dan jarak SL. Jika ternyata setiap trade punya risiko berbeda-beda tanpa rencana, tulis aturan position sizing baru sebelum trade berikutnya.*
