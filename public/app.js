
const canvas = document.querySelector("#canvas").getContext("2d");

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  const myRect = canvas.canvas.getBoundingClientRect();

  return {
    left: rect.left - myRect.left,
    top: rect.top - myRect.top,
    bottom: rect.bottom - myRect.top,
    right: rect.right - myRect.left,
  };
  // return rect;
}

function randomDiv() {
  const matches = document.querySelectorAll("img, p, h1, h2, h3, h4");
  const index = Math.floor(Math.random() * matches.length);
  return matches[index];
}

function ensureSize() {
  canvas.canvas.width = canvas.canvas.clientWidth;
  canvas.canvas.height = canvas.canvas.clientHeight;
}

function clear() {
  canvas.clearRect(
    0,
    0,
    canvas.canvas.width,
    canvas.canvas.height
    );
}

function load(evt) {
  draw();
}

function draw() {
  const div = randomDiv();
  window.specdiv = div;
  const offset = getOffset(div);
  ensureSize();
  clear();
  canvas.fillStyle = "white";
  canvas.fillRect(
    offset.left,
    offset.top,
    // 10,
    // 10
    offset.right - offset.left,
    offset.bottom - offset.top
    );
}

addEventListener("load", load);