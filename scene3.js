(function(){
  function updateActive(){
    const active=document.getElementById('scene3').checked;
    if(active){
      const btn=document.querySelector('#scene3-container .intention-btn');
      if(btn){btn.onclick=()=>{document.getElementById('scene4').checked=true;window.dispatchEvent(new Event('scenechange'));};}
    }
  }
  window.addEventListener('scenechange',updateActive);
})();