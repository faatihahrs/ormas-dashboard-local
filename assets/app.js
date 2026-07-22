const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const app = $('#app');

const COLORS = {
  blue: '#5371ff',
  cyan: '#34dcdb',
  green: '#12b76a',
  yellow: '#f79009',
  red: '#f04438',
  ink: '#101828'
};

const regionData = [
  { name: 'Jakarta Pusat', total: 1205 },
  { name: 'Jakarta Utara', total: 1340 },
  { name: 'Jakarta Barat', total: 1450 },
  { name: 'Jakarta Selatan', total: 1210 },
  { name: 'Jakarta Timur', total: 1460 },
  { name: 'Kepulauan Seribu', total: 177 }
];

const fieldData = [
  { name: 'Sosial', total: 1842 },
  { name: 'Keagamaan', total: 1538 },
  { name: 'Pendidikan', total: 1262 },
  { name: 'Kepemudaan', total: 934 },
  { name: 'Kebudayaan', total: 712 },
  { name: 'Lingkungan', total: 554 }
];

const monthlyReports = [
  { month: 'Jan', total: 82 },
  { month: 'Feb', total: 96 },
  { month: 'Mar', total: 118 },
  { month: 'Apr', total: 134 },
  { month: 'Mei', total: 151 },
  { month: 'Jun', total: 169 },
  { month: 'Jul', total: 184 }
];

const publicDirectory = [
  {
    name: 'Jurnal Demokrasi',
    chair: 'Hendra Irawan',
    address: 'Gambir, Jakarta Pusat',
    field: 'Pendidikan Politik',
    region: 'Jakarta Pusat',
    status: 'Aktif'
  },
  {
    name: 'Gerakan Anti Narkoba Nasional',
    chair: 'Rizky Pratama',
    address: 'Cipayung, Jakarta Timur',
    field: 'Sosial',
    region: 'Jakarta Timur',
    status: 'Aktif'
  },
  {
    name: 'Yayasan Peduli Pendidikan Anak Bangsa',
    chair: 'Nur Aisyah',
    address: 'Pasar Minggu, Jakarta Selatan',
    field: 'Pendidikan',
    region: 'Jakarta Selatan',
    status: 'Aktif'
  },
  {
    name: 'Komunitas Lingkungan Hijau Jakarta',
    chair: 'Bima Wardana',
    address: 'Tanjung Priok, Jakarta Utara',
    field: 'Lingkungan',
    region: 'Jakarta Utara',
    status: 'Tidak Aktif'
  },
  {
    name: 'Forum Pemuda Betawi Bersatu',
    chair: 'Muhammad Fikri',
    address: 'Cengkareng, Jakarta Barat',
    field: 'Kepemudaan',
    region: 'Jakarta Barat',
    status: 'Aktif'
  },
  {
    name: 'Majelis Edukasi Sosial Nusantara',
    chair: 'Siti Rahmawati',
    address: 'Kemayoran, Jakarta Pusat',
    field: 'Sosial',
    region: 'Jakarta Pusat',
    status: 'Aktif'
  }
];

let activityReports = [
  {
    id: 'AKT-2026-0710',
    org: 'Komunitas Lingkungan Hijau Jakarta',
    activity: 'Aksi Bersih Pesisir Jakarta Utara',
    date: '2026-07-10',
    field: 'Lingkungan',
    description: 'Kegiatan gotong royong dan edukasi pengelolaan sampah pesisir.',
    photos: 3,
    status: 'Menunggu Verifikasi',
    rejectionReason: ''
  },
  {
    id: 'AKT-2026-0707',
    org: 'Yayasan Peduli Pendidikan Anak Bangsa',
    activity: 'Kelas Literasi Anak',
    date: '2026-07-07',
    field: 'Pendidikan',
    description: 'Pendampingan membaca dan menulis untuk anak usia sekolah.',
    photos: 2,
    status: 'Disetujui',
    rejectionReason: ''
  },
  {
    id: 'AKT-2026-0628',
    org: 'Jurnal Demokrasi',
    activity: 'Diskusi Pendidikan Politik Warga',
    date: '2026-06-28',
    field: 'Sosial',
    description: 'Forum diskusi partisipasi warga dan pendidikan politik.',
    photos: 3,
    status: 'Disetujui',
    rejectionReason: ''
  },
  {
    id: 'AKT-2026-0615',
    org: 'Forum Pemuda Betawi Bersatu',
    activity: 'Festival Seni Budaya Pemuda',
    date: '2026-06-15',
    field: 'Kebudayaan',
    description: 'Pentas seni dan penguatan jejaring pemuda tingkat wilayah.',
    photos: 1,
    status: 'Ditolak',
    rejectionReason: 'Foto kegiatan tidak memperlihatkan pelaksanaan kegiatan dengan jelas.'
  }
];

let selectedActivityId = activityReports[0].id;

function go(hash) {
  location.hash = hash;
}
window.go = go;

function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}
window.toast = toast;

function logoHtml() {
  return `<a class="logo" href="#home">
    <div class="logo-mark"></div>
    <div>
      <div class="logo-title">BAKESBANGPOL</div>
      <div class="logo-sub">Provinsi DKI Jakarta</div>
    </div>
  </a>`;
}

function publicHeader() {
  return `<header class="topbar">
    <div class="container topbar-inner">
      ${logoHtml()}
      <nav class="nav">
        <a href="#public-dashboard">DASHBOARD PUBLIK</a>
        <a href="#registration">PENDAFTARAN ORMAS</a>
        <a href="#ormas-login">LOGIN ORMAS</a>
      </nav>
      <div class="header-actions">
        <button class="btn blue" onclick="go('#ormas-portal')">Menu ORMAS</button>
        <button class="profile-btn" title="Dashboard Admin" onclick="go('#admin-dashboard')">👤</button>
      </div>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="footer">
    <div class="container footer-grid">
      <div>
        <h4>BAKESBANGPOL</h4>
        <p>Portal informasi dan layanan Organisasi Kemasyarakatan Provinsi DKI Jakarta.</p>
      </div>
      <div style="text-align:center">
        ${logoHtml()}
        <p>Jalan Kebon Sirih Nomor 18 Blok H<br>Lantai 15 Jakarta Pusat 10110</p>
      </div>
      <div>
        <p>✉ bakesbangpol.dki@gmail.com</p>
        <p>☏ (021) 3800590</p>
      </div>
    </div>
    <div class="container footer-copy">© 2026 Prototype Pengembangan Website ORMAS BAKESBANGPOL.</div>
  </footer>`;
}

function statusBadge(status) {
  const cls = status === 'Disetujui' || status === 'Aktif'
    ? 'green'
    : status === 'Ditolak' || status === 'Tidak Aktif'
      ? 'red'
      : 'orange';
  return `<span class="pill ${cls}">${status}</span>`;
}

function kpi(title, value, description, color = 'blue', icon = '●') {
  return `<article class="kpi ${color}">
    <div class="kpi-icon">${icon}</div>
    <div>
      <small>${title}</small>
      <strong>${value}</strong>
      <span>${description}</span>
    </div>
  </article>`;
}

function horizontalBars(items) {
  const max = Math.max(...items.map(item => item.total));
  return `<div class="chart-bars">${items.map(item => `
    <div class="bar-row">
      <span>${item.name}</span>
      <div class="bar"><i style="width:${Math.round(item.total / max * 100)}%"></i></div>
      <b>${item.total.toLocaleString('id-ID')}</b>
    </div>`).join('')}</div>`;
}

function verticalBars(items) {
  const max = Math.max(...items.map(item => item.total));
  return `<div class="vbars">${items.map(item => `
    <div class="vbar">
      <b>${item.total}</b>
      <i style="height:${Math.max(12, Math.round(item.total / max * 100))}%"></i>
      <span>${item.month || item.name}</span>
    </div>`).join('')}</div>`;
}

function mapPanel() {
  return `<div class="jakarta-map">
    <span class="tag p1">Jakarta Barat<br><b>1.450</b></span>
    <span class="tag p2">Jakarta Pusat<br><b>1.205</b></span>
    <span class="tag p3">Jakarta Utara<br><b>1.340</b></span>
    <span class="tag p4">Jakarta Selatan<br><b>1.210</b></span>
    <span class="tag p5">Jakarta Timur<br><b>1.460</b></span>
    <span class="tag p6">Kep. Seribu<br><b>177</b></span>
  </div>`;
}

function homePage() {
  return `${publicHeader()}
    <main>
      <section class="container hero">
        <div class="hero-frame">
          <div class="hero-bg-grid"></div>
          <div class="hero-badge"><span>▣</span><span>BAKESBANGPOL</span></div>
          <div class="hero-title-center">Website Organisasi Kemasyarakatan</div>
          <h1>Layanan ORMAS</h1>
        </div>
      </section>
      <section class="container">
        <div class="section-head">
          <div class="section-title">
            <div class="title-logo"></div>
            <div><h2>Layanan <span>ORMAS</span></h2><div class="under"></div></div>
          </div>
        </div>
        <div class="cards-3">
          <article class="service-card" onclick="go('#public-dashboard')">
            <div class="mini-logo"></div>
            <h3>Dashboard Publik</h3>
            <p>Informasi agregat, tren laporan keberadaan, peta sebaran, direktori, dan ringkasan ORMAS per wilayah.</p>
          </article>
          <article class="service-card" onclick="go('#registration')">
            <div class="mini-logo"></div>
            <h3>Form Pendaftaran ORMAS</h3>
            <p>Pengembangan form existing dengan pilihan Bidang Wilayah berbasis master dan penambahan Periode ORMAS.</p>
          </article>
          <article class="service-card" onclick="go('#ormas-login')">
            <div class="mini-logo"></div>
            <h3>Pelaporan Keaktifan ORMAS</h3>
            <p>ORMAS login untuk melaporkan satu kegiatan per laporan dengan maksimal tiga foto.</p>
          </article>
        </div>
      </section>
    </main>
    ${footer()}`;
}

function portalPage() {
  return `${publicHeader()}
    <main class="page">
      <div class="container">
        <div class="portal-hero">
          <div>
            <span class="pill cyan">Menu Pendaftaran ORMAS</span>
            <h1>Layanan Website ORMAS</h1>
            <p>Pilih modul sesuai kebutuhan pengguna.</p>
          </div>
          <button class="btn light" onclick="go('#home')">Kembali ke Beranda</button>
        </div>
        <div class="quick-grid module-grid">
          <article class="quick-card" onclick="go('#public-dashboard')"><h3>Dashboard Publik</h3><p>Dapat diakses masyarakat tanpa login.</p><button class="btn blue">Buka Dashboard</button></article>
          <article class="quick-card" onclick="go('#registration')"><h3>Form Pendaftaran</h3><p>Form existing dengan Bidang Wilayah dan Periode ORMAS.</p><button class="btn blue">Isi Form</button></article>
          <article class="quick-card" onclick="go('#ormas-login')"><h3>Login ORMAS</h3><p>Masuk untuk menyampaikan pelaporan keaktifan.</p><button class="btn blue">Login</button></article>
          <article class="quick-card" onclick="go('#admin-dashboard')"><h3>Dashboard Admin</h3><p>Monitoring, verifikasi laporan, dan pembaruan status keaktifan.</p><button class="btn">Buka Admin</button></article>
        </div>
      </div>
    </main>
    ${footer()}`;
}

function publicDirectoryRows() {
  return publicDirectory.map((item, index) => `
    <tr data-region="${item.region}" data-field="${item.field}">
      <td>${index + 1}</td>
      <td><b>${item.name}</b></td>
      <td>${item.chair}</td>
      <td>${item.address}</td>
      <td>${item.field}</td>
      <td>${item.region}</td>
      <td>${statusBadge(item.status)}</td>
    </tr>`).join('');
}

function publicDashboard() {
  return `${publicHeader()}
    <main class="page public-only">
      <div class="container">
        <div class="public-top">
          <section class="public-hero">
            <span class="pill cyan">Tanpa Login</span>
            <h1>Dashboard Publik ORMAS</h1>
            <p>Informasi agregat keberadaan dan keaktifan ORMAS di Provinsi DKI Jakarta.</p>
          </section>
        </div>

        <div class="filter-row public-filter-row">
          <label>Periode Data
            <select id="publicPeriod"><option>Juli 2026</option><option>Juni 2026</option><option>Mei 2026</option></select>
          </label>
          <label>Wilayah
            <select id="publicRegion" onchange="filterPublicDirectory()">
              <option value="">Seluruh DKI Jakarta</option>
              ${regionData.map(item => `<option value="${item.name}">${item.name}</option>`).join('')}
            </select>
          </label>
          <label>Bidang Kegiatan
            <select id="publicField" onchange="filterPublicDirectory()">
              <option value="">Semua Bidang</option>
              ${fieldData.map(item => `<option value="${item.name}">${item.name}</option>`).join('')}
              <option value="Pendidikan Politik">Pendidikan Politik</option>
            </select>
          </label>
          <article class="mini-card"><small>Total Wilayah</small><strong>6</strong><span>Kota/Kab Administrasi</span></article>
          <article class="mini-card success"><small>Data Terakhir</small><strong>Juli 2026</strong><span>Diperbarui berkala</span></article>
        </div>

        <div class="kpi-grid">
          ${kpi('Total ORMAS Terdata', '6.842', 'Rekap agregat se-DKI Jakarta', 'blue', '👥')}
          ${kpi('Berbadan Hukum', '3.256', '47,6% dari total ORMAS', 'green', '✓')}
          ${kpi('Non Badan Hukum / SKT', '3.586', '52,4% dari total ORMAS', 'yellow', '▤')}
          ${kpi('Kepengurusan Aktif', '5.106', '74,7% dari total ORMAS', 'green', '31')}
          ${kpi('Bidang Terbanyak', 'Sosial', '1.842 ORMAS', 'blue', '◆')}
          ${kpi('Wilayah Terbanyak', 'Jakarta Timur', '1.460 ORMAS', 'red', '⌖')}
        </div>

        <div class="chart-grid">
          <article class="panel wide">
            <h3>Grafik Tren Laporan Keberadaan ORMAS</h3>
            <p class="muted">Jumlah ORMAS berbadan hukum yang melaporkan keberadaannya setiap bulan.</p>
            ${verticalBars(monthlyReports)}
          </article>
          <article class="panel">
            <h3>Ringkasan ORMAS per Wilayah</h3>
            ${horizontalBars(regionData)}
          </article>
          <article class="panel map-panel wide">
            <h3>Peta Sebaran ORMAS</h3>
            <p class="muted">Pilih wilayah pada filter untuk menampilkan detail direktori di bawah.</p>
            ${mapPanel()}
          </article>
          <article class="panel">
            <h3>Bidang Kegiatan</h3>
            ${horizontalBars(fieldData)}
          </article>
        </div>

        <article class="panel table-panel public-directory-panel">
          <div class="panel-head">
            <div><h3>Direktori ORMAS</h3><p class="muted">Daftar ORMAS yang dapat dilihat masyarakat.</p></div>
            <button class="outline-btn" onclick="resetPublicFilter()">Reset Filter</button>
          </div>
          <div class="table-scroll">
            <table>
              <thead><tr><th>No.</th><th>Nama ORMAS</th><th>Nama Ketua</th><th>Alamat</th><th>Bidang</th><th>Wilayah</th><th>Status Keaktifan</th></tr></thead>
              <tbody id="publicDirectoryBody">${publicDirectoryRows()}</tbody>
            </table>
          </div>
        </article>
      </div>
    </main>
    ${footer()}`;
}

window.filterPublicDirectory = function () {
  const region = $('#publicRegion')?.value || '';
  const field = $('#publicField')?.value || '';
  $$('#publicDirectoryBody tr').forEach(row => {
    const regionMatch = !region || row.dataset.region === region;
    const fieldMatch = !field || row.dataset.field === field;
    row.hidden = !(regionMatch && fieldMatch);
  });
};

window.resetPublicFilter = function () {
  if ($('#publicRegion')) $('#publicRegion').value = '';
  if ($('#publicField')) $('#publicField').value = '';
  window.filterPublicDirectory();
};

function registrationPage() {
  return `${publicHeader()}
    <main class="page">
      <div class="container">
        <div class="portal-hero compact-hero">
          <div>
            <span class="pill cyan">Pengembangan Modul Existing</span>
            <h1>Form Pendaftaran ORMAS</h1>
            <p>Contoh perubahan form sesuai kebutuhan pengembangan.</p>
          </div>
        </div>
        <div class="app-form-layout registration-layout">
          <aside class="stepper-card">
            <h3>Perubahan Utama</h3>
            <div class="step-list">
              <span>1. Isi Data ORMAS</span>
              <span>2. Pilih Bidang Wilayah</span>
              <span>3. Isi Periode ORMAS</span>
              <span>4. Submit Data</span>
              <span>5. Tersimpan ke Database</span>
            </div>
            <div class="info-box">
              <b>Bidang Wilayah</b>
              <p>Diubah dari textbox menjadi dropdown dengan data master Bidang Kesbangpol.</p>
            </div>
          </aside>
          <section class="form-card">
            <form id="registrationForm" onsubmit="submitRegistration(event)">
              <div class="form-section-title"><h3>Data ORMAS</h3><p>Form existing yang disempurnakan.</p></div>
              <div class="form-grid">
                <div class="field col2"><label>Nama ORMAS</label><input required placeholder="Masukkan nama ORMAS"></div>
                <div class="field"><label>Jenis ORMAS</label><select required><option value="">Pilih jenis</option><option>Badan Hukum</option><option>Non Badan Hukum / SKT</option></select></div>
                <div class="field"><label>Email Organisasi</label><input type="email" required placeholder="nama@organisasi.id"></div>
                <div class="field col4"><label>Alamat Sekretariat</label><textarea required placeholder="Masukkan alamat sekretariat"></textarea></div>
                <div class="field col2"><label>Bidang Wilayah</label><select required><option value="">Pilih Bidang Kesbangpol</option><option>Bidang Bina Ideologi dan Wawasan Kebangsaan</option><option>Bidang Politik dan Demokrasi</option><option>Bidang Ketahanan Ekonomi, Seni, Budaya, Agama dan Kemasyarakatan</option><option>Bidang Kewaspadaan</option></select></div>
                <div class="field"><label>Periode ORMAS Mulai</label><input type="date" required></div>
                <div class="field"><label>Periode ORMAS Berakhir</label><input type="date" required></div>
              </div>
              <div class="form-action-line"><button type="button" class="outline-btn" onclick="go('#ormas-portal')">Kembali</button><button type="submit" class="primary-btn">Submit Data</button></div>
            </form>
          </section>
        </div>
      </div>
    </main>
    ${footer()}`;
}

window.submitRegistration = function (event) {
  event.preventDefault();
  toast('Data pendaftaran ORMAS tersimpan ke database (simulasi).');
  event.target.reset();
};

function loginPage() {
  return `${publicHeader()}
    <main class="page login-page">
      <div class="container login-wrap">
        <section class="form-card login-card">
          <div class="mini-logo"></div>
          <h1>Login ORMAS</h1>
          <p class="muted">Login diperlukan untuk mengakses menu Pelaporan Keaktifan ORMAS.</p>
          <form onsubmit="loginOrmas(event)">
            <div class="field"><label>Email</label><input type="email" value="ormas@example.org" required></div>
            <div class="field"><label>Password</label><input type="password" value="12345678" required></div>
            <button class="primary-btn full-button" type="submit">Login</button>
          </form>
        </section>
      </div>
    </main>
    ${footer()}`;
}

window.loginOrmas = function (event) {
  event.preventDefault();
  toast('Login berhasil (simulasi).');
  go('#activity-report');
};

const linkedOrmasAccountsV5 = [
  {
    id: 'jurnal-demokrasi',
    name: 'Jurnal Demokrasi',
    shortName: 'Jurdem',
    type: 'Non Badan Hukum / SKT',
    region: 'Gambir, Jakarta Pusat',
    status: 'Aktif dan Terverifikasi'
  },
  {
    id: 'forum-pemuda-betawi',
    name: 'Forum Pemuda Betawi Bersatu',
    shortName: 'FPBB',
    type: 'Badan Hukum',
    region: 'Cengkareng, Jakarta Barat',
    status: 'Aktif dan Terverifikasi'
  },
  {
    id: 'yayasan-pendidikan-anak',
    name: 'Yayasan Peduli Pendidikan Anak Bangsa',
    shortName: 'YPPA',
    type: 'Non Badan Hukum / SKT',
    region: 'Pasar Minggu, Jakarta Selatan',
    status: 'Aktif dan Terverifikasi'
  }
];

function selectedActivityOrmasPreviewV5(orgId = linkedOrmasAccountsV5[0].id) {
  const org = linkedOrmasAccountsV5.find(item => item.id === orgId) || linkedOrmasAccountsV5[0];
  return `<div class="org-selected-preview-v5">
    <div><small>Nama ORMAS</small><b>${org.name}</b></div>
    <div><small>Nama Singkatan</small><b>${org.shortName}</b></div>
    <div><small>Jenis ORMAS</small><b>${org.type}</b></div>
    <div><small>Wilayah Sekretariat</small><b>${org.region}</b></div>
    <div><small>Status Profil</small><span class="pill green">${org.status}</span></div>
  </div>`;
}

window.updateActivityOrmasV5 = function (orgId) {
  const preview = document.getElementById('activityOrmasPreviewV5');
  if (preview) preview.innerHTML = selectedActivityOrmasPreviewV5(orgId);
};

function activityReportPage() {
  return `${publicHeader()}
    <main class="page">
      <div class="container">
        <div class="portal-hero compact-hero">
          <div>
            <span class="pill cyan">Modul Baru</span>
            <h1>Pelaporan Keaktifan ORMAS</h1>
            <p>Satu laporan mewakili satu kegiatan. Foto maksimal tiga file.</p>
          </div>
        </div>
        <div class="app-form-layout activity-layout">
          <aside class="stepper-card">
            <h3>Alur Pelaporan</h3>
            <div class="step-list">
              <span>1. Login ORMAS</span>
              <span>2. Pilih ORMAS Pelapor</span>
              <span>3. Buka Menu Pelaporan</span>
              <span>4. Isi Form</span>
              <span>5. Upload Foto</span>
              <span>6. Submit</span>
              <span>7. Menunggu Verifikasi</span>
            </div>
            <div class="info-box">
              <b>Business Rules</b>
              <p>Berlaku untuk seluruh ORMAS, maksimal tiga foto, dan satu laporan untuk satu kegiatan.</p>
            </div>
            <div class="info-box org-policy-note-v5">
              <b>Catatan Pengelolaan Akun</b>
              <p>Prototype ini mengakomodasi kemungkinan satu akun terhubung dengan satu atau beberapa ORMAS. Jika kebijakan final menetapkan satu akun hanya untuk satu ORMAS, pilihan ORMAS dapat diisi otomatis dan disembunyikan. Jika satu akun boleh mengelola beberapa ORMAS, pilihan ini tetap wajib ditampilkan.</p>
            </div>
          </aside>
          <section class="form-card">
            <form id="activityForm" onsubmit="submitActivity(event)">
              <div class="form-section-title"><h3>ORMAS Pelapor</h3><p>Pilih organisasi yang melaksanakan kegiatan dan akan tercatat sebagai pemilik laporan.</p></div>
              <div class="org-selector-card-v5">
                <div class="field col4">
                  <label>Pilih ORMAS yang Melaporkan</label>
                  <select id="activityOrgV5" required onchange="updateActivityOrmasV5(this.value)">
                    ${linkedOrmasAccountsV5.map((org, index) => `<option value="${org.id}" ${index === 0 ? 'selected' : ''}>${org.name} (${org.shortName})</option>`).join('')}
                  </select>
                  <small class="muted">Akun login: <b>ormas@example.org</b>. Pastikan ORMAS yang dipilih sesuai dengan pelaksana kegiatan.</small>
                </div>
                <div id="activityOrmasPreviewV5">${selectedActivityOrmasPreviewV5()}</div>
              </div>

              <div class="form-section-title"><h3>Form Pelaporan Kegiatan</h3><p>Isi data satu kegiatan yang telah dilaksanakan oleh ORMAS terpilih.</p></div>
              <div class="form-grid">
                <div class="field col2"><label>Nama Kegiatan</label><input id="activityName" required placeholder="Masukkan nama kegiatan"></div>
                <div class="field"><label>Tanggal Kegiatan</label><input id="activityDate" type="date" required></div>
                <div class="field"><label>Bidang Kegiatan</label><select id="activityField" required><option value="">Pilih bidang</option>${fieldData.map(item => `<option>${item.name}</option>`).join('')}</select></div>
                <div class="field col4"><label>Keterangan</label><textarea id="activityDescription" required placeholder="Jelaskan kegiatan secara ringkas"></textarea></div>
                <div class="field col4"><label>Upload Foto</label><input id="activityPhotos" type="file" accept="image/*" multiple required><small class="muted">Maksimal 3 file foto. Satu laporan hanya untuk satu kegiatan.</small></div>
              </div>
              <div class="notice activity-notice">Setelah dikirim, laporan untuk ORMAS yang dipilih berstatus <b>Menunggu Verifikasi</b>.</div>
              <div class="form-action-line"><button type="button" class="outline-btn" onclick="go('#ormas-portal')">Kembali</button><button type="submit" class="primary-btn">Submit Laporan</button></div>
            </form>
          </section>
        </div>
      </div>
    </main>
    ${footer()}`;
}

window.submitActivity = function (event) {
  event.preventDefault();
  const files = $('#activityPhotos').files;
  if (files.length > 3) {
    toast('Foto maksimal 3 file.');
    return;
  }
  const selectedOrgId = $('#activityOrgV5').value;
  const selectedOrg = linkedOrmasAccountsV5.find(item => item.id === selectedOrgId);
  if (!selectedOrg) {
    toast('Pilih ORMAS yang akan melaporkan kegiatan.');
    return;
  }
  const report = {
    id: `AKT-2026-${String(activityReports.length + 100).padStart(4, '0')}`,
    org: selectedOrg.name,
    activity: $('#activityName').value,
    date: $('#activityDate').value,
    field: $('#activityField').value,
    description: $('#activityDescription').value,
    photos: files.length,
    status: 'Menunggu Verifikasi',
    rejectionReason: ''
  };
  activityReports.unshift(report);
  selectedActivityId = report.id;
  event.target.reset();
  setTimeout(() => updateActivityOrmasV5(linkedOrmasAccountsV5[0].id), 0);
  toast(`Laporan kegiatan ${selectedOrg.name} berhasil dikirim dan menunggu verifikasi.`);
};

function adminShell(content, active = 'dashboard') {
  return `<div class="app-shell">
    <aside class="sidebar">
      <div class="side-brand">${logoHtml()}</div>
      <nav class="side-nav">
        <a class="${active === 'dashboard' ? 'active' : ''}" href="#admin-dashboard">Dashboard Admin</a>
        <a class="${active === 'reports' ? 'active' : ''}" href="#admin-reports">Daftar Laporan Keaktifan</a>
        <a href="#home">Halaman Depan</a>
      </nav>
      <div class="side-user"><b>Administrator</b><small>BAKESBANGPOL DKI Jakarta</small></div>
    </aside>
    <section class="admin-content">
      <header class="admin-topbar"><div><h1>${active === 'reports' ? 'Daftar Laporan Keaktifan' : 'Dashboard Admin'}</h1><p>Monitoring dan verifikasi pelaporan kegiatan ORMAS</p></div><button class="btn" onclick="go('#home')">Logout</button></header>
      <main class="admin-main">${content}</main>
    </section>
  </div>`;
}

function adminReportRows() {
  return activityReports.map(report => `
    <tr>
      <td><a class="click-link" onclick="openAdminReport('${report.id}')">${report.id}</a></td>
      <td><b>${report.org}</b></td>
      <td>${report.activity}</td>
      <td>${report.field}</td>
      <td><span class="photo-count">📷 ${report.photos} foto</span></td>
      <td>${statusBadge(report.status)}</td>
      <td><button class="btn tiny" onclick="openAdminReport('${report.id}')">Verifikasi</button></td>
    </tr>`).join('');
}

window.openAdminReport = function (id) {
  selectedActivityId = id;
  go('#admin-report-detail');
};

function approvedWithinOneYear(orgName) {
  const cutoff = new Date('2025-07-22');
  return activityReports.some(report => report.org === orgName && report.status === 'Disetujui' && new Date(report.date) >= cutoff);
}

function organizationStatusRows() {
  return publicDirectory.map((item, index) => {
    const active = approvedWithinOneYear(item.name) || item.status === 'Aktif';
    return `<tr><td>${index + 1}</td><td><b>${item.name}</b></td><td>${active ? 'Ada laporan disetujui dalam 1 tahun' : 'Tidak ada laporan disetujui dalam 1 tahun'}</td><td>${statusBadge(active ? 'Aktif' : 'Tidak Aktif')}</td></tr>`;
  }).join('');
}

function adminDashboard() {
  const waiting = activityReports.filter(item => item.status === 'Menunggu Verifikasi').length;
  const approved = activityReports.filter(item => item.status === 'Disetujui').length;
  const rejected = activityReports.filter(item => item.status === 'Ditolak').length;
  const content = `<div class="kpi-grid admin-kpis">
      ${kpi('Total Laporan', activityReports.length, 'Seluruh laporan kegiatan', 'blue', '📄')}
      ${kpi('Menunggu Verifikasi', waiting, 'Perlu ditindaklanjuti admin', 'yellow', '⏳')}
      ${kpi('Disetujui', approved, 'Laporan valid', 'green', '✓')}
      ${kpi('Ditolak', rejected, 'Memiliki alasan penolakan', 'red', '×')}
      ${kpi('ORMAS Aktif', '5.106', 'Ada laporan dalam 1 tahun', 'green', '●')}
      ${kpi('ORMAS Tidak Aktif', '1.736', 'Tidak ada laporan dalam 1 tahun', 'red', '○')}
    </div>
    <div class="chart-grid admin-chart-grid">
      <article class="panel wide"><h3>Tren Pelaporan Keaktifan</h3>${verticalBars(monthlyReports)}</article>
      <article class="panel"><h3>Laporan per Bidang</h3>${horizontalBars(fieldData)}</article>
    </div>
    <article class="panel table-panel">
      <div class="panel-head"><div><h3>Laporan Menunggu Verifikasi</h3><p class="muted">Admin dapat memilih Setuju atau Tolak.</p></div><button class="outline-btn" onclick="go('#admin-reports')">Lihat Semua</button></div>
      <div class="table-scroll"><table><thead><tr><th>No. Laporan</th><th>Nama ORMAS</th><th>Nama Kegiatan</th><th>Bidang</th><th>Foto</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${adminReportRows()}</tbody></table></div>
    </article>
    <article class="panel table-panel">
      <div class="panel-head"><div><h3>Penentuan Status ORMAS</h3><p class="muted">Ada laporan disetujui dalam satu tahun = Aktif. Tidak ada = Tidak Aktif.</p></div></div>
      <div class="table-scroll"><table><thead><tr><th>No.</th><th>Nama ORMAS</th><th>Hasil Pengecekan 1 Tahun</th><th>Status</th></tr></thead><tbody>${organizationStatusRows()}</tbody></table></div>
    </article>`;
  return adminShell(content, 'dashboard');
}

function adminReportsPage() {
  const content = `<article class="panel table-panel">
    <div class="panel-head"><div><h3>Daftar Laporan Kegiatan ORMAS</h3><p class="muted">Kolom sesuai kebutuhan: Nama ORMAS, Nama Kegiatan, Bidang, Foto, dan Status.</p></div></div>
    <div class="admin-filter-row">
      <label>Status<select id="adminStatusFilter" onchange="filterAdminReports()"><option value="">Semua Status</option><option>Menunggu Verifikasi</option><option>Disetujui</option><option>Ditolak</option></select></label>
      <label>Bidang<select id="adminFieldFilter" onchange="filterAdminReports()"><option value="">Semua Bidang</option>${fieldData.map(item => `<option>${item.name}</option>`).join('')}</select></label>
    </div>
    <div class="table-scroll"><table><thead><tr><th>No. Laporan</th><th>Nama ORMAS</th><th>Nama Kegiatan</th><th>Bidang</th><th>Foto</th><th>Status</th><th>Aksi</th></tr></thead><tbody id="adminReportBody">${adminReportRows()}</tbody></table></div>
  </article>`;
  return adminShell(content, 'reports');
}

window.filterAdminReports = function () {
  const status = $('#adminStatusFilter')?.value || '';
  const field = $('#adminFieldFilter')?.value || '';
  $$('#adminReportBody tr').forEach((row, index) => {
    const report = activityReports[index];
    row.hidden = !((!status || report.status === status) && (!field || report.field === field));
  });
};

function adminReportDetail() {
  const report = activityReports.find(item => item.id === selectedActivityId) || activityReports[0];
  const content = `<div class="preview-detail">
    <section class="panel">
      <div class="panel-head"><div><h2>Verifikasi Laporan Keaktifan</h2><p class="muted">${report.id}</p></div>${statusBadge(report.status)}</div>
      <div class="detail-grid">
        <div><small>Nama ORMAS</small><b>${report.org}</b></div>
        <div><small>Nama Kegiatan</small><b>${report.activity}</b></div>
        <div><small>Tanggal Kegiatan</small><b>${new Date(report.date).toLocaleDateString('id-ID')}</b></div>
        <div><small>Bidang</small><b>${report.field}</b></div>
      </div>
      <h3>Keterangan</h3><p>${report.description}</p>
      <h3>Foto Kegiatan</h3>
      <div class="photo-preview-grid">${Array.from({ length: report.photos }, (_, index) => `<div class="photo-placeholder">📷<span>Foto ${index + 1}</span></div>`).join('')}</div>
      ${report.rejectionReason ? `<div class="notice"><b>Alasan Penolakan:</b> ${report.rejectionReason}</div>` : ''}
    </section>
    <aside class="panel verification-panel">
      <h3>Keputusan Verifikasi</h3>
      <p class="muted">Pilih Setuju atau Tolak. Penolakan wajib disertai alasan.</p>
      <label>Alasan Penolakan</label>
      <textarea id="rejectionReason" class="note-area" placeholder="Diisi jika laporan ditolak">${report.rejectionReason || ''}</textarea>
      <button class="btn success full-button" onclick="approveReport('${report.id}')">Setuju</button>
      <button class="btn danger full-button" onclick="rejectReport('${report.id}')">Tolak</button>
      <button class="outline-btn full-button" onclick="go('#admin-reports')">Kembali ke Daftar</button>
    </aside>
  </div>`;
  return adminShell(content, 'reports');
}

window.approveReport = function (id) {
  const report = activityReports.find(item => item.id === id);
  if (!report) return;
  report.status = 'Disetujui';
  report.rejectionReason = '';
  toast('Laporan disetujui dan status keaktifan diperbarui.');
  render();
};

window.rejectReport = function (id) {
  const reason = $('#rejectionReason')?.value.trim();
  if (!reason) {
    toast('Alasan penolakan wajib diisi.');
    return;
  }
  const report = activityReports.find(item => item.id === id);
  if (!report) return;
  report.status = 'Ditolak';
  report.rejectionReason = reason;
  toast('Laporan ditolak dan alasan tersimpan.');
  render();
};

function render() {
  const route = location.hash || '#home';
  if (route === '#home') app.innerHTML = homePage();
  else if (route === '#ormas-portal') app.innerHTML = portalPage();
  else if (route === '#public-dashboard') app.innerHTML = publicDashboard();
  else if (route === '#registration') app.innerHTML = registrationPage();
  else if (route === '#ormas-login') app.innerHTML = loginPage();
  else if (route === '#activity-report') app.innerHTML = activityReportPage();
  else if (route === '#admin-dashboard') app.innerHTML = adminDashboard();
  else if (route === '#admin-reports') app.innerHTML = adminReportsPage();
  else if (route === '#admin-report-detail') app.innerHTML = adminReportDetail();
  else app.innerHTML = homePage();
  window.scrollTo(0, 0);
}

// Safe placeholders so a direct refresh on #public-dashboard does not fail before the dashboard patch is initialized.
var selectedPublicYearV2 = typeof selectedPublicYearV2 === 'undefined' ? '2026' : selectedPublicYearV2;
var publicDirectoryStateV2 = typeof publicDirectoryStateV2 === 'undefined' ? { search: '', region: '', field: '', status: '', perPage: 5, page: 1 } : publicDirectoryStateV2;
var monthlyReportsByYearV2 = typeof monthlyReportsByYearV2 === 'undefined' ? { '2026': [] } : monthlyReportsByYearV2;
var publicDirectoryV2 = typeof publicDirectoryV2 === 'undefined' ? [] : publicDirectoryV2;

window.addEventListener('hashchange', () => render());
render();

/* === PATCH JULI 2026: alur Home -> Pendaftaran ORMAS -> Portal, serta fokus Dashboard Publik sesuai dokumen kebutuhan === */
var selectedPublicYearV2 = '2026';
var publicDirectoryStateV2 = { search: '', region: '', field: '', status: '', perPage: 5, page: 1 };

var monthlyReportsByYearV2 = {
  '2024': [
    { month: 'Jan', total: 48 }, { month: 'Feb', total: 53 }, { month: 'Mar', total: 61 },
    { month: 'Apr', total: 57 }, { month: 'Mei', total: 69 }, { month: 'Jun', total: 74 },
    { month: 'Jul', total: 81 }, { month: 'Agu', total: 78 }, { month: 'Sep', total: 86 },
    { month: 'Okt', total: 91 }, { month: 'Nov', total: 88 }, { month: 'Des', total: 97 }
  ],
  '2025': [
    { month: 'Jan', total: 63 }, { month: 'Feb', total: 71 }, { month: 'Mar', total: 77 },
    { month: 'Apr', total: 84 }, { month: 'Mei', total: 92 }, { month: 'Jun', total: 101 },
    { month: 'Jul', total: 108 }, { month: 'Agu', total: 114 }, { month: 'Sep', total: 119 },
    { month: 'Okt', total: 126 }, { month: 'Nov', total: 133 }, { month: 'Des', total: 141 }
  ],
  '2026': [
    { month: 'Jan', total: 82 }, { month: 'Feb', total: 96 }, { month: 'Mar', total: 118 },
    { month: 'Apr', total: 134 }, { month: 'Mei', total: 151 }, { month: 'Jun', total: 169 },
    { month: 'Jul', total: 184 }
  ]
};

var publicDirectoryV2 = [
  { name:'Jurnal Demokrasi', chair:'Hendra Irawan', region:'Jakarta Pusat', address:'Kelurahan Gambir, Kecamatan Gambir', field:'Pendidikan Politik', status:'Aktif' },
  { name:'Gerakan Anti Narkoba Nasional', chair:'Rizky Pratama', region:'Jakarta Timur', address:'Kelurahan Ceger, Kecamatan Cipayung', field:'Sosial', status:'Aktif' },
  { name:'Yayasan Peduli Pendidikan Anak Bangsa', chair:'Nur Aisyah', region:'Jakarta Selatan', address:'Kelurahan Pejaten Barat, Kecamatan Pasar Minggu', field:'Pendidikan', status:'Aktif' },
  { name:'Komunitas Lingkungan Hijau Jakarta', chair:'Bima Wardana', region:'Jakarta Utara', address:'Kelurahan Tanjung Priok, Kecamatan Tanjung Priok', field:'Lingkungan', status:'Tidak Aktif' },
  { name:'Forum Pemuda Betawi Bersatu', chair:'Muhammad Fikri', region:'Jakarta Barat', address:'Kelurahan Cengkareng Barat, Kecamatan Cengkareng', field:'Kepemudaan', status:'Aktif' },
  { name:'Majelis Edukasi Sosial Nusantara', chair:'Siti Rahmawati', region:'Jakarta Pusat', address:'Kelurahan Kebon Kosong, Kecamatan Kemayoran', field:'Sosial', status:'Aktif' },
  { name:'Lembaga Dakwah dan Sosial Al-Ikhlas', chair:'Ahmad Fauzan', region:'Jakarta Barat', address:'Kelurahan Palmerah, Kecamatan Palmerah', field:'Keagamaan', status:'Aktif' },
  { name:'Paguyuban Seni Budaya Nusantara', chair:'Dewi Larasati', region:'Jakarta Pusat', address:'Kelurahan Cikini, Kecamatan Menteng', field:'Kebudayaan', status:'Aktif' },
  { name:'Perkumpulan Kesehatan Masyarakat Mandiri', chair:'dr. Rahmat Hidayat', region:'Jakarta Selatan', address:'Kelurahan Tebet Barat, Kecamatan Tebet', field:'Kesehatan', status:'Aktif' },
  { name:'Forum Peduli Kemanusiaan Jakarta', chair:'Maya Kartika', region:'Jakarta Timur', address:'Kelurahan Jatinegara, Kecamatan Cakung', field:'Kemanusiaan', status:'Aktif' },
  { name:'Ikatan Profesi Kreatif Jakarta', chair:'Rendra Saputra', region:'Jakarta Selatan', address:'Kelurahan Melawai, Kecamatan Kebayoran Baru', field:'Profesi', status:'Aktif' },
  { name:'Komunitas Pemuda Kepulauan Seribu', chair:'Arif Maulana', region:'Kepulauan Seribu', address:'Kelurahan Pulau Panggang, Kecamatan Kepulauan Seribu Utara', field:'Kepemudaan', status:'Aktif' },
  { name:'Yayasan Sahabat Anak Jakarta', chair:'Fitri Handayani', region:'Jakarta Utara', address:'Kelurahan Pademangan Barat, Kecamatan Pademangan', field:'Sosial', status:'Aktif' },
  { name:'Forum Pendidikan Warga Jakarta', chair:'M. Ilham Akbar', region:'Jakarta Timur', address:'Kelurahan Duren Sawit, Kecamatan Duren Sawit', field:'Pendidikan', status:'Aktif' },
  { name:'Perkumpulan Budaya Betawi Lestari', chair:'Rini Kurniasih', region:'Jakarta Barat', address:'Kelurahan Srengseng, Kecamatan Kembangan', field:'Kebudayaan', status:'Aktif' },
  { name:'Komunitas Peduli Sungai Ciliwung', chair:'Dani Ramadhan', region:'Jakarta Selatan', address:'Kelurahan Rawajati, Kecamatan Pancoran', field:'Lingkungan', status:'Aktif' },
  { name:'Majelis Kerukunan Umat Jakarta', chair:'H. Abdul Karim', region:'Jakarta Pusat', address:'Kelurahan Kramat, Kecamatan Senen', field:'Keagamaan', status:'Aktif' },
  { name:'Yayasan Kemanusiaan Harapan Bersama', chair:'Elisa Natalia', region:'Jakarta Utara', address:'Kelurahan Koja, Kecamatan Koja', field:'Kemanusiaan', status:'Tidak Aktif' },
  { name:'Asosiasi Tenaga Profesional Jakarta', chair:'Dimas Prakoso', region:'Jakarta Pusat', address:'Kelurahan Bendungan Hilir, Kecamatan Tanah Abang', field:'Profesi', status:'Aktif' },
  { name:'Forum Remaja Sehat Jakarta', chair:'Nadia Putri', region:'Jakarta Timur', address:'Kelurahan Kramat Jati, Kecamatan Kramat Jati', field:'Kesehatan', status:'Aktif' },
  { name:'Komunitas Literasi Pesisir', chair:'Rudi Hartono', region:'Jakarta Utara', address:'Kelurahan Kalibaru, Kecamatan Cilincing', field:'Pendidikan', status:'Aktif' },
  { name:'Perkumpulan Sosial Warga Kebon Jeruk', chair:'Yuni Astuti', region:'Jakarta Barat', address:'Kelurahan Kebon Jeruk, Kecamatan Kebon Jeruk', field:'Sosial', status:'Aktif' },
  { name:'Forum Pemuda Kreatif Menteng', chair:'Aditya Nugraha', region:'Jakarta Pusat', address:'Kelurahan Pegangsaan, Kecamatan Menteng', field:'Kepemudaan', status:'Tidak Aktif' },
  { name:'Yayasan Pelestari Budaya Kepulauan', chair:'Nurhayati', region:'Kepulauan Seribu', address:'Kelurahan Pulau Tidung, Kecamatan Kepulauan Seribu Selatan', field:'Kebudayaan', status:'Aktif' },
  { name:'Gerakan Masyarakat Peduli Kesehatan', chair:'Andri Setiawan', region:'Jakarta Timur', address:'Kelurahan Cipinang Melayu, Kecamatan Makasar', field:'Kesehatan', status:'Aktif' }
];

function publicHeader(){
  return `<header class="topbar"><div class="container topbar-inner">${logoHtml()}<nav class="nav"><a>PROFIL <span class="chev">⌄</span></a><a>BIDANG <span class="chev">⌄</span></a><a>PPID <span class="chev">⌄</span></a><a>MEDIA <span class="chev">⌄</span></a><a>FAQ <span class="chev">⌄</span></a><a>DWP</a><a>Kanal Pengaduan (CRM) ↗</a></nav><div class="header-actions"><div class="search">⌕ <span>Cari Berita</span></div><button class="icon-btn" title="Tema">☾</button><button class="profile-btn" title="Akses Pegawai" onclick="go('#admin-dashboard')">♡</button></div></div></header>`;
}

function openOrmasModal(){
  const overlay = document.createElement('div');
  overlay.className = 'modal-backdrop';
  overlay.innerHTML = `<div class="modal"><div class="modal-top"><div><h2>Pendaftaran Ormas</h2><p>Layanan Pendaftaran Ormas digunakan untuk melihat Dashboard Publik, mengisi Form Pendaftaran ORMAS, dan mengakses Pelaporan Keaktifan setelah login.</p></div><button class="btn ghost" aria-label="Tutup" onclick="this.closest('.modal-backdrop').remove()">×</button></div><div class="modal-actions"><button class="btn" onclick="this.closest('.modal-backdrop').remove()">Tutup</button><button class="btn primary" onclick="this.closest('.modal-backdrop').remove();go('#ormas-portal')">Lanjutkan</button></div></div>`;
  document.body.appendChild(overlay);
}
window.openOrmasModal = openOrmasModal;

function homePage(){
  return `${publicHeader()}<main><section class="container hero"><div class="hero-frame"><div class="hero-bg-grid"></div><div class="hero-badge"><span>▣</span><span>BAKESBANGPOL</span></div><div class="hero-title-center">Layanan Organisasi Kemasyarakatan</div><h1>Pendaftaran Ormas</h1><div class="slider-dots"><span></span><span class="active"></span><span></span></div></div></section><section class="container"><div class="section-head"><div class="section-title"><div class="title-logo"></div><div><h2>Layanan <span>Kami</span></h2><div class="under"></div></div></div><a class="link-blue">Lihat Semua Layanan ›</a></div><div class="cards-3"><article class="service-card" onclick="toast('Prototype Pelaporan FKDM tidak termasuk ruang lingkup modul ORMAS ini')"><div class="mini-logo"></div><h3>Pelaporan FKDM</h3><p>Fitur Pelaporan FKDM digunakan untuk menginput laporan bagi anggota FKDM di lingkungan Provinsi DKI Jakarta.</p></article><article class="service-card" onclick="openOrmasModal()"><div class="mini-logo"></div><h3>Pendaftaran Ormas</h3><p>Layanan untuk membuka Dashboard Publik ORMAS, Form Pendaftaran, dan Pelaporan Keaktifan ORMAS.</p></article><article class="service-card" onclick="toast('Prototype Paskibraka tidak termasuk ruang lingkup modul ORMAS ini')"><div class="mini-logo"></div><h3>Paskibraka</h3><p>Aplikasi pendaftaran Paskibraka untuk mempermudah proses pendaftaran calon anggota Paskibraka.</p></article></div></section></main>${footer()}`;
}

function portalPage(){
  return `${publicHeader()}<main class="page"><div class="container"><div class="crumb">Beranda / Layanan / Pendaftaran Ormas</div><section class="portal-hero"><div><span class="pill cyan">Menu Pendaftaran ORMAS</span><h1>Pendaftaran & Pelaporan ORMAS</h1><p>Pilih layanan yang dibutuhkan setelah membuka menu Pendaftaran Ormas dari halaman utama.</p></div><button class="btn light" onclick="go('#home')">Kembali ke Beranda</button></section><div class="quick-grid portal-modules-v2"><article class="quick-card" onclick="go('#public-dashboard')"><span class="pill blue">Publik</span><h3>Dashboard Publik ORMAS</h3><p>Menampilkan tren laporan keberadaan, peta sebaran, direktori ORMAS, dan ringkasan per wilayah.</p><button class="btn blue">Lihat Dashboard Publik</button></article><article class="quick-card" onclick="go('#registration')"><span class="pill orange">Pendaftaran</span><h3>Form Pendaftaran ORMAS</h3><p>Mengisi data pendaftaran ORMAS dengan Bidang Wilayah berbentuk dropdown dan Periode ORMAS.</p><button class="btn">Mulai Pendaftaran</button></article><article class="quick-card" onclick="go('#ormas-login')"><span class="pill green">Keaktifan</span><h3>Pelaporan Keaktifan ORMAS</h3><p>ORMAS login untuk melaporkan satu kegiatan per laporan dan mengunggah maksimal tiga foto.</p><button class="btn">Login & Lapor Kegiatan</button></article></div></div></main>${footer()}`;
}

function selectedMonthlyReportsV2(){ return monthlyReportsByYearV2[selectedPublicYearV2] || monthlyReportsByYearV2['2026']; }
function totalReportsV2(){ return selectedMonthlyReportsV2().reduce((sum,item)=>sum+item.total,0); }

function interactiveMapV2(){
  return `<div class="jakarta-map interactive-map"><button class="tag p1 map-tag" onclick="selectPublicRegionV2('Jakarta Barat')">Jakarta Barat<br><b>1.450</b></button><button class="tag p2 map-tag" onclick="selectPublicRegionV2('Jakarta Pusat')">Jakarta Pusat<br><b>1.205</b></button><button class="tag p3 map-tag" onclick="selectPublicRegionV2('Jakarta Utara')">Jakarta Utara<br><b>1.340</b></button><button class="tag p4 map-tag" onclick="selectPublicRegionV2('Jakarta Selatan')">Jakarta Selatan<br><b>1.210</b></button><button class="tag p5 map-tag" onclick="selectPublicRegionV2('Jakarta Timur')">Jakarta Timur<br><b>1.460</b></button><button class="tag p6 map-tag" onclick="selectPublicRegionV2('Kepulauan Seribu')">Kep. Seribu<br><b>177</b></button></div>`;
}

function publicDashboard(){
  return `${publicHeader()}<main class="page public-only"><div class="container"><div class="crumb">Beranda / Pendaftaran Ormas / Dashboard Publik</div><div class="public-top"><section class="public-hero"><span class="pill cyan">Dapat Diakses Tanpa Login</span><h1>Dashboard Publik ORMAS</h1><p>Informasi publik mengenai keberadaan, persebaran, direktori, dan status keaktifan ORMAS di Provinsi DKI Jakarta.</p></section><button class="btn" onclick="go('#ormas-portal')">Kembali ke Menu ORMAS</button></div><div class="public-focus-kpis">${kpi('Total Pelaporan '+selectedPublicYearV2, totalReportsV2().toLocaleString('id-ID'), 'Laporan keberadaan ORMAS berbadan hukum', 'blue', '▥')}${kpi('Total ORMAS Terdata','6.842','Rekap agregat se-DKI Jakarta','green','👥')}${kpi('Wilayah Administrasi','6','Kota/Kabupaten Administrasi','yellow','⌖')}${kpi('Data Terakhir','Juli 2026','Diperbarui secara berkala','blue','↻')}</div><div class="public-feature-grid"><article class="panel trend-feature"><div class="panel-head"><div><h3>A. Grafik Tren Laporan Keberadaan ORMAS</h3><p class="muted">Jumlah ORMAS berbadan hukum yang melaporkan keberadaannya setiap bulan.</p></div><label class="inline-filter">Filter Tahun<select onchange="setPublicYearV2(this.value)"><option ${selectedPublicYearV2==='2024'?'selected':''}>2024</option><option ${selectedPublicYearV2==='2025'?'selected':''}>2025</option><option ${selectedPublicYearV2==='2026'?'selected':''}>2026</option></select></label></div><div class="trend-total"><small>Total Pelaporan Tahun ${selectedPublicYearV2}</small><strong>${totalReportsV2().toLocaleString('id-ID')}</strong></div>${verticalBars(selectedMonthlyReportsV2())}</article><article class="panel map-feature"><h3>B. Sebaran ORMAS</h3><p class="muted">Klik wilayah pada peta untuk melihat jumlah ORMAS dan menyaring direktori.</p>${interactiveMapV2()}<div id="regionDetailV2" class="region-detail-v2"><b>Seluruh DKI Jakarta</b><span>Total 6.842 ORMAS pada 6 wilayah administrasi.</span></div></article><article class="panel region-summary-feature"><h3>D. Ringkasan ORMAS per Wilayah</h3><p class="muted">Jumlah ORMAS berdasarkan wilayah administrasi.</p>${horizontalBars(regionData)}<div class="table-scroll"><table class="compact-region-table"><thead><tr><th>Wilayah</th><th>Jumlah ORMAS</th></tr></thead><tbody>${regionData.map(item=>`<tr><td>${item.name}</td><td><b>${item.total.toLocaleString('id-ID')}</b></td></tr>`).join('')}</tbody></table></div></article></div><article class="panel table-panel public-directory-panel"><div class="panel-head"><div><h3>C. Direktori ORMAS</h3><p class="muted">Daftar data ORMAS yang aman ditampilkan kepada masyarakat.</p></div><button class="outline-btn" onclick="resetPublicDirectoryV2()">Reset Pencarian</button></div><div class="directory-toolbar directory-toolbar-v2"><label class="directory-search-field">Cari ORMAS<input id="publicSearchV2" type="search" placeholder="Nama ORMAS, ketua, alamat, atau bidang..." oninput="updatePublicDirectoryFilterV2('search',this.value)"></label><label>Wilayah<select id="publicRegionV2" onchange="updatePublicDirectoryFilterV2('region',this.value)"><option value="">Semua Wilayah</option>${regionData.map(item=>`<option value="${item.name}">${item.name}</option>`).join('')}</select></label><label>Bidang<select id="publicFieldV2" onchange="updatePublicDirectoryFilterV2('field',this.value)"><option value="">Semua Bidang</option>${[...new Set(publicDirectoryV2.map(item=>item.field))].sort().map(item=>`<option value="${item}">${item}</option>`).join('')}</select></label><label>Status Keaktifan<select id="publicStatusV2" onchange="updatePublicDirectoryFilterV2('status',this.value)"><option value="">Semua Status</option><option>Aktif</option><option>Tidak Aktif</option></select></label><label>Baris per halaman<select id="publicPerPageV2" onchange="updatePublicDirectoryPageSizeV2(this.value)"><option value="5">5</option><option value="10">10</option><option value="25">25</option></select></label></div><div class="table-scroll"><table><thead><tr><th>No.</th><th>Nama ORMAS</th><th>Nama Ketua</th><th>Wilayah</th><th>Alamat</th><th>Bidang</th><th>Status Keaktifan</th></tr></thead><tbody id="publicDirectoryBodyV2"></tbody></table></div><div class="directory-pagination"><span id="publicDirectoryInfoV2"></span><div id="publicDirectoryPagesV2" class="directory-pages"></div></div></article></div></main>${footer()}`;
}

function filteredPublicDirectoryV2(){
  const s = publicDirectoryStateV2.search.trim().toLowerCase();
  return publicDirectoryV2.filter(item => {
    const haystack = [item.name,item.chair,item.region,item.address,item.field,item.status].join(' ').toLowerCase();
    return (!s || haystack.includes(s)) && (!publicDirectoryStateV2.region || item.region===publicDirectoryStateV2.region) && (!publicDirectoryStateV2.field || item.field===publicDirectoryStateV2.field) && (!publicDirectoryStateV2.status || item.status===publicDirectoryStateV2.status);
  });
}

function renderPublicDirectoryV2(){
  const body = document.querySelector('#publicDirectoryBodyV2');
  const pages = document.querySelector('#publicDirectoryPagesV2');
  const info = document.querySelector('#publicDirectoryInfoV2');
  if(!body || !pages || !info) return;
  const filtered = filteredPublicDirectoryV2();
  const totalPages = Math.max(1, Math.ceil(filtered.length/publicDirectoryStateV2.perPage));
  if(publicDirectoryStateV2.page>totalPages) publicDirectoryStateV2.page=totalPages;
  const start = (publicDirectoryStateV2.page-1)*publicDirectoryStateV2.perPage;
  const rows = filtered.slice(start,start+publicDirectoryStateV2.perPage);
  body.innerHTML = rows.length ? rows.map((item,index)=>`<tr><td>${start+index+1}</td><td><b>${item.name}</b></td><td>${item.chair}</td><td>${item.region}</td><td>${item.address}</td><td>${item.field}</td><td>${statusBadge(item.status)}</td></tr>`).join('') : `<tr><td class="empty-directory" colspan="7">Data ORMAS tidak ditemukan.</td></tr>`;
  const first = filtered.length ? start+1 : 0;
  const last = Math.min(start+publicDirectoryStateV2.perPage,filtered.length);
  info.textContent = `Menampilkan ${first}-${last} dari ${filtered.length} ORMAS`;
  let html = `<button class="page-btn" ${publicDirectoryStateV2.page===1?'disabled':''} onclick="changePublicDirectoryPageV2(${publicDirectoryStateV2.page-1})">Sebelumnya</button>`;
  for(let p=1;p<=totalPages;p++) html += `<button class="page-btn ${p===publicDirectoryStateV2.page?'active':''}" onclick="changePublicDirectoryPageV2(${p})">${p}</button>`;
  html += `<button class="page-btn" ${publicDirectoryStateV2.page===totalPages?'disabled':''} onclick="changePublicDirectoryPageV2(${publicDirectoryStateV2.page+1})">Berikutnya</button>`;
  pages.innerHTML = html;
}

window.updatePublicDirectoryFilterV2 = function(key,value){ publicDirectoryStateV2[key]=value; publicDirectoryStateV2.page=1; renderPublicDirectoryV2(); };
window.updatePublicDirectoryPageSizeV2 = function(value){ publicDirectoryStateV2.perPage=Number(value)||5; publicDirectoryStateV2.page=1; renderPublicDirectoryV2(); };
window.changePublicDirectoryPageV2 = function(page){ const max=Math.max(1,Math.ceil(filteredPublicDirectoryV2().length/publicDirectoryStateV2.perPage)); publicDirectoryStateV2.page=Math.min(Math.max(1,page),max); renderPublicDirectoryV2(); };
window.resetPublicDirectoryV2 = function(){ publicDirectoryStateV2={search:'',region:'',field:'',status:'',perPage:5,page:1}; ['publicSearchV2','publicRegionV2','publicFieldV2','publicStatusV2'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';}); const per=document.getElementById('publicPerPageV2');if(per)per.value='5'; updateRegionDetailV2(''); renderPublicDirectoryV2(); };
window.selectPublicRegionV2 = function(region){ publicDirectoryStateV2.region=region; publicDirectoryStateV2.page=1; const select=document.getElementById('publicRegionV2');if(select)select.value=region; updateRegionDetailV2(region); renderPublicDirectoryV2(); document.querySelector('.public-directory-panel')?.scrollIntoView({behavior:'smooth',block:'start'}); };
window.setPublicYearV2 = function(year){ selectedPublicYearV2=year; render(); };

function updateRegionDetailV2(region){
  const el=document.getElementById('regionDetailV2');
  if(!el) return;
  const item=regionData.find(row=>row.name===region);
  el.innerHTML = item ? `<b>${item.name}</b><span>${item.total.toLocaleString('id-ID')} ORMAS terdata. Direktori telah disaring berdasarkan wilayah ini.</span>` : `<b>Seluruh DKI Jakarta</b><span>Total 6.842 ORMAS pada 6 wilayah administrasi.</span>`;
}

function render(){
  const route=location.hash||'#home';
  if(route==='#home') app.innerHTML=homePage();
  else if(route==='#ormas-portal') app.innerHTML=portalPage();
  else if(route==='#public-dashboard') app.innerHTML=publicDashboard();
  else if(route==='#registration') app.innerHTML=registrationPage();
  else if(route==='#ormas-login') app.innerHTML=loginPage();
  else if(route==='#activity-report') app.innerHTML=activityReportPage();
  else if(route==='#admin-dashboard') app.innerHTML=adminDashboard();
  else if(route==='#admin-reports') app.innerHTML=adminReportsPage();
  else if(route==='#admin-report-detail') app.innerHTML=adminReportDetail();
  else app.innerHTML=homePage();
  window.scrollTo(0,0);
  if(route==='#public-dashboard') setTimeout(()=>{renderPublicDirectoryV2();updateRegionDetailV2(publicDirectoryStateV2.region);},0);
}


/* === PATCH: Public dashboard KPI retained, regional summary removed, and activity trend added === */
var selectedActivityYearV3 = '2026';
var monthlyActivityReportsByYearV3 = {
  '2024': [
    { month: 'Jan', total: 61 }, { month: 'Feb', total: 68 }, { month: 'Mar', total: 74 },
    { month: 'Apr', total: 79 }, { month: 'Mei', total: 86 }, { month: 'Jun', total: 91 },
    { month: 'Jul', total: 97 }, { month: 'Agu', total: 102 }, { month: 'Sep', total: 109 },
    { month: 'Okt', total: 115 }, { month: 'Nov', total: 121 }, { month: 'Des', total: 128 }
  ],
  '2025': [
    { month: 'Jan', total: 82 }, { month: 'Feb', total: 94 }, { month: 'Mar', total: 107 },
    { month: 'Apr', total: 116 }, { month: 'Mei', total: 129 }, { month: 'Jun', total: 143 },
    { month: 'Jul', total: 151 }, { month: 'Agu', total: 164 }, { month: 'Sep', total: 172 },
    { month: 'Okt', total: 181 }, { month: 'Nov', total: 193 }, { month: 'Des', total: 207 }
  ],
  '2026': [
    { month: 'Jan', total: 112 }, { month: 'Feb', total: 138 }, { month: 'Mar', total: 166 },
    { month: 'Apr', total: 192 }, { month: 'Mei', total: 218 }, { month: 'Jun', total: 242 },
    { month: 'Jul', total: 216 }
  ]
};

function selectedMonthlyActivityV3(){
  return monthlyActivityReportsByYearV3[selectedActivityYearV3] || monthlyActivityReportsByYearV3['2026'];
}
function totalActivityReportsV3(){
  return selectedMonthlyActivityV3().reduce((sum, item) => sum + item.total, 0);
}
window.setPublicActivityYearV3 = function(year){
  selectedActivityYearV3 = year;
  render();
};

portalPage = function(){
  return `${publicHeader()}<main class="page"><div class="container"><div class="crumb">Beranda / Layanan / Pendaftaran Ormas</div><section class="portal-hero"><div><span class="pill cyan">Menu Pendaftaran ORMAS</span><h1>Pendaftaran & Pelaporan ORMAS</h1><p>Pilih layanan yang dibutuhkan setelah membuka menu Pendaftaran Ormas dari halaman utama.</p></div><button class="btn light" onclick="go('#home')">Kembali ke Beranda</button></section><div class="quick-grid portal-modules-v2"><article class="quick-card" onclick="go('#public-dashboard')"><span class="pill blue">Publik</span><h3>Dashboard Publik ORMAS</h3><p>Menampilkan ringkasan utama, tren laporan keberadaan, tren keaktifan, peta sebaran, dan direktori ORMAS.</p><button class="btn blue">Lihat Dashboard Publik</button></article><article class="quick-card" onclick="go('#registration')"><span class="pill orange">Pendaftaran</span><h3>Form Pendaftaran ORMAS</h3><p>Mengisi data pendaftaran ORMAS dengan Bidang Wilayah berbentuk dropdown dan Periode ORMAS.</p><button class="btn">Mulai Pendaftaran</button></article><article class="quick-card" onclick="go('#ormas-login')"><span class="pill green">Keaktifan</span><h3>Pelaporan Keaktifan ORMAS</h3><p>ORMAS login untuk melaporkan satu kegiatan per laporan dan mengunggah maksimal tiga foto.</p><button class="btn">Login & Lapor Kegiatan</button></article></div></div></main>${footer()}`;
};

publicDashboard = function(){
  return `${publicHeader()}<main class="page public-only"><div class="container"><div class="crumb">Beranda / Pendaftaran Ormas / Dashboard Publik</div><div class="public-top"><section class="public-hero"><span class="pill cyan">Dapat Diakses Tanpa Login</span><h1>Dashboard Publik ORMAS</h1><p>Informasi publik mengenai keberadaan, keaktifan, persebaran, dan direktori ORMAS di Provinsi DKI Jakarta.</p></section><button class="btn" onclick="go('#ormas-portal')">Kembali ke Menu ORMAS</button></div>
  <div class="public-focus-kpis public-focus-kpis-v3">
    ${kpi('Total ORMAS Terdata','6.842','Rekap agregat se-DKI Jakarta','blue','👥')}
    ${kpi('Berbadan Hukum','3.256','47,6% dari total ORMAS','green','✓')}
    ${kpi('Non Badan Hukum / SKT','3.586','52,4% dari total ORMAS','yellow','📄')}
    ${kpi('Kepengurusan Aktif','5.106','74,7% dari total ORMAS','green','🗓️')}
    ${kpi('Bidang Terbanyak','Sosial','1.842 ORMAS','blue','🤝')}
    ${kpi('Wilayah Terbanyak','Jakarta Timur','1.460 ORMAS','blue','📍')}
  </div>
  <div class="public-trend-grid-v3">
    <article class="panel trend-feature trend-feature-v3"><div class="panel-head"><div><h3>A. Grafik Tren Laporan Keberadaan ORMAS</h3><p class="muted">Jumlah ORMAS berbadan hukum yang melaporkan keberadaannya setiap bulan.</p></div><label class="inline-filter">Filter Tahun<select onchange="setPublicYearV2(this.value)"><option ${selectedPublicYearV2==='2024'?'selected':''}>2024</option><option ${selectedPublicYearV2==='2025'?'selected':''}>2025</option><option ${selectedPublicYearV2==='2026'?'selected':''}>2026</option></select></label></div><div class="trend-total"><small>Total Pelaporan Tahun ${selectedPublicYearV2}</small><strong>${totalReportsV2().toLocaleString('id-ID')}</strong></div>${verticalBars(selectedMonthlyReportsV2())}</article>
    <article class="panel trend-feature trend-feature-v3 activity-trend-v3"><div class="panel-head"><div><h3>B. Grafik Tren Keaktifan ORMAS</h3><p class="muted">Jumlah laporan kegiatan ORMAS yang telah diverifikasi setiap bulan.</p></div><label class="inline-filter">Filter Tahun<select onchange="setPublicActivityYearV3(this.value)"><option ${selectedActivityYearV3==='2024'?'selected':''}>2024</option><option ${selectedActivityYearV3==='2025'?'selected':''}>2025</option><option ${selectedActivityYearV3==='2026'?'selected':''}>2026</option></select></label></div><div class="trend-total activity-total-v3"><small>Total Laporan Keaktifan Tahun ${selectedActivityYearV3}</small><strong>${totalActivityReportsV3().toLocaleString('id-ID')}</strong></div>${verticalBars(selectedMonthlyActivityV3())}</article>
  </div>
  <article class="panel map-feature map-feature-v3"><h3>C. Sebaran ORMAS</h3><p class="muted">Klik wilayah pada peta untuk melihat jumlah ORMAS dan menyaring direktori.</p>${interactiveMapV2()}<div id="regionDetailV2" class="region-detail-v2"><b>Seluruh DKI Jakarta</b><span>Total 6.842 ORMAS pada 6 wilayah administrasi.</span></div></article>
  <article class="panel table-panel public-directory-panel"><div class="panel-head"><div><h3>D. Direktori ORMAS</h3><p class="muted">Daftar data ORMAS yang aman ditampilkan kepada masyarakat.</p></div><button class="outline-btn" onclick="resetPublicDirectoryV2()">Reset Pencarian</button></div><div class="directory-toolbar directory-toolbar-v2"><label class="directory-search-field">Cari ORMAS<input id="publicSearchV2" type="search" placeholder="Nama ORMAS, ketua, alamat, atau bidang..." oninput="updatePublicDirectoryFilterV2('search',this.value)"></label><label>Wilayah<select id="publicRegionV2" onchange="updatePublicDirectoryFilterV2('region',this.value)"><option value="">Semua Wilayah</option>${regionData.map(item=>`<option value="${item.name}">${item.name}</option>`).join('')}</select></label><label>Bidang<select id="publicFieldV2" onchange="updatePublicDirectoryFilterV2('field',this.value)"><option value="">Semua Bidang</option>${[...new Set(publicDirectoryV2.map(item=>item.field))].sort().map(item=>`<option value="${item}">${item}</option>`).join('')}</select></label><label>Status Keaktifan<select id="publicStatusV2" onchange="updatePublicDirectoryFilterV2('status',this.value)"><option value="">Semua Status</option><option>Aktif</option><option>Tidak Aktif</option></select></label><label>Baris per halaman<select id="publicPerPageV2" onchange="updatePublicDirectoryPageSizeV2(this.value)"><option value="5">5</option><option value="10">10</option><option value="25">25</option></select></label></div><div class="table-scroll"><table><thead><tr><th>No.</th><th>Nama ORMAS</th><th>Nama Ketua</th><th>Wilayah</th><th>Alamat</th><th>Bidang</th><th>Status Keaktifan</th></tr></thead><tbody id="publicDirectoryBodyV2"></tbody></table></div><div class="directory-pagination"><span id="publicDirectoryInfoV2"></span><div id="publicDirectoryPagesV2" class="directory-pages"></div></div></article>
  </div></main>${footer()}`;
};

// Repaint once after this patch is initialized so the public dashboard uses the latest layout.
setTimeout(render, 0);

/* === PATCH: account registration must happen before Form Pendaftaran ORMAS === */
var registrationAccountTypeV4 = 'organization';
var pendingLoginDestinationV4 = '#application';

window.setRegistrationAccountTypeV4 = function(type){
  registrationAccountTypeV4 = type === 'personal' ? 'personal' : 'organization';
  render();
};

window.openOrmasLoginV4 = function(destination){
  pendingLoginDestinationV4 = destination || '#application';
  go('#ormas-login');
};

function accountRegistrationFieldsV4(){
  if(registrationAccountTypeV4 === 'personal'){
    return `<div class="auth-form-grid">
      <div class="field auth-full"><label>Alamat Email</label><input type="email" required placeholder="Alamat Email"></div>
      <div class="field auth-full"><label>Nama Lengkap</label><input required placeholder="Masukkan nama lengkap"></div>
      <div class="field auth-full"><label>Alamat</label><textarea required maxlength="200" placeholder="Masukkan alamat"></textarea><small>0 / 200</small></div>
      <div class="field auth-full"><label>Instansi</label><input placeholder="Masukkan instansi (opsional)"></div>
      <div class="field auth-full"><label>No. Telp/ HP</label><input required placeholder="Masukkan no telp/ hp"></div>
    </div>`;
  }
  return `<div class="auth-form-grid">
    <div class="field auth-full"><label>Alamat Email</label><input type="email" required placeholder="Alamat Email"></div>
    <div class="field auth-full"><label>Nama Lembaga/ Organisasi Masyarakat</label><input required placeholder="Masukkan nama lembaga/ organisasi masyarakat"></div>
    <div class="field auth-full"><label>Alamat Lembaga/ Organisasi Masyarakat</label><textarea required maxlength="200" placeholder="Masukkan alamat lembaga/ organisasi masyarakat"></textarea><small>0 / 200</small></div>
    <div class="field auth-full"><label>No. Telp/ HP</label><input required placeholder="Masukkan no telp/ hp"></div>
  </div>`;
}

function registrationTutorialV4(){
  return `<aside class="registration-tutorial-v4">
    <span class="pill cyan">Tutorial Pendaftaran ORMAS</span>
    <h2>Daftar akun terlebih dahulu</h2>
    <p>Akun diperlukan agar data pendaftaran, status proses, dan laporan keaktifan tersimpan pada ORMAS yang benar.</p>
    <ol class="tutorial-steps-v4">
      <li><b>Daftar akun</b><span>Pilih Lembaga/Organisasi untuk membuat akun ORMAS.</span></li>
      <li><b>Verifikasi dan masuk</b><span>Gunakan akun yang telah dibuat untuk masuk ke layanan ORMAS.</span></li>
      <li><b>Isi Data ORMAS</b><span>Lengkapi data organisasi pada Form Pendaftaran ORMAS.</span></li>
      <li><b>Pilih Bidang Wilayah</b><span>Pilih dari dropdown master Bidang Kesbangpol.</span></li>
      <li><b>Isi Periode ORMAS</b><span>Tentukan tanggal mulai dan berakhir periode ORMAS.</span></li>
      <li><b>Submit data</b><span>Data tersimpan ke database dan dapat dipantau melalui akun.</span></li>
    </ol>
    <div class="tutorial-note-v4"><b>Sudah punya akun?</b><p>Langsung masuk untuk melanjutkan Form Pendaftaran ORMAS.</p><button class="btn blue" onclick="openOrmasLoginV4('#application')">Masuk ke Akun</button></div>
  </aside>`;
}

registrationPage = function(){
  const isOrg = registrationAccountTypeV4 === 'organization';
  return `<main class="register-account-page-v4">
    <header class="register-account-header-v4">
      <a class="register-brand-v4" href="#home"><div class="logo-mark"></div><div><b>Provinsi DKI Jakarta</b><span>BAKESBANGPOL</span></div></a>
      <button class="icon-btn" title="Toggle theme">☾</button>
    </header>
    <div class="register-account-shell-v4">
      ${registrationTutorialV4()}
      <section class="register-account-card-v4">
        <div class="account-tabs-v4" role="tablist">
          <button class="${!isOrg?'active':''}" type="button" onclick="setRegistrationAccountTypeV4('personal')">Pribadi/Warga</button>
          <button class="${isOrg?'active':''}" type="button" onclick="setRegistrationAccountTypeV4('organization')">Lembaga/Organisasi</button>
        </div>
        <div class="register-account-copy-v4">
          <span class="pill ${isOrg?'green':'blue'}">${isOrg?'Lembaga/Organisasi':'Pribadi/Warga'}</span>
          <h1>${isOrg?'Pendaftaran Untuk Lembaga atau Organisasi':'Pendaftaran Untuk Masyarakat Umum'}</h1>
          <p>${isOrg?'Buat akun lembaga/organisasi terlebih dahulu sebelum mengisi Form Pendaftaran ORMAS.':'Buat akun pribadi/warga untuk mengakses layanan masyarakat.'}</p>
        </div>
        <form onsubmit="submitAccountRegistrationV4(event)">
          ${accountRegistrationFieldsV4()}
          <button type="submit" class="primary-btn full-button">Daftar</button>
        </form>
        <div class="register-account-links-v4">Sudah punya akun? <button type="button" onclick="openOrmasLoginV4('#application')">Masuk di sini</button> atau kembali ke <a href="#home">Halaman Utama</a></div>
      </section>
    </div>
  </main>`;
};

window.submitAccountRegistrationV4 = function(event){
  event.preventDefault();
  const overlay = document.createElement('div');
  overlay.className = 'modal-backdrop';
  overlay.innerHTML = `<div class="modal registration-success-v4"><div class="success-check-v4">✓</div><h2>Pendaftaran akun berhasil</h2><p>Akun ${registrationAccountTypeV4==='organization'?'lembaga/organisasi':'pribadi/warga'} telah dibuat dalam simulasi. Langkah berikutnya adalah masuk dan melengkapi Form Pendaftaran ORMAS.</p><div class="modal-actions"><button class="btn" onclick="this.closest('.modal-backdrop').remove();go('#ormas-portal')">Kembali ke Menu</button><button class="btn primary" onclick="this.closest('.modal-backdrop').remove();openOrmasLoginV4('#application')">Masuk & Lanjut Pendaftaran</button></div></div>`;
  document.body.appendChild(overlay);
};

loginPage = function(){
  const forRegistration = pendingLoginDestinationV4 === '#application';
  return `${publicHeader()}<main class="page login-page"><div class="container login-wrap"><section class="form-card login-card login-card-v4"><div class="mini-logo"></div><span class="pill ${forRegistration?'orange':'green'}">${forRegistration?'Pendaftaran ORMAS':'Pelaporan Keaktifan'}</span><h1>${forRegistration?'Masuk untuk Melanjutkan Pendaftaran ORMAS':'Login ORMAS'}</h1><p class="muted">${forRegistration?'Setelah masuk, lengkapi data ORMAS, Bidang Wilayah, dan Periode ORMAS.':'Login diperlukan untuk mengakses menu Pelaporan Keaktifan ORMAS.'}</p><form onsubmit="loginOrmasV4(event)"><div class="field"><label>Email</label><input type="email" value="ormas@example.org" required></div><div class="field"><label>Password</label><input type="password" value="12345678" required></div><button class="primary-btn full-button" type="submit">Masuk</button></form><div class="register-account-links-v4">Belum punya akun? <a href="#registration">Daftar di sini</a> atau kembali ke <a href="#home">Halaman Utama</a></div></section></div></main>${footer()}`;
};

window.loginOrmasV4 = function(event){
  event.preventDefault();
  toast('Login berhasil (simulasi).');
  go(pendingLoginDestinationV4 || '#application');
};

function registrationFormTutorialV4(){
  return `<aside class="stepper-card registration-stepper-v4"><span class="pill green">Akun Lembaga Terverifikasi</span><h3>Alur Form Pendaftaran ORMAS</h3><div class="step-list"><span>1. Isi Data ORMAS</span><span>2. Pilih Bidang Wilayah</span><span>3. Isi Periode ORMAS</span><span>4. Submit Data</span><span>5. Tersimpan ke Database</span></div><div class="info-box"><b>Bidang Wilayah</b><p>Field diubah dari textbox menjadi dropdown dengan data master Bidang Kesbangpol.</p></div><div class="info-box"><b>Periode ORMAS</b><p>Field baru berupa tanggal mulai dan tanggal berakhir periode organisasi.</p></div><button class="btn" onclick="go('#ormas-portal')">Kembali ke Menu ORMAS</button></aside>`;
}

function ormasRegistrationFormPageV4(){
  return `${publicHeader()}<main class="page"><div class="container"><div class="crumb">Beranda / Pendaftaran Ormas / Form Pendaftaran ORMAS</div><div class="portal-hero compact-hero registration-form-hero-v4"><div><span class="pill cyan">Pengembangan Modul Existing</span><h1>Form Pendaftaran ORMAS</h1><p>Form ini diisi setelah pengguna membuat akun dan masuk ke layanan ORMAS.</p></div><span class="verified-session-v4">✓ Akun aktif</span></div><div class="app-form-layout registration-layout">${registrationFormTutorialV4()}<section class="form-card"><form id="ormasRegistrationFormV4" onsubmit="submitOrmasRegistrationV4(event)"><div class="form-section-title"><h3>Data ORMAS</h3><p>Form existing yang disempurnakan sesuai kebutuhan pengembangan.</p></div><div class="form-grid"><div class="field col2"><label>Nama ORMAS</label><input required placeholder="Masukkan nama ORMAS"></div><div class="field"><label>Jenis ORMAS</label><select required><option value="">Pilih jenis</option><option>Badan Hukum</option><option>Non Badan Hukum / SKT</option></select></div><div class="field"><label>Email Organisasi</label><input type="email" required value="ormas@example.org" placeholder="nama@organisasi.id"></div><div class="field col4"><label>Alamat Sekretariat</label><textarea required maxlength="200" placeholder="Masukkan alamat sekretariat"></textarea><small>0 / 200</small></div><div class="field col2"><label>Bidang Wilayah</label><select required><option value="">Pilih Bidang Kesbangpol</option><option>Bidang Bina Ideologi dan Wawasan Kebangsaan</option><option>Bidang Politik dan Demokrasi</option><option>Bidang Ketahanan Ekonomi, Seni, Budaya, Agama dan Kemasyarakatan</option><option>Bidang Kewaspadaan</option></select><small>Data berasal dari master Bidang Kesbangpol.</small></div><div class="field"><label>Periode ORMAS Mulai</label><input type="date" required></div><div class="field"><label>Periode ORMAS Berakhir</label><input type="date" required></div></div><div class="notice registration-database-note-v4"><b>Output:</b> setelah disubmit, data pendaftaran ORMAS tersimpan ke database dan terhubung dengan akun lembaga/organisasi.</div><div class="form-action-line"><button type="button" class="outline-btn" onclick="go('#ormas-portal')">Kembali</button><button type="submit" class="primary-btn">Submit Data</button></div></form></section></div></div></main>${footer()}`;
}

window.submitOrmasRegistrationV4 = function(event){
  event.preventDefault();
  const overlay = document.createElement('div');
  overlay.className = 'modal-backdrop';
  overlay.innerHTML = `<div class="modal registration-success-v4"><div class="success-check-v4">✓</div><h2>Data ORMAS tersimpan</h2><p>Data ORMAS, Bidang Wilayah, dan Periode ORMAS telah tersimpan ke database dalam simulasi.</p><div class="modal-actions"><button class="btn" onclick="this.closest('.modal-backdrop').remove();go('#ormas-portal')">Kembali ke Menu ORMAS</button><button class="btn primary" onclick="this.closest('.modal-backdrop').remove();openOrmasLoginV4('#activity-report')">Lanjut ke Pelaporan Keaktifan</button></div></div>`;
  document.body.appendChild(overlay);
};

portalPage = function(){
  return `${publicHeader()}<main class="page"><div class="container"><div class="crumb">Beranda / Layanan / Pendaftaran Ormas</div><section class="portal-hero"><div><span class="pill cyan">Menu Pendaftaran ORMAS</span><h1>Pendaftaran & Pelaporan ORMAS</h1><p>Pilih layanan yang dibutuhkan. Pengguna baru wajib membuat akun sebelum mengisi Form Pendaftaran ORMAS.</p></div><button class="btn light" onclick="go('#home')">Kembali ke Beranda</button></section><div class="quick-grid portal-modules-v2"><article class="quick-card" onclick="go('#public-dashboard')"><span class="pill blue">Publik</span><h3>Dashboard Publik ORMAS</h3><p>Menampilkan ringkasan utama, tren laporan keberadaan, tren keaktifan, peta sebaran, dan direktori ORMAS.</p><button class="btn blue">Lihat Dashboard Publik</button></article><article class="quick-card registration-gated-card-v4"><span class="pill orange">Wajib Daftar Akun</span><h3>Pendaftaran ORMAS</h3><p>Buat akun Lembaga/Organisasi terlebih dahulu. Setelah masuk, lengkapi Data ORMAS, Bidang Wilayah, dan Periode ORMAS.</p><div class="card-flow-v4"><span>Daftar Akun</span><b>→</b><span>Login</span><b>→</b><span>Form ORMAS</span></div><button class="btn" onclick="event.stopPropagation();go('#registration')">Daftar Akun & Mulai</button><button class="text-link-v4" onclick="event.stopPropagation();openOrmasLoginV4('#application')">Sudah punya akun? Masuk</button></article><article class="quick-card" onclick="openOrmasLoginV4('#activity-report')"><span class="pill green">Keaktifan</span><h3>Pelaporan Keaktifan ORMAS</h3><p>ORMAS login untuk melaporkan satu kegiatan per laporan dan mengunggah maksimal tiga foto.</p><button class="btn">Login & Lapor Kegiatan</button></article></div></div></main>${footer()}`;
};


/* === APPLICATION PAGE FROM THE WORKING #application REFERENCE === */
var currentOrmasTypeApplication = 'badan-hukum';

function applicationSection(title, description){
  return `<div class="form-section-title"><h3>${title}</h3><p>${description || ''}</p></div>`;
}

function applicationField(label, cls='col2', type='text', value=''){
  return `<div class="field ${cls}"><label>${label}</label><input type="${type}" value="${value}"></div>`;
}

function applicationFile(label, cls='col2', hint='Dokumen .pdf, ukuran maks. 1Mb'){
  return `<div class="field ${cls}"><label>${label}</label><div class="file-box"><span>📎 Pilih File</span><small>${hint}</small></div></div>`;
}

window.setApplicationOrmasType = function(type){
  currentOrmasTypeApplication = type === 'non-badan-hukum' ? 'non-badan-hukum' : 'badan-hukum';
  if(location.hash !== '#application') location.hash = '#application';
  render();
};

function applicationPage(){
  return `${publicHeader()}<main class="page"><div class="container"><div class="crumb">Beranda / Pendaftaran Ormas / Pengajuan</div><div class="app-form-layout"><aside class="stepper-card"><h3>Pengajuan Layanan Ormas</h3><p>Formulir terkait pengajuan layanan ormas.</p><button class="type-card ${currentOrmasTypeApplication==='badan-hukum'?'active':''}" onclick="setApplicationOrmasType('badan-hukum')"><b>Badan Hukum</b><span>Pelaporan keberadaan Ormas berbadan hukum</span></button><button class="type-card ${currentOrmasTypeApplication==='non-badan-hukum'?'active':''}" onclick="setApplicationOrmasType('non-badan-hukum')"><b>Non Badan Hukum</b><span>Pendaftaran organisasi dan dokumen SKT</span></button><div class="info-box"><b>Catatan</b><br>Ukuran dokumen maksimal 1Mb. Template ini hanya mockup interaktif.</div></aside><section class="form-card">${currentOrmasTypeApplication==='badan-hukum'?applicationFormBadanHukum():applicationFormNonBadanHukum()}</section></div></div></main>${footer()}`;
}

function applicationFormBadanHukum(){
  return `<div>${applicationSection('Jenis Pengajuan','Pilihan ini membantu kami memproses permohonan Anda dengan lebih cepat dan akurat')}<div class="form-grid"><div class="field col2"><label>Jenis Pengajuan</label><select><option>Pelaporan Keberadaan Ormas</option><option>Perubahan Data</option><option>Perpanjangan/Pemutakhiran</option></select></div><div class="field col2"><label>Jenis Ormas</label><select><option>Badan Hukum</option></select></div></div>${applicationSection('A. Data Ormas','Informasi umum terkait ormas beserta atribut keanggotaan')}<div class="form-grid">${applicationField('Nama Ormas/LSM','col2','text','Jurdem')}${applicationField('Alamat Email','col2','email','jurnaldemokrasi.poldem@gmail.com')}${applicationField('Nama Ketua','col2')}${applicationField('Nama Sekretaris','col2')}${applicationField('Nama Bendahara','col2')}${applicationField('Periode Kepengurusan Mulai','col2','date')}${applicationField('Periode Kepengurusan Selesai','col2','date')}<div class="field col4"><label>Alamat Sekretariat</label><select><option>Pilih kelurahan alamat sekretariat</option></select><textarea placeholder="Masukkan detail alamat sekretariat"></textarea><small>0 / 200</small></div>${applicationField('Telepon / Fax','col2')}${applicationField('Situs Web','col2','text','https://')}</div>${applicationSection('B. Legalitas & Badan Hukum','Informasi terperinci terkait legalitas dan badan hukum ormas')}<div class="form-grid">${applicationField('No Surat Usulan','col2')}${applicationField('Tgl. Surat','col2','date')}${applicationField('Perihal Surat','col4')}${applicationField('No SK Pengesahan Badan Hukum','col2')}${applicationField('Tgl. SK Pengesahan','col2','date')}${applicationFile('SK Kemenkumham')}${applicationFile('Surat Permohonan Pelaporan Keberadaan Ormas')}${applicationFile('SK Kepengurusan Tk DKI Jakarta')}</div><div class="form-action-line"><button class="btn" onclick="go('#ormas-portal')">Kembali</button><button class="btn blue" onclick="toast('Mockup: pengajuan Badan Hukum berhasil disimpan')">Simpan Pengajuan</button></div></div>`;
}

function applicationFormNonBadanHukum(){
  return `<div>${applicationSection('Jenis Pengajuan','Pilihan ini membantu kami memproses permohonan Anda dengan lebih cepat dan akurat')}<div class="form-grid"><div class="field col2"><label>Jenis Pengajuan</label><select><option>Pendaftaran Organisasi</option><option>Pemutakhiran Data</option><option>Perubahan Data Kepengurusan</option></select></div><div class="field col2"><label>Jenis Ormas</label><select><option>Non Badan Hukum</option></select></div></div>${applicationSection('A. Data Organisasi','Informasi umum terkait organisasi')}<div class="form-grid">${applicationField('Nama Organisasi','col2','text','Jurdem')}${applicationField('Nama Singkatan','col2')}${applicationField('Tempat Pendirian','col2')}${applicationField('Tgl. Pendirian','col2','date')}</div>${applicationSection('B. Dokumen Organisasi','Kelengkapan dokumen organisasi')}<div class="form-grid">${applicationField('No. Surat Permohonan','col2')}${applicationField('Tgl. Surat Permohonan','col2','date')}${applicationFile('Scan Surat Permohonan')}${applicationField('Nama Notaris','col2')}${applicationField('No. Akta Notaris','col2')}${applicationField('Tgl. Akta','col2','date')}${applicationFile('Scan Akta Notaris')}${applicationField('Nama Bank','col2')}${applicationField('Rekening Bank','col2')}${applicationField('NPWP','col2','text','##.###.###.#-###.###')}${applicationFile('Scan NPWP')}</div>${applicationSection('C. Atribut Organisasi','Keterangan detail terkait organisasi')}<div class="form-grid">${applicationField('Bidang Kegiatan','col2')}${applicationField('Keputusan Tertinggi Organisasi','col2')}${applicationField('Usaha Organisasi','col2')}${applicationField('Sumber Keuangan','col2')}<div class="field col2"><label>Program Kerja Organisasi</label><textarea></textarea></div>${applicationFile('Scan Program Kerja Organisasi')}<div class="field col4"><label>Asas Ciri Organisasi</label><textarea></textarea></div><div class="field col4"><label>Tujuan Organisasi</label><textarea></textarea></div><div class="field col2"><label>Unit Cabang Organisasi</label><input placeholder="Pisahkan dengan koma, bila lebih dari satu"></div><div class="field col2"><label>Lokasi Unit Cabang Organisasi</label><input placeholder="Pisahkan dengan koma, bila lebih dari satu"></div></div>${applicationSection('D. Data Sekretariat','Informasi sekretariat & atribut organisasi')}<div class="form-grid">${applicationField('Email','col2','email','jurnaldemokrasi.poldem@gmail.com')}${applicationField('Telepon / Fax','col2')}${applicationField('Website','col2','text','https://')}<div class="field col4"><label>Alamat Sekretariat</label><select><option>Pilih kelurahan alamat sekretariat</option></select><textarea placeholder="Masukkan detail alamat sekretariat"></textarea><small>0 / 200</small></div>${applicationFile('Surat Keterangan Domisili Sekretariat Organisasi')}${applicationFile('Bukti Kepemilikan / Sewa Kontrak Kantor')}${applicationFile('Lambang / Logo Organisasi','col2','Dokumen gambar, ukuran maks. 1Mb')}${applicationFile('Bendera Organisasi','col2','Dokumen gambar, ukuran maks. 1Mb')}${applicationFile('Foto Kantor Sekretariat (Tampak depan)','col2','Dokumen gambar, ukuran maks. 1Mb')}</div>${applicationSection('E. Data Rekomendasi','Kelengkapan Dokumen Rekomendasi Pihak Berwenang')}<div class="form-grid">${applicationFile('Surat Pernyataan sesuai Permendagri No. 57 Tahun 2017')}${applicationFile('Rekomendasi Kementerian Agama')}${applicationFile('Rekomendasi Kementerian dan PD Budaya')}${applicationFile('Surat Pernyataan Persetujuan Pejabat')}</div>${applicationSection('F. Daftar Kepemimpinan dan Keanggotaan','Informasi Dewan Pimpinan dan Anggota Organisasi')}<div class="notice">Belum ada data personil. Silakan masukkan data personil terlebih dahulu.</div><div class="form-grid">${applicationField('Periode Kepengurusan Mulai','col2','date')}${applicationField('Periode Kepengurusan Selesai','col2','date')}${applicationFile('SK Kepengurusan','col2')}</div>${applicationPersonilForm()}<div class="form-action-line"><button class="btn" onclick="go('#ormas-portal')">Kembali</button><button class="btn blue" onclick="toast('Mockup: pengajuan Non Badan Hukum berhasil disimpan')">Simpan Pengajuan</button></div></div>`;
}

function applicationPersonilForm(){
  return `${applicationSection('Pendaftaran Personil','Lengkapi data diri personil yang ingin didaftarkan')}<div class="form-grid">${applicationField('Jabatan','col2')}${applicationField('Nama Lengkap','col2')}${applicationField('NIK','col2')}${applicationField('Agama','col2')}${applicationField('Kewarganegaraan','col2')}<div class="field col2"><label>Jenis Kelamin</label><select><option>Laki-laki</option><option>Perempuan</option></select></div><div class="field col4"><label>Alamat</label><textarea></textarea></div>${applicationField('Tempat Lahir','col2')}${applicationField('Tgl. Lahir','col2','date')}${applicationField('Status Perkawinan','col2')}${applicationField('Pekerjaan','col2')}${applicationField('No Telepon Seluler','col2')}${applicationFile('KTP','col2','Dokumen gambar, ukuran maks. 1Mb')}${applicationFile('Pas Foto 4x6 (terbaru)','col2','Dokumen gambar, ukuran maks. 1Mb')}${applicationFile('Daftar Riwayat Hidup','col2','Dokumen .pdf, ukuran maks. 1Mb')}</div><button class="btn" style="margin-top:12px" onclick="toast('Mockup: personil ditambahkan ke daftar')">+ Tambah Personil</button>`;
}

// Final route mapping: registration login must continue to the existing #application page.
render = function(){
  const route = location.hash || '#home';
  if(route === '#home') app.innerHTML = homePage();
  else if(route === '#ormas-portal') app.innerHTML = portalPage();
  else if(route === '#public-dashboard') app.innerHTML = publicDashboard();
  else if(route === '#registration') app.innerHTML = registrationPage();
  else if(route === '#ormas-login') app.innerHTML = loginPage();
  else if(route === '#application') app.innerHTML = applicationPage();
  else if(route === '#ormas-registration-form') app.innerHTML = ormasRegistrationFormPageV4();
  else if(route === '#activity-report') app.innerHTML = activityReportPage();
  else if(route === '#admin-dashboard') app.innerHTML = adminDashboard();
  else if(route === '#admin-reports') app.innerHTML = adminReportsPage();
  else if(route === '#admin-report-detail') app.innerHTML = adminReportDetail();
  else app.innerHTML = homePage();
  window.scrollTo(0,0);
  if(route === '#public-dashboard') setTimeout(()=>{renderPublicDirectoryV2();updateRegionDetailV2(publicDirectoryStateV2.region);},0);
};

setTimeout(render, 0);

/* === FINAL PATCH V6: Admin Dashboard disinkronkan dengan alur frontend ===
   Frontend: Pendaftaran akun -> Login -> Pengajuan ORMAS (#application)
             Login -> Pelaporan Keaktifan (#activity-report)
   Admin:    Monitoring Pendaftaran ORMAS + Monitoring Pelaporan Keaktifan
*/

let applicationRequestsV6 = [
  {
    id: 'ORM-2026-0712',
    date: '2026-07-12',
    org: 'Jurnal Demokrasi',
    orgType: 'Badan Hukum',
    requestType: 'Pelaporan Keberadaan Ormas',
    email: 'jurnaldemokrasi.poldem@gmail.com',
    chair: 'Hendra Irawan',
    secretary: 'Rina Kurniawati',
    treasurer: 'Dedi Saputra',
    address: 'Gambir, Jakarta Pusat',
    region: 'Jakarta Pusat',
    periodStart: '2025-01-01',
    periodEnd: '2030-12-31',
    documents: ['SK Kemenkumham', 'Surat Permohonan Pelaporan Keberadaan Ormas', 'SK Kepengurusan Tk DKI Jakarta'],
    status: 'Menunggu Verifikasi',
    rejectionReason: ''
  },
  {
    id: 'ORM-2026-0709',
    date: '2026-07-09',
    org: 'Forum Pemuda Betawi Bersatu',
    orgType: 'Non Badan Hukum / SKT',
    requestType: 'Pendaftaran Organisasi',
    email: 'sekretariat@fpbb.or.id',
    chair: 'Muhammad Fikri',
    secretary: 'Siti Nurjanah',
    treasurer: 'Andri Maulana',
    address: 'Cengkareng, Jakarta Barat',
    region: 'Jakarta Barat',
    periodStart: '2024-01-01',
    periodEnd: '2029-12-31',
    documents: ['Surat Permohonan', 'Akta Notaris', 'NPWP', 'Program Kerja', 'Surat Domisili', 'SK Kepengurusan'],
    status: 'Disetujui',
    rejectionReason: ''
  },
  {
    id: 'ORM-2026-0706',
    date: '2026-07-06',
    org: 'Yayasan Peduli Pendidikan Anak Bangsa',
    orgType: 'Non Badan Hukum / SKT',
    requestType: 'Pemutakhiran Data',
    email: 'kontak@yppa.or.id',
    chair: 'Nur Aisyah',
    secretary: 'Rudi Hartono',
    treasurer: 'Dian Lestari',
    address: 'Pasar Minggu, Jakarta Selatan',
    region: 'Jakarta Selatan',
    periodStart: '2023-06-01',
    periodEnd: '2028-05-31',
    documents: ['Surat Permohonan', 'SK Kepengurusan', 'Program Kerja'],
    status: 'Perlu Perbaikan',
    rejectionReason: 'Mohon melengkapi dokumen domisili sekretariat terbaru.'
  }
];

let selectedApplicationIdV6 = applicationRequestsV6[0].id;
const applicationPageBeforeAdminSyncV6 = applicationPage;

function getApplicationFieldValueV6(labelText) {
  const labels = [...document.querySelectorAll('.form-card label')];
  const label = labels.find(item => item.textContent.trim() === labelText);
  const control = label?.closest('.field')?.querySelector('input, select, textarea');
  return control?.value?.trim() || '';
}

function inferRegionV6(address) {
  return regionData.find(item => address.includes(item.name))?.name || 'Jakarta Pusat';
}

window.submitApplicationV6 = function (orgType) {
  const isLegal = orgType === 'Badan Hukum';
  const orgName = getApplicationFieldValueV6(isLegal ? 'Nama Ormas/LSM' : 'Nama Organisasi') || `ORMAS Baru ${applicationRequestsV6.length + 1}`;
  const email = getApplicationFieldValueV6(isLegal ? 'Alamat Email' : 'Email') || 'ormas@example.org';
  const address = getApplicationFieldValueV6('Alamat Sekretariat') || 'Alamat sekretariat belum dilengkapi';
  const requestType = getApplicationFieldValueV6('Jenis Pengajuan') || (isLegal ? 'Pelaporan Keberadaan Ormas' : 'Pendaftaran Organisasi');
  const periodStart = getApplicationFieldValueV6('Periode Kepengurusan Mulai');
  const periodEnd = getApplicationFieldValueV6('Periode Kepengurusan Selesai');
  const request = {
    id: `ORM-2026-${String(applicationRequestsV6.length + 713).padStart(4, '0')}`,
    date: new Date().toISOString().slice(0, 10),
    org: orgName,
    orgType: isLegal ? 'Badan Hukum' : 'Non Badan Hukum / SKT',
    requestType,
    email,
    chair: getApplicationFieldValueV6('Nama Ketua') || 'Belum diisi',
    secretary: getApplicationFieldValueV6('Nama Sekretaris') || 'Belum diisi',
    treasurer: getApplicationFieldValueV6('Nama Bendahara') || 'Belum diisi',
    address,
    region: inferRegionV6(address),
    periodStart,
    periodEnd,
    documents: isLegal
      ? ['SK Kemenkumham', 'Surat Permohonan Pelaporan Keberadaan Ormas', 'SK Kepengurusan Tk DKI Jakarta']
      : ['Surat Permohonan', 'Akta Notaris', 'NPWP', 'Program Kerja', 'Dokumen Sekretariat', 'SK Kepengurusan'],
    status: 'Menunggu Verifikasi',
    rejectionReason: ''
  };
  applicationRequestsV6.unshift(request);
  selectedApplicationIdV6 = request.id;
  toast(`Pengajuan ${orgName} masuk ke Monitoring Pendaftaran ORMAS.`);
};

applicationPage = function () {
  return applicationPageBeforeAdminSyncV6()
    .replace("onclick=\"toast('Mockup: pengajuan Badan Hukum berhasil disimpan')\"", "onclick=\"submitApplicationV6('Badan Hukum')\"")
    .replace("onclick=\"toast('Mockup: pengajuan Non Badan Hukum berhasil disimpan')\"", "onclick=\"submitApplicationV6('Non Badan Hukum')\"")
    .replace('<section class="form-card">', '<section class="form-card"><div class="sync-process-banner-v6"><b>Terhubung ke Dashboard Admin</b><span>Setelah disimpan, pengajuan tampil pada menu <em>Monitoring Pendaftaran ORMAS</em> dengan status Menunggu Verifikasi.</span></div>');
};

// Pelaporan keaktifan juga menyimpan identitas ORMAS terpilih agar data admin sama dengan frontend.
window.submitActivity = function (event) {
  event.preventDefault();
  const files = $('#activityPhotos').files;
  if (files.length > 3) {
    toast('Foto maksimal 3 file.');
    return;
  }
  const selectedOrgId = $('#activityOrgV5').value;
  const selectedOrg = linkedOrmasAccountsV5.find(item => item.id === selectedOrgId);
  if (!selectedOrg) {
    toast('Pilih ORMAS yang akan melaporkan kegiatan.');
    return;
  }
  const report = {
    id: `AKT-2026-${String(activityReports.length + 100).padStart(4, '0')}`,
    org: selectedOrg.name,
    orgShortName: selectedOrg.shortName,
    orgType: selectedOrg.type,
    orgRegion: selectedOrg.region,
    activity: $('#activityName').value,
    date: $('#activityDate').value,
    field: $('#activityField').value,
    description: $('#activityDescription').value,
    photos: files.length,
    status: 'Menunggu Verifikasi',
    rejectionReason: ''
  };
  activityReports.unshift(report);
  selectedActivityId = report.id;
  event.target.reset();
  setTimeout(() => updateActivityOrmasV5(linkedOrmasAccountsV5[0].id), 0);
  toast(`Laporan ${selectedOrg.name} masuk ke Monitoring Pelaporan Keaktifan.`);
};

function dateLabelV6(value) {
  if (!value) return '-';
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
}

function registrationStatusBadgeV6(status) {
  const cls = status === 'Disetujui' ? 'green' : status === 'Ditolak' ? 'red' : status === 'Perlu Perbaikan' ? 'orange' : 'blue';
  return `<span class="pill ${cls}">${status}</span>`;
}

function applicationRowsV6(items = applicationRequestsV6) {
  return items.map(item => `<tr>
    <td><a class="click-link" onclick="openAdminApplicationV6('${item.id}')">${item.id}</a></td>
    <td>${dateLabelV6(item.date)}</td>
    <td><b>${item.org}</b><br><small>${item.email}</small></td>
    <td>${item.orgType}</td>
    <td>${item.requestType}</td>
    <td>${item.region}</td>
    <td>${registrationStatusBadgeV6(item.status)}</td>
    <td><span class="photo-count">📎 ${item.documents.length} dokumen</span></td>
    <td><button class="btn tiny" onclick="openAdminApplicationV6('${item.id}')">Periksa</button></td>
  </tr>`).join('');
}

window.openAdminApplicationV6 = function (id) {
  selectedApplicationIdV6 = id;
  go('#admin-application-detail');
};

function adminApplicationRowsNeedingActionV6() {
  const items = applicationRequestsV6.filter(item => item.status !== 'Disetujui');
  return items.length ? applicationRowsV6(items) : '<tr><td colspan="9" class="empty-state-v6">Tidak ada pengajuan yang perlu ditindaklanjuti.</td></tr>';
}

function adminActivityRowsSyncedV6(items = activityReports) {
  return items.map(report => `<tr>
    <td><a class="click-link" onclick="openAdminReport('${report.id}')">${report.id}</a></td>
    <td>${dateLabelV6(report.date)}</td>
    <td><b>${report.org}</b><br><small>${report.orgType || 'Profil ORMAS terverifikasi'}</small></td>
    <td><b>${report.activity}</b><br><small>${report.description}</small></td>
    <td>${report.field}</td>
    <td>${report.orgRegion || '-'}</td>
    <td><span class="photo-count">📷 ${report.photos} foto</span></td>
    <td>${statusBadge(report.status)}</td>
    <td><button class="btn tiny" onclick="openAdminReport('${report.id}')">Verifikasi</button></td>
  </tr>`).join('');
}

function adminShell(content, active = 'dashboard') {
  const titles = {
    dashboard: ['Dashboard Pegawai', 'Ringkasan monitoring pendaftaran dan keaktifan ORMAS'],
    applications: ['Monitoring Pendaftaran', 'Pengajuan ORMAS Badan Hukum dan Non Badan Hukum dari frontend'],
    reports: ['Monitoring Keaktifan', 'Laporan kegiatan ORMAS yang dikirim dari frontend'],
    directory: ['Direktori ORMAS', 'Data publik ORMAS yang telah disetujui']
  };
  const [title, subtitle] = titles[active] || titles.dashboard;
  return `<div class="app-shell">
    <aside class="sidebar">
      <div class="side-brand">${logoHtml()}</div>
      <nav class="side-nav">
        <span class="side-nav-label">MENU PEGAWAI</span>
        <a class="${active === 'dashboard' ? 'active' : ''}" href="#admin-dashboard">Dashboard Pegawai</a>
        <a class="${active === 'applications' ? 'active' : ''}" href="#admin-applications">Monitoring Pendaftaran</a>
        <a class="${active === 'reports' ? 'active' : ''}" href="#admin-reports">Monitoring Keaktifan</a>
        <a class="${active === 'directory' ? 'active' : ''}" href="#admin-directory">Direktori ORMAS</a>
      </nav>
      <div class="side-user"><b>Administrator</b><small>BAKESBANGPOL DKI Jakarta</small></div>
    </aside>
    <section class="admin-content">
      <header class="admin-topbar"><div><h1>${title}</h1><p>${subtitle}</p></div><button class="btn" onclick="go('#home')">Logout</button></header>
      <main class="admin-main">${content}</main>
    </section>
  </div>`;
}

function adminDashboard() {
  const pendingApplications = applicationRequestsV6.filter(item => item.status === 'Menunggu Verifikasi').length;
  const legalApplications = applicationRequestsV6.filter(item => item.orgType === 'Badan Hukum').length;
  const nonLegalApplications = applicationRequestsV6.filter(item => item.orgType.includes('Non Badan')).length;
  const waitingActivities = activityReports.filter(item => item.status === 'Menunggu Verifikasi').length;
  const approvedActivities = activityReports.filter(item => item.status === 'Disetujui').length;
  const activeOrganizations = publicDirectory.filter(item => approvedWithinOneYear(item.name) || item.status === 'Aktif').length;
  const content = `<div class="sync-overview-v6">
      <div><span class="pill cyan">Dashboard Pegawai</span><h2>Monitoring Pendaftaran dan Keaktifan ORMAS</h2><p>Data pada dashboard ini berasal dari dua layanan yang terlihat oleh pengguna: <b>Pengajuan Layanan ORMAS</b> dan <b>Pelaporan Keaktifan ORMAS</b>.</p></div>
      <div class="sync-flow-v6"><span>Frontend</span><b>→</b><span>Database</span><b>→</b><span>Dashboard Admin</span></div>
    </div>
    <div class="kpi-grid admin-kpis synced-kpis-v6">
      ${kpi('Total Pengajuan ORMAS', applicationRequestsV6.length, 'Badan Hukum & Non Badan Hukum', 'blue', '🏢')}
      ${kpi('Menunggu Verifikasi', pendingApplications, 'Pengajuan pendaftaran', 'yellow', '⏳')}
      ${kpi('Badan Hukum', legalApplications, 'Pengajuan pada frontend', 'green', '✓')}
      ${kpi('Non Badan Hukum / SKT', nonLegalApplications, 'Pengajuan pada frontend', 'blue', '📄')}
      ${kpi('Laporan Keaktifan', activityReports.length, `${waitingActivities} menunggu verifikasi`, 'green', '📷')}
      ${kpi('ORMAS Aktif', activeOrganizations, `${approvedActivities} laporan kegiatan disetujui`, 'green', '●')}
    </div>
    <div class="admin-sync-grid-v6">
      <article class="panel"><div class="panel-head"><div><h3>Tren Pendaftaran ORMAS</h3><p class="muted">Pengajuan dari halaman #application.</p></div><button class="outline-btn" onclick="go('#admin-applications')">Lihat Pendaftaran</button></div>${verticalBars([{month:'Jan',total:18},{month:'Feb',total:24},{month:'Mar',total:31},{month:'Apr',total:29},{month:'Mei',total:38},{month:'Jun',total:44},{month:'Jul',total:applicationRequestsV6.length + 42}])}</article>
      <article class="panel"><div class="panel-head"><div><h3>Tren Pelaporan Keaktifan</h3><p class="muted">Laporan dari ORMAS yang dipilih pada frontend.</p></div><button class="outline-btn" onclick="go('#admin-reports')">Lihat Keaktifan</button></div>${verticalBars(monthlyReports)}</article>
    </div>
    <div class="admin-sync-grid-v6">
      <article class="panel"><h3>Komposisi Jenis ORMAS</h3>${horizontalBars([{name:'Badan Hukum',total:legalApplications},{name:'Non Badan Hukum / SKT',total:nonLegalApplications}])}</article>
      <article class="panel"><h3>Status Operasional</h3>${horizontalBars([{name:'Pendaftaran Menunggu',total:pendingApplications},{name:'Keaktifan Menunggu',total:waitingActivities},{name:'Keaktifan Disetujui',total:approvedActivities}])}</article>
    </div>
    <article class="panel table-panel"><div class="panel-head"><div><h3>Pendaftaran ORMAS Perlu Ditindaklanjuti</h3><p class="muted">Sama dengan data yang dikirim melalui Pengajuan Layanan ORMAS.</p></div><button class="outline-btn" onclick="go('#admin-applications')">Lihat Semua</button></div><div class="table-scroll"><table><thead><tr><th>No. Pengajuan</th><th>Tanggal</th><th>Nama ORMAS</th><th>Jenis ORMAS</th><th>Jenis Pengajuan</th><th>Wilayah</th><th>Status</th><th>Dokumen</th><th>Aksi</th></tr></thead><tbody>${adminApplicationRowsNeedingActionV6()}</tbody></table></div></article>
    <article class="panel table-panel"><div class="panel-head"><div><h3>Pelaporan Keaktifan Perlu Ditindaklanjuti</h3><p class="muted">Sama dengan data pada form Pelaporan Keaktifan ORMAS.</p></div><button class="outline-btn" onclick="go('#admin-reports')">Lihat Semua</button></div><div class="table-scroll"><table><thead><tr><th>No. Laporan</th><th>Tanggal</th><th>ORMAS Pelapor</th><th>Kegiatan</th><th>Bidang</th><th>Wilayah</th><th>Foto</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${adminActivityRowsSyncedV6(activityReports.filter(item => item.status === 'Menunggu Verifikasi'))}</tbody></table></div></article>`;
  return adminShell(content, 'dashboard');
}

function adminApplicationsPageV6() {
  const content = `<article class="panel table-panel">
    <div class="panel-head"><div><h3>Daftar Pengajuan Layanan ORMAS</h3><p class="muted">Menampilkan pengajuan Badan Hukum dan Non Badan Hukum dari halaman #application.</p></div><button class="outline-btn" onclick="toast('Simulasi export data pendaftaran')">Export Excel</button></div>
    <div class="admin-filter-row application-filter-v6">
      <label>Pencarian<input id="adminApplicationSearchV6" placeholder="Nama ORMAS / nomor pengajuan" oninput="renderAdminApplicationsV6()"></label>
      <label>Jenis ORMAS<select id="adminApplicationTypeV6" onchange="renderAdminApplicationsV6()"><option value="">Semua Jenis</option><option>Badan Hukum</option><option>Non Badan Hukum / SKT</option></select></label>
      <label>Status<select id="adminApplicationStatusV6" onchange="renderAdminApplicationsV6()"><option value="">Semua Status</option><option>Menunggu Verifikasi</option><option>Perlu Perbaikan</option><option>Disetujui</option><option>Ditolak</option></select></label>
    </div>
    <div class="table-scroll"><table><thead><tr><th>No. Pengajuan</th><th>Tanggal</th><th>Nama ORMAS</th><th>Jenis ORMAS</th><th>Jenis Pengajuan</th><th>Wilayah</th><th>Status</th><th>Dokumen</th><th>Aksi</th></tr></thead><tbody id="adminApplicationsBodyV6">${applicationRowsV6()}</tbody></table></div>
  </article>`;
  return adminShell(content, 'applications');
}

window.renderAdminApplicationsV6 = function () {
  const q = ($('#adminApplicationSearchV6')?.value || '').toLowerCase();
  const type = $('#adminApplicationTypeV6')?.value || '';
  const status = $('#adminApplicationStatusV6')?.value || '';
  const items = applicationRequestsV6.filter(item =>
    (!q || `${item.id} ${item.org}`.toLowerCase().includes(q)) &&
    (!type || item.orgType === type) &&
    (!status || item.status === status)
  );
  const body = $('#adminApplicationsBodyV6');
  if (body) body.innerHTML = items.length ? applicationRowsV6(items) : '<tr><td colspan="9" class="empty-state-v6">Data tidak ditemukan.</td></tr>';
};

function applicationDocumentRowsV6(item) {
  return item.documents.map((documentName, index) => `<tr><td>📎 ${documentName}</td><td>${index === item.documents.length - 1 && item.status === 'Perlu Perbaikan' ? registrationStatusBadgeV6('Perlu Perbaikan') : '<span class="pill green">Terunggah</span>'}</td><td><button class="btn tiny" onclick="toast('Simulasi membuka dokumen')">Lihat</button></td></tr>`).join('');
}

function adminApplicationDetailV6() {
  const item = applicationRequestsV6.find(entry => entry.id === selectedApplicationIdV6) || applicationRequestsV6[0];
  const content = `<div class="preview-detail">
    <section class="panel">
      <div class="panel-head"><div><h2>Detail Pengajuan ORMAS</h2><p class="muted">${item.id} • ${item.requestType}</p></div>${registrationStatusBadgeV6(item.status)}</div>
      <div class="detail-grid application-detail-grid-v6">
        <div><small>Nama ORMAS</small><b>${item.org}</b></div>
        <div><small>Jenis ORMAS</small><b>${item.orgType}</b></div>
        <div><small>Email Organisasi</small><b>${item.email}</b></div>
        <div><small>Wilayah</small><b>${item.region}</b></div>
        <div><small>Ketua</small><b>${item.chair}</b></div>
        <div><small>Sekretaris</small><b>${item.secretary}</b></div>
        <div><small>Bendahara</small><b>${item.treasurer}</b></div>
        <div><small>Periode</small><b>${dateLabelV6(item.periodStart)} s.d. ${dateLabelV6(item.periodEnd)}</b></div>
      </div>
      <h3>Alamat Sekretariat</h3><p>${item.address}</p>
      <h3>Dokumen Sesuai Form Frontend</h3>
      <div class="table-scroll"><table><thead><tr><th>Dokumen</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${applicationDocumentRowsV6(item)}</tbody></table></div>
      ${item.rejectionReason ? `<div class="notice"><b>Catatan Perbaikan/Penolakan:</b> ${item.rejectionReason}</div>` : ''}
    </section>
    <aside class="panel verification-panel">
      <h3>Verifikasi Pendaftaran</h3>
      <p class="muted">Keputusan ini hanya untuk pengajuan ORMAS. Pelaporan keaktifan diproses pada menu terpisah.</p>
      <label>Catatan Perbaikan / Alasan Penolakan</label>
      <textarea id="applicationReasonV6" class="note-area" placeholder="Diisi jika perlu perbaikan atau ditolak">${item.rejectionReason || ''}</textarea>
      <button class="btn success full-button" onclick="approveApplicationV6('${item.id}')">Setujui Pengajuan</button>
      <button class="btn full-button" onclick="requestApplicationCorrectionV6('${item.id}')">Minta Perbaikan</button>
      <button class="btn danger full-button" onclick="rejectApplicationV6('${item.id}')">Tolak</button>
      <button class="outline-btn full-button" onclick="go('#admin-applications')">Kembali ke Daftar</button>
    </aside>
  </div>`;
  return adminShell(content, 'applications');
}

window.approveApplicationV6 = function (id) {
  const item = applicationRequestsV6.find(entry => entry.id === id);
  if (!item) return;
  item.status = 'Disetujui';
  item.rejectionReason = '';
  if (!publicDirectory.some(entry => entry.name === item.org)) {
    publicDirectory.unshift({
      name: item.org,
      chair: item.chair,
      address: item.address,
      field: item.requestType,
      region: item.region,
      status: 'Aktif'
    });
  }
  toast('Pengajuan disetujui dan ORMAS masuk ke Direktori ORMAS.');
  render();
};

window.requestApplicationCorrectionV6 = function (id) {
  const reason = $('#applicationReasonV6')?.value.trim();
  if (!reason) return toast('Catatan perbaikan wajib diisi.');
  const item = applicationRequestsV6.find(entry => entry.id === id);
  if (!item) return;
  item.status = 'Perlu Perbaikan';
  item.rejectionReason = reason;
  toast('Catatan perbaikan tersimpan dan dapat dilihat pemohon.');
  render();
};

window.rejectApplicationV6 = function (id) {
  const reason = $('#applicationReasonV6')?.value.trim();
  if (!reason) return toast('Alasan penolakan wajib diisi.');
  const item = applicationRequestsV6.find(entry => entry.id === id);
  if (!item) return;
  item.status = 'Ditolak';
  item.rejectionReason = reason;
  toast('Pengajuan ORMAS ditolak.');
  render();
};

function adminReportsPage() {
  const content = `<article class="panel table-panel">
    <div class="panel-head"><div><h3>Daftar Pelaporan Keaktifan ORMAS</h3><p class="muted">Kolom dan data sama dengan form frontend: ORMAS pelapor, nama kegiatan, tanggal, bidang, keterangan, foto, dan status.</p></div><button class="outline-btn" onclick="toast('Simulasi export laporan keaktifan')">Export Excel</button></div>
    <div class="admin-filter-row activity-filter-v6">
      <label>Pencarian<input id="adminActivitySearchV6" placeholder="Nama ORMAS / kegiatan" oninput="renderAdminActivitiesV6()"></label>
      <label>Status<select id="adminActivityStatusV6" onchange="renderAdminActivitiesV6()"><option value="">Semua Status</option><option>Menunggu Verifikasi</option><option>Disetujui</option><option>Ditolak</option></select></label>
      <label>Bidang<select id="adminActivityFieldV6" onchange="renderAdminActivitiesV6()"><option value="">Semua Bidang</option>${fieldData.map(item => `<option>${item.name}</option>`).join('')}</select></label>
    </div>
    <div class="table-scroll"><table><thead><tr><th>No. Laporan</th><th>Tanggal</th><th>ORMAS Pelapor</th><th>Kegiatan</th><th>Bidang</th><th>Wilayah</th><th>Foto</th><th>Status</th><th>Aksi</th></tr></thead><tbody id="adminActivityBodyV6">${adminActivityRowsSyncedV6()}</tbody></table></div>
  </article>`;
  return adminShell(content, 'reports');
}

window.renderAdminActivitiesV6 = function () {
  const q = ($('#adminActivitySearchV6')?.value || '').toLowerCase();
  const status = $('#adminActivityStatusV6')?.value || '';
  const field = $('#adminActivityFieldV6')?.value || '';
  const items = activityReports.filter(item =>
    (!q || `${item.id} ${item.org} ${item.activity}`.toLowerCase().includes(q)) &&
    (!status || item.status === status) &&
    (!field || item.field === field)
  );
  const body = $('#adminActivityBodyV6');
  if (body) body.innerHTML = items.length ? adminActivityRowsSyncedV6(items) : '<tr><td colspan="9" class="empty-state-v6">Data tidak ditemukan.</td></tr>';
};

function adminReportDetail() {
  const report = activityReports.find(item => item.id === selectedActivityId) || activityReports[0];
  const content = `<div class="preview-detail">
    <section class="panel">
      <div class="panel-head"><div><h2>Verifikasi Pelaporan Keaktifan</h2><p class="muted">${report.id} • Data dari form frontend</p></div>${statusBadge(report.status)}</div>
      <div class="detail-grid application-detail-grid-v6">
        <div><small>ORMAS Pelapor</small><b>${report.org}</b></div>
        <div><small>Jenis ORMAS</small><b>${report.orgType || 'Profil terverifikasi'}</b></div>
        <div><small>Wilayah Sekretariat</small><b>${report.orgRegion || '-'}</b></div>
        <div><small>Nama Kegiatan</small><b>${report.activity}</b></div>
        <div><small>Tanggal Kegiatan</small><b>${dateLabelV6(report.date)}</b></div>
        <div><small>Bidang Kegiatan</small><b>${report.field}</b></div>
      </div>
      <h3>Keterangan</h3><p>${report.description}</p>
      <h3>Foto Kegiatan</h3>
      <div class="photo-preview-grid">${Array.from({ length: report.photos }, (_, index) => `<div class="photo-placeholder">📷<span>Foto ${index + 1}</span></div>`).join('')}</div>
      ${report.rejectionReason ? `<div class="notice"><b>Alasan Penolakan:</b> ${report.rejectionReason}</div>` : ''}
    </section>
    <aside class="panel verification-panel">
      <h3>Keputusan Verifikasi Keaktifan</h3>
      <p class="muted">Setuju memperbarui status keaktifan. Tolak wajib disertai alasan. Proses ini tidak mengubah status pendaftaran ORMAS.</p>
      <label>Alasan Penolakan</label>
      <textarea id="rejectionReason" class="note-area" placeholder="Diisi jika laporan ditolak">${report.rejectionReason || ''}</textarea>
      <button class="btn success full-button" onclick="approveReport('${report.id}')">Setujui Laporan</button>
      <button class="btn danger full-button" onclick="rejectReport('${report.id}')">Tolak Laporan</button>
      <button class="outline-btn full-button" onclick="go('#admin-reports')">Kembali ke Daftar</button>
    </aside>
  </div>`;
  return adminShell(content, 'reports');
}

function adminDirectoryV6() {
  const content = `<article class="panel table-panel">
    <div class="panel-head"><div><h3>Direktori ORMAS yang Tampil di Dashboard Publik</h3><p class="muted">Data ORMAS yang telah disetujui dan aman dipublikasikan.</p></div><button class="outline-btn" onclick="go('#public-dashboard')">Pratinjau Publik</button></div>
    <div class="table-scroll"><table><thead><tr><th>No.</th><th>Nama ORMAS</th><th>Nama Ketua</th><th>Wilayah</th><th>Alamat</th><th>Bidang</th><th>Status Keaktifan</th></tr></thead><tbody>${publicDirectoryRows()}</tbody></table></div>
  </article>`;
  return adminShell(content, 'directory');
}

render = function () {
  const route = location.hash || '#home';
  if (route === '#home') app.innerHTML = homePage();
  else if (route === '#ormas-portal') app.innerHTML = portalPage();
  else if (route === '#public-dashboard') app.innerHTML = publicDashboard();
  else if (route === '#registration') app.innerHTML = registrationPage();
  else if (route === '#ormas-login') app.innerHTML = loginPage();
  else if (route === '#application') app.innerHTML = applicationPage();
  else if (route === '#ormas-registration-form') app.innerHTML = ormasRegistrationFormPageV4();
  else if (route === '#activity-report') app.innerHTML = activityReportPage();
  else if (route === '#admin-dashboard') app.innerHTML = adminDashboard();
  else if (route === '#admin-applications') app.innerHTML = adminApplicationsPageV6();
  else if (route === '#admin-application-detail') app.innerHTML = adminApplicationDetailV6();
  else if (route === '#admin-reports') app.innerHTML = adminReportsPage();
  else if (route === '#admin-report-detail') app.innerHTML = adminReportDetail();
  else if (route === '#admin-directory') app.innerHTML = adminDirectoryV6();
  else app.innerHTML = homePage();
  window.scrollTo(0, 0);
  if (route === '#public-dashboard') setTimeout(() => { renderPublicDirectoryV2(); updateRegionDetailV2(publicDirectoryStateV2.region); }, 0);
};

window.addEventListener('hashchange', () => setTimeout(render, 0));
setTimeout(render, 0);

/* Small alignment fix for Admin Direktori column order */
function adminDirectoryRowsV6() {
  return publicDirectory.map((item, index) => `<tr>
    <td>${index + 1}</td>
    <td><b>${item.name}</b></td>
    <td>${item.chair}</td>
    <td>${item.region}</td>
    <td>${item.address}</td>
    <td>${item.field}</td>
    <td>${statusBadge(item.status)}</td>
  </tr>`).join('');
}

function adminDirectoryV6() {
  const content = `<article class="panel table-panel">
    <div class="panel-head"><div><h3>Direktori ORMAS yang Tampil di Dashboard Publik</h3><p class="muted">Data ORMAS yang telah disetujui dan aman dipublikasikan.</p></div><button class="outline-btn" onclick="go('#public-dashboard')">Pratinjau Publik</button></div>
    <div class="table-scroll"><table><thead><tr><th>No.</th><th>Nama ORMAS</th><th>Nama Ketua</th><th>Wilayah</th><th>Alamat</th><th>Bidang</th><th>Status Keaktifan</th></tr></thead><tbody>${adminDirectoryRowsV6()}</tbody></table></div>
  </article>`;
  return adminShell(content, 'directory');
}

/* === FINAL PATCH V7: Dashboard sebagai pusat kerja + detail profil ORMAS === */
let selectedAdminOrmasNameV7 = publicDirectory[0]?.name || 'Jurnal Demokrasi';
let selectedPublicOrmasNameV7 = publicDirectory[0]?.name || 'Jurnal Demokrasi';

const adminOrmasProfilesV7 = {
  'Jurnal Demokrasi': {
    shortName: 'Jurdem', orgType: 'Badan Hukum', email: 'jurnaldemokrasi.poldem@gmail.com', phone: '021-3102401', website: 'jurdem.or.id',
    secretary: 'Rina Kurniawati', treasurer: 'Dedi Saputra', fullAddress: 'Jl. Medan Merdeka Selatan No. 12, Kelurahan Gambir, Kecamatan Gambir, Jakarta Pusat',
    legalNumber: 'AHU-0008123.AH.01.07.Tahun 2025', period: '2025–2030', registeredAt: '12 Januari 2025', lastUpdated: '12 Juli 2026', documents: ['SK Kemenkumham/AHU', 'SK Kepengurusan', 'Surat Domisili', 'Program Kerja', 'NPWP Organisasi']
  },
  'Gerakan Anti Narkoba Nasional': {
    shortName: 'GANNAS', orgType: 'Badan Hukum', email: 'sekretariat@gannas.or.id', phone: '021-8459012', website: 'gannas.or.id',
    secretary: 'Dian Kusuma', treasurer: 'Rudi Setiawan', fullAddress: 'Jalan Remaja II No. 18, Kelurahan Ceger, Kecamatan Cipayung, Jakarta Timur',
    legalNumber: 'AHU-0004967.AH.01.07.Tahun 2024', period: '2024–2029', registeredAt: '19 Juni 2024', lastUpdated: '13 Mei 2026', documents: ['SK Kemenkumham/AHU', 'SK Kepengurusan', 'Surat Tanda Lapor', 'Surat Domisili']
  },
  'Yayasan Peduli Pendidikan Anak Bangsa': {
    shortName: 'YPPA', orgType: 'Non Badan Hukum / SKT', email: 'kontak@yppa.or.id', phone: '021-7884120', website: 'yppa.or.id',
    secretary: 'Rudi Hartono', treasurer: 'Dian Lestari', fullAddress: 'Jl. Raya Pasar Minggu No. 45, Jakarta Selatan',
    legalNumber: 'SKT-2023-00418', period: '2023–2028', registeredAt: '1 Juni 2023', lastUpdated: '7 Juli 2026', documents: ['SKT', 'SK Kepengurusan', 'Program Kerja', 'Surat Domisili', 'Foto Kantor']
  },
  'Komunitas Lingkungan Hijau Jakarta': {
    shortName: 'KLHJ', orgType: 'Non Badan Hukum / SKT', email: 'info@klhj.or.id', phone: '021-4390128', website: 'klhj.or.id',
    secretary: 'Maya Prameswari', treasurer: 'Fajar Nugroho', fullAddress: 'Jl. Yos Sudarso No. 88, Tanjung Priok, Jakarta Utara',
    legalNumber: 'SKT-2022-00271', period: '2022–2027', registeredAt: '18 April 2022', lastUpdated: '10 Juli 2026', documents: ['SKT', 'SK Kepengurusan', 'Surat Domisili', 'Program Kerja']
  },
  'Forum Pemuda Betawi Bersatu': {
    shortName: 'FPBB', orgType: 'Badan Hukum', email: 'sekretariat@fpbb.or.id', phone: '021-5598120', website: 'fpbb.or.id',
    secretary: 'Siti Nurjanah', treasurer: 'Andri Maulana', fullAddress: 'Jl. Daan Mogot KM 12, Cengkareng, Jakarta Barat',
    legalNumber: 'AHU-0012740.AH.01.07.Tahun 2024', period: '2024–2029', registeredAt: '1 Januari 2024', lastUpdated: '9 Juli 2026', documents: ['SK Kemenkumham/AHU', 'SK Kepengurusan', 'Program Kerja', 'NPWP', 'Surat Domisili']
  },
  'Majelis Edukasi Sosial Nusantara': {
    shortName: 'MESN', orgType: 'Non Badan Hukum / SKT', email: 'sekretariat@mesn.or.id', phone: '021-4208812', website: 'mesn.or.id',
    secretary: 'Ahmad Fauzan', treasurer: 'Lina Marlina', fullAddress: 'Jl. Garuda No. 25, Kemayoran, Jakarta Pusat',
    legalNumber: 'SKT-2024-00516', period: '2024–2029', registeredAt: '14 Februari 2024', lastUpdated: '5 Juli 2026', documents: ['SKT', 'SK Kepengurusan', 'Program Kerja', 'Surat Domisili']
  }
};

const extraActivityHistoryV7 = [
  { id: 'AKT-2026-0524', org: 'Gerakan Anti Narkoba Nasional', activity: 'Sosialisasi Pencegahan Narkoba untuk Remaja', date: '2026-05-24', field: 'Sosial', description: 'Edukasi bahaya narkotika dan penguatan peran keluarga.', photos: 3, status: 'Disetujui' },
  { id: 'AKT-2026-0412', org: 'Gerakan Anti Narkoba Nasional', activity: 'Pelatihan Relawan Anti Narkoba', date: '2026-04-12', field: 'Sosial', description: 'Pelatihan relawan tingkat kecamatan.', photos: 3, status: 'Disetujui' },
  { id: 'AKT-2026-0503', org: 'Jurnal Demokrasi', activity: 'Kelas Partisipasi Publik', date: '2026-05-03', field: 'Pendidikan Politik', description: 'Pendidikan partisipasi warga dalam perencanaan pembangunan.', photos: 2, status: 'Disetujui' },
  { id: 'AKT-2026-0321', org: 'Yayasan Peduli Pendidikan Anak Bangsa', activity: 'Donasi Buku dan Kelas Inspirasi', date: '2026-03-21', field: 'Pendidikan', description: 'Distribusi buku dan kelas inspirasi untuk anak.', photos: 3, status: 'Disetujui' },
  { id: 'AKT-2026-0518', org: 'Forum Pemuda Betawi Bersatu', activity: 'Pelatihan Kepemimpinan Pemuda', date: '2026-05-18', field: 'Kepemudaan', description: 'Pelatihan kepemimpinan dan kerja sosial pemuda.', photos: 2, status: 'Disetujui' },
  { id: 'AKT-2026-0427', org: 'Majelis Edukasi Sosial Nusantara', activity: 'Bakti Sosial Ramadan', date: '2026-04-27', field: 'Sosial', description: 'Pemberian paket kebutuhan pokok kepada warga.', photos: 3, status: 'Disetujui' }
];

function allActivityReportsV7() {
  const existingIds = new Set(activityReports.map(item => item.id));
  return [...activityReports, ...extraActivityHistoryV7.filter(item => !existingIds.has(item.id))];
}

function getOrmasDirectoryItemV7(name) {
  return publicDirectory.find(item => item.name === name) || publicDirectory[0];
}

function getOrmasProfileV7(name) {
  const directory = getOrmasDirectoryItemV7(name);
  const profile = adminOrmasProfilesV7[name] || {};
  return {
    ...directory,
    shortName: profile.shortName || directory.name.split(' ').map(word => word[0]).join('').slice(0, 5),
    orgType: profile.orgType || 'Profil ORMAS terverifikasi',
    email: profile.email || 'belum tersedia',
    phone: profile.phone || 'belum tersedia',
    website: profile.website || '-',
    secretary: profile.secretary || '-',
    treasurer: profile.treasurer || '-',
    fullAddress: profile.fullAddress || directory.address,
    legalNumber: profile.legalNumber || '-',
    period: profile.period || '-',
    registeredAt: profile.registeredAt || '-',
    lastUpdated: profile.lastUpdated || '-',
    documents: profile.documents || []
  };
}

function getOrmasActivitiesV7(name) {
  return allActivityReportsV7()
    .filter(item => item.org === name)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function getOrmasApplicationsV7(name) {
  return applicationRequestsV6
    .filter(item => item.org === name)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function urgencyBadgeV7(level) {
  const cls = level === 'Tinggi' ? 'red' : level === 'Sedang' ? 'orange' : 'blue';
  return `<span class="pill ${cls}">${level}</span>`;
}

function workQueueRowsV7() {
  const rows = [
    { priority: 'Tinggi', service: 'Monitoring Pendaftaran', org: 'Yayasan Peduli Pendidikan Anak Bangsa', task: 'Periksa dokumen domisili sekretariat terbaru', updated: '10 menit lalu', due: 'Hari ini', action: "openAdminApplicationV6('ORM-2026-0706')" },
    { priority: 'Tinggi', service: 'Monitoring Keaktifan', org: 'Komunitas Lingkungan Hijau Jakarta', task: 'Verifikasi 3 foto dan keterangan kegiatan', updated: '25 menit lalu', due: 'Hari ini', action: "openAdminReport('AKT-2026-0710')" },
    { priority: 'Sedang', service: 'Monitoring Pendaftaran', org: 'Jurnal Demokrasi', task: 'Validasi SK Kemenkumham dan periode kepengurusan', updated: '1 jam lalu', due: 'Besok', action: "openAdminApplicationV6('ORM-2026-0712')" },
    { priority: 'Sedang', service: 'Profil ORMAS', org: 'Komunitas Lingkungan Hijau Jakarta', task: 'Tinjau status tidak aktif dan riwayat laporan', updated: '2 jam lalu', due: '2 hari', action: "openAdminOrmasV7('Komunitas Lingkungan Hijau Jakarta')" },
    { priority: 'Rendah', service: 'Direktori ORMAS', org: 'Forum Pemuda Betawi Bersatu', task: 'Periksa pembaruan informasi publik', updated: 'Kemarin', due: '3 hari', action: "openAdminOrmasV7('Forum Pemuda Betawi Bersatu')" }
  ];
  return rows.map((item, index) => `<tr>
    <td>${index + 1}</td><td>${urgencyBadgeV7(item.priority)}</td><td><b>${item.service}</b></td>
    <td><button class="link-button-v7" onclick="openAdminOrmasV7('${item.org.replace(/'/g, "\\'")}')">${item.org}</button><br><small>${item.task}</small></td>
    <td>${item.updated}</td><td><b>${item.due}</b></td><td><button class="btn tiny" onclick="${item.action}">Kerjakan</button></td>
  </tr>`).join('');
}

function recentActivityTimelineV7() {
  const events = [
    ['10:35', 'Laporan keaktifan baru masuk', 'Komunitas Lingkungan Hijau Jakarta • Aksi Bersih Pesisir'],
    ['10:02', 'Pengajuan meminta perbaikan', 'Yayasan Peduli Pendidikan Anak Bangsa • Dokumen domisili'],
    ['09:40', 'Pengajuan pendaftaran disetujui', 'Forum Pemuda Betawi Bersatu'],
    ['09:15', 'Laporan kegiatan disetujui', 'Yayasan Peduli Pendidikan Anak Bangsa • Kelas Literasi Anak'],
    ['Kemarin', 'Profil ORMAS diperbarui', 'Jurnal Demokrasi • Periode kepengurusan']
  ];
  return `<div class="activity-feed-v7">${events.map((item, index) => `<div class="activity-feed-item-v7"><span class="activity-dot-v7 ${index < 2 ? 'alert' : ''}"></span><div><small>${item[0]}</small><b>${item[1]}</b><p>${item[2]}</p></div></div>`).join('')}</div>`;
}

function operationalSummaryV7() {
  return `<div class="work-summary-grid-v7">
    <button class="work-summary-v7 urgent" onclick="go('#admin-applications')"><span>Pengajuan baru</span><b>${applicationRequestsV6.filter(item => item.status === 'Menunggu Verifikasi').length}</b><small>Perlu pemeriksaan awal</small></button>
    <button class="work-summary-v7 warning" onclick="go('#admin-reports')"><span>Laporan kegiatan baru</span><b>${activityReports.filter(item => item.status === 'Menunggu Verifikasi').length}</b><small>Foto dan keterangan perlu ditinjau</small></button>
    <button class="work-summary-v7 danger" onclick="go('#admin-applications')"><span>Melewati target waktu</span><b>1</b><small>Segera ditindaklanjuti</small></button>
    <button class="work-summary-v7 success" onclick="go('#admin-directory')"><span>Profil perlu pembaruan</span><b>4</b><small>Masa bakti/kontak mendekati batas</small></button>
  </div>`;
}

function adminQuickDirectoryRowsV7() {
  return publicDirectory.slice(0, 6).map((item, index) => `<tr class="clickable-row-v7" onclick="openAdminOrmasV7('${item.name.replace(/'/g, "\\'")}')">
    <td>${index + 1}</td><td><b>${item.name}</b><br><small>${getOrmasProfileV7(item.name).orgType}</small></td><td>${item.chair}</td><td>${item.region}</td><td>${item.field}</td><td>${statusBadge(item.status)}</td><td><button class="btn tiny" onclick="event.stopPropagation();openAdminOrmasV7('${item.name.replace(/'/g, "\\'")}')">Lihat Profil</button></td>
  </tr>`).join('');
}

function adminDashboard() {
  const pendingApplications = applicationRequestsV6.filter(item => item.status === 'Menunggu Verifikasi').length;
  const waitingActivities = activityReports.filter(item => item.status === 'Menunggu Verifikasi').length;
  const approvedActivities = activityReports.filter(item => item.status === 'Disetujui').length;
  const activeOrganizations = publicDirectory.filter(item => approvedWithinOneYear(item.name) || item.status === 'Aktif').length;
  const content = `<section class="work-center-v7">
      <div class="work-center-head-v7"><div><span class="pill cyan">Pusat Kendali Pegawai</span><h2>Apa yang perlu dikerjakan hari ini?</h2><p>Prioritas disusun dari pengajuan baru, laporan keaktifan, target waktu layanan, dan data ORMAS yang perlu diperbarui.</p></div><div class="work-center-date-v7"><small>Selasa</small><b>22 Juli 2026</b><span>Data simulasi prototype</span></div></div>
      ${operationalSummaryV7()}
      <div class="work-center-grid-v7">
        <article class="panel table-panel"><div class="panel-head"><div><h3>Tugas Berikutnya</h3><p class="muted">Urutan pekerjaan yang disarankan untuk pegawai.</p></div><button class="outline-btn" onclick="go('#admin-applications')">Semua Pekerjaan</button></div><div class="table-scroll"><table><thead><tr><th>No.</th><th>Prioritas</th><th>Layanan</th><th>ORMAS & Tugas</th><th>Pembaruan</th><th>Target</th><th>Aksi</th></tr></thead><tbody>${workQueueRowsV7()}</tbody></table></div></article>
        <article class="panel"><div class="panel-head"><div><h3>Aktivitas Terbaru</h3><p class="muted">Riwayat perubahan sistem terbaru.</p></div></div>${recentActivityTimelineV7()}</article>
      </div>
    </section>
    <div class="section-divider-title-v7"><div><h2>Ringkasan Monitoring</h2><p>Ikhtisar pendaftaran, keaktifan, dan status ORMAS.</p></div></div>
    <div class="kpi-grid admin-kpis synced-kpis-v6">
      ${kpi('Total ORMAS', publicDirectory.length, 'Direktori prototype', 'blue', '🏢')}
      ${kpi('Pengajuan Menunggu', pendingApplications, 'Monitoring Pendaftaran', 'yellow', '⏳')}
      ${kpi('Laporan Menunggu', waitingActivities, 'Monitoring Keaktifan', 'yellow', '📷')}
      ${kpi('Laporan Disetujui', approvedActivities, 'Menjadi riwayat keaktifan', 'green', '✓')}
      ${kpi('ORMAS Aktif', activeOrganizations, 'Berdasarkan laporan terverifikasi', 'green', '●')}
      ${kpi('Perlu Pembaruan', 4, 'Profil/kepengurusan/kontak', 'red', '⚠')}
    </div>
    <div class="admin-sync-grid-v6">
      <article class="panel"><div class="panel-head"><div><h3>Tren Pendaftaran ORMAS</h3><p class="muted">Pengajuan dari halaman pendaftaran.</p></div><button class="outline-btn" onclick="go('#admin-applications')">Monitoring Pendaftaran</button></div>${verticalBars([{month:'Jan',total:18},{month:'Feb',total:24},{month:'Mar',total:31},{month:'Apr',total:29},{month:'Mei',total:38},{month:'Jun',total:44},{month:'Jul',total:applicationRequestsV6.length + 42}])}</article>
      <article class="panel"><div class="panel-head"><div><h3>Tren Pelaporan Keaktifan</h3><p class="muted">Laporan kegiatan dari ORMAS.</p></div><button class="outline-btn" onclick="go('#admin-reports')">Monitoring Keaktifan</button></div>${verticalBars(monthlyReports)}</article>
    </div>
    <article class="panel table-panel"><div class="panel-head"><div><h3>Direktori ORMAS — Akses Cepat</h3><p class="muted">Klik baris untuk melihat profil lengkap, riwayat pendaftaran, dan pelaporan kegiatan.</p></div><button class="outline-btn" onclick="go('#admin-directory')">Buka Direktori Lengkap</button></div><div class="table-scroll"><table><thead><tr><th>No.</th><th>Nama ORMAS</th><th>Ketua</th><th>Wilayah</th><th>Bidang</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${adminQuickDirectoryRowsV7()}</tbody></table></div></article>`;
  return adminShell(content, 'dashboard');
}

window.openAdminOrmasV7 = function (name) {
  selectedAdminOrmasNameV7 = name;
  go('#admin-ormas-detail');
};

window.openPublicOrmasV7 = function (name) {
  selectedPublicOrmasNameV7 = name;
  go('#public-ormas-detail');
};

function organizationApplicationHistoryV7(name) {
  const apps = getOrmasApplicationsV7(name);
  if (!apps.length) return '<div class="empty-state-v7">Belum ada riwayat pengajuan pada data prototype.</div>';
  return `<div class="table-scroll"><table><thead><tr><th>No. Pengajuan</th><th>Tanggal</th><th>Jenis</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${apps.map(item => `<tr><td>${item.id}</td><td>${dateLabelV6(item.date)}</td><td>${item.requestType}</td><td>${registrationStatusBadgeV6(item.status)}</td><td><button class="btn tiny" onclick="openAdminApplicationV6('${item.id}')">Buka</button></td></tr>`).join('')}</tbody></table></div>`;
}

function organizationActivityHistoryV7(name, isPublic = false) {
  const items = getOrmasActivitiesV7(name);
  if (!items.length) return '<div class="empty-state-v7">Belum ada pelaporan kegiatan.</div>';
  return `<div class="activity-history-grid-v7">${items.map(item => `<article class="activity-history-card-v7"><div class="activity-history-top-v7"><span class="pill blue">${item.field}</span>${statusBadge(item.status)}</div><h4>${item.activity}</h4><p>${item.description}</p><div class="activity-history-meta-v7"><span>📅 ${dateLabelV6(item.date)}</span><span>📷 ${item.photos || 0} foto</span></div>${isPublic ? '' : `<button class="outline-btn" onclick="openAdminReport('${item.id}')">Lihat Laporan</button>`}</article>`).join('')}</div>`;
}

function organizationTimelineV7(name) {
  const profile = getOrmasProfileV7(name);
  const activities = getOrmasActivitiesV7(name);
  const apps = getOrmasApplicationsV7(name);
  const events = [
    ...apps.map(item => ({ date: item.date, title: `${item.requestType} — ${item.status}`, detail: item.id })),
    ...activities.map(item => ({ date: item.date, title: `Pelaporan kegiatan: ${item.activity}`, detail: `${item.field} • ${item.status}` })),
    { date: '2025-01-12', title: 'Profil ORMAS tercatat pada sistem', detail: `Nomor legalitas: ${profile.legalNumber}` }
  ].sort((a,b) => String(b.date).localeCompare(String(a.date))).slice(0, 10);
  return `<div class="timeline-v7">${events.map(event => `<div class="timeline-item-v7"><span></span><div><small>${dateLabelV6(event.date)}</small><b>${event.title}</b><p>${event.detail}</p></div></div>`).join('')}</div>`;
}

function adminOrmasDetailV7() {
  const profile = getOrmasProfileV7(selectedAdminOrmasNameV7);
  const activities = getOrmasActivitiesV7(profile.name);
  const content = `<div class="profile-hero-v7"><div class="profile-avatar-v7">${profile.shortName}</div><div><span class="pill green">Profil ORMAS Terverifikasi</span><h2>${profile.name}</h2><p>${profile.orgType} • ${profile.field} • ${profile.region}</p></div><div class="profile-hero-actions-v7"><button class="outline-btn" onclick="toast('Simulasi mengirim pengingat kepada ORMAS')">Kirim Pengingat</button><button class="btn blue" onclick="go('#admin-reports')">Monitoring Keaktifan</button></div></div>
    <div class="profile-layout-v7">
      <div>
        <article class="panel"><div class="panel-head"><div><h3>Informasi Lengkap ORMAS</h3><p class="muted">Data internal untuk pegawai.</p></div><button class="outline-btn" onclick="toast('Simulasi edit profil ORMAS')">Edit Profil</button></div><div class="detail-grid-v7">
          <div><small>Nama Singkatan</small><b>${profile.shortName}</b></div><div><small>Status Keaktifan</small><b>${statusBadge(profile.status)}</b></div>
          <div><small>Ketua</small><b>${profile.chair}</b></div><div><small>Sekretaris</small><b>${profile.secretary}</b></div><div><small>Bendahara</small><b>${profile.treasurer}</b></div>
          <div><small>Periode Kepengurusan</small><b>${profile.period}</b></div><div><small>Nomor Legalitas</small><b>${profile.legalNumber}</b></div><div><small>Tanggal Terdaftar</small><b>${profile.registeredAt}</b></div>
          <div><small>Email Organisasi</small><b>${profile.email}</b></div><div><small>Telepon</small><b>${profile.phone}</b></div><div><small>Website</small><b>${profile.website}</b></div>
          <div class="wide-v7"><small>Alamat Sekretariat</small><b>${profile.fullAddress}</b></div><div><small>Pembaruan Terakhir</small><b>${profile.lastUpdated}</b></div>
        </div></article>
        <article class="panel"><div class="panel-head"><div><h3>Riwayat Pelaporan Kegiatan</h3><p class="muted">${activities.length} laporan kegiatan tercatat pada prototype.</p></div><button class="outline-btn" onclick="go('#admin-reports')">Lihat Semua Laporan</button></div>${organizationActivityHistoryV7(profile.name)}</article>
        <article class="panel"><div class="panel-head"><div><h3>Riwayat Pengajuan/Pendaftaran</h3><p class="muted">Perubahan dan pengajuan layanan ORMAS.</p></div></div>${organizationApplicationHistoryV7(profile.name)}</article>
      </div>
      <aside>
        <article class="panel"><h3>Ringkasan Aktivitas</h3><div class="profile-stat-list-v7"><div><span>Total laporan</span><b>${activities.length}</b></div><div><span>Laporan disetujui</span><b>${activities.filter(item => item.status === 'Disetujui').length}</b></div><div><span>Menunggu verifikasi</span><b>${activities.filter(item => item.status === 'Menunggu Verifikasi').length}</b></div><div><span>Kegiatan terakhir</span><b>${activities[0] ? dateLabelV6(activities[0].date) : '-'}</b></div></div></article>
        <article class="panel"><h3>Dokumen Profil</h3><div class="document-list-v7">${profile.documents.map(name => `<button onclick="toast('Simulasi membuka ${name}')">📎 <span>${name}</span><small>Lihat</small></button>`).join('')}</div></article>
        <article class="panel"><h3>Timeline ORMAS</h3>${organizationTimelineV7(profile.name)}</article>
      </aside>
    </div>`;
  return adminShell(content, 'directory');
}

function adminDirectoryRowsV7() {
  return publicDirectory.map((item, index) => `<tr class="clickable-row-v7" onclick="openAdminOrmasV7('${item.name.replace(/'/g, "\\'")}')">
    <td>${index + 1}</td><td><button class="link-button-v7" onclick="event.stopPropagation();openAdminOrmasV7('${item.name.replace(/'/g, "\\'")}')">${item.name}</button></td><td>${item.chair}</td><td>${item.region}</td><td>${item.address}</td><td>${item.field}</td><td>${statusBadge(item.status)}</td><td><button class="btn tiny" onclick="event.stopPropagation();openAdminOrmasV7('${item.name.replace(/'/g, "\\'")}')">Detail</button></td>
  </tr>`).join('');
}

function adminDirectoryV6() {
  const content = `<article class="panel table-panel"><div class="panel-head"><div><h3>Direktori ORMAS</h3><p class="muted">Klik nama atau baris ORMAS untuk melihat informasi lengkap, riwayat pengajuan, dan pelaporan kegiatan.</p></div><button class="outline-btn" onclick="go('#public-dashboard')">Pratinjau Publik</button></div><div class="admin-filter-row"><label>Pencarian<input id="adminDirectorySearchV7" placeholder="Nama ORMAS, ketua, wilayah, bidang" oninput="renderAdminDirectoryV7()"></label><label>Status<select id="adminDirectoryStatusV7" onchange="renderAdminDirectoryV7()"><option value="">Semua Status</option><option>Aktif</option><option>Tidak Aktif</option></select></label></div><div class="table-scroll"><table><thead><tr><th>No.</th><th>Nama ORMAS</th><th>Nama Ketua</th><th>Wilayah</th><th>Alamat</th><th>Bidang</th><th>Status Keaktifan</th><th>Aksi</th></tr></thead><tbody id="adminDirectoryBodyV7">${adminDirectoryRowsV7()}</tbody></table></div></article>`;
  return adminShell(content, 'directory');
}

window.renderAdminDirectoryV7 = function () {
  const q = ($('#adminDirectorySearchV7')?.value || '').toLowerCase();
  const status = $('#adminDirectoryStatusV7')?.value || '';
  const items = publicDirectory.filter(item => (!q || `${item.name} ${item.chair} ${item.region} ${item.address} ${item.field}`.toLowerCase().includes(q)) && (!status || item.status === status));
  const body = $('#adminDirectoryBodyV7');
  if (!body) return;
  body.innerHTML = items.length ? items.map((item, index) => `<tr class="clickable-row-v7" onclick="openAdminOrmasV7('${item.name.replace(/'/g, "\\'")}')"><td>${index + 1}</td><td><button class="link-button-v7" onclick="event.stopPropagation();openAdminOrmasV7('${item.name.replace(/'/g, "\\'")}')">${item.name}</button></td><td>${item.chair}</td><td>${item.region}</td><td>${item.address}</td><td>${item.field}</td><td>${statusBadge(item.status)}</td><td><button class="btn tiny" onclick="event.stopPropagation();openAdminOrmasV7('${item.name.replace(/'/g, "\\'")}')">Detail</button></td></tr>`).join('') : '<tr><td colspan="8" class="empty-state-v7">Data tidak ditemukan.</td></tr>';
};

function publicOrmasDetailV7() {
  const profile = getOrmasProfileV7(selectedPublicOrmasNameV7);
  return `${publicHeader()}<main class="page public-only"><div class="container"><div class="crumb">Dashboard Publik / Direktori ORMAS / ${profile.name}</div><div class="profile-hero-v7 public-profile-v7"><div class="profile-avatar-v7">${profile.shortName}</div><div><span class="pill green">Data Publik ORMAS</span><h1>${profile.name}</h1><p>${profile.orgType} • ${profile.field} • ${profile.region}</p></div><button class="outline-btn" onclick="go('#public-dashboard')">Kembali ke Direktori</button></div><div class="profile-layout-v7"><div><article class="panel"><h3>Informasi Organisasi</h3><div class="detail-grid-v7"><div><small>Nama Ketua</small><b>${profile.chair}</b></div><div><small>Status Keaktifan</small><b>${statusBadge(profile.status)}</b></div><div><small>Wilayah</small><b>${profile.region}</b></div><div><small>Bidang</small><b>${profile.field}</b></div><div><small>Email Organisasi</small><b>${profile.email}</b></div><div><small>Telepon Organisasi</small><b>${profile.phone}</b></div><div><small>Website</small><b>${profile.website}</b></div><div class="wide-v7"><small>Alamat Sekretariat</small><b>${profile.fullAddress}</b></div></div></article><article class="panel"><div class="panel-head"><div><h3>Riwayat Kegiatan yang Dipublikasikan</h3><p class="muted">Hanya kegiatan yang telah disetujui ditampilkan.</p></div></div>${organizationActivityHistoryV7(profile.name, true)}</article></div><aside><article class="panel"><h3>Kontak dan Kolaborasi</h3><p>Masyarakat atau ORMAS lain dapat menghubungi kontak organisasi yang telah disetujui untuk dipublikasikan.</p><button class="btn blue full-button" onclick="toast('Simulasi membuka email ${profile.email}')">Hubungi melalui Email</button><button class="outline-btn full-button" onclick="toast('Simulasi membuka website ${profile.website}')">Buka Website</button></article><article class="public-privacy-note-v7"><b>Batasan Informasi Publik</b><p>NIK, nomor HP pribadi pengurus, dokumen unggahan, catatan verifikasi, dan data internal tidak ditampilkan.</p></article></aside></div></div></main>${footer()}`;
}

const publicDirectoryRowsBeforeV7 = publicDirectoryRows;
publicDirectoryRows = function () {
  return publicDirectory.map((item, index) => `<tr class="clickable-row-v7" data-region="${item.region}" data-field="${item.field}" onclick="openPublicOrmasV7('${item.name.replace(/'/g, "\\'")}')"><td>${index + 1}</td><td><button class="link-button-v7" onclick="event.stopPropagation();openPublicOrmasV7('${item.name.replace(/'/g, "\\'")}')">${item.name}</button></td><td>${item.chair}</td><td>${item.address}</td><td>${item.field}</td><td>${item.region}</td><td>${statusBadge(item.status)}</td></tr>`).join('');
};

render = function () {
  const route = location.hash || '#home';
  if (route === '#home') app.innerHTML = homePage();
  else if (route === '#ormas-portal') app.innerHTML = portalPage();
  else if (route === '#public-dashboard') app.innerHTML = publicDashboard();
  else if (route === '#public-ormas-detail') app.innerHTML = publicOrmasDetailV7();
  else if (route === '#registration') app.innerHTML = registrationPage();
  else if (route === '#ormas-login') app.innerHTML = loginPage();
  else if (route === '#application') app.innerHTML = applicationPage();
  else if (route === '#ormas-registration-form') app.innerHTML = ormasRegistrationFormPageV4();
  else if (route === '#activity-report') app.innerHTML = activityReportPage();
  else if (route === '#admin-dashboard') app.innerHTML = adminDashboard();
  else if (route === '#admin-applications') app.innerHTML = adminApplicationsPageV6();
  else if (route === '#admin-application-detail') app.innerHTML = adminApplicationDetailV6();
  else if (route === '#admin-reports') app.innerHTML = adminReportsPage();
  else if (route === '#admin-report-detail') app.innerHTML = adminReportDetail();
  else if (route === '#admin-directory') app.innerHTML = adminDirectoryV6();
  else if (route === '#admin-ormas-detail') app.innerHTML = adminOrmasDetailV7();
  else app.innerHTML = homePage();
  window.scrollTo(0, 0);
  if (route === '#public-dashboard') setTimeout(() => { renderPublicDirectoryV2(); updateRegionDetailV2(publicDirectoryStateV2.region); }, 0);
};

/* V7.1: make the paginated public directory clickable as well */
getOrmasDirectoryItemV7 = function (name) {
  return publicDirectory.find(item => item.name === name) || publicDirectoryV2.find(item => item.name === name) || publicDirectory[0];
};

getOrmasProfileV7 = function (name) {
  const directory = getOrmasDirectoryItemV7(name);
  const profile = adminOrmasProfilesV7[name] || {};
  return {
    ...directory,
    shortName: profile.shortName || directory.name.split(' ').map(word => word[0]).join('').slice(0, 5),
    orgType: profile.orgType || 'ORMAS terdata',
    email: profile.email || `sekretariat@${directory.name.toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 16)}.or.id`,
    phone: profile.phone || 'Kontak tersedia melalui sekretariat',
    website: profile.website || '-',
    secretary: profile.secretary || '-',
    treasurer: profile.treasurer || '-',
    fullAddress: profile.fullAddress || directory.address,
    legalNumber: profile.legalNumber || '-',
    period: profile.period || '-',
    registeredAt: profile.registeredAt || '-',
    lastUpdated: profile.lastUpdated || 'Juli 2026',
    documents: profile.documents || []
  };
};

renderPublicDirectoryV2 = function () {
  const body = document.querySelector('#publicDirectoryBodyV2');
  const pages = document.querySelector('#publicDirectoryPagesV2');
  const info = document.querySelector('#publicDirectoryInfoV2');
  if (!body || !pages || !info) return;
  const filtered = filteredPublicDirectoryV2();
  const totalPages = Math.max(1, Math.ceil(filtered.length / publicDirectoryStateV2.perPage));
  if (publicDirectoryStateV2.page > totalPages) publicDirectoryStateV2.page = totalPages;
  const start = (publicDirectoryStateV2.page - 1) * publicDirectoryStateV2.perPage;
  const rows = filtered.slice(start, start + publicDirectoryStateV2.perPage);
  body.innerHTML = rows.length ? rows.map((item, index) => `<tr class="clickable-row-v7" onclick="openPublicOrmasV7('${item.name.replace(/'/g, "\\'")}')"><td>${start + index + 1}</td><td><button class="link-button-v7" onclick="event.stopPropagation();openPublicOrmasV7('${item.name.replace(/'/g, "\\'")}')">${item.name}</button></td><td>${item.chair}</td><td>${item.region}</td><td>${item.address}</td><td>${item.field}</td><td>${statusBadge(item.status)}</td></tr>`).join('') : `<tr><td class="empty-directory" colspan="7">Data ORMAS tidak ditemukan.</td></tr>`;
  const first = filtered.length ? start + 1 : 0;
  const last = Math.min(start + publicDirectoryStateV2.perPage, filtered.length);
  info.textContent = `Menampilkan ${first}-${last} dari ${filtered.length} ORMAS • Klik baris untuk melihat profil publik`;
  let html = `<button class="page-btn" ${publicDirectoryStateV2.page === 1 ? 'disabled' : ''} onclick="changePublicDirectoryPageV2(${publicDirectoryStateV2.page - 1})">Sebelumnya</button>`;
  for (let p = 1; p <= totalPages; p++) html += `<button class="page-btn ${p === publicDirectoryStateV2.page ? 'active' : ''}" onclick="changePublicDirectoryPageV2(${p})">${p}</button>`;
  html += `<button class="page-btn" ${publicDirectoryStateV2.page === totalPages ? 'disabled' : ''} onclick="changePublicDirectoryPageV2(${publicDirectoryStateV2.page + 1})">Berikutnya</button>`;
  pages.innerHTML = html;
};

/* === FINAL PATCH V8: Dashboard ORMAS / self-service portal === */
let selectedOrmasAccountIdV8 = 'jurnal-demokrasi';
let preferredActivityOrmasIdV8 = 'jurnal-demokrasi';
let ormasChangeRequestsV8 = [
  {
    id: 'UBH-2026-0018',
    org: 'Jurnal Demokrasi',
    type: 'Perubahan Kontak Organisasi',
    date: '2026-07-08',
    status: 'Menunggu Verifikasi',
    note: 'Perubahan nomor telepon sekretariat.'
  },
  {
    id: 'UBH-2026-0012',
    org: 'Yayasan Peduli Pendidikan Anak Bangsa',
    type: 'Perubahan Alamat Sekretariat',
    date: '2026-06-29',
    status: 'Perlu Perbaikan',
    note: 'Dokumen domisili terbaru masih perlu dilengkapi.'
  }
];

const ormasAccountsV8 = [
  {
    id: 'jurnal-demokrasi',
    name: 'Jurnal Demokrasi',
    shortName: 'Jurdem',
    orgType: 'Badan Hukum',
    region: 'Jakarta Pusat',
    district: 'Gambir',
    field: 'Pendidikan Politik',
    status: 'Aktif',
    registrationStatus: 'Disetujui',
    registrationProcess: 'Pelaporan Keberadaan ORMAS Berbadan Hukum',
    registrationOutput: 'Tercatat dalam database ORMAS DKI Jakarta',
    legalLabel: 'Nomor SK Kemenkumham/AHU',
    legalNumber: 'AHU-0008123.AH.01.07.Tahun 2025',
    letterLabel: 'Surat Tanda Lapor Keberadaan',
    letterNumber: 'e-0188/PU.13.02',
    period: '2025–2030',
    periodEnd: '31 Desember 2030',
    chair: 'Hendra Irawan',
    secretary: 'Rina Kurniawati',
    treasurer: 'Dedi Saputra',
    address: 'Jl. Medan Merdeka Selatan No. 12, Gambir, Jakarta Pusat',
    email: 'jurnaldemokrasi.poldem@gmail.com',
    phone: '021-3102401',
    website: 'jurdem.or.id',
    lastReportDate: '10 Juli 2026',
    documents: [
      ['SK Kemenkumham/AHU', 'Terverifikasi'],
      ['SK Kepengurusan', 'Berlaku hingga 2030'],
      ['Surat Tanda Lapor Keberadaan', 'Tersedia untuk diunduh'],
      ['Surat Domisili', 'Terverifikasi'],
      ['Program Kerja', 'Terverifikasi']
    ]
  },
  {
    id: 'yayasan-pendidikan-anak',
    name: 'Yayasan Peduli Pendidikan Anak Bangsa',
    shortName: 'YPPA',
    orgType: 'Non Badan Hukum / SKT',
    region: 'Jakarta Selatan',
    district: 'Pasar Minggu',
    field: 'Pendidikan',
    status: 'Aktif',
    registrationStatus: 'Disetujui',
    registrationProcess: 'Pendaftaran ORMAS Non Badan Hukum',
    registrationOutput: 'SKT diterbitkan',
    legalLabel: 'Nomor SKT',
    legalNumber: 'SKT-2023-00418',
    letterLabel: 'Surat Keterangan Terdaftar',
    letterNumber: 'SKT-2023-00418',
    period: '2023–2028',
    periodEnd: '31 Mei 2028',
    chair: 'Nur Aisyah',
    secretary: 'Rudi Hartono',
    treasurer: 'Dian Lestari',
    address: 'Jl. Raya Pasar Minggu No. 45, Jakarta Selatan',
    email: 'kontak@yppa.or.id',
    phone: '021-7884120',
    website: 'yppa.or.id',
    lastReportDate: '7 Juli 2026',
    documents: [
      ['Surat Keterangan Terdaftar (SKT)', 'Tersedia untuk diunduh'],
      ['SK Kepengurusan', 'Berlaku hingga 2028'],
      ['Program Kerja', 'Terverifikasi'],
      ['Surat Domisili', 'Perlu pembaruan'],
      ['Foto Kantor', 'Terverifikasi']
    ]
  }
];

const supplementalActivitiesV8 = [
  { id: 'AKT-2026-0715', org: 'Jurnal Demokrasi', activity: 'Diskusi Publik Demokrasi Lokal', date: '2026-07-10', field: 'Pendidikan Politik', description: 'Diskusi publik mengenai partisipasi masyarakat dalam kebijakan daerah.', photos: 3, status: 'Menunggu Verifikasi' },
  { id: 'AKT-2026-0608', org: 'Jurnal Demokrasi', activity: 'Sekolah Demokrasi untuk Pemuda', date: '2026-06-08', field: 'Pendidikan Politik', description: 'Pelatihan dasar demokrasi dan kepemimpinan bagi pemuda.', photos: 3, status: 'Disetujui' },
  { id: 'AKT-2026-0419', org: 'Jurnal Demokrasi', activity: 'Forum Warga dan Musrenbang', date: '2026-04-19', field: 'Pendidikan Politik', description: 'Pendampingan warga untuk memahami proses musyawarah perencanaan pembangunan.', photos: 2, status: 'Disetujui' },
  { id: 'AKT-2026-0625', org: 'Yayasan Peduli Pendidikan Anak Bangsa', activity: 'Kelas Literasi Anak Rusun', date: '2026-06-25', field: 'Pendidikan', description: 'Kelas literasi dan pendampingan membaca bagi anak usia sekolah.', photos: 3, status: 'Disetujui' },
  { id: 'AKT-2026-0511', org: 'Yayasan Peduli Pendidikan Anak Bangsa', activity: 'Pelatihan Relawan Pengajar', date: '2026-05-11', field: 'Pendidikan', description: 'Pelatihan metode mengajar kreatif bagi relawan.', photos: 2, status: 'Disetujui' }
];

function selectedOrmasAccountV8() {
  return ormasAccountsV8.find(item => item.id === selectedOrmasAccountIdV8) || ormasAccountsV8[0];
}

function ormasActivitiesV8(orgName = selectedOrmasAccountV8().name) {
  const base = typeof allActivityReportsV7 === 'function' ? allActivityReportsV7() : activityReports;
  const seen = new Set();
  return [...base, ...supplementalActivitiesV8]
    .filter(item => item.org === orgName)
    .filter(item => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    })
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function ormasApplicationsV8(orgName = selectedOrmasAccountV8().name) {
  return applicationRequestsV6
    .filter(item => item.org === orgName)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function ormasChangeRequestsForV8(orgName = selectedOrmasAccountV8().name) {
  return ormasChangeRequestsV8
    .filter(item => item.org === orgName)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function ormasStatusBadgeV8(status) {
  return registrationStatusBadgeV6(status);
}

window.setSelectedOrmasV8 = function (id) {
  selectedOrmasAccountIdV8 = id;
  const match = linkedOrmasAccountsV5.find(item => item.name === selectedOrmasAccountV8().name);
  if (match) preferredActivityOrmasIdV8 = match.id;
  render();
};

function ormasAccountSelectorV8() {
  const selected = selectedOrmasAccountV8();
  return `<div class="ormas-account-selector-v8">
    <label>ORMAS Aktif</label>
    <select onchange="setSelectedOrmasV8(this.value)">
      ${ormasAccountsV8.map(item => `<option value="${item.id}" ${item.id === selected.id ? 'selected' : ''}>${item.name}</option>`).join('')}
    </select>
    <small>Satu akun prototype terhubung ke ${ormasAccountsV8.length} ORMAS.</small>
  </div>`;
}

function ormasShellV8(content, active = 'dashboard') {
  const org = selectedOrmasAccountV8();
  const titles = {
    dashboard: ['Dashboard ORMAS', 'Ringkasan profil, kegiatan, dokumen, dan tindakan yang perlu dilakukan'],
    profile: ['Profil ORMAS', 'Informasi organisasi yang telah diverifikasi'],
    registration: ['Status Pendaftaran', 'Status proses pendaftaran dan keluaran legalitas ORMAS'],
    activities: ['Pelaporan Kegiatan', 'Riwayat laporan kegiatan dan pengajuan laporan baru'],
    changes: ['Pengajuan Perubahan Data', 'Ajukan perubahan data tanpa mengubah data terverifikasi secara langsung'],
    documents: ['Dokumen & Surat', 'Dokumen legalitas dan surat yang dapat dilihat atau diunduh'],
    history: ['Riwayat Pengajuan', 'Seluruh aktivitas dan proses layanan ORMAS']
  };
  const [title, subtitle] = titles[active] || titles.dashboard;
  return `<div class="ormas-app-shell-v8">
    <aside class="ormas-sidebar-v8">
      <a class="ormas-side-brand-v8" href="#home"><div class="logo-mark"></div><div><b>BAKESBANGPOL</b><span>Portal ORMAS</span></div></a>
      ${ormasAccountSelectorV8()}
      <div class="ormas-account-note-v8"><b>Catatan akun</b><p>Jika kebijakan final menetapkan satu akun hanya untuk satu ORMAS, pilihan ORMAS ini dapat diisi otomatis dan disembunyikan.</p></div>
      <nav class="ormas-side-nav-v8">
        <span>MENU ORMAS</span>
        <a class="${active === 'dashboard' ? 'active' : ''}" href="#ormas-dashboard">Dashboard ORMAS</a>
        <a class="${active === 'profile' ? 'active' : ''}" href="#ormas-profile">Profil ORMAS</a>
        <a class="${active === 'registration' ? 'active' : ''}" href="#ormas-registration-status">Status Pendaftaran</a>
        <a class="${active === 'activities' ? 'active' : ''}" href="#ormas-activities">Pelaporan Kegiatan</a>
        <a class="${active === 'changes' ? 'active' : ''}" href="#ormas-change-request">Pengajuan Perubahan Data</a>
        <a class="${active === 'documents' ? 'active' : ''}" href="#ormas-documents">Dokumen & Surat</a>
        <a class="${active === 'history' ? 'active' : ''}" href="#ormas-history">Riwayat Pengajuan</a>
      </nav>
      <div class="ormas-side-profile-v8"><div class="ormas-avatar-v8">${org.shortName.slice(0, 3).toUpperCase()}</div><div><b>${org.shortName}</b><small>${org.status} • ${org.region}</small></div></div>
    </aside>
    <main class="ormas-main-v8">
      <header class="ormas-header-v8"><div><h1>${title}</h1><p>${subtitle}</p></div><div class="ormas-header-actions-v8"><button class="outline-btn" onclick="go('#public-dashboard')">Dashboard Publik</button><button class="btn danger" onclick="go('#home')">Keluar</button></div></header>
      <section class="ormas-content-v8">${content}</section>
    </main>
  </div>`;
}

function ormasDashboardTasksV8(org) {
  const tasks = org.id === 'jurnal-demokrasi'
    ? [
        { tone: 'warning', title: '1 laporan kegiatan menunggu verifikasi', desc: 'Diskusi Publik Demokrasi Lokal telah dikirim pada 10 Juli 2026.', action: "go('#ormas-activities')", button: 'Lihat Status' },
        { tone: 'info', title: 'Periksa data kontak organisasi', desc: 'Pengajuan perubahan nomor telepon masih dalam proses verifikasi.', action: "go('#ormas-change-request')", button: 'Lihat Pengajuan' },
        { tone: 'success', title: 'Periode kepengurusan masih berlaku', desc: 'Periode aktif hingga 31 Desember 2030.', action: "go('#ormas-profile')", button: 'Lihat Profil' }
      ]
    : [
        { tone: 'danger', title: 'Lengkapi dokumen domisili terbaru', desc: 'Pengajuan perubahan alamat berstatus Perlu Perbaikan.', action: "go('#ormas-change-request')", button: 'Lengkapi Data' },
        { tone: 'info', title: 'SKT tersedia untuk diunduh', desc: 'Nomor SKT-2023-00418 dapat dilihat pada Dokumen & Surat.', action: "go('#ormas-documents')", button: 'Lihat SKT' },
        { tone: 'success', title: 'Status keaktifan: Aktif', desc: 'Laporan kegiatan terakhir telah disetujui pada 7 Juli 2026.', action: "go('#ormas-activities')", button: 'Riwayat Kegiatan' }
      ];
  return tasks.map(item => `<article class="ormas-task-v8 ${item.tone}"><div><h4>${item.title}</h4><p>${item.desc}</p></div><button class="btn tiny" onclick="${item.action}">${item.button}</button></article>`).join('');
}

function ormasActivityRowsV8(items = ormasActivitiesV8()) {
  return items.map(item => `<tr><td>${item.id}</td><td>${dateLabelV6(item.date)}</td><td><b>${item.activity}</b><br><small>${item.description}</small></td><td>${item.field}</td><td>📷 ${item.photos || 0}</td><td>${statusBadge(item.status)}</td><td><button class="btn tiny" onclick="toast('Simulasi membuka detail ${item.id}')">Detail</button></td></tr>`).join('');
}

function ormasDashboardV8() {
  const org = selectedOrmasAccountV8();
  const activities = ormasActivitiesV8(org.name);
  const pendingActivities = activities.filter(item => item.status === 'Menunggu Verifikasi').length;
  const pendingChanges = ormasChangeRequestsForV8(org.name).filter(item => !['Disetujui', 'Selesai'].includes(item.status)).length;
  const content = `<section class="ormas-welcome-v8"><div><span class="pill green">${org.status} dan Terverifikasi</span><h2>${org.name}</h2><p>${org.orgType} • ${org.field} • ${org.region}</p></div><div class="ormas-welcome-actions-v8"><button class="btn blue" onclick="goToActivityReportV8()">+ Lapor Kegiatan</button><button class="btn" onclick="go('#ormas-change-request')">Ajukan Perubahan Data</button></div></section>
    <div class="ormas-kpi-grid-v8">
      ${kpi('Status Pendaftaran', org.registrationStatus, org.registrationProcess, 'green', '✓')}
      ${kpi(org.orgType.includes('Non Badan') ? 'Status SKT' : 'Status Pelaporan', 'Aktif', org.letterNumber, 'blue', '📄')}
      ${kpi('Status Keaktifan', org.status, `Laporan terakhir ${org.lastReportDate}`, 'green', '●')}
      ${kpi('Laporan Kegiatan', String(activities.length), `${activities.filter(item => item.status === 'Disetujui').length} telah disetujui`, 'blue', '📌')}
      ${kpi('Menunggu Verifikasi', String(pendingActivities + pendingChanges), `${pendingActivities} laporan, ${pendingChanges} perubahan data`, 'yellow', '⏳')}
      ${kpi('Periode Kepengurusan', org.period, `Berakhir ${org.periodEnd}`, 'blue', '🗓️')}
    </div>
    <div class="ormas-dashboard-grid-v8">
      <article class="panel"><div class="panel-head"><div><h3>Yang Perlu Dilakukan</h3><p class="muted">Prioritas berdasarkan status layanan ORMAS.</p></div></div><div class="ormas-task-list-v8">${ormasDashboardTasksV8(org)}</div></article>
      <article class="panel"><div class="panel-head"><div><h3>Aksi Cepat</h3><p class="muted">Pilih layanan yang dibutuhkan.</p></div></div><div class="ormas-quick-actions-v8">
        <button onclick="goToActivityReportV8()"><b>+ Lapor Kegiatan</b><span>Satu laporan untuk satu kegiatan</span></button>
        <button onclick="go('#ormas-change-request')"><b>Perbarui Data ORMAS</b><span>Alamat, kontak, pengurus, periode, atau legalitas</span></button>
        <button onclick="go('#ormas-documents')"><b>${org.orgType.includes('Non Badan') ? 'Lihat / Unduh SKT' : 'Lihat Surat Tanda Lapor'}</b><span>Dokumen yang telah diterbitkan</span></button>
        <button onclick="go('#application')"><b>Daftarkan ORMAS Lain</b><span>Gunakan akun yang sama untuk pengajuan baru</span></button>
      </div></article>
    </div>
    <article class="panel table-panel"><div class="panel-head"><div><h3>Aktivitas dan Laporan Terbaru</h3><p class="muted">Riwayat kegiatan ORMAS terpilih.</p></div><button class="outline-btn" onclick="go('#ormas-activities')">Lihat Semua</button></div><div class="table-scroll"><table><thead><tr><th>No. Laporan</th><th>Tanggal</th><th>Kegiatan</th><th>Bidang</th><th>Foto</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${ormasActivityRowsV8(activities.slice(0, 5))}</tbody></table></div></article>
    <div class="ormas-bottom-grid-v8"><article class="panel"><h3>Status Pendaftaran</h3><div class="ormas-status-summary-v8"><div><small>Proses</small><b>${org.registrationProcess}</b></div><div><small>Status</small>${ormasStatusBadgeV8(org.registrationStatus)}</div><div><small>Output</small><b>${org.registrationOutput}</b></div><div><small>${org.legalLabel}</small><b>${org.legalNumber}</b></div></div><button class="outline-btn full-button" onclick="go('#ormas-registration-status')">Lihat Proses Lengkap</button></article><article class="panel"><h3>Aktivitas Sistem Terbaru</h3><div class="timeline-v7"><div class="timeline-item-v7"><span></span><div><small>Hari ini</small><b>Dashboard ORMAS dibuka</b><p>Profil ${org.shortName} dipilih sebagai ORMAS aktif.</p></div></div><div class="timeline-item-v7"><span></span><div><small>${org.lastReportDate}</small><b>Laporan kegiatan diperbarui</b><p>Status laporan terbaru dapat dilihat pada Pelaporan Kegiatan.</p></div></div><div class="timeline-item-v7"><span></span><div><small>12 Juli 2026</small><b>Profil ORMAS tersinkron</b><p>Informasi yang telah disetujui tersedia pada dashboard pegawai dan publik.</p></div></div></div></article></div>`;
  return ormasShellV8(content, 'dashboard');
}

function ormasProfileV8() {
  const org = selectedOrmasAccountV8();
  const content = `<section class="ormas-section-head-v8"><div><span class="pill green">Profil Terverifikasi</span><h2>${org.name}</h2><p>Data tidak dapat diubah langsung. Gunakan menu Pengajuan Perubahan Data agar perubahan diperiksa pegawai.</p></div><button class="btn blue" onclick="go('#ormas-change-request')">Ajukan Perubahan Data</button></section>
    <article class="panel"><h3>Identitas Organisasi</h3><div class="ormas-detail-grid-v8"><div><small>Nama ORMAS</small><b>${org.name}</b></div><div><small>Nama Singkatan</small><b>${org.shortName}</b></div><div><small>Jenis ORMAS</small><b>${org.orgType}</b></div><div><small>Status Keaktifan</small>${statusBadge(org.status)}</div><div><small>Bidang</small><b>${org.field}</b></div><div><small>Wilayah</small><b>${org.region}</b></div><div><small>Nama Ketua</small><b>${org.chair}</b></div><div><small>Nama Sekretaris</small><b>${org.secretary}</b></div><div><small>Nama Bendahara</small><b>${org.treasurer}</b></div><div><small>Periode Kepengurusan</small><b>${org.period}</b></div><div class="wide-v8"><small>Alamat Sekretariat</small><b>${org.address}</b></div><div><small>Email Organisasi</small><b>${org.email}</b></div><div><small>Telepon</small><b>${org.phone}</b></div><div><small>Website</small><b>${org.website}</b></div><div><small>${org.legalLabel}</small><b>${org.legalNumber}</b></div></div></article>
    <div class="ormas-profile-note-v8"><b>Mengapa data read-only?</b><p>Data yang telah diverifikasi tidak diubah langsung agar histori dan hasil verifikasi tetap terjaga. Setiap perubahan akan masuk ke Monitoring Pendaftaran pada Dashboard Pegawai.</p></div>`;
  return ormasShellV8(content, 'profile');
}

function ormasRegistrationStatusV8() {
  const org = selectedOrmasAccountV8();
  const nonLegal = org.orgType.includes('Non Badan');
  const steps = nonLegal
    ? ['Pendaftaran ORMAS dikirim', 'Verifikasi data dan dokumen', 'Perbaikan jika diperlukan', 'Pengajuan disetujui', 'SKT diterbitkan']
    : ['Pelaporan keberadaan dikirim', 'Verifikasi SK Kemenkumham/AHU', 'Verifikasi kepengurusan dan alamat', 'Pelaporan disetujui', 'ORMAS tercatat dalam database'];
  const content = `<section class="ormas-section-head-v8"><div><span class="pill ${nonLegal ? 'orange' : 'blue'}">${org.orgType}</span><h2>${org.registrationProcess}</h2><p>${nonLegal ? 'SKT adalah output dari pendaftaran ORMAS Non Badan Hukum, bukan formulir pendaftaran kedua.' : 'ORMAS berbadan hukum melaporkan keberadaannya dan tidak mengajukan SKT.'}</p></div>${ormasStatusBadgeV8(org.registrationStatus)}</section>
    <article class="panel"><h3>Alur Pendaftaran</h3><div class="ormas-process-v8">${steps.map((step, index) => `<div class="completed"><span>${index + 1}</span><div><b>${step}</b><small>${index === steps.length - 1 ? org.registrationOutput : 'Selesai'}</small></div></div>`).join('')}</div></article>
    <div class="ormas-dashboard-grid-v8"><article class="panel"><h3>Informasi Hasil Pendaftaran</h3><div class="ormas-status-summary-v8"><div><small>Status Pendaftaran</small>${ormasStatusBadgeV8(org.registrationStatus)}</div><div><small>Jenis ORMAS</small><b>${org.orgType}</b></div><div><small>Output</small><b>${org.registrationOutput}</b></div><div><small>${org.legalLabel}</small><b>${org.legalNumber}</b></div><div><small>Periode Kepengurusan</small><b>${org.period}</b></div><div><small>Dokumen Utama</small><b>${org.letterLabel}</b></div></div></article><article class="panel"><h3>Layanan Lanjutan</h3><div class="ormas-quick-actions-v8 compact"><button onclick="go('#ormas-change-request')"><b>${nonLegal ? 'Perpanjangan / Pembaruan SKT' : 'Pembaruan Data Pelaporan'}</b><span>Digunakan jika periode, pengurus, atau legalitas berubah</span></button><button onclick="go('#ormas-documents')"><b>Lihat Dokumen & Surat</b><span>Unduh dokumen yang sudah diterbitkan</span></button><button onclick="go('#application')"><b>Pendaftaran ORMAS Baru</b><span>Daftarkan ORMAS lain menggunakan akun ini</span></button></div></article></div>`;
  return ormasShellV8(content, 'registration');
}

function ormasActivitiesPageV8() {
  const org = selectedOrmasAccountV8();
  const activities = ormasActivitiesV8(org.name);
  const content = `<section class="ormas-section-head-v8"><div><span class="pill green">${org.name}</span><h2>Pelaporan Kegiatan</h2><p>Satu laporan mewakili satu kegiatan dan dapat memuat maksimal tiga foto.</p></div><button class="btn blue" onclick="goToActivityReportV8()">+ Lapor Kegiatan Baru</button></section>
    <div class="ormas-kpi-grid-v8 four"><article class="mini-card"><small>Total Laporan</small><strong>${activities.length}</strong><span>Seluruh periode</span></article><article class="mini-card success"><small>Disetujui</small><strong>${activities.filter(item => item.status === 'Disetujui').length}</strong><span>Menjadi bukti keaktifan</span></article><article class="mini-card"><small>Menunggu Verifikasi</small><strong>${activities.filter(item => item.status === 'Menunggu Verifikasi').length}</strong><span>Sedang diperiksa pegawai</span></article><article class="mini-card"><small>Status Keaktifan</small><strong>${org.status}</strong><span>Ada laporan disetujui dalam 1 tahun</span></article></div>
    <article class="panel table-panel"><div class="panel-head"><div><h3>Riwayat Laporan Kegiatan</h3><p class="muted">Setiap laporan terhubung dengan ORMAS yang dipilih.</p></div></div><div class="table-scroll"><table><thead><tr><th>No. Laporan</th><th>Tanggal</th><th>Kegiatan</th><th>Bidang</th><th>Foto</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${activities.length ? ormasActivityRowsV8(activities) : '<tr><td colspan="7" class="empty-state-v7">Belum ada laporan kegiatan.</td></tr>'}</tbody></table></div></article>`;
  return ormasShellV8(content, 'activities');
}

function changeTypeOptionsV8(org) {
  const first = org.orgType.includes('Non Badan') ? 'Perpanjangan / Pembaruan SKT' : 'Pembaruan Data Pelaporan Keberadaan';
  return [first, 'Perubahan Alamat atau Kontak', 'Perubahan Pengurus', 'Perubahan Periode Kepengurusan', 'Perubahan Bidang', 'Perubahan Legalitas', 'Penambahan Cabang / Unit'].map(item => `<option>${item}</option>`).join('');
}

function ormasChangeRequestPageV8() {
  const org = selectedOrmasAccountV8();
  const requests = ormasChangeRequestsForV8(org.name);
  const content = `<section class="ormas-section-head-v8"><div><span class="pill orange">Memerlukan Verifikasi Pegawai</span><h2>Pengajuan Perubahan Data</h2><p>Data lama tetap berlaku sampai perubahan disetujui.</p></div></section>
    <div class="ormas-change-layout-v8"><article class="panel"><form onsubmit="submitOrmasChangeRequestV8(event)"><div class="form-section-title"><h3>Form Perubahan Data</h3><p>Sistem hanya meminta data yang berubah, bukan mengulang seluruh pendaftaran.</p></div><div class="form-grid"><div class="field col2"><label>ORMAS</label><input value="${org.name}" readonly></div><div class="field col2"><label>Jenis Pengajuan</label><select id="ormasChangeTypeV8" required>${changeTypeOptionsV8(org)}</select></div><div class="field col2"><label>Data Saat Ini</label><textarea id="ormasCurrentValueV8" readonly>${org.address}</textarea></div><div class="field col2"><label>Data Baru / Perubahan</label><textarea id="ormasNewValueV8" required placeholder="Masukkan hanya data yang berubah"></textarea></div><div class="field col4"><label>Alasan / Keterangan Perubahan</label><textarea id="ormasChangeNoteV8" required placeholder="Jelaskan alasan perubahan"></textarea></div><div class="field col4"><label>Dokumen Pendukung</label><input id="ormasChangeFileV8" type="file"><small>Contoh: SK kepengurusan baru, surat domisili, atau dokumen legalitas.</small></div></div><div class="form-action-line"><button type="button" class="outline-btn" onclick="go('#ormas-dashboard')">Kembali</button><button type="submit" class="primary-btn">Kirim Pengajuan Perubahan</button></div></form></article><aside class="panel"><h3>Pengajuan Terakhir</h3><div class="ormas-change-history-v8">${requests.length ? requests.map(item => `<div><small>${item.id} • ${dateLabelV6(item.date)}</small><b>${item.type}</b><p>${item.note}</p>${ormasStatusBadgeV8(item.status)}</div>`).join('') : '<p class="muted">Belum ada pengajuan perubahan.</p>'}</div></aside></div>`;
  return ormasShellV8(content, 'changes');
}

window.submitOrmasChangeRequestV8 = function (event) {
  event.preventDefault();
  const org = selectedOrmasAccountV8();
  const type = $('#ormasChangeTypeV8').value;
  const newValue = $('#ormasNewValueV8').value.trim();
  const note = $('#ormasChangeNoteV8').value.trim();
  const id = `UBH-2026-${String(ormasChangeRequestsV8.length + 19).padStart(4, '0')}`;
  const request = { id, org: org.name, type, date: new Date().toISOString().slice(0, 10), status: 'Menunggu Verifikasi', note: `${note} Data baru: ${newValue}` };
  ormasChangeRequestsV8.unshift(request);
  applicationRequestsV6.unshift({
    id: `ORM-${id.replace('UBH-', '')}`,
    date: request.date,
    org: org.name,
    orgType: org.orgType,
    requestType: type,
    email: org.email,
    chair: org.chair,
    secretary: org.secretary,
    treasurer: org.treasurer,
    address: org.address,
    region: org.region,
    periodStart: '',
    periodEnd: '',
    documents: ['Dokumen Pendukung Perubahan Data'],
    status: 'Menunggu Verifikasi',
    rejectionReason: ''
  });
  toast('Pengajuan perubahan dikirim dan masuk ke Monitoring Pendaftaran pegawai.');
  go('#ormas-history');
};

function ormasDocumentsV8() {
  const org = selectedOrmasAccountV8();
  const nonLegal = org.orgType.includes('Non Badan');
  const content = `<section class="ormas-section-head-v8"><div><span class="pill blue">Dokumen Terverifikasi</span><h2>Dokumen & Surat</h2><p>${nonLegal ? 'SKT merupakan output pendaftaran ORMAS Non Badan Hukum.' : 'ORMAS berbadan hukum menggunakan dokumen AHU dan hasil pelaporan keberadaan, bukan SKT.'}</p></div></section>
    <div class="ormas-document-feature-v8"><div><span class="pill green">Tersedia</span><h3>${org.letterLabel}</h3><p><b>${org.letterNumber}</b></p><small>Diterbitkan untuk ${org.name}</small></div><div><button class="btn blue" onclick="toast('Simulasi mengunduh ${org.letterLabel}')">Unduh PDF</button><button class="outline-btn" onclick="toast('Simulasi membuka pratinjau dokumen')">Pratinjau</button></div></div>
    <article class="panel table-panel"><div class="panel-head"><div><h3>Daftar Dokumen ORMAS</h3><p class="muted">Dokumen hanya dapat diperbarui melalui pengajuan perubahan data.</p></div><button class="outline-btn" onclick="go('#ormas-change-request')">Ajukan Pembaruan</button></div><div class="table-scroll"><table><thead><tr><th>No.</th><th>Dokumen</th><th>Status</th><th>Terakhir Diperbarui</th><th>Aksi</th></tr></thead><tbody>${org.documents.map((item, index) => `<tr><td>${index + 1}</td><td><b>${item[0]}</b></td><td>${item[1].includes('Perlu') ? '<span class="pill orange">'+item[1]+'</span>' : '<span class="pill green">'+item[1]+'</span>'}</td><td>12 Juli 2026</td><td><button class="btn tiny" onclick="toast('Simulasi membuka ${item[0]}')">Lihat</button> <button class="outline-btn tiny" onclick="toast('Simulasi mengunduh ${item[0]}')">Unduh</button></td></tr>`).join('')}</tbody></table></div></article>`;
  return ormasShellV8(content, 'documents');
}

function ormasHistoryV8() {
  const org = selectedOrmasAccountV8();
  const activities = ormasActivitiesV8(org.name).map(item => ({ date: item.date, type: 'Pelaporan Kegiatan', title: item.activity, status: item.status, detail: item.id }));
  const apps = ormasApplicationsV8(org.name).map(item => ({ date: item.date, type: 'Pendaftaran / Data ORMAS', title: item.requestType, status: item.status, detail: item.id }));
  const changes = ormasChangeRequestsForV8(org.name).map(item => ({ date: item.date, type: 'Perubahan Data', title: item.type, status: item.status, detail: item.id }));
  const combined = [...activities, ...apps, ...changes].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const content = `<section class="ormas-section-head-v8"><div><span class="pill cyan">Riwayat Terintegrasi</span><h2>Riwayat Pengajuan</h2><p>Pendaftaran, perubahan data, dan pelaporan kegiatan berada dalam satu timeline.</p></div></section>
    <article class="panel"><div class="ormas-history-list-v8">${combined.length ? combined.map(item => `<div class="ormas-history-item-v8"><span></span><div><small>${dateLabelV6(item.date)} • ${item.detail}</small><h4>${item.title}</h4><p>${item.type}</p>${statusBadge(item.status)}</div><button class="outline-btn tiny" onclick="toast('Simulasi membuka ${item.detail}')">Detail</button></div>`).join('') : '<p class="muted">Belum ada riwayat.</p>'}</div></article>`;
  return ormasShellV8(content, 'history');
}

window.goToActivityReportV8 = function () {
  const org = selectedOrmasAccountV8();
  const linked = linkedOrmasAccountsV5.find(item => item.name === org.name);
  preferredActivityOrmasIdV8 = linked ? linked.id : linkedOrmasAccountsV5[0].id;
  go('#activity-report');
};

// Semua login ORMAS berakhir di dashboard akun. Dari dashboard, pengguna memilih layanan.
pendingLoginDestinationV4 = '#ormas-dashboard';
window.openOrmasLoginV4 = function () {
  pendingLoginDestinationV4 = '#ormas-dashboard';
  go('#ormas-login');
};

loginPage = function () {
  return `${publicHeader()}<main class="page login-page"><div class="container login-wrap"><section class="form-card login-card login-card-v4"><div class="mini-logo"></div><span class="pill green">Portal ORMAS</span><h1>Masuk ke Dashboard ORMAS</h1><p class="muted">Setelah masuk, lihat profil, status pendaftaran, kegiatan, dokumen, dan layanan perubahan data pada satu dashboard.</p><form onsubmit="loginOrmasV4(event)"><div class="field"><label>Email</label><input type="email" value="ormas@example.org" required></div><div class="field"><label>Password</label><input type="password" value="12345678" required></div><button class="primary-btn full-button" type="submit">Masuk</button></form><div class="register-account-links-v4">Belum punya akun? <a href="#registration">Daftar di sini</a> atau kembali ke <a href="#home">Halaman Utama</a></div></section></div></main>${footer()}`;
};

window.loginOrmasV4 = function (event) {
  event.preventDefault();
  toast('Login berhasil. Selamat datang di Dashboard ORMAS.');
  go('#ormas-dashboard');
};

portalPage = function () {
  return `${publicHeader()}<main class="page"><div class="container"><div class="crumb">Beranda / Layanan / ORMAS</div><section class="portal-hero"><div><span class="pill cyan">Layanan ORMAS</span><h1>Pendaftaran, Dashboard, dan Pelaporan ORMAS</h1><p>Pengguna baru membuat akun dan mendaftarkan ORMAS. Pengguna yang sudah memiliki akun masuk ke Dashboard ORMAS untuk mengelola profil, kegiatan, dokumen, dan perubahan data.</p></div><button class="btn light" onclick="go('#home')">Kembali ke Beranda</button></section><div class="quick-grid portal-modules-v2 ormas-portal-grid-v8"><article class="quick-card" onclick="go('#public-dashboard')"><span class="pill blue">Publik</span><h3>Dashboard Publik ORMAS</h3><p>Statistik, peta sebaran, tren, dan direktori ORMAS yang aman untuk masyarakat.</p><button class="btn blue">Lihat Dashboard Publik</button></article><article class="quick-card registration-gated-card-v4"><span class="pill orange">Pengguna Baru</span><h3>Pendaftaran ORMAS</h3><p>Buat akun terlebih dahulu, lalu masuk ke Dashboard ORMAS dan lengkapi pengajuan pendaftaran.</p><div class="card-flow-v4"><span>Daftar Akun</span><b>→</b><span>Login</span><b>→</b><span>Dashboard</span><b>→</b><span>Pendaftaran</span></div><button class="btn" onclick="event.stopPropagation();go('#registration')">Daftar Akun & Mulai</button></article><article class="quick-card" onclick="openOrmasLoginV4()"><span class="pill green">Akun ORMAS</span><h3>Dashboard ORMAS</h3><p>Lihat informasi organisasi, status pendaftaran, kegiatan, dokumen, pengajuan perubahan data, dan riwayat.</p><button class="btn">Masuk Dashboard ORMAS</button></article><article class="quick-card" onclick="openOrmasLoginV4()"><span class="pill cyan">Kegiatan</span><h3>Pelaporan Keaktifan ORMAS</h3><p>Masuk ke Dashboard ORMAS, pilih Pelaporan Kegiatan, lalu kirim satu kegiatan dengan maksimal tiga foto.</p><button class="btn">Login & Lapor Kegiatan</button></article></div></div></main>${footer()}`;
};

const renderBeforeOrmasDashboardV8 = render;
render = function () {
  const route = location.hash || '#home';
  if (route === '#ormas-dashboard') app.innerHTML = ormasDashboardV8();
  else if (route === '#ormas-profile') app.innerHTML = ormasProfileV8();
  else if (route === '#ormas-registration-status') app.innerHTML = ormasRegistrationStatusV8();
  else if (route === '#ormas-activities') app.innerHTML = ormasActivitiesPageV8();
  else if (route === '#ormas-change-request') app.innerHTML = ormasChangeRequestPageV8();
  else if (route === '#ormas-documents') app.innerHTML = ormasDocumentsV8();
  else if (route === '#ormas-history') app.innerHTML = ormasHistoryV8();
  else renderBeforeOrmasDashboardV8();
  window.scrollTo(0, 0);
  if (route === '#activity-report') {
    setTimeout(() => {
      const select = document.getElementById('activityOrgV5');
      if (select && [...select.options].some(option => option.value === preferredActivityOrmasIdV8)) {
        select.value = preferredActivityOrmasIdV8;
        updateActivityOrmasV5(preferredActivityOrmasIdV8);
      }
      const backButton = [...document.querySelectorAll('.form-action-line button')].find(button => button.textContent.trim() === 'Kembali');
      if (backButton) {
        backButton.setAttribute('onclick', "go('#ormas-activities')");
        backButton.textContent = 'Kembali ke Dashboard ORMAS';
      }
    }, 0);
  }
};

setTimeout(render, 0);

/* === FINAL PATCH V9: Login guard + pemutakhiran data/SKT + admin upload output === */
let ormasAuthenticatedV9 = false;
try {
  ormasAuthenticatedV9 = sessionStorage.getItem('bakesbangpolOrmasAuthenticated') === '1';
} catch (error) {
  ormasAuthenticatedV9 = false;
}

function setOrmasAuthenticationV9(value) {
  ormasAuthenticatedV9 = Boolean(value);
  try {
    if (ormasAuthenticatedV9) sessionStorage.setItem('bakesbangpolOrmasAuthenticated', '1');
    else sessionStorage.removeItem('bakesbangpolOrmasAuthenticated');
  } catch (error) {
    // Fallback global state is enough for the static prototype.
  }
}

window.logoutOrmasV9 = function () {
  setOrmasAuthenticationV9(false);
  pendingLoginDestinationV4 = '#ormas-dashboard';
  toast('Anda telah keluar dari Dashboard ORMAS.');
  go('#ormas-login');
};

// Preserve the intended destination: registration login can still go to #application,
// while Dashboard ORMAS login goes to #ormas-dashboard.
window.loginOrmasV4 = function (event) {
  event.preventDefault();
  setOrmasAuthenticationV9(true);
  const destination = pendingLoginDestinationV4 || '#ormas-dashboard';
  toast('Login berhasil. Selamat datang di Portal ORMAS.');
  go(destination);
  pendingLoginDestinationV4 = '#ormas-dashboard';
};

const ormasShellBeforeV9 = ormasShellV8;
ormasShellV8 = function (content, active = 'dashboard') {
  return ormasShellBeforeV9(content, active)
    .replace('onclick="go(\'#home\')">Keluar</button>', 'onclick="logoutOrmasV9()">Keluar</button>');
};

function currentYearRangeV9(org) {
  const years = String(org.period || '').match(/\d{4}/g) || [];
  return {
    start: years[0] || '2026',
    end: years[1] || String(Number(years[0] || 2026) + 5)
  };
}

function updateServiceOptionsV9(org) {
  const options = ['Pemutakhiran Data Lapor Keberadaan ORMAS'];
  if (org.orgType.includes('Non Badan')) options.unshift('Perpanjangan / Pembaruan SKT');
  options.push('Perubahan Data Kepengurusan', 'Perubahan Alamat / Kontak', 'Perubahan Bidang Kegiatan', 'Perubahan Legalitas');
  return options.map(item => `<option>${item}</option>`).join('');
}

function activityFieldChecksV9(org) {
  const options = ['Sosial', 'Keagamaan', 'Pendidikan', 'Kepemudaan', 'Kebudayaan', 'Lingkungan', 'Kesehatan', 'Kemanusiaan', 'Profesi'];
  return options.map(item => `<label class="check-item"><input class="updateActivityFieldV9" type="checkbox" value="${item}" ${org.field.includes(item) ? 'checked' : ''}> ${item}</label>`).join('');
}

// Detailed form follows the supplied 7-section Google Form and is placed under
// Pengajuan Perubahan Data because the ORMAS must already be registered.
ormasChangeRequestPageV8 = function () {
  const org = selectedOrmasAccountV8();
  const years = currentYearRangeV9(org);
  const requests = ormasChangeRequestsForV8(org.name);
  const nonLegal = org.orgType.includes('Non Badan');
  const content = `<section class="ormas-section-head-v8"><div><span class="pill orange">ORMAS Sudah Terdaftar</span><h2>${nonLegal ? 'Pemutakhiran Data / Pembaruan SKT' : 'Pemutakhiran Data Lapor Keberadaan ORMAS'}</h2><p>Form ini bukan pendaftaran awal. Data digunakan untuk memperbarui informasi ORMAS yang sudah terdaftar dan, untuk ORMAS Non Badan Hukum, dapat menjadi dasar penerbitan/pembaruan SKT.</p></div></section>
    <div class="skt-guidance-v9"><div><b>Persyaratan utama</b><p>Isi identitas pengajuan, data organisasi terkini, masa bakti dan pengurus, alamat sekretariat, legalitas, serta unggah SK Kepengurusan Organisasi Terbaru.</p></div><div><b>Informasi layanan</b><p>Nomor Layanan Bidang Kesbang: <strong>0851-8835-1581</strong>. Mohon diisi dengan data sebenar-benarnya.</p></div></div>
    <div class="ormas-change-layout-v8 skt-update-layout-v9"><article class="panel"><form id="ormasSktUpdateFormV9" onsubmit="submitOrmasSktUpdateV9(event)">
      <div class="skt-form-section-v9"><span>Bagian 1 dari 7</span><h3>Formulir Pemutakhiran Data Lapor Keberadaan ORMAS</h3><p>Untuk ORMAS yang telah memiliki akun dan data pendaftaran pada sistem.</p><div class="form-grid"><div class="field col2"><label>Email Akun</label><input id="updateApplicantEmailV9" type="email" value="${org.email}" readonly></div><div class="field col2"><label>Jenis Layanan</label><select id="updateServiceTypeV9" required>${updateServiceOptionsV9(org)}</select></div></div></div>
      <div class="skt-form-section-v9"><span>Bagian 2 dari 7</span><h3>1. Identitas Pengajuan</h3><div class="form-grid"><div class="field col2"><label>Nama Pengisi Form</label><input id="updateApplicantNameV9" required value="${org.secretary}"></div><div class="field col2"><label>Jabatan Pengisi Form</label><input id="updateApplicantPositionV9" required value="Sekretaris"></div><div class="field col2"><label>Nomor HP / WhatsApp Pengisi Form</label><input id="updateApplicantPhoneV9" required value="${org.phone}"></div><div class="field col2"><label>Tanggal Pengajuan</label><input id="updateSubmissionDateV9" type="date" required value="${new Date().toISOString().slice(0, 10)}"></div></div></div>
      <div class="skt-form-section-v9"><span>Bagian 3 dari 7</span><h3>2. Data Dasar Organisasi</h3><div class="form-grid"><div class="field col2"><label>Nama Organisasi</label><input id="updateOrgNameV9" required value="${org.name}"></div><div class="field col2"><label>Nama Singkatan Organisasi</label><input id="updateOrgShortV9" value="${org.shortName}"></div><div class="field col2"><label>Bidang Kegiatan Utama</label><select id="updateMainFieldV9" required>${['Sosial','Keagamaan','Pendidikan','Kepemudaan','Kebudayaan','Lingkungan','Kesehatan','Kemanusiaan','Profesi'].map(item => `<option ${org.field.includes(item) ? 'selected' : ''}>${item}</option>`).join('')}<option>Lainnya</option></select></div><div class="field col2"><label>Bidang Kegiatan</label><div class="check-grid compact-check-grid-v9">${activityFieldChecksV9(org)}</div></div></div></div>
      <div class="skt-form-section-v9"><span>Bagian 4 dari 7</span><h3>3. Masa Bakti Kepengurusan dan SK Pengurus</h3><div class="form-grid"><div class="field col2"><label>Masa Bakti Kepengurusan Mulai (Tahun)</label><input id="updatePeriodStartV9" type="number" min="1900" max="2100" required value="${years.start}"></div><div class="field col2"><label>Masa Bakti Kepengurusan Berakhir (Tahun)</label><input id="updatePeriodEndV9" type="number" min="1900" max="2100" required value="${years.end}"></div><div class="field col2"><label>Nama Ketua</label><input id="updateChairV9" required value="${org.chair}"></div><div class="field col2"><label>Nomor HP Ketua</label><input id="updateChairPhoneV9" required value="${org.phone}"></div><div class="field col2"><label>Nama Sekretaris</label><input id="updateSecretaryV9" required value="${org.secretary}"></div><div class="field col2"><label>Nomor HP Sekretaris</label><input id="updateSecretaryPhoneV9" required value="${org.phone}"></div><div class="field col2"><label>Nama Bendahara</label><input id="updateTreasurerV9" required value="${org.treasurer}"></div><div class="field col2"><label>Nomor HP Bendahara</label><input id="updateTreasurerPhoneV9" required value="${org.phone}"></div></div></div>
      <div class="skt-form-section-v9"><span>Bagian 5 dari 7</span><h3>4. Alamat Kantor / Sekretariat</h3><div class="form-grid"><div class="field col4"><label>Alamat / Jalan Kantor Sekretariat</label><textarea id="updateAddressV9" required>${org.address}</textarea></div><div class="field col2"><label>Kota / Kabupaten</label><select id="updateCityV9" required>${['Jakarta Pusat','Jakarta Utara','Jakarta Barat','Jakarta Selatan','Jakarta Timur','Kepulauan Seribu','Lainnya'].map(item => `<option ${org.region === item ? 'selected' : ''}>${item}</option>`).join('')}</select></div><div class="field col2"><label>Kode Pos</label><input id="updatePostalCodeV9" value="10110"></div><div class="field col2"><label>Nomor Telepon Kantor/HP</label><input id="updateOfficePhoneV9" required value="${org.phone}"></div><div class="field col2"><label>Email Organisasi</label><input id="updateOrgEmailV9" type="email" required value="${org.email}"></div></div></div>
      <div class="skt-form-section-v9"><span>Bagian 6 dari 7</span><h3>5. Legalitas dan Keabsahan Dokumen</h3><div class="form-grid"><div class="field col4"><label>Nomor AHU / SK Kemenkumham</label><input id="updateAhuNumberV9" value="${!org.orgType.includes('Non Badan') ? org.legalNumber : ''}" placeholder="Kosongkan jika tidak memiliki AHU/SK Kemenkumham"></div><div class="field col2"><label>SK Kemenkumham/AHU</label><input id="updateAhuFileV9" type="file" accept="application/pdf,image/*"><small>Diunggah jika memiliki atau terdapat perubahan dokumen legalitas.</small></div><div class="field col2"><label>SK Kepengurusan Organisasi Terbaru</label><input id="updateManagementFileV9" type="file" accept="application/pdf,image/*" required><small>Wajib untuk pemutakhiran data/pembaruan SKT.</small></div></div></div>
      <div class="skt-form-section-v9"><span>Bagian 7 dari 7</span><h3>6. Review dan Submit</h3><div class="review-card"><label class="check-item"><input id="updateConfirmationV9" type="checkbox" required> Saya menyatakan bahwa seluruh data dan dokumen yang diinput adalah benar dan dapat dipertanggungjawabkan.</label></div><div class="form-action-line"><button type="button" class="outline-btn" onclick="go('#ormas-dashboard')">Kembali</button><button type="submit" class="primary-btn">Kirim Pemutakhiran Data</button></div></div>
    </form></article><aside class="panel"><h3>Riwayat Pemutakhiran</h3><p class="muted">Pengajuan masuk ke menu Monitoring Pendaftaran pegawai.</p><div class="ormas-change-history-v8">${requests.length ? requests.map(item => `<div><small>${item.id} • ${dateLabelV6(item.date)}</small><b>${item.type}</b><p>${item.note}</p>${ormasStatusBadgeV8(item.status)}</div>`).join('') : '<p class="muted">Belum ada pengajuan perubahan.</p>'}</div><div class="skt-process-note-v9"><b>Alur setelah submit</b><ol><li>Pegawai memeriksa data dan dokumen.</li><li>Jika belum lengkap, ORMAS menerima catatan perbaikan.</li><li>Jika disetujui, pegawai mengunggah SKT atau surat hasil pemutakhiran.</li><li>Dokumen tersedia pada menu Dokumen & Surat.</li></ol></div></aside></div>`;
  return ormasShellV8(content, 'changes');
};

window.submitOrmasSktUpdateV9 = function (event) {
  event.preventDefault();
  const org = selectedOrmasAccountV8();
  const serviceType = $('#updateServiceTypeV9').value;
  const activityFields = [...document.querySelectorAll('.updateActivityFieldV9:checked')].map(item => item.value);
  if (!activityFields.length) return toast('Pilih minimal satu Bidang Kegiatan.');
  const managementFile = $('#updateManagementFileV9').files[0];
  if (!managementFile) return toast('SK Kepengurusan Organisasi Terbaru wajib diunggah.');
  const ahuFile = $('#updateAhuFileV9').files[0];
  const id = `UPD-2026-${String(applicationRequestsV6.length + 720).padStart(4, '0')}`;
  const request = {
    id,
    date: $('#updateSubmissionDateV9').value,
    org: $('#updateOrgNameV9').value.trim(),
    orgType: org.orgType,
    requestType: serviceType,
    submissionKind: 'data-update-skt',
    applicantEmail: $('#updateApplicantEmailV9').value,
    applicantName: $('#updateApplicantNameV9').value.trim(),
    applicantPosition: $('#updateApplicantPositionV9').value.trim(),
    applicantPhone: $('#updateApplicantPhoneV9').value.trim(),
    shortName: $('#updateOrgShortV9').value.trim(),
    mainField: $('#updateMainFieldV9').value,
    activityFields,
    chair: $('#updateChairV9').value.trim(),
    chairPhone: $('#updateChairPhoneV9').value.trim(),
    secretary: $('#updateSecretaryV9').value.trim(),
    secretaryPhone: $('#updateSecretaryPhoneV9').value.trim(),
    treasurer: $('#updateTreasurerV9').value.trim(),
    treasurerPhone: $('#updateTreasurerPhoneV9').value.trim(),
    managementStartYear: $('#updatePeriodStartV9').value,
    managementEndYear: $('#updatePeriodEndV9').value,
    periodStart: `${$('#updatePeriodStartV9').value}-01-01`,
    periodEnd: `${$('#updatePeriodEndV9').value}-12-31`,
    address: $('#updateAddressV9').value.trim(),
    region: $('#updateCityV9').value,
    postalCode: $('#updatePostalCodeV9').value.trim(),
    officePhone: $('#updateOfficePhoneV9').value.trim(),
    email: $('#updateOrgEmailV9').value.trim(),
    ahuNumber: $('#updateAhuNumberV9').value.trim(),
    documents: [ahuFile ? `SK Kemenkumham/AHU: ${ahuFile.name}` : '', `SK Kepengurusan Terbaru: ${managementFile.name}`].filter(Boolean),
    confirmation: true,
    requirementsComplete: true,
    status: 'Menunggu Verifikasi',
    outputLabel: org.orgType.includes('Non Badan') ? 'Surat Keterangan Terdaftar (SKT)' : 'Surat Hasil Pemutakhiran Lapor Keberadaan',
    outputStatus: 'Belum diterbitkan',
    sktFileName: '',
    sktNumber: '',
    issuedDate: '',
    rejectionReason: ''
  };
  applicationRequestsV6.unshift(request);
  selectedApplicationIdV6 = id;
  ormasChangeRequestsV8.unshift({ id, org: request.org, type: serviceType, date: request.date, status: request.status, note: `Pemutakhiran data periode ${request.managementStartYear}–${request.managementEndYear}.` });
  toast('Pemutakhiran data dikirim dan masuk ke Monitoring Pendaftaran pegawai.');
  go('#ormas-history');
};

// Seed one ready-to-publish SKT example so the employee flow is visible immediately.
if (!applicationRequestsV6.some(item => item.id === 'UPD-2026-0720')) {
  applicationRequestsV6.unshift({
    id: 'UPD-2026-0720', date: '2026-07-20', org: 'Yayasan Peduli Pendidikan Anak Bangsa', shortName: 'YPPA',
    orgType: 'Non Badan Hukum / SKT', requestType: 'Perpanjangan / Pembaruan SKT', submissionKind: 'data-update-skt',
    applicantEmail: 'kontak@yppa.or.id', applicantName: 'Rudi Hartono', applicantPosition: 'Sekretaris', applicantPhone: '0812-7788-9900',
    mainField: 'Pendidikan', activityFields: ['Pendidikan', 'Sosial'], chair: 'Nur Aisyah', chairPhone: '0812-1010-2020',
    secretary: 'Rudi Hartono', secretaryPhone: '0812-7788-9900', treasurer: 'Dian Lestari', treasurerPhone: '0813-5566-7788',
    managementStartYear: '2023', managementEndYear: '2028', periodStart: '2023-01-01', periodEnd: '2028-12-31',
    address: 'Jl. Raya Pasar Minggu No. 45, Jakarta Selatan', region: 'Jakarta Selatan', postalCode: '12520', officePhone: '021-7884120',
    email: 'kontak@yppa.or.id', ahuNumber: '', documents: ['SK Kepengurusan Terbaru: SK-PENGURUS-YPPA-2026.pdf'], confirmation: true,
    requirementsComplete: true, status: 'Siap Penerbitan SKT', outputLabel: 'Surat Keterangan Terdaftar (SKT)', outputStatus: 'Menunggu file SKT dari pegawai',
    sktFileName: '', sktNumber: '', issuedDate: '', rejectionReason: ''
  });
}

function outputStatusV9(item) {
  if (item.sktFileName) return `<span class="pill green">${item.outputStatus}</span>`;
  if (item.status === 'Siap Penerbitan SKT' || item.status === 'Siap Unggah Surat') return `<span class="pill orange">${item.outputStatus || 'Siap diunggah'}</span>`;
  return `<span class="pill blue">${item.outputStatus || 'Belum ada output'}</span>`;
}

applicationRowsV6 = function (items = applicationRequestsV6) {
  return items.map(item => `<tr>
    <td><a class="click-link" onclick="openAdminApplicationV6('${item.id}')">${item.id}</a></td>
    <td>${dateLabelV6(item.date)}</td>
    <td><b>${item.org}</b><br><small>${item.email}</small></td>
    <td>${item.orgType}</td>
    <td><b>${item.requestType}</b>${item.submissionKind === 'data-update-skt' ? `<br><small>${item.mainField || '-'} • ${item.managementStartYear || '-'}–${item.managementEndYear || '-'}</small>` : ''}</td>
    <td>${item.region}</td>
    <td>${registrationStatusBadgeV6(item.status)}</td>
    <td><span class="photo-count">📎 ${item.documents.length} dokumen</span>${item.submissionKind === 'data-update-skt' ? `<br><small>${item.requirementsComplete ? 'Persyaratan form lengkap' : 'Perlu dilengkapi'}</small>` : ''}</td>
    <td><button class="btn tiny" onclick="openAdminApplicationV6('${item.id}')">${item.status.includes('Penerbitan') ? 'Unggah SKT' : 'Periksa'}</button></td>
  </tr>`).join('');
};

adminApplicationRowsNeedingActionV6 = function () {
  const items = applicationRequestsV6.filter(item => !['Disetujui', 'Selesai'].includes(item.status));
  return items.length ? applicationRowsV6(items) : '<tr><td colspan="9" class="empty-state-v6">Tidak ada pengajuan yang perlu ditindaklanjuti.</td></tr>';
};

adminApplicationsPageV6 = function () {
  const content = `<article class="panel table-panel"><div class="panel-head"><div><h3>Monitoring Pendaftaran & Pemutakhiran ORMAS</h3><p class="muted">Mencakup pendaftaran awal, pemutakhiran data lapor keberadaan, perubahan data, dan pembaruan SKT.</p></div><button class="outline-btn" onclick="toast('Simulasi export data pendaftaran')">Export Excel</button></div><div class="admin-filter-row application-filter-v6"><label>Pencarian<input id="adminApplicationSearchV6" placeholder="Nama ORMAS / nomor pengajuan" oninput="renderAdminApplicationsV6()"></label><label>Jenis ORMAS<select id="adminApplicationTypeV6" onchange="renderAdminApplicationsV6()"><option value="">Semua Jenis</option><option>Badan Hukum</option><option>Non Badan Hukum / SKT</option></select></label><label>Status<select id="adminApplicationStatusV6" onchange="renderAdminApplicationsV6()"><option value="">Semua Status</option><option>Menunggu Verifikasi</option><option>Perlu Perbaikan</option><option>Siap Penerbitan SKT</option><option>Siap Unggah Surat</option><option>Disetujui</option><option>Ditolak</option></select></label></div><div class="table-scroll"><table><thead><tr><th>No. Pengajuan</th><th>Tanggal</th><th>Nama ORMAS</th><th>Jenis ORMAS</th><th>Jenis Pengajuan</th><th>Wilayah</th><th>Status</th><th>Persyaratan</th><th>Aksi</th></tr></thead><tbody id="adminApplicationsBodyV6">${applicationRowsV6()}</tbody></table></div></article>`;
  return adminShell(content, 'applications');
};

function updateRequirementRowsV9(item) {
  const checks = [
    ['Email dan identitas pengisi', Boolean(item.applicantEmail && item.applicantName && item.applicantPosition && item.applicantPhone)],
    ['Data dasar organisasi', Boolean(item.org && item.mainField && item.activityFields?.length)],
    ['Masa bakti dan data pengurus', Boolean(item.managementStartYear && item.managementEndYear && item.chair && item.secretary && item.treasurer)],
    ['Alamat kantor/sekretariat', Boolean(item.address && item.region && item.officePhone && item.email)],
    ['Nomor AHU/SK Kemenkumham', item.orgType.includes('Badan Hukum') ? Boolean(item.ahuNumber) : true],
    ['SK Kepengurusan Organisasi Terbaru', item.documents.some(name => name.includes('SK Kepengurusan'))],
    ['Konfirmasi kebenaran data', Boolean(item.confirmation)]
  ];
  return checks.map(([label, okay]) => `<div class="requirement-item-v9 ${okay ? 'complete' : 'missing'}"><span>${okay ? '✓' : '!'}</span><div><b>${label}</b><small>${okay ? 'Lengkap' : 'Belum lengkap'}</small></div></div>`).join('');
}

const adminApplicationDetailBeforeV9 = adminApplicationDetailV6;
adminApplicationDetailV6 = function () {
  const item = applicationRequestsV6.find(entry => entry.id === selectedApplicationIdV6) || applicationRequestsV6[0];
  if (item.submissionKind !== 'data-update-skt') return adminApplicationDetailBeforeV9();
  const isNonLegal = item.orgType.includes('Non Badan');
  const outputLabel = item.outputLabel || (isNonLegal ? 'Surat Keterangan Terdaftar (SKT)' : 'Surat Hasil Pemutakhiran');
  const content = `<div class="preview-detail skt-admin-detail-v9"><section class="panel"><div class="panel-head"><div><span class="pill cyan">Pemutakhiran ORMAS Terdaftar</span><h2>${item.requestType}</h2><p class="muted">${item.id} • ${item.org}</p></div>${registrationStatusBadgeV6(item.status)}</div>
    <div class="admin-form-section-v9"><h3>1. Identitas Pengajuan</h3><div class="detail-grid application-detail-grid-v6"><div><small>Email</small><b>${item.applicantEmail}</b></div><div><small>Nama Pengisi</small><b>${item.applicantName}</b></div><div><small>Jabatan</small><b>${item.applicantPosition}</b></div><div><small>Nomor HP / WhatsApp</small><b>${item.applicantPhone}</b></div><div><small>Tanggal Pengajuan</small><b>${dateLabelV6(item.date)}</b></div></div></div>
    <div class="admin-form-section-v9"><h3>2. Data Dasar Organisasi</h3><div class="detail-grid application-detail-grid-v6"><div><small>Nama Organisasi</small><b>${item.org}</b></div><div><small>Nama Singkatan</small><b>${item.shortName || '-'}</b></div><div><small>Bidang Utama</small><b>${item.mainField}</b></div><div><small>Bidang Kegiatan</small><b>${item.activityFields.join(', ')}</b></div></div></div>
    <div class="admin-form-section-v9"><h3>3. Masa Bakti Kepengurusan dan SK Pengurus</h3><div class="detail-grid application-detail-grid-v6"><div><small>Masa Bakti</small><b>${item.managementStartYear}–${item.managementEndYear}</b></div><div><small>Ketua</small><b>${item.chair}<br><small>${item.chairPhone}</small></b></div><div><small>Sekretaris</small><b>${item.secretary}<br><small>${item.secretaryPhone}</small></b></div><div><small>Bendahara</small><b>${item.treasurer}<br><small>${item.treasurerPhone}</small></b></div></div></div>
    <div class="admin-form-section-v9"><h3>4. Alamat Kantor / Sekretariat</h3><div class="detail-grid application-detail-grid-v6"><div class="wide-v7"><small>Alamat</small><b>${item.address}</b></div><div><small>Kota/Kabupaten</small><b>${item.region}</b></div><div><small>Kode Pos</small><b>${item.postalCode || '-'}</b></div><div><small>Telepon Kantor/HP</small><b>${item.officePhone}</b></div><div><small>Email Organisasi</small><b>${item.email}</b></div></div></div>
    <div class="admin-form-section-v9"><h3>5. Legalitas dan Keabsahan Dokumen</h3><div class="detail-grid application-detail-grid-v6"><div class="wide-v7"><small>Nomor AHU / SK Kemenkumham</small><b>${item.ahuNumber || 'Tidak dicantumkan / tidak berlaku'}</b></div></div><div class="table-scroll"><table><thead><tr><th>Dokumen</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${item.documents.map(name => `<tr><td>📎 ${name}</td><td><span class="pill green">Terunggah</span></td><td><button class="btn tiny" onclick="toast('Simulasi membuka dokumen')">Lihat</button></td></tr>`).join('')}</tbody></table></div></div>
    <div class="admin-form-section-v9"><h3>6. Konfirmasi Akhir</h3><p>${item.confirmation ? '✓ Pemohon menyatakan seluruh data dan dokumen benar dan dapat dipertanggungjawabkan.' : 'Konfirmasi belum diberikan.'}</p></div>
    ${item.rejectionReason ? `<div class="notice"><b>Catatan Perbaikan:</b> ${item.rejectionReason}</div>` : ''}
    ${item.sktFileName ? `<div class="published-output-v9"><span class="pill green">Dokumen Terbit</span><h3>${outputLabel}</h3><p><b>${item.sktNumber}</b> • ${dateLabelV6(item.issuedDate)}</p><small>File: ${item.sktFileName}</small></div>` : ''}
    </section><aside><article class="panel"><h3>Pemeriksaan Persyaratan</h3><p class="muted">Daftar pemeriksaan mengikuti form pemutakhiran yang diberikan.</p><div class="requirement-list-v9">${updateRequirementRowsV9(item)}</div></article><article class="panel verification-panel"><h3>Keputusan Verifikasi</h3><label>Catatan Perbaikan / Alasan Penolakan</label><textarea id="applicationReasonV6" class="note-area" placeholder="Diisi jika meminta perbaikan atau menolak">${item.rejectionReason || ''}</textarea><button class="btn success full-button" onclick="approveDataUpdateV9('${item.id}')">Setujui Data & Persyaratan</button><button class="btn full-button" onclick="requestApplicationCorrectionV6('${item.id}')">Minta Perbaikan</button><button class="btn danger full-button" onclick="rejectApplicationV6('${item.id}')">Tolak</button></article><article class="panel output-upload-v9"><h3>Unggah ${outputLabel}</h3><p class="muted">Dilakukan setelah data dan persyaratan disetujui. File akan muncul pada Dashboard ORMAS.</p><label>Nomor ${isNonLegal ? 'SKT' : 'Surat'}</label><input id="outputNumberV9" value="${item.sktNumber || ''}" placeholder="Masukkan nomor dokumen"><label>Tanggal Terbit</label><input id="outputIssuedDateV9" type="date" value="${item.issuedDate || new Date().toISOString().slice(0,10)}"><label>File PDF</label><input id="outputFileV9" type="file" accept="application/pdf"><small>${item.sktFileName ? `File saat ini: ${item.sktFileName}` : 'Belum ada file yang diunggah.'}</small><button class="btn blue full-button" onclick="publishSktOutputV9('${item.id}')">Unggah & Terbitkan ke Dashboard ORMAS</button><button class="outline-btn full-button" onclick="go('#admin-applications')">Kembali ke Daftar</button></article></aside></div>`;
  return adminShell(content, 'applications');
};

window.approveDataUpdateV9 = function (id) {
  const item = applicationRequestsV6.find(entry => entry.id === id);
  if (!item) return;
  item.status = item.orgType.includes('Non Badan') ? 'Siap Penerbitan SKT' : 'Siap Unggah Surat';
  item.outputStatus = item.orgType.includes('Non Badan') ? 'Menunggu file SKT dari pegawai' : 'Menunggu file surat hasil pemutakhiran';
  item.rejectionReason = '';
  const history = ormasChangeRequestsV8.find(entry => entry.id === id);
  if (history) history.status = item.status;
  toast('Data dan persyaratan disetujui. Silakan unggah dokumen output.');
  render();
};

window.publishSktOutputV9 = function (id) {
  const item = applicationRequestsV6.find(entry => entry.id === id);
  if (!item) return;
  const number = $('#outputNumberV9')?.value.trim();
  const issuedDate = $('#outputIssuedDateV9')?.value;
  const file = $('#outputFileV9')?.files[0];
  if (!number) return toast('Nomor SKT/surat wajib diisi.');
  if (!issuedDate) return toast('Tanggal terbit wajib diisi.');
  if (!file && !item.sktFileName) return toast('Pilih file PDF SKT/surat yang akan diterbitkan.');
  item.sktNumber = number;
  item.issuedDate = issuedDate;
  item.sktFileName = file ? file.name : item.sktFileName;
  item.status = 'Disetujui';
  item.outputStatus = 'Terbit dan tersedia di Dashboard ORMAS';
  const history = ormasChangeRequestsV8.find(entry => entry.id === id);
  if (history) history.status = 'Disetujui';
  const org = ormasAccountsV8.find(entry => entry.name === item.org);
  if (org) {
    org.letterLabel = item.outputLabel;
    org.letterNumber = number;
    if (org.orgType.includes('Non Badan')) {
      org.legalLabel = 'Nomor SKT';
      org.legalNumber = number;
    }
    const existing = org.documents.find(entry => entry[0] === item.outputLabel);
    if (existing) existing[1] = 'Tersedia untuk diunduh';
    else org.documents.unshift([item.outputLabel, 'Tersedia untuk diunduh']);
  }
  toast(`${item.outputLabel} diterbitkan dan tersedia pada Dashboard ORMAS.`);
  render();
};

// Employee dashboard prioritizes SKT/output work alongside registration and activity review.
workQueueRowsV7 = function () {
  const ready = applicationRequestsV6.find(item => ['Siap Penerbitan SKT', 'Siap Unggah Surat'].includes(item.status));
  const rows = [
    ready ? { priority: 'Tinggi', service: 'Monitoring Pendaftaran', org: ready.org, task: `${ready.outputStatus}. Unggah ${ready.outputLabel}.`, updated: 'Baru saja', due: 'Hari ini', action: `openAdminApplicationV6('${ready.id}')` } : null,
    { priority: 'Tinggi', service: 'Monitoring Pendaftaran', org: 'Yayasan Peduli Pendidikan Anak Bangsa', task: 'Periksa kelengkapan form pemutakhiran dan SK kepengurusan terbaru', updated: '10 menit lalu', due: 'Hari ini', action: "openAdminApplicationV6('UPD-2026-0720')" },
    { priority: 'Tinggi', service: 'Monitoring Keaktifan', org: 'Komunitas Lingkungan Hijau Jakarta', task: 'Verifikasi 3 foto dan keterangan kegiatan', updated: '25 menit lalu', due: 'Hari ini', action: "openAdminReport('AKT-2026-0710')" },
    { priority: 'Sedang', service: 'Monitoring Pendaftaran', org: 'Jurnal Demokrasi', task: 'Validasi SK Kemenkumham dan periode kepengurusan', updated: '1 jam lalu', due: 'Besok', action: "openAdminApplicationV6('ORM-2026-0712')" },
    { priority: 'Rendah', service: 'Direktori ORMAS', org: 'Forum Pemuda Betawi Bersatu', task: 'Periksa pembaruan informasi publik', updated: 'Kemarin', due: '3 hari', action: "openAdminOrmasV7('Forum Pemuda Betawi Bersatu')" }
  ].filter(Boolean);
  return rows.map((item, index) => `<tr><td>${index + 1}</td><td>${urgencyBadgeV7(item.priority)}</td><td><b>${item.service}</b></td><td><button class="link-button-v7" onclick="openAdminOrmasV7('${item.org.replace(/'/g, "\\'")}')">${item.org}</button><br><small>${item.task}</small></td><td>${item.updated}</td><td><b>${item.due}</b></td><td><button class="btn tiny" onclick="${item.action}">Kerjakan</button></td></tr>`).join('');
};

operationalSummaryV7 = function () {
  const readyOutputs = applicationRequestsV6.filter(item => ['Siap Penerbitan SKT', 'Siap Unggah Surat'].includes(item.status)).length;
  return `<div class="work-summary-grid-v7"><button class="work-summary-v7 urgent" onclick="go('#admin-applications')"><span>Pengajuan baru</span><b>${applicationRequestsV6.filter(item => item.status === 'Menunggu Verifikasi').length}</b><small>Perlu pemeriksaan awal</small></button><button class="work-summary-v7 warning" onclick="go('#admin-applications')"><span>SKT/Surat siap diunggah</span><b>${readyOutputs}</b><small>Data sudah disetujui pegawai</small></button><button class="work-summary-v7 danger" onclick="go('#admin-reports')"><span>Laporan kegiatan baru</span><b>${activityReports.filter(item => item.status === 'Menunggu Verifikasi').length}</b><small>Foto dan keterangan perlu ditinjau</small></button><button class="work-summary-v7 success" onclick="go('#admin-directory')"><span>Profil perlu pembaruan</span><b>4</b><small>Masa bakti/kontak mendekati batas</small></button></div>`;
};

recentActivityTimelineV7 = function () {
  const events = [
    ['10:42', 'Pemutakhiran data siap diterbitkan', 'Yayasan Peduli Pendidikan Anak Bangsa • Pegawai perlu mengunggah SKT'],
    ['10:35', 'Laporan keaktifan baru masuk', 'Komunitas Lingkungan Hijau Jakarta • Aksi Bersih Pesisir'],
    ['10:02', 'Pengajuan meminta perbaikan', 'Dokumen domisili sekretariat perlu diperbarui'],
    ['09:40', 'Pengajuan pendaftaran disetujui', 'Forum Pemuda Betawi Bersatu'],
    ['09:15', 'Laporan kegiatan disetujui', 'Yayasan Peduli Pendidikan Anak Bangsa • Kelas Literasi Anak']
  ];
  return `<div class="activity-feed-v7">${events.map((item, index) => `<div class="activity-feed-item-v7"><span class="activity-dot-v7 ${index < 3 ? 'alert' : ''}"></span><div><small>${item[0]}</small><b>${item[1]}</b><p>${item[2]}</p></div></div>`).join('')}</div>`;
};

const ormasDocumentsBeforeV9 = ormasDocumentsV8;
ormasDocumentsV8 = function () {
  const org = selectedOrmasAccountV8();
  const latestOutput = applicationRequestsV6
    .filter(item => item.org === org.name && item.sktFileName)
    .sort((a, b) => String(b.issuedDate).localeCompare(String(a.issuedDate)))[0];
  if (!latestOutput) return ormasDocumentsBeforeV9();
  const content = `<section class="ormas-section-head-v8"><div><span class="pill green">Dokumen Baru Diterbitkan</span><h2>Dokumen & Surat</h2><p>Dokumen yang diunggah pegawai setelah verifikasi pemutakhiran tersedia di halaman ini.</p></div></section><div class="ormas-document-feature-v8 published-document-v9"><div><span class="pill green">Tersedia</span><h3>${latestOutput.outputLabel}</h3><p><b>${latestOutput.sktNumber}</b> • ${dateLabelV6(latestOutput.issuedDate)}</p><small>File: ${latestOutput.sktFileName}</small></div><div><button class="btn blue" onclick="toast('Simulasi mengunduh ${latestOutput.sktFileName}')">Unduh PDF</button><button class="outline-btn" onclick="toast('Simulasi membuka pratinjau dokumen')">Pratinjau</button></div></div><article class="panel table-panel"><div class="panel-head"><div><h3>Daftar Dokumen ORMAS</h3><p class="muted">Pemutakhiran dokumen harus melalui verifikasi pegawai.</p></div><button class="outline-btn" onclick="go('#ormas-change-request')">Ajukan Pembaruan</button></div><div class="table-scroll"><table><thead><tr><th>No.</th><th>Dokumen</th><th>Status</th><th>Terakhir Diperbarui</th><th>Aksi</th></tr></thead><tbody>${org.documents.map((item, index) => `<tr><td>${index + 1}</td><td><b>${item[0]}</b></td><td><span class="pill ${item[1].includes('Perlu') ? 'orange' : 'green'}">${item[1]}</span></td><td>${dateLabelV6(latestOutput.issuedDate)}</td><td><button class="btn tiny" onclick="toast('Simulasi membuka ${item[0]}')">Lihat</button> <button class="outline-btn tiny" onclick="toast('Simulasi mengunduh ${item[0]}')">Unduh</button></td></tr>`).join('')}</tbody></table></div></article>`;
  return ormasShellV8(content, 'documents');
};

// Route guard: all ORMAS self-service pages require a successful login.
const renderBeforeV9 = render;
render = function () {
  const route = location.hash || '#home';
  const protectedOrmasRoutesV9 = new Set(['#ormas-dashboard', '#ormas-profile', '#ormas-registration-status', '#ormas-activities', '#ormas-change-request', '#ormas-documents', '#ormas-history', '#activity-report', '#application', '#ormas-registration-form']);
  if (protectedOrmasRoutesV9.has(route) && !ormasAuthenticatedV9) {
    pendingLoginDestinationV4 = route;
    if (location.hash !== '#ormas-login') {
      try { history.replaceState(null, '', '#ormas-login'); }
      catch (error) { location.hash = '#ormas-login'; }
    }
    app.innerHTML = loginPage();
    window.scrollTo(0, 0);
    return;
  }
  renderBeforeV9();
};

setTimeout(render, 0);
