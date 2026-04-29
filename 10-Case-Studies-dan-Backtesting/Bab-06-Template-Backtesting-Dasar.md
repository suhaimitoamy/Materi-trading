# Bab 06 — Template Backtesting Dasar

## Tujuan Bab

Bab ini menyediakan template backtesting dasar.

Backtesting membantu pembaca menguji apakah sebuah setup atau model layak dipelajari lebih lanjut berdasarkan data, bukan perasaan.

---

## Apa Itu Backtesting?

Backtesting adalah proses menguji ide trading menggunakan data chart masa lalu.

Tujuannya bukan mencari contoh yang sempurna, tetapi mengumpulkan data secara jujur.

Backtesting harus mencatat contoh berhasil dan gagal.

---

## Template Backtesting Dasar

```md
# Backtesting Setup

Nomor contoh:
Tanggal:
Instrumen:
Timeframe:
Session:
Model/setup:

HTF context:
Bias:
Liquidity:
POI:
Trigger:
Invalidation:
Target:
Risk asumsi:
R:R:

Hasil:
Menang / Kalah / BE / Tidak valid:
Catatan:
Screenshot:
```

---

## Data Minimal yang Dicatat

Minimal catat:

- setup yang diuji;
- konteks;
- entry rules;
- invalidation;
- target;
- hasil dalam R;
- alasan valid atau tidak valid.

Jika data terlalu sedikit, hasil backtest sulit dipercaya.

---

## Jangan Mengubah Aturan di Tengah Backtest

Sebelum mulai, tentukan aturan.

Jika aturan berubah setiap kali melihat chart, hasil backtest tidak objektif.

Catat dulu aturan awal, lalu jalankan sampai sampel selesai.

---

## Kesalahan Umum Pemula

- Hanya mencari contoh yang menang.
- Mengubah aturan saat hasil buruk.
- Tidak mencatat contoh gagal.
- Tidak menyimpan screenshot.
- Menganggap 3 contoh sudah cukup.

---

## Latihan Praktik

Pilih satu setup sederhana.

Kumpulkan 20 contoh.

Isi template untuk semua contoh tanpa mengubah aturan di tengah proses.

---

## Ringkasan Bab

Backtesting dasar adalah proses menguji setup secara jujur dengan data masa lalu. Template membantu mencatat konteks, rules, hasil, dan pelajaran agar setup bisa dinilai lebih objektif.

---

## Checklist Sebelum Lanjut

Sebelum lanjut, pembaca harus bisa:

- menjelaskan backtesting;
- memakai template backtesting;
- mencatat contoh menang dan gagal;
- tidak mengubah aturan di tengah uji;
- mengumpulkan minimal 20 contoh awal.
