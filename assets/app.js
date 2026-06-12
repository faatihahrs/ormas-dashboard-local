const sampleOrmas = [
  {nama:'Yayasan Peduli Pendidikan Anak Bangsa', bidang:'Pendidikan', wilayah:'Jakarta Selatan', status:'Menunggu Verifikasi', badge:'yellow', dokumen:'8/10', masa:'2022 - 2025', updated:'11 Jun 2026'},
  {nama:'Forum Pemuda Betawi Bersatu', bidang:'Kepemudaan', wilayah:'Jakarta Timur', status:'Perlu Revisi', badge:'orange', dokumen:'5/10', masa:'2021 - 2024', updated:'10 Jun 2026'},
  {nama:'Lembaga Dakwah dan Sosial Al-Ikhlas', bidang:'Keagamaan', wilayah:'Jakarta Barat', status:'Menunggu Verifikasi', badge:'yellow', dokumen:'7/10', masa:'2020 - 2023', updated:'9 Jun 2026'},
  {nama:'Komunitas Lingkungan Hijau Jakarta', bidang:'Lingkungan', wilayah:'Jakarta Utara', status:'Kadaluarsa', badge:'red', dokumen:'6/10', masa:'2018 - 2021', updated:'7 Jun 2026'},
  {nama:'Paguyuban Seni Budaya Nusantara', bidang:'Kebudayaan', wilayah:'Jakarta Pusat', status:'Perlu Revisi', badge:'orange', dokumen:'4/10', masa:'2022 - 2025', updated:'6 Jun 2026'},
  {nama:'Perkumpulan Sosial Masyarakat Mandiri', bidang:'Sosial', wilayah:'Jakarta Pusat', status:'Diverifikasi', badge:'green', dokumen:'10/10', masa:'2023 - 2028', updated:'5 Jun 2026'}
];

function renderRows(){
  const follow = document.getElementById('followUpRows');
  const ormas = document.getElementById('ormasRows');
  if(follow){follow.innerHTML = sampleOrmas.slice(0,5).map((r,i)=>`<tr><td>${i+1}</td><td>${r.nama}</td><td>${r.wilayah}</td><td><span class="badge ${r.badge}">${r.status}</span></td><td>${r.dokumen}</td><td>${r.masa}</td><td><button class="outline-btn">Tindaklanjuti</button></td></tr>`).join('')}
  if(ormas){ormas.innerHTML = sampleOrmas.map(r=>`<tr><td>${r.nama}</td><td>${r.bidang}</td><td>${r.wilayah}</td><td><span class="badge ${r.badge}">${r.status}</span></td><td>${r.dokumen}</td><td>${r.updated}</td></tr>`).join('')}
}

const pageTitles = {
  dashboard:'Dashboard Monitoring ORMAS', ormas:'Data ORMAS', pelaporan:'Pelaporan ORMAS', verifikasi:'Verifikasi Admin', dokumen:'Monitoring Dokumen', flowchart:'Flowchart & Data Flow', laporan:'Laporan'
};
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active-page'));
  document.getElementById(id).classList.add('active-page');
  document.querySelectorAll('.nav-link').forEach(n=>n.classList.toggle('active', n.dataset.page===id));
  document.getElementById('pageTitle').textContent = pageTitles[id] || 'Dashboard Monitoring ORMAS';
}
document.querySelectorAll('[data-page]').forEach(btn=>btn.addEventListener('click',()=>showPage(btn.dataset.page)));
document.querySelectorAll('[data-page-jump]').forEach(btn=>btn.addEventListener('click',()=>showPage(btn.dataset.pageJump)));

let stepIndex = 0;
function showStep(i){
  const steps = document.querySelectorAll('.step');
  const forms = document.querySelectorAll('.form-step');
  stepIndex = Math.max(0, Math.min(i, forms.length-1));
  steps.forEach((s,idx)=>s.classList.toggle('active', idx===stepIndex));
  forms.forEach((f,idx)=>f.classList.toggle('active-form-step', idx===stepIndex));
  document.getElementById('prevStep').disabled = stepIndex===0;
  document.getElementById('nextStep').classList.toggle('hidden', stepIndex===forms.length-1);
  document.getElementById('submitReport').classList.toggle('hidden', stepIndex!==forms.length-1);
}
document.querySelectorAll('.step').forEach(s=>s.addEventListener('click',()=>showStep(Number(s.dataset.step))));
document.getElementById('nextStep')?.addEventListener('click',()=>showStep(stepIndex+1));
document.getElementById('prevStep')?.addEventListener('click',()=>showStep(stepIndex-1));
document.getElementById('submitReport')?.addEventListener('click',()=>alert('Pelaporan berhasil disubmit. Status: Menunggu Verifikasi.'));

function makeCharts(){
  const common = {responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{boxWidth:12,font:{size:12}}}}};
  new Chart(document.getElementById('trendChart'),{type:'line',data:{labels:['Des','Jan','Feb','Mar','Apr','Mei'],datasets:[{label:'Pelaporan',data:[850,980,1120,1260,1480,1680],borderColor:'#0b5ed7',backgroundColor:'rgba(11,94,215,.12)',fill:true,tension:.35,pointRadius:4}]},options:{...common,scales:{y:{beginAtZero:true}}}});
  new Chart(document.getElementById('statusChart'),{type:'doughnut',data:{labels:['Draft','Menunggu Verifikasi','Perlu Revisi','Ditolak','Diverifikasi'],datasets:[{data:[153,328,117,330,5914],backgroundColor:['#70a9ff','#ffb703','#fb6a21','#e83e5a','#28a745']}]},options:common});
  new Chart(document.getElementById('regionChart'),{type:'bar',data:{labels:['Jakarta Pusat','Jakarta Utara','Jakarta Barat','Jakarta Selatan','Jakarta Timur','Kep. Seribu'],datasets:[{label:'Jumlah ORMAS',data:[1205,1340,1450,1210,1460,177],backgroundColor:'#0b5ed7',borderRadius:8}]},options:{...common,scales:{y:{beginAtZero:true}}}});
  new Chart(document.getElementById('fieldChart'),{type:'bar',data:{labels:['Sosial','Keagamaan','Pendidikan','Kepemudaan','Kebudayaan','Lingkungan'],datasets:[{label:'Jumlah',data:[1842,1538,1262,934,712,554],backgroundColor:'#0b5ed7',borderRadius:8}]},options:{...common,indexAxis:'y',scales:{x:{beginAtZero:true}}}});
  new Chart(document.getElementById('termChart'),{type:'doughnut',data:{labels:['Aktif','Akan Berakhir','Kadaluarsa'],datasets:[{data:[5106,894,842],backgroundColor:['#28a745','#ffb703','#e83e5a']}]},options:common});
}

renderRows();
showStep(0);
makeCharts();
