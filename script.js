const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const hearts = document.getElementById("hearts");
const delayedText = document.getElementById("delayed-text");

// No button runaway
function moveNo() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

// Time based message
setTimeout(() => {
  if (delayedText) {
    delayedText.innerText = "I was scared to ask… but here I am 😌";
  }
}, 5000);

// Flying hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 350);

// YES click – FINAL SCREEN (NO OLD TEXT)
yesBtn.addEventListener("click", () => {
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
