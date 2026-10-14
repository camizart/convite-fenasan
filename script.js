
const ticket = document.getElementById("ticket");
const scene = document.querySelector(".scene");

let flipped = false;

// Virar o convite ao clicar
ticket.addEventListener("click", () => {
  flipped = !flipped;

  ticket.classList.toggle("flipped", flipped);

  if (flipped) {
    ticket.style.transform = "rotateY(180deg)";
  } else {
    ticket.style.transform = "";
  }
});

// Efeito 3D ao movimentar o mouse
scene.addEventListener("pointermove", (event) => {
  if (flipped) return;
  if (event.pointerType === "touch") return;

  const rect = ticket.getBoundingClientRect();

  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;

  const rotateY = (x - 0.5) * 10;
  const rotateX = (0.5 - y) * 7;

  ticket.style.transform =
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Retornar à posição normal ao tirar o mouse
scene.addEventListener("pointerleave", () => {
  if (!flipped) {
    ticket.style.transform = "";
  }
});
