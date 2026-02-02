const noBtn = document.querySelector(".no-btn");
const container = document.querySelector(".btn-group");
const yesBtn = document.querySelector(".yes-btn");

noBtn.addEventListener("mouseover", () => {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".question").innerText = "Yaaay 💖 I knew it!";
});
