# Bab 17 — Mapping Case Study dan Backtesting

## Tujuan Bab

Bab ini menyatukan studi kasus dan backtesting menjadi workflow mapping.

Tujuannya agar pembaca bisa membedah trade, mengumpulkan data, membaca metrik, membuat filter, dan menyusun sistem pribadi secara berurutan.

---

## Kenapa Mapping Dibutuhkan?

Tanpa mapping, backtesting bisa menjadi kumpulan screenshot acak.

Mapping membantu menjawab:

- setup apa yang diuji;
- rules apa yang dipakai;
- data apa yang dicatat;
- metrik apa yang dibaca;
- filter apa yang dibuat;
- apakah setup layak lanjut ke forward test.

---

## Workflow Mapping

Gunakan urutan berikut:

1. Tentukan setup/model yang diuji.
2. Tulis syarat valid dan invalid.
3. Buat template backtesting.
4. Kumpulkan 20 contoh awal.
5. Evaluasi rules dan format.
6. Naikkan sample ke 50 atau 100.
7. Hitung winrate, average R, expectancy, drawdown, dan loss streak.
8. Pisahkan kondisi terbaik dan terburuk.
9. Buat filtering rules.
10. Buat report.
11. Lanjutkan ke forward test jika layak.
12. Masukkan contoh terbaik ke playbook.

---

## Format Mapping

```md
## Mapping Case Study dan Backtesting

Setup/model:
Instrumen:
Timeframe:
Rules valid:
Rules invalid:
Sample target:
Metrik yang dihitung:
Kondisi terbaik:
Kondisi terburuk:
Filter:
Status: backtest / forward test / revisi / buang
Catatan:
```

---

## Keputusan Setelah Mapping

Setelah mapping, keputusan bisa berupa:

- lanjut forward test;
- tambah sample;
- perjelas rules;
- tambah filter;
- buang setup;
- masukkan ke playbook.

Tidak semua setup harus dipertahankan.

---

## Kesalahan Umum Pemula

- Mengumpulkan screenshot tanpa format.
- Tidak menulis rules valid/invalid.
- Tidak menghitung hasil dalam R.
- Tidak membuat report.
- Tidak mengambil keputusan setelah data terkumpul.

---

## Latihan Praktik

Pilih satu setup dari folder 09.

Buat mapping lengkap dengan format di atas.

Tulis keputusan akhir setelah minimal 20 contoh.

---

## Ringkasan Bab

Mapping case study dan backtesting menyatukan proses dari pemilihan setup sampai keputusan lanjut. Backtesting yang baik harus menghasilkan keputusan: lanjut, revisi, filter, atau buang.

---

## Checklist Sebelum Lanjut

Sebelum lanjut, pembaca harus bisa:

- membuat mapping backtesting;
- menulis rules valid dan invalid;
- mencatat metrik utama;
- mengambil keputusan dari data;
- menyusun workflow dari case study ke forward test.
