# Bab 13 — Change in State of Delivery (CISD) (Memahami Perubahan Algoritma Pasar)

> "Pasar tidak hanya berubah arah; ia berubah cara 'bernafas'. Change in State of Delivery (CISD) adalah tanda bahwa algoritma pasar telah berhenti mencari likuiditas di satu sisi dan mulai mengirimkan harga ke sisi lainnya."

## Mengapa Bab Ini Penting
Banyak trader bingung membedakan antara koreksi kecil (*retracement*) dan pembalikan arah yang sesungguhnya (*reversal*). Mereka seringkali melakukan *buy* saat harga turun sedikit, padahal pasar sebenarnya sudah berubah status menjadi *bearish delivery*.

**Change in State of Delivery (CISD)** adalah konsep tingkat lanjut yang menyatukan semua materi dalam folder ini (*Sweep, Grab, Run, dan Delivery*). Memahami CISD berarti Anda mampu membaca "niat" algoritma pasar secara *real-time*. Ini adalah filter terakhir dan paling kuat untuk mengonfirmasi bahwa sebuah pergerakan harga bukan sekadar kebetulan, melainkan perubahan sistematis dalam pengiriman harga.

## Tujuan Pembelajaran
Setelah mempelajari bab ini, pembaca diharapkan mampu:
*   Mendefinisikan konsep *Change in State of Delivery* (CISD) secara teknis.
*   Mengidentifikasi perbedaan antara CISD dan *Market Structure Shift* (MSS).
*   Mengenali tanda-tanda visual ketika algoritma pasar berpindah dari fase akumulasi ke distribusi.
*   Menggunakan CISD sebagai konfirmasi akhir sebelum melakukan eksekusi *trade*.
*   Memahami bagaimana CISD memvalidasi area *Fair Value Gap* dan *Order Block*.

## 1. Apa Itu Change in State of Delivery (CISD)?
**CISD** adalah kondisi di mana perilaku harga berubah secara fundamental. Jika sebelumnya harga terus-menerus menghormati level *support* dan menembus *resistance*, lalu tiba-tiba ia mulai menembus *support* dan menghormati *resistance*, maka telah terjadi CISD.

Secara algoritma, CISD terjadi ketika:
*   **Bullish CISD:** Harga berhenti mengambil *Sell-Side Liquidity* dan mulai secara agresif mengejar *Buy-Side Liquidity*.
*   **Bearish CISD:** Harga berhenti mengambil *Buy-Side Liquidity* dan mulai secara agresif mengejar *Sell-Side Liquidity*.

## 2. CISD vs Market Structure Shift (MSS)
Meskipun terlihat serupa, keduanya memiliki perbedaan fungsi yang penting:
*   **MSS (Struktur):** Berfokus pada penembusan titik *Swing High/Low*. Ini adalah konfirmasi mekanis.
*   **CISD (Perilaku):** Berfokus pada bagaimana harga bereaksi terhadap *PD Arrays* (FVG, OB). Jika sebuah *Bearish FVG* yang seharusnya menahan harga justru ditembus dengan kuat, itu adalah CISD, bahkan sebelum *Swing High* utama ditembus.

**Urutan Logis:** Sweep → CISD (Perubahan Perilaku) → MSS (Perubahan Struktur) → Entry.

## 3. Tabel: Tanda-Tanda Perubahan State
| Fitur | State Lama (Misal: Bearish) | Change in State (Menjadi Bullish) |
| :--- | :--- | :--- |
| **Reaksi di FVG** | Harga memantul turun dari FVG | Harga menembus FVG (menjadi *Inversion*) |
| **Pengambilan Low** | Terus membuat *Lower Low* | Gagal membuat *Low* baru (*Sweep*) |
| **Kecepatan** | Turun dengan cepat (*Displacement*) | Naik dengan cepat (*Displacement*) |
| **Order Block** | *Bearish OB* dihormati | *Bearish OB* ditembus, *Bullish OB* terbentuk |
| **Target** | Mengejar SSL di bawah | Mengejar BSL di atas |

## 4. Visualisasi CISD di Chart
Bayangkan harga sedang turun (Bearish Delivery). Setiap kali harga naik sedikit ke sebuah *Fair Value Gap*, ia langsung ditolak turun lagi.
*   **Momen CISD:** Harga naik ke *Fair Value Gap* tersebut, namun bukannya ditolak, ia justru **menutup di atasnya** dengan candle yang kuat.
*   Ini adalah bukti bahwa algoritma tidak lagi tertarik untuk mengirim harga lebih rendah. Status pengiriman telah berubah.

## 5. Aplikasi Praktis: Konfirmasi Entry
Gunakan CISD untuk memvalidasi *setup* Anda:
1.  Harga mencapai POI (misal: *Daily Order Block*).
2.  Di timeframe kecil (M1/M5), tunggu harga menyapu likuiditas terakhir.
3.  Lihat apakah harga mampu menembus *Fair Value Gap* terakhir yang searah dengan tren lama.
4.  Jika FVG tersebut ditembus dan harga bertahan di atasnya, **CISD terkonfirmasi**.
5.  Anda bisa melakukan *entry* dengan tingkat kepercayaan yang jauh lebih tinggi.

## 6. Glosarium Bab 13
*   **CISD:** Perubahan status algoritma dalam mengirimkan harga ke target likuiditas.
*   **State of Delivery:** Kondisi pasar saat ini (apakah sedang mencari pembeli atau penjual).
*   **Inversion FVG:** *Fair Value Gap* yang telah ditembus dan fungsinya berbalik (dari *resistance* menjadi *support* atau sebaliknya).
*   **PD Array:** *Premium or Discount Array* (daftar level teknis seperti OB, FVG, Breaker).
*   **Real-time Narrative:** Kemampuan membaca cerita pasar saat candle sedang terbentuk.

## 7. Ringkasan Bab
*   CISD adalah "sinyal awal" sebelum struktur pasar benar-benar berubah.
*   Perhatikan bagaimana harga memperlakukan *Fair Value Gap* sebelumnya.
*   CISD yang valid selalu diawali dengan pengambilan likuiditas (*Sweep*).
*   Jangan melawan *State of Delivery* yang sedang aktif; ikutilah alurnya.
*   CISD memberikan konfirmasi bahwa *Smart Money* telah benar-benar berpindah sisi.

## Penutup
Selamat! Anda telah menyelesaikan seluruh materi dalam folder **03 — Sweep, Grab, Run, dan Delivery**. Anda sekarang memiliki pemahaman yang utuh tentang bagaimana pasar bergerak, bagaimana ia menjebak, dan bagaimana ia berubah arah. Gunakan pengetahuan ini dengan bijak dan selalu kombinasikan dengan manajemen risiko yang ketat.

## Catatan Akhir Folder 03
*Materi ini adalah fondasi dari strategi SMC/ICT. Jangan terburu-buru. Buka chart Anda, lakukan backtest pada konsep CISD ini, dan lihatlah bagaimana ia seringkali muncul tepat sebelum pergerakan besar terjadi. Sampai jumpa di folder berikutnya!*
