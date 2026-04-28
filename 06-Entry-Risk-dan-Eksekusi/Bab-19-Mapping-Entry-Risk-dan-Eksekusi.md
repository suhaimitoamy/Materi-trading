# Bab 19 — Mapping Entry, Risk, dan Eksekusi

## Tujuan Bab

Bab ini menyatukan seluruh konsep entry, risk, dan eksekusi menjadi workflow mapping.

Setelah memahami trade plan, validasi, trigger, invalidation, stop loss, risk, target, manajemen posisi, dan model entry, pembaca perlu satu alur kerja yang rapi.

---

## Kenapa Mapping Eksekusi Dibutuhkan?

Tanpa mapping, pembaca mudah loncat dari analisis ke entry.

Mapping eksekusi membantu menjawab:

- apakah setup sudah valid;
- trigger apa yang ditunggu;
- di mana invalidation;
- berapa risk;
- ke mana target;
- apa rencana setelah entry;
- apakah trade layak dieksekusi atau dilewati.

---

## Workflow Mapping Eksekusi

Gunakan urutan berikut:

1. Tentukan bias.
2. Tentukan struktur dan liquidity.
3. Tentukan POI.
4. Cek session/timing.
5. Tulis validasi setup.
6. Tentukan trigger.
7. Tentukan invalidation.
8. Tentukan stop loss.
9. Tentukan target.
10. Hitung risk dan R:R.
11. Tulis rencana manajemen posisi.
12. Eksekusi hanya jika semua bagian jelas.

---

## Format Mapping Eksekusi

```md
## Mapping Entry, Risk, dan Eksekusi

Bias:
Struktur:
Liquidity:
POI:
Session/timing:
Validasi setup:
Trigger:
Invalidation:
Stop loss:
Target 1:
Target utama:
Risk per trade:
R:R:
Manajemen posisi:
Kondisi batal:
Keputusan: ambil / tunggu / lewatkan
```

---

## Keputusan Bukan Hanya Buy atau Sell

Dalam eksekusi, keputusan bisa berupa:

- ambil trade;
- tunggu konfirmasi;
- lewatkan trade;
- batalkan ide;
- review ulang.

Keputusan untuk tidak entry adalah bagian dari disiplin.

---

## Kesalahan Umum Pemula

- Mapping hanya sampai POI, lalu langsung entry.
- Tidak menulis invalidation.
- Risk dihitung setelah posisi dibuka.
- Target tidak jelas.
- Tidak punya rencana setelah entry.

---

## Latihan Praktik

Ambil 10 contoh setup lama.

Untuk setiap setup, buat mapping eksekusi lengkap.

Setelah itu, tulis apakah trade:

- layak diambil;
- sebaiknya ditunggu;
- sebaiknya dilewatkan.

---

## Ringkasan Bab

Mapping eksekusi menyatukan validasi setup, trigger, invalidation, stop loss, target, risk, R:R, dan manajemen posisi. Trade hanya layak dieksekusi jika semua bagian penting sudah jelas.

---

## Checklist Sebelum Lanjut

Sebelum lanjut, pembaca harus bisa:

- membuat mapping eksekusi lengkap;
- membedakan ambil, tunggu, dan lewatkan;
- menentukan invalidation dan risk sebelum entry;
- menulis target sebelum entry;
- tidak loncat dari POI ke entry tanpa plan.
