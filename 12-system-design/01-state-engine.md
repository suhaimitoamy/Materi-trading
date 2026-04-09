# State Engine

## Kenapa state engine penting
Kalau logika market diterjemahkan ke indikator, sistem akan lebih sehat jika market dibaca sebagai **state**, bukan sekadar satu sinyal buy/sell.

State membantu indikator menjadi lebih jujur dan lebih dekat dengan cara baca market yang bertahap.

---

## Contoh state
State yang umum dipakai dalam sistem market logic:
- building range
- liquidity grab detected
- waiting shift
- MSS confirmed
- projected zone
- in zone
- trigger ready
- delivering
- invalid

Dengan state seperti ini, user bisa melihat proses, bukan hanya hasil akhir.

---

## Keuntungan pendekatan state
- chart lebih mudah dibaca sebagai narasi
- sistem tidak terlalu reaktif
- lebih mudah membedakan context dan trigger
- lebih mudah memberi label seperti wait, projected, confirmed, invalid

---

## Hubungan dengan indikator
Indikator yang sehat biasanya punya beberapa engine:
- context engine
- liquidity engine
- shift engine
- zone engine
- trigger engine
- risk engine

State engine menjadi jembatan yang menyatukan semuanya.

---

## Ringkasan
Kalau market diterjemahkan ke indikator, pendekatan state lebih kuat daripada hanya memaksa sistem memberi sinyal instan.
