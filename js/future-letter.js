// future-letter.js (updated animation + UI)
// same storage key as editor
const KEY = 'future_letter_data_v1';
const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const reopenBtn = document.getElementById('reopenBtn');
const stateNote = document.getElementById('stateNote');
const sealEl = document.getElementById('seal');
const letterPreview = document.getElementById('letterPreview');

function loadState(){
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : { heading:'', body:'', saved:false, sealed:false, updatedAt:null, image:null };
  } catch(e) { return { heading:'', body:'', saved:false, sealed:false, updatedAt:null, image:null }; }
}

function updateUI(){
  const st = loadState();
  if(st.saved && st.sealed){
    stateNote.textContent = `Letter sealed on ${new Date(st.updatedAt).toLocaleString()}`;
    reopenBtn.classList.remove('hidden');
    openBtn.classList.add('hidden');
    sealEl.textContent = 'SEAL';
  } else if(st.saved && !st.sealed){
    stateNote.textContent = `Letter saved (unsealed) — last edit ${st.updatedAt ? new Date(st.updatedAt).toLocaleString() : ''}`;
    openBtn.classList.remove('hidden');
    reopenBtn.classList.add('hidden');
    sealEl.textContent = 'SEAL';
  } else {
    openBtn.classList.remove('hidden');
    reopenBtn.classList.add('hidden');
    sealEl.textContent = 'SEAL';
  }

  // preview heading (if present)
  const previewHeading = document.getElementById('lpHeading');
  if(previewHeading){
    previewHeading.textContent = st.heading ? st.heading : 'To Future Me';
  }
}

// tilt then pop animation then navigate to write page
function playOpenAnimation(){
  // quick tilt
  envelope.classList.add('tilt');

  // small delay to show tilt then pop
  setTimeout(()=> {
    envelope.classList.add('pop');
    // after pop duration navigate to editor
    setTimeout(()=> {
      window.location.href = 'future-write.html';
    }, 700);
  }, 160);
}

function reopenAction(){
  // just navigate to editor (editor will handle sealed/unseal)
  window.location.href = 'future-write.html';
}

window.addEventListener('load', ()=>{
  updateUI();
  envelope.addEventListener('click', playOpenAnimation);
  envelope.addEventListener('keypress', (e)=> { if(e.key === 'Enter') playOpenAnimation(); });
  openBtn.addEventListener('click', playOpenAnimation);
  reopenBtn.addEventListener('click', reopenAction);
});