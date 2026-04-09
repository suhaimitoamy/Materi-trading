# Bab 5 — Scoring dan Dashboard

> Ketika konsep trading mulai diterjemahkan ke sistem, muncul pertanyaan penting: bagaimana sistem menyampaikan kualitas setup kepada user? Tidak semua peluang bersifat hitam-putih. Di sinilah **scoring** dan **dashboard** menjadi sangat berguna.

## Mengapa Bab Ini Penting

Banyak indikator gagal membantu trader karena hanya menampilkan:
- terlalu banyak simbol
- terlalu banyak warna
- terlalu banyak label tanpa makna yang jelas

Akibatnya user melihat chart yang ramai, tetapi tidak benar-benar memahami kondisi market.

Scoring dan dashboard membantu sistem menjadi lebih komunikatif dan lebih jujur.

---

## Tujuan Pembelajaran

Setelah mempelajari bab ini, pembaca diharapkan mampu:

- memahami fungsi scoring dalam sistem trading
- memahami fungsi dashboard sebagai ringkasan narasi market
- melihat hubungan scoring dan dashboard dengan state, zone, dan trigger
- memahami kenapa sistem perlu menyampaikan kualitas, bukan hanya sinyal

---

## 1. Apa Itu Scoring?

**Scoring** adalah cara memberi bobot atau nilai pada setup berdasarkan beberapa faktor yang relevan.

Contohnya:
- bias mendukung atau tidak
- struktur mendukung atau tidak
- ada likuiditas penting atau tidak
- lokasi sehat atau tidak
- session mendukung atau tidak
- ada trigger atau belum
- peluang sudah terlalu jauh atau tidak

Scoring tidak harus sempurna. Fungsinya adalah membantu sistem menyusun kualitas peluang dengan lebih bertahap.

---

## 2. Kenapa Scoring Penting?

Karena market tidak selalu hitam-putih.

Kadang setup:
- belum cukup jelek untuk dibuang
- tetapi juga belum cukup matang untuk dieksekusi

Scoring membantu sistem menyatakan hal seperti:
- kualitas tinggi
- kualitas sedang
- kualitas lemah
- tunggu dulu
- hindari

Dengan cara ini, sistem menjadi lebih realistis dibanding hanya memberi buy/sell instan.

---

## 3. Apa Itu Dashboard?

**Dashboard** adalah cara menampilkan ringkasan kondisi market dalam bentuk yang lebih mudah dibaca user.

Dashboard yang sehat seharusnya merangkum hal-hal penting seperti:
- bias
- structure
- session
- draw on liquidity
- state market
- zona aktif
- target atau invalidation
- score atau tingkat kualitas

Tujuannya adalah membantu user memahami market dengan cepat tanpa harus menebak arti setiap simbol di chart.

---

## 4. Dashboard Bukan Hiasan

Ini poin yang penting.

Banyak dashboard terlihat ramai tetapi kurang berguna. Isinya terlalu banyak angka, terlalu banyak warna, atau terlalu sedikit makna.

Dashboard yang sehat bukan yang paling ramai. Dashboard yang sehat adalah yang bisa menjawab pertanyaan:
- market sedang apa?
- arah yang lebih sehat ke mana?
- setup masih mentah atau sudah matang?
- harga dekat area kerja atau tidak?

Kalau dashboard tidak membantu menjawab hal itu, maka nilainya rendah.

---

## 5. Hubungan Scoring dengan State dan Trigger

Scoring dan dashboard akan jauh lebih kuat jika terhubung dengan:
- **state engine** → market sedang tahap apa
- **zone engine** → harga sedang dekat area kerja atau tidak
- **trigger engine** → timing entry sudah siap atau belum

Contohnya:
- score naik jika bias, struktur, dan lokasi mendukung
- score turun jika market sedang off-session atau sudah terlalu jauh
- dashboard menampilkan status seperti waiting, in zone, trigger ready, atau invalid

Dengan cara ini, sistem tidak hanya memberi simbol, tetapi memberi cerita yang ringkas.

---

## 6. Kenapa User Perlu Kualitas, Bukan Hanya Sinyal?

Karena sinyal tunggal sering terlalu kasar.

Trader lebih terbantu jika sistem bisa memberi tahu:
- apakah ini setup yang kuat?
- apakah ini hanya watchlist?
- apakah ini terlalu terlambat?
- apakah konteksnya mendukung?

Scoring dan dashboard membantu menjembatani kebutuhan ini.

---

## 7. Kesalahan Umum

### 1) Membuat score seolah-olah pasti akurat
Padahal scoring hanya alat bantu bobot, bukan ramalan mutlak.

### 2) Dashboard terlalu ramai
Kalau terlalu penuh, user justru tidak terbantu.

### 3) Menampilkan data tanpa makna praktis
Ini membuat dashboard hanya terlihat canggih, tetapi kurang berguna.

### 4) Score tidak selaras dengan context market
Akibatnya sistem memberi bobot yang terasa aneh bagi user.

---

## 8. Ringkasan Bab

Inti bab ini adalah:

- scoring membantu sistem menyusun kualitas peluang
- dashboard membantu merangkum kondisi market dengan cepat
- keduanya lebih kuat jika terhubung dengan state, zone, dan trigger
- sistem yang baik menyampaikan konteks dan kualitas, bukan sekadar sinyal kasar

---

## Penutup

Saat pembaca memahami fungsi scoring dan dashboard, ia akan melihat bahwa sistem yang baik bukan hanya soal deteksi, tetapi juga soal komunikasi. Sistem harus mampu memberi tahu bukan hanya apa yang terlihat, tetapi juga seberapa layak hal itu untuk diperhatikan.

Dan dari situlah indikator mulai terasa benar-benar membantu, bukan sekadar menambah ramai chart.

---

## Catatan

Materi ini bersifat edukatif dan bukan rekomendasi finansial. Gunakan untuk memahami bagaimana sistem menyampaikan kualitas dan konteks market dengan cara yang lebih rapi.