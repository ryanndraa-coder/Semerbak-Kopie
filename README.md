# Semerbak Kopie

Website statis (HTML, CSS, JavaScript vanilla). Buka `index.html` di browser atau unggah seluruh isi folder ke root repository GitHub Pages.

## Formulir konsultasi
Tombol "Kirim Konsultasi" membuka WhatsApp (wa.me) dengan pesan terisi. Tanpa API, server, atau token.
Nomor tujuan: `CONFIG.WHATSAPP_NUMBER` di bagian atas `script.js` (format internasional tanpa +).

## Paket dan simulasi
- Enam paket beserta gambar penawaran dan halaman rinciannya ada di bagian Kemitraan. Folder `assets/packages/brochure/` berisi 12 gambar yang dilampirkan: setiap paket menggunakan satu gambar penawaran dan satu gambar rincian secara berurutan.
- Pilihan paket pada formulir WhatsApp menggunakan nama dan harga yang tercantum pada gambar paket.
- Kalkulator adalah simulasi berdasarkan input pengunjung, bukan proyeksi atau jaminan keuntungan.
- Informasi legalitas tidak diklaim pada website; mintalah dan verifikasi dokumen resmi secara langsung sebelum transaksi.

## Menu minuman
- Menu Semerbak Kopie dan Kopiena Coffee mempertahankan nama serta gambar produk yang tersedia di folder `assets/products/`. Gambar Matcha Cream Cheese menggunakan foto Matcha Latte Kopiena karena aset Matcha Cream Cheese yang tersedia berlogo brand lain.
- Kartu menu membuka detail produk, pilihan ukuran cup S/M/L, dan tautan WhatsApp langsung untuk menanyakan komposisi serta harga yang berlaku.
- Harga, ukuran volume, dan komposisi rinci tidak ditampilkan sebagai fakta karena belum tersedia pada materi situs.

## Logo dan hero
- Logo wordmark transparan Semerbak Kopie: `assets/logo-semerbak-wordmark.png`
- Logo wordmark transparan Kopiena Coffee: `assets/logo-kopiena-wordmark.png`
- Gambar hero per perangkat (lewat `<picture>`): `assets/hero/gerobak-desktop.webp`, `gerobak-tablet.webp` (<=1023px), `gerobak-hp.webp` (<=767px)
- Gaya responsif dan section kemitraan ada di `style.css`.
