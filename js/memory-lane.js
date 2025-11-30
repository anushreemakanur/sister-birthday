const MEDIA_BASE = "../assets/memory/";

const IMAGES = [
  {src: MEDIA_BASE + "Screenshot 2025-11-29 023328.png", caption: "Mumma ❤️ Abhi"},
  {src: MEDIA_BASE + "WhatsApp Image 2025-11-29 at 2.41.51 AM.jpeg", caption: "ವಂಶದ ಕುಡಿಗಳು 🦁"},
  {src: MEDIA_BASE + "Screenshot 2025-11-29 023702.png", caption: "Abhi with Boys 😎"},
  {src: MEDIA_BASE + "Screenshot 2025-11-29 023921.png", caption: "She in her prime 🤙🏻"},
  {src: MEDIA_BASE + "WhatsApp Image 2024-08-15 at 15.52.52_e02fe438.jpg", caption: "Cake-oholic 🎂"},
  {src: MEDIA_BASE + "IMG-20230401-WA0015.jpg", caption: "ಕಾರ್ಮಿಕರು 👷"},
  {src: MEDIA_BASE + "IMG-20230401-WA0020.jpg", caption: "Nam mane Deepwali, Guys! 🪔"},
  {src: MEDIA_BASE + "WhatsApp Image 2025-11-29 at 2.54.31 AM.jpeg", caption: "Matching 👯‍♀️ Matching"},
  {src: MEDIA_BASE + "chapri-era.jpeg", caption: "Chapri era 😭"},
  {src: MEDIA_BASE + "naanu-chinni.jpeg", caption: "Naanu 👯‍♀️ Chinni"},
  {src: MEDIA_BASE + "WhatsApp Image 2025-11-29 at 2.59.58 AM 1.jpeg", caption: "Lockdown days 🫂"},
  {src: MEDIA_BASE + "IMG-20241128-WA0051.jpg", caption: "Photoshoot time ✌️"},
  {src: MEDIA_BASE + "IMG-20241128-WA0047.jpg", caption: "US GURLS! 💅"},
  {src: MEDIA_BASE + "Snapchat-1166111424.jpg", caption: "Radha 💕"},
  {src: MEDIA_BASE + "IMG-20241128-WA0056.jpg", caption: "Pappa side relative marriage 👍"},
  {src: MEDIA_BASE + "IMG_20220811_171758.jpg", caption: "Anna mane Opening 🥂"},
  {src: MEDIA_BASE + "IMG-20201227-WA0043.jpg", caption: "Fam Goa Trip 🏖️"},
  {src: MEDIA_BASE + "IMG-20241128-WA0048.jpg", caption: "Cousin Madhve 🫣"},
  {src: MEDIA_BASE + "Snapchat-844859375.jpg", caption: "Holi in NGD 🫟"},
  {src: MEDIA_BASE + "Snapchat-1106840390.jpg", caption: "Being Cuties 🐳"},
  {src: MEDIA_BASE + "abhi-ethnic.jpeg", caption: "Came to Bnglr | Ethnic day @ACharya 🧑‍🏫"},
  {src: MEDIA_BASE + "WhatsApp Image 2025-11-29 at 2.59.57 AM (1).jpeg", caption: "1st year friends 👍🏻"},
  {src: MEDIA_BASE + "WhatsApp Image 2025-11-29 at 2.59.56 AM (1).jpeg", caption: "CUte days 💖"},
  {src: MEDIA_BASE + "IMG20240719175806.jpg", caption: "Oh, this day 🫢"},
  {src: MEDIA_BASE + "WhatsApp Image 2025-11-29 at 2.59.59 AM.jpeg", caption: "Awww!! 🥹"},
  {src: MEDIA_BASE + "WhatsApp Image 2025-11-29 at 2.59.58 AM.jpeg", caption: "Arguments 🙈"},
  {src: MEDIA_BASE + "IMG-20241130-WA0055.jpg", caption: "Daily Sushi | Last year Bday 🎈"},
  {src: MEDIA_BASE + "WhatsApp Image 2025-11-29 at 2.59.57 AM.jpeg", caption: "Meeting her was IMP 🪬"},
  {src: MEDIA_BASE + "WhatsApp Image 2025-11-29 at 2.54.33 AM (1).jpeg", caption: "Bride to Be | Cousin 👰‍♀️"},
  {src: MEDIA_BASE + "WhatsApp Image 2025-11-29 at 2.54.33 AM.jpeg", caption: "Same Cousin Wedding 🙂"},
  {src: MEDIA_BASE + "WhatsApp Image 2025-11-29 at 2.59.56 AM.jpeg", caption: "Re - creation 💁‍♀️"},
  {src: MEDIA_BASE + "WhatsApp Image 2025-11-29 at 2.54.32 AM.jpeg", caption: "Ummaaa 💋"},
  {src: MEDIA_BASE + "WhatsApp Image 2025-11-29 at 2.54.32 AM (2).jpeg", caption: "Akka Grad 👩‍🎓"}
];

/* layout settings */
const ROW_SIZE = 6; // how many polaroids per horizontal row (adjust to taste)

/* DOM */
const garlandWrap = document.getElementById('garlandWrap');
const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lbImage');
const lbCaption = document.getElementById('lbCaption');
const lbClose = document.getElementById('lbClose');
const lbPrev = document.getElementById('lbPrev');
const lbNext = document.getElementById('lbNext');
const lbDownload = document.getElementById('lbDownload');
const lbCounter = document.getElementById('lbCounter');

let currentIndex = 0;

/* build garland rows */
function buildGarland() {
  garlandWrap.innerHTML = '';

  // split images into rows of ROW_SIZE
  for (let i = 0; i < IMAGES.length; i += ROW_SIZE) {
    const rowItems = IMAGES.slice(i, i + ROW_SIZE);
    const row = document.createElement('div');
    row.className = 'string-row';
    const inner = document.createElement('div');
    inner.className = 'row-inner';

    rowItems.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'polaroid sway';
      card.tabIndex = 0;
      card.dataset.index = i + idx;

      // photo box
      const photo = document.createElement('div');
      photo.className = 'photo';
      const img = document.createElement('img');
      img.dataset.src = item.src;       // lazy load
      img.alt = item.caption || 'Memory photo';
      img.loading = 'lazy';
      img.style.opacity = 0;
      img.style.transition = 'opacity 320ms ease';

      // when visible, load actual src (IntersectionObserver below)
      photo.appendChild(img);

      // caption
      const cap = document.createElement('div');
      cap.className = 'caption';
      cap.textContent = item.caption || '';

      const capSub = document.createElement('div');
      capSub.className = 'caption-sub';
      capSub.textContent = ''; // optional

      card.append(photo, cap, capSub);

      // click opens lightbox
      card.addEventListener('click', () => openLightbox(parseInt(card.dataset.index, 10)));
      card.addEventListener('keypress', (e) => { if (e.key === 'Enter') openLightbox(parseInt(card.dataset.index, 10)); });

      inner.appendChild(card);
    });

    row.appendChild(inner);
    garlandWrap.appendChild(row);
  }

  lazyInit(); // start lazy loading
}

/* LAZY LOADING (IntersectionObserver) */
function lazyInit() {
  const imgs = document.querySelectorAll('.polaroid .photo img');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, io) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          const img = ent.target;
          if (img.dataset.src && img.src !== img.dataset.src) {
            img.src = img.dataset.src;
            img.onload = () => img.style.opacity = 1;
            img.removeAttribute('data-src');
          }
          io.unobserve(img);
        }
      });
    }, {root: null, rootMargin: '300px', threshold: 0.1});

    imgs.forEach(i => obs.observe(i));
  } else {
    // fallback: load all
    imgs.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.onload = () => img.style.opacity = 1;
      }
    });
  }
}

/* LIGHTBOX behavior */
function openLightbox(index) {
  if (index < 0 || index >= IMAGES.length) return;
  currentIndex = index;

  const item = IMAGES[index];
  lbImage.src = item.src;
  lbCaption.textContent = item.caption || "";
  lbCounter.textContent = `${index + 1} / ${IMAGES.length}`;

  // show
  lightbox.classList.remove("hidden");
  lightbox.style.display = "flex"; 

  // preload neighbors
  preloadIndex(index + 1);
  preloadIndex(index - 1);
}


function closeLightbox() {
  // hide
  lightbox.classList.add("hidden");
  lightbox.style.display = "none";

  // clear src to stop video/gif loading
  lbImage.src = "";

  // unblock clicks
  setTimeout(() => {
    lightbox.style.display = "";  // restored for next open
  }, 10);
}


/* navigate */
function showNext() { openLightbox(Math.min(currentIndex + 1, IMAGES.length - 1)); }
function showPrev() { openLightbox(Math.max(currentIndex - 1, 0)); }

/* preload helper */
function preloadIndex(i) {
  if (i < 0 || i >= IMAGES.length) return;
  const tmp = new Image();
  tmp.src = IMAGES[i].src;
}

/* keyboard */
function onKey(e) {
  if (lightbox.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
}

/* download current */
function downloadCurrent() {
  const item = IMAGES[currentIndex];
  if (!item) return;
  const a = document.createElement('a');
  a.href = item.src;
  a.download = item.src.split('/').pop();
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/* swipe support (touch) */
let touchStartX = 0, touchEndX = 0;
function handleTouchStart(e){ touchStartX = e.changedTouches[0].clientX; }
function handleTouchEnd(e){
  touchEndX = e.changedTouches[0].clientX;
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) > 40) {
    if (diff < 0) showNext();
    else showPrev();
  }
}

/* events */
lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox(); // click outside closes
  }
});

lbNext.addEventListener('click', showNext);
lbPrev.addEventListener('click', showPrev);
lbDownload.addEventListener('click', downloadCurrent);
document.addEventListener('keydown', onKey);
lightbox.addEventListener('touchstart', handleTouchStart, {passive:true});
lightbox.addEventListener('touchend', handleTouchEnd, {passive:true});

/* init */
window.addEventListener('load', () => {
  buildGarland();
});
