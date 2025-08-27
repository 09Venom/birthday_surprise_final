(function(){
 const radio=document.getElementById('scene2'); const canvas=document.getElementById('sparkles-scene2'); if(!canvas) return;
 const ctx=canvas.getContext('2d'); function resize(){canvas.width=innerWidth;canvas.height=innerHeight;} resize(); addEventListener('resize',resize);
 let sparkles=[],anim=false;
 function create(){sparkles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,size:Math.random()*3+1,speed:Math.random()*0.5+0.2,hue:Math.floor(Math.random()*360)});}
 function frame(){ if(!anim)return; ctx.clearRect(0,0,canvas.width,canvas.height);
   for(let i=0;i<sparkles.length;i++){const s=sparkles[i];ctx.beginPath();ctx.arc(s.x,s.y,s.size,0,Math.PI*2);ctx.fillStyle=`hsl(${s.hue},100%,70%)`;ctx.fill();
     s.y-=s.speed;s.x+=Math.sin(s.y*0.05)*0.5;if(s.y<-s.size){sparkles.splice(i,1);i--;}} while(sparkles.length<200)create(); requestAnimationFrame(frame);}
 function update(){const run=radio.checked;if(run&&!anim){anim=true;frame();} else if(!run){anim=false;}}
 radio.addEventListener('change',update); window.addEventListener('scenechange',update);
})();