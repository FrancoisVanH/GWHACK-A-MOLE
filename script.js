const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const myPepe = document.querySelectorAll('.pepe');
let lastHole;
let timeUp = false;
let score = 0;
// timer for pepe
function randomTime(min, max) {
return Math.round(Math.random() * (max - min) + min);
}
// where pepe
function randomHole(holes) {
const idx = Math.floor(Math.random() * holes.length);
const hole = holes[idx];
if (hole === lastHole) {
return randomHole(holes);
}
lastHole = hole;
return hole;
}
// when pepe
function peep() {
const time = randomTime(350, 850);
const hole = randomHole(holes);
hole.classList.add('up');
setTimeout(() => {
hole.classList.remove('up');
if (!timeUp) peep();
}, time);
}
// start game
function startGame() {
scoreBoard.textContent = 0;
timeUp = false;
score = 0;
peep();
setTimeout(() => timeUp = true, 10000)
}
// add points on click of pepe
function whack(e) {
if(!e.isTrusted) return;
score++;
this.parentNode.classList.remove('up');
scoreBoard.textContent = score;
}
myPepe.forEach(pepe => pepe.addEventListener('click', whack));