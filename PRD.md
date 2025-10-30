## Product Requirements Document (PRD) - Aplikasi Manajemen Rumah Makan (Versi Terbaru)
- **Versi**: 1.1 (Update PRD - 30 Oktober 2025)
- **Tanggal**: 30 Oktober 2025
- **Penyusun**: Muhamad Azkal Fahmi Yahya_221240001336 dan Khaf Sari Inayati_221240001228

### 1. Pendahuluan
#### 1.1 Visi Produk
Mewujudkan platform yang intuitif dan terjangkau untuk membantu pemilik dan manajer rumah makan kecil hingga menengah mengelola operasional sehari-hari mereka. Visi kami adalah menyederhanakan manajemen menu, inventaris, proses penjualan (POS), dan menyediakan laporan dasar, memberdayakan rumah makan untuk fokus pada penyajian makanan berkualitas dan pengalaman pelanggan yang luar biasa, tanpa terbebani kerumitan teknis.

#### 1.2 Tujuan Produk (MVP)
Tujuan utama dari Minimum Viable Product (MVP) ini adalah untuk memvalidasi kebutuhan pasar akan solusi manajemen rumah makan yang berbasis SQL lokal untuk setiap restoran, menawarkan fungsionalitas inti yang esensial. Kami bertujuan untuk menyediakan alat yang kuat namun sederhana yang dapat digunakan oleh satu pengguna utama per rumah makan untuk mengelola aspek-aspek kunci bisnis mereka, serta mengumpulkan umpan balik pengguna awal untuk iterasi di masa mendatang.

#### 1.3 Target Pengguna
- **Pemilik/Manajer Rumah Makan Kecil & Menengah**: Mencari solusi all-in-one yang mudah digunakan untuk mengelola menu, stok, dan penjualan; membutuhkan antarmuka intuitif.
- **Wirausahawan Kuliner**: Membutuhkan sistem manajemen efisien dan terjangkau untuk mendukung pertumbuhan bisnis.
- **Super Admin (Tim Pengembangan/Anda)**: Mengelola platform, pendaftaran restoran baru, monitoring langganan, pemeliharaan backend.

#### 1.4 Latar Belakang & Masalah yang Diselesaikan
Banyak rumah makan kecil masih mengandalkan pencatatan manual atau sistem yang terfragmentasi untuk mengelola operasional. Produk ini mengatasi masalah dengan platform terintegrasi yang:
- Memusatkan data menu, inventaris, dan penjualan.
- Mengotomatiskan pengurangan stok berdasarkan penjualan.
- Menyediakan laporan penjualan dasar untuk keputusan lebih baik.
- Memanfaatkan database SQL lokal untuk kontrol data dan kinerja, tetap terhubung ke langganan/update.

### 2. Fitur Utama (MVP/Versi Terbaru)
MVP kini lebih advanced dengan kualitas UI/UX profesional, maintainability tinggi, serta penggunaan reusable widget dan konsistensi desain menyeluruh.

#### 2.1 Pendaftaran Restoran & Manajemen Akun Pengguna Utama
- Pengguna mendaftarkan restoran baru dengan email dan password melalui form dengan validasi real-time dan visual feedback yang baik (menggunakan AppTextFormField).
- Setiap pendaftaran membuat instance restoran baru beserta database lokal. Profil pengguna dapat diedit langsung lewat UI modern.
- Konsistensi warna, tipografi, spacing, border sudah terjamin melalui design system (AppColors, AppSpacing, AppBorderRadius, dsb).

#### 2.2 Manajemen Menu & Kategori
- CRUD kategori dan item menu dengan UI modern, memakai EmptyStateWidget, LoadingWidget, dan ErrorWidget untuk semua kondisi.
- Unggah foto item menu mudah, form dialog sudah seragam dan konsisten. Data tampil dalam card/grid/list profesional.

#### 2.3 Manajemen Resep
- Pengelolaan resep yang otomatis kurangi stok bahan baku saat ada penjualan. Form dan tampilan data konsisten sesuai tema aplikasi.

#### 2.4 Manajemen Inventaris Bahan Baku
- CRUD bahan baku, monitor stok, dan penyesuaian stok manual/interaktif sudah memakai komponen yang ready state-aware (loading/error/empty).
- Tabel bahan baku ditampilkan secara clean, readable, dan responsif.

#### 2.5 Modul Point of Sales (POS) / Kasir
- Transaksi kasir menggunakan layout responsif (mobile/tablet/komputer), menu card dengan visual states, keranjang dinamis dan payment dialog tampil profesional.
- Cart, pembayaran, riwayat transaksi sudah modern dan konsisten. Sudah ada print struk sederhana.

#### 2.6 Laporan Dasar Penjualan
- Laporan visual diperbarui (chart styling dengan AppColors.chartColors), tampilan KPI card dan filter sangat konsisten.
- Empty & loading state sudah engaging.

#### 2.7 Manajemen Profil & Setting User
- User bisa mengubah data profil, sudah mengikuti UX terbaru (real-time validasi, konsistensi visual, string dari AppStrings, button states jelas).

#### 2.8 Internationalization Ready
- Semua string dan literal penting sudah diatur di AppStrings untuk memudahkan penyesuaian bahasa di masa mendatang.

#### 2.9 Widget & Constants Reusability
- Tersedia widget reusable: AppTextFormField, AppDropdownButtonFormField, EmptyStateWidget, LoadingWidget, ErrorWidget, AppFormSection, AppFormButtons, dsb.
- Semua konstanta design seperti warna, spacing, border radius, icon size, elevation, dsb. sudah centralized di AppConstants.

### 3. Fitur yang Tidak Termasuk dalam MVP ini
- Manajemen Meja, tata letak meja, pemesanan per meja.
- Akuntansi dasar detail (jurnal otomatis, Laba Rugi formal, Neraca).
- Manajemen langganan otomatis (dilakukan manual/eksternal untuk MVP).
- Manajemen multi-user internal per restoran.
- Metode pembayaran non-tunai di POS.
- Diskon/Promosi kompleks atau voucher.
- Integrasi pihak ketiga (payment gateway, aplikasi pesan antar).
- Fungsionalitas offline POS canggih.
- Backup & Restore data oleh pengguna.
- Kustomisasi template struk mendalam.

### 4. Arsitektur Data (Penyesuaian untuk SQL Lokal)
- **Database Pusat (Backend)**
  - Tujuan: Mengelola informasi pendaftaran restoran dan status langganan.
  - Contoh Teknologi: PostgreSQL, MySQL, atau SQL Server.
  - Tabel Kunci: `users`, `restaurants`.
- **Database SQL Lokal (Per Restoran)**
  - Tujuan: Menyimpan data operasional (menu, inventaris, penjualan, resep) terisolasi per restoran.
  - Implementasi: Alokasikan skema/database SQL baru per restoran, simpan detail koneksi di database pusat.
  - Tabel Kunci: `menu_categories`, `menu_items`, `ingredients`, `recipe_details`, `sales_transactions`, `sales_transaction_details`.

### 5. Kebutuhan Non-Fungsional Utama (update)
- **Konsistensi Visual**: All colors/spacing/font/border/icon memakai design system.
- **Maintainability**: Clean code, reusable widget, centralized constants.
- **Internationalization Ready**: Semua string sudah disiapkan untuk multi-lingual.
- **Build & Deployment**: Build APK sukses tanpa error, telah tested responsive & usability di berbagai device.
- **Scalability**: Struktur dan arsitektur codebase aplikatif untuk scaling fitur baru.

### 6. Metrik Keberhasilan (MVP)
- **Adopsi**: Minimal X restoran aktif dalam Y bulan pertama.
- **Retensi**: Z% pengguna aktif kembali setelah 1 bulan.
- **Kualitas Data**: Selisih stok < 5%.
- **Kepuasan Pengguna**: Skor kepuasan W.
- **Fungsionalitas**: Semua fitur MVP berjalan tanpa critical bugs.

### 7. Rencana Rilis & Timeline (Ringkasan)
- **Fase 1 (MVP)**: Pengembangan dan peluncuran fitur inti.
- **Target Rilis**: [Tanggal Target - Misal: Q4 2025]
- **Metodologi**: Agile (Sprint-based)
- **Fokus**: Validasi pasar, kumpulkan umpan balik, stabilitas sistem inti.

### 7. Status Build & Next Steps (NEW)
- ✅ Build APK berjalan mulus tanpa error
- ✅ Overflow errors pada komponen utama seperti ListTile sudah diperbaiki
- ✅ Testing dan QA berjalan baik
- ✅ UI/UX sudah sesuai standard profesional
- ✅ Widget reusable, codebase maintainable & scalable

**Next Steps:**
- Testing lebih lanjut, UAT, dan deployment
- Pengumpulan feedback dari user untuk iterasi fitur selanjutnya
- Penambahan fitur baru berbasis prioritas pengguna
