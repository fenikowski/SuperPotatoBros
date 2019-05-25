//music object + sounds
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  };
  this.stop = function() {
    this.sound.pause();
  };
}

const dragonBite = new sound("mp3/dragonBite.mp3");
const fizzle = new sound("mp3/fizzle.mp3");
const chaChing = new sound("mp3/chaChing.mp3");
const firemp3 = new sound("mp3/fire.mp3");
const snailDeathmp3 = new sound("mp3/SnailDeath.mp3");
