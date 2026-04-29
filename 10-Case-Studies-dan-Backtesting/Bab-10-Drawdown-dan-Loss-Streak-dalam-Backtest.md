# Bab 10 — Drawdown dan Loss Streak dalam Backtest

## Tujuan Bab

Bab ini membahas cara membaca drawdown dan loss streak dari hasil backtesting.

Setup yang terlihat bagus tetap bisa memiliki periode loss beruntun. Pembaca perlu memahami risiko ini sebelum memakai setup di latihan forward test.

---

## Apa Itu Drawdown dalam Backtest?

Drawdown adalah penurunan performa dari titik tertinggi ke titik lebih rendah dalam data backtest.

Drawdown membantu membaca:

- seberapa dalam penurunan bisa terjadi;
- apakah risk terlalu besar;
- apakah setup punya fase buruk;
- apakah psikologi trader siap menghadapi penurunan itu.

---

## Apa Itu Loss Streak?

Loss streak adalah jumlah loss beruntun.

Dalam backtest, loss streak penting karena membantu memperkirakan tekanan psikologi yang mungkin muncul saat forward test.

Jika data menunjukkan setup bisa loss 5 kali berturut-turut, trader harus siap secara risk dan mental.

---

## Kenapa Ini Penting?

Banyak pemula hanya melihat winrate dan profit total.

Padahal drawdown dan loss streak menentukan apakah trader bisa tetap mengikuti plan saat hasil buruk.

Sistem yang profitable tetapi drawdown-nya besar bisa sulit dijalankan.

---

## Cara Membaca Drawdown

Catat:

- drawdown terbesar dalam R;
- jumlah loss beruntun terbesar;
- kapan drawdown terjadi;
- kondisi market saat drawdown;
- apakah drawdown berasal dari setup valid atau rules yang terlalu longgar.

---

## Kesalahan Umum Pemula

- Mengabaikan drawdown.
- Menganggap sistem bagus hanya dari total profit.
- Tidak siap menghadapi loss streak.
- Risk terlalu besar untuk karakter setup.
- Mengganti sistem saat drawdown normal terjadi.

---

## Latihan Praktik

Ambil 50–100 data backtest.

Tulis:

1. drawdown terbesar dalam R;
2. loss streak terpanjang;
3. kondisi market saat drawdown;
4. apakah rules perlu difilter;
5. apakah risk perlu dikurangi.

---

## Ringkasan Bab

Drawdown dan loss streak adalah bagian penting dari evaluasi backtest. Setup yang terlihat bagus tetap perlu diuji apakah drawdown-nya masih bisa diterima secara risk dan psikologi.

---

## Checklist Sebelum Lanjut

Sebelum lanjut, pembaca harus bisa:

- menjelaskan drawdown;
- menjelaskan loss streak;
- membaca drawdown dari data backtest;
- menyesuaikan risk berdasarkan drawdown;
- tidak menilai setup hanya dari profit total.
