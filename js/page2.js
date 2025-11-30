  document.getElementById("logoutBtn").addEventListener("click", () => {
    // Clear all saved progress
    localStorage.clear();

    // Redirect back to intro
    window.location.href = "../index.html";
  });


  (function () {
    const carousel = document.getElementById('carousel');
    const cards = Array.from(carousel.querySelectorAll('.card'));
    let activeIndex = 1; // start near center visually

    // utility: center active card in carousel container
    function centerActiveCard(animate = true) {
      const activeCard = cards[activeIndex];
      if (!activeCard) return;
      const containerRect = carousel.getBoundingClientRect();
      const cardRect = activeCard.getBoundingClientRect();
      const offset = (cardRect.left + cardRect.width/2) - (containerRect.left + containerRect.width/2);
      if (!animate) carousel.style.transition = 'none';
      carousel.style.transform = `translateX(${-offset}px)`;
      if (!animate) {
        // force reflow and restore
        void carousel.offsetWidth;
        carousel.style.transition = '';
      }
    }

    // update classes for active/adj
    function updateClasses() {
      cards.forEach((c, i) => {
        c.classList.remove('active', 'adj');
        if (i === activeIndex) c.classList.add('active');
        else if (i === activeIndex - 1 || i === activeIndex + 1) c.classList.add('adj');
      });
      centerActiveCard();
    }

    // move function
    function move(delta) {
      const newIndex = Math.max(0, Math.min(cards.length - 1, activeIndex + delta));
      if (newIndex === activeIndex) return;
      activeIndex = newIndex;
      updateClasses();
    }

    // click handler: center or open if active
    cards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        if (idx === activeIndex) {
          const link = card.dataset.link;
          if (link) window.location.href = link;
        } else {
          activeIndex = idx;
          updateClasses();
        }
      });
    });

    // keyboard navigation: ArrowLeft / ArrowRight and '<' / '>'
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === '<') move(-1);
      if (e.key === 'ArrowRight' || e.key === '>') move(1);
      if (e.key === 'Enter') {
        const cur = cards[activeIndex];
        if (cur && cur.dataset.link) window.location.href = cur.dataset.link;
      }
    });

    // touch support: swipe left/right
    let startX = 0;
    carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      if (endX - startX > 50) move(-1);
      else if (startX - endX > 50) move(1);
    });

    // --- INTRO SEQUENCE & SPARKLES ---
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');
    const third = document.getElementById('thirdline');
    const sparklesContainer = document.getElementById('sparkles');

    // generate soft sparkles behind carousel (a bunch of small circles that float up)
    function makeSparkles(count = 18) {
      const w = sparklesContainer.clientWidth || (document.documentElement.clientWidth - 100);
      const h = sparklesContainer.clientHeight || 260;
      for (let i = 0; i < count; i++) {
        const s = document.createElement('div');
        s.className = 'sparkle';
        // randomize size & position
        const size = 4 + Math.round(Math.random() * 6);
        s.style.width = `${size}px`;
        s.style.height = `${size}px`;
        const left = Math.random() * 100;
        s.style.left = `${left}%`;
        // vertical start (vary -10% to 80%)
        const top = 30 + Math.random() * (h - 30);
        s.style.top = `${top}px`;
        // color variant
        const color = (Math.random() > 0.6) ? 'rgba(255,244,245,0.95)' : 'rgba(255,239,230,0.92)';
        s.style.background = color;
        // animation duration & delay
        const dur = 5 + Math.random() * 6;
        const delay = Math.random() * 1.2;
        s.style.animationDuration = `${dur}s`;
        s.style.animationDelay = `${delay}s`;
        s.style.opacity = 0;
        sparklesContainer.appendChild(s);
      }
    }

    // reveal the carousel with pop animation after intro lines finish
    function revealCarousel() {
      // add .pop class to cards in stagger
      cards.forEach((c, i) => {
        setTimeout(() => c.classList.add('pop'), i * 120);
      });
      // allow small delay then set active & center
      setTimeout(() => {
        updateClasses();
      }, cards.length * 120 + 80);
    }

    // orchestrate sequence:
    // title: 300ms, subtitle: +400ms (700ms), thirdline: +400ms(1100ms),
    // then sparkles start and carousel reveal at ~2000ms total.
    window.addEventListener('load', () => {
      // ensure sparkles container has size then generate
      makeSparkles(20);
      // sequence timing (matches CSS delays)
      setTimeout(() => {
        // third line is already animating via CSS. Wait then reveal sparkles & carousel
      }, 1200);

      // reveal carousel after ~2000ms (slight buffer)
      setTimeout(() => {
        revealCarousel();
      }, 2000);
    });

    // initial classes setup (no active until reveal)
    // center once images load / layout settled
    window.addEventListener('resize', () => {
      centerActiveCard(false);
    });

  })();
