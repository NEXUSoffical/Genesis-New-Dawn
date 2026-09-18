var w=Object.defineProperty;var T=(h,t,i)=>t in h?w(h,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):h[t]=i;var c=(h,t,i)=>T(h,typeof t!="symbol"?t+"":t,i);import"./modulepreload-polyfill-B5Qt9EMX.js";const y="genesis_number_merchant_save_v1",x={bakery:{id:"bakery",name:"Village Bakery",level:1,maxLevel:3,cost:30,unlocked:!0,icon:"🥖",description:"Bakes sweet tarts and crusty loaves. Unlocks fraction pastry challenges.",benefit:"+2 coins bonus tip on pastry orders"},blacksmith:{id:"blacksmith",name:"Iron Forge",level:0,maxLevel:3,cost:50,unlocked:!1,icon:"⚒️",description:"Forges shields, arrows, and swords. Unlocks bundle multiplication orders.",benefit:"Unlocks Sir Gideon’s high-value garrison orders"},alchemist:{id:"alchemist",name:"Arcane Laboratory",level:0,maxLevel:3,cost:80,unlocked:!1,icon:"🧪",description:"Distills star elixirs and glowing potions. Unlocks ratio and flask problems.",benefit:"Unlocks Master Zephyr’s magic potion rewards"},farm:{id:"farm",name:"Windmill & Orchards",level:0,maxLevel:3,cost:120,unlocked:!1,icon:"🌾",description:"Grows crisp apples, carrots, and clover. Generates passive harvest coins.",benefit:"Harvests 8 bonus coins every 3 customers served"},town_square:{id:"town_square",name:"Festival Town Square",level:0,maxLevel:3,cost:200,unlocked:!1,icon:"🎪",description:"A bustling square with banners and flutes. Hosts festival discount sales.",benefit:"Celebrates festival days with 25% extra prosperity"}};class S{constructor(){c(this,"state");c(this,"listeners",[]);this.state=this.loadState()}getState(){return this.state}subscribe(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(i=>i!==t)}}notify(){this.saveState(),this.listeners.forEach(t=>t(this.state))}setDifficulty(t){this.state.difficulty=t,this.notify()}toggleSound(){return this.state.soundEnabled=!this.state.soundEnabled,this.notify(),this.state.soundEnabled}addEarnings(t,i){if(this.state.coins+=t,this.state.prosperity+=i,this.state.customersServed+=1,this.state.buildings.farm.unlocked&&this.state.customersServed%3===0){const s=8*this.state.buildings.farm.level;this.state.coins+=s}this.state.customersServed%5===0&&(this.state.day+=1),this.notify()}canUpgrade(t){const i=this.state.buildings[t];if(!i||i.level>=i.maxLevel)return!1;const s=i.unlocked?i.cost*(i.level+1):i.cost;return this.state.coins>=s}getUpgradeCost(t){const i=this.state.buildings[t];return i?i.unlocked?i.cost*(i.level+1):i.cost:0}upgradeBuilding(t){const i=this.state.buildings[t];if(!i)return!1;const s=this.getUpgradeCost(t);return this.state.coins<s?!1:(this.state.coins-=s,i.unlocked?i.level+=1:(i.unlocked=!0,i.level=1),this.state.prosperity+=50*i.level,this.notify(),!0)}resetProgress(){localStorage.removeItem(y),this.state=this.getInitialState(),this.notify()}getInitialState(){return{coins:20,prosperity:50,customersServed:0,day:1,difficulty:"apprentice",buildings:JSON.parse(JSON.stringify(x)),soundEnabled:!0}}loadState(){try{const t=localStorage.getItem(y);if(t){const i=JSON.parse(t),s=this.getInitialState();return{...s,...i,buildings:{...s.buildings,...i.buildings||{}}}}}catch(t){console.warn("Failed to load save from localStorage:",t)}return this.getInitialState()}saveState(){try{localStorage.setItem(y,JSON.stringify(this.state))}catch(t){console.warn("Failed to save state:",t)}}}const l={bread:{id:"bread",name:"Warm Loaf",icon:"🍞",basePrice:2,unit:"loaf",category:"bakery",description:"Freshly baked wheat bread with a crispy crust."},honey_bun:{id:"honey_bun",name:"Honey Bun",icon:"🥐",basePrice:3,unit:"bun",category:"bakery",description:"Glazed with mountain wildflower honey."},berry_tart:{id:"berry_tart",name:"Berry Tart",icon:"🥧",basePrice:5,unit:"tart",category:"bakery",description:"Sweet tart packed with blue forest berries."},arrows:{id:"arrows",name:"Arrow Quiver",icon:"🏹",basePrice:4,unit:"quiver",category:"blacksmith",description:"Feathered flint arrows for village scouts."},dagger:{id:"dagger",name:"Bronze Dagger",icon:"🗡️",basePrice:8,unit:"blade",category:"blacksmith",description:"Sharp and light sidearm with leather-wrapped hilt."},shield:{id:"shield",name:"Knight Shield",icon:"🛡️",basePrice:15,unit:"shield",category:"blacksmith",description:"Emblazoned with the golden sunrise crest."},glow_shroom:{id:"glow_shroom",name:"Glow Shroom",icon:"🍄",basePrice:2,unit:"cap",category:"alchemist",description:"Emits a soft cyan light in dark caverns."},health_salve:{id:"health_salve",name:"Healing Salve",icon:"🧪",basePrice:6,unit:"jar",category:"alchemist",description:"Soothes scrapes and restores vitality."},star_elixir:{id:"star_elixir",name:"Star Elixir",icon:"🔮",basePrice:20,unit:"flask",category:"alchemist",description:"Distilled starlight that reveals hidden treasures."},carrot:{id:"carrot",name:"Crisp Carrot",icon:"🥕",basePrice:1,unit:"bunch",category:"farm",description:"Crunchy orange carrots loved by village horses."},red_apple:{id:"red_apple",name:"Sweet Apple",icon:"🍎",basePrice:2,unit:"basket",category:"farm",description:"Crisp orchard apples, juicy and sweet."},milk_jug:{id:"milk_jug",name:"Cream Milk",icon:"🥛",basePrice:4,unit:"jug",category:"farm",description:"Rich morning milk from clover-fed cows."}},f=[{id:"barnaby",name:"Barnaby",title:"The Village Baker",avatar:"👨‍🍳",color:"#f59e0b",favoriteCategory:"bakery",voicePitch:.9,dialogueStyle:{greeting:["Good morning, young merchant! The ovens are roaring!","Ah, hello friend! I smell adventure—and maybe cinnamon?","Welcome! My kneading bowl is ready for ingredients."],waiting:["Take your time, counting is just like measuring yeast!","No rush, double-checking numbers makes the best loaves."],delighted:["Splendid! Exactly what my recipe needed! Thank you!","Hooray! The village will feast well today!"],confused:["Hmm, let us recount that dough together, shall we?","Not quite right, friend! Let us take another look."]}},{id:"gideon",name:"Sir Gideon",title:"Captain of the Guard",avatar:"🛡️",color:"#3b82f6",favoriteCategory:"blacksmith",voicePitch:.75,dialogueStyle:{greeting:["Hail, shopkeeper! The outpost garrison requires supplies!","Greetings! My squires need reliable gear for patrol duty.","At ease, merchant! What sturdiness do you offer today?"],waiting:["Patience is a warrior’s virtue. Calculate carefully!","Take heed of the numbers. Accuracy wins battles!"],delighted:["Outstanding ledger work! By my sword, you are sharp!","Honor to your trade! The garrison is well-provisioned!"],confused:["Hold the line! That calculation leaves coins unaccounted for.","Recalibrate your tally, merchant. Let’s try again!"]}},{id:"zephyr",name:"Master Zephyr",title:"The Wandering Mage",avatar:"🧙‍♂️",color:"#8b5cf6",favoriteCategory:"alchemist",voicePitch:1.25,dialogueStyle:{greeting:["Greetings, curious mind! The constellations align on your shop.","Ah, a fellow seeker of formulas! Let us blend some magic.","Salutations! Arcane experiments await precise proportions!"],waiting:["Magic, much like mathematics, requires steady balance...","Ponder the equations of the cosmos at your own pace."],delighted:["Marvelous alchemy! The resonance is mathematically pure!","By the stars! You have the mind of a true archmage!"],confused:["A ripple in the ether! The ratios are slightly askew.","Check the formula once more—magic demands precision!"]}},{id:"pip",name:"Pip",title:"The Goblin Collector",avatar:"🧝",color:"#10b981",favoriteCategory:"trinket",voicePitch:1.4,dialogueStyle:{greeting:["Shiny shinies! Pip loves visiting the fancy counter!","Ooh! Clinking coins, bright bottles! What can Pip buy?","Hello hello! Got lots of shiny bronze in my pouch!"],waiting:["Pip is hopping with excitement! Clink clink clink!","Take your time! Pip is just admiring the shiny glass!"],delighted:["Wahoo! Best deal in the whole kingdom! Pip is happy!","Shiny perfection! Pip will tell all the village critters!"],confused:["Wait wait! Pip’s pointy ears hear funny math! Count again?","Uh oh, the clinky coins don’t match yet! Look again!"]}},{id:"flora",name:"Flora",title:"The Forest Herbalist",avatar:"🧝‍♀️",color:"#06b6d4",favoriteCategory:"farm",voicePitch:1.1,dialogueStyle:{greeting:["Peace to you, friend! The morning dew was lovely today.","Hello! My woodland animals sent me on an errand.","Welcome! Nature provides, and your shop delivers!"],waiting:["Like seeds growing in spring, good thinking takes a moment.","Breathe easy, kind merchant. You are doing wonderfully."],delighted:["Wonderful! The forest animals will be singing praises!","Such gentle precision! Thank you from the bottom of my heart!"],confused:["Nature teaches us patience—let us recount together!","Almost there, sweet friend. Give it another try!"]}}];function M(h){const t=h?f.filter(i=>i.id!==h):f;return t[Math.floor(Math.random()*t.length)]}class C{static generateOrder(t,i){const s=M(i);switch(t){case"apprentice":return this.generateApprenticeOrder(s);case"journeyman":return this.generateJourneymanOrder(s);case"master":return this.generateMasterOrder(s);default:return this.generateApprenticeOrder(s)}}static generateApprenticeOrder(t){const i=["addition","multi_small","change_simple"],s=i[Math.floor(Math.random()*i.length)];if(s==="addition"){const a=l.bread,e=Math.random()>.5?l.red_apple:l.carrot,n=a.basePrice+e.basePrice;return{id:"ord_"+Math.random().toString(36).substr(2,9),customer:t,problemType:"addition",storyDialogue:`Hello there! I would like one ${a.name} (${a.basePrice} coins) and one ${e.name} (${e.basePrice} coins).`,instructionText:"Count the coins needed to buy both items.",items:[{item:a,count:1},{item:e,count:1}],targetValue:n,hintSteps:[`First item: ${a.name} costs ${a.basePrice} coins.`,`Second item: ${e.name} costs ${e.basePrice} coins.`,`Add them together: ${a.basePrice} + ${e.basePrice} = ${n} coins.`],explanation:`${a.basePrice} + ${e.basePrice} = ${n} coins! Great addition!`,rewardCoins:n,reputationGain:10}}else if(s==="multi_small"){const a=[l.red_apple,l.carrot,l.bread][Math.floor(Math.random()*3)],e=2+Math.floor(Math.random()*3),n=a.basePrice*e;return{id:"ord_"+Math.random().toString(36).substr(2,9),customer:t,problemType:"count",storyDialogue:`My hungry family needs ${e} ${a.name}s! Each one costs ${a.basePrice} coins.`,instructionText:`How many coins for all ${e} ${a.name}s?`,items:[{item:a,count:e}],targetValue:n,hintSteps:[`Each ${a.name} is ${a.basePrice} coins.`,`Count by ${a.basePrice}s for ${e} times: ${Array.from({length:e},(o,r)=>(r+1)*a.basePrice).join(", ")}.`,`The total is ${e} × ${a.basePrice} = ${n} coins.`],explanation:`${e} × ${a.basePrice} = ${n} coins. Spot on!`,rewardCoins:n,reputationGain:10}}else{const a=Math.random()>.5?10:5,e=a===10?5+Math.floor(Math.random()*4):1+Math.floor(Math.random()*3),n=a-e,o=l.honey_bun;return{id:"ord_"+Math.random().toString(36).substr(2,9),customer:t,problemType:"subtraction",storyDialogue:`I have a shiny ${a}-coin piece! The item costs ${e} coins.`,instructionText:"How much change should you hand back?",items:[{item:o,count:1}],coinPaid:a,targetValue:n,hintSteps:[`The customer paid ${a} coins.`,`The price is ${e} coins.`,`Subtract cost from money given: ${a} - ${e} = ${n} coins.`],explanation:`${a} - ${e} = ${n} coins in change! Perfect merchant math!`,rewardCoins:e,reputationGain:12}}}static generateJourneymanOrder(t){const i=["multiplication","division","change_medium","multi_item"],s=i[Math.floor(Math.random()*i.length)];if(s==="multiplication"){const a=[l.arrows,l.berry_tart,l.milk_jug,l.health_salve],e=a[Math.floor(Math.random()*a.length)],n=3+Math.floor(Math.random()*5),o=e.basePrice*n;return{id:"ord_"+Math.random().toString(36).substr(2,9),customer:t,problemType:"multiplication",storyDialogue:`Our caravan requires ${n} ${e.name}s. At ${e.basePrice} coins each, what is the bill?`,instructionText:`Calculate the total cost: ${n} × ${e.basePrice} coins.`,items:[{item:e,count:n}],targetValue:o,hintSteps:[`Quantity requested: ${n}`,`Price per item: ${e.basePrice} coins`,`Multiply: ${n} × ${e.basePrice} = ${o} coins.`],explanation:`${n} × ${e.basePrice} = ${o} coins! Fast calculation!`,rewardCoins:o,reputationGain:15}}else if(s==="division"){const a=[3,4,5,6],e=a[Math.floor(Math.random()*a.length)],n=2+Math.floor(Math.random()*5),o=e*n;return{id:"ord_"+Math.random().toString(36).substr(2,9),customer:t,problemType:"division",storyDialogue:`I brought ${o} apples to share equally among ${e} scouts.`,instructionText:`How many apples does each scout receive? (${o} ÷ ${e})`,items:[{item:l.red_apple,count:o}],targetValue:n,hintSteps:[`Total apples: ${o}`,`Number of scouts sharing: ${e}`,`Divide: ${o} ÷ ${e} = ${n} apples each.`],explanation:`${o} ÷ ${e} = ${n} apples each! Fairly distributed!`,rewardCoins:12,reputationGain:15}}else if(s==="change_medium"){const a=[20,25,50][Math.floor(Math.random()*3)],e=a-(4+Math.floor(Math.random()*12)),n=a-e;return{id:"ord_"+Math.random().toString(36).substr(2,9),customer:t,problemType:"subtraction",storyDialogue:`My total supplies cost ${e} coins. Here is a pouch of ${a} coins!`,instructionText:`Calculate the change due to the customer: ${a} - ${e}`,items:[{item:l.dagger,count:1}],coinPaid:a,targetValue:n,hintSteps:[`Customer handed over: ${a} coins.`,`Order total cost: ${e} coins.`,`Calculate difference: ${a} - ${e} = ${n} coins.`],explanation:`${a} - ${e} = ${n} coins returned! Accurate to the coin!`,rewardCoins:e,reputationGain:16}}else{const a=l.honey_bun,e=l.milk_jug,n=2,o=3,r=a.basePrice*n+e.basePrice*o;return{id:"ord_"+Math.random().toString(36).substr(2,9),customer:t,problemType:"addition",storyDialogue:`I need breakfast for the guardhouse: ${n} Honey Buns (${a.basePrice} ea) and ${o} Milk Jugs (${e.basePrice} ea).`,instructionText:"Calculate the grand total for both bundles.",items:[{item:a,count:n},{item:e,count:o}],targetValue:r,hintSteps:[`${n} Honey Buns: ${n} × ${a.basePrice} = ${n*a.basePrice} coins.`,`${o} Milk Jugs: ${o} × ${e.basePrice} = ${o*e.basePrice} coins.`,`Sum them: ${n*a.basePrice} + ${o*e.basePrice} = ${r} coins.`],explanation:`${n*a.basePrice} + ${o*e.basePrice} = ${r} coins! Excellent ledger bookkeeping!`,rewardCoins:r,reputationGain:18}}}static generateMasterOrder(t){const i=["fraction_flask","discount_percent","ratio_craft"],s=i[Math.floor(Math.random()*i.length)];if(s==="fraction_flask"){const a=[{num:3,den:4,totalVolume:16,ans:12},{num:2,den:3,totalVolume:15,ans:10},{num:3,den:5,totalVolume:20,ans:12},{num:1,den:2,totalVolume:18,ans:9},{num:5,den:6,totalVolume:24,ans:20},{num:2,den:4,totalVolume:12,ans:6}],e=a[Math.floor(Math.random()*a.length)];return{id:"ord_"+Math.random().toString(36).substr(2,9),customer:t,problemType:"fraction",storyDialogue:`My secret recipe requires exactly ${e.num}/${e.den} of a full ${e.totalVolume}-ounce Star Elixir vial!`,instructionText:`What is ${e.num}/${e.den} of ${e.totalVolume}? Count the ounces to pour.`,items:[{item:l.star_elixir,count:1}],targetValue:e.ans,fractionValue:{numerator:e.num,denominator:e.den},hintSteps:[`Step 1: Find 1/${e.den} of ${e.totalVolume} by dividing: ${e.totalVolume} ÷ ${e.den} = ${e.totalVolume/e.den}.`,`Step 2: Multiply by numerator ${e.num}: ${e.num} × ${e.totalVolume/e.den} = ${e.ans}.`],explanation:`(${e.totalVolume} ÷ ${e.den}) × ${e.num} = ${e.ans} ounces! Masterful potion alchemy!`,rewardCoins:25,reputationGain:22}}else if(s==="discount_percent"){const a=[{base:20,pct:10,discount:2,finalPrice:18},{base:20,pct:25,discount:5,finalPrice:15},{base:40,pct:10,discount:4,finalPrice:36},{base:30,pct:20,discount:6,finalPrice:24},{base:50,pct:20,discount:10,finalPrice:40}],e=a[Math.floor(Math.random()*a.length)];return{id:"ord_"+Math.random().toString(36).substr(2,9),customer:t,problemType:"discount",storyDialogue:`The festival herald announced a ${e.pct}% discount on this ${e.base}-coin shield! What is the final discounted price?`,instructionText:`Calculate the final price after a ${e.pct}% discount on ${e.base} coins.`,items:[{item:l.shield,count:1}],targetValue:e.finalPrice,hintSteps:[`Step 1: Calculate ${e.pct}% of ${e.base} coins = ${e.discount} coins discount.`,`Step 2: Subtract discount from base price: ${e.base} - ${e.discount} = ${e.finalPrice} coins.`],explanation:`${e.base} - ${e.discount} = ${e.finalPrice} coins! You solved the festival markdown!`,rewardCoins:e.finalPrice,reputationGain:25}}else{const n=2+Math.floor(Math.random()*3),o=2*n,r=3*n;return{id:"ord_"+Math.random().toString(36).substr(2,9),customer:t,problemType:"multiplication",storyDialogue:`The elixir ratio is 2 Glow Shrooms for every 3 Healing Salves. If I mix in ${o} Glow Shrooms, how many Healing Salves do I need?`,instructionText:`Solve the proportion: 2 : 3 = ${o} : ?`,items:[{item:l.glow_shroom,count:o},{item:l.health_salve,count:r}],targetValue:r,hintSteps:[`Step 1: Find how many times larger the batch is: ${o} ÷ 2 = ${n}×`,`Step 2: Multiply the second ingredient: 3 × ${n} = ${r}.`],explanation:`2:3 scales by ${n}× to ${o}:${r}! Flawless ratio mastery!`,rewardCoins:28,reputationGain:25}}}}class P{constructor(){c(this,"ctx",null);c(this,"isMuted",!1);c(this,"bgmGain",null)}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted&&this.bgmGain&&this.bgmGain.gain.setValueAtTime(0,this.ctx?this.ctx.currentTime:0),this.isMuted}getIsMuted(){return this.isMuted}playCoinDrop(t=1){if(this.isMuted||(this.init(),!this.ctx))return;const i=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createOscillator(),e=this.ctx.createGain();s.type="sine",a.type="triangle";const n=1800*t;s.frequency.setValueAtTime(n,i),s.frequency.exponentialRampToValueAtTime(n*1.5,i+.05),a.frequency.setValueAtTime(n*2.1,i),a.frequency.exponentialRampToValueAtTime(n*2.8,i+.04),e.gain.setValueAtTime(.2,i),e.gain.exponentialRampToValueAtTime(.001,i+.12),s.connect(e),a.connect(e),e.connect(this.ctx.destination),s.start(i),a.start(i),s.stop(i+.12),a.stop(i+.12)}playCoinRemove(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(1400,t),i.frequency.exponentialRampToValueAtTime(900,t+.06),s.gain.setValueAtTime(.12,t),s.gain.exponentialRampToValueAtTime(.001,t+.07),i.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+.07)}playRegisterBell(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime;[1046.5,1318.5,1567.98,2093].forEach((s,a)=>{if(!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(s,t+a*.04),n.gain.setValueAtTime(.2,t+a*.04),n.gain.exponentialRampToValueAtTime(.001,t+a*.04+.6),e.connect(n),n.connect(this.ctx.destination),e.start(t+a*.04),e.stop(t+a*.04+.6)})}playPotionPour(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime;for(let i=0;i<4;i++){const s=this.ctx.createOscillator(),a=this.ctx.createGain(),e=t+i*.05;s.type="sine";const n=400+Math.random()*600;s.frequency.setValueAtTime(n,e),s.frequency.exponentialRampToValueAtTime(n+400,e+.06),a.gain.setValueAtTime(.15,e),a.gain.exponentialRampToValueAtTime(.001,e+.06),s.connect(a),a.connect(this.ctx.destination),s.start(e),s.stop(e+.06)}}playVictoryFanfare(){if(this.isMuted||(this.init(),!this.ctx))return;const t=[523.25,659.25,783.99,1046.5],i=this.ctx.currentTime;t.forEach((s,a)=>{if(!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain(),o=i+a*.09,r=a===t.length-1?.45:.15;e.type="triangle",e.frequency.setValueAtTime(s,o),n.gain.setValueAtTime(.25,o),n.gain.exponentialRampToValueAtTime(.001,o+r),e.connect(n),n.connect(this.ctx.destination),e.start(o),e.stop(o+r)})}playTryAgain(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(320,t),i.frequency.exponentialRampToValueAtTime(260,t+.18),s.gain.setValueAtTime(.2,t),s.gain.exponentialRampToValueAtTime(.001,t+.2),i.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+.2)}playVillagerVoice(t=1){if(this.isMuted||(this.init(),!this.ctx))return;const i=this.ctx.currentTime,s=2+Math.floor(Math.random()*3);for(let a=0;a<s;a++){const e=this.ctx.createOscillator(),n=this.ctx.createGain(),o=i+a*.07;e.type="triangle";const r=(350+Math.random()*250)*t;e.frequency.setValueAtTime(r,o),e.frequency.exponentialRampToValueAtTime(r+(Math.random()-.5)*150,o+.06),n.gain.setValueAtTime(.12,o),n.gain.exponentialRampToValueAtTime(.001,o+.06),e.connect(n),n.connect(this.ctx.destination),e.start(o),e.stop(o+.06)}}playBuildingUpgrade(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime;[440,554.37,659.25,880,1108.73].forEach((s,a)=>{if(!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain(),o=t+a*.08;e.type="sine",e.frequency.setValueAtTime(s,o),n.gain.setValueAtTime(.22,o),n.gain.exponentialRampToValueAtTime(.001,o+.35),e.connect(n),n.connect(this.ctx.destination),e.start(o),e.stop(o+.35)})}}const d=new P;class V{constructor(t,i){c(this,"container");c(this,"currentOrder",null);c(this,"coinTray",{gold:0,silver:0,bronze:0});c(this,"activeFlaskUnits",0);c(this,"currentMood","happy");c(this,"hintIndex",0);c(this,"onSubmitCallback");this.container=t,this.onSubmitCallback=i}setOrder(t){this.currentOrder=t,this.coinTray={gold:0,silver:0,bronze:0},this.activeFlaskUnits=0,this.currentMood="happy",this.hintIndex=0,this.render(),d.playVillagerVoice(t.customer.voicePitch)}setMood(t){this.currentMood=t;const i=this.container.querySelector(".customer-mood-badge");i&&(i.className=`customer-mood-badge mood-${t}`,i.textContent=this.getMoodLabel(t))}getMoodLabel(t){switch(t){case"ecstatic":return"✨ Delighted!";case"happy":return"😊 Cheerful";case"thinking":return"🤔 Thinking";case"disappointed":return"🧐 Let’s recount";default:return"😊 Ready"}}calculateTrayTotal(){return this.coinTray.gold*10+this.coinTray.silver*5+this.coinTray.bronze*1}render(){if(!this.currentOrder){this.container.innerHTML='<div class="counter-empty">Waiting for a customer to enter the shop...</div>';return}const t=this.currentOrder,i=this.calculateTrayTotal(),s=t.problemType==="fraction";this.container.innerHTML=`
      <div class="shop-counter-layout">
        <!-- Customer Stage -->
        <div class="customer-stage-card">
          <div class="customer-avatar-box" style="--accent: ${t.customer.color}">
            <span class="customer-avatar-icon">${t.customer.avatar}</span>
            <div class="customer-mood-badge mood-${this.currentMood}">${this.getMoodLabel(this.currentMood)}</div>
          </div>
          
          <div class="customer-info">
            <h2 class="customer-name">${t.customer.name}</h2>
            <span class="customer-title">${t.customer.title}</span>
          </div>

          <div class="customer-dialogue-bubble">
            <p class="dialogue-text">"${t.storyDialogue}"</p>
          </div>

          <div class="order-items-preview">
            ${t.items.map(a=>`
              <div class="item-pill">
                <span class="pill-icon">${a.item.icon}</span>
                <span class="pill-name">${a.count>1?`${a.count}× `:""}${a.item.name}</span>
                <span class="pill-price">${a.item.basePrice*a.count} 🪙</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Working Counter Area -->
        <div class="counter-work-area">
          <div class="ledger-instruction-card">
            <div class="ledger-header">
              <span class="ledger-tag">📜 Merchant's Ledger</span>
              <button class="hint-toggle-btn" id="btn-hint" title="Get a friendly step-by-step hint">
                💡 Need a Hint? (${this.hintIndex}/${t.hintSteps.length})
              </button>
            </div>
            
            <p class="instruction-main">${t.instructionText}</p>

            <div id="hint-box" class="hint-scaffold-box ${this.hintIndex>0?"visible":""}">
              ${this.renderHintContent()}
            </div>
          </div>

          ${s?this.renderFractionFlask():this.renderCoinRegister(i)}
        </div>
      </div>
    `,this.attachEventListeners()}renderHintContent(){return!this.currentOrder||this.hintIndex===0?`<p class="hint-placeholder">Tap 'Need a Hint?' if you want to break down the math step-by-step!</p>`:`
      <ul class="hint-steps-list">
        ${this.currentOrder.hintSteps.slice(0,this.hintIndex).map((i,s)=>`
          <li class="hint-step-item">
            <span class="step-num">${s+1}</span>
            <span class="step-text">${i}</span>
          </li>
        `).join("")}
      </ul>
    `}renderFractionFlask(){var a;const t=this.currentOrder,i=t.fractionValue||{numerator:3,denominator:4},s=((a=t.items[0])==null?void 0:a.item.id)==="star_elixir"?16:12;return`
      <div class="fraction-apparatus-card">
        <div class="apparatus-header">
          <h3>🧪 Arcane Flask Measurement Tool</h3>
          <p>Pour the potion to match the customer's fraction recipe: <strong>${i.numerator}/${i.denominator}</strong></p>
        </div>

        <div class="flask-visual-container">
          <div class="flask-outer">
            <div class="flask-liquid" id="flask-fill" style="height: ${this.activeFlaskUnits/s*100}%">
              <div class="liquid-bubbles"></div>
            </div>
            <div class="flask-marks">
              ${Array.from({length:i.denominator},(e,n)=>{const o=i.denominator-n,r=o/i.denominator*s;return`
                  <div class="flask-mark-line" style="bottom: ${o/i.denominator*100}%">
                    <span>${o}/${i.denominator} (${r} oz)</span>
                  </div>
                `}).join("")}
            </div>
          </div>

          <div class="flask-controls">
            <div class="flask-readout">
              <span class="readout-label">Current Pour:</span>
              <span class="readout-value" id="flask-readout">${this.activeFlaskUnits} oz</span>
            </div>

            <div class="flask-buttons">
              <button class="flask-btn add-btn" id="btn-pour-oz">+1 Ounce</button>
              <button class="flask-btn add-btn" id="btn-pour-segment">+${s/i.denominator} Oz (1/${i.denominator})</button>
              <button class="flask-btn clear-btn" id="btn-empty-flask">Empty Flask</button>
            </div>
          </div>
        </div>

        <div class="counter-actions">
          <button class="ring-bell-btn" id="btn-submit-fraction">
            ✨ Bottle Potion & Serve Customer!
          </button>
        </div>
      </div>
    `}renderCoinRegister(t){return`
      <div class="coin-register-card">
        <div class="register-header">
          <div class="register-title">
            <span class="register-icon">🪙</span>
            <h3>Tactile Cash Drawer</h3>
          </div>
          <div class="tray-total-display">
            <span class="total-label">Tray Total:</span>
            <span class="total-number ${t>0?"active":""}">${t}</span>
            <span class="total-currency">Coins</span>
          </div>
        </div>

        <!-- Coin Dispenser Drawers -->
        <div class="coin-dispensers">
          <button class="coin-draw-btn gold-btn" id="btn-add-gold">
            <div class="coin-graphic coin-gold">10</div>
            <div class="coin-label-block">
              <span class="coin-name">Gold Coin</span>
              <span class="coin-val">+10 Coins</span>
            </div>
          </button>

          <button class="coin-draw-btn silver-btn" id="btn-add-silver">
            <div class="coin-graphic coin-silver">5</div>
            <div class="coin-label-block">
              <span class="coin-name">Silver Coin</span>
              <span class="coin-val">+5 Coins</span>
            </div>
          </button>

          <button class="coin-draw-btn bronze-btn" id="btn-add-bronze">
            <div class="coin-graphic coin-bronze">1</div>
            <div class="coin-label-block">
              <span class="coin-name">Bronze Coin</span>
              <span class="coin-val">+1 Coin</span>
            </div>
          </button>
        </div>

        <!-- Tactile Placement Tray -->
        <div class="counter-tray-box">
          <div class="tray-inner" id="tray-coins-container">
            ${this.renderTrayCoins()}
          </div>
        </div>

        <!-- Quick Manual Keypad (Optional for fast kids) -->
        <div class="counter-bottom-controls">
          <button class="clear-tray-btn" id="btn-clear-tray" ${t===0?"disabled":""}>
            🗑️ Clear Tray
          </button>

          <div class="direct-number-entry">
            <label for="num-input">Or Type:</label>
            <input type="number" id="num-input" class="direct-input" min="0" max="999" placeholder="?" value="${t>0?t:""}" />
          </div>

          <button class="ring-bell-btn" id="btn-ring-register">
            🛎️ Ring Register! (${t} 🪙)
          </button>
        </div>
      </div>
    `}renderTrayCoins(){if(this.calculateTrayTotal()===0)return'<span class="tray-empty-text">Tap the Gold, Silver, or Bronze coins above to place them in your payment tray!</span>';let i='<div class="tray-tokens-wrap">';for(let s=0;s<this.coinTray.gold;s++)i+='<span class="tray-coin-token gold" title="Gold: 10 coins">10</span>';for(let s=0;s<this.coinTray.silver;s++)i+='<span class="tray-coin-token silver" title="Silver: 5 coins">5</span>';for(let s=0;s<this.coinTray.bronze;s++)i+='<span class="tray-coin-token bronze" title="Bronze: 1 coin">1</span>';return i+="</div>",i}attachEventListeners(){const t=this.container.querySelector("#btn-hint");t&&this.currentOrder&&t.addEventListener("click",()=>{if(this.hintIndex<this.currentOrder.hintSteps.length){this.hintIndex++,d.playPotionPour();const u=this.container.querySelector("#hint-box");u&&(u.className="hint-scaffold-box visible",u.innerHTML=this.renderHintContent()),t.textContent=`💡 Need a Hint? (${this.hintIndex}/${this.currentOrder.hintSteps.length})`}});const i=this.container.querySelector("#btn-add-gold"),s=this.container.querySelector("#btn-add-silver"),a=this.container.querySelector("#btn-add-bronze"),e=this.container.querySelector("#btn-clear-tray"),n=this.container.querySelector("#btn-ring-register"),o=this.container.querySelector("#num-input");i&&i.addEventListener("click",()=>{this.coinTray.gold++,d.playCoinDrop(.85),this.updateTrayDisplay()}),s&&s.addEventListener("click",()=>{this.coinTray.silver++,d.playCoinDrop(1),this.updateTrayDisplay()}),a&&a.addEventListener("click",()=>{this.coinTray.bronze++,d.playCoinDrop(1.25),this.updateTrayDisplay()}),e&&e.addEventListener("click",()=>{this.coinTray={gold:0,silver:0,bronze:0},d.playCoinRemove(),this.updateTrayDisplay()}),o&&o.addEventListener("input",()=>{const u=parseInt(o.value,10);if(!isNaN(u)&&u>=0){const b=Math.floor(u/10),v=u%10,$=Math.floor(v/5),k=v%5;this.coinTray={gold:b,silver:$,bronze:k},this.updateTrayDisplay(!1)}}),n&&n.addEventListener("click",()=>{const u=this.calculateTrayTotal();this.onSubmitCallback(u)});const r=this.container.querySelector("#btn-pour-oz"),p=this.container.querySelector("#btn-pour-segment"),m=this.container.querySelector("#btn-empty-flask"),g=this.container.querySelector("#btn-submit-fraction");if(r&&r.addEventListener("click",()=>{d.playPotionPour(),this.activeFlaskUnits+=1,this.updateFlaskDisplay()}),p&&this.currentOrder){const u=this.currentOrder.fractionValue||{denominator:4},v=Math.round(16/u.denominator);p.addEventListener("click",()=>{d.playPotionPour(),this.activeFlaskUnits+=v,this.updateFlaskDisplay()})}m&&m.addEventListener("click",()=>{d.playCoinRemove(),this.activeFlaskUnits=0,this.updateFlaskDisplay()}),g&&g.addEventListener("click",()=>{this.onSubmitCallback(this.activeFlaskUnits)})}updateTrayDisplay(t=!0){const i=this.calculateTrayTotal(),s=this.container.querySelector(".total-number"),a=this.container.querySelector("#btn-ring-register"),e=this.container.querySelector("#btn-clear-tray"),n=this.container.querySelector("#tray-coins-container"),o=this.container.querySelector("#num-input");s&&(s.textContent=i.toString(),s.className=`total-number ${i>0?"active":""}`),a&&(a.textContent=`🛎️ Ring Register! (${i} 🪙)`),e&&(e.disabled=i===0),n&&(n.innerHTML=this.renderTrayCoins()),t&&o&&(o.value=i>0?i.toString():"")}updateFlaskDisplay(){const i=this.container.querySelector("#flask-fill"),s=this.container.querySelector("#flask-readout");if(i){const a=Math.min(100,Math.max(0,this.activeFlaskUnits/16*100));i.style.height=`${a}%`}s&&(s.textContent=`${this.activeFlaskUnits} oz`)}showSuccessModal(t,i,s){d.playRegisterBell(),d.playVictoryFanfare(),this.setMood("ecstatic");const a=document.createElement("div");a.className="merchant-modal-overlay",a.innerHTML=`
      <div class="merchant-modal-card success-card">
        <div class="confetti-emitter">🎉 🎊 ⭐ 🪙</div>
        <div class="success-avatar">${t.customer.avatar}</div>
        <h2>"${t.customer.dialogueStyle.delighted[Math.floor(Math.random()*t.customer.dialogueStyle.delighted.length)]}"</h2>
        
        <div class="success-explanation-box">
          <span class="check-icon">✓</span>
          <p>${t.explanation}</p>
        </div>

        <div class="reward-pouch">
          <div class="reward-item">
            <span class="reward-icon">🪙</span>
            <span class="reward-amount">+${i} Coins Earned</span>
          </div>
          <div class="reward-item">
            <span class="reward-icon">🌟</span>
            <span class="reward-amount">+${t.reputationGain} Village Prosperity</span>
          </div>
        </div>

        <button class="next-customer-btn" id="btn-modal-next">
          Serve Next Customer! ➡️
        </button>
      </div>
    `,document.body.appendChild(a);const e=a.querySelector("#btn-modal-next");e&&e.addEventListener("click",()=>{a.remove(),s()})}showRetryFeedback(t,i){d.playTryAgain(),this.setMood("thinking");const s=Math.abs(t-i);let a="";t<i?a=`You counted ${t} coins, but the order requires ${i} coins (need ${s} more coins). Let’s recount!`:a=`You counted ${t} coins, which is ${s} coins too many for this order (${i} coins). Let’s adjust!`;const e=document.createElement("div");e.className="retry-toast-message",e.innerHTML=`
      <div class="toast-content">
        <span class="toast-icon">🤔</span>
        <div class="toast-text">
          <strong>Almost there!</strong>
          <p>${a}</p>
        </div>
      </div>
    `,this.container.appendChild(e),setTimeout(()=>{e.remove()},4500)}}class A{constructor(t,i){c(this,"container");c(this,"townManager");this.container=t,this.townManager=i}render(){var s,a,e,n,o,r,p,m,g,u;const t=this.townManager.getState(),i=Object.values(t.buildings);this.container.innerHTML=`
      <div class="town-view-layout">
        <!-- Village Banner & Skyline -->
        <div class="town-skyline-banner">
          <div class="skyline-info">
            <h2>🏡 Oakhaven Village</h2>
            <p>Every math problem you solve builds homes, shops, and brings prosperity to our community!</p>
          </div>
          <div class="skyline-stats">
            <div class="stat-pill">
              <span class="stat-icon">🪙</span>
              <span class="stat-value">${t.coins}</span>
              <span class="stat-label">Treasury</span>
            </div>
            <div class="stat-pill">
              <span class="stat-icon">🌟</span>
              <span class="stat-value">${t.prosperity}</span>
              <span class="stat-label">Prosperity</span>
            </div>
            <div class="stat-pill">
              <span class="stat-icon">📅</span>
              <span class="stat-value">Day ${t.day}</span>
              <span class="stat-label">Calendar</span>
            </div>
          </div>
        </div>

        <!-- Living Animated Village Diorama -->
        <div class="village-diorama">
          <div class="diorama-sky">
            <div class="diorama-cloud c1">☁️</div>
            <div class="diorama-cloud c2">☁️</div>
            <div class="diorama-sun">☀️</div>
          </div>

          <div class="diorama-landscape">
            <!-- Buildings on diorama -->
            <div class="diorama-building-lot ${(s=t.buildings.bakery)!=null&&s.unlocked?"built":"locked"}">
              <div class="building-sprite">🥖</div>
              <span class="sprite-label">Bakery Lv.${((a=t.buildings.bakery)==null?void 0:a.level)||0}</span>
            </div>

            <div class="diorama-building-lot ${(e=t.buildings.blacksmith)!=null&&e.unlocked?"built":"locked"}">
              <div class="building-sprite">⚒️</div>
              <span class="sprite-label">Forge Lv.${((n=t.buildings.blacksmith)==null?void 0:n.level)||0}</span>
            </div>

            <div class="diorama-building-lot ${(o=t.buildings.alchemist)!=null&&o.unlocked?"built":"locked"}">
              <div class="building-sprite">🧪</div>
              <span class="sprite-label">Alchemy Lv.${((r=t.buildings.alchemist)==null?void 0:r.level)||0}</span>
            </div>

            <div class="diorama-building-lot ${(p=t.buildings.farm)!=null&&p.unlocked?"built":"locked"}">
              <div class="building-sprite">🌾</div>
              <span class="sprite-label">Windmill Lv.${((m=t.buildings.farm)==null?void 0:m.level)||0}</span>
            </div>

            <div class="diorama-building-lot ${(g=t.buildings.town_square)!=null&&g.unlocked?"built":"locked"}">
              <div class="building-sprite">🎪</div>
              <span class="sprite-label">Square Lv.${((u=t.buildings.town_square)==null?void 0:u.level)||0}</span>
            </div>

            <!-- Mini wandering villagers -->
            <div class="mini-villager v1">👨‍🍳</div>
            <div class="mini-villager v2">🛡️</div>
            <div class="mini-villager v3">🧝</div>
          </div>
        </div>

        <!-- Building Construction & Upgrade Cards -->
        <div class="buildings-upgrade-section">
          <h3 class="section-title">🔨 Village Construction & Upgrades</h3>
          <div class="building-cards-grid">
            ${i.map(b=>this.renderBuildingCard(b,t)).join("")}
          </div>
        </div>
      </div>
    `,this.attachEventListeners()}renderBuildingCard(t,i){const s=this.townManager.getUpgradeCost(t.id),a=i.coins>=s&&t.level<t.maxLevel,e=t.level>=t.maxLevel;return`
      <div class="building-card ${t.unlocked?"unlocked":"locked"}">
        <div class="card-icon-box">
          <span class="b-icon">${t.icon}</span>
          <span class="b-level-badge">${t.unlocked?`Level ${t.level}/${t.maxLevel}`:"Unbuilt"}</span>
        </div>

        <div class="card-details">
          <h4>${t.name}</h4>
          <p class="b-desc">${t.description}</p>
          <div class="b-benefit">
            <strong>Perk:</strong> ${t.benefit}
          </div>
        </div>

        <div class="card-action">
          ${e?`
            <button class="upgrade-btn maxed" disabled>🌟 Fully Built!</button>
          `:`
            <button 
              class="upgrade-btn ${a?"affordable":"unaffordable"}" 
              data-id="${t.id}"
              ${a?"":"disabled"}
            >
              ${t.unlocked?`Upgrade (${s} 🪙)`:`Build (${s} 🪙)`}
            </button>
          `}
        </div>
      </div>
    `}attachEventListeners(){this.container.querySelectorAll(".upgrade-btn[data-id]").forEach(i=>{i.addEventListener("click",s=>{const a=s.currentTarget.getAttribute("data-id");a&&this.townManager.upgradeBuilding(a)&&(d.playBuildingUpgrade(),this.render())})})}}class L{constructor(){c(this,"appEl");c(this,"townManager");c(this,"shopCounter");c(this,"townView");c(this,"currentOrder",null);const t=document.getElementById("app");if(!t)throw new Error("Root #app element not found");this.appEl=t,this.townManager=new S,this.init()}init(){this.renderShell(),this.initViews(),this.townManager.subscribe(()=>this.updateHeaderStats()),this.spawnNextCustomer()}renderShell(){const t=this.townManager.getState();this.appEl.innerHTML=`
      <div class="merchant-app-container">
        <!-- Top Navigation & Stats Bar -->
        <header class="merchant-header">
          <div class="brand-area">
            <a href="studio.html" class="back-to-hub-btn" title="Return to Genesis Studios">← Studios</a>
            <span class="brand-logo">🪙</span>
            <div class="brand-text">
              <h1 class="brand-title">The Number Merchant</h1>
              <span class="brand-sub">AI Village Math Simulation</span>
            </div>
          </div>

          <!-- View Tabs -->
          <nav class="nav-tabs">
            <button class="nav-tab-btn active" id="tab-shop">
              🏪 Shop Counter
            </button>
            <button class="nav-tab-btn" id="tab-village">
              🏡 Living Village
            </button>
          </nav>

          <!-- Difficulty & Settings -->
          <div class="header-right">
            <!-- Difficulty Selector -->
            <div class="difficulty-dropdown-wrap">
              <label for="difficulty-select" class="diff-label">Skill Level:</label>
              <select id="difficulty-select" class="diff-select">
                <option value="apprentice" ${t.difficulty==="apprentice"?"selected":""}>🌱 Apprentice (Ages 5-7)</option>
                <option value="journeyman" ${t.difficulty==="journeyman"?"selected":""}>⚔️ Journeyman (Ages 8-10)</option>
                <option value="master" ${t.difficulty==="master"?"selected":""}>🔮 Master (Ages 10-13+)</option>
              </select>
            </div>

            <!-- Stats Badges -->
            <div class="stats-pouch">
              <div class="stat-badge coin-badge" title="Your Coin Treasury">
                <span class="badge-icon">🪙</span>
                <span class="badge-num" id="header-coin-val">${t.coins}</span>
              </div>
              <div class="stat-badge prosperity-badge" title="Village Prosperity">
                <span class="badge-icon">🌟</span>
                <span class="badge-num" id="header-prosperity-val">${t.prosperity}</span>
              </div>
            </div>

            <!-- Audio toggle -->
            <button class="sound-toggle-btn" id="btn-sound-toggle" title="Toggle Sound Effects">
              🔊
            </button>
          </div>
        </header>

        <!-- Main Dynamic Stage -->
        <main class="merchant-main-view">
          <div id="shop-view-container" class="view-panel active"></div>
          <div id="village-view-container" class="view-panel"></div>
        </main>
      </div>
    `,this.attachHeaderListeners()}initViews(){const t=document.getElementById("shop-view-container"),i=document.getElementById("village-view-container");this.shopCounter=new V(t,s=>this.handleOrderSubmit(s)),this.townView=new A(i,this.townManager)}spawnNextCustomer(){var s;const t=this.townManager.getState(),i=(s=this.currentOrder)==null?void 0:s.customer.id;this.currentOrder=C.generateOrder(t.difficulty,i),this.shopCounter.setOrder(this.currentOrder)}handleOrderSubmit(t){if(this.currentOrder)if(t===this.currentOrder.targetValue){const i=this.currentOrder.rewardCoins,s=this.currentOrder.reputationGain;this.townManager.addEarnings(i,s),this.shopCounter.showSuccessModal(this.currentOrder,i,()=>{this.spawnNextCustomer()})}else this.shopCounter.showRetryFeedback(t,this.currentOrder.targetValue)}updateHeaderStats(){const t=this.townManager.getState(),i=document.getElementById("header-coin-val"),s=document.getElementById("header-prosperity-val");i&&(i.textContent=t.coins.toString()),s&&(s.textContent=t.prosperity.toString())}attachHeaderListeners(){const t=document.getElementById("tab-shop"),i=document.getElementById("tab-village"),s=document.getElementById("shop-view-container"),a=document.getElementById("village-view-container"),e=document.getElementById("difficulty-select"),n=document.getElementById("btn-sound-toggle");t&&i&&s&&a&&(t.addEventListener("click",()=>{t.classList.add("active"),i.classList.remove("active"),s.classList.add("active"),a.classList.remove("active"),d.playCoinDrop(1.1)}),i.addEventListener("click",()=>{i.classList.add("active"),t.classList.remove("active"),a.classList.add("active"),s.classList.remove("active"),this.townView.render(),d.playCoinDrop(.9)})),e&&e.addEventListener("change",()=>{const o=e.value;this.townManager.setDifficulty(o),d.playRegisterBell(),this.spawnNextCustomer()}),n&&n.addEventListener("click",()=>{const o=d.toggleMute();n.textContent=o?"🔇":"🔊",n.classList.toggle("muted",o)})}}window.addEventListener("DOMContentLoaded",()=>{new L});
