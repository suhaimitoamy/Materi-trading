# Bab 6 — Invalidation Engine dan Expiry Logic: Kapan Sebuah Setup Menjadi Basi

> "Mengetahui kapan harus masuk ke pasar adalah sebuah keterampilan. Namun, mengetahui kapan sebuah ide trading sudah tidak lagi relevan atau 'basi' adalah tanda kedewasaan. Market tidak akan menunggu Anda selamanya; sebuah setup memiliki umur simpan. Jika batas waktunya habis atau syarat invalidasinya tersentuh, setup tersebut mati."

## Mengapa Bab Ini Penting
Seringkali trader mendapati diri mereka masuk ke pasar berdasarkan *setup* yang memang terlihat sempurna beberapa jam atau hari sebelumnya. Masalahnya, mereka tidak menyadari bahwa narasi market sudah berubah. Mungkin harga sudah menembus level penting yang membatalkan skenario awal, atau momentum (waktu) yang diperlukan sudah lewat.

Masuk ke dalam *setup* yang sudah *expired* atau invalid adalah salah satu penyebab utama kekalahan yang sebenarnya bisa dihindari. *Invalidation Engine* dan *Expiry Logic* adalah sistem perlindungan yang mencegah Anda mengeksekusi ide yang sudah "kadaluwarsa". Bab ini akan mengajarkan Anda cara membangun aturan yang secara otomatis mematikan *setup* Anda saat kondisinya sudah tidak lagi mendukung.

## Tujuan Pembelajaran
Setelah mempelajari bab ini, pembaca diharapkan mampu:
*   Memahami konsep *Invalidation* (kondisi di mana ide trading salah secara struktural).
*   Memahami konsep *Expiry* (kondisi di mana ide trading kedaluwarsa secara waktu/momentum).
*   Mengidentifikasi level-level kritis di *chart* yang membatalkan narasi *setup*.
*   Membangun logika waktu (*time-based expiration*) untuk *setup* harian.
*   Mengintegrasikan aturan pembatalan ini ke dalam sistem *State Engine* dan *Scoring*.
*   Mencegah kerugian dari transaksi yang dilakukan secara terlambat.

## 1. Perbedaan Invalidation dan Expiry
Meskipun keduanya membatalkan *setup*, *Invalidation* dan *Expiry* berakar dari dua dimensi market yang berbeda: Harga (*Price*) dan Waktu (*Time*).

*   **Invalidation (Dimensi Harga):** Terjadi ketika harga menembus level tertentu yang secara struktural membuktikan bahwa ide Anda salah. Jika Anda berasumsi tren sedang naik, tetapi harga berhasil menembus dan ditutup di bawah titik *Swing Low* utama, narasi *bullish* Anda sudah hancur.
*   **Expiry (Dimensi Waktu):** Terjadi ketika waktu yang dialokasikan untuk pergerakan tersebut telah habis, meskipun struktur harganya mungkin belum rusak. Misalnya, Anda mengharapkan *setup* London Killzone untuk bergerak, tetapi hingga sesi London berakhir harga masih bergerak *sideways* dan volume sudah kering. Skenario tersebut telah kedaluwarsa.

## 2. Membangun Invalidation Engine (Price-Based)
*Invalidation Engine* bertugas memantau level-level struktural. Sebuah *setup* tidak boleh dieksekusi, atau posisi yang ada harus ditutup, jika level invalidasi ditembus.

**Contoh Aturan Invalidasi dalam ICT:**
1.  **Swing Point Breach:** Jika Anda merencanakan *buy* pada *retrace* setelah MSS *bullish*, maka titik *Swing Low* yang menyebabkan MSS tersebut adalah level invalidasi mutlak. Jika ditembus, skenario *buy* batal.
2.  **Order Block Failure:** Jika sebuah *Bullish Order Block* ditembus oleh *body candle* (bukan hanya *wick*), OB tersebut telah gagal dan setup yang bergantung padanya menjadi invalid.
3.  **Target Reached Prematurely:** Ini sering diabaikan. Jika harga sudah mencapai Target/Take Profit utama Anda **sebelum** ia menjemput *entry* Anda, maka *setup* tersebut invalid. Jangan memaksa masuk karena bahan bakarnya (likuiditas target) sudah habis.

## 3. Membangun Expiry Logic (Time-Based)
*Expiry Logic* adalah pengatur waktu (*timer*) untuk *setup* Anda. Konsep ICT sangat menekankan pentingnya algoritma waktu. Jika pergerakan tidak terjadi pada waktu yang semestinya, probabilitas keberhasilannya turun drastis.

**Contoh Aturan Expiry:**
1.  **Session/Killzone Expiry:** Jika Anda trading *setup* Silver Bullet (misal jam 10:00 - 11:00 NY), dan hingga jam 11:15 harga belum menyentuh POI Anda, *setup* tersebut *expired*. Batalkan *limit order* Anda.
2.  **Daily Close Expiry:** Setup *day trading* yang tidak terpicu hingga sesi New York berakhir (menjelang tutup harian) harus dibatalkan untuk menghindari pelebaran *spread* dan *gap* pembukaan sesi berikutnya.
3.  **Time Decay (Pembusukan Waktu):** Semakin lama harga berkonsolidasi tepat di depan area *entry* Anda tanpa bereaksi, semakin tinggi kemungkinan POI tersebut akan ditembus. Jika harga menghabiskan terlalu banyak *candle* menempel di area *entry* tanpa *rejection* tajam, *setup* mulai basi.

## 4. Menggabungkan Invalidation dan Expiry ke dalam State Engine
Dalam konteks *State Engine* (Bab 2) dan *Dashboard* (Bab 5), Invalidation dan Expiry berfungsi sebagai tombol "Reset".

Ketika *state* berada di tahap `Waiting Entry` (Menunggu harga masuk ke zona), sistem harus secara aktif memeriksa:
*   *Apakah harga menembus level invalidasi?* Jika Ya -> Pindahkan state ke `INVALID`.
*   *Apakah waktu Killzone sudah habis?* Jika Ya -> Pindahkan state ke `EXPIRED`.
*   *Apakah target sudah tersentuh duluan?* Jika Ya -> Pindahkan state ke `INVALID (Target Reached)`.

Jika salah satu dari kondisi di atas terjadi, indikator atau *dashboard* Anda harus mereset *scoring* menjadi nol dan mengubah statusnya menjadi merah atau tidak aktif. Ini secara visual mengingatkan Anda untuk tidak memaksakan *entry*.

## 5. Psikologi di Balik "Letting Go" (Melepaskan)
Penyebab utama trader melanggar aturan invalidasi dan kedaluwarsa adalah karena mereka terlalu terikat secara emosional dengan analisa mereka. Mereka sudah "jatuh cinta" pada garis-garis dan zona yang mereka gambar. Menerima bahwa sebuah *setup* invalid berarti menerima bahwa kerja keras analisa mereka sia-sia.

Anda harus melatih diri untuk menjadi "robot" saat berhadapan dengan kedaluwarsa. Membatalkan *limit order* karena *setup* sudah basi bukanlah sebuah kekalahan; itu adalah sebuah kemenangan disiplin.

## 6. Glosarium Bab 6
*   **Invalidation:** Pembatalan skenario trading karena harga menembus level struktural penting yang membuktikan ide awal salah.
*   **Expiry (Kedaluwarsa):** Pembatalan skenario trading karena batas waktu atau jendela peluang (momentum) telah lewat.
*   **Time-Based Logic:** Aturan sistem yang mempertimbangkan waktu terjadinya pergerakan, bukan hanya level harga.
*   **Target Reached Prematurely:** Kondisi di mana harga mencapai titik target akhir sebelum menyentuh area *entry* yang direncanakan.
*   **Time Decay:** Penurunan probabilitas keberhasilan *setup* semakin lama harga tertahan tanpa bereaksi di area keputusan.

## 7. Ringkasan Bab
*   Setiap ide trading memiliki masa berlaku. Jika batas harga atau waktu terlampaui, *setup* tersebut mati.
*   Invalidasi terjadi karena penembusan struktur harga (*Price*), sedangkan kedaluwarsa terjadi karena habisnya jendela waktu (*Time*).
*   Salah satu bentuk invalidasi paling umum adalah ketika harga mencapai target sebelum menjemput *entry* Anda.
*   Jangan pernah mempertahankan *limit order* di luar sesi atau jendela waktu (*Killzone*) yang Anda tetapkan dalam sistem.
*   Membatalkan *setup* yang sudah invalid atau *expired* adalah bentuk pengelolaan risiko dan disiplin tingkat tinggi.

## Penutup
Memiliki aturan yang kuat tentang kapan harus membatalkan trade sama pentingnya dengan memiliki aturan kapan harus memasukinya. *Invalidation Engine* dan *Expiry Logic* menjaga modal Anda dari trade-trade 'zombie' yang sudah kehilangan momentum. Di bab selanjutnya, kita akan membahas **Mapping Konsep ICT ke Indikator**, bagaimana menerjemahkan teori-teori ini ke dalam bahasa pemrograman visual.

## Catatan
*Tugas Praktik: Tinjau kembali 5 loss terakhir Anda. Apakah ada di antara loss tersebut yang terjadi karena Anda masuk terlalu terlambat (waktu sudah lewat) atau karena Anda masih mencoba masuk setelah struktur jelas-jelas gagal? Identifikasi dan catat pelajaran tersebut.*
