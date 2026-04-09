# Grab vs Run Logic

## Tujuan
Logika ini dipakai agar sistem bisa membedakan event likuiditas awal dan delivery yang sudah lebih matang.

---

## Grab logic
Sistem bisa membaca kondisi grab saat:
- level likuiditas penting tersentuh atau disapu
- ada reclaim atau reaksi awal
- tetapi belum ada shift valid yang cukup kuat

Grab lebih cocok dibaca sebagai warning, bukan entry final.

---

## Run logic
Sistem bisa membaca kondisi run saat:
- event likuiditas sudah terjadi
- swing terdekat yang relevan berhasil dipatahkan
- displacement cukup kuat
- market mulai menunjukkan continuation

Run lebih layak dipakai untuk proyeksi dan narasi delivery.

---

## Ringkasan
Logika grab vs run membantu indikator menjadi lebih jujur dalam membedakan event awal dan move yang benar-benar mulai berjalan.
