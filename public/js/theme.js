(function(){
  function getPreferredTheme(){
    try{
      const saved=localStorage.getItem('cmg-theme');
      if(saved==="light"||saved==="dark") return saved;
    }catch(_){/* ignore */}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function applyTheme(theme){
    const b=document.body;
    if(!b) return;
    b.classList.toggle('dark-mode', theme==='dark');
    b.classList.toggle('light-mode', theme==='light');
    try{ localStorage.setItem('cmg-theme', theme); }catch(_){}
  }
  function makeToggle(){
    const btn=document.createElement('button');
    btn.className='theme-toggle';
    const setLabel=(t)=>{ btn.textContent = t==='dark' ? '☀️ Light' : '🌙 Dark'; };
    let current = getPreferredTheme();
    applyTheme(current);
    setLabel(current);
    btn.addEventListener('click', ()=>{
      current = current==='dark' ? 'light' : 'dark';
      applyTheme(current);
      setLabel(current);
    });
    document.body.appendChild(btn);

    // react to OS scheme changes if user has no manual preference
    try{
      const saved=localStorage.getItem('cmg-theme');
      if(!saved){
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e)=>{
          current = e.matches ? 'dark' : 'light';
          applyTheme(current);
          setLabel(current);
        });
      }
    }catch(_){/* ignore */}
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', makeToggle);
  }else{
    makeToggle();
  }
})();
