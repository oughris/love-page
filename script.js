const noBtn = document.querySelector(".no-btn");
const container = document.querySelector(".btn-group");
const yesBtn = document.querySelector(".yes-btn");

noBtn.addEventListener("mouseenter", () => {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".question").innerText = "Yaaay 💖 I knew it!";
});

