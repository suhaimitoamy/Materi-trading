# Bab 6 — Invalidation Engine dan Expiry Logic

> Dalam trading discretionary, trader bisa melihat sendiri kapan sebuah area sudah tidak layak dipakai lagi. Tetapi dalam sistem atau indikator, hal seperti itu harus diterjemahkan dengan jelas. Di sinilah **Invalidation Engine** dan **Expiry Logic** menjadi sangat penting.

## Mengapa Bab Ini Penting

Banyak indikator terlihat menarik di awal, tetapi lama-lama menjadi membingungkan karena:
- zona lama masih tetap aktif padahal market sudah berubah
- sinyal lama masih muncul seolah-olah masih relevan
- area yang sebenarnya sudah rusak belum dibuang

Kalau sistem tidak tahu kapan harus membatalkan dan kapan harus menghapus area, chart akan penuh “sampah logika”.

---

## Tujuan Pembelajaran

Setelah mempelajari bab ini, pembaca diharapkan mampu:

- memahami apa itu invalidation engine
- memahami apa itu expiry logic
- melihat kenapa sistem harus tahu kapan area gagal
- memahami hubungan dua hal ini dengan kejujuran indikator

---

## 1. Apa Itu Invalidation Engine?

**Invalidation Engine** adalah bagian sistem yang bertugas menentukan kapan sebuah ide, zona, atau setup dianggap **tidak valid lagi**.

Contohnya:
- bullish zone dianggap gagal jika low struktur tertentu jebol
- bearish zone dianggap gagal jika high penting ditembus
- setup continuation dianggap gagal kalau retrace terlalu dalam

Artinya, invalidation engine menjaga agar sistem tetap jujur pada cerita market.

---

## 2. Apa Itu Expiry Logic?

**Expiry Logic** adalah bagian sistem yang menentukan kapan sebuah zona atau setup harus **kedaluwarsa** walaupun belum tentu rusak secara struktur.

Kenapa perlu?
Karena market terus bergerak.
Kadang sebuah area tidak rusak, tetapi sudah terlalu lama, terlalu sering diuji, atau sudah tidak relevan untuk kondisi sekarang.

Jadi kalau invalidation bicara soal **gagal**, expiry bicara soal **tidak relevan lagi**.

---

## 3. Contoh Sederhana Invalidation

Misalnya sistem punya bullish zone di **2404–2406**.

Narasinya:
- sell-side liquidity sudah diambil
- bullish MSS sudah ada
- area **2404–2406** adalah zona buy

Kalau ternyata harga jebol ke **2399** dan low struktur penting di **2401** rusak, maka bullish zone itu seharusnya dianggap invalid.

Kalau indikator masih terus menampilkan zona itu seolah aktif, user akan bingung dan sistem jadi tidak jujur.

---

## 4. Contoh Sederhana Expiry

Misalnya ada bearish zone di **2438–2440** yang terbentuk saat London.

Tetapi harga tidak pernah kembali ke area itu, lalu market sudah bergerak jauh ke **2415**, sudah membangun struktur baru, dan dua sesi berlalu.

Secara teknis area itu mungkin belum “rusak”, tetapi secara praktis bisa jadi sudah tidak relevan.

Di sinilah expiry logic berguna.
Sistem bisa memutuskan bahwa area tersebut sudah kedaluwarsa dan tidak lagi ditampilkan sebagai zona aktif utama.

---

## 5. Kenapa Dua Hal Ini Penting untuk Indikator?

Karena indikator yang sehat harus bisa menjawab dua pertanyaan:
- kapan sebuah ide batal?
- kapan sebuah ide sudah terlalu usang untuk dipakai?

Tanpa dua jawaban ini, indikator akan:
- penuh zona lama
- sulit dibaca
- terasa tidak realistis
- membuat user sulit membedakan peluang aktif dan peluang lama

---

## 6. Hubungan dengan Zone Engine

Invalidation engine dan expiry logic sangat erat dengan **zone engine**.

Zone engine membuat area.
Invalidation engine menentukan kapan area rusak.
Expiry logic menentukan kapan area usang.

Kalau tiga hal ini bekerja bersama, indikator menjadi jauh lebih bersih dan lebih dekat dengan realitas market.

---

## 7. Hubungan dengan State Engine

Dua konsep ini juga erat dengan **state engine**.

Contohnya:
- state = projected zone
- state = in zone
- state = trigger ready
- kalau invalidation tercapai → state = invalid
- kalau area terlalu lama tidak relevan → state = expired atau area dihapus

Dengan cara ini, sistem tidak hanya mendeteksi peluang, tetapi juga tahu kapan harus berhenti menganggap peluang itu aktif.

---

## 8. Kenapa Ini Penting untuk Kepercayaan User?

User akan lebih percaya pada indikator yang:
- tahu kapan area aktif
- tahu kapan area gagal
- tahu kapan area sudah lewat

Sebaliknya, user akan cepat kehilangan kepercayaan pada indikator yang terus menampilkan semua hal seolah masih relevan.

Jadi invalidation engine dan expiry logic bukan sekadar fitur teknis. Mereka juga bagian dari **kejujuran sistem**.

---

## 9. Kesalahan Umum

### 1) Tidak punya invalidation sama sekali
Akibatnya semua zona terasa abadi.

### 2) Menghapus area terlalu cepat
Ini membuat sistem kehilangan konteks terlalu cepat.

### 3) Membiarkan area hidup terlalu lama
Ini membuat chart penuh sampah logika.

### 4) Tidak membedakan invalid dan expired
Padahal dua konsep ini berbeda.

---

## 10. Ringkasan Bab

Inti bab ini adalah:

- invalidation engine menentukan kapan ide atau zona gagal
- expiry logic menentukan kapan ide atau zona sudah usang
- dua hal ini sangat penting untuk menjaga indikator tetap jujur dan bersih
- sistem yang sehat tidak hanya tahu kapan mendeteksi peluang, tetapi juga kapan membatalkannya

---

## Penutup

Saat pembaca memahami invalidation engine dan expiry logic, ia akan melihat bahwa sistem trading yang baik bukan hanya pintar mendeteksi, tetapi juga pintar **berhenti percaya** saat konteks sudah berubah.

Dan justru dari kemampuan itulah indikator menjadi jauh lebih berguna.

---

## Catatan

Materi ini bersifat edukatif dan bukan rekomendasi finansial. Gunakan untuk memahami bagaimana sistem menjaga kebersihan logika saat market terus berubah.