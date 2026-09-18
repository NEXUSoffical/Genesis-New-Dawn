var S=Object.defineProperty;var A=(s,e,t)=>e in s?S(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>A(s,typeof e!="symbol"?e+"":e,t);import{s as h}from"./supabase-4TpxfcpH.js";const x=[{minLevel:1,title:"Primordial Wanderer"},{minLevel:2,title:"Abyss Observer"},{minLevel:3,title:"Ecological Scholar"},{minLevel:4,title:"Ecosystem Engineer"},{minLevel:5,title:"Genesis Pioneer"},{minLevel:7,title:"Biome Sovereign"},{minLevel:10,title:"Cosmic Architect"},{minLevel:15,title:"Genesis Deity"}];function f(s){return Math.round(100*Math.pow(s,1.35))}function v(s){let e=x[0].title;for(const t of x)s>=t.minLevel&&(e=t.title);return e}const o=class o{constructor(){n(this,"currentProfile",null);n(this,"xpListeners",[]);n(this,"authListeners",[]);n(this,"isInitialized",!1)}static getInstance(){return o.instance||(o.instance=new o),o.instance}async init(){if(this.isInitialized&&this.currentProfile)return this.currentProfile;try{const{data:{session:e}}=await h.auth.getSession();e!=null&&e.user?this.loadProfileForUser(e.user.id,e.user.email||"pioneer@genesis.io"):this.currentProfile=null}catch(e){console.error("Failed to get Supabase auth session:",e),this.currentProfile=null}return h.auth.onAuthStateChange((e,t)=>{t!=null&&t.user?this.loadProfileForUser(t.user.id,t.user.email||"pioneer@genesis.io"):(this.currentProfile=null,this.notifyAuthListeners())}),this.isInitialized=!0,this.currentProfile}loadProfileForUser(e,t){const r=`genesis_profile_${e}`,i=localStorage.getItem(r);if(i)try{this.currentProfile=JSON.parse(i),this.currentProfile&&(this.currentProfile.level=this.currentProfile.level||1,this.currentProfile.currentXp=this.currentProfile.currentXp||0,this.currentProfile.xpToNextLevel=f(this.currentProfile.level),this.currentProfile.title=v(this.currentProfile.level))}catch{this.currentProfile=this.createDefaultProfile(e,t)}else this.currentProfile=this.createDefaultProfile(e,t);this.save(),this.notifyAuthListeners()}createDefaultProfile(e,t){const r=t.split("@")[0]||"GenesisPioneer";return{id:e,email:t,username:r.charAt(0).toUpperCase()+r.slice(1),level:1,currentXp:0,xpToNextLevel:f(1),totalXp:0,title:v(1),stats:{gamesPlayed:0,abyssGenerations:0,genesisEra:"Stone Age",playtimeMinutes:0}}}save(){this.currentProfile&&(localStorage.setItem(`genesis_profile_${this.currentProfile.id}`,JSON.stringify(this.currentProfile)),localStorage.setItem("genesis_last_active_user",this.currentProfile.id))}getProfile(){return this.currentProfile}isAuthenticated(){return this.currentProfile!==null}addXP(e,t,r){if(!this.currentProfile)return null;this.currentProfile.currentXp+=e,this.currentProfile.totalXp+=e;let i=!1;for(;this.currentProfile.currentXp>=this.currentProfile.xpToNextLevel;)this.currentProfile.currentXp-=this.currentProfile.xpToNextLevel,this.currentProfile.level++,this.currentProfile.xpToNextLevel=f(this.currentProfile.level),this.currentProfile.title=v(this.currentProfile.level),i=!0;this.save();const u={amount:e,reason:t,game:r,leveledUp:i,newLevel:i?this.currentProfile.level:void 0,newTitle:i?this.currentProfile.title:void 0};return this.xpListeners.forEach(d=>d(u)),i&&this.notifyAuthListeners(),u}async logout(){await h.auth.signOut(),this.currentProfile=null,localStorage.removeItem("genesis_last_active_user"),this.notifyAuthListeners()}onXp(e){return this.xpListeners.push(e),()=>{this.xpListeners=this.xpListeners.filter(t=>t!==e)}}onAuth(e){return this.authListeners.push(e),e(this.currentProfile),()=>{this.authListeners=this.authListeners.filter(t=>t!==e)}}notifyAuthListeners(){this.authListeners.forEach(e=>e(this.currentProfile))}};n(o,"instance",null);let m=o;class X{constructor(){n(this,"container");n(this,"mode","login");n(this,"profileManager");this.profileManager=m.getInstance(),this.container=document.createElement("div"),this.container.id="genesis-auth-modal",this.container.className="auth-modal-overlay hidden",document.body.appendChild(this.container),this.container.addEventListener("click",e=>{e.target===this.container&&this.close()})}open(e="login"){this.profileManager.isAuthenticated()?this.mode="passport":this.mode=e==="passport"?"login":e,this.render(),this.container.classList.remove("hidden")}close(){this.container.classList.add("hidden")}render(){var i,u,d,g,P;const e=this.profileManager.getProfile();if(e&&this.mode==="passport"){const p=Math.min(100,Math.round(e.currentXp/e.xpToNextLevel*100));this.container.innerHTML=`
        <div class="auth-modal-card glass-panel">
          <div class="auth-modal-header">
            <span class="auth-brand">⚡ Genesis Passport</span>
            <button class="auth-close-btn">&times;</button>
          </div>

          <div class="passport-hero">
            <div class="passport-avatar">👤</div>
            <h2 class="passport-username">${e.username}</h2>
            <div class="passport-rank-badge">${e.title}</div>
            <p class="passport-email">${e.email}</p>
          </div>

          <div class="passport-xp-box">
            <div class="passport-xp-labels">
              <span class="passport-level-tag">LEVEL ${e.level}</span>
              <span class="passport-xp-counter">${e.currentXp} / ${e.xpToNextLevel} XP (${p}%)</span>
            </div>
            <div class="passport-bar-bg">
              <div class="passport-bar-fill" style="width: ${p}%;"></div>
            </div>
            <div class="passport-total-xp">Total Lifetime XP: <strong>${e.totalXp.toLocaleString()} XP</strong></div>
          </div>

          <div class="passport-stats-grid">
            <div class="passport-stat-item">
              <span class="p-stat-val">${e.level}</span>
              <span class="p-stat-lbl">Global Level</span>
            </div>
            <div class="passport-stat-item">
              <span class="p-stat-val">${e.title}</span>
              <span class="p-stat-lbl">Rank Title</span>
            </div>
          </div>

          <button id="btn-modal-logout" class="btn-auth-logout">Sign Out of Account</button>
        </div>
      `,(i=this.container.querySelector(".auth-close-btn"))==null||i.addEventListener("click",()=>this.close()),(u=this.container.querySelector("#btn-modal-logout"))==null||u.addEventListener("click",async()=>{await this.profileManager.logout(),this.open("login")});return}const t=this.mode==="signup";this.container.innerHTML=`
      <div class="auth-modal-card glass-panel">
        <div class="auth-modal-header">
          <div class="auth-tabs">
            <button id="tab-login" class="auth-tab ${t?"":"active"}">Sign In</button>
            <button id="tab-signup" class="auth-tab ${t?"active":""}">Create Account</button>
          </div>
          <button class="auth-close-btn">&times;</button>
        </div>

        <div class="auth-modal-body">
          <h3 class="auth-headline">${t?"Create Genesis Account":"Welcome Back"}</h3>
          <p class="auth-subtext">
            ${t?"An account is required to earn XP, level up, and preserve your progression across all games.":"Sign in to sync your level and unlock ecosystem titles."}
          </p>

          <form id="auth-form" class="auth-form">
            <div class="auth-field">
              <label for="auth-email">Email Address</label>
              <input id="auth-email" type="email" placeholder="explorer@genesis.io" required />
            </div>

            <div class="auth-field">
              <label for="auth-password">Password</label>
              <input id="auth-password" type="password" placeholder="••••••••" required minlength="6" />
            </div>

            <div id="auth-error-msg" class="auth-error hidden"></div>

            <button type="submit" id="btn-auth-submit" class="btn-primary-auth">
              ${t?"Create Account & Start":"Sign In"}
            </button>
          </form>
        </div>
      </div>
    `,(d=this.container.querySelector(".auth-close-btn"))==null||d.addEventListener("click",()=>this.close()),(g=this.container.querySelector("#tab-login"))==null||g.addEventListener("click",()=>{this.mode="login",this.render()}),(P=this.container.querySelector("#tab-signup"))==null||P.addEventListener("click",()=>{this.mode="signup",this.render()});const r=this.container.querySelector("#auth-form");r==null||r.addEventListener("submit",async p=>{p.preventDefault();const b=this.container.querySelector("#auth-email").value.trim(),L=this.container.querySelector("#auth-password").value.trim(),a=this.container.querySelector("#auth-error-msg"),c=this.container.querySelector("#btn-auth-submit");a.classList.add("hidden"),a.textContent="",c.disabled=!0,c.textContent="Verifying with Genesis Cloud...";try{if(this.mode==="signup"){const{data:l,error:y}=await h.auth.signUp({email:b,password:L});if(y)throw y;if(l.user&&!l.session){a.classList.remove("hidden"),a.style.color="#38bdf8",a.textContent="Account created! Please check your email to confirm signup, or sign in.",c.disabled=!1,c.textContent="Create Account";return}}else{const{error:l}=await h.auth.signInWithPassword({email:b,password:L});if(l)throw l}await this.profileManager.init(),this.close()}catch(l){a.classList.remove("hidden"),a.style.color="#ef4444",a.textContent=l instanceof Error?l.message:"Authentication failed. Please try again.",c.disabled=!1,c.textContent=this.mode==="signup"?"Create Account & Start":"Sign In"}})}}export{X as A,m as P};
