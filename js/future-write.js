// future-write.js (updated: seal animation + save + redirect)
const KEY = 'future_letter_data_v1';

const headingEl = document.getElementById('letterHeading');
const bodyEl = document.getElementById('letterArea');
const saveBtn = document.getElementById('saveBtn');
const lastSavedEl = document.getElementById('lastSaved');
const backBtn = document.getElementById('backBtn');

// delete modal controls (unchanged)
const deleteBtn = document.getElementById('deleteBtn');
const deleteModal = document.getElementById('deleteModal');
const cancelDelete = document.getElementById('cancelDelete');
const confirmDelete = document.getElementById('confirmDelete');

let state = { heading:"", body:"", updatedAt:null, sealed:false };
let timer = null;

/* ---------- LOAD / APPLY ---------- */
function load(){
  const raw = localStorage.getItem(KEY);
  if(raw){
    try { state = JSON.parse(raw); } catch(e){ state = { heading:"", body:"", updatedAt:null, sealed:false }; }
  }
  headingEl.value = state.heading || "";
  bodyEl.value = state.body || "";
  lastSavedEl.textContent = state.updatedAt ?
    `Last saved ${new Date(state.updatedAt).toLocaleString()}` :
    "Not saved yet";
}

/* ---------- SAVE ---------- */
function save(nowSeal=false){
  state.heading = headingEl.value.trim();
  state.body = bodyEl.value;
  state.updatedAt = new Date().toISOString();
  if(nowSeal) state.sealed = true; // mark sealed when explicit Seal & Save is clicked
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    lastSavedEl.textContent = `Saved ${new Date(state.updatedAt).toLocaleString()}`;
  } catch(e){
    console.error('Save failed', e);
    lastSavedEl.textContent = `Save failed`;
  }
}

/* ---------- AUTO-SAVE ---------- */
function autoSave(){
  lastSavedEl.textContent = "Saving...";
  clearTimeout(timer);
  timer = setTimeout(() => save(false), 700);
}

/* ---------- SEAL ANIMATION + REDIRECT ---------- */
function playSealAndRedirect(){
  // save and mark sealed
  save(true);

  // create stamp element if not present
  let stamp = document.querySelector('.seal-stamp');
  if(!stamp){
    stamp = document.createElement('div');
    stamp.className = 'seal-stamp';
    stamp.innerHTML = `<div class="txt">SEALED</div>`;
    document.body.appendChild(stamp);
  }

  // show animation
  stamp.classList.remove('hide');
  stamp.classList.add('show');

  // after the show animation, hold briefly then hide then redirect
  setTimeout(() => {
    stamp.classList.remove('show');
    stamp.classList.add('hide');
    // after hide completes (360ms), redirect to envelope
    setTimeout(() => {
      window.location.href = "future-letter.html";
    }, 380);
  }, 820); // 820ms total visible duration: adjust if you want faster
}

/* ---------- EVENTS ---------- */
headingEl.addEventListener("input", autoSave);
bodyEl.addEventListener("input", autoSave);

// manual save (Seal & Save triggers seal animation + redirect)
saveBtn.addEventListener("click", () => {
  playSealAndRedirect();
});

// back button: save and return to envelope
backBtn.addEventListener("click", () => {
  save(false);
  window.location.href = "future-letter.html";
});

/* ---------- DELETE ---------- */
deleteBtn.addEventListener("click", ()=>{
  deleteModal.classList.remove("hidden");
});
cancelDelete.addEventListener("click", ()=>{
  deleteModal.classList.add("hidden");
});
confirmDelete.addEventListener("click", ()=>{
  localStorage.removeItem(KEY);
  deleteModal.classList.add("hidden");
  window.location.href = "future-letter.html";
});

/* ---------- INIT ---------- */
window.addEventListener('load', () => {
  load();
});