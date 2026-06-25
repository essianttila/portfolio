// ---- Language toggle ----
function setLang(l){
  document.getElementById('lang-en').classList.toggle('hidden', l!=='en');
  document.getElementById('lang-fi').classList.toggle('hidden', l!=='fi');
  document.querySelectorAll('[data-lang-btn]').forEach(function(b){
    var on = b.getAttribute('data-lang-btn')===l;
    b.style.background = on ? 'var(--ink)' : 'transparent';
    b.style.color = on ? 'var(--bg)' : 'var(--ink)';
  });
  document.documentElement.lang = l;
  window.scrollTo({top:0});
}

// ---- Hover-reveal videos ----
document.querySelectorAll('.work-tile').forEach(function(tile){
  var v = tile.querySelector('video');
  if(!v) return;
  tile.addEventListener('mouseenter', function(){ v.style.opacity='1'; var p=v.play(); if(p&&p.catch)p.catch(function(){}); });
  tile.addEventListener('mouseleave', function(){ v.style.opacity='0'; try{ v.pause(); v.currentTime=0; }catch(e){} });
});

// ---- Init ----
setLang('en');
