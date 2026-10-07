var f=Object.defineProperty;var y=(i,t,s)=>t in i?f(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var r=(i,t,s)=>y(i,typeof t!="symbol"?t+"":t,s);import{P as L,s as g}from"./ProfileManager-vr3li8HJ.js";class ${constructor(){r(this,"container");r(this,"mode","login");r(this,"profileManager");this.profileManager=L.getInstance(),this.container=document.createElement("div"),this.container.id="genesis-auth-modal",this.container.className="auth-modal-overlay hidden",document.body.appendChild(this.container),this.container.addEventListener("click",t=>{t.target===this.container&&this.close()})}open(t="login"){this.profileManager.isAuthenticated()?this.mode="passport":this.mode=t==="passport"?"login":t,this.render(),this.container.classList.remove("hidden")}close(){this.container.classList.add("hidden")}render(){var c,d,u,p,h;const t=this.profileManager.getProfile();if(t&&this.mode==="passport"){const o=Math.min(100,Math.round(t.currentXp/t.xpToNextLevel*100));this.container.innerHTML=`
        <div class="auth-modal-card glass-panel">
          <div class="auth-modal-header">
            <span class="auth-brand">⚡ Genesis Passport</span>
            <button class="auth-close-btn">&times;</button>
          </div>

          <div class="passport-hero">
            <div class="passport-avatar">👤</div>
            <h2 class="passport-username">${t.username}</h2>
            <div class="passport-rank-badge">${t.title}</div>
            <p class="passport-email">${t.email}</p>
          </div>

          <div class="passport-xp-box">
            <div class="passport-xp-labels">
              <span class="passport-level-tag">LEVEL ${t.level}</span>
              <span class="passport-xp-counter">${t.currentXp} / ${t.xpToNextLevel} XP (${o}%)</span>
            </div>
            <div class="passport-bar-bg">
              <div class="passport-bar-fill" style="width: ${o}%;"></div>
            </div>
            <div class="passport-total-xp">Total Lifetime XP: <strong>${t.totalXp.toLocaleString()} XP</strong></div>
          </div>

          <div class="passport-stats-grid">
            <div class="passport-stat-item">
              <span class="p-stat-val">${t.level}</span>
              <span class="p-stat-lbl">Global Level</span>
            </div>
            <div class="passport-stat-item">
              <span class="p-stat-val">${t.title}</span>
              <span class="p-stat-lbl">Rank Title</span>
            </div>
          </div>

          <button id="btn-modal-logout" class="btn-auth-logout">Sign Out of Account</button>
        </div>
      `,(c=this.container.querySelector(".auth-close-btn"))==null||c.addEventListener("click",()=>this.close()),(d=this.container.querySelector("#btn-modal-logout"))==null||d.addEventListener("click",async()=>{await this.profileManager.logout(),this.open("login")});return}const s=this.mode==="signup";this.container.innerHTML=`
      <div class="auth-modal-card glass-panel">
        <div class="auth-modal-header">
          <div class="auth-tabs">
            <button id="tab-login" class="auth-tab ${s?"":"active"}">Sign In</button>
            <button id="tab-signup" class="auth-tab ${s?"active":""}">Create Account</button>
          </div>
          <button class="auth-close-btn">&times;</button>
        </div>

        <div class="auth-modal-body">
          <h3 class="auth-headline">${s?"Create Genesis Account":"Welcome Back"}</h3>
          <p class="auth-subtext">
            ${s?"An account is required to earn XP, level up, and preserve your progression across all games.":"Sign in to sync your level and unlock ecosystem titles."}
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
              ${s?"Create Account & Start":"Sign In"}
            </button>
          </form>
        </div>
      </div>
    `,(u=this.container.querySelector(".auth-close-btn"))==null||u.addEventListener("click",()=>this.close()),(p=this.container.querySelector("#tab-login"))==null||p.addEventListener("click",()=>{this.mode="login",this.render()}),(h=this.container.querySelector("#tab-signup"))==null||h.addEventListener("click",()=>{this.mode="signup",this.render()});const l=this.container.querySelector("#auth-form");l==null||l.addEventListener("submit",async o=>{o.preventDefault();const v=this.container.querySelector("#auth-email").value.trim(),m=this.container.querySelector("#auth-password").value.trim(),e=this.container.querySelector("#auth-error-msg"),n=this.container.querySelector("#btn-auth-submit");e.classList.add("hidden"),e.textContent="",n.disabled=!0,n.textContent="Verifying with Genesis Cloud...";try{if(this.mode==="signup"){const{data:a,error:b}=await g.auth.signUp({email:v,password:m});if(b)throw b;if(a.user&&!a.session){e.classList.remove("hidden"),e.style.color="#38bdf8",e.textContent="Account created! Please check your email to confirm signup, or sign in.",n.disabled=!1,n.textContent="Create Account";return}}else{const{error:a}=await g.auth.signInWithPassword({email:v,password:m});if(a)throw a}await this.profileManager.init(),this.close()}catch(a){e.classList.remove("hidden"),e.style.color="#ef4444",e.textContent=a instanceof Error?a.message:"Authentication failed. Please try again.",n.disabled=!1,n.textContent=this.mode==="signup"?"Create Account & Start":"Sign In"}})}}export{$ as A};
