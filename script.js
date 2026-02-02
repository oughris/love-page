const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".question").innerText = "Yaaay 💖 I knew it!";
});
