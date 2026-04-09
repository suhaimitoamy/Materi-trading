# Materi Trading

Repositori ini dibuat untuk mempelajari metode trading dari **akar sampai buah**.

Fokus utama repositori ini adalah:
- memahami logika market, bukan sekadar hafal istilah
- membangun pondasi metode **ICT-style liquidity delivery** secara bertahap
- menghubungkan teori dengan praktik di chart
- menyusun materi belajar yang rapi, terstruktur, dan bisa dipelajari ulang kapan saja
- menjadi rumah dokumentasi untuk pengembangan metode pribadi, termasuk turunan logika dari indikator **XAUUSD Context Narrator**

---

## Tujuan repositori

Repositori ini tidak dibuat untuk menjadi kumpulan catatan acak.

Repositori ini dibuat sebagai **kurikulum belajar**.
Artinya, isi materi nantinya akan disusun berdasarkan urutan berpikir market:

1. market bergerak karena apa
2. likuiditas itu apa
3. bagaimana harga mengambil likuiditas
4. kapan sweep hanya grab, kapan menjadi run
5. kapan struktur benar-benar shift
6. bagaimana entry yang valid dibangun
7. bagaimana menghubungkan HTF bias, dealing range, session, POI, dan trigger
8. bagaimana teori itu dituangkan menjadi sistem mekanis dan indikator

Jadi tujuan akhir repositori ini bukan hanya “paham konsep”, tetapi:
- bisa membaca chart lebih jernih
- bisa membedakan setup valid vs setup palsu
- bisa menyusun entry plan yang disiplin
- bisa menerjemahkan metode menjadi rule yang jelas

---

## Prinsip belajar di repositori ini

Semua materi nantinya akan mengikuti prinsip ini:

### 1. Dari sederhana ke kompleks
Belajar dimulai dari pondasi paling dasar, lalu naik ke konsep yang lebih halus.
Bukan langsung loncat ke istilah rumit.

### 2. Dari definisi ke logika
Setiap folder nanti bukan cuma menjelaskan “apa itu konsep”, tapi juga:
- kenapa konsep itu penting
- bagaimana konsep itu muncul di chart
- kapan konsep itu valid
- kapan konsep itu menyesatkan

### 3. Dari teori ke aplikasi
Setelah konsep dipahami, materi akan diarahkan ke:
- contoh chart
- checklist validasi
- kesalahan umum
- implementasi ke sistem atau indikator

### 4. Dari discretionary ke mechanical
Metode ICT punya banyak sisi discretionary.
Di repositori ini, materi akan diarahkan agar bisa dipahami dalam bentuk:
- narasi market
- rule yang bisa diuji
- logika yang bisa diprogram

### 5. Dari akar sampai buah
Akar = pondasi market
Batang = struktur logika
Cabang = turunan konsep
Daun = contoh aplikasi
Buah = execution plan dan sistem yang matang

---

## Cara membaca repositori ini

Nanti isi repositori akan dibangun dalam banyak folder.
Setiap folder akan membahas **satu konsep utama**.
Contoh:
- `liquidity-sweep`
- `liquidity-run`
- `market-structure-shift`
- `fair-value-gap`
- `order-block`
- `dealing-range`
- `judas-swing`
- `session-delivery`
- `pd-array`
- dan seterusnya

Setiap folder idealnya akan berisi:
- `README.md` khusus topik itu
- definisi inti
- logika konsep
- syarat valid
- syarat tidak valid
- contoh narasi chart
- hubungan dengan konsep lain
- kaitan ke entry model
- catatan implementasi ke indikator atau sistem

---

## Peta besar pembelajaran

Agar belajar tidak lompat-lompat, materi akan diarahkan dengan urutan berikut.

### Fase 0 — Pondasi market
Tujuan fase ini adalah membangun cara pandang dasar.

Topik inti:
- OHLC
- candle sebagai representasi harga, bukan inti market
- range dan expansion
- impuls dan retracement
- volatility
- session market
- konteks market vs sinyal entry

Hasil akhir fase ini:
- paham bahwa chart bukan kumpulan candle acak
- mulai melihat market sebagai aliran harga dan delivery

### Fase 1 — Struktur harga
Tujuan fase ini adalah memahami bentuk dasar market.

Topik inti:
- swing high
- swing low
- HH, HL, LH, LL
- internal structure
- external structure
- range structure
- trend structure
- failure of structure

Hasil akhir fase ini:
- bisa membedakan trend, range, dan struktur yang rusak

### Fase 2 — Likuiditas
Ini adalah akar penting dari metode.

Topik inti:
- buy-side liquidity
- sell-side liquidity
- equal highs
- equal lows
- external liquidity
- internal liquidity
- draw on liquidity
- liquidity pool

Hasil akhir fase ini:
- bisa melihat “market sedang membidik apa”

### Fase 3 — Sweep dan run
Fase ini sangat penting karena sering disalahpahami.

Topik inti:
- liquidity sweep
- liquidity grab
- liquidity run
- sweep + reclaim
- weak sweep
- valid sweep
- false sweep
- kapan sweep hanya ambil likuiditas, kapan menjadi delivery

Hasil akhir fase ini:
- bisa membedakan grab vs run
- tidak salah menilai setiap sapuan sebagai reversal atau continuation

### Fase 4 — Shift struktur
Fase ini adalah jembatan antara sweep dan entry.

Topik inti:
- market structure shift (MSS)
- break in market structure (BMS)
- failure swing
- breaking nearest swing
- displacement after sweep
- kapan MSS valid
- kapan label MSS salah
- satu leg satu shift utama

Hasil akhir fase ini:
- paham bahwa sweep **bukan** otomatis MSS
- paham bahwa shift valid harus punya syarat yang jelas

### Fase 5 — Delivery dan repricing
Fase ini mulai masuk ke “bagaimana market bergerak setelah shift”.

Topik inti:
- displacement
- imbalance
- repricing
- consequent encroachment
- delivery sequence
- continuation leg
- retracement behavior

Hasil akhir fase ini:
- bisa melihat apakah market benar-benar mulai berjalan atau masih ragu

### Fase 6 — PD Array dan dealing range
Fase ini menjawab pertanyaan: posisi harga sekarang di mana?

Topik inti:
- dealing range
- premium
- discount
- equilibrium
- PD array
- midpoint
- CE
- location-based logic

Hasil akhir fase ini:
- paham bahwa entry bagus bukan cuma sinyal bagus, tapi juga lokasi yang tepat

### Fase 7 — POI
Fase ini membahas area reaksi market.

Topik inti:
- order block
- breaker block
- mitigation block
- fair value gap
- inversion FVG
- balanced price range
- fresh vs mitigated POI
- POI quality

Hasil akhir fase ini:
- bisa memilih area entry yang lebih berkualitas
- tidak menyamakan semua OB/FVG sebagai area yang sama kuat

### Fase 8 — Session delivery
Fase ini membahas waktu.

Topik inti:
- Asia session
- London open
- New York open
- killzone
- Judas swing
- range build
- session continuation
- session reversal
- off-session risk

Hasil akhir fase ini:
- paham kapan setup bagus secara lokasi tapi jelek secara waktu

### Fase 9 — Entry model
Setelah pondasi kuat, baru masuk ke model entry.

Topik inti:
- HTF bias
- M15 validation
- M5 trigger
- sweep → MSS → retrace → trigger
- conservative entry
- balanced entry
- aggressive entry
- invalidation logic
- TP logic
- do not chase

Hasil akhir fase ini:
- punya framework entry yang jelas, bukan entry asal lihat sinyal

### Fase 10 — Risk dan execution discipline
Fase ini menjaga agar metode tidak rusak karena eksekusi.

Topik inti:
- SL placement
- structural invalidation
- POI invalidation
- session-based risk
- chase risk
- scaling
- partial TP
- jurnal trading
- evaluasi kesalahan

Hasil akhir fase ini:
- metode tidak hanya bagus di teori, tapi juga lebih sehat saat dipakai

### Fase 11 — Translasi ke sistem dan indikator
Fase ini adalah jembatan antara metode discretionary dan rule-based system.

Topik inti:
- bagaimana konsep dijadikan kondisi logika
- mana yang bisa diprogram
- mana yang masih discretionary
- scoring system
- state engine
- projection engine
- invalidation engine
- dashboard / narrator

Hasil akhir fase ini:
- teori market bisa dituangkan ke indikator atau sistem dengan lebih jujur

### Fase 12 — Integrasi penuh
Fase akhir adalah penyatuan semua fase.

Urutan berpikir akhirnya:

**Bias HTF → Draw on Liquidity → Session → Sweep/Grab → MSS/BMS → POI → Zone → Trigger → SL → TP → Review**

Hasil akhir fase ini:
- paham struktur penuh metode dari awal sampai eksekusi
- bisa membaca market dengan narasi yang utuh

---

## Perbedaan tujuan belajar di repositori ini

Repositori ini tidak hanya ingin menjawab:
- apa itu ICT

Tetapi juga ingin menjawab:
- bagaimana market benar-benar dibaca
- mana konsep inti, mana konsep turunan
- mana yang wajib, mana yang opsional
- mana yang objektif, mana yang discretionary
- mana yang bisa dijadikan rule mekanis
- bagaimana konsep-konsep itu dihubungkan dengan sistem pribadi

Jadi repositori ini akan berfungsi sebagai:
- bahan belajar
- dokumentasi metode
- basis pengembangan indikator
- basis evaluasi chart dan jurnal

---

## Rencana struktur folder ke depan

Berikut contoh kerangka folder yang nantinya bisa diisi satu per satu.
Nama akhir folder bisa berubah sesuai kebutuhan.

```text
/00-foundation
/01-price-structure
/02-liquidity
/03-sweep-and-run
/04-mss-bms
/05-displacement-and-delivery
/06-dealing-range-and-pd-array
/07-poi
/08-session-model
/09-entry-model
/10-risk-management
/11-journal-and-review
/12-system-design
/13-indicator-logic
/14-case-studies
```

Di dalam folder-folder itu nanti bisa ada subfolder lagi, misalnya:

```text
/02-liquidity/external-liquidity
/02-liquidity/internal-liquidity
/03-sweep-and-run/liquidity-sweep
/03-sweep-and-run/liquidity-grab
/03-sweep-and-run/liquidity-run
/04-mss-bms/market-structure-shift
/04-mss-bms/break-in-market-structure
/07-poi/order-block
/07-poi/fair-value-gap
/08-session-model/judas-swing
```

---

## Standar isi setiap materi

Agar semua folder nanti konsisten, setiap materi idealnya ditulis dengan format seperti ini:

1. definisi konsep
2. tujuan konsep
3. logika konsep
4. syarat valid
5. syarat tidak valid
6. kesalahan umum
7. hubungan dengan konsep lain
8. contoh narasi chart
9. contoh penggunaan untuk entry
10. catatan jika ingin diterjemahkan ke indikator atau sistem

Dengan format seperti ini, materi akan lebih mudah dipelajari, direvisi, dan dikembangkan.

---

## Fokus utama repositori ini

Ada tiga fokus besar yang akan dijaga terus:

### 1. Market logic
Belajar melihat market sebagai alur logika.

### 2. Entry quality
Belajar membedakan setup berkualitas tinggi vs setup yang tampak bagus tapi rapuh.

### 3. Mechanical translation
Belajar bagaimana konsep discretionary diterjemahkan menjadi rule yang lebih objektif.

---

## Untuk siapa repositori ini

Repositori ini cocok untuk:
- trader yang ingin belajar metode berbasis likuiditas
- trader yang ingin memahami ICT dengan urutan yang lebih rapi
- trader yang ingin mengubah konsep menjadi sistem pribadi
- trader yang ingin menghubungkan teori chart dengan indikator

Repositori ini kurang cocok untuk:
- yang hanya mencari sinyal instan
- yang ingin shortcut tanpa membangun pondasi

---

## Catatan penting

Metode ini harus dipelajari sebagai **cara membaca market**, bukan sebagai kumpulan istilah keren.

Kalau hanya hafal istilah seperti:
- liquidity
- sweep
- MSS
- FVG
- OB
- PD array

...tetapi tidak paham hubungan antar konsep, maka hasilnya akan tetap kacau.

Karena itu repositori ini sengaja disusun dari:
**akar → batang → cabang → buah**

supaya pemahaman tumbuh utuh, bukan potongan-potongan.

---

## Arah pengembangan selanjutnya

Tahap pertama adalah membangun `README.md` utama ini.

Tahap berikutnya nanti:
- membuat folder inti satu per satu
- menulis materi untuk setiap konsep utama
- memetakan hubungan antar konsep
- menyusun entry model berdasarkan validation TF dan trigger TF
- menghubungkan teori dengan indikator seri `XAUUSD Context Narrator`

---

## Ringkasan singkat

Repositori ini adalah peta belajar untuk memahami metode trading berbasis:
- struktur
- likuiditas
- sweep
- MSS/BMS
- dealing range
- POI
- session delivery
- entry model
- sistem mekanis

Tujuan akhirnya adalah:

**bukan sekadar tahu konsep, tetapi mampu membaca market dengan utuh, membuat keputusan yang lebih jernih, dan menuangkan metode itu ke dalam sistem yang bisa diuji.**
