const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const music = document.getElementById("bg-music");
const main = document.getElementById("main");
const finalScreen = document.getElementById("final-screen");

music.volume = 0.5;

const noMessages = [
  "Soch lo na 😌",
  "Itni jaldi mana mat karo 💕",
  "Main wait kar sakta hoon 🙂",
  "Dil se pooch lo ❤️",
  "Theek hai… jo tum chaho 🕊️"
];

let noCount = 0;

function startMusic() {
  if (music.paused) {
    music.play().catch(() => {});
  }
}

// NO button
function handleNo() {
  startMusic();

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  if (noCount < noMessages.length) {
    message.innerText = noMessages[noCount];
    noCount++;
  }
}

noBtn.addEventListener("click", handleNo);
noBtn.addEventListener("mouseover", handleNo);
noBtn.addEventListener("touchstart", handleNo);

// YES button
yesBtn.addEventListener("click", () => {
  startMusic();

  main.style.display = "none";

  finalScreen.style.display = "flex";
  finalScreen.style.height = "100vh";
  finalScreen.style.flexDirection = "column";
  finalScreen.style.alignItems = "center";
  finalScreen.style.justifyContent = "center";
  finalScreen.style.color = "white";
  finalScreen.style.textAlign = "center";

  finalScreen.innerHTML = `
    <h1>I met you ❤️</h1>
    <h1>I smiled 😊</h1>
    <h1>I fell for you 💖</h1>
    <p style="margin-top:20px;">This page exists only for you ✨</p>
    <p>Please screenshot this moment 📸</p>
    <h2 style="margin-top:25px;">I love you forever ♾️</h2>
  `;
});

// hearts animation
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);
