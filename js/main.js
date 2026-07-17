
document.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('protocolSearch');
  if(search){
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase().trim();
      document.querySelectorAll('.protocol-item').forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-copy-target]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const target = document.getElementById(btn.getAttribute('data-copy-target'));
      if(!target) return;
      try{
        await navigator.clipboard.writeText(target.innerText.trim());
        const old = btn.innerHTML;
        btn.innerHTML = '<i class="bi bi-check2-circle"></i> Copiado';
        setTimeout(()=>btn.innerHTML = old, 1600);
      }catch(e){
        btn.innerText = 'Selecciona y copia manualmente';
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const progress = document.getElementById('checkProgress');
  if(progress){
    const checks = document.querySelectorAll('.check-item input[type="checkbox"]');
    const update = () => {
      const total = checks.length || 1;
      const done = Array.from(checks).filter(c=>c.checked).length;
      const pct = Math.round((done/total)*100);
      progress.style.width = pct + '%';
      progress.textContent = pct + '%';
    };
    checks.forEach(c=>c.addEventListener('change', update));
    update();
  }
  const glossarySearch = document.getElementById('glossarySearch');
  if(glossarySearch){
    glossarySearch.addEventListener('input', () => {
      const q = glossarySearch.value.toLowerCase().trim();
      document.querySelectorAll('.glossary-item').forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }
});
