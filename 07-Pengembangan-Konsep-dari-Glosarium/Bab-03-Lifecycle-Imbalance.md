# Bab 03 — Lifecycle Imbalance: Fill, Rejection, Failure, Continuation, dan Extension

> "Imbalance bukan hanya kotak kosong yang harus diisi. Imbalance punya siklus hidup: ia bisa ditolak, diisi sebagian, diisi penuh, gagal, atau menjadi bahan bakar continuation. Trader yang memahami siklus ini tidak akan memperlakukan semua FVG sebagai area entry yang sama."

## Mengapa Bab Ini Penting

Glosarium menyebut banyak istilah terkait imbalance:

- Imbalance
- Imbalance Fill
- Imbalance Partial Fill
- Imbalance Rejection
- Imbalance Failure
- Imbalance Continuation
- Imbalance Extension
- Price Rebalancing

Istilah-istilah ini penting karena Fair Value Gap dan imbalance sangat sering dipakai dalam SMC/ICT.

Namun pemula sering memakai imbalance terlalu sederhana:

> Ada FVG, berarti harga akan balik ke sana.

Padahal tidak selalu.

Imbalance bisa:

- langsung ditinggalkan
- diisi sebagian lalu reject
- diisi penuh lalu continuation
- ditembus dan gagal
- memanjang karena momentum kuat
- menjadi target rebalancing sebelum delivery lanjut

Bab ini membantu pembaca memahami siklus hidup imbalance agar tidak salah membaca FVG sebagai sinyal entry otomatis.

---

## Tujuan Pembelajaran

Setelah mempelajari bab ini, pembaca diharapkan mampu:

- memahami imbalance sebagai fase harga yang dinamis
- membedakan fill, partial fill, rejection, failure, continuation, dan extension
- membaca kapan imbalance masih valid atau sudah lemah
- menghubungkan imbalance dengan bias, liquidity, dan displacement
- memakai imbalance sebagai area kerja, bukan sinyal buta
- mengevaluasi kualitas FVG saat backtesting

---

## 1. Apa Itu Imbalance?

Imbalance adalah kondisi ketika harga bergerak terlalu cepat sehingga tidak terjadi pertukaran harga yang seimbang.

Secara visual, imbalance sering terlihat sebagai:

- candle besar
- displacement kuat
- Fair Value Gap
- liquidity void
- gerakan yang meninggalkan area kosong

Imbalance menunjukkan bahwa satu sisi market sedang dominan.

Namun dominasi itu tidak selalu langsung berlanjut. Kadang harga perlu kembali untuk rebalancing.

---

## 2. Imbalance Fill

Imbalance Fill adalah proses ketika harga kembali masuk dan mengisi area imbalance.

Fill bisa terjadi karena market ingin:

- menutup ketidakefisienan
- melakukan mitigasi
- mencari order yang tertinggal
- memberi harga lebih baik sebelum continuation

Fill tidak otomatis berarti reversal.

Sering kali, fill justru menjadi bagian dari continuation.

Contoh bullish:

- harga naik kuat membentuk bullish FVG
- harga pullback mengisi FVG
- harga reject lalu naik lagi

Dalam kasus ini, fill menjadi re-entry, bukan tanda bearish.

---

## 3. Imbalance Partial Fill

Partial Fill terjadi ketika harga hanya mengisi sebagian imbalance lalu langsung reject.

Ini sering menunjukkan bahwa area tersebut masih cukup kuat.

Contoh:

- harga masuk 30–50% ke FVG
- tidak mengisi penuh
- lalu muncul rejection
- struktur kecil shift kembali searah bias

Partial Fill bisa memberi sinyal bahwa market tidak memberi banyak diskon sebelum melanjutkan delivery.

Namun tetap perlu konfirmasi.

Partial Fill tanpa MSS atau displacement lanjutan masih belum cukup untuk entry.

---

## 4. Imbalance Rejection

Imbalance Rejection adalah kondisi ketika harga masuk ke area imbalance lalu menolak area tersebut.

Rejection bisa terlihat dari:

- wick panjang
- candle engulfing
- MSS kecil
- displacement keluar dari area
- gagal close melewati CE

Rejection paling kuat jika:

- imbalance berada di premium/discount yang benar
- sebelumnya ada liquidity sweep
- HTF bias mendukung
- target liquidity masih terbuka
- rejection terjadi saat session aktif

Rejection yang bagus bukan hanya wick. Ia harus punya konteks.

---

## 5. Imbalance Failure

Imbalance Failure terjadi ketika area imbalance gagal menahan harga.

Contoh bullish FVG gagal:

- harga naik kuat membentuk bullish FVG
- harga kembali ke FVG
- tidak ada rejection
- harga menembus penuh area
- struktur bawah ikut rusak

Jika bullish FVG gagal, area itu tidak boleh terus dipaksa sebagai buy zone.

Trader harus menerima bahwa konteks berubah.

Failure bisa berarti:

- bias awal salah
- target liquidity sudah berubah
- area sudah dimitigasi
- market sedang mencari liquidity sisi lain

---

## 6. Imbalance Continuation

Imbalance Continuation terjadi ketika harga bereaksi pada imbalance lalu melanjutkan arah displacement awal.

Contoh bearish:

- harga turun kuat membentuk bearish FVG
- harga pullback ke FVG
- muncul rejection
- harga turun lagi menuju SSL

Continuation biasanya lebih kuat jika searah dengan:

- HTF bias
- session timing
- MMXM delivery
- DXY/intermarket jika relevan
- target liquidity yang belum tercapai

Imbalance continuation adalah salah satu penggunaan FVG yang paling umum dalam entry model.

---

## 7. Imbalance Extension

Imbalance Extension terjadi ketika imbalance bertambah atau memanjang akibat continuation yang kuat.

Contoh:

- bearish displacement membentuk FVG pertama
- harga tidak pullback dalam
- turun lagi dan membentuk FVG kedua
- area inefficiency bertambah panjang

Extension menunjukkan momentum kuat, tetapi juga bisa membuat entry makin sulit.

Risiko utama:

- trader mengejar candle
- RR memburuk
- SL terlalu jauh
- entry menjadi FOMO

Jika imbalance terus memanjang tanpa pullback, lebih baik menunggu rebalancing daripada mengejar harga.

---

## 8. Price Rebalancing

Price Rebalancing adalah proses ketika harga kembali ke area imbalance untuk menyeimbangkan pergerakan sebelumnya.

Rebalancing bisa terjadi di:

- FVG
- BPR
- liquidity void
- range middle
- CE

Rebalancing tidak selalu berarti arah berubah.

Sering kali market rebalancing dulu, lalu melanjutkan delivery.

Prinsipnya:

> Rebalancing adalah proses kembali ke value. Arah berikutnya ditentukan oleh reaksi setelah harga masuk value.

---

## 9. Cara Membaca Siklus Imbalance

Gunakan urutan berikut:

1. identifikasi displacement
2. tandai imbalance / FVG
3. cek lokasi premium/discount
4. cek apakah liquidity sudah disapu
5. lihat apakah harga kembali untuk fill
6. amati partial fill atau full fill
7. tunggu rejection atau failure
8. entry hanya jika konfirmasi muncul
9. targetkan liquidity yang masih terbuka

Jangan hanya melihat FVG. Baca apa yang dilakukan harga saat kembali ke FVG.

---

## 10. Kesalahan Umum

### 1. Menganggap semua imbalance harus diisi

Tidak semua FVG langsung terisi.

### 2. Entry hanya karena harga menyentuh FVG

Touch bukan konfirmasi.

### 3. Memaksa FVG yang sudah gagal

Jika area ditembus penuh dan struktur rusak, jangan terus dipertahankan.

### 4. Mengejar imbalance extension

Momentum kuat menggoda, tetapi entry telat sering buruk.

### 5. Tidak membedakan fill dan failure

Fill yang reject berbeda dengan fill yang menerima harga melewati area.

---

## 11. Checklist Lifecycle Imbalance

Sebelum memakai imbalance sebagai area entry, jawab:

- imbalance terbentuk dari displacement yang jelas?
- imbalance berada di lokasi premium/discount yang benar?
- apakah ada sweep sebelumnya?
- apakah target liquidity masih terbuka?
- apakah harga mengisi sebagian atau penuh?
- apakah muncul rejection?
- apakah area justru gagal?
- apakah entry masih punya RR sehat?
- apakah saya mengejar extension?

---

## 12. Ringkasan Bab

Inti bab ini adalah:

- imbalance punya siklus hidup
- fill tidak selalu berarti reversal
- partial fill dan rejection bisa menunjukkan area masih kuat
- failure berarti area tidak lagi layak dipaksa
- continuation terjadi saat imbalance mendukung arah delivery
- extension menunjukkan momentum tetapi berbahaya untuk entry telat
- rebalancing adalah proses kembali ke value sebelum arah berikutnya jelas

---

## Catatan

*Tugas Praktik: cari 10 FVG di chart lama. Klasifikasikan masing-masing sebagai partial fill, full fill, rejection, failure, continuation, atau extension. Catat mana yang paling sering menghasilkan entry berkualitas.*
