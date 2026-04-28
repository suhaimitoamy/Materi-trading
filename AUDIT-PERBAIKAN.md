# Audit Kurikulum Repo Materi Trading

Dokumen ini adalah audit terbaru untuk folder asli `00` sampai `10`.

Fokus audit ini bukan membuat folder baru, tetapi mengecek apakah bab di folder asli sudah ramah pemula, urut, dan siap menjadi media ajar bertahap.

---

## Kesimpulan Audit Utama

Materi repo sudah kaya dan lengkap, tetapi beban belajar masih terlalu berat untuk pemula.

Masalah utama bukan kurang materi, melainkan:

1. terlalu banyak istilah teknis muncul terlalu awal;
2. mindset, jurnal, dan risk awareness masih terlalu jauh di belakang;
3. beberapa README folder menjelaskan terlalu banyak konsep sekaligus;
4. urutan bab belum sepenuhnya mengikuti alur Mengapa -> Apa -> Kapan -> Bagaimana;
5. folder 07, 09, dan sebagian 05 berisi konsep advanced yang sebaiknya diberi pagar belajar lebih jelas;
6. web reader masih menampilkan semua folder secara setara, sehingga pemula bisa masuk ke bab berat terlalu cepat.

---

## Audit per Folder

### 00 — Start Here dan Glosarium

Status: perlu diringankan dan dijadikan gerbang belajar.

Masalah:

- README sudah menjelaskan fungsi repo, tetapi peta besar masih langsung memperkenalkan semua folder 01 sampai 10.
- Glosarium berpotensi membuat pemula merasa harus memahami semua istilah sejak awal.
- Bab panduan belajar perlu lebih tegas membedakan istilah inti dan istilah lanjutan.

Arah edit:

- Bab awal harus menjelaskan cara belajar bertahap.
- Glosarium dibagi menjadi istilah wajib pemula dan istilah lanjutan.
- Folder 00 harus menjadi filter agar pembaca tidak lompat ke materi advanced.

---

### 01 — Fondasi Cara Melihat Pasar

Status: sudah tepat sebagai fondasi, tetapi masih terlalu cepat masuk istilah besar.

Masalah:

- README langsung menyebut IPDA, bias, premium/discount, liquidity, dan konteks sekaligus.
- Untuk pemula total, fondasi sebaiknya dimulai dari cara melihat market, bukan langsung istilah model.

Arah edit:

- Mulai dari perubahan cara pandang: market bukan candle acak.
- Baru setelah itu masuk konsep harga bergerak dari area ke area.
- IPDA dan istilah lebih teknis dibuat sebagai pengantar ringan, bukan pembahasan berat.

---

### 02 — Struktur dan Likuiditas

Status: materi sangat penting, tetapi daftar konsep terlalu padat.

Masalah:

- README langsung memuat BOS, MSS, protected high/low, inducement, liquidity pools, IRL/ERL, complex structure, sub-structure, HRLR/LRLR, dan banyak istilah lain.
- Pemula perlu belajar swing, high, low, trend, dan range dulu sebelum masuk struktur kompleks.

Arah edit:

- Bab awal harus fokus ke swing high, swing low, HH, HL, LH, LL.
- Liquidity dasar baru masuk setelah struktur dasar.
- MSS, inducement, protected high/low, IRL/ERL, dan complex structure ditaruh setelah pembaca paham dasar.

---

### 03 — Sweep, Grab, Run, dan Delivery

Status: urutan folder sudah benar setelah struktur dan liquidity.

Masalah:

- Istilah sweep, grab, stop hunt, displacement, dan delivery muncul bersamaan.
- Pemula bisa salah mengira sweep adalah sinyal langsung.

Arah edit:

- Awali dengan penjelasan sederhana: harga mengambil area yang jelas dulu.
- Pisahkan sweep sebagai kejadian, grab sebagai proses, run sebagai lanjutan, dan delivery sebagai cerita besar.
- Tambahkan peringatan bahwa sweep bukan entry otomatis.

---

### 04 — POI dan Lokasi Entry

Status: terlalu berat jika dibaca pemula tanpa penyederhanaan.

Masalah:

- README langsung memuat Order Block, FVG, Breaker, Mitigation, Rejection Block, Vacuum Block, premium/discount, dan kualitas entry.
- Ada risiko pembaca menghafal nama area tanpa tahu fungsi area.

Arah edit:

- Bab awal harus menjelaskan POI sebagai area pengamatan, bukan area pasti entry.
- OB dan FVG dijadikan pengantar dasar.
- Breaker, Mitigation, Rejection Block, Vacuum Block, dan gap analysis ditaruh setelah bab kualitas POI.

---

### 05 — Session dan Timing

Status: kontennya lengkap, tetapi terlalu banyak advanced timing dalam satu folder.

Masalah:

- README langsung memuat Asia, London, NY, killzone, Judas Swing, weekly profile, true day open, midnight open, AMD, Silver Bullet, Macro ICT, NDOG/NWOG, OHLC/OLHC, PDH/PDL.
- Untuk pemula, session harus dimulai dari fungsi waktu, bukan daftar istilah waktu.

Arah edit:

- Bab awal: kenapa waktu penting.
- Lanjut: karakter Asia, London, New York.
- Killzone dan Judas Swing setelah pembaca paham session.
- Silver Bullet, Macro ICT, NDOG/NWOG, weekly profile masuk akhir folder atau diarahkan ke advanced.

---

### 06 — Entry, Risk, dan Eksekusi

Status: folder penting, tetapi terlalu banyak model entry dan manajemen posisi muncul sekaligus.

Masalah:

- README memuat validasi entry, trigger, invalidation, target, partial, OTE, Unicorn, Inversion, layering, pyramiding, scaling in, dan exit sekaligus.
- Untuk pemula, entry harus dimulai dari trade plan, bukan model entry.

Arah edit:

- Bab awal: dari mapping ke trade plan.
- Baru masuk trigger, invalidation, stop loss, target.
- Model entry seperti Unicorn, Inversion, OTE masuk setelah fondasi eksekusi.
- Pyramiding dan scaling in harus menjadi materi akhir.

---

### 07 — Pengembangan Konsep dari Glosarium

Status: isinya advanced dan seharusnya diberi label jelas sebagai pengayaan.

Masalah:

- BPR, CE, PD Array, CISD, advanced liquidity mapping, liquidity engineering, liquidity vacuum, range model, Turtle Soup bukan materi pemula.
- Jika dibaca terlalu cepat, folder ini akan memecah fokus belajar.

Arah edit:

- Jadikan folder ini sebagai bridge intermediate-advanced.
- Tambahkan prasyarat sebelum setiap bab.
- Urutkan dari bias hierarchy dulu, lalu PD Array/BPR/CE, lalu delivery advanced, baru liquidity engineering dan Turtle Soup.

---

### 08 — Jurnal dan Psikologi Pemula

Status: materi ini seharusnya naik lebih awal secara konsep, tetapi folder tetap bisa dipertahankan.

Masalah:

- Psikologi pemula, journaling, dan risk awareness terlalu penting jika hanya muncul setelah folder 07.
- README memakai bahasa yang cukup keras untuk pemula dan bisa terasa menekan.

Arah edit:

- Bab psikologi dasar dirujuk sejak folder 00 atau 01.
- Folder 08 tetap menjadi tempat template lengkap jurnal, review, dan risk tracking.
- Bahasa dibuat lebih membimbing, bukan menghakimi.

---

### 09 — Advanced Concepts dan Model Market

Status: tepat sebagai advanced, tetapi perlu pagar prasyarat yang lebih kuat.

Masalah:

- MMXM, SMT, PO3, Weekly Profiles, Silver Bullet, DXY, dan XAUUSD framework adalah konsep berat.
- README masih bisa membuat pembaca ingin masuk terlalu cepat karena terlihat menarik.

Arah edit:

- Tambahkan peringatan: jangan mulai dari folder ini.
- Setiap bab perlu format: prasyarat, fungsi konsep, kapan dipakai, kesalahan umum, latihan backtest.
- Silver Bullet dan XAUUSD framework harus ditegaskan sebagai model spesifik, bukan shortcut.

---

### 10 — Case Studies dan Backtesting

Status: sangat penting sebagai penutup, tetapi bahasanya perlu lebih edukatif.

Masalah:

- README memakai banyak istilah berat seperti autopsi, flawless win, ugly loss, iron confidence, expectancy, drawdown.
- Untuk media ajar, folder ini perlu dimulai dari cara membaca satu case study dengan sederhana.

Arah edit:

- Awali dengan cara membedah satu contoh.
- Pisahkan studi kasus win, loss baik, loss karena pelanggaran, dan missed trade.
- Backtesting dimulai dari 20 contoh sebelum naik ke 50-100 contoh.
- Metrik seperti expectancy dan drawdown dijelaskan bertahap.

---

## Rencana Edit yang Benar

Tahap 1:

- Bersihkan perubahan folder baru yang tidak sesuai arahan.
- Kembalikan fokus ke folder asli 00 sampai 10.
- Update README utama agar menunjuk folder asli, bukan folder baru.

Tahap 2:

- Edit README folder 00 sampai 10 agar lebih ramah pemula.
- Tambahkan prasyarat dan syarat kelulusan di tiap folder.
- Kurangi istilah berat di bagian awal folder.

Tahap 3:

- Edit bab per folder asli.
- Ringankan bab awal di setiap folder.
- Tambahkan struktur tetap: tujuan, kenapa urutannya di sini, inti materi, latihan, checklist.

Tahap 4:

- Update web reader agar menampilkan folder asli 00 sampai 10, tetapi dengan label level belajar yang lebih jelas.

---

## Prioritas Edit Bab

Prioritas tertinggi:

1. `00-Start-Here-dan-Glosarium`
2. `01-Fondasi-Cara-Melihat-Pasar`
3. `02-Struktur-dan-Likuiditas`
4. `08-Jurnal-dan-Psikologi-Pemula`

Prioritas menengah:

5. `03-Sweep-Grab-Run-dan-Delivery`
6. `04-POI-dan-Lokasi-Entry`
7. `05-Session-dan-Timing`
8. `06-Entry-Risk-dan-Eksekusi`

Prioritas advanced:

9. `07-Pengembangan-Konsep-dari-Glosarium`
10. `09-Advanced-Concepts-dan-Model-Market`
11. `10-Case-Studies-dan-Backtesting`

---

## Catatan Koreksi Proses

Perubahan sebelumnya yang membuat folder level baru bukan arah final. Arah final adalah mengedit folder asli 00 sampai 10 agar tetap memakai struktur repo yang sudah ada, tetapi isinya dibuat lebih bertahap, ringan, dan siap dipakai sebagai media ajar.
