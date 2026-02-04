const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const music = document.getElementById("bg-music");

// Make sure music is ready
music.volume = 0.5;

// NO texts (5 unique)
const noTexts = [
  "Soch lo na 😌",
  "Itni jaldi mana mat karo 💕",
  "Main wait kar sakta hoon 🙂",
  "Ek baar dil se pooch lo ❤️",
  "Theek hai… jo bhi tumhara decision ho 🕊️"
];
let noCount = 0;

// Function to start music safely
function startMusic() {
  if (music.paused) {
    music.play().catch(() => {
      console.log("User interaction needed for audio");
    });
  }
}

// NO button logic
function handleNo() {
  startMusic(); // 🔥 music starts here too

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  if (noCount < noTexts.length) {
    message.innerText = noTexts[noCount];
    noCount++;
  } else {
    message.innerText = "I respect your choice 🙂";
  }
}

// YES click
yesBtn.addEventListener("click", () => {
  startMusic(); // 🔥 music definitely starts

  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      background:linear-gradient(135deg,#ff758c,#ff7eb3);
      color:white;
      font-family:Arial;
      text-align:center;
      padding:20px;
    ">
      <h1>I met you ❤️</h1>
      <h1>I smiled 😊</h1>
      <h1>I fell for you 💖</h1>

      <p style="margin-top:20px;font-size:18px;">
        This page exists only for you.
      </p>

      <p style="font-size:18px;">
        Please screenshot this moment 📸
      </p>

      <h2 style="margin-top:25px;">
        Love you forever ♾️
      </h2>
    </div>
  `;
});

// NO events
noBtn.addEventListener("click", handleNo);
noBtn.addEventListener("mouseover", handleNo);
noBtn.addEventListener("touchstart", handleNo);

// Flying hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 350);
