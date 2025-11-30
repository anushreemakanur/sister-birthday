
const MEDIA_BASE = "../assets/wishes/"; // per your path

const PEOPLE = [
  // p1: Mumma (image + audio) + extra group videos from her friends
  {
    id: "p1",
    name: "Rathnavva",
    relation: "Mumma ~ True Love",
    avatar: "../assets/mumma4.png",
    images: [MEDIA_BASE + "mumma_photo.jpeg"],        
    audio: [MEDIA_BASE + "mumma_note1a.ogg",
            MEDIA_BASE + "mumma_note1.ogg"
    ],           
    extraVideos: [
      MEDIA_BASE + "mfriend1.mp4",
      MEDIA_BASE + "mfriend2.mp4",
      MEDIA_BASE + "mfriend3.mp4",
      MEDIA_BASE + "mfriend4.mp4",
      MEDIA_BASE + "mfriend5.mp4"
    ],
    message: ``
  },
// p2: Ryavakka - video
  {
    id: "p2",
    name: "Ryavakka",
    relation: "Mumma ~ Baby",
    avatar: "../assets/WhatsApp Image 2025-11-27 at 10.29.13 PM (1).jpeg",
    videos: [MEDIA_BASE + "ryavakka_video.mp4"], // <-- replace filename
    message: ``
  },
  
  // p3: Deepuuu - (brother/video) - adjust filename accordingly
  {
    id: "p3",
    name: "Deepuuu",
    relation: "Anna ~ appa2",
    avatar: "../assets/WhatsApp Image 2025-11-27 at 10.52.41 PM.jpeg",
    videos: [MEDIA_BASE + "brother_video.mp4",
             MEDIA_BASE + "brother_friend.mp4"
    ], // <-- replace filename
    message: ``
  },

  // add up to 11 people. placeholders below:
  { id:"p4", name:"Sinduuu", relation:"Athge ~ Bestie", avatar:"../assets/WhatsApp Image 2025-11-27 at 10.17.17 PM.jpeg", message:`Happiest birthday to our third wheel
I hope your birthday is as beautiful and special as you are. Your presence, your smile, and your gentle heart mean more to us than words can say. 
I just want you to know how truly special you are to me. 
I’m grateful for the bond we share. May your heart always be filled with the same love and kindness you give to everyone around you. Wishing you a beautiful year ahead, filled with joy, blessings, and everything your heart wishes for.

Be a strong women like your mother and sister , they are your precious gift of life.
Make them proud and happy.😊 

Happy 19 my dear love ❤️` },
  { id:"p5", name:"Anuuu", relation:"Akka ~ Irritation", avatar:"../assets/WhatsApp Image 2025-11-27 at 10.29.14 PM.jpeg", message:`` },
  { id:"p6", name:"Stuthi", relation:"Bestie ~ Girly Pop", avatar:"../assets/WhatsApp Image 2025-11-27 at 1.28.31 AM.jpeg ", message:`Happy birthday abhi ✨

I still remember the first day we met — two completely different people, unaware that one day we would mean so much to each other. Honestly, I never thought we would be this close. But life has a beautiful way of bringing the right people together at the right time.

Slowly, without even realizing it, you became the person I trust the most.The way you listen to me when I'm lost, the way you support me on my bad days, the way you care, the way you understand even the things I never say out loud — it’s rare, and no matter where life takes us, no matter how busy or far we are, I want us to hold onto this bond forever. 
  


AND ONCE AGAIN HAPPY BIRTHDAY ABHISHREE🥺♥️ and I wish you endless happiness, endless success, and endless love✨❤️` },
  { id:"p7", name:"Chinni", relation:"Cousin ~ Prenduuu", avatar:"../assets/WhatsApp Image 2025-11-27 at 8.50.41 PM.jpeg", message:`Happy 19th Birthday to my favorite cousin and forever sister 💖. We've had our share of silly fights, small clashes, dramatic moments, and endless arguments — but somehow we always come back laughing like nothing happened. That's what makes our bond special: messy, real, and full of love. Growing up with you has given me memories I'll always cherish, and even when we annoy each other, I know I'll always have you by my side. Here's to 19 — a year of new beginnings, big dreams, and lots of happy moments. Stay sweet, stay strong, and never forget how loved you are. No matter what, I'm always here — today, tomorrow, and always. 💛` },
  { id:"p8", name:"Puniii", relation:"Cousin ~ Mavaaa", avatar:"../assets/WhatsApp Image 2025-11-27 at 11.24.13 AM.jpeg", message:`Happy Birthday to the one who holds a special place in my heart❤️✨. Today, I celebrate not just your birthday but the beautiful soul that you are.
🤗.  May your day be in love, warmth, and endless joy. You deserve every bit of happiness that life can give. I'm grateful for your kindness, your strength, and the love you share so effortlessly 🤗✨❤️.  May this year bless you with new dreams, meaningful moments, and fulfilled wishes. I hope you always find reasons to smile and feel cherished. You are a gift to everyone who knows you, especially to me 🤗☺️. Thank you for being as my frnd and cousin. I wish you success in all your endeavors and comfort in every challenge✨. May love surround you today and always. Celebrate yourself, for you are truly extraordinary. 

Happiest Birthday, my beloved—be happy forever... Stay blessed... 🎉💖` },
  { id:"p9", name:"Madhuuu", relation:"Senior ~ Friend", avatar:"../assets/WhatsApp Image 2025-11-28 at 11.05.48 PM.jpeg", message:`“Happy Birthday, Abhi… 💖
I don't have fancy words, but I have a heart full of prayers and love just for you. The way you feel things deeply, the way your heart cares silently—it all makes you so rare.
On your birthday, I just want you to know that your existence makes this world softer and more beautiful. I pray that every tear you've ever cried turns into a thousand reasons to smile. May life give you the kind of happiness your heart truly deserves. Always stay the best. You mean more than you’ll ever know 💝`},
  { id:"p10", name:"Akshath", relation:"Senior ~ Friend", avatar:"../assets/WhatsApp Image 2025-11-27 at 1.52.10 AM.jpeg", message:`Happy Birthday to someone who entered my life very quietly and slowly became impossible not to notice ✨. When we first became friends, you were silent and calm, but with time I discovered the many beautiful layers of you — thoughtful, honest, strong, and expressive in your own subtle way.

In the beginning, we spent so much beautiful quality time together — roaming around with friends, laughing endlessly, visiting temples and malls, celebrating your sister’s birthday, and going on those long car rides that somehow felt too short. Those days were light, carefree, and full of joy. We started as a happy group of four, sharing smiles, stories, and memories that still hold a special place in my heart. With time, little misunderstandings and unspoken feelings created distance, and things changed quietly — the group still exists in name, but the joy feels different now. Even so, those moments remain precious and unforgettable.

You choose your people carefully and give your time where your heart feels right — sometimes guided by love, sometimes by mood, and always with honesty. The love you hold for your family shows just how deep and genuine your heart is. You have this sweet habit of standing firmly by your thoughts, and even when you hold onto them a little longer, it only reflects how strongly you believe in yourself.

Behind your calm silence and composed nature is a caring soul that feels deeply, loves sincerely, and means far more than she ever shows. May this year bring you softer moments, brighter smiles, gentle lessons, and everything your heart deserves. Stay quietly strong, beautifully imperfect, and exactly the wonderful person you are. 💛🎂` },
  
  { id:"p11", name:"Ankit", relation:"Akka's Friend", avatar:"../assets/WhatsApp Image 2025-11-28 at 8.56.25 PM.jpeg", message: `Don't get sad because of other ppl's behaviour... Be like ur sister....  so many things to learn from her and I need to learn too 😭and u must trust her more than anyone else... Wat ever problem u face it...u need to share it with ur akka first then to another person 😭. 

Idk but ur akka may get busy sometimes but don't get heartbroken she will always stand by ur side.. 

Don't get disappointed from ur sister behaviour 😭
I have noticed it .ur akka treats u so good.. I was so overwhelmed 😭(kisi ka Nazar na lage 🧿 🧿)

And this is a complaint abt anu ....She is so cruel with me 😭😭 Always scolding and abusing me 😭

Idk wat to say from my side.. Ur a good gurl.

And and and sorry I wouldn't be able to give u a gift .. but that will be debt on me for sure😭 I will gift u some other day
Enjoy ur birthday...happie birthday 🎈🎂 🥳🎉 🥳`},
  { id:"p13", name:"Abhishek", relation:"Akka's Friend", avatar:"../assets/IMG_9232.JPG", message: `today is your official “tolerate my nonsense” day, so sit back and enjoy because I’m going to be extra annoying. You’ve survived another entire year with me as your friend .
Today is your day, so enjoy, smile, and don’t worry… I’ll let you boss me around only until midnight. After that, back to default settings. 😌`}
];

// DOM
const grid = document.getElementById('profilesGrid');
const letterView = document.getElementById('letterView');
const letterPhoto = document.getElementById('letterPhoto');
const letterSender = document.getElementById('letterSender');
const letterRelation = document.getElementById('letterRelation');
const letterBody = document.getElementById('letterBody');
const closeLetter = document.getElementById('closeLetter');
const closeBottom = document.getElementById('closeBottom');
const backToGrid = document.getElementById('backToGrid');
const confettiLayer = document.getElementById('confettiLayer');

// Helpers: icons mapping for profile cards
function mediaIconsForPerson(p) {
  const icons = [];
  if (p.videos && p.videos.length) icons.push('🎥');
  if (p.extraVideos && p.extraVideos.length) icons.push('🎬');
  if (p.audio && p.audio.length) icons.push('🎧');
  if (p.images && p.images.length) icons.push('🖼');
  if (p.message && p.message.trim().length) icons.push('📝');
  return icons.join(' ');
}

// Build grid (keeps structure identical)
function buildGrid() {
  grid.innerHTML = "";
  PEOPLE.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.tabIndex = 0;
    card.dataset.index = i;

    const img = document.createElement('img');
    img.className = 'profile-avatar';
    img.src = p.avatar;
    img.alt = `${p.name} avatar`;

    const name = document.createElement('div');
    name.className = 'profile-name';
    name.textContent = p.name;

    const rel = document.createElement('div');
    rel.className = 'profile-relation';
    rel.textContent = p.relation || '';

    // small icons element
    const icons = document.createElement('div');
    icons.className = 'profile-media-icons';
    icons.style.marginTop = '6px';
    icons.style.fontSize = '18px';
    icons.textContent = mediaIconsForPerson(p);

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(rel);
    // card.appendChild(icons);

    card.addEventListener('click', () => openLetter(i));
    card.addEventListener('keypress', (e) => { if (e.key === 'Enter') openLetter(i); });

    grid.appendChild(card);
  });
}

// Lightbox for images
function openImageLightbox(src) {
  // create overlay
  const ov = document.createElement('div');
  ov.style.position = 'fixed';
  ov.style.inset = '0';
  ov.style.background = 'rgba(0,0,0,0.7)';
  ov.style.display = 'flex';
  ov.style.alignItems = 'center';
  ov.style.justifyContent = 'center';
  ov.style.zIndex = 99999;
  ov.addEventListener('click', () => ov.remove());

  const img = document.createElement('img');
  img.src = src;
  img.style.maxWidth = '90%';
  img.style.maxHeight = '90%';
  img.style.boxShadow = '0 30px 90px rgba(0,0,0,0.6)';
  img.style.borderRadius = '10px';
  ov.appendChild(img);

  document.body.appendChild(ov);
}

function buildLetterContent(p) {
  letterBody.innerHTML = "";

  const hasVideos = Array.isArray(p.videos) && p.videos.length > 0;
  const hasExtraVideos = Array.isArray(p.extraVideos) && p.extraVideos.length > 0;
  const hasAudios = Array.isArray(p.audio) && p.audio.length > 0;

  let mediaVideos = hasVideos ? p.videos : [];
  if (hasExtraVideos) mediaVideos = mediaVideos.concat(p.extraVideos);

  // ---------- CONTROLS ----------
  if (hasVideos || hasAudios) {
    const controls = document.createElement("div");
    controls.className = "media-controls";

    if (hasVideos) {
      const btnV = document.createElement("button");
      btnV.className = "btn";
      btnV.textContent = "Play videos";
      btnV.onclick = () => mediaVideos.forEach(v => v._el.play());
      controls.appendChild(btnV);
    }

    if (hasAudios) {
      const btnA = document.createElement("button");
      btnA.className = "btn";
      btnA.textContent = "Play audios";
      btnA.onclick = () => p.audio.forEach(a => a._el.play());
      controls.appendChild(btnA);
    }

    const pauseAll = document.createElement("button");
    pauseAll.className = "btn alt";
    pauseAll.textContent = "Pause all";
    pauseAll.onclick = () => {
      mediaVideos.forEach(v => v._el.pause && v._el.pause());
      p.audio?.forEach(a => a._el.pause && a._el.pause());
    };

    controls.appendChild(pauseAll);
    letterBody.appendChild(controls);
  }

  // ---------- VIDEOS ----------
  mediaVideos.forEach(src => {
    const v = document.createElement("video");
    v.src = src;
    v.controls = true;
    v.className = "wish-video";
    letterBody.appendChild(v);
    src._el = v;
  });

  // ---------- AUDIO ----------
  if (hasAudios) {
    p.audio.forEach(src => {
      const a = document.createElement("audio");
      a.src = src;
      a.controls = true;
      a.className = "wish-audio";
      letterBody.appendChild(a);
      src._el = a;
    });
  }

  // ---------- TEXT ----------
  const paragraphs = (p.message || "")
    .split(/\n+/)
    .map(s => s.trim())
    .filter(Boolean);

  paragraphs.forEach(t => {
    const pEl = document.createElement("p");
    pEl.textContent = t;
    letterBody.appendChild(pEl);
  });
}

function tryPlayMedia(mediaEl) {
  return new Promise((resolve, reject) => {
    const p = mediaEl.play();
    if (p && p.then) {
      p.then(() => {
        // when ended, resolve
        mediaEl.onended = () => resolve();
        // if media is short and didn't fire 'ended' quickly, resolve immediately on 'ended'
        // also resolve on pause
        mediaEl.onpause = () => resolve();
      }).catch(err => {
        // could be autoplay restriction — show message and resolve
        console.warn('play blocked', err);
        resolve();
      });
    } else {
      // no promise (older browsers)
      mediaEl.onended = () => resolve();
    }
  });
}

// Open full-page letter view (photo top, message below)
  function openLetter(index) {
  const p = PEOPLE[index];
  if (!p) return;

  // Fill top section
  letterPhoto.src = p.avatar;
  letterSender.textContent = p.name;
  letterRelation.textContent = p.relation || "";

  // Build content (videos + audios + images + text)
  buildLetterContent(p);

  // Show letter
  letterView.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  // Confetti 🎉 (soft)
  createConfettiBurst(confettiLayer, 16);
}


// close handlers (safe - stop all media)
function stopAllMedia() {
  try {
    if (letterBody && letterBody._media) {
      letterBody._media.videoEls.forEach(v => { try { v.pause(); v.currentTime = 0; } catch(e){} });
      letterBody._media.audioEls.forEach(a => { try { a.pause(); a.currentTime = 0; } catch(e){}});
    }
  } catch (e) { console.warn('stop media failed', e); }
}

closeLetter.addEventListener('click', () => { stopAllMedia(); closeLetterView(); });
if (closeBottom) closeBottom.addEventListener('click', () => { stopAllMedia(); closeLetterView(); });
if (backToGrid) backToGrid.addEventListener('click', () => { stopAllMedia(); closeLetterView(); window.scrollTo({top:0, behavior:'smooth'}); });

function closeLetterView() {
  // fully hide overlay
  letterView.classList.add("hidden");
  letterView.style.display = "none";

  // remove any leftover layers that may block clicks
  confettiLayer.innerHTML = "";
  confettiLayer.style.display = "none";

  // unlock page scroll
  document.body.style.overflow = "auto";

  // reset display for next open
  setTimeout(() => {
    letterView.style.display = "";
    confettiLayer.style.display = "";
  }, 10);
}

// confetti burst (keeps your original style)
function createConfettiBurst(container, count = 20) {
  container.innerHTML = '';
  const w = container.clientWidth || window.innerWidth;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.left = (Math.random() * (w - 40)) + 'px';
    el.style.top = (-20 - Math.random() * 80) + 'px';
    el.style.width = `${6 + Math.random()*10}px`;
    el.style.height = `${8 + Math.random()*14}px`;
    el.style.background = Math.random() > 0.5 ? '#ffd1e9' : '#e7d6ff';
    el.style.transform = `rotate(${Math.random()*360}deg)`;
    el.style.animationDuration = (1600 + Math.random() * 2000) + 'ms';
    container.appendChild(el);
    setTimeout(()=> el.remove(), 4200);
  }
}

// init
window.addEventListener('load', () => {
  buildGrid();

});
