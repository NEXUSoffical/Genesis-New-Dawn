var y=Object.defineProperty;var S=(u,t,i)=>t in u?y(u,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[t]=i;var l=(u,t,i)=>S(u,typeof t!="symbol"?t+"":t,i);import"./modulepreload-polyfill-B5Qt9EMX.js";class T{constructor(){l(this,"ctx",null);l(this,"isMuted",!1)}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted&&"speechSynthesis"in window&&window.speechSynthesis.cancel(),this.isMuted}getIsMuted(){return this.isMuted}speak(t,i=.95){if(this.isMuted||!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const s=new SpeechSynthesisUtterance(t);s.rate=i,s.pitch=1.1;const e=window.speechSynthesis.getVoices().find(n=>n.lang.startsWith("en")&&(n.name.includes("Natural")||n.name.includes("Female")||n.name.includes("Google")));e&&(s.voice=e),window.speechSynthesis.speak(s)}playWordSnap(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(600,t),i.frequency.exponentialRampToValueAtTime(1200,t+.04),s.gain.setValueAtTime(.18,t),s.gain.exponentialRampToValueAtTime(.001,t+.08),i.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+.08)}playWordRemove(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(900,t),i.frequency.exponentialRampToValueAtTime(450,t+.06),s.gain.setValueAtTime(.12,t),s.gain.exponentialRampToValueAtTime(.001,t+.07),i.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+.07)}playHop(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(180,t),i.frequency.exponentialRampToValueAtTime(540,t+.15),s.gain.setValueAtTime(.22,t),s.gain.exponentialRampToValueAtTime(.001,t+.22),i.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+.22)}playMunch(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime;[0,.08,.16].forEach((i,s)=>{if(!this.ctx)return;const a=this.ctx.createOscillator(),e=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(320+s*80,t+i),a.frequency.exponentialRampToValueAtTime(140,t+i+.05),e.gain.setValueAtTime(.18,t+i),e.gain.exponentialRampToValueAtTime(.001,t+i+.06),a.connect(e),e.connect(this.ctx.destination),a.start(t+i),a.stop(t+i+.06)})}playDance(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime;[440,554.37,659.25,880].forEach((s,a)=>{if(!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain(),o=t+a*.07;e.type="triangle",e.frequency.setValueAtTime(s,o),n.gain.setValueAtTime(.15,o),n.gain.exponentialRampToValueAtTime(.001,o+.12),e.connect(n),n.connect(this.ctx.destination),e.start(o),e.stop(o+.12)})}playSleep(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime;[523.25,392,329.63].forEach((s,a)=>{if(!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain(),o=t+a*.15;e.type="sine",e.frequency.setValueAtTime(s,o),n.gain.setValueAtTime(.12,o),n.gain.exponentialRampToValueAtTime(.001,o+.35),e.connect(n),n.connect(this.ctx.destination),e.start(o),e.stop(o+.35)})}playMagicTransform(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime;[587.33,739.99,880,1174.66,1479.98].forEach((s,a)=>{if(!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain(),o=t+a*.05;e.type="sine",e.frequency.setValueAtTime(s,o),n.gain.setValueAtTime(.14,o),n.gain.exponentialRampToValueAtTime(.001,o+.2),e.connect(n),n.connect(this.ctx.destination),e.start(o),e.stop(o+.2)})}playSuccess(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach(s=>{if(!this.ctx)return;const a=this.ctx.createOscillator(),e=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(s,t),e.gain.setValueAtTime(.15,t),e.gain.exponentialRampToValueAtTime(.001,t+.6),a.connect(e),e.connect(this.ctx.destination),a.start(t),a.stop(t+.6)})}playTryAgain(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(320,t),i.frequency.exponentialRampToValueAtTime(260,t+.15),s.gain.setValueAtTime(.12,t),s.gain.exponentialRampToValueAtTime(.001,t+.2),i.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+.2)}}const h=new T;class M{constructor(t){l(this,"canvas");l(this,"ctx");l(this,"entities",[]);l(this,"bgImage",null);l(this,"bgLoaded",!1);l(this,"animFrameId",null);l(this,"lastTime",0);l(this,"weatherParticles",[]);l(this,"ambientWisps",[]);l(this,"clouds",[]);l(this,"summoningRings",[]);this.canvas=t;const i=t.getContext("2d");if(!i)throw new Error("Could not get 2D canvas context");this.ctx=i,this.loadBackground(),this.initAtmosphere(),this.resizeCanvas(),window.addEventListener("resize",()=>this.resizeCanvas()),this.startLoop()}loadBackground(){this.bgImage=new Image;const t=window.__VITE_BASE__||"/Genesis-New-Dawn/";this.bgImage.src=`${t.endsWith("/")?t:t+"/"}lexicon_island_bg.jpg`,this.bgImage.onload=()=>{this.bgLoaded=!0},this.bgImage.onerror=()=>{this.bgImage&&(this.bgImage.src="lexicon_island_bg.jpg",this.bgImage.onload=()=>{this.bgLoaded=!0})}}resizeCanvas(){var i,s,a;const t=(i=this.canvas.parentElement)==null?void 0:i.getBoundingClientRect();if(t&&t.width>0&&t.height>0){const e=Math.min(window.devicePixelRatio||1,2);this.canvas.width=t.width*e,this.canvas.height=t.height*e,(a=(s=this.ctx).resetTransform)==null||a.call(s),this.ctx.scale(e,e)}}initAtmosphere(){for(let t=0;t<20;t++)this.ambientWisps.push({x:.25+(Math.random()-.5)*.2,y:.35+(Math.random()-.5)*.2,vx:(Math.random()-.5)*3e-4,vy:(Math.random()-.5)*3e-4,radius:1.5+Math.random()*2.5,color:Math.random()>.5?"#fde047":"#67e8f9",alpha:.3+Math.random()*.6});for(let t=0;t<5;t++)this.clouds.push({x:Math.random()*1.5-.2,y:.05+Math.random()*.25,speed:8e-5+Math.random()*8e-5,scale:.7+Math.random()*.6,opacity:.35+Math.random()*.3})}getEntities(){return this.entities}getPrimaryEntity(){return this.entities.length>0?this.entities[this.entities.length-1]:null}spawnCreature(t,i,s,a="meadow"){const e=this.canvas.width/Math.min(window.devicePixelRatio||1,2),n=this.canvas.height/Math.min(window.devicePixelRatio||1,2);let o=e*.35,r=n*.72;a==="bridge"?(o=e*.52,r=n*.52):a==="castle"?(o=e*.72,r=n*.35):a==="river"?(o=e*.58,r=n*.68):a==="tree"?(o=e*.28,r=n*.55):(o=e*(.2+Math.random()*.25),r=n*(.7+Math.random()*.12));let d=this.entities.find(p=>p.nounId===t);return d?(d.x=o,d.y=r,d.baseY=r,d.targetX=o,d.targetY=r,d.targetScale=1):(d={id:"ent_"+Math.random().toString(36).substr(2,9),name:i,icon:s,nounId:t,x:o,y:r,baseY:r,targetX:o,targetY:r,vx:0,vy:0,scale:.2,targetScale:1,squashX:1,squashY:1,rotation:0,action:"idle",actionTimer:0,particles:[],speechBubble:{text:`Hello! I'm ${i}!`,timer:3},createdTime:Date.now()},this.entities.push(d)),this.summoningRings.push({x:o,y:r,radius:5,maxRadius:65,color:"#fbbf24",alpha:1}),this.emitStardust(o,r,"#facc15",25),h.playSuccess(),d}triggerAction(t,i){const s=i?this.entities.filter(a=>a.id===i):this.entities;if(s.length===0){this.spawnCreature("rabbit","Bunny","🐰","meadow"),this.triggerAction(t);return}s.forEach(a=>{switch(a.action=t,a.actionTimer=0,t){case"hopping":h.playHop(),a.speechBubble={text:"Boing! Boing!",timer:2.5},this.emitStardust(a.x,a.baseY,"#67e8f9",15);break;case"dancing":h.playDance(),a.speechBubble={text:"Dancing time! 🎵",timer:3};break;case"eating":h.playMunch(),a.speechBubble={text:"Nom nom nom! 🥕",timer:2.5},this.emitHearts(a.x,a.y-30);break;case"sleeping":h.playSleep(),a.speechBubble={text:"Zzz... 😴",timer:3};break;case"flying":h.speak("Whoosh! Flying high!"),a.speechBubble={text:"I can fly! ✨",timer:3};break;case"fire":h.speak("Roar! Dragon power!"),a.speechBubble={text:"Roaaar! 🔥",timer:2.5},this.emitFire(a.x+30,a.y);break;case"idle":a.speechBubble=void 0;break}})}applyAdjective(t,i,s){const a=s?this.entities.filter(e=>e.id===s):this.entities;if(a.length===0){this.spawnCreature("rabbit","Bunny","🐰","meadow"),this.applyAdjective(t,i);return}h.playMagicTransform(),a.forEach(e=>{switch(e.name=`${i} ${e.nounId}`,e.speechBubble={text:`I am ${i}! ✨`,timer:2.5},t){case"gigantic":case"huge":e.targetScale=1.9,this.emitStardust(e.x,e.y,"#f59e0b",20);break;case"tiny":case"small":e.targetScale=.6,this.emitStardust(e.x,e.y,"#ec4899",15);break;case"radiant":case"glowing":e.glowColor="#facc15",e.glowRadius=35,e.colorFilter="gold",this.emitStardust(e.x,e.y,"#fde047",25);break;case"frozen":case"icy":e.glowColor="#38bdf8",e.glowRadius=30,e.colorFilter="ice",this.emitStardust(e.x,e.y,"#67e8f9",20);break;case"rainbow":case"colorful":e.colorFilter="rainbow",this.emitStardust(e.x,e.y,"#c084fc",30);break;case"fluffy":case"happy":e.targetScale=1.15,e.glowColor="#fb7185",e.glowRadius=20,this.emitHearts(e.x,e.y-25);break;default:e.targetScale=1;break}})}clearIsland(){this.entities=[],this.weatherParticles=[]}emitStardust(t,i,s,a){for(let e=0;e<a;e++){const n=Math.random()*Math.PI*2,o=1.5+Math.random()*4.5;this.weatherParticles.push({x:t,y:i,vx:Math.cos(n)*o,vy:Math.sin(n)*o-1.2,radius:2+Math.random()*3,color:s,alpha:1,life:0,maxLife:35+Math.random()*20})}}emitHearts(t,i){for(let s=0;s<6;s++)this.weatherParticles.push({x:t+(Math.random()-.5)*20,y:i+(Math.random()-.5)*10,vx:(Math.random()-.5)*1.5,vy:-1.8-Math.random()*1.5,radius:4,color:"#f43f5e",alpha:1,life:0,maxLife:45})}emitFire(t,i){for(let s=0;s<20;s++)this.weatherParticles.push({x:t,y:i,vx:2+Math.random()*5,vy:(Math.random()-.5)*2,radius:3+Math.random()*4,color:Math.random()>.5?"#f97316":"#ef4444",alpha:1,life:0,maxLife:25})}getEntityAt(t,i){for(let s=this.entities.length-1;s>=0;s--){const a=this.entities[s];if(Math.hypot(t-a.x,i-a.y)<40*a.scale)return a}return null}startLoop(){const t=i=>{const s=this.lastTime?Math.min((i-this.lastTime)/1e3,.1):.016;this.lastTime=i,this.update(s),this.render(),this.animFrameId=requestAnimationFrame(t)};this.animFrameId=requestAnimationFrame(t)}update(t){const i=Math.min(window.devicePixelRatio||1,2),s=this.canvas.width/i,a=this.canvas.height/i;this.clouds.forEach(e=>{e.x+=e.speed,e.x>1.3&&(e.x=-.3)}),this.summoningRings.forEach(e=>{e.radius+=(e.maxRadius-e.radius)*.1,e.alpha-=.03}),this.summoningRings=this.summoningRings.filter(e=>e.alpha>0),this.weatherParticles.forEach(e=>{e.x+=e.vx,e.y+=e.vy,e.life++,e.alpha=Math.max(0,1-e.life/e.maxLife)}),this.weatherParticles=this.weatherParticles.filter(e=>e.life<e.maxLife),this.entities.forEach(e=>{switch(Math.abs(e.scale-e.targetScale)>.02&&(e.scale+=(e.targetScale-e.scale)*.15),e.actionTimer+=t,e.speechBubble&&(e.speechBubble.timer-=t,e.speechBubble.timer<=0&&(e.speechBubble=void 0)),e.action){case"hopping":{const o=e.actionTimer*3.5*Math.PI%Math.PI,r=35*e.scale,d=Math.sin(o);e.y=e.baseY-d*r,e.x+=Math.sin(e.actionTimer*.8)*.8,d>.2?(e.squashX=.85,e.squashY=1.2):(e.squashX=1.25,e.squashY=.8,Math.random()<.2&&this.emitStardust(e.x,e.baseY+10,"#fef08a",2)),e.rotation=Math.sin(e.actionTimer*2)*.08;break}case"dancing":{e.y=e.baseY-Math.abs(Math.sin(e.actionTimer*6))*12,e.rotation=Math.sin(e.actionTimer*10)*.22,e.squashX=1+Math.sin(e.actionTimer*12)*.15,e.squashY=1-Math.sin(e.actionTimer*12)*.15,Math.random()<.15&&this.weatherParticles.push({x:e.x+(Math.random()-.5)*30,y:e.y-20,vx:(Math.random()-.5)*.8,vy:-1.2,radius:3,color:"#c084fc",alpha:1,life:0,maxLife:30});break}case"sleeping":{e.y=e.baseY+4,e.rotation=.05,e.squashX=1.15,e.squashY=.85+Math.sin(e.actionTimer*2)*.06,Math.random()<.04&&this.weatherParticles.push({x:e.x+15,y:e.y-20,vx:.4+Math.random()*.3,vy:-.8-Math.random()*.4,radius:4,color:"#93c5fd",alpha:1,life:0,maxLife:50});break}case"eating":{e.y=e.baseY,e.rotation=0,e.squashX=1+Math.sin(e.actionTimer*14)*.12,e.squashY=1-Math.sin(e.actionTimer*14)*.12;break}case"flying":{e.x=e.targetX+Math.sin(e.actionTimer*1.5)*(s*.25),e.y=a*.35+Math.cos(e.actionTimer*2.2)*(a*.12),e.rotation=Math.cos(e.actionTimer*1.5)*.15,e.squashX=1.1,e.squashY=.95,Math.random()<.3&&this.emitStardust(e.x,e.y,"#38bdf8",2);break}case"fire":{e.rotation=-.08,e.squashX=1.2,e.squashY=1,Math.random()<.4&&this.emitFire(e.x+25*e.scale,e.y);break}case"idle":default:{e.y=e.baseY+Math.sin(e.actionTimer*2.5)*4,e.rotation=Math.sin(e.actionTimer*1.2)*.03,e.squashX=1,e.squashY=1;break}}})}render(){const t=Math.min(window.devicePixelRatio||1,2),i=this.canvas.width/t,s=this.canvas.height/t;if(this.ctx.clearRect(0,0,i,s),this.bgLoaded&&this.bgImage){const a=this.bgImage.naturalWidth||1920,e=this.bgImage.naturalHeight||1080,n=a/e,o=i/s;let r=i,d=s,p=0,m=0;o>n?(r=i,d=i/n,m=(s-d)/2):(d=s,r=s*n,p=(i-r)/2),this.ctx.drawImage(this.bgImage,p,m,r,d)}else{const a=this.ctx.createLinearGradient(0,0,0,s);a.addColorStop(0,"#7dd3fc"),a.addColorStop(.6,"#bae6fd"),a.addColorStop(1,"#fed7aa"),this.ctx.fillStyle=a,this.ctx.fillRect(0,0,i,s)}this.drawSunbeams(i,s),this.drawClouds(i,s),this.drawWaterfallSpray(i,s),this.drawWisps(i,s),this.drawSummoningRings(),this.renderEntities(),this.renderParticles()}drawSunbeams(t,i){this.ctx.save();const s=t*.78,a=i*.22,e=Date.now()/1e3;this.ctx.globalAlpha=.12+Math.sin(e*.8)*.04;const n=this.ctx.createRadialGradient(s,a,20,s,a,t*.65);n.addColorStop(0,"rgba(254, 240, 138, 0.8)"),n.addColorStop(.4,"rgba(253, 224, 71, 0.3)"),n.addColorStop(1,"transparent"),this.ctx.fillStyle=n,this.ctx.fillRect(0,0,t,i),this.ctx.restore()}drawClouds(t,i){this.clouds.forEach(s=>{this.ctx.save(),this.ctx.globalAlpha=s.opacity,this.ctx.font=`${Math.round(48*s.scale)}px sans-serif`,this.ctx.fillText("☁️",s.x*t,s.y*i),this.ctx.restore()})}drawWaterfallSpray(t,i){this.ctx.save();const s=t*.62,a=i*.82,e=Date.now()/1e3;this.ctx.fillStyle="rgba(255, 255, 255, 0.4)";for(let n=0;n<8;n++){const o=s+Math.sin(e*4+n)*35,r=a+n*4+Math.cos(e*3+n)*6,d=3+Math.sin(e*5+n)*2;this.ctx.beginPath(),this.ctx.arc(o,r,Math.max(1,d),0,Math.PI*2),this.ctx.fill()}this.ctx.restore()}drawWisps(t,i){this.ambientWisps.forEach(s=>{const a=s.x*t,e=s.y*i;this.ctx.save(),this.ctx.globalAlpha=s.alpha,this.ctx.fillStyle=s.color,this.ctx.shadowColor=s.color,this.ctx.shadowBlur=10,this.ctx.beginPath(),this.ctx.arc(a,e,s.radius,0,Math.PI*2),this.ctx.fill(),this.ctx.restore()})}drawSummoningRings(){this.summoningRings.forEach(t=>{this.ctx.save(),this.ctx.strokeStyle=t.color,this.ctx.lineWidth=3,this.ctx.globalAlpha=t.alpha,this.ctx.shadowColor=t.color,this.ctx.shadowBlur=15,this.ctx.beginPath(),this.ctx.ellipse(t.x,t.y,t.radius,t.radius*.45,0,0,Math.PI*2),this.ctx.stroke(),this.ctx.restore()})}renderEntities(){this.entities.forEach(t=>{if(this.ctx.save(),this.ctx.translate(t.x,t.y),this.ctx.rotate(t.rotation),this.ctx.scale(t.scale*t.squashX,t.scale*t.squashY),this.ctx.save(),this.ctx.scale(1/t.squashX,1/t.squashY),this.ctx.fillStyle="rgba(0, 0, 0, 0.22)",this.ctx.beginPath(),this.ctx.ellipse(0,26,22*t.scale,8*t.scale,0,0,Math.PI*2),this.ctx.fill(),this.ctx.restore(),t.glowColor){const o=t.glowRadius||25,r=this.ctx.createRadialGradient(0,0,5,0,0,o);r.addColorStop(0,t.glowColor),r.addColorStop(1,"transparent"),this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(0,0,o,0,Math.PI*2),this.ctx.fill()}if(t.colorFilter==="rainbow"){const o=Date.now()/20%360;this.ctx.shadowColor=`hsl(${o}, 90%, 60%)`,this.ctx.shadowBlur=20}else t.colorFilter==="ice"&&(this.ctx.shadowColor="#67e8f9",this.ctx.shadowBlur=20);this.ctx.font='54px "Apple Color Emoji", "Segoe UI Emoji", sans-serif',this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(t.icon,0,0),this.ctx.restore(),this.ctx.save(),this.ctx.font="bold 13px Fredoka, sans-serif";const s=this.ctx.measureText(t.name).width+18,a=22,e=t.x-s/2,n=t.y+32*t.scale;this.ctx.fillStyle="rgba(15, 23, 42, 0.85)",this.ctx.strokeStyle="#fbbf24",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.roundRect(e,n,s,a,11),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="#ffffff",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(t.name,t.x,n+11),this.ctx.restore(),t.speechBubble&&this.drawSpeechBubble(t.x,t.y-45*t.scale,t.speechBubble.text)})}drawSpeechBubble(t,i,s){this.ctx.save(),this.ctx.font="bold 14px Fredoka, sans-serif";const e=this.ctx.measureText(s).width+24,n=32,o=t-e/2,r=i-n;this.ctx.fillStyle="#ffffff",this.ctx.strokeStyle="#1e293b",this.ctx.lineWidth=2,this.ctx.shadowColor="rgba(0, 0, 0, 0.2)",this.ctx.shadowBlur=8,this.ctx.beginPath(),this.ctx.roundRect(o,r,e,n,12),this.ctx.fill(),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(t-6,r+n),this.ctx.lineTo(t,r+n+7),this.ctx.lineTo(t+6,r+n),this.ctx.closePath(),this.ctx.fillStyle="#ffffff",this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="#0f172a",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(s,t,r+n/2),this.ctx.restore()}renderParticles(){this.weatherParticles.forEach(t=>{this.ctx.save(),this.ctx.globalAlpha=t.alpha,this.ctx.fillStyle=t.color,this.ctx.shadowColor=t.color,this.ctx.shadowBlur=8,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.radius,0,Math.PI*2),this.ctx.fill(),this.ctx.restore()})}destroy(){this.animFrameId&&cancelAnimationFrame(this.animFrameId)}}const c={the:{id:"the",text:"The",partOfSpeech:"article",icon:"✨",color:"#94a3b8",definition:"Points to a specific thing."},a:{id:"a",text:"A",partOfSpeech:"article",icon:"✨",color:"#94a3b8",definition:"Points to any single creature or thing."},rabbit:{id:"rabbit",text:"Bunny",partOfSpeech:"noun",icon:"🐰",color:"#3b82f6",definition:"A fluffy hopping animal with long ears."},dragon:{id:"dragon",text:"Dragon",partOfSpeech:"noun",icon:"🐲",color:"#3b82f6",definition:"A magical creature that can breathe fire."},frog:{id:"frog",text:"Frog",partOfSpeech:"noun",icon:"🐸",color:"#3b82f6",definition:"A green amphibious jumper."},bear:{id:"bear",text:"Bear",partOfSpeech:"noun",icon:"🐻",color:"#3b82f6",definition:"A strong, cuddly woodland protector."},castle:{id:"castle",text:"Castle",partOfSpeech:"noun",icon:"🏰",color:"#3b82f6",definition:"A grand stone fortress with towers."},flower:{id:"flower",text:"Flower",partOfSpeech:"noun",icon:"🌸",color:"#3b82f6",definition:"A blooming colorful plant."},tree:{id:"tree",text:"Willow Tree",partOfSpeech:"noun",icon:"🌳",color:"#3b82f6",definition:"An ancient leafy tree of wisdom."},carrot:{id:"carrot",text:"Carrot",partOfSpeech:"noun",icon:"🥕",color:"#3b82f6",definition:"A crunchy orange snack."},river:{id:"river",text:"River",partOfSpeech:"noun",icon:"🌊",color:"#3b82f6",definition:"A flowing stream of freshwater."},hops:{id:"hops",text:"hops",partOfSpeech:"verb",icon:"🦘",color:"#10b981",definition:"Leaps and bounces springily."},dances:{id:"dances",text:"dances",partOfSpeech:"verb",icon:"💃",color:"#10b981",definition:"Wiggles and moves to the music."},eats:{id:"eats",text:"eats",partOfSpeech:"verb",icon:"🥕",color:"#10b981",definition:"Munches on a tasty meal."},sleeps:{id:"sleeps",text:"sleeps",partOfSpeech:"verb",icon:"💤",color:"#10b981",definition:"Rests in peaceful slumber."},flies:{id:"flies",text:"flies",partOfSpeech:"verb",icon:"🦅",color:"#10b981",definition:"Soars through the open sky."},breathes_fire:{id:"breathes_fire",text:"breathes fire",partOfSpeech:"verb",icon:"🔥",color:"#10b981",definition:"Shoots bright sparks and flames."},shines:{id:"shines",text:"shines",partOfSpeech:"verb",icon:"✨",color:"#10b981",definition:"Beams with brilliant light."},fluffy:{id:"fluffy",text:"fluffy",partOfSpeech:"adjective",icon:"☁️",color:"#a855f7",definition:"Soft and woolly to touch."},gigantic:{id:"gigantic",text:"gigantic",partOfSpeech:"adjective",icon:"🏔️",color:"#a855f7",definition:"Enormous and towering."},tiny:{id:"tiny",text:"tiny",partOfSpeech:"adjective",icon:"🐜",color:"#a855f7",definition:"Very small and cute."},radiant:{id:"radiant",text:"radiant",partOfSpeech:"adjective",icon:"🌟",color:"#a855f7",definition:"Glowing with golden energy."},frozen:{id:"frozen",text:"frozen",partOfSpeech:"adjective",icon:"❄️",color:"#a855f7",definition:"Turned to cool ice crystals."},rainbow:{id:"rainbow",text:"rainbow",partOfSpeech:"adjective",icon:"🌈",color:"#a855f7",definition:"Shifting through all the colors."},happy:{id:"happy",text:"happy",partOfSpeech:"adjective",icon:"💖",color:"#a855f7",definition:"Full of joy and good cheer."},in_meadow:{id:"in_meadow",text:"in the meadow",partOfSpeech:"preposition",icon:"🌾",color:"#f59e0b",definition:"In the green grassy field."},across_bridge:{id:"across_bridge",text:"across the bridge",partOfSpeech:"preposition",icon:"🌉",color:"#f59e0b",definition:"Over the stone river arch."},near_castle:{id:"near_castle",text:"near the castle",partOfSpeech:"preposition",icon:"🏰",color:"#f59e0b",definition:"By the royal stone towers."},under_tree:{id:"under_tree",text:"under the willow tree",partOfSpeech:"preposition",icon:"🍃",color:"#f59e0b",definition:"Under the shady leaves."}},b=[{id:"pz_verb_hop",tier:"sprout",question:"Choose the ACTION word (Verb) to make the bunny move!",sentencePrompt:"The fluffy bunny _______ across the clover.",targetPart:"verb",correctWord:c.hops,distractors:[c.carrot,c.fluffy],explanation:"“Hops” is a VERB! Verbs are action words that show what someone or something does.",visualReward:{nounId:"rabbit",action:"hopping",targetLocation:"meadow",reactionText:"Boing! Boing!"}},{id:"pz_noun_food",tier:"sprout",question:"Choose the THING (Noun) for the bunny to eat!",sentencePrompt:"The happy bunny eats a crunchy _______.",targetPart:"noun",correctWord:c.carrot,distractors:[c.dances,c.frozen],explanation:"“Carrot” is a NOUN! Nouns are words for people, animals, places, or things (like food).",visualReward:{nounId:"rabbit",action:"eating",targetLocation:"meadow",reactionText:"Nom nom nom! 🥕"}},{id:"pz_adj_dragon",tier:"sprout",question:"Choose the DESCRIBING word (Adjective) for the dragon!",sentencePrompt:"The _______ dragon glows like pure sunshine.",targetPart:"adjective",correctWord:c.radiant,distractors:[c.flies,c.castle],explanation:"“Radiant” is an ADJECTIVE! Adjectives describe how things look, feel, or sound.",visualReward:{nounId:"dragon",action:"dancing",targetLocation:"castle",reactionText:"I am radiant! ✨"}},{id:"pz_verb_fly",tier:"weaver",question:"What action does the majestic dragon do in the sky?",sentencePrompt:"The golden dragon _______ high above the cloud castle.",targetPart:"verb",correctWord:c.flies,distractors:[c.tree,c.tiny],explanation:"“Flies” is a VERB! It tells what action the dragon is doing.",visualReward:{nounId:"dragon",action:"flying",targetLocation:"castle",reactionText:"Soaring through the clouds!"}},{id:"pz_prep_bridge",tier:"weaver",question:"Where is the brave bear walking? Choose the PREPOSITION!",sentencePrompt:"The bear marches _______ to reach the secret tower.",targetPart:"preposition",correctWord:c.across_bridge,distractors:[c.sleeps,c.rainbow],explanation:"“Across the bridge” is a PREPOSITIONAL phrase! It tells WHERE the action is happening.",visualReward:{nounId:"bear",action:"dancing",targetLocation:"bridge",reactionText:"Crossing the bridge!"}},{id:"pz_verb_fire",tier:"scribe",question:"The friendly dragon wants to roast marshmallows! What verb does it use?",sentencePrompt:"The magical dragon _______ to light the campfire.",targetPart:"verb",correctWord:c.breathes_fire,distractors:[c.river,c.frozen],explanation:"“Breathes fire” is the action VERB showing how the dragon lights the campfire!",visualReward:{nounId:"dragon",action:"fire",targetLocation:"tree",reactionText:"Roaaar! Warm fire! 🔥"}}];class x{static getPuzzlesForTier(t){return t==="sprout"?b.filter(i=>i.tier==="sprout"):b}static parse(t,i){if(t.length===0)return{tokens:t,rawText:"",isValid:!1,errorMessage:"Choose words to build your sentence!"};const s=t.map(r=>r.text).join(" ");let a,e,n,o;return t.forEach(r=>{r.partOfSpeech==="noun"&&(a=r),r.partOfSpeech==="adjective"&&(e=r),r.partOfSpeech==="verb"&&(n=r),r.partOfSpeech==="preposition"&&(o=r)}),a?n?{tokens:t,rawText:s,isValid:!0,subjectNoun:a,adjective:e,verb:n,prepositionPhrase:o}:{tokens:t,rawText:s,isValid:!1,errorMessage:"Add a VERB (like hops, dances, or eats) so we know WHAT they are doing!"}:{tokens:t,rawText:s,isValid:!1,errorMessage:"Add a NOUN (like Bunny, Dragon, or Bear) so we know WHO the sentence is about!"}}}class A{constructor(t,i,s,a){l(this,"container");l(this,"sim");l(this,"currentMode","quests");l(this,"currentTier","sprout");l(this,"activePuzzleIndex",0);l(this,"selectedNounId","rabbit");l(this,"builderArticle",c.the);l(this,"builderAdj",c.fluffy);l(this,"builderNoun",c.rabbit);l(this,"builderVerb",c.hops);l(this,"builderPrep",c.in_meadow);l(this,"onGemsAwarded");this.container=t,this.sim=i,this.currentTier=s,this.onGemsAwarded=a,this.render()}setTier(t){this.currentTier=t,this.activePuzzleIndex=0,this.render()}setMode(t){this.currentMode=t,this.render()}render(){this.container.innerHTML=`
      <div class="spell-tablet-card">
        <!-- Activity Mode Switcher -->
        <div class="mode-navigation-bar">
          <button class="mode-tab-btn ${this.currentMode==="quests"?"active":""}" data-mode="quests">
            🎯 Story Quests
          </button>
          <button class="mode-tab-btn ${this.currentMode==="actions"?"active":""}" data-mode="actions">
            ⚡ Action Verbs
          </button>
          <button class="mode-tab-btn ${this.currentMode==="adjectives"?"active":""}" data-mode="adjectives">
            🎨 Adjective Lab
          </button>
          <button class="mode-tab-btn ${this.currentMode==="builder"?"active":""}" data-mode="builder">
            📜 Sentence Builder
          </button>
        </div>

        <!-- Mode Content Deck -->
        <div class="mode-content-deck" id="mode-content-deck">
          ${this.renderCurrentModeContent()}
        </div>
      </div>
    `,this.attachEvents()}renderCurrentModeContent(){switch(this.currentMode){case"quests":return this.renderQuestsMode();case"actions":return this.renderActionsMode();case"adjectives":return this.renderAdjectivesMode();case"builder":return this.renderBuilderMode();default:return""}}renderQuestsMode(){const t=x.getPuzzlesForTier(this.currentTier);this.activePuzzleIndex>=t.length&&(this.activePuzzleIndex=0);const i=t[this.activePuzzleIndex];if(!i)return'<div class="quest-done-card">All quests completed!</div>';const s=[i.correctWord,...i.distractors].sort(()=>.5-Math.random());return`
      <div class="quest-activity-view">
        <div class="quest-header-pill">
          <span class="quest-num-tag">Quest ${this.activePuzzleIndex+1} of ${t.length}</span>
          <span class="quest-type-tag">Focus: ${i.targetPart.toUpperCase()}</span>
        </div>

        <h3 class="quest-prompt-title">${i.question}</h3>

        <div class="puzzle-sentence-card">
          <div class="sentence-fill-in">
            ${i.sentencePrompt.replace("_______",'<span class="blank-slot" id="puzzle-blank-slot">_______</span>')}
          </div>
          <button class="speak-sentence-btn" id="btn-listen-prompt" title="Listen to sentence">
            🔊 Listen
          </button>
        </div>

        <div class="options-choice-grid">
          ${s.map(a=>`
            <button class="word-choice-card" data-word-id="${a.id}" data-correct="${a.id===i.correctWord.id}">
              <span class="choice-icon">${a.icon}</span>
              <span class="choice-text">${a.text}</span>
              <span class="choice-tag ${a.partOfSpeech}">${a.partOfSpeech}</span>
            </button>
          `).join("")}
        </div>

        <!-- Feedback Drawer -->
        <div class="feedback-drawer" id="puzzle-feedback" style="display: none;">
          <div class="feedback-content">
            <span class="feedback-icon" id="feedback-icon">🎉</span>
            <div class="feedback-text">
              <h4 id="feedback-title">Great Job!</h4>
              <p id="feedback-desc"></p>
            </div>
          </div>
          <button class="next-puzzle-btn" id="btn-next-puzzle">Next Quest ➔</button>
        </div>
      </div>
    `}renderActionsMode(){const t=[{id:"rabbit",name:"Bunny",icon:"🐰"},{id:"frog",name:"Frog",icon:"🐸"},{id:"dragon",name:"Dragon",icon:"🐲"},{id:"bear",name:"Bear",icon:"🐻"}],i=[{id:"hopping",name:"Hops",icon:"🦘",desc:"Boing! Leaps in the air"},{id:"dancing",name:"Dances",icon:"💃",desc:"Wiggles to the rhythm"},{id:"eating",name:"Eats",icon:"🥕",desc:"Munches yummy food"},{id:"sleeping",name:"Sleeps",icon:"💤",desc:"Curls up for a nap"},{id:"flying",name:"Flies",icon:"🦅",desc:"Glides across the sky"},{id:"fire",name:"Breathes Fire",icon:"🔥",desc:"Roars warm flames"}];return`
      <div class="actions-activity-view">
        <div class="grammar-lesson-banner">
          <span class="lesson-badge">⚡ Grammar Rule</span>
          <p><strong>VERBS</strong> are action words! They show what your creature is doing!</p>
        </div>

        <div class="selection-section">
          <h4 class="step-header">1. Pick a Friend:</h4>
          <div class="char-picker-row">
            ${t.map(s=>`
              <button class="char-pick-btn ${this.selectedNounId===s.id?"selected":""}" data-char-id="${s.id}">
                <span class="char-emoji">${s.icon}</span>
                <span class="char-name">${s.name}</span>
              </button>
            `).join("")}
          </div>
        </div>

        <div class="selection-section">
          <h4 class="step-header">2. Choose an Action (Verb):</h4>
          <div class="actions-grid">
            ${i.map(s=>`
              <button class="action-trigger-btn" data-action="${s.id}">
                <span class="action-icon">${s.icon}</span>
                <div class="action-info">
                  <span class="action-name">${s.name}</span>
                  <span class="action-desc">${s.desc}</span>
                </div>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    `}renderAdjectivesMode(){return`
      <div class="adjectives-activity-view">
        <div class="grammar-lesson-banner">
          <span class="lesson-badge">🎨 Grammar Rule</span>
          <p><strong>ADJECTIVES</strong> are describing words! They tell us how things look, feel, or smell!</p>
        </div>

        <div class="selection-section">
          <h4 class="step-header">Tap an Adjective to change how your friend looks:</h4>
          <div class="adjectives-grid">
            ${[{id:"radiant",name:"Radiant",icon:"🌟",desc:"Golden glowing light"},{id:"frozen",name:"Frozen",icon:"❄️",desc:"Turned to cool ice"},{id:"gigantic",name:"Gigantic",icon:"🏔️",desc:"Grows 3x huge!"},{id:"tiny",name:"Tiny",icon:"🐜",desc:"Shrinks to mini size"},{id:"rainbow",name:"Rainbow",icon:"🌈",desc:"Shifts all colors"},{id:"happy",name:"Happy",icon:"💖",desc:"Full of love & joy"}].map(i=>`
              <button class="adjective-trigger-btn" data-adj-id="${i.id}" data-adj-text="${i.name}">
                <span class="adj-icon">${i.icon}</span>
                <div class="adj-info">
                  <span class="adj-name">${i.name}</span>
                  <span class="adj-desc">${i.desc}</span>
                </div>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    `}renderBuilderMode(){return`
      <div class="builder-activity-view">
        <div class="grammar-lesson-banner">
          <span class="lesson-badge">📜 Sentence Craft</span>
          <p>Put words in order to make a complete story sentence!</p>
        </div>

        <!-- Live Sentence Display -->
        <div class="constructed-sentence-display">
          <span class="token-slot article">${this.builderArticle.text}</span>
          <span class="token-slot adjective">${this.builderAdj?this.builderAdj.text:"..."}</span>
          <span class="token-slot noun">${this.builderNoun.text}</span>
          <span class="token-slot verb">${this.builderVerb.text}</span>
          <span class="token-slot prep">${this.builderPrep?this.builderPrep.text:""}</span>
          <span class="period">.</span>
        </div>

        <!-- Step-by-Step Selectors -->
        <div class="builder-columns-grid">
          <!-- Step 1: Who? (Noun) -->
          <div class="builder-col">
            <span class="col-title">1. Who? (Noun)</span>
            <div class="col-options">
              ${[c.rabbit,c.dragon,c.frog,c.bear].map(t=>`
                <button class="token-chip ${this.builderNoun.id===t.id?"active":""}" data-type="noun" data-id="${t.id}">
                  ${t.icon} ${t.text}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Step 2: What kind? (Adjective) -->
          <div class="builder-col">
            <span class="col-title">2. What kind? (Adjective)</span>
            <div class="col-options">
              ${[c.fluffy,c.radiant,c.gigantic,c.tiny,c.rainbow].map(t=>{var i;return`
                <button class="token-chip ${((i=this.builderAdj)==null?void 0:i.id)===t.id?"active":""}" data-type="adj" data-id="${t.id}">
                  ${t.icon} ${t.text}
                </button>
              `}).join("")}
            </div>
          </div>

          <!-- Step 3: Does what? (Verb) -->
          <div class="builder-col">
            <span class="col-title">3. Does what? (Verb)</span>
            <div class="col-options">
              ${[c.hops,c.dances,c.eats,c.flies,c.sleeps].map(t=>`
                <button class="token-chip ${this.builderVerb.id===t.id?"active":""}" data-type="verb" data-id="${t.id}">
                  ${t.icon} ${t.text}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Step 4: Where? (Preposition) -->
          <div class="builder-col">
            <span class="col-title">4. Where? (Place)</span>
            <div class="col-options">
              ${[c.in_meadow,c.across_bridge,c.near_castle,c.under_tree].map(t=>{var i;return`
                <button class="token-chip ${((i=this.builderPrep)==null?void 0:i.id)===t.id?"active":""}" data-type="prep" data-id="${t.id}">
                  ${t.icon} ${t.text}
                </button>
              `}).join("")}
            </div>
          </div>
        </div>

        <!-- Perform Sentence Button -->
        <div class="perform-action-bar">
          <button class="perform-spell-btn" id="btn-perform-sentence">
            ✨ Listen & Cast Sentence Spell!
          </button>
        </div>
      </div>
    `}attachEvents(){if(this.container.querySelectorAll(".mode-tab-btn").forEach(t=>{t.addEventListener("click",i=>{const a=i.currentTarget.getAttribute("data-mode");a&&(h.playWordSnap(),this.setMode(a))})}),this.currentMode==="quests"){const t=x.getPuzzlesForTier(this.currentTier),i=t[this.activePuzzleIndex],s=this.container.querySelector("#btn-listen-prompt");s==null||s.addEventListener("click",()=>{i&&h.speak(i.sentencePrompt.replace("_______","blank"))}),this.container.querySelectorAll(".word-choice-card").forEach(e=>{e.addEventListener("click",n=>{const o=n.currentTarget,r=o.getAttribute("data-correct")==="true",d=this.container.querySelector("#puzzle-blank-slot"),p=this.container.querySelector("#puzzle-feedback"),m=this.container.querySelector("#feedback-desc"),f=this.container.querySelector("#feedback-title"),g=this.container.querySelector("#feedback-icon");if(r){h.playSuccess(),o.classList.add("correct"),d&&(d.textContent=i.correctWord.text,d.classList.add("filled"));const w=this.sim.spawnCreature(i.visualReward.nounId,i.visualReward.nounId==="rabbit"?"Bunny":i.visualReward.nounId==="dragon"?"Dragon":"Bear",i.visualReward.nounId==="rabbit"?"🐰":i.visualReward.nounId==="dragon"?"🐲":"🐻",i.visualReward.targetLocation);this.sim.triggerAction(i.visualReward.action,w.id),h.speak(i.explanation),p&&m&&f&&g&&(p.style.display="flex",f.textContent="🌟 Brilliant Grammar!",m.textContent=i.explanation,g.textContent="🎉"),this.onGemsAwarded&&this.onGemsAwarded(10)}else h.playTryAgain(),o.classList.add("incorrect"),h.speak("Not quite. Try another word!"),setTimeout(()=>{o.classList.remove("incorrect")},800)})});const a=this.container.querySelector("#btn-next-puzzle");a==null||a.addEventListener("click",()=>{h.playWordSnap(),this.activePuzzleIndex=(this.activePuzzleIndex+1)%t.length,this.render()})}if(this.currentMode==="actions"&&(this.container.querySelectorAll(".char-pick-btn").forEach(t=>{t.addEventListener("click",i=>{const a=i.currentTarget.getAttribute("data-char-id");this.selectedNounId=a,h.playWordSnap();const n={rabbit:{name:"Bunny",icon:"🐰"},frog:{name:"Frog",icon:"🐸"},dragon:{name:"Dragon",icon:"🐲"},bear:{name:"Bear",icon:"🐻"}}[a]||{name:"Friend",icon:"🐾"};this.sim.spawnCreature(a,n.name,n.icon,"meadow"),h.speak(n.name),this.render()})}),this.container.querySelectorAll(".action-trigger-btn").forEach(t=>{t.addEventListener("click",i=>{const a=i.currentTarget.getAttribute("data-action");a&&(h.speak(`${a}! That is an action verb!`),this.sim.triggerAction(a))})})),this.currentMode==="adjectives"&&this.container.querySelectorAll(".adjective-trigger-btn").forEach(t=>{t.addEventListener("click",i=>{const s=i.currentTarget,a=s.getAttribute("data-adj-id"),e=s.getAttribute("data-adj-text");h.speak(`${e}! An adjective describes how it looks!`),this.sim.applyAdjective(a,e)})}),this.currentMode==="builder"){this.container.querySelectorAll(".token-chip").forEach(i=>{i.addEventListener("click",s=>{const a=s.currentTarget,e=a.getAttribute("data-type"),n=a.getAttribute("data-id"),o=c[n];o&&(h.playWordSnap(),h.speak(o.text),e==="noun"&&(this.builderNoun=o),e==="adj"&&(this.builderAdj=o),e==="verb"&&(this.builderVerb=o),e==="prep"&&(this.builderPrep=o),this.render())})});const t=this.container.querySelector("#btn-perform-sentence");t==null||t.addEventListener("click",()=>{var o,r,d;const i=`${this.builderArticle.text} ${this.builderAdj?this.builderAdj.text+" ":""}${this.builderNoun.text} ${this.builderVerb.text} ${this.builderPrep?this.builderPrep.text:""}.`;h.speak(i);let s="meadow";((o=this.builderPrep)==null?void 0:o.id)==="across_bridge"&&(s="bridge"),((r=this.builderPrep)==null?void 0:r.id)==="near_castle"&&(s="castle"),((d=this.builderPrep)==null?void 0:d.id)==="under_tree"&&(s="tree");const a=this.sim.spawnCreature(this.builderNoun.id,this.builderNoun.text,this.builderNoun.icon,s);this.builderAdj&&this.sim.applyAdjective(this.builderAdj.id,this.builderAdj.text,a.id);const n={hops:"hopping",dances:"dancing",eats:"eating",sleeps:"sleeping",flies:"flying"}[this.builderVerb.id]||"idle";setTimeout(()=>{this.sim.triggerAction(n,a.id)},600),this.onGemsAwarded&&this.onGemsAwarded(15)})}}}const v="genesis_lexicon_save_v2";class k{constructor(){l(this,"appEl");l(this,"islandSim");l(this,"spellTablet");l(this,"state");const t=document.getElementById("app");if(!t)throw new Error("Root #app element not found");this.appEl=t,this.state=this.loadState(),this.init()}init(){this.renderShell(),this.initComponents(),this.attachEvents()}renderShell(){this.appEl.innerHTML=`
      <div class="lexicon-app-container">
        <!-- Header -->
        <header class="lexicon-header">
          <div class="brand-area">
            <a href="studio.html" class="back-to-hub-btn" title="Return to Genesis Studios">← Studios</a>
            <span class="brand-icon">📖</span>
            <div class="brand-text">
              <h1 class="brand-title">Lexicon Island</h1>
              <span class="brand-sub">Where Words Shape Reality</span>
            </div>
          </div>

          <div class="header-controls">
            <!-- Tier selector -->
            <select id="tier-select" class="tier-selector">
              <option value="sprout" ${this.state.tier==="sprout"?"selected":""}>🌱 Word Sprout (Ages 5-7)</option>
              <option value="weaver" ${this.state.tier==="weaver"?"selected":""}>📖 Sentence Weaver (Ages 8-10)</option>
              <option value="scribe" ${this.state.tier==="scribe"?"selected":""}>🔮 Master Scribe (Ages 10-13+)</option>
            </select>

            <!-- Gems pouch -->
            <div class="gem-pouch" title="Wisdom Gems Earned">
              <span class="gem-icon">💎</span>
              <span class="gem-val" id="header-gems-val">${this.state.gems}</span>
            </div>

            <!-- Audio toggle -->
            <button class="sound-btn" id="btn-sound-toggle" title="Toggle Sound">
              🔊
            </button>
          </div>
        </header>

        <!-- Main Content -->
        <main class="lexicon-main-stage">
          <!-- Panoramic Island Simulation Stage -->
          <div class="island-viewport-card">
            <canvas id="island-canvas"></canvas>
            
            <div class="viewport-overlay-bar">
              <div class="tip-pill">
                <span>💡 Tap any creature to play with it!</span>
              </div>
              <button class="canvas-action-btn" id="btn-clear-island" title="Reset creatures">
                🧹 Clear Island
              </button>
            </div>
          </div>

          <!-- Educational Learning Center -->
          <div id="spell-tablet-container" class="tablet-host-section"></div>
        </main>
      </div>
    `}initComponents(){const t=document.getElementById("island-canvas");this.islandSim=new M(t),this.islandSim.spawnCreature("rabbit","Bunny","🐰","meadow");const i=document.getElementById("spell-tablet-container");this.spellTablet=new A(i,this.islandSim,this.state.tier,s=>this.awardGems(s))}attachEvents(){const t=document.getElementById("tier-select");t==null||t.addEventListener("change",n=>{const o=n.target.value;this.state.tier=o,this.spellTablet.setTier(o),this.saveState(),h.playSuccess()});const i=document.getElementById("btn-sound-toggle");i==null||i.addEventListener("click",()=>{const n=h.toggleMute();i&&(i.textContent=n?"🔇":"🔊")});const s=document.getElementById("btn-clear-island");s==null||s.addEventListener("click",()=>{this.islandSim.clearIsland(),h.playWordRemove()});const a=document.getElementById("island-canvas"),e=(n,o)=>{const r=a.getBoundingClientRect(),d=n-r.left,p=o-r.top,m=this.islandSim.getEntityAt(d,p);m?(h.playHop(),this.islandSim.triggerAction("hopping",m.id),h.speak(m.name)):this.islandSim.triggerAction("idle")};a.addEventListener("click",n=>{e(n.clientX,n.clientY)}),a.addEventListener("touchstart",n=>{n.touches.length>0&&e(n.touches[0].clientX,n.touches[0].clientY)},{passive:!0})}awardGems(t){this.state.gems+=t;const i=document.getElementById("header-gems-val");i&&(i.textContent=this.state.gems.toString(),i.classList.add("pulse"),setTimeout(()=>i.classList.remove("pulse"),600)),this.saveState()}loadState(){try{const t=localStorage.getItem(v);if(t)return JSON.parse(t)}catch(t){console.warn("Could not load saved state",t)}return{tier:"sprout",mode:"quests",gems:20,completedQuestIds:[],completedPuzzleIds:[],activeQuestId:"quest_sprout_1",soundEnabled:!0}}saveState(){try{localStorage.setItem(v,JSON.stringify(this.state))}catch(t){console.warn("Could not save state",t)}}}window.addEventListener("DOMContentLoaded",()=>{new k});
