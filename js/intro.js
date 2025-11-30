const yesBtn = document.getElementById("yesBtn");
const unfortunatelyBtn = document.getElementById("unfortunatelyBtn");

// Smooth page transition
function startSurprise() {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "html/page1.html";
  }, 1000);
}

yesBtn.addEventListener("click", startSurprise);
unfortunatelyBtn.addEventListener("click", startSurprise);