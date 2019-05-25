//   document.querySelectorAll("div.gameMap div").forEach(function(div) {
//     div.remove();
//   });
//   document.querySelector("div.gameMap").remove();
//   const newGameMap = document.createElement("div");
//   document.body.appendChild(newGameMap);
//   newGameMap.classList.add("gameMap");

// CREATION OF MAP AND ITS BORDERS
// in constructor necessary property of map width

const map = new GameMap(6);
map.createMap();
map.mapMovement();
map.location.style.backgroundColor = "rgb(9, 5, 46)";
map.location.style.backgroundImage = "url(img/stars2.gif)";

document.querySelector("div.score").style.color = "white";
document.querySelector("div.hp").style.color = "white";
document.querySelector("div.hp div").style.borderColor = "white";
document.querySelector("div.mp").style.color = "white";
document.querySelector("div.mp div").style.borderColor = "white";

// CREATION OF MAP ELEMENTS
// createMapElement(elementHeight, elementWidth, bottom, left, imageName)

// ground
map.createMapElement(10, 200, 0, 0, "grass2.jpg");
map.createMapElement(10, 37, 50, 0, "grass2.jpg");
map.createMapElement(10, 37, 50, 53, "grass2.jpg");
map.createMapElement(10, 30, 10, 30, "grass2.jpg");
map.createMapElement(10, 10, 40, 90, "grass2.jpg");
map.createMapElement(10, 10, 30, 100, "grass2.jpg");
map.createMapElement(10, 10, 20, 110, "grass2.jpg");
map.createMapElement(10, 10, 10, 120, "grass2.jpg");
map.createMapElement(10, 30, 20, 160, "grass2.jpg");
map.createMapElement(10, 50, 0, 220, "grass2.jpg");
map.createMapElement(10, 70, 0, 290, "grass2.jpg");
map.createMapElement(10, 10, 10, 340, "grass2.jpg");
map.createMapElement(10, 25, 40, 210, "grass2.jpg");
map.createMapElement(10, 115, 40, 255, "grass2.jpg");
map.createMapElement(10, 10, 10, 240, "grass2.jpg");
map.createMapElement(10, 10, 50, 310, "grass2.jpg");
map.createMapElement(10, 10, 60, 320, "grass2.jpg");
map.createMapElement(10, 10, 70, 330, "grass2.jpg");
map.createMapElement(10, 60, 80, 340, "grass2.jpg");
map.createMapElement(10, 60, 40, 390, "grass2.jpg");
map.createMapElement(10, 100, 0, 460, "grass2.jpg");
// 1st level
// map.createMapElement(10, 10, 20, 40, "grass.jpg");
// 2st level

// MAP AMBIENT SPAWNING

// palms
// constructor(x = 0, y = 0, width = 0, map)

// const palm0 = new PalmTree(422.5, 10, 20, map);
// palm0.createElement("", "url(img/palm.png");
// palm0.doWhatPalmTreesDo();

// const palm1 = new PalmTree(482.5, 10, 20, map);
// palm1.createElement("", "url(img/palm.png");
// palm1.doWhatPalmTreesDo();

// const palm2 = new PalmTree(202.5, 10, 20, map);
// palm2.createElement("", "url(img/palm.png");
// palm2.doWhatPalmTreesDo();

// const palm3 = new PalmTree(770, 50, 20, map);
// palm3.createElement("", "url(img/palm.png");
// palm3.doWhatPalmTreesDo();

// const palm4 = new PalmTree(880, 40, 20, map);
// palm4.createElement("", "url(img/palm.png");
// palm4.doWhatPalmTreesDo();

// bushes
// constructor(x = 0, y = 0, width = 0, height = 0, map)

// const bush0 = new Element(180.5, 10, 5, 5, map);
// bush0.createElement("", "url(img/bush.png)");
// const bush1 = new Element(190.5, 10, 3, 3, map);
// bush1.createElement("", "url(img/bush.png)");

// shrooms

const mushroom0 = new Element(5, 60, 30, 30, map);
mushroom0.createElement("", "url(img/mushroom2.gif)");
const mushroom1 = new Element(70, 60, 10, 15, map);
mushroom1.createElement("", "url(img/mushroom.gif)");
const mushroom2 = new Element(155, 30, 30, 30, map);
mushroom2.createElement("", "url(img/mushroom2.gif)");
mushroom2.element.style.transform = "rotateY(180deg)";
const mushroom3 = new Element(220, 25, 10, 15, map);
mushroom3.createElement("", "url(img/mushroom.gif)");
mushroom3.element.style.transform = "rotateX(180deg)";
const mushroom4 = new Element(260, 50, 30, 30, map);
mushroom4.createElement("", "url(img/mushroom2.gif)");

// Items spawning

// constructor(x = 0, y = 0, width = 0, height = 0)

// const stick = new Element(130, 60, 8, 8, map);
// stick.createElement("", "url(img/stick.png)", "stick");
// stick.gravity();
// stick.slowUpAndDown(-15);
// stick.pushPosition();

const portal = new Element(510, 10, 20, 20, map);
portal.createElement("", "url(img/portal.gif)", "portal");
portal.pushPosition();

// const portal = new Element(940, 40, 20, 20, map);
// portal.createElement("", "url(img/portalRed.gif)", "portal");
// portal.pushPosition();

// Trampolines
// constructor(x = 0, y = 0, width = 0, height = 0, map)

const trampoline0 = new Trampoline(40, 20, 10, 15, map);
trampoline0.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline0.pushPosition(trampoline0);

const trampoline1 = new Trampoline(240, 20, 10, 15, map);
trampoline1.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline1.pushPosition(trampoline1);
// const trampoline2 = new Trampoline(60, 50, 10, 15, map);
// trampoline2.createElement("", "url(img/trampolineInactive.png)", "trampoline");
// trampoline2.pushPosition(trampoline2);
// const trampoline3 = new Trampoline(80, 70, 10, 15, map);
// trampoline3.createElement("", "url(img/trampolineInactive.png)", "trampoline");
// trampoline3.pushPosition(trampoline3);
// const trampoline4 = new Trampoline(120, 70, 10, 15, map);
// trampoline4.createElement("", "url(img/trampolineInactive.png)", "trampoline");
// trampoline4.pushPosition(trampoline4);

// Cookies
// constructor(x = 0, y = 0, map)

const cookie0 = new Cookie(112, 10, map);

cookie0.cookieCreation();
cookie0.pushPosition();
cookie0.slowUpAndDown(-25);

const cookie1 = new Cookie(178, 30, map);

cookie1.cookieCreation();
cookie1.pushPosition();
cookie1.slowUpAndDown(-25);

const cookie2 = new Cookie(343, 20, map);

cookie2.cookieCreation();
cookie2.pushPosition();
cookie2.slowUpAndDown(-25);

const cookie3 = new Cookie(343, 50, map);

cookie3.cookieCreation();
cookie3.pushPosition();
cookie3.slowUpAndDown(-25);

// const cookie4 = new Cookie(142, 80, map);

// cookie4.cookieCreation();
// cookie4.pushPosition();
// cookie4.slowUpAndDown(-25);

// const cookie5 = new Cookie(162, 60, map);

// cookie5.cookieCreation();
// cookie5.pushPosition();
// cookie5.slowUpAndDown(-25);

// const cookie6 = new Cookie(342, 60, map);

// cookie6.cookieCreation();
// cookie6.pushPosition();
// cookie6.slowUpAndDown(-25);

// const cookie7 = new Cookie(342, 40, map);

// cookie7.cookieCreation();
// cookie7.pushPosition();
// cookie7.slowUpAndDown(-25);

// const cookie8 = new Cookie(342, 20, map);

// cookie8.cookieCreation();
// cookie8.pushPosition();
// cookie8.slowUpAndDown(-25);

// const cookie9 = new Cookie(552, 60, map);

// const cookie10 = new Cookie(748, 60, map);

// cookie10.cookieCreation();
// cookie10.pushPosition();
// cookie10.slowUpAndDown(-25);

// const cookie11 = new Cookie(832, 30, map);

// cookie11.cookieCreation();
// cookie11.pushPosition();
// cookie11.slowUpAndDown(-25);

// clouds
//  x , y , width , speed , map

// const cloud0 = new Cloud(100, 80, 300, 2, map);
// cloud0.createElement("", "url(img/cloud.png)");
// cloud0.doWhatCloudsDo();

// const cloud1 = new Cloud(200, 60, 150, 1, map);
// cloud1.createElement("", "url(img/cloud.png)");
// cloud1.doWhatCloudsDo();

// const cloud2 = new Cloud(155, 70, 140, 2, map);
// cloud2.createElement("", "url(img/cloud.png)");
// cloud2.doWhatCloudsDo();

// const cloud3 = new Cloud(-50, 65, 170, 1, map);
// cloud3.createElement("", "url(img/cloud.png)");
// cloud3.doWhatCloudsDo();

// const cloud4 = new Cloud(120, 75, 130, 2.5, map);
// cloud4.createElement("", "url(img/cloud.png)");
// cloud4.doWhatCloudsDo();

// const cloud5 = new Cloud(280, 75, 200, 2, map);
// cloud5.createElement("", "url(img/cloud.png)");
// cloud5.doWhatCloudsDo();

// const cloud6 = new Cloud(380, 55, 220, 1.5, map);
// cloud6.createElement("", "url(img/cloud.png)");
// cloud6.doWhatCloudsDo();

// const cloud7 = new Cloud(420, 85, 160, 2, map);
// cloud7.createElement("", "url(img/cloud.png)");
// cloud7.doWhatCloudsDo();

// const cloud8 = new Cloud(460, 75, 190, 2.5, map);
// cloud8.createElement("", "url(img/cloud.png)");
// cloud8.doWhatCloudsDo();

// const cloud9 = new Cloud(550, 70, 200, 1, map);
// cloud9.createElement("", "url(img/cloud.png)");
// cloud9.doWhatCloudsDo();

// const cloud10 = new Cloud(590, 65, 150, 2, map);
// cloud10.createElement("", "url(img/cloud.png)");
// cloud10.doWhatCloudsDo();

// const cloud11 = new Cloud(580, 80, 170, 2.5, map);
// cloud11.createElement("", "url(img/cloud.png)");
// cloud11.doWhatCloudsDo();

// ENEMY SPAWNING
// constructor(x = 0, y = 0, width = 0, height = 0, map, enemyNumber)
// enemies constructor requieres additional value (number), different for each enemy

const enemy0 = new Enemy(
  60,
  20,
  12,
  8,
  map,
  1,
  "url(img/snailDark.png)",
  "url(img/snailDarkElectric.gif)"
);
enemy0.createElement("", "url(img/snailDark.png)", "snail");
enemy0.gravity();
enemy0.pushPosition(enemy0);
enemy0.movement("right");

const enemy1 = new Enemy(
  150,
  20,
  12,
  8,
  map,
  2,
  "url(img/snailDark.png)",
  "url(img/snailDarkElectric.gif)"
);
enemy1.createElement("", "url(img/snailDark.png)", "snail");
enemy1.gravity();
enemy1.pushPosition(enemy1);
enemy1.movement("right");

const enemy2 = new Enemy(
  210,
  60,
  12,
  8,
  map,
  3,
  "url(img/snailDark.png)",
  "url(img/snailDarkElectric.gif)"
);
enemy2.createElement("", "url(img/snailDark.png)", "snail");
enemy2.gravity();
enemy2.pushPosition(enemy2);
enemy2.movement("right");

const enemy3 = new Enemy(
  350,
  110,
  12,
  8,
  map,
  4,
  "url(img/snailDark.png)",
  "url(img/snailDarkElectric.gif)"
);

const enemy4 = new Enemy(
  380,
  110,
  12,
  8,
  map,
  5,
  "url(img/snailDark.png)",
  "url(img/snailDarkElectric.gif)"
);

const enemy5 = new Enemy(
  320,
  20,
  12,
  8,
  map,
  6,
  "url(img/snailDark.png)",
  "url(img/snailDarkElectric.gif)"
);
enemy5.createElement("", "url(img/snailDark.png)", "snail");
enemy5.gravity();
enemy5.pushPosition(enemy5);
enemy5.movement("right");

const enemy6 = new Enemy(
  460,
  20,
  36,
  24,
  map,
  7,
  "url(img/snailDark.png)",
  "url(img/snailDarkElectric.gif)"
);
enemy6.createElement("", "url(img/snailDark.png)", "snail");
enemy6.gravity();
enemy6.pushPosition(enemy6);
enemy6.movement();

const enemy7 = new Enemy(
  540,
  20,
  36,
  24,
  map,
  8,
  "url(img/snailDark.png)",
  "url(img/snailDarkElectric.gif)"
);
enemy7.createElement("", "url(img/snailDark.png)", "snail");
enemy7.gravity();
enemy7.pushPosition(enemy7);
enemy7.movement();

//PLAYER SPAWNING (x,y)

const player = new Player(5, 20, map);
player.createPlayer();

//GRAVITY INTERVAL

player.gravity();

// SCRIPTED INFO

// TEMPLATE FOR POP-UPS
// firstly it's necessary to set a variable of the  info to false, later in the code it will be turn to true - it's its flag

let info0 = false;
let info1 = false;
let info2 = false;

setInterval(function() {
  if (player.position[3][1] > 100 && info0 === false) {
    info0 = true;
    show("Daaaamn...", "That is something...<br>Different.", 5);
  }
  if (player.position[3][1] > 1900 && info1 === false) {
    info1 = true;
    enemy3.createElement("", "url(img/snailDark.png)", "snail");
    enemy3.gravity();
    enemy3.pushPosition(enemy3);
    enemy3.movementAlternative();
    enemy4.createElement("", "url(img/snailDark.png)", "snail");
    enemy4.gravity();
    enemy4.pushPosition(enemy4);
    enemy4.movementAlternative();
  }
  if (player.position[3][1] > 2700 && info2 === false) {
    info2 = true;
    show("Holaaa", "How come they grow like that?!");
  }
}, 500);
