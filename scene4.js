(function(){
 const messages=[
  "Dear Apsara 💅","You're my home👺","I love your voice 😉","I love everything about you🌝","I like you in kurti🌹",
  "I like you in saari👽","I like in all dress🥳","I love seeing your eyes 💗","Stare at you 👀","Your bak bak 🤩",
  "Your presence gives me goosebump 😍","I fall in love with you again and again🤪","You're my soulmate🤗","I love holding your hands🥵","Prettiest woman ever👠",
  "Mrs baniye meri hot girl👀🌹","Sabse special person ho aap🤭","I want to be in front of you 😘","Tenu pyar krda aa me🥳","Jaan to vadd ke👺",
  "Apsara meri oxygen 😭💗","I will fill your wishlist 👠","I wanna take you out somewhere💗","My strength power 😉","US mean We🥰",
  "choti don meri 😋","This is small gift for you👀💗","Your eyes drive me crazy👀💅","Waiting for that day😋","Where we'll hold hands🌝🔪","Meri queen😒🔪"
 ];
 const ul=document.querySelector('#scene4-container .page4-ul'); let idx=0;
 function build(){ul.innerHTML="";messages.forEach((m,i)=>{const li=document.createElement('li');li.textContent=m; if(i===idx) li.classList.add('active');ul.appendChild(li);});}
 function adjust(n){idx=(idx+n+messages.length)%messages.length;build();}
 function update(){const act=document.getElementById('scene4').checked;if(act){build();bind();}}
 function bind(){
   const prev=document.querySelector('#scene4-container .page4-controls button[aria-label="Previous message"]');
   const next=document.querySelector('#scene4-container .page4-controls button[aria-label="Next message"]');
   if(prev) prev.onclick=()=>adjust(-1); if(next) next.onclick=()=>adjust(1);
   const back=document.querySelector('#scene4-container .back-btn'); if(back) back.onclick=()=>{document.getElementById('scene3').checked=true;window.dispatchEvent(new Event('scenechange'));};
 }
 window.addEventListener('scenechange',update);
})();