# BAKESBANGPOL ORMAS Prototype - SKT dan Keaktifan Dipisah

Prototype lokal ini memisahkan proses:

1. Pengajuan Tanda Lapor / SKT ORMAS
   - Menggunakan profil ORMAS terverifikasi.
   - Tidak meminta ulang data pendaftaran yang sudah ada.
   - Fokus pada surat permohonan, perubahan data bila ada, dokumen pendukung, verifikasi, dan output surat PDF.

2. Pelaporan Keaktifan ORMAS
   - Proses khusus laporan kegiatan berkala.
   - Tidak menghasilkan SKT/tanda lapor.
   - Fokus pada detail kegiatan, periode laporan, peserta/manfaat, wilayah kegiatan, bukti kegiatan, review, dan rekap keaktifan.

Cara menjalankan:

```bash
cd bakesbangpol-ormas-keaktifan-separated-prototype
python -m http.server 8000
```

Buka: http://localhost:8000

## Update direktori publik ORMAS
Prototype ini menambahkan tabel direktori ORMAS pada Dashboard Publik dan Dashboard Pegawai.
Data yang ditampilkan dibatasi untuk konsumsi publik: nama ORMAS, singkatan, jenis ORMAS, bidang kegiatan, wilayah umum, email/telepon organisasi, website, dan status publik.
Data internal seperti NIK, nomor HP pribadi pengurus, nomor tiket, dokumen upload, catatan verifikasi, dan status koreksi tidak ditampilkan di dashboard publik.
