# Contoh Real Trade (Win & Loss)

Teori menjadi jauh lebih berguna jika dilihat pada chart yang sudah terjadi. Melalui studi kasus, trader belajar bagaimana menyusun narasi market dari chart kosong, menunggu konfirmasi, mengeksekusi, lalu mengevaluasi hasil dengan jujur.

Materi ini berisi dua contoh backtesting berbentuk narasi:

- satu contoh trade yang berakhir **win**
- satu contoh trade yang berakhir **loss**

Tujuannya bukan membuktikan bahwa setup tertentu selalu berhasil, tetapi menunjukkan proses berpikir yang rapi dari awal sampai akhir.

---

## 1. Cara Menggunakan Materi Studi Kasus

Saat membaca studi kasus, jangan hanya fokus pada hasil akhirnya.

Perhatikan urutan prosesnya:

1. bagaimana bias dibentuk
2. area mana yang ditunggu
3. likuiditas apa yang menjadi target
4. konfirmasi apa yang dipakai
5. di mana entry dilakukan
6. di mana invalidation ditaruh
7. bagaimana hasilnya direview

Jika Anda hanya melihat hasil win atau loss, Anda kehilangan bagian paling penting, yaitu proses.

---

## 2. Template Analisis Step-by-Step

Sebelum masuk ke contoh, berikut urutan kerja yang dipakai:

- tentukan bias HTF
- tandai dealing range
- tandai liquidity yang dekat
- cari POI yang logis
- tunggu timing session yang relevan
- tunggu konfirmasi LTF
- hitung risiko dan ukuran posisi
- eksekusi
- review hasil

Gunakan template ini juga saat Anda melakukan backtest sendiri.

---

# Studi Kasus 1 — Trade Win

## 3. Kondisi Awal Chart

Instrumen: contoh intraday pair mayor atau gold

Asumsinya:

- HTF menunjukkan bias bullish
- harga sedang retrace setelah ekspansi naik sebelumnya
- area discount berada dekat POI yang menarik
- di bawah ada sell-side liquidity jangka pendek yang rentan disapu sebelum reversal

Pada tahap ini, belum ada entry. Yang ada hanya **hipotesis** bahwa market mungkin mencari likuiditas bawah dulu, lalu melanjutkan arah bullish.

---

## 4. Bias HTF

Dari 4H dan 1H terlihat:

- struktur utama masih bullish
- belum ada breakdown besar yang membatalkan bias naik
- target likuiditas atas masih terbuka

Maka ide dasarnya adalah mencari **buy dari discount**, bukan mengejar harga di atas.

---

## 5. Menandai Area Penting

Area yang ditandai:

- low intraday sebelumnya
- discount zone pada dealing range
- satu POI yang selaras dengan bias HTF
- high intraday sebagai target terdekat
- buy-side liquidity di atas sebagai target lanjutan

Dengan penandaan ini, trader sudah tahu tempat kemungkinan reaksi dan tujuan harga.

---

## 6. Menunggu Sweep

Harga turun perlahan ke bawah dan akhirnya menyapu low intraday.

Ini penting karena:

- sell-side liquidity diambil
- trader breakout sell bisa terjebak
- market mulai masuk ke area discount yang diinginkan

Pada momen ini, trader belum entry. Sweep saja belum cukup.

---

## 7. Konfirmasi LTF

Setelah sweep terjadi, pada LTF mulai terlihat:

- reaksi bullish dari area POI
- displacement naik yang jelas
- market structure shift ke arah bullish
- terbentuk retracement kecil yang efisien

Sekarang hipotesis awal mendapat validasi.

---

## 8. Titik Entry

Entry dilakukan bukan di dasar wick, tetapi setelah ada bukti bahwa market benar-benar bereaksi.

Struktur entry:

- entry buy pada retracement setelah displacement
- stop loss di bawah low yang menjadi invalidation logis
- target pertama di high intraday
- target kedua di buy-side liquidity berikutnya

Ini penting karena entry dilakukan berdasarkan **konfirmasi**, bukan tebak bottom.

---

## 9. Risk Management pada Trade Win

Sebelum entry:

- risiko per trade sudah ditetapkan
- jarak stop loss diukur
- ukuran posisi disesuaikan
- RR minimum sudah masuk akal

Artinya, bahkan jika trade ini gagal, kerusakan akun tetap terkendali.

---

## 10. Hasil Akhir

Setelah entry:

- harga bergerak sesuai bias
- high intraday berhasil diambil
- target pertama tercapai
- sebagian posisi bisa diamankan
- sisa posisi dapat diarahkan ke target berikutnya sesuai rencana

Trade ditutup sebagai **win** karena market melakukan delivery yang sesuai dengan narasi awal.

---

## 11. Kenapa Trade Ini Menang

Trade ini menang bukan karena satu faktor saja, tetapi karena banyak hal selaras:

- bias HTF jelas
- harga masuk discount
- sell-side liquidity disapu
- POI mendukung
- ada displacement dan MSS bullish
- timing entry tidak terlalu awal
- risiko sudah dihitung

Kemenangan yang sehat biasanya lahir dari tumpukan confluence seperti ini.

---

## 12. Pelajaran dari Trade Win

Hal yang perlu dicatat:

- sabar menunggu sweep memberi entry lebih bersih
- konfirmasi LTF mengurangi entry buta
- target likuiditas membantu trade punya arah yang jelas
- perhitungan risiko menjaga keputusan tetap objektif

Trade win yang bagus bukan hanya profit, tetapi bukti bahwa proses yang benar bisa menghasilkan hasil yang baik.

---

# Studi Kasus 2 — Trade Loss

## 13. Kondisi Awal Chart

Instrumen yang sama atau instrumen lain dalam kondisi intraday.

Asumsinya:

- trader melihat bias bearish ringan
- harga sedang retrace naik ke area premium
- ada POI bearish yang terlihat menarik
- di atas ada buy-side liquidity yang dekat

Dari tampilan awal, ide sell terlihat masuk akal.

---

## 14. Hipotesis Awal

Hipotesisnya:

- harga naik untuk mengisi premium
- setelah itu market akan turun lagi
- entry sell dicari dari area POI bearish

Secara teori ide ini masih masuk akal. Masalah baru terlihat setelah execution context diperiksa lebih dalam.

---

## 15. Kesalahan Konteks yang Terjadi

Meski POI terlihat bagus, ada beberapa kelemahan yang ternyata diabaikan:

- bias HTF belum benar-benar bearish kuat
- target buy-side liquidity di atas belum sepenuhnya bersih
- timing entry kurang ideal
- konfirmasi LTF masih lemah
- trader terlalu cepat ingin menangkap reversal

Ini contoh klasik bahwa area menarik tidak selalu cukup untuk menjadi trade bagus.

---

## 16. Entry yang Terlalu Cepat

Trader masuk sell segera setelah harga menyentuh area premium.

Masalahnya:

- belum ada sweep final yang meyakinkan
- belum ada displacement turun yang kuat
- belum ada MSS bearish yang bersih

Jadi entry dilakukan terlalu cepat, hanya karena area terlihat menarik.

---

## 17. Apa yang Terjadi Setelah Entry

Setelah posisi sell dibuka:

- harga sempat bereaksi sedikit turun
- reaksi itu membuat trader merasa entry sudah benar
- tetapi market gagal delivery turun dengan kuat
- lalu harga kembali naik
- buy-side liquidity di atas justru disapu
- stop loss akhirnya terkena

Trade berakhir **loss**.

---

## 18. Kenapa Trade Ini Kalah

Trade ini kalah bukan semata-mata karena market "jahat", tetapi karena prosesnya kurang lengkap.

Beberapa penyebab utama:

- entry dilakukan sebelum market memberi bukti cukup
- konfirmasi LTF belum valid
- likuiditas atas belum benar-benar selesai diproses
- trader terlalu fokus pada area, bukan pada cerita market secara penuh

Ini adalah loss yang sangat berguna jika direview dengan jujur.

---

## 19. Apakah Trade Ini Salah Total

Tidak selalu.

Ide awalnya mungkin masih logis, tetapi **timing dan validasinya buruk**.

Perbedaan penting yang perlu dipahami:

- ide yang masuk akal belum tentu siap dieksekusi sekarang
- arah bisa benar nanti, tetapi entry sekarang tetap salah

Dalam trading, benar arah saja tidak cukup. Entry, timing, dan invalidation juga harus benar.

---

## 20. Pelajaran dari Trade Loss

Pelajaran penting dari trade ini:

- jangan entry hanya karena harga masuk POI
- tunggu sweep yang jelas bila narasi menuntutnya
- tunggu displacement dan MSS bila model Anda memerlukannya
- pastikan likuiditas lawan sudah cukup dekat atau sudah diambil
- jangan buru-buru menangkap puncak atau dasar pasar

Loss seperti ini sangat berharga karena mengajarkan perbedaan antara **area bagus** dan **eksekusi bagus**.

---

## 21. Cara Review Trade Win dan Loss dengan Benar

Setelah backtesting atau trading nyata, review dengan pertanyaan ini:

- apakah bias HTF saya jelas?
- apakah saya menandai liquidity dengan benar?
- apakah entry terlalu cepat atau terlalu lambat?
- apakah ada konfirmasi yang saya abaikan?
- apakah stop loss ditempatkan logis?
- apakah target sesuai narasi?
- apakah saya melanggar aturan sendiri?

Jangan hanya menulis: win atau loss. Tulis **kenapa**.

---

## 22. Checklist Backtesting yang Disarankan

Gunakan checklist sederhana berikut:

- tanggal dan instrumen
- sesi market
- bias HTF
- POI
- liquidity yang disapu
- jenis konfirmasi
- entry, stop, target
- RR
- hasil akhir
- pelajaran utama

Jika checklist ini diisi konsisten, Anda akan mulai melihat pola berulang dari keunggulan dan kelemahan model trading Anda.

---

## 23. Tujuan Folder Studi Kasus

Folder studi kasus dan backtesting dibuat agar teori dalam folder lain bisa diterjemahkan ke praktik.

Saat membaca materi konsep, trader sering merasa semuanya masuk akal. Namun saat membuka chart nyata, semuanya terlihat kacau. Studi kasus menjembatani celah itu dengan menunjukkan bagaimana konsep dipakai dalam urutan yang masuk akal.

---

## 24. Penutup

Trade win mengajarkan apa yang bekerja. Trade loss mengajarkan apa yang harus diperbaiki.

Jika Anda hanya mengumpulkan trade menang, pembelajaran akan timpang. Jika Anda juga mengumpulkan trade kalah lalu membedahnya dengan jujur, Anda membangun proses belajar yang jauh lebih kuat.

Backtesting yang baik bukan sekadar mencari pola yang indah. Backtesting yang baik adalah latihan membaca market, menunggu validasi, mengeksekusi dengan disiplin, lalu menerima hasil dengan objektif.
