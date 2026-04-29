# Bab 12 — Filtering Rules dari Data

## Tujuan Bab

Bab ini membahas cara membuat filtering rules berdasarkan data backtesting.

Filtering rules membantu pembaca membuang kondisi yang sering menghasilkan trade buruk dan mempertahankan kondisi yang paling layak.

---

## Apa Itu Filtering Rules?

Filtering rules adalah aturan penyaring agar setup tidak dipakai di semua kondisi.

Contoh:

- hanya ambil setup jika HTF align;
- hindari entry di tengah range;
- hindari setup 15 menit sebelum news besar;
- hanya ambil POI fresh;
- hanya ambil setup Grade A/B.

---

## Filter Harus Berasal dari Data

Filter tidak sebaiknya dibuat hanya dari rasa takut.

Gunakan data untuk melihat:

- kondisi mana yang sering loss;
- kondisi mana yang risk-nya buruk;
- setup mana yang sering dipaksakan;
- session mana yang tidak cocok;
- model mana yang paling stabil.

---

## Jangan Membuat Terlalu Banyak Filter

Terlalu banyak filter bisa membuat pembaca tidak pernah entry.

Mulai dari filter yang paling berdampak.

Contoh:

1. wajib HTF align;
2. wajib target minimal 2R;
3. tidak entry saat harga di tengah range.

---

## Filter yang Baik

Filter yang baik harus:

- jelas;
- bisa dicek sebelum entry;
- berasal dari data;
- mengurangi trade buruk;
- tidak terlalu subjektif;
- mudah dievaluasi ulang.

---

## Kesalahan Umum Pemula

- Membuat filter karena takut loss.
- Terlalu banyak filter.
- Menghapus semua trade loss dari sistem.
- Tidak menguji filter baru.
- Mengubah filter setelah beberapa trade saja.

---

## Latihan Praktik

Ambil 50 data backtest.

Tulis:

1. tiga kondisi yang paling sering menghasilkan loss;
2. tiga kondisi terbaik setup;
3. maksimal tiga filter baru;
4. bagaimana filter itu akan diuji ulang;
5. trade mana yang akan terhapus jika filter dipakai.

---

## Ringkasan Bab

Filtering rules membantu menyaring setup berdasarkan data. Filter harus jelas, tidak terlalu banyak, dan diuji ulang. Tujuannya bukan menghindari semua loss, tetapi mengurangi trade buruk yang bisa dikenali dari data.

---

## Checklist Sebelum Lanjut

Sebelum lanjut, pembaca harus bisa:

- menjelaskan filtering rules;
- membuat filter dari data;
- membatasi jumlah filter;
- menguji filter baru;
- tidak membuat filter hanya karena takut loss.
