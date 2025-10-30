// SPA Simple Router
function switchPage(page){
  document.querySelectorAll('.bottom-nav .nav-btn').forEach(btn=>btn.classList.remove('active'));
  let btn=document.querySelector('.bottom-nav .nav-btn[data-page="'+page+'"]');
  if(btn) btn.classList.add('active');
  window.location.hash = page;
  loadPageContent(page||'home');
}
async function loadPageContent(page){
  let main = document.querySelector('main');
  let url = `pages/${page||'home'}.html`;
  try {
    let resp = await fetch(url);
    if(!resp.ok) throw new Error();
    main.innerHTML = await resp.text();
    setTimeout(()=>afterPageLoad(page),60);
  }catch{ main.innerHTML='<div class="card"><b>Halaman tidak ditemukan.</b></div>'; }
}
function afterPageLoad(page){
  if(page==='home') initHomeChart();
  if(page==='laporan') initLaporanChart();
}
// handle nav-bar click
window.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('.bottom-nav .nav-btn').forEach(btn=>{
    btn.onclick=()=>switchPage(btn.dataset.page);
  });
  let pg=(window.location.hash||'#home').slice(1);
  switchPage(pg);
});
window.addEventListener('hashchange',()=>{
  let pg=(window.location.hash||'#home').slice(1);
  switchPage(pg);
});

// KATEGORI CRUD
const KATEGORI_KEY = 'rm_kategori';
function getKategori(){return JSON.parse(localStorage.getItem(KATEGORI_KEY)||'["Makanan","Minuman"]');}
function saveKategori(list){localStorage.setItem(KATEGORI_KEY,JSON.stringify(list));}
function renderKategoriPage(){
  let tbody = document.getElementById('kategori-list');
  let data = getKategori();
  tbody.innerHTML = data.map((k,i)=>`<tr><td>${k}</td><td><button onclick='editKategori(${i})'>Edit</button><button onclick='deleteKategori(${i})'>Hapus</button></td></tr>`).join('')||"<tr><td colspan=2>Belum ada kategori</td></tr>";
}
function addKategori(){
  let form = document.getElementById('kategori-form');
  let val = form.querySelector('input').value.trim();
  if(!val) return showNotif('kategori-notif','Wajib isi.');
  let data = getKategori();
  if(data.includes(val)) return showNotif('kategori-notif','Kategori sudah ada!');
  data.push(val); saveKategori(data); renderKategoriPage();form.reset();showNotif('kategori-notif','Kategori ditambah.','ok');syncDropdownKategori();
}
function editKategori(idx){
  let data = getKategori();
  let now = data[idx];
  document.getElementById('modal-area').innerHTML=`<div class='modal-bg' onclick='closeModal(event)'></div><div class='modal'><h3>Edit Kategori</h3><input value='${now}' id='input-edit-kat'/><button onclick='saveEditKategori(${idx})'>Simpan</button><button type='button' onclick='closeModal()'>Batal</button></div>`;
}
function saveEditKategori(idx){
  let val = document.getElementById('input-edit-kat').value.trim();
  if(!val) return;
  let data = getKategori();
  data[idx]=val; saveKategori(data); closeModal(); renderKategoriPage();syncDropdownKategori(); showNotif('kategori-notif','Berhasil edit kategori.','ok');
}
function deleteKategori(idx){
  if(confirm('Hapus kategori?')){let data=getKategori(); data.splice(idx,1); saveKategori(data); renderKategoriPage();syncDropdownKategori(); showNotif('kategori-notif','Kategori dihapus!','ok');}
}
function syncDropdownKategori(){
  // menu.html
  let page = location.hash.slice(1)||'home'; if(page!=='menu') return;
  let sel=document.querySelector('#menu-form select');
  if(sel && typeof getKategori=="function"){
    let kat = getKategori();
    sel.innerHTML=kat.map(k=>`<option>${k}</option>`).join('');
  }
}
function showNotif(id,msg,ok){
  let b=document.getElementById(id);b.classList.remove('hidden');
  b.textContent=msg;b.style.background=ok?'#a6fac1':'#ffd4d6';setTimeout(()=>b.classList.add('hidden'),2200);
}
// Render kategori on page entry
document.addEventListener('DOMContentLoaded',()=>{
 if(window.location.hash.slice(1)==='kategori') setTimeout(renderKategoriPage,10);
 let kf=document.getElementById('kategori-form');if(kf)kf.onsubmit=(e)=>{e.preventDefault();addKategori();};
});

// --- TOAST ---
if(!document.getElementById('global-toast')){
  let t=document.createElement('div');t.id='global-toast';t.style='display:none;position:fixed;left:50%;bottom:84px;transform:translateX(-50%);z-index:222;padding:13px 26px;border-radius:20px;box-shadow:0 4px 32px #6366f14d;font-size:16px;font-weight:700;min-width:130px;text-align:center;transition:.13s;pointer-events:none';
  document.body.appendChild(t);
}
function showToast(msg,ok){
  let t=document.getElementById('global-toast');
  t.textContent=msg;
  t.style.background=ok?'#a6fac1':'#ffd4d6';
  t.style.color=ok?'#0d6c41':'#c43434';
  t.style.display='block';
  clearTimeout(t.ttime); t.ttime=setTimeout(()=>t.style.display='none',2050);
}
// --- MODAL KONFIRMASI UMUM ---
function confirmDialog(msg,cb){
  let m=document.getElementById('modal-area');
  if(!m){m=document.createElement('div');m.id='modal-area';document.body.appendChild(m);}
  m.innerHTML=`<div class='modal-bg' onclick='closeModal(event)'></div><div class='modal'><h3>Konfirmasi</h3><div style='margin-bottom:13px'>${msg}</div><button onclick='closeModal();window.__callbackOK&&window.__callbackOK();'>Ya, Lanjutkan</button><button type='button' onclick='closeModal()'>Batal</button></div>`;
  window.__callbackOK=()=>{cb();window.__callbackOK=null};
}
function closeModal(e){if(!e||e.target.className==='modal-bg'){document.getElementById('modal-area').innerHTML='';}}

// --- SESSION LOGIN ---
function setSessionUser(email){localStorage.setItem('sessionuser',email);}
function getSessionUser(){return localStorage.getItem('sessionuser');}
function logout(){localStorage.removeItem('sessionuser');window.location.hash='login';showToast('Berhasil logout',1);setTimeout(()=>window.location.reload(),500);}
function requireAuth(){
 let except=['login','register','forgot'];
 let pg=(window.location.hash||'#home').slice(1);
 if(!except.includes(pg) && !getSessionUser()){window.location.hash='login';}}
window.addEventListener('DOMContentLoaded',()=>{
  requireAuth();
  if(document.querySelector('.bottom-nav')){
    let navLogout=document.createElement('div');navLogout.className='nav-btn';navLogout.innerHTML='<span>🚪</span><span class="nav-label">Logout</span>';navLogout.onclick=logout;document.querySelector('.bottom-nav').appendChild(navLogout);
  }
});
window.addEventListener('hashchange',requireAuth);

// --- KATEGORI DROPDOWN MENU ---
function getKategori(){return JSON.parse(localStorage.getItem('rm_kategori')||'["Makanan","Minuman"]');}
function saveKategori(list){localStorage.setItem('rm_kategori',JSON.stringify(list));}
function syncMenuKategori(){
  let kat=getKategori();
  let sel=document.getElementById('menu-kat-sel');
  if(sel) sel.innerHTML=kat.map(k=>`<option>${k}</option>`).join('');
}

// --- CHART INIT ---
function initHomeChart(){
  if(!window.Chart) return;
  let el=document.getElementById('donut-chart');
  if(!el || el.dataset.inited) return;
  new Chart(el,{type:'doughnut',data:{labels:['Es Sirup','Keripik','Nasi Ayam','Nasi Kuning','Telor Balado'],datasets:[{data:[22,22,11,11,11],backgroundColor:['#6366F1','#14B8A6','#FFBE6B','#FF62BC','#A685F9']}]} ,options:{responsive:true,cutout:'60%',plugins:{legend:{display:false}}}});
  el.dataset.inited='1';
}
function initLaporanChart(){
  if(!window.Chart) return;
  let el=document.getElementById('laporanChart');
  if(!el || el.dataset.inited) return;
  new Chart(el,{type:'bar',data:{labels:['Jan','Feb','Mar','Apr','Mei','Jun','Jul'],datasets:[{label:'Omzet',data:[410,560,720,640,530,470,600],backgroundColor:'#6366F1B0'}]},options:{responsive:true,plugins:{legend:{display:false}}}});
  el.dataset.inited='1';
}

// --- CHART.JS AUTOINJECT ---
window.loadChartDashboard=function(data){
  let el=document.getElementById('dashboardChart');if(window.Chart&&el){let ctx=el.getContext('2d');
   new Chart(ctx,{type:'bar',data:{labels:['Sen','Sel','Rab','Kam','Jum','Sab','Min'],datasets:[{label:'Penjualan',data:data,backgroundColor:'#6366F1B0'}]},options:{responsive:true}});}};
window.loadChartLaporan=function(data){
  let el=document.getElementById('laporanChart');if(window.Chart&&el){let ctx=el.getContext('2d');
   new Chart(ctx,{type:'doughnut',data:{labels:['Penjualan','Pengeluaran'],datasets:[{data:data,backgroundColor:['#6366F1B0','#14B8A6CC']}]} ,options:{responsive:true,cutout:'70%'}});}}

// --- TABLE FILTER ---
function filterTable(inputEl,tableid){
  let v=inputEl.value.toLowerCase();
  document.querySelectorAll(`#${tableid} tbody tr`).forEach(tr=>{
    let show=[...tr.children].some(td=>td.textContent.toLowerCase().includes(v));
    tr.style.display=show?'':'none';
  });
}

// --- VALIDASI REGISTER KONFIRMASI PASSWORD ---
window.checkRegisterForm=function(){
 let f=document.getElementById('register-form');if(!f) return;
 f.onsubmit=function(e){e.preventDefault();
 let ps1=f.querySelector('input[type=password]').value,ps2=f.querySelectorAll('input[type=password]')[1].value;
 if(ps1!==ps2) return showToast('Konfirmasi sandi tidak cocok!');
 /*lanjutkan simpan*/ setSessionUser(f.querySelector('input[type=email]').value);showToast('Berhasil daftar',1);window.location.hash='home';};
};

// --- DISABLED BUTTON LOADING ---
function setBtnLoading(btn,yes){ if(!btn)return; if(!btn.getAttribute('data-label')) btn.setAttribute('data-label',btn.textContent); btn.disabled=yes; btn.textContent=yes?'Tunggu...':btn.getAttribute('data-label');}

// --- EMPTY STATE ---
function tableEmptyState(tableid,msg){ let tb=document.getElementById(tableid); if(tb)tb.innerHTML=`<tr><td colspan='8' align='center' style='color:#888'>${msg||'Belum ada data'}</td></tr>`;}

// PATCH: Matikan mandatory session agar semua halaman bebas diakses (untuk demo data dummy saja)
window.getSessionUser = ()=>true;
window.requireAuth = ()=>{};
window.logout = ()=>{showToast('Logout dinonaktifkan (mode demo)',1)};
