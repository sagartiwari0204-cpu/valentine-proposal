const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const hearts = document.getElementById("hearts");

// No button bhagta rahega
noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("mouseover", moveNo);

function moveNo() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Yes click
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1 style="color:white;text-align:center;margin-top:40vh;">
      I knew it 💖😍 <br> Love you forever ♾️
    </h1>`;
});

// Flying hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);
