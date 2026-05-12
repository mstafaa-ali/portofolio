# Requirements Document

## Introduction

Redesain komponen project card pada website portofolio agar menggunakan layout split horizontal (teks di kiri, gambar di kanan) dengan tampilan modern dan profesional. Card baru akan menampilkan informasi yang lebih kaya seperti nomor proyek, tahun, headline dampak proyek, tag kategori, dan statistik/metrik. Desain mengacu pada referensi card full-width dengan visual clean dan minimal.

## Glossary

- **Project_Card**: Komponen UI yang menampilkan informasi satu proyek dalam format card horizontal full-width dengan layout split (konten kiri, gambar kanan)
- **Project_Data**: Struktur data TypeScript yang menyimpan informasi proyek termasuk judul, deskripsi, gambar, tag, statistik, dan metadata lainnya
- **Tag_Badge**: Elemen visual berupa label/badge kecil yang menampilkan kategori proyek (contoh: "RETENTION", "GAMIFICATION")
- **Stat_Metric**: Elemen visual yang menampilkan angka statistik beserta label deskriptifnya (contoh: "+22% Trial-to-paid conversion uplift")
- **Project_Number**: Nomor urut proyek yang ditampilkan dalam format dua digit (contoh: "01", "02")
- **Project_Section**: Section pada halaman utama yang menampilkan daftar Project_Card secara vertikal
- **Navigation_Arrow**: Ikon panah di pojok kanan bawah card yang berfungsi sebagai indikator navigasi ke detail proyek

## Requirements

### Requirement 1: Struktur Data Proyek yang Diperluas

**User Story:** Sebagai developer, saya ingin memperluas struktur data proyek agar dapat menyimpan informasi tambahan seperti tag, statistik, tahun, dan headline, sehingga Project_Card baru dapat menampilkan konten yang lebih kaya.

#### Acceptance Criteria

1. THE Project_Data SHALL menyertakan field `number` bertipe string untuk nomor urut proyek dalam format dua digit dengan zero-padding (contoh: "01", "02", hingga "99")
2. THE Project_Data SHALL menyertakan field `company` bertipe string dengan panjang maksimum 100 karakter untuk nama perusahaan atau nama proyek singkat
3. THE Project_Data SHALL menyertakan field `year` bertipe string untuk rentang tahun proyek dengan format "YYYY" atau "YYYY - YYYY" (contoh: "2025" atau "2025 - 2026")
4. THE Project_Data SHALL menyertakan field `headline` bertipe string dengan panjang maksimum 150 karakter untuk judul besar yang mendeskripsikan dampak atau tujuan proyek
5. THE Project_Data SHALL menyertakan field `tags` bertipe array of string dengan minimal 1 item dan maksimal 10 item, di mana setiap tag memiliki panjang maksimum 30 karakter
6. THE Project_Data SHALL menyertakan field `stats` bertipe array of object dengan minimal 1 item dan maksimal 6 item, di mana setiap object memiliki properti `value` bertipe string (maksimum 20 karakter) dan `label` bertipe string (maksimum 50 karakter)
7. THE Project_Data SHALL menyertakan field `bgColor` bertipe string opsional yang menerima nilai CSS color yang valid (contoh: hex "#RRGGBB", rgb, atau nama warna CSS) untuk warna latar belakang area gambar pada card
8. THE Project_Data SHALL mempertahankan semua field yang sudah ada pada interface Project saat ini (`id`, `title`, `description`, `image`, `url`) tanpa mengubah tipe atau menghapusnya

### Requirement 2: Layout Split Horizontal pada Project Card

**User Story:** Sebagai pengunjung website, saya ingin melihat project card dengan layout split horizontal yang menampilkan detail proyek di sisi kiri dan gambar produk di sisi kanan, sehingga informasi proyek mudah dipahami secara visual.

#### Acceptance Criteria

1. THE Project_Card SHALL menampilkan layout dua kolom dengan area konten teks (judul, deskripsi, dan URL proyek jika tersedia dari Project_Data) di sisi kiri dan area gambar produk di sisi kanan
2. THE Project_Card SHALL menggunakan lebar penuh (100%) dari container induknya
3. WHILE viewport berukuran desktop (lebar >= 768px), THE Project_Card SHALL membagi ruang dengan rasio 50:50 antara area konten kiri dan area gambar kanan
4. WHILE viewport berukuran mobile (lebar < 768px), THE Project_Card SHALL menampilkan layout satu kolom dengan area konten teks di atas dan area gambar di bawah, masing-masing menggunakan lebar penuh
5. THE Project_Card SHALL menampilkan background berwarna cream/light pada area konten kiri
6. THE Project_Card SHALL menampilkan background berwarna atau bertekstur pada area gambar kanan sesuai field `bgColor` dari Project_Data
7. THE Project_Card SHALL menampilkan gambar produk dengan mode object-fit cover yang memenuhi seluruh area gambar tanpa distorsi aspek rasio

### Requirement 3: Konten Sisi Kiri Project Card

**User Story:** Sebagai pengunjung website, saya ingin melihat informasi proyek yang terstruktur dengan hierarki tipografi yang jelas di sisi kiri card, sehingga saya dapat memahami konteks dan dampak proyek dengan cepat.

#### Acceptance Criteria

1. THE Project_Card SHALL menampilkan elemen konten sisi kiri dalam urutan vertikal berikut dari atas ke bawah: Project_Number, baris company dan year, headline proyek, area Tag_Badge, area Stat_Metric
2. THE Project_Card SHALL menampilkan Project_Number di bagian paling atas area konten kiri
3. THE Project_Card SHALL menampilkan nama company dan year dalam satu baris di bawah Project_Number
4. THE Project_Card SHALL menampilkan headline proyek dengan font-weight bold dan ukuran font minimal 2x lebih besar dari teks company/year sebagai elemen visual utama di area konten kiri
5. THE Project_Card SHALL menampilkan maksimal 5 Tag_Badge untuk setiap item dalam array `tags` dari Project_Data
6. THE Project_Card SHALL menampilkan maksimal 4 Stat_Metric untuk setiap item dalam array `stats` dari Project_Data, dengan value ditampilkan di atas label dalam satu kolom per metrik
7. WHEN array `tags` kosong atau tidak tersedia, THE Project_Card SHALL menyembunyikan seluruh area Tag_Badge tanpa menyisakan ruang kosong
8. WHEN array `stats` kosong atau tidak tersedia, THE Project_Card SHALL menyembunyikan seluruh area Stat_Metric tanpa menyisakan ruang kosong

### Requirement 4: Konten Sisi Kanan Project Card

**User Story:** Sebagai pengunjung website, saya ingin melihat gambar produk/mockup yang besar dan menarik di sisi kanan card, sehingga saya mendapat gambaran visual dari proyek tersebut.

#### Acceptance Criteria

1. THE Project_Card SHALL menampilkan gambar proyek dari field `image` pada area kanan card dengan lebar minimum 40% dan maksimum 60% dari total lebar card
2. THE Project_Card SHALL menampilkan gambar dengan tinggi 100% dari tinggi area kanan card sehingga mengisi penuh secara vertikal
3. THE Project_Card SHALL menampilkan gambar dengan object-fit cover agar proporsi gambar terjaga tanpa distorsi
4. THE Project_Card SHALL menampilkan Navigation_Arrow di pojok kanan bawah area gambar dengan jarak 12px dari tepi kanan dan 12px dari tepi bawah area gambar
5. WHEN field `bgColor` tersedia pada Project_Data, THE Project_Card SHALL menggunakan warna tersebut sebagai background area gambar di belakang gambar
6. IF field `image` tidak tersedia atau gagal dimuat, THEN THE Project_Card SHALL menampilkan area placeholder dengan background warna netral pada sisi kanan card
7. IF field `bgColor` tidak tersedia pada Project_Data, THEN THE Project_Card SHALL menggunakan warna background default transparan pada area gambar

### Requirement 5: Interaksi dan Navigasi Project Card

**User Story:** Sebagai pengunjung website, saya ingin dapat berinteraksi dengan project card dan menavigasi ke halaman detail proyek, sehingga saya dapat melihat informasi lebih lengkap.

#### Acceptance Criteria

1. WHEN pengguna mengklik Project_Card yang memiliki field `url`, THE Project_Card SHALL membuka URL tersebut di tab baru dengan atribut `rel="noopener noreferrer"`
2. IF Project_Card tidak memiliki field `url`, THEN THE Project_Card SHALL tidak menavigasi ke halaman manapun dan tetap menampilkan konten secara statis
3. WHEN pengguna mengarahkan kursor ke Project_Card, THE Project_Card SHALL menampilkan efek hover berupa transisi scale atau shadow dengan durasi antara 200ms hingga 400ms
4. WHEN pengguna mengarahkan kursor ke Project_Card, THE Navigation_Arrow SHALL menampilkan animasi rotasi (maksimum 45 derajat) atau translate (maksimum 8px) dengan durasi antara 200ms hingga 400ms
5. IF Project_Card memiliki field `url`, THEN THE Project_Card SHALL menggunakan elemen anchor (`<a>`) sebagai wrapper utama
6. IF Project_Card tidak memiliki field `url`, THEN THE Project_Card SHALL menggunakan elemen non-interaktif (`<div>` atau `<article>`) sebagai wrapper utama

### Requirement 6: Desain Visual dan Tipografi

**User Story:** Sebagai pengunjung website, saya ingin melihat project card dengan desain visual yang clean, modern, dan profesional dengan hierarki tipografi yang jelas, sehingga portofolio terlihat menarik dan mudah dibaca.

#### Acceptance Criteria

1. THE Project_Card SHALL menggunakan border-radius sesuai design token `--radius-lg` (0.625rem) untuk memberikan tampilan card yang rounded
2. THE Project_Card SHALL menggunakan font NeutralFace (font-primary) untuk heading/headline dan Inter (font-sans) untuk body text, konsisten dengan sistem font website
3. THE Tag_Badge SHALL ditampilkan dengan style text-transform uppercase, font-size 12px, padding horizontal 12px, padding vertikal 4px, dan border 1px solid
4. THE Stat_Metric SHALL menampilkan value dengan font-weight bold dan ukuran font minimal 24px, serta label dengan font-weight normal dan ukuran font 12px
5. THE Project_Card SHALL memiliki padding internal minimal 24px pada area konten kiri dan 0px pada area gambar kanan
6. THE Project_Card SHALL memiliki jarak vertikal (gap) minimal 32px antar card dalam Project_Section

### Requirement 7: Animasi dengan GSAP

**User Story:** Sebagai pengunjung website, saya ingin melihat animasi entrance yang halus pada project card saat scrolling, sehingga pengalaman browsing terasa lebih dinamis dan engaging.

#### Acceptance Criteria

1. WHEN Project_Card memasuki viewport minimal 20% dari tinggi card terlihat saat scrolling, THE Project_Card SHALL menampilkan animasi fade-in (opacity dari 0 ke 1) dan slide-up (translateY dari 50px ke 0) menggunakan GSAP ScrollTrigger dengan durasi 0.6 detik
2. WHEN beberapa Project_Card berada dalam satu daftar yang terlihat di viewport, THE Project_Card SHALL menampilkan animasi entrance secara staggered dengan delay 0.15 detik antar card
3. THE Project_Card SHALL memiliki state awal opacity 0 dan translateY 50px sebelum animasi entrance dipicu
4. THE Project_Card SHALL menjalankan animasi entrance hanya sekali per sesi halaman, sehingga saat pengguna scroll kembali ke atas lalu ke bawah, animasi tidak terulang dan card tetap dalam state akhir (opacity 1, translateY 0)

### Requirement 8: Responsivitas dan Aksesibilitas

**User Story:** Sebagai pengunjung website dari berbagai perangkat, saya ingin project card tetap terlihat baik dan dapat diakses di semua ukuran layar, sehingga pengalaman browsing konsisten.

#### Acceptance Criteria

1. WHILE viewport berukuran mobile (kurang dari 768px), THE Project_Card SHALL menampilkan layout satu kolom penuh (full-width) dengan gambar di atas dan teks di bawah secara vertikal
2. WHILE viewport berukuran tablet (768px - 1024px), THE Project_Card SHALL menampilkan layout horizontal dengan gambar menggunakan maksimal 30% lebar dan teks menggunakan minimal 70% lebar agar konten tetap terbaca
3. THE Project_Card SHALL menyertakan atribut alt pada setiap gambar proyek yang berisi nama proyek dan deskripsi singkat fungsinya (maksimal 125 karakter)
4. THE Project_Card SHALL dapat diakses menggunakan keyboard navigation, di mana setiap card menerima fokus melalui Tab dan mengaktifkan navigasi melalui Enter, dengan focus indicator yang terlihat (outline minimal 2px)
5. THE Project_Card SHALL memiliki kontras warna minimal 4.5:1 antara teks normal dan background, serta minimal 3:1 untuk teks berukuran besar (18px ke atas), sesuai standar WCAG 2.1 Level AA
6. IF gambar proyek gagal dimuat, THEN THE Project_Card SHALL menampilkan placeholder visual berupa area dengan warna background berbeda dan ikon atau teks penanda yang mempertahankan dimensi asli gambar (tinggi dan lebar tetap konsisten dengan card lain)
