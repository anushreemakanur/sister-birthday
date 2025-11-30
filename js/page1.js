const dob=new Date("2006-11-29T00:00:00");
const moodData={
  "😊":"You should keep smiling, or else see 🔪",
  "🥳":"Yeahh,, this happiness is needed, MUCHKOND KUSHYAG IRBEK ASHTE!",
  "😴":"Take rest, you deserve it after a big day, but dream big, love!",
  "😢":"Hey, even rainbows need a little rain — chin up, bbg.",
  "🤔":"Lost in thoughts? Over - Overthinking is waste of time, get some sunlight!",
  "😡":"Someone needs cake — emergency level."
};

/* CLOCK */
let lastMinute=null,lastHour=null;
const pad=v=>String(v).padStart(2,"0");
function setTile(id,val,flip){
  const t=document.getElementById(id);if(!t)return;
  const top=t.querySelector(".top"),bottom=t.querySelector(".bottom");
  if(top.textContent!==val){
    top.textContent=val;bottom.textContent=val;
    if(flip){t.classList.remove("flip");void t.offsetWidth;t.classList.add("flip");}
  }
}
function updateClock(){
  const n=new Date(),h=pad(n.getHours()),m=pad(n.getMinutes()),s=pad(n.getSeconds());
  setTile("secondTile",s,false);
  if(m!==lastMinute){setTile("minuteTile",m,true);lastMinute=m;}else setTile("minuteTile",m,false);
  if(h!==lastHour){setTile("hourTile",h,true);lastHour=h;}else setTile("hourTile",h,false);
}

/* AGE */
function calculateAge(){
  const now=new Date(),diff=now-dob;
  const d=Math.floor(diff/(1000*60*60*24));
  const h=Math.floor((diff/(1000*60*60))%24);
  const m=Math.floor((diff/(1000*60))%60);
  const s=Math.floor((diff/1000)%60);
  document.getElementById("age-display").textContent=
    `You are ${d} days, ${h} hours, ${m} minutes, ${s} seconds old.`;
}

/* MOOD */
function initMoodSelector(){
  const trigger=document.getElementById("mood-trigger"),
        box=document.getElementById("mood-emojis"),
        quote=document.getElementById("mood-quote");
  box.innerHTML="";
  Object.keys(moodData).forEach(e=>{
    const b=document.createElement("button");
    b.type="button";b.className="emoji-btn";b.textContent=e;
    b.addEventListener("click",()=>{
      quote.textContent=moodData[e];
      box.dataset.selected=e;
      box.style.display="flex"; // keep visible
    });
    box.appendChild(b);
  });
  let shown=false;
  const toggle=()=>{shown=!shown;box.style.display=shown?"flex":"none";};
  trigger.addEventListener("click",toggle);
}

/* LOGIN */
function handleLogin(){
  document.getElementById("login-form").addEventListener("submit",e=>{
    e.preventDefault();
    document.getElementById("login-btn").textContent="Access Granted 🎉";
    setTimeout(()=>location.href="pages/page2.html",1000);
  });
}

/* INIT */
window.addEventListener("load",()=>{
  const n=new Date();
  lastMinute=pad(n.getMinutes());lastHour=pad(n.getHours());
  updateClock();calculateAge();
  setInterval(updateClock,1000);
  setInterval(calculateAge,1000);
  initMoodSelector();handleLogin();
});

/* -----------------------------------
   INTRO ANIMATION SOUND EFFECTS
------------------------------------ */

window.addEventListener("load", () => {
  const sfxConfetti = document.getElementById("sfx-confetti");
  const sfxBalloon = document.getElementById("sfx-balloon");
  const sfxChime = document.getElementById("sfx-chime");

  // 1. Play confetti sound immediately
  sfxConfetti.volume = 0.6;
  sfxConfetti.play().catch(() => {});

  // 2. Play balloon slide sound after confetti ends
  setTimeout(() => {
    sfxBalloon.volume = 0.7;
    sfxBalloon.play().catch(() => {});
  }, 3000);

  // 3. Soft chime after all animations
  setTimeout(() => {
    sfxChime.volume = 0.8;
    sfxChime.play().catch(() => {});
  }, 5000);
});

/* LOGIN */
/* PASSWORD SHOW / HIDE TOGGLE */
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const isHidden = passwordField.type === "password";
  passwordField.type = isHidden ? "text" : "password";

  // Change icon
  togglePassword.textContent = isHidden ? "🙈" : "👁️";
});


function handleLogin() {
  const form = document.getElementById("login-form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const loginBtn = document.getElementById("login-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // password must match exactly
    if (password.value === "ilovemysister") {

      loginBtn.textContent = "Access Granted 🎉";
      loginBtn.style.background = "linear-gradient(90deg,#80ffb3,#66ffcc)";

      setTimeout(() => {
        location.href = "page2.html";
      }, 1000);

    } else {
      // wrong password → shake error
      form.classList.add("shake");
      loginBtn.textContent = "Wrong Password!";
      loginBtn.style.background = "linear-gradient(90deg,#ff8080,#ff4d4d)";

      setTimeout(() => {
        form.classList.remove("shake");
        loginBtn.textContent = "Login";
        loginBtn.style.background = "linear-gradient(90deg,#e0b3ff,#ffb6d9)";
      }, 900);
    }
  });
}
