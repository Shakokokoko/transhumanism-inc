(() => {
  const track = document.getElementById("experienceTrack");
  if (!track) return;
  const cards = Array.from(track.querySelectorAll(".experience-card"));
  const prev = document.querySelector(".experience-prev");
  const next = document.querySelector(".experience-next");
  let activeCard = null;

  function focusCard(card, shouldCenter = true) {
    if (!card) return;
    cards.forEach(item => item.classList.toggle("is-focused", item === card));
    activeCard = card;
    if (shouldCenter) {
      card.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest", inline: "center" });
    }
  }

  cards.forEach(card => {
    card.addEventListener("pointerenter", () => focusCard(card));
    card.addEventListener("focusin", () => focusCard(card));
    card.addEventListener("click", () => focusCard(card));
  });

  function move(direction) {
    const currentIndex = Math.max(0, cards.indexOf(activeCard));
    const nextIndex = Math.min(cards.length - 1, Math.max(0, currentIndex + direction));
    focusCard(cards[nextIndex]);
  }
  prev?.addEventListener("click", () => move(-1));
  next?.addEventListener("click", () => move(1));

  track.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
  });

  if (cards.length) focusCard(cards[1] || cards[0], false);
})();