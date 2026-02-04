const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const hearts = document.getElementById("hearts");
const delayedText = document.getElementById("delayed-text");

// No button runaway
function moveNo() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

// Time-based message (after 5 sec)
setTimeout(() => {
  delayedText.innerText = "I was scared to ask… but here I am 😌";
}, 5000);

// Flying hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

// YES click → Memory Mode
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="final">
      <p>I met you ❤️</p>
      <p>I smiled 😊</p>
      <p>I fell for you 💖</p>
      <br>
      <p>This page exists only for you.</p>
      <p>Please screenshot this moment 📸</p>
      <br>
      <p>Love you forever ♾️</p>
    </div>
  `;
});
