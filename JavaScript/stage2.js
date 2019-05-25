//   document.querySelectorAll("div.gameMap div").forEach(function(div) {
//     div.remove();
//   });
//   document.querySelector("div.gameMap").remove();
//   const newGameMap = document.createElement("div");
//   document.body.appendChild(newGameMap);
//   newGameMap.classList.add("gameMap");

// CREATION OF MAP AND ITS BORDERS
// in constructor necessary property of map width

const map = new GameMap(9);
map.createMap();
map.mapMovement();

// CREATION OF MAP ELEMENTS
// createMapElement(elementHeight, elementWidth, bottom, left, imageName)

// ground
map.createMapElement(10, 30, 0, 0, "grass.jpg");
// 1st level
map.createMapElement(10, 10, 20, 40, "grass.jpg");
// 2st level
map.createMapElement(10, 10, 40, 60, "grass.jpg");
// 3rd level
map.createMapElement(10, 10, 60, 80, "grass.jpg");
// 4th level
map.createMapElement(10, 10, 80, 100, "grass.jpg");

map.createMapElement(10, 10, 60, 120, "grass.jpg");

map.createMapElement(10, 10, 40, 140, "grass.jpg");

map.createMapElement(10, 10, 20, 160, "grass.jpg");

map.createMapElement(10, 50, 0, 180, "grass.jpg");

map.createMapElement(10, 90, 0, 230, "soil.jpg");
map.createMapElement(10, 10, 10, 230, "grass.jpg");

map.createMapElement(10, 80, 10, 240, "soil.jpg");
map.createMapElement(10, 10, 20, 240, "grass.jpg");

map.createMapElement(10, 70, 20, 250, "soil.jpg");
map.createMapElement(10, 10, 30, 250, "grass.jpg");

map.createMapElement(10, 60, 30, 260, "soil.jpg");
map.createMapElement(10, 10, 40, 260, "grass.jpg");

map.createMapElement(10, 50, 40, 270, "soil.jpg");
map.createMapElement(10, 10, 50, 270, "grass.jpg");

map.createMapElement(10, 40, 50, 280, "soil.jpg");
map.createMapElement(10, 10, 60, 280, "grass.jpg");

map.createMapElement(10, 30, 60, 290, "soil.jpg");
map.createMapElement(10, 10, 70, 290, "grass.jpg");

map.createMapElement(10, 20, 70, 300, "soil.jpg");
map.createMapElement(10, 20, 80, 300, "grass.jpg");

map.createMapElement(10, 80, -30, 320, "grass.jpg");
map.createMapElement(30, 10, -30, 310, "soil.jpg");
map.createMapElement(30, 10, -30, 400, "soil.jpg");

map.createMapElement(10, 220, 0, 400, "grass.jpg");
map.createMapElement(10, 60, 20, 640, "grass.jpg");
map.createMapElement(10, 40, 40, 700, "grass.jpg");
map.createMapElement(10, 40, 40, 760, "grass.jpg");
map.createMapElement(10, 10, 0, 830, "grass.jpg");
map.createMapElement(10, 90, 30, 865, "grass.jpg");

// MAP AMBIENT SPAWNING

// palms
// constructor(x = 0, y = 0, width = 0, map)

const palm0 = new PalmTree(422.5, 10, 20, map);
palm0.createElement("", "url(img/palm.png");
palm0.doWhatPalmTreesDo();

const palm1 = new PalmTree(482.5, 10, 20, map);
palm1.createElement("", "url(img/palm.png");
palm1.doWhatPalmTreesDo();

const palm2 = new PalmTree(202.5, 10, 20, map);
palm2.createElement("", "url(img/palm.png");
palm2.doWhatPalmTreesDo();

const palm3 = new PalmTree(770, 50, 20, map);
palm3.createElement("", "url(img/palm.png");
palm3.doWhatPalmTreesDo();

const palm4 = new PalmTree(880, 40, 20, map);
palm4.createElement("", "url(img/palm.png");
palm4.doWhatPalmTreesDo();

// bushes
// constructor(x = 0, y = 0, width = 0, height = 0, map)

const bush0 = new Element(180.5, 10, 5, 5, map);
bush0.createElement("", "url(img/bush.png)");
const bush1 = new Element(190.5, 10, 3, 3, map);
bush1.createElement("", "url(img/bush.png)");

// Items spawning

// constructor(x = 0, y = 0, width = 0, height = 0)

// const stick = new Element(130, 60, 8, 8, map);
// stick.createElement("", "url(img/stick.png)", "stick");
// stick.gravity();
// stick.slowUpAndDown(-15);
// stick.pushPosition();

// const portal = new Element(300, 15, 20, 20, map);
// portal.createElement("", "url(img/portal.gif)", "portal");
// portal.pushPosition();
const portal = new Element(940, 40, 20, 20, map);
portal.createElement("", "url(img/portalRed.gif)", "portal");
portal.pushPosition();

// Trampolines
// constructor(x = 0, y = 0, width = 0, height = 0, map)

const trampoline0 = new Trampoline(20, 10, 10, 15, map);
trampoline0.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline0.pushPosition(trampoline0);

const trampoline1 = new Trampoline(40, 30, 10, 15, map);
trampoline1.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline1.pushPosition(trampoline1);
const trampoline2 = new Trampoline(60, 50, 10, 15, map);
trampoline2.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline2.pushPosition(trampoline2);
const trampoline3 = new Trampoline(80, 70, 10, 15, map);
trampoline3.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline3.pushPosition(trampoline3);
const trampoline4 = new Trampoline(120, 70, 10, 15, map);
trampoline4.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline4.pushPosition(trampoline4);
const trampoline5 = new Trampoline(140, 50, 10, 15, map);
trampoline5.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline5.pushPosition(trampoline5);
const trampoline6 = new Trampoline(160, 30, 10, 15, map);
trampoline6.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline6.pushPosition(trampoline6);
const trampoline7 = new Trampoline(330, -20, 10, 15, map);
trampoline7.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline7.pushPosition(trampoline7);
const trampoline8 = new Trampoline(340, -20, 10, 15, map);
trampoline8.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline8.pushPosition(trampoline8);
const trampoline9 = new Trampoline(350, -20, 10, 15, map);
trampoline9.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline9.pushPosition(trampoline9);
const trampoline10 = new Trampoline(360, -20, 10, 15, map);
trampoline10.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline10.pushPosition(trampoline10);
const trampoline11 = new Trampoline(370, -20, 10, 15, map);
trampoline11.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline11.pushPosition(trampoline11);
const trampoline12 = new Trampoline(380, -20, 10, 15, map);
trampoline12.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline12.pushPosition(trampoline12);
const trampoline13 = new Trampoline(390, -20, 10, 15, map);
trampoline13.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline13.pushPosition(trampoline13);
const trampoline14 = new Trampoline(320, -20, 10, 15, map);
trampoline14.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline14.pushPosition(trampoline14);
const trampoline15 = new Trampoline(610, 10, 10, 15, map);
trampoline15.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline15.pushPosition(trampoline15);
const trampoline16 = new Trampoline(830, 10, 10, 15, map);
trampoline16.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline16.pushPosition(trampoline16);

// Cookies
// constructor(x = 0, y = 0, map)

const cookie0 = new Cookie(42, 60, map);

cookie0.cookieCreation();
cookie0.pushPosition();
cookie0.slowUpAndDown(-25);

const cookie1 = new Cookie(62, 80, map);

cookie1.cookieCreation();
cookie1.pushPosition();
cookie1.slowUpAndDown(-25);

const cookie2 = new Cookie(82, 95, map);

cookie2.cookieCreation();
cookie2.pushPosition();
cookie2.slowUpAndDown(-25);

const cookie3 = new Cookie(122, 95, map);

cookie3.cookieCreation();
cookie3.pushPosition();
cookie3.slowUpAndDown(-25);

const cookie4 = new Cookie(142, 80, map);

cookie4.cookieCreation();
cookie4.pushPosition();
cookie4.slowUpAndDown(-25);

const cookie5 = new Cookie(162, 60, map);

cookie5.cookieCreation();
cookie5.pushPosition();
cookie5.slowUpAndDown(-25);

const cookie6 = new Cookie(342, 60, map);

cookie6.cookieCreation();
cookie6.pushPosition();
cookie6.slowUpAndDown(-25);

const cookie7 = new Cookie(342, 40, map);

cookie7.cookieCreation();
cookie7.pushPosition();
cookie7.slowUpAndDown(-25);

const cookie8 = new Cookie(342, 20, map);

cookie8.cookieCreation();
cookie8.pushPosition();
cookie8.slowUpAndDown(-25);

const cookie9 = new Cookie(552, 60, map);

const cookie10 = new Cookie(748, 60, map);

cookie10.cookieCreation();
cookie10.pushPosition();
cookie10.slowUpAndDown(-25);

const cookie11 = new Cookie(832, 30, map);

cookie11.cookieCreation();
cookie11.pushPosition();
cookie11.slowUpAndDown(-25);

// clouds
//  x , y , width , speed , map

const cloud0 = new Cloud(100, 80, 300, 2, map);
cloud0.createElement("", "url(img/cloud.png)");
cloud0.doWhatCloudsDo();

const cloud1 = new Cloud(200, 60, 150, 1, map);
cloud1.createElement("", "url(img/cloud.png)");
cloud1.doWhatCloudsDo();

const cloud2 = new Cloud(155, 70, 140, 2, map);
cloud2.createElement("", "url(img/cloud.png)");
cloud2.doWhatCloudsDo();

const cloud3 = new Cloud(-50, 65, 170, 1, map);
cloud3.createElement("", "url(img/cloud.png)");
cloud3.doWhatCloudsDo();

const cloud4 = new Cloud(120, 75, 130, 2.5, map);
cloud4.createElement("", "url(img/cloud.png)");
cloud4.doWhatCloudsDo();

const cloud5 = new Cloud(280, 75, 200, 2, map);
cloud5.createElement("", "url(img/cloud.png)");
cloud5.doWhatCloudsDo();

const cloud6 = new Cloud(380, 55, 220, 1.5, map);
cloud6.createElement("", "url(img/cloud.png)");
cloud6.doWhatCloudsDo();

const cloud7 = new Cloud(420, 85, 160, 2, map);
cloud7.createElement("", "url(img/cloud.png)");
cloud7.doWhatCloudsDo();

const cloud8 = new Cloud(460, 75, 190, 2.5, map);
cloud8.createElement("", "url(img/cloud.png)");
cloud8.doWhatCloudsDo();

const cloud9 = new Cloud(550, 70, 200, 1, map);
cloud9.createElement("", "url(img/cloud.png)");
cloud9.doWhatCloudsDo();

const cloud10 = new Cloud(590, 65, 150, 2, map);
cloud10.createElement("", "url(img/cloud.png)");
cloud10.doWhatCloudsDo();

const cloud11 = new Cloud(580, 80, 170, 2.5, map);
cloud11.createElement("", "url(img/cloud.png)");
cloud11.doWhatCloudsDo();

// ENEMY SPAWNING
// constructor(x = 0, y = 0, width = 0, height = 0, map, enemyNumber)
// enemies constructor requieres additional value (number), different for each enemy

const enemy0 = new Enemy(530, 50, 12, 8, map, 1);
// enemy0.createElement("", "url(img/snail.png)", "snail");
// enemy0.gravity();
// enemy0.pushPosition(enemy0);
// enemy0.movement("right");

const enemy1 = new Enemy(670, 50, 12, 8, map, 2);
enemy1.createElement("", "url(img/snail.png)", "snail");
enemy1.gravity();
enemy1.pushPosition(enemy1);
enemy1.movement("right");

const enemy2 = new Enemy(720, 80, 12, 8, map, 3);
enemy2.createElement("", "url(img/snail.png)", "snail");
enemy2.gravity();
enemy2.pushPosition(enemy2);
enemy2.movement("right");

//PLAYER SPAWNING (x,y)

const player = new Player(5, 100, map);
player.createPlayer();

//GRAVITY INTERVAL

player.gravity();

// SCRIPTED INFO

let info0 = false;
let info1 = false;
let info2 = false;
let info3 = false;
let info4 = false;
let info5 = false;

setInterval(function() {
  if (player.position[3][1] > 100 && info0 === false) {
    info0 = true;
    show(
      "More trampolines!",
      "Yeah eating is fine, but let's burn some calories now.",
      5
    );
  }
  if (player.position[3][1] > 2100 && info1 === false) {
    info1 = true;
    show(
      "Wow! Cookies!!",
      "...and a freaking huge hole. You'd better jump over it, okay?",
      4
    );
  }
  if (player.position[3][1] > 2500 && info2 === false) {
    info2 = true;
    show("Lol", "Jokes on u.");
  }

  if (player.position[3][1] > 3200 && info3 === false) {
    info3 = true;
    show(
      "Hey! A snail!",
      "Secondary characters are very important aspect of Potato World. Let's meet a new friend!",
      5
    );
    enemy0.createElement("", "url(img/snail.png)", "snail");
    enemy0.gravity();
    enemy0.pushPosition(enemy0);
    enemy0.movement("left");
  }

  if (info3 == true && enemy0.position[3][1] < 3250 && info4 === false) {
    info4 = true;
    show(
      "Damn it.",
      "I would never think it could end up like this. What an unfriendly guy. Here, have a cookie. It will restore some of the health you've lost.",
      7
    );

    cookie9.cookieCreation();
    cookie9.pushPosition();
    cookie9.slowUpAndDown(-25);
    cookie9.gravity();
  }
  if (player.position[3][1] > 6100 && info5 === false) {
    info5 = true;
    show("This portal...", "It seems to look different from the other one.");
  }
}, 500);
