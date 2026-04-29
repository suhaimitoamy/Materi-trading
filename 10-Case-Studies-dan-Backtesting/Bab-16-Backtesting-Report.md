# Bab 16 — Backtesting Report

## Tujuan Bab

Bab ini membahas cara membuat laporan backtesting.

Laporan backtesting membantu pembaca merangkum hasil uji setup agar mudah direview dan diperbaiki.

---

## Apa Itu Backtesting Report?

Backtesting report adalah ringkasan hasil backtest dalam format yang rapi.

Report bukan hanya angka profit.

Report harus menjelaskan:

- setup yang diuji;
- aturan yang dipakai;
- jumlah sample;
- hasil dalam R;
- kondisi terbaik;
- kondisi terburuk;
- drawdown;
- filter yang dibutuhkan;
- kesimpulan apakah setup layak lanjut.

---

## Format Report

Gunakan format berikut:

```md
# Backtesting Report

Setup/model:
Instrumen:
Timeframe:
Periode data:
Jumlah sample:
Rules valid:
Rules invalid:

Total win:
Total loss:
Break even:
Winrate:
Total R:
Average R:
Expectancy:
Max drawdown:
Max loss streak:

Kondisi terbaik:
Kondisi terburuk:
Filter yang disarankan:
Kesimpulan:
Lanjut forward test: Ya / Tidak
```

---

## Report Harus Jujur

Jangan menghapus data yang buruk agar report terlihat bagus.

Report yang jujur lebih berguna daripada report yang indah tetapi palsu.

Tujuan report adalah membantu keputusan, bukan membenarkan bias.

---

## Kesalahan Umum Pemula

- Report hanya berisi winrate.
- Tidak mencatat drawdown.
- Tidak mencatat kondisi market.
- Menghapus contoh gagal.
- Menyimpulkan setup layak tanpa sample cukup.

---

## Latihan Praktik

Buat satu report dari minimal 50 contoh backtest.

Tulis kesimpulan:

- lanjut forward test;
- ulangi backtest;
- tambah filter;
- atau buang setup.

---

## Ringkasan Bab

Backtesting report merangkum hasil uji setup secara rapi. Report harus mencakup rules, sample, hasil, drawdown, kondisi terbaik, kondisi terburuk, filter, dan keputusan lanjut.

---

## Checklist Sebelum Lanjut

Sebelum lanjut, pembaca harus bisa:

- membuat backtesting report;
- mencatat metrik utama;
- menulis kondisi terbaik dan terburuk;
- membuat kesimpulan objektif;
- tidak menghapus data gagal.
