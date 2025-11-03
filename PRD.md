# Product Requirements Document (PRD)

## Aplikasi Manajemen Rumah Makan (Tatafy)

**Versi Dokumen:** 2.0**Tanggal:** 30 Oktober 2025**Penyusun:**

- Muhamad Azkal Fahmi Yahya (221240001336)
- Khaf Sari Inayati (221240001228)

---

## DAFTAR ISI

1. [Latar Belakang dan Tujuan (Objective)](#1-latar-belakang-dan-tujuan-objective)
2. [Rilis (Release)](#2-rilis-release)
3. [Fitur (Features)](#3-fitur-features)
4. [Metrik Keberhasilan (Success Metrics)](#4-metrik-keberhasilan-success-metrics)
5. [User Persona dan User Stories](#5-user-persona-dan-user-stories)
6. [Alur Pengguna dan Desain (User Flow and Design)](#6-alur-pengguna-dan-desain-user-flow-and-design)
7. [Analitik (Analytics)](#7-analitik-analytics)
8. [Pekerjaan di Masa Depan (Future Work)](#8-pekerjaan-di-masa-depan-future-work)
9. [Asumsi, Batasan, dan Ketergantungan](#9-asumsi-batasan-dan-ketergantungan)

---

## 1. Latar Belakang dan Tujuan (Objective)

### 1.1 Latar Belakang

Sektor kuliner, khususnya rumah makan kecil hingga menengah, merupakan salah satu sektor usaha yang paling banyak di Indonesia. Berdasarkan data Badan Pusat Statistik (BPS), jumlah usaha kuliner di Indonesia mencapai ratusan ribu unit, dengan mayoritas merupakan usaha mikro dan kecil. Namun, usaha-usaha ini masih menghadapi berbagai tantangan dalam manajemen operasional:

#### Masalah yang Dihadapi:

1. **Pencatatan Manual yang Tidak Efisien**

   - Banyak rumah makan masih menggunakan buku catatan atau spreadsheet sederhana untuk mengelola menu, stok, dan penjualan
   - Data tersebar dan sulit diakses saat dibutuhkan
   - Resiko kehilangan data dan human error tinggi
2. **Kesulitan dalam Mengelola Inventaris**

   - Tidak ada sistem otomatis untuk tracking stok bahan baku
   - Sulit mengetahui bahan mana yang hampir habis atau sudah habis
   - Tidak ada perhitungan otomatis penggunaan bahan berdasarkan resep
   - Menyebabkan pemborosan atau kehabisan stok di waktu penting
3. **Tantangan dalam Sistem Penjualan**

   - Proses transaksi masih manual dengan kalkulator atau aplikasi sederhana
   - Tidak ada integrasi antara penjualan dengan pengurangan stok
   - Sulit melacak riwayat transaksi dan analisis penjualan
   - Tidak ada sistem untuk menghitung pajak dan service charge secara otomatis
4. **Keterbatasan dalam Analisis Bisnis**

   - Tidak ada laporan yang jelas tentang performa penjualan
   - Sulit mengidentifikasi menu bestseller atau menu yang kurang laris
   - Tidak ada analisis margin dan profitabilitas per menu
   - Sulit membuat keputusan bisnis berbasis data

### 1.2 Tujuan Produk (Objective)

#### Tujuan Utama:

Mengembangkan aplikasi manajemen rumah makan berbasis mobile yang **100% offline**, terjangkau, dan mudah digunakan untuk membantu pemilik dan manajer rumah makan kecil hingga menengah mengelola operasional sehari-hari secara efisien dan efektif.

#### Tujuan Spesifik:

1. **Menyediakan Solusi All-in-One yang Terjangkau**

   - Mengintegrasikan semua fungsi manajemen (menu, inventaris, POS, laporan) dalam satu aplikasi
   - Menggunakan database lokal (SQLite) sehingga tidak memerlukan server atau biaya berlangganan bulanan
   - Bekerja 100% offline sehingga tidak bergantung pada koneksi internet
2. **Mengotomatiskan Proses Operasional**

   - Otomatisasi pengurangan stok bahan baku berdasarkan penjualan melalui sistem resep
   - Perhitungan otomatis harga pokok (cost price) menu berdasarkan resep dan harga bahan
   - Sistem alert otomatis untuk stok rendah dan stok habis
3. **Meningkatkan Efisiensi Transaksi**

   - Sistem POS yang cepat dan mudah digunakan
   - Perhitungan otomatis total, pajak, service charge, dan kembalian
   - Penyimpanan riwayat transaksi untuk audit dan analisis
4. **Memberdayakan Keputusan Berbasis Data**

   - Dashboard dengan KPI (Key Performance Indicators)
   - Laporan penjualan visual dengan grafik dan chart
   - Analisis margin dan profitabilitas per kategori menu
   - Laporan cash flow dan pengeluaran
5. **Memvalidasi Model Bisnis Offline-First untuk Sektor UMKM**

   - Membuktikan bahwa solusi offline dapat menjadi alternatif yang efektif untuk usaha kecil
   - Mengumpulkan feedback pengguna untuk iterasi produk selanjutnya
   - Menjadi referensi untuk pengembangan solusi serupa di sektor lain

#### Tujuan Komersial:

1. **Validasi Pasar**

   - Mencapai 100 restoran aktif dalam 4 bulan pertama setelah rilis
2. **Membangun Merek Produk**

   - Menciptakan brand "Tatafy" sebagai solusi manajemen restoran yang terjangkau
   - Membangun reputasi sebagai produk yang mudah digunakan dan andal
3. **Peluang Monetisasi di Masa Depan**

   - Berpotensi untuk model freemium dengan fitur premium
   - Kemungkinan integrasi dengan layanan cloud opsional (backup, sync multi-device)

#### Tujuan Akademik:

1. **Memenuhi Syarat Tugas Akhir**

   - Mengembangkan produk yang memenuhi standar industri
   - Menerapkan best practices dalam pengembangan software
   - Mendemonstrasikan kemampuan teknis dan manajemen proyek
2. **Kontribusi Ilmiah**

   - Membuktikan efektivitas pendekatan offline-first untuk aplikasi manajemen usaha
   - Memberikan case study tentang pengembangan aplikasi mobile untuk UMKM
   - Menjadi referensi untuk penelitian selanjutnya di bidang aplikasi mobile untuk UMKM

---

## 2. Rilis (Release)

### 2.1 Rencana Rilis

#### **Versi 1.0 - MVP (Minimum Viable Product)**

**Target Rilis:** Sebelum UAS (Ultimate Assessment Semester)
**Status:** ✅ Development Complete, Ready for Testing & Deployment

**Timeline:**

- **Fase Development:** September - November 2025 (Completed)
- **Fase Testing & QA:** November 2025 (In Progress)
- **Fase UAT (User Acceptance Testing):** Awal Desember 2025
- **Rilis Produksi:** Pertengahan Desember 2025

### 2.2 Fitur per Rilis

#### **Versi 1.0 - MVP (Current Release)**

**Core Features:**

1. **Authentication & User Management**

   - Registrasi restoran baru
   - Login/Logout dengan autentikasi lokal
   - Manajemen profil pengguna dan restoran
2. **Dashboard & Overview**

   - Dashboard utama dengan KPI hari ini
   - Grafik pendapatan 7 hari terakhir
   - Alert stok rendah dan stok habis
   - Best seller menu
   - Transaksi terbaru
3. **Menu Management**

   - CRUD Kategori Menu
   - CRUD Item Menu dengan foto
   - Status ketersediaan menu
   - Pencarian dan filter menu
4. **Recipe Management**

   - Pengelolaan resep (hubungan menu dengan bahan baku)
   - Perhitungan otomatis cost price dari resep
5. **Inventory Management**

   - CRUD Bahan Baku
   - Alert otomatis stok rendah/habis
   - Kategori bahan baku
6. **Point of Sales (POS)**

   - Perhitungan otomatis (pajak, service charge, kembalian)
   - Multiple payment methods (cash, card, transfer)
7. **Reports & Analytics**

   - Laporan penjualan dengan grafik
   - KPI Cards (Pendapatan, Transaksi, Rata-rata Order, Menu Terjual)
   - Grafik pendapatan (Line Chart)
   - Grafik kategori penjualan (Pie Chart)
   - Filter periode (Hari Ini, 7 Hari, Bulan, Tahun)
   - Export PDF & Excel
8. **Financial Dashboard**

   - Payment Methods Dashboard
   - Cash Flow Dashboard (Pemasukan vs Pengeluaran)
   - Tax Report (Laporan PPN)
   - Expense Management
   - Supplier & Purchase Order Management

---

## 3. Fitur (Features)

### 3.1 Authentication & User Management

#### 3.1.1 Registrasi Restoran Baru

**Prioritas:** P0 (Critical)
**Status:** ✅ Implemented

**Deskripsi:**
Pengguna dapat mendaftarkan restoran baru dengan membuat akun pengguna. Setiap pendaftaran akan membuat instance restoran baru beserta database lokal SQLite yang terpisah.

**Fungsionalitas:**

- Form registrasi dengan field:

  - Nama restoran (required)
  - Email (required, unique validation)
  - Password (required, min 6 karakter)
  - Nama pengguna (optional)
  - Alamat restoran (optional)
  - Nomor telepon (optional)
- Validasi email format
- Validasi password strength
- Penanganan error (email sudah terdaftar, dll)
- Auto-redirect ke login setelah registrasi berhasil

**Manfaat:**

- Onboarding mudah untuk pengguna baru
- Data restoran terisolasi per instance
- Keamanan data terjamin dengan database lokal

#### 3.1.2 Login/Logout

**Prioritas:** P0 (Critical)
**Status:** ✅ Implemented

**Deskripsi:**
Sistem autentikasi lokal menggunakan SQLite. Pengguna login dengan email dan password yang disimpan di database lokal.

**Fungsionalitas:**

- Form login dengan email dan password
- Validasi input
- Error handling (email tidak terdaftar, password salah)
- Logout dengan clear session
- Splash screen dengan auto-check session

**Manfaat:**

- Keamanan akses aplikasi
- User experience yang smooth dengan auto-login

#### 3.1.3 Manajemen Profil

**Prioritas:** P1 (High)
**Status:** ✅ Implemented

**Deskripsi:**
Pengguna dapat mengubah data profil pribadi dan informasi restoran.

**Fungsionalitas:**

- Edit profil pengguna:
  - Nama pengguna
  - Email
  - Foto profil (upload dari gallery/camera)
- Edit informasi restoran:
  - Nama restoran
  - Alamat
  - Nomor telepon
- Real-time validation
- Visual feedback saat update berhasil

**Manfaat:**

- Fleksibilitas untuk update informasi
- Profil restoran yang akurat

### 3.2 Dashboard & Overview

#### 3.2.1 Dashboard Utama

**Prioritas:** P0 (Critical)
**Status:** ✅ Implemented

**Deskripsi:**
Layar utama aplikasi yang menampilkan ringkasan performa bisnis hari ini dan beberapa hari terakhir.

**Fungsionalitas:**

- KPI Cards:
  - Total Pendapatan Hari Ini
  - Jumlah Transaksi Hari Ini
  - Best Seller Menu
- Grafik pendapatan 7 hari terakhir (Line Chart)
- Alert stok rendah dan stok habis dengan jumlah item
- Top 5 menu terlaris
- 5 transaksi terbaru dengan detail
- Auto-refresh data

**Manfaat:**

- Quick overview performa bisnis
- Identifikasi masalah cepat (stok habis, dll)
- Insight untuk keputusan cepat

### 3.3 Menu Management

#### 3.3.1 Manajemen Kategori Menu

**Prioritas:** P0 (Critical)
**Status:** ✅ Implemented

**Deskripsi:**
Pengelolaan kategori menu untuk mengorganisir item menu.

**Fungsionalitas:**

- Create kategori:
  - Nama kategori (required)
  - Deskripsi (optional)
- Read: List/grid view kategori
- Update kategori
- Delete kategori (dengan validasi jika masih ada menu)
- Empty state jika belum ada kategori
- Loading dan error state

**Manfaat:**

- Organisasi menu yang rapi
- Kemudahan navigasi menu di POS

#### 3.3.2 Manajemen Item Menu

**Prioritas:** P0 (Critical)
**Status:** ✅ Implemented

**Deskripsi:**
Pengelolaan item menu dengan semua informasi yang diperlukan.

**Fungsionalitas:**

- Create menu item:
  - Nama menu (required)
  - Deskripsi (optional)
  - Kategori (dropdown)
  - Harga (required, numeric)
  - Foto menu (upload dari gallery/camera)
  - Status ketersediaan (available/unavailable)
- Read: Grid/List view dengan foto dan info
- Update menu item
- Delete menu item
- Pencarian menu
- Filter berdasarkan kategori
- Perhitungan otomatis margin profit
- Perhitungan cost price dari resep (jika ada)

**Manfaat:**

- Katalog menu yang lengkap dan menarik
- Manajemen harga yang efisien
- Analisis profitabilitas per menu

### 3.4 Recipe Management

#### 3.4.1 Pengelolaan Resep

**Prioritas:** P1 (High)
**Status:** ✅ Implemented

**Deskripsi:**
Menghubungkan menu dengan bahan baku yang diperlukan beserta jumlahnya. Resep digunakan untuk perhitungan cost price dan auto-deduction stok saat penjualan.

**Fungsionalitas:**

- Create resep:
  - Pilih menu item
  - Pilih bahan baku
  - Input jumlah bahan yang diperlukan
  - Unit of measure otomatis dari bahan baku
- Read: List resep per menu dengan detail
- Update resep
- Delete resep
- Multiple resep per menu (satu menu bisa punya beberapa bahan)
- Perhitungan otomatis cost price menu dari total cost bahan
- Versioning resep (riwayat perubahan)
- Visual feedback jika cost price berubah

**Manfaat:**

- Kontrol cost yang akurat
- Perhitungan margin otomatis
- Dasar untuk auto-stock deduction

#### 3.4.2 Auto Stock Deduction

**Prioritas:** P1 (High)
**Status:** ✅ Implemented

**Deskripsi:**
Sistem otomatis mengurangi stok bahan baku saat terjadi penjualan menu berdasarkan resep.

**Fungsionalitas:**

- Saat transaksi POS selesai, sistem:
  - Mencari resep untuk setiap menu yang dijual
  - Menghitung jumlah bahan yang diperlukan (quantity menu × quantity resep)
  - Mengurangi stok bahan baku secara otomatis
  - Update timestamp bahan baku
- Validasi stok (dapat dikonfigurasi untuk prevent order jika stok tidak cukup)
- Log perubahan stok untuk audit

**Manfaat:**

- Akurasi stok real-time
- Mengurangi human error
- Efisiensi operasional

### 3.5 Inventory Management

#### 3.5.1 Manajemen Bahan Baku

**Prioritas:** P0 (Critical)
**Status:** ✅ Implemented

**Deskripsi:**
Pengelolaan bahan baku yang digunakan dalam produksi menu.

**Fungsionalitas:**

- Create bahan baku:
  - Nama (required)
  - SKU (optional)
  - Kategori (optional)
  - Unit of measure (kg, liter, pcs, dll)
  - Harga beli per satuan (required)
  - Stok saat ini (default 0)
  - Stok minimum (untuk alert)
- Read: Table view dengan kolom:
  - Nama, Kategori, Stok, Unit, Harga, Status
- Update bahan baku
- Delete bahan baku (dengan validasi jika masih digunakan di resep)
- Filter dan pencarian
- Sort berdasarkan berbagai kolom
- Status indicator (Normal/Rendah/Habis) dengan color coding

**Manfaat:**

- Kontrol inventori yang terorganisir
- Monitoring stok yang mudah
- Alert otomatis untuk stok rendah

#### 3.5.2 Stock Adjustment

**Prioritas:** P1 (High)
**Status:** ✅ Implemented

**Deskripsi:**
Penyesuaian stok secara interaktif tanpa melalui stock opname formal.

**Fungsionalitas:**

- Quick adjustment form:
  - Pilih bahan baku
  - Input adjustment value (bisa positif atau negatif)
  - Catatan (optional)
- Update stok real-time
- Riwayat adjustment disimpan
- Validasi untuk prevent negative stock (optional)

**Manfaat:**

- Fleksibilitas penyesuaian stok cepat
- Untuk kasus: retur, spoilage, dll

### 3.6 Point of Sales (POS)

#### 3.6.1 POS Interface

**Prioritas:** P0 (Critical)
**Status:** ✅ Implemented

**Deskripsi:**
Interface kasir untuk melakukan transaksi penjualan.

**Fungsionalitas:**

- Layout responsif:
  - Mobile: Stack layout (menu cards di atas, cart di bawah)
  - Tablet: Split screen (menu kiri, cart kanan)
  - Desktop: Multi-column layout
- Menu display:
  - Grid/List view menu items
  - Foto menu, nama, harga
  - Status indicator (available/unavailable)
  - Visual states (hover, pressed, selected)
- Filter menu berdasarkan kategori
- Pencarian menu
- Cart management:
  - Add item ke cart
  - Update quantity
  - Remove item
  - Subtotal per item
  - Total keseluruhan
- Real-time calculation

**Manfaat:**

- Transaksi yang cepat dan efisien
- User experience yang baik untuk kasir
- Mengurangi waktu pelayanan

#### 3.6.2 Checkout & Payment

**Prioritas:** P0 (Critical)
**Status:** ✅ Implemented

**Deskripsi:**
Proses pembayaran dengan perhitungan lengkap dan print struk.

**Fungsionalitas:**

- Payment dialog dengan informasi:
  - Subtotal
  - Pajak (PPN) - configurable rate
  - Service charge - configurable rate
  - Total akhir
- Payment method selection:
  - Cash
  - Card (debit/credit)
  - Transfer
- Cash payment:
  - Input cash received
  - Auto-calculate change
- Transaction notes (optional)
- Customer name (optional)
- Save transaction:
  - Generate transaction number unik
  - Save ke database
  - Trigger auto stock deduction
- Transaction success confirmation
- Redirect ke POS atau lihat detail transaksi

**Manfaat:**

- Perhitungan yang akurat dan otomatis
- Dokumentasi transaksi lengkap
- Kemudahan untuk pelanggan (struk)

#### 3.6.3 Transaction History

**Prioritas:** P1 (High)
**Status:** ✅ Implemented

**Deskripsi:**
Riwayat semua transaksi yang pernah dilakukan.

**Fungsionalitas:**

- List semua transaksi dengan:
  - Nomor transaksi
  - Tanggal dan waktu
  - Total amount
  - Payment method
  - Status
- Filter berdasarkan:
  - Tanggal (range picker)
  - Payment method
  - Nomor transaksi
- Pencarian transaksi
- Detail transaksi:
  - Header (nomor, tanggal, kasir)
  - List item yang dibeli
  - Breakdown harga (subtotal, tax, service, total)
  - Payment info
  - Notes
- Re-print struk (jika diperlukan)
- Export transaksi ke PDF/Excel

**Manfaat:**

- Audit trail lengkap
- Kemudahan untuk laporan keuangan
- Customer service (cek transaksi pelanggan)

### 3.7 Reports & Analytics

#### 3.7.1 Sales Reports

**Prioritas:** P1 (High)
**Status:** ✅ Implemented

**Deskripsi:**
Laporan penjualan komprehensif dengan visualisasi data.

**Fungsionalitas:**

- Period selector:
  - Hari ini
  - 7 hari terakhir
  - Bulan ini
  - Tahun ini
  - Custom date range
- KPI Cards:
  - Total Pendapatan
  - Jumlah Transaksi
  - Rata-rata Order Value
  - Total Menu Terjual
- Charts:
  - Line Chart: Pendapatan per hari (7 hari terakhir)
  - Pie Chart: Pendapatan per kategori menu
  - Bar Chart: Top menu items (optional)
- Data tables:
  - Detail transaksi per periode
  - Breakdown per kategori
- Export options:
  - PDF (comprehensive report)
  - Excel (detailed data)
  - Share file

**Manfaat:**

- Insight performa bisnis
- Dasar untuk keputusan strategis
- Dokumentasi untuk stakeholder

## 4. Metrik Keberhasilan (Success Metrics)

### 4.1 Metrik Adopsi (Adoption Metrics)

#### 4.1.1 Target Pengguna Aktif

**Metric:** Jumlah restoran yang aktif menggunakan aplikasi**Target:** **100 restoran aktif** dalam 3 bulan pertama setelah rilis**Cara Pengukuran:**

- Restoran dikatakan "aktif" jika:
  - Sudah melakukan minimal 1 transaksi POS dalam 30 hari terakhir, ATAU
  - Sudah memiliki minimal 5 menu items yang terdaftar, ATAU
  - Sudah melakukan minimal 3 operasi CRUD (create/update/delete) dalam 7 hari terakhir
- Tracking melalui:
  - Analytics event: `restaurant_activated`
  - Database query untuk active restaurants
  - Dashboard analytics

**Baseline:** 0 restoran (new product)**Milestone:**

- Bulan 1: 30 restoran aktif
- Bulan 2: 60 restoran aktif
- Bulan 3: 100 restoran aktif

#### 4.1.2 User Registration Rate

**Metric:** Jumlah registrasi baru per minggu**Target:** 10-15 registrasi baru per minggu setelah soft launch**Cara Pengukuran:**

- Tracking event: `user_registered`
- Weekly report dari analytics

### 4.2 Metrik Retensi (Retention Metrics)

#### 4.2.1 Monthly Active User Retention

**Metric:** Persentase pengguna yang kembali aktif setelah 1 bulan
**Target:** **90% retensi** setelah 1 bulan pertama
**Formula:**

```
Retention Rate = (Pengguna aktif bulan ini yang juga aktif bulan lalu) / (Total pengguna aktif bulan lalu) × 100%
```

**Cara Pengukuran:**

- Identifikasi cohort pengguna yang registrasi di bulan tertentu
- Track aktivitas mereka di bulan berikutnya
- Hitung persentase yang masih aktif (sesuai definisi "aktif" di 4.1.1)
- Analytics event: `user_returned_after_30_days`

**Benchmark:**

- Excellent: >85%
- Good: 70-85%
- Needs Improvement: <70%

#### 4.2.2 Weekly Active User

**Metric:** Jumlah pengguna aktif per minggu**Target:** Minimal 70% dari total registered users aktif per minggu**Cara Pengukuran:**

- Weekly active = pengguna yang melakukan minimal 1 action dalam 7 hari terakhir
- Tracking: `weekly_active_user` event

### 4.3 Metrik Kualitas Data (Data Quality Metrics)

#### 4.3.1 Stock Accuracy

**Metric:** Akurasi stok bahan baku
**Target:** **Selisih stok < 5%** dari stok fisik
**Formula:**

```
Stock Accuracy = (1 - |Stok Sistem - Stok Fisik| / Stok Fisik) × 100%
Target: Stock Accuracy ≥ 95%
```

**Cara Pengukuran:**

- Bandingkan stok sistem dengan hasil stock opname fisik
- Hitung selisih untuk setiap bahan baku
- Rata-rata selisih semua bahan baku
- Tracking melalui stock opname reports

**Baseline:** Akan ditentukan setelah UAT dengan sample data

#### 4.3.2 Transaction Data Completeness

**Metric:** Kelengkapan data transaksi**Target:** 100% transaksi memiliki data lengkap**Cara Pengukuran:**

- Cek apakah semua transaksi memiliki:
  - Transaction number
  - Transaction date
  - Total amount
  - At least 1 transaction item
  - Payment method
- Report: jumlah transaksi incomplete / total transaksi

### 4.4 Metrik Kepuasan Pengguna (User Satisfaction Metrics)

#### 4.4.1 User Satisfaction Score

**Metric:** Skor kepuasan pengguna
**Target:** **Skor rata-rata 4.0 dari 5.0** (80% satisfaction)
**Skala:** 1-5 (1=Very Dissatisfied, 5=Very Satisfied)

**Cara Pengukuran:**

- In-app survey setelah 1 minggu penggunaan
- Survey mencakup:
  - Overall satisfaction (1-5)
  - Ease of use (1-5)
  - Feature usefulness (1-5)
  - Performance (1-5)
  - Likelihood to recommend (1-5)
- Net Promoter Score (NPS) calculation:
  - Promoters (9-10): Likely to recommend
  - Passives (7-8): Neutral
  - Detractors (0-6): Unlikely to recommend
  - NPS = % Promoters - % Detractors

**Target NPS:** Minimal 50 (Good benchmark)

#### 4.4.2 Feature Adoption Rate

**Metric:** Persentase fitur yang digunakan oleh pengguna**Target:** Minimal 70% dari fitur core digunakan oleh 50% pengguna**Cara Pengukuran:**

- Track usage untuk setiap fitur utama:
  - POS transactions
  - Menu management
  - Inventory management
  - Reports viewing
  - Recipe management
- Hitung persentase pengguna yang pernah menggunakan masing-masing fitur

### 4.5 Metrik Fungsionalitas (Functionality Metrics)

#### 4.5.1 Critical Bug Rate

**Metric:** Jumlah critical bugs yang ditemukan**Target:** **0 critical bugs** dalam production**Definisi Critical Bug:**

- Data loss
- Application crash yang frequent
- Security vulnerability
- Feature yang tidak berfungsi sama sekali

**Cara Pengukuran:**

- Bug tracking melalui issue tracker (GitHub, Jira, dll)
- Classification: Critical, High, Medium, Low
- Target: 0 critical, <5 high priority bugs

#### 4.5.2 System Uptime

**Metric:** Waktu aplikasi dapat digunakan (untuk offline apps, ini berarti app stability)**Target:** 99.5% app stability (minimal crash)**Cara Pengukuran:**

- Crash rate < 0.5%
- Error rate < 1%
- Track melalui crash reporting tool (Firebase Crashlytics, Sentry, dll)

#### 4.5.3 Performance Metrics

**Metric:** Performa aplikasi**Target:**

- App launch time < 3 seconds
- Screen transition < 500ms
- Database query < 100ms untuk query sederhana
- Smooth scrolling (60 FPS)

### 4.6 Metrik Bisnis (Business Metrics)

#### 4.6.1 Cost per Acquisition (CPA)

**Metric:** Biaya untuk mendapatkan 1 pengguna baru**Target:** Minimal (karena ini produk akademik, marketing budget terbatas)**Cara Pengukuran:**

- Jika ada marketing spend, hitung: Total Marketing Cost / Jumlah Registrasi Baru

#### 4.6.2 Feature Usage Distribution

**Metric:** Distribusi penggunaan fitur**Target:**

- POS: digunakan oleh 90%+ pengguna
- Menu Management: 80%+ pengguna
- Inventory: 70%+ pengguna
- Reports: 60%+ pengguna

### 4.7 Dashboard Metrik

Semua metrik di atas akan ditampilkan di:

- Internal analytics dashboard (untuk tim development)
- Admin panel (jika ada di future)
- Monthly/quarterly reports

---

## 5. User Persona dan User Stories

### 5.1 User Persona

#### Persona 1: Budi Santoso - Pemilik Warung Makan Kecil

**Demografi:**

- Umur: 45 tahun
- Pekerjaan: Pemilik "Warung Makan Sederhana"
- Lokasi: Kota Menengah di Jawa
- Pengalaman Teknologi: Menengah (bisa pakai WhatsApp, Facebook, smartphone dasar)
- Pendidikan: SMA

**Latar Belakang:**
Budi memiliki warung makan keluarga yang sudah berjalan 10 tahun. Warung ini dikelola oleh dirinya, istri, dan 2 karyawan. Penjualan harian sekitar 50-100 porsi dengan omzet harian 1-3 juta rupiah.

**Tantangan:**

- Kesulitan mencatat stok bahan baku (sering kehabisan atau overstock)
- Tidak tahu menu mana yang paling menguntungkan
- Proses transaksi masih manual dengan kalkulator
- Tidak ada catatan transaksi yang rapi

**Kebutuhan:**

- Sistem yang mudah digunakan, tidak perlu training panjang
- Bisa bekerja offline (koneksi internet di daerahnya tidak stabil)
- Harganya terjangkau atau gratis
- Bisa digunakan di smartphone Android yang dia punya

**Tujuan:**

- Mengurangi pemborosan bahan baku
- Meningkatkan efisiensi operasional
- Memahami profitabilitas menu
- Menghemat waktu dalam pencatatan

**Pain Points:**

- Takut dengan teknologi yang terlalu kompleks
- Khawatir data hilang jika device rusak
- Tidak punya waktu untuk belajar sistem yang rumit

#### Persona 2: Siti Nurhaliza - Manajer Restoran Menengah

**Demografi:**

- Umur: 32 tahun
- Pekerjaan: Manajer "Restoran Nusantara"
- Lokasi: Kota Besar di Indonesia
- Pengalaman Teknologi: Tinggi (aktif pakai berbagai aplikasi mobile dan desktop)
- Pendidikan: S1 Manajemen

**Latar Belakang:**
Siti mengelola restoran dengan 15 karyawan, omzet harian 5-10 juta rupiah. Restoran ini memiliki 50+ menu dan menggunakan berbagai bahan baku. Pemilik restoran meminta Siti untuk membuat sistem manajemen yang lebih profesional.

**Tantangan:**

- Mengelola banyak menu dan bahan baku
- Perlu laporan untuk owner
- Tracking stok yang akurat untuk cost control
- Analisis profitabilitas menu

**Kebutuhan:**

- Sistem yang profesional dengan laporan komprehensif
- Multi-platform (bisa pakai di tablet untuk kasir, di laptop untuk laporan)
- Export laporan untuk stakeholder
- Integrasi data yang baik antar fitur

**Tujuan:**

- Meningkatkan profit margin dengan kontrol cost yang baik
- Memberikan insight bisnis yang actionable untuk owner
- Mempercepat proses transaksi
- Meningkatkan akurasi inventory

**Pain Points:**

- Sistem yang ada di pasaran terlalu mahal
- Sistem berbasis cloud lambat saat internet tidak stabil
- Sulit melatih karyawan untuk sistem yang kompleks

#### Persona 3: Ahmad Fauzi - Wirausahawan Kuliner Muda

**Demografi:**

- Umur: 28 tahun
- Pekerjaan: Pemilik "Kedai Kopi Modern"
- Lokasi: Kota Metropolitan
- Pengalaman Teknologi: Sangat Tinggi (tech-savvy, early adopter)
- Pendidikan: S1 Teknik Informatika

**Latar Belakang:**
Ahmad baru membuka kedai kopi 1 tahun lalu. Bisnisnya berkembang cepat dan sekarang punya 2 outlet. Dia ingin sistem manajemen yang bisa membantu scale bisnisnya.

**Tantangan:**

- Butuh sistem yang scalable
- Ingin analisis data yang mendalam
- Perlu sistem yang bisa backup data
- Ingin fitur yang bisa berkembang seiring bisnis

**Kebutuhan:**

- Sistem modern dengan UI/UX yang baik
- Export data untuk analisis lanjutan
- Potensi untuk multi-outlet di masa depan
- Integration-ready untuk tools lain

**Tujuan:**

- Membuat keputusan berbasis data
- Meningkatkan efisiensi operasional
- Memiliki sistem yang bisa grow dengan bisnis
- Professional image untuk investor

**Pain Points:**

- Sistem gratis biasanya kurang lengkap
- Sistem berbayar biasanya terlalu mahal untuk startup
- Tidak ingin locked-in dengan vendor tertentu

### 5.2 User Stories

#### Epic 1: Authentication & Onboarding

**US-001:** Sebagai pengguna baru, saya ingin bisa mendaftarkan restoran saya dengan mudah, sehingga saya bisa mulai menggunakan aplikasi tanpa kesulitan.

**US-002:** Sebagai pengguna, saya ingin bisa login dengan email dan password, sehingga saya bisa mengakses aplikasi dengan aman.

**US-003:** Sebagai pengguna, saya ingin aplikasi mengingat session saya, sehingga saya tidak perlu login berulang kali.

**US-004:** Sebagai pengguna, saya ingin bisa mengubah profil dan informasi restoran saya, sehingga data selalu up-to-date.

#### Epic 2: Menu Management

**US-005:** Sebagai pemilik restoran, saya ingin bisa membuat kategori menu, sehingga saya bisa mengorganisir menu dengan rapi.

**US-006:** Sebagai pemilik restoran, saya ingin bisa menambahkan menu baru dengan foto, nama, harga, dan deskripsi, sehingga pelanggan bisa melihat menu dengan jelas.

**US-007:** Sebagai pemilik restoran, saya ingin bisa mengupdate harga menu, sehingga harga selalu sesuai dengan kondisi terkini.

**US-008:** Sebagai pemilik restoran, saya ingin bisa menonaktifkan menu yang sedang tidak tersedia, sehingga tidak muncul di POS.

**US-009:** Sebagai pemilik restoran, saya ingin bisa melihat semua menu dalam grid yang menarik, sehingga mudah di-browse.

#### Epic 3: Recipe Management

**US-010:** Sebagai pemilik restoran, saya ingin bisa membuat resep untuk setiap menu (bahan apa saja yang diperlukan), sehingga saya bisa tahu cost price menu.

**US-011:** Sebagai pemilik restoran, saya ingin aplikasi menghitung cost price menu secara otomatis dari resep, sehingga saya tidak perlu menghitung manual.

**US-012:** Sebagai pemilik restoran, saya ingin bisa melihat riwayat perubahan resep, sehingga saya tahu kapan dan kenapa cost price berubah.

#### Epic 4: Inventory Management

**US-013:** Sebagai pemilik restoran, saya ingin bisa menambahkan bahan baku dengan harga beli dan stok awal, sehingga inventori saya ter-record dengan baik.

**US-014:** Sebagai pemilik restoran, saya ingin aplikasi memberi alert saat stok bahan baku hampir habis, sehingga saya bisa restock sebelum kehabisan.

**US-015:** Sebagai pemilik restoran, saya ingin aplikasi otomatis mengurangi stok saat ada penjualan menu, sehingga stok selalu akurat tanpa saya input manual.

**US-016:** Sebagai pemilik restoran, saya ingin bisa melakukan stock opname untuk rekonsiliasi stok fisik dengan sistem, sehingga data selalu akurat.

**US-017:** Sebagai pemilik restoran, saya ingin bisa menyesuaikan stok secara cepat (untuk retur, spoilage, dll), sehingga perubahan stok ter-record dengan baik.

#### Epic 5: Point of Sales (POS)

**US-018:** Sebagai kasir, saya ingin bisa melihat semua menu yang tersedia dalam layout yang mudah diakses, sehingga transaksi berjalan cepat.

**US-019:** Sebagai kasir, saya ingin bisa menambahkan menu ke keranjang dengan mudah, sehingga proses order tidak memakan waktu lama.

**US-020:** Sebagai kasir, saya ingin aplikasi menghitung total, pajak, service charge, dan kembalian secara otomatis, sehingga tidak ada kesalahan hitung.

**US-021:** Sebagai kasir, saya ingin bisa mencetak struk setelah transaksi, sehingga pelanggan mendapat bukti pembayaran.

**US-022:** Sebagai kasir, saya ingin bisa melihat riwayat transaksi hari ini, sehingga saya bisa cek ulang jika diperlukan.

**US-023:** Sebagai pemilik restoran, saya ingin bisa filter menu berdasarkan kategori di POS, sehingga lebih mudah menemukan menu saat order ramai.

#### Epic 6: Reports & Analytics

**US-024:** Sebagai pemilik restoran, saya ingin melihat dashboard dengan ringkasan penjualan hari ini, sehingga saya tahu performa bisnis secara cepat.

**US-025:** Sebagai pemilik restoran, saya ingin melihat grafik pendapatan beberapa hari terakhir, sehingga saya bisa melihat trend penjualan.

**US-026:** Sebagai pemilik restoran, saya ingin melihat menu mana yang paling laris, sehingga saya bisa fokus pada menu yang menguntungkan.

**US-027:** Sebagai pemilik restoran, saya ingin bisa export laporan penjualan ke PDF atau Excel, sehingga saya bisa share dengan investor atau untuk keperluan pajak.

**US-028:** Sebagai pemilik restoran, saya ingin melihat analisis margin per kategori menu, sehingga saya tahu kategori mana yang paling profitable.

**US-029:** Sebagai pemilik restoran, saya ingin melihat cash flow (pemasukan vs pengeluaran), sehingga saya tahu kondisi keuangan restoran.

**US-030:** Sebagai pemilik restoran, saya ingin bisa catat pengeluaran dengan kategori, sehingga saya tahu kemana saja uang keluar.

#### Epic 7: Data Management

**US-031:** Sebagai pemilik restoran, saya ingin bisa export database untuk backup, sehingga data aman jika device rusak.

**US-032:** Sebagai pemilik restoran, saya ingin aplikasi bekerja offline sepenuhnya, sehingga operasional tidak terganggu jika internet mati.

### 5.3 Acceptance Criteria

Setiap user story di atas memiliki acceptance criteria yang spesifik. Contoh:

**US-015 (Auto Stock Deduction):**

- Given: Menu "Nasi Goreng" memiliki resep dengan 100g beras, 50g ayam
- When: User melakukan transaksi 2 porsi Nasi Goreng
- Then:
  - Stok beras berkurang 200g
  - Stok ayam berkurang 100g
  - Timestamp bahan baku ter-update
  - Riwayat perubahan stok ter-record

**US-027 (Export Report):**

- Given: User ingin export laporan penjualan bulan ini
- When: User klik tombol "Export PDF"
- Then:
  - PDF berhasil di-generate dengan format professional
  - PDF berisi: Header dengan nama restoran, periode laporan, KPI summary, detail transaksi, grafik
  - File bisa di-share via WhatsApp, Email, atau aplikasi lain

---

## 6. Alur Pengguna dan Desain (User Flow and Design)

### 6.1 User Flow Diagram

#### 6.1.1 Flow: Onboarding (First Time User)

```
Start
  ↓
Splash Screen
  ↓
Check Session
  ↓
No Session? → Register Screen
  ↓
Input Restaurant Info
  ↓
Create Account (Email, Password)
  ↓
Auto-create Database
  ↓
Redirect to Login
  ↓
Login Screen
  ↓
Input Credentials
  ↓
Validate
  ↓
Success → Save Session
  ↓
Dashboard
```

#### 6.1.2 Flow: Daily POS Transaction

```
POS Screen
  ↓
Browse Menu (Filter by Category)
  ↓
Select Menu Item
  ↓
Add to Cart
  ↓
[Repeat until order complete]
  ↓
Click Checkout
  ↓
Payment Dialog
  ↓
Input Cash Received (if cash)
  ↓
System Calculate: Subtotal + Tax + Service Charge = Total
  ↓
System Calculate: Change = Cash Received - Total
  ↓
Confirm Payment
  ↓
Save Transaction
  ↓
Auto Deduct Stock (based on recipe)
  ↓
Print Receipt (if printer available)
  ↓
Success Message
  ↓
Clear Cart
  ↓
Back to POS Screen
```

#### 6.1.3 Flow: Menu Management with Recipe

```
Menu Management Screen
  ↓
Add New Menu
  ↓
Input: Name, Description, Category, Price, Photo
  ↓
Save Menu
  ↓
Add Recipe (Link Menu to Ingredients)
  ↓
Select Ingredients
  ↓
Input Quantity Needed for Each Ingredient
  ↓
Save Recipe
  ↓
System Calculate Cost Price = Sum(Ingredient Price × Quantity)
  ↓
System Calculate Margin = Selling Price - Cost Price
  ↓
Display Menu with Cost & Margin Info
```

#### 6.1.4 Flow: Stock Opname Process

```
Inventory Screen
  ↓
View Ingredients List
  ↓
Identify Item for Opname
  ↓
Stock Opname Screen
  ↓
Select Ingredient
  ↓
Input Physical Count
  ↓
System Show: Current Stock, Physical Count, Difference
  ↓
Review Adjustment
  ↓
Confirm
  ↓
Update Stock in System
  ↓
Save Opname Record
  ↓
Show Success Message
```

### 6.2 Navigation Structure

```
App Shell
├── Dashboard (Tab 1)
│   └── Overview with KPI & Charts
│
├── Menu Management (Tab 2)
│   ├── Menu Categories
│   │   ├── List Categories
│   │   ├── Add/Edit Category
│   │   └── Delete Category
│   └── Menu Items
│       ├── List Menu Items (Grid/List View)
│       ├── Add/Edit Menu Item
│       ├── Menu Recipes (Link to Recipe Management)
│       └── Delete Menu Item
│
├── Inventory (Tab 3)
│   ├── Ingredients List
│   │   ├── Add/Edit Ingredient
│   │   ├── Stock Adjustment
│   │   └── Delete Ingredient
│   ├── Stock Opname
│   │   ├── Opname Form
│   │   └── Opname History
│   └── Recipes (can also access from Menu)
│       ├── List Recipes
│       ├── Add/Edit Recipe
│       └── Recipe Versions
│
├── POS (Tab 4)
│   ├── POS Interface
│   │   ├── Menu Selection
│   │   └── Cart Management
│   ├── Checkout
│   │   ├── Payment Dialog
│   │   └── Receipt Print
│   └── Transaction History
│       ├── List Transactions
│       └── Transaction Detail
│
├── Reports (Tab 5)
│   ├── Sales Reports
│   │   ├── KPI Dashboard
│   │   ├── Revenue Charts
│   │   └── Category Analysis
│   ├── Financial Dashboard
│   │   ├── Margin Dashboard
│   │   ├── Payment Methods Dashboard
│   │   ├── Cash Flow Dashboard
│   │   ├── Tax Report
│   │   ├── Expense Management
│   │   └── Supplier & PO Management
│   └── Export Reports
│       ├── Export PDF
│       └── Export Excel
│
└── Profile (Drawer/Action)
    ├── User Profile
    │   ├── Edit Profile
    │   └── Change Photo
    ├── Restaurant Info
    │   └── Edit Restaurant Info
    └── Settings
        ├── Export/Backup Database
        └── Logout
```

### 6.3 Design System

#### 6.3.1 Color Palette

**Primary Colors:**

- Primary: `#6366F1` (Premium Indigo)
- Secondary: `#14B8A6` (Modern Teal)
- Surface: `#FFFFFF` (Pure White)
- Background: `#FAFAFA` (Light Gray)

**Semantic Colors:**

- Success: `#10B981` (Green)
- Warning: `#F59E0B` (Amber)
- Error: `#EF4444` (Red)
- Info: `#3B82F6` (Blue)

**Text Colors:**

- Primary Text: `#0F172A` (Dark Slate)
- Secondary Text: `#475569` (Slate)
- Tertiary Text: `#64748B` (Light Slate)
- Text on Primary: `#FFFFFF`

**Chart Colors:**

- Array of colors untuk pie/bar charts: `[#6366F1, #14B8A6, #F59E0B, #EF4444, #8B5CF6, #EC4899]`

#### 6.3.2 Typography

**Font Family:** System default (Roboto on Android, SF Pro on iOS)

**Text Styles:**

- Display Large: 32sp, Bold (800)
- Display Medium: 28sp, Bold (700)
- Display Small: 24sp, SemiBold (600)
- Headline Large: 20sp, SemiBold (600)
- Headline Medium: 18sp, SemiBold (600)
- Title Large: 16sp, SemiBold (600)
- Title Medium: 14sp, Medium (500)
- Body Large: 16sp, Regular (400)
- Body Medium: 14sp, Regular (400)
- Label Large: 14sp, Medium (500)
- Label Small: 12sp, Medium (500)

#### 6.3.3 Spacing System

- XS: 4px
- SM: 8px
- MD: 16px
- LG: 24px
- XL: 32px
- XXL: 48px

#### 6.3.4 Component Library

**Buttons:**

- Primary Button: Full width, rounded corners (16px), primary color, white text
- Secondary Button: Outlined style, primary color border
- Text Button: Text only, primary color
- Icon Button: Circular, 40x40dp

**Input Fields:**

- Text Field: Filled style, rounded (16px), light background
- Dropdown: Consistent dengan text field
- Date Picker: Native platform picker

**Cards:**

- Elevation: 0 (flat design)
- Border: 1px, light gray
- Border Radius: 20px
- Padding: 16px

**Lists:**

- List Item: Height 56dp minimum
- Divider: 1px, light gray, 20px spacing

### 6.4 Screen Layouts

#### 6.4.1 Dashboard Layout

```
┌─────────────────────────────────┐
│  App Bar: Dashboard             │
├─────────────────────────────────┤
│  KPI Cards (Grid 2x2)           │
│  ┌─────────┐  ┌─────────┐      │
│  │ Revenue │  │Transaksi│      │
│  └─────────┘  └─────────┘      │
│  ┌─────────┐  ┌─────────┐      │
│  │AvgOrder │  │BestSeller│      │
│  └─────────┘  └─────────┘      │
├─────────────────────────────────┤
│  Revenue Chart (Line)           │
│  [Graph showing 7 days]        │
├─────────────────────────────────┤
│  Alerts Section                 │
│  ⚠️ 3 items low stock            │
│  ❌ 1 item out of stock         │
├─────────────────────────────────┤
│  Recent Transactions            │
│  - Transaction 1                │
│  - Transaction 2                │
│  - Transaction 3                │
└─────────────────────────────────┘
```

#### 6.4.2 POS Layout (Mobile)

```
┌─────────────────────────────────┐
│  App Bar: POS    [Search] [Filter]│
├─────────────────────────────────┤
│  Category Tabs (Scrollable)    │
│  [All] [Makanan] [Minuman] ... │
├─────────────────────────────────┤
│  Menu Grid (Scrollable)         │
│  ┌────┐ ┌────┐ ┌────┐          │
│  │Menu│ │Menu│ │Menu│          │
│  │ 1  │ │ 2  │ │ 3  │          │
│  └────┘ └────┘ └────┘          │
│  ┌────┐ ┌────┐ ┌────┐          │
│  │Menu│ │Menu│ │Menu│          │
│  │ 4  │ │ 5  │ │ 6  │          │
│  └────┘ └────┘ └────┘          │
├─────────────────────────────────┤
│  Cart Section (Fixed Bottom)    │
│  Items in cart: 3               │
│  Total: Rp 75.000               │
│  [View Cart] → [Checkout]       │
└─────────────────────────────────┘
```

#### 6.4.3 Menu Management Layout

```
┌─────────────────────────────────┐
│  App Bar: Menu    [+ Add Menu]  │
├─────────────────────────────────┤
│  View Toggle: [Grid] [List]     │
│  Search: [_______________]      │
│  Filter: [All Categories ▼]     │
├─────────────────────────────────┤
│  Menu Grid/List                 │
│  ┌─────────────────────────┐    │
│  │ [Photo] Nasi Goreng     │    │
│  │         Rp 15.000       │    │
│  │         [Edit] [Delete] │    │
│  └─────────────────────────┘    │
│  ...                            │
└─────────────────────────────────┘
```

### 6.5 Responsive Design

**Breakpoints:**

- Mobile: < 600px width
- Tablet: 600px - 1024px width
- Desktop: > 1024px width

**Adaptations:**

- Mobile: Stack layout, single column, bottom navigation
- Tablet: Split screen where applicable, 2-column grid for cards
- Desktop: Multi-column layout, sidebar navigation option

---

## 7. Analitik (Analytics)

### 7.1 Events yang Perlu Ditrack

#### 7.1.1 User Events

- `user_registered` - Ketika user baru mendaftar

  - Properties: `timestamp`, `restaurant_name`, `user_email`
- `user_logged_in` - Ketika user login

  - Properties: `timestamp`, `login_method` (auto/s manual)
- `user_logged_out` - Ketika user logout

  - Properties: `timestamp`
- `profile_updated` - Ketika user update profil

  - Properties: `timestamp`, `field_updated` (name/email/photo/restaurant_info)

#### 7.1.2 Feature Usage Events

- `menu_category_created` - Kategori menu dibuat

  - Properties: `timestamp`, `category_name`
- `menu_item_created` - Menu item dibuat

  - Properties: `timestamp`, `menu_name`, `category`, `price`, `has_photo`
- `menu_item_updated` - Menu item di-update

  - Properties: `timestamp`, `menu_id`, `field_updated`
- `recipe_created` - Resep dibuat

  - Properties: `timestamp`, `menu_item_id`, `ingredient_count`
- `ingredient_created` - Bahan baku dibuat

  - Properties: `timestamp`, `ingredient_name`, `category`
- `stock_opname_performed` - Stock opname dilakukan

  - Properties: `timestamp`, `ingredient_count`, `total_adjustment`
- `pos_transaction_completed` - Transaksi POS selesai

  - Properties: `timestamp`, `transaction_id`, `total_amount`, `item_count`, `payment_method`
- `report_viewed` - Laporan dilihat

  - Properties: `timestamp`, `report_type`, `period`
- `report_exported` - Laporan di-export

  - Properties: `timestamp`, `report_type`, `export_format` (PDF/Excel)

#### 7.1.3 Error Events

- `error_occurred` - Error terjadi

  - Properties: `timestamp`, `error_type`, `error_message`, `screen`
- `crash_occurred` - App crash

  - Properties: `timestamp`, `crash_message`, `stack_trace`

#### 7.1.4 Performance Events

- `screen_load_time` - Waktu load screen

  - Properties: `timestamp`, `screen_name`, `load_time_ms`
- `database_query_time` - Waktu query database

  - Properties: `timestamp`, `query_type`, `query_time_ms`

### 7.2 Metrics Collection

#### 7.2.1 Daily Metrics

Untuk setiap restoran, track per hari:

- Total transaksi
- Total revenue
- Total menu items sold
- Average order value
- Number of active menu items
- Number of low stock alerts
- Number of out of stock items
- Number of stock opnames performed
- Number of expenses recorded

#### 7.2.2 User Behavior Metrics

- Sessions per day per user
- Average session duration
- Most used features
- Feature adoption rate
- Screen navigation patterns
- Time spent per screen

#### 7.2.3 Data Quality Metrics

- Stock accuracy rate (from stock opname comparisons)
- Transaction completeness rate
- Recipe coverage (berapa % menu yang punya resep)
- Data entry errors (invalid inputs, dll)

### 7.3 Analytics Implementation

#### 7.3.1 Local Analytics

Karena aplikasi offline-first, analytics akan disimpan lokal di database:

**Table: `analytics_events`**

```sql
CREATE TABLE analytics_events (
  id TEXT PRIMARY KEY,
  event_name TEXT NOT NULL,
  event_properties TEXT, -- JSON string
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  user_id TEXT,
  restaurant_id TEXT
);
```

#### 7.3.2 Analytics Dashboard (Internal)

Dashboard untuk tim development untuk melihat:

- Total registered restaurants
- Active restaurants (dalam 30 hari)
- Daily/Monthly active users
- Feature usage statistics
- Error rates
- Performance metrics

#### 7.3.3 Privacy Considerations

- User dapat opt-out dari analytics (future feature)
- Tidak collect personal information yang sensitif
- Data analytics lokal, tidak dikirim ke server tanpa consent

### 7.4 Reporting

**Weekly Reports:**

- Total registrations
- Active users
- Feature adoption
- Top errors
- Performance issues

**Monthly Reports:**

- User retention rate
- Feature usage trends
- Data quality metrics
- User satisfaction (jika ada survey)

---

## 8. Pekerjaan di Masa Depan (Future Work)

### 8.1 Short-term (Q1-Q2 2026)

#### 8.1.1 Performance & Stability

**Prioritas:** P0 (Critical)

- Optimasi database queries untuk dataset besar
- Implementasi pagination untuk list yang panjang
- Lazy loading untuk images
- Cache management yang lebih baik
- Error handling yang lebih robust
- Comprehensive crash reporting

#### 8.1.2 User Experience Enhancements

**Prioritas:** P1 (High)

- Dark mode theme
- Multi-language support (Bahasa Indonesia, English)
- Improved search dengan fuzzy matching
- Bulk operations (bulk edit menu, bulk stock adjustment)
- Shortcuts/keyboard navigation untuk desktop
- Gesture support untuk mobile

#### 8.1.3 Feature Improvements

**Prioritas:** P1 (High)

- Advanced filtering dan sorting options
- Custom date ranges untuk reports
- More chart types (bar, area charts)
- Print preview untuk struk sebelum print
- Email receipt untuk pelanggan
- Transaction notes yang lebih detail

### 8.2 Medium-term (Q3-Q4 2026)

#### 8.2.1 Multi-User Support

**Prioritas:** P1 (High)

- Multiple users per restaurant dengan role management:
  - Owner (full access)
  - Manager (most access except critical settings)
  - Cashier (POS only)
  - Staff (limited access)
- User activity log
- Permission system

#### 8.2.2 Cloud Sync (Optional)

**Prioritas:** P2 (Medium)

- Optional cloud backup (Firebase/own server)
- Sync data across multiple devices
- Conflict resolution untuk multi-device editing
- Automatic backup scheduling

#### 8.2.3 Advanced Inventory

**Prioritas:** P1 (High)

- Purchase order workflow yang lebih lengkap
- Supplier performance tracking
- Reorder point automation
- Batch/expiry date tracking
- Inventory valuation methods (FIFO, LIFO, Average)

#### 8.2.4 Table Management

**Prioritas:** P2 (Medium)

- Table/seat management
- Table layout editor
- Order per table
- Table status tracking
- Split bill per table

### 8.3 Long-term (2027+)

#### 8.3.1 Integration & Ecosystem

**Prioritas:** P2 (Medium)

- Payment gateway integration (Midtrans, Xendit)
- Food delivery platform integration (GoFood, GrabFood, ShopeeFood)
- Accounting software integration (Jurnal, Accurate)
- E-commerce integration untuk online ordering
- QR code menu untuk pelanggan

#### 8.3.2 Advanced Analytics

**Prioritas:** P2 (Medium)

- Predictive analytics (sales forecasting)
- Inventory optimization suggestions
- Menu profitability recommendations
- Customer analytics (jika ada data customer)
- Business intelligence dashboard

#### 8.3.3 Advanced Features

**Prioritas:** P2-P3 (Medium-Low)

- Discount & promotion management
- Loyalty program
- Multi-outlet management
- Franchise management
- Supply chain management
- HR management (shift scheduling, payroll)

#### 8.3.4 Platform Expansion

**Prioritas:** P3 (Low)

- Web application (full-featured, bukan PWA)
- API untuk third-party integrations
- White-label solution untuk reseller
- Industry-specific versions (cafe, bakery, etc.)

### 8.4 Research & Experimentation

#### 8.4.1 AI/ML Features (Experimental)

- Menu recommendation based on sales data
- Price optimization suggestions
- Demand forecasting
- Anomaly detection (fraud, unusual transactions)

#### 8.4.2 New Technologies

- Augmented Reality untuk menu display
- Voice commands untuk POS
- IoT integration (smart scales, temperature sensors)

### 8.5 Prioritization Matrix

Features di masa depan akan diprioritaskan berdasarkan:

1. **User Demand** - Berapa banyak user yang request fitur ini
2. **Business Value** - Apakah fitur ini meningkatkan value proposition
3. **Technical Feasibility** - Apakah feasible untuk diimplementasi
4. **Resource Required** - Berapa banyak effort yang dibutuhkan

---

## 9. Asumsi, Batasan, dan Ketergantungan

### 9.1 Asumsi (Assumptions)

#### 9.1.1 Asumsi Teknis

1. **Platform Support**

   - Android adalah platform primary target (80%+ users di Indonesia)
   - iOS support adalah secondary priority
   - Desktop platforms (Windows, Linux, macOS) adalah nice-to-have
2. **Device Capabilities**

   - Device memiliki minimal 2GB RAM
   - Storage cukup untuk database lokal (estimasi 10-50MB per restoran)
   - Device memiliki kamera untuk foto menu (optional)
   - Device support SQLite natively
3. **User Technical Literacy**

   - User familiar dengan smartphone dasar (bisa pakai WhatsApp, dll)
   - User tidak perlu pengetahuan teknis untuk menggunakan aplikasi
   - Training minimal diperlukan (maksimal 30 menit)
4. **Usage Patterns**

   - Satu device per restoran (atau satu user account per restoran)
   - Offline-first usage (tidak selalu ada internet)
   - Usage intensif (multiple transactions per hari)
   - Data akan bertambah seiring waktu (perlu optimasi untuk dataset besar)

#### 9.1.2 Asumsi Bisnis

1. **Market Acceptance**

   - Ada demand untuk solusi offline-first di pasar
   - Price point gratis/freemium acceptable untuk market
   - User akan melihat value dari sistem yang integrated
2. **User Behavior**

   - User akan menggunakan fitur utama (POS, Inventory, Reports)
   - User akan melakukan stock opname secara berkala
   - User akan maintain recipe untuk semua menu (ideal case)
3. **Competition**

   - Tidak akan ada competitor besar yang masuk market dengan solusi serupa dalam 6 bulan pertama
   - Existing solutions (Moka, Odoo, dll) terlalu mahal untuk target market

#### 9.1.3 Asumsi Akademik

1. **Timeline**

   - Proyek harus selesai sebelum UAS
   - UAT dapat dilakukan dalam 2-3 minggu
   - Tidak ada major blocker yang tidak terduga
2. **Resources**

   - Tim development cukup untuk maintain dan improve aplikasi
   - Budget terbatas untuk marketing dan infrastructure

### 9.2 Batasan (Constraints)

#### 9.2.1 Teknis

1. **Database Limitations**

   - SQLite memiliki limit ukuran database (max 140TB, tapi praktis <1GB untuk performance)
   - SQLite concurrent writes terbatas (satu writer at a time)
   - Tidak support advanced SQL features seperti stored procedures
2. **Platform Limitations**

   - Flutter Web masih memiliki beberapa limitations
   - Print functionality terbatas (perlu printer support)
   - Camera access memerlukan permissions yang mungkin ditolak user
3. **Offline Limitations**

   - Tidak ada real-time sync antar devices
   - Tidak ada cloud backup otomatis (kecuali diimplementasi)
   - Conflict resolution untuk multi-device editing tidak ada
4. **Performance**

   - Query bisa lambat jika database sangat besar (>10,000 transactions)
   - Image loading bisa lambat jika banyak foto menu high-resolution
   - UI bisa lag jika terlalu banyak widgets di screen

#### 9.2.2 Fungsional

1. **Feature Limitations**

   - Tidak ada multi-user concurrent access (untuk MVP)
   - Tidak ada advanced accounting (hanya basic reports)
   - Tidak ada integration dengan external systems (untuk MVP)
   - Tidak ada real-time notifications
2. **Data Limitations**

   - Tidak ada historical data migration dari sistem lain
   - Tidak ada import/export format standar (CSV, dll) - hanya custom format
   - Tidak ada data validation terhadap external sources

#### 9.2.3 Bisnis

1. **Marketing Constraints**

   - Budget marketing terbatas (academic project)
   - Tidak ada dedicated sales team
   - Relies on word-of-mouth dan organic growth
2. **Support Constraints**

   - Support terbatas (tidak ada 24/7 support)
   - Documentation mungkin tidak lengkap untuk semua edge cases
   - Update dan bug fixes mengikuti timeline academic

#### 9.2.4 Regulasi & Legal

1. **Data Privacy**

   - Belum ada privacy policy formal (perlu untuk production)
   - Tidak ada GDPR compliance (jika expand ke EU)
   - Data stored locally, tapi perlu inform user tentang data handling
2. **Business Registration**

   - Aplikasi ini untuk academic purpose, belum ada business entity formal
   - Monetization future perlu legal structure

### 9.3 Ketergantungan (Dependencies)

#### 9.3.1 Teknis

1. **Flutter Framework**

   - Ketergantungan pada Flutter SDK updates
   - Ketergantungan pada third-party packages:
     - `sqflite` untuk database
     - `provider` untuk state management
     - `fl_chart` untuk charts
     - `pdf`, `excel` untuk export
     - Dan 20+ packages lainnya
   - Jika package deprecated atau tidak maintain, perlu mencari alternatif
2. **Platform Dependencies**

   - Android: Minimum SDK 21 (Android 5.0)
   - iOS: Minimum iOS 12.0
   - Perlu update jika platform minimum requirements berubah
3. **Device Dependencies**

   - SQLite support dari OS
   - File system access untuk export/backup
   - Camera access untuk foto menu
   - Print functionality (optional)

#### 9.3.2 External Services (Future)

1. **Cloud Services (Jika implement cloud sync)**

   - Firebase / AWS / Own server
   - Ketergantungan pada service availability
   - Cost considerations
2. **Third-party Integrations (Future)**

   - Payment gateways
   - Food delivery platforms
   - Accounting software APIs
   - Ketergantungan pada API availability dan changes

#### 9.3.3 Tim & Resources

1. **Development Team**

   - Ketergantungan pada availability tim untuk maintenance
   - Skill set yang diperlukan (Flutter, SQLite, UI/UX)
2. **Testing Resources**

   - Beta testers untuk UAT
   - Devices untuk testing (various screen sizes, OS versions)
3. **Documentation**

   - User manual creation
   - Technical documentation untuk future developers

#### 9.3.4 Academic Dependencies

1. **Timeline**

   - UAS schedule
   - Academic calendar
   - Review process timeline
2. **Academic Requirements**

   - Approval dari dosen pembimbing
   - Presentation schedule
   - Documentation requirements

### 9.4 Risk Mitigation

#### 9.4.1 Technical Risks

**Risk:** Package deprecated atau tidak compatible dengan Flutter update**Mitigation:**

- Regular dependency updates
- Monitor package health
- Maintain list of alternatives

**Risk:** Database corruption atau data loss**Mitigation:**

- Regular backup feature
- Database integrity checks
- Transaction rollback on errors

**Risk:** Performance degradation dengan large dataset**Mitigation:**

- Implement pagination
- Database indexing
- Query optimization
- Data archiving strategy (future)

#### 9.4.2 Business Risks

**Risk:** Low user adoption**Mitigation:**

- Focus on user onboarding experience
- Provide sample data for easy start
- Clear value proposition
- Word-of-mouth marketing

**Risk:** Competition from established players**Mitigation:**

- Focus on unique value (offline-first, affordable)
- Quick iteration based on feedback
- Build community around product

#### 9.4.3 Academic Risks

**Risk:** Timeline tidak mencukupi**Mitigation:**

- Prioritize MVP features
- Agile development dengan frequent reviews
- Buffer time untuk unexpected issues

**Risk:** UAT tidak berjalan sesuai rencana**Mitigation:**

- Early recruitment of beta testers
- Clear UAT guidelines
- Backup plan untuk data collection

---

## APPENDIX

### A. Glosarium

- **POS**: Point of Sale - Sistem kasir untuk transaksi
- **MVP**: Minimum Viable Product - Produk dengan fitur minimal yang layak
- **SQLite**: Database SQL lokal yang embedded di aplikasi
- **COGS**: Cost of Goods Sold - Harga pokok penjualan
- **PPN**: Pajak Pertambahan Nilai
- **Stock Opname**: Proses penghitungan fisik stok
- **UAT**: User Acceptance Testing - Pengujian oleh pengguna

### B. Referensi

- Flutter Documentation: https://flutter.dev/docs
- SQLite Documentation: https://www.sqlite.org/docs.html
- Material Design 3: https://m3.material.io/

### C. Changelog

**Version 2.0 (30 Oktober 2025)**

- Complete rewrite sesuai struktur PRD standar
- Penambahan 9 bagian utama sesuai requirement
- Detail user personas dan user stories
- Comprehensive analytics plan
- Future work roadmap

**Version 1.1 (30 Oktober 2025)**

- Update PRD dengan status development
- Penambahan status build dan next steps

**Version 1.0 (Awal Oktober 2025)**

- Initial PRD creation

---

**Dokumen ini adalah living document dan akan di-update seiring perkembangan proyek.**
