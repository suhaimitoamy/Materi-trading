# Bab 09 — Membaca Winrate, Expectancy, dan Average R

## Tujuan Bab

Bab ini menjelaskan metrik dasar backtesting: winrate, expectancy, dan average R.

Metrik ini membantu pembaca membaca performa setup secara objektif, bukan dari perasaan setelah beberapa trade.

---

## Apa Itu Winrate?

Winrate adalah persentase trade yang menang dibanding total trade.

Contoh:

- total trade: 100;
- trade menang: 45;
- winrate: 45%.

Winrate penting, tetapi tidak cukup untuk menilai sistem.

---

## Apa Itu Average R?

Average R adalah rata-rata hasil trade dalam satuan R.

R adalah satuan risiko.

Contoh:

- loss penuh = -1R;
- profit dua kali risiko = +2R;
- break even = 0R.

Average R membantu melihat kualitas hasil secara lebih adil.

---

## Apa Itu Expectancy?

Expectancy adalah ekspektasi rata-rata hasil per trade.

Dalam bahasa sederhana:

> Expectancy menunjukkan apakah sebuah setup punya potensi positif dalam jangka panjang berdasarkan data.

Jika expectancy positif, setup layak dipelajari lebih lanjut.

Jika expectancy negatif, setup perlu difilter atau ditolak.

---

## Winrate Tinggi Tidak Selalu Bagus

Winrate tinggi bisa tetap buruk jika loss jauh lebih besar daripada win.

Contoh:

- sering menang kecil;
- sesekali loss besar;
- hasil akhir tetap negatif.

Karena itu, winrate harus dibaca bersama R dan expectancy.

---

## Winrate Rendah Tidak Selalu Buruk

Winrate rendah bisa tetap baik jika reward jauh lebih besar daripada risk.

Namun, model seperti ini bisa lebih berat secara psikologi karena loss streak bisa lebih sering.

---

## Kesalahan Umum Pemula

- Hanya melihat winrate.
- Tidak menghitung hasil dalam R.
- Mengabaikan average loss.
- Tidak menghitung expectancy.
- Menilai setup dari beberapa trade saja.

---

## Latihan Praktik

Ambil 50 contoh backtest.

Hitung:

1. total trade;
2. jumlah win;
3. jumlah loss;
4. winrate;
5. total R;
6. average R;
7. expectancy sederhana.

---

## Ringkasan Bab

Winrate menunjukkan seberapa sering setup menang. Average R menunjukkan rata-rata hasil. Expectancy membantu membaca apakah setup layak dalam jangka panjang. Jangan menilai sistem dari winrate saja.

---

## Checklist Sebelum Lanjut

Sebelum lanjut, pembaca harus bisa:

- menghitung winrate;
- mencatat hasil dalam R;
- menghitung average R sederhana;
- memahami expectancy;
- tidak menilai setup hanya dari winrate.
