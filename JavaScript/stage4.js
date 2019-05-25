// CREATION OF MAP AND ITS BORDERS
// in constructor necessary property of map width

const map = new GameMap(5);
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
map.createMapElement(10, 460, 0, 0, "grass2.jpg");
// map.createMapElement(10, 100, 0, 400, "soil2.jpg");
map.createMapElement(10, 150, 40, 0, "grass2.jpg");
map.createMapElement(10, 190, 80, 50, "grass2.jpg");
map.createMapElement(10, 50, 60, 210, "grass2.jpg");
map.createMapElement(10, 70, 40, 210, "grass2.jpg");
map.createMapElement(10, 90, 20, 210, "grass2.jpg");
// map.createMapElement(10, 110, 10, 210, "grass2.jpg");
map.createMapElement(10, 80, 20, 400, "grass2.jpg");
map.createMapElement(10, 80, 40, 420, "grass2.jpg");
map.createMapElement(10, 80, 60, 440, "grass2.jpg");
map.createMapElement(10, 80, 80, 460, "grass2.jpg");
map.createMapElement(10, 550, 100, 0, "grass2.jpg");

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

const mushroom0 = new Element(350, 10, 30, 30, map);
mushroom0.createElement("", "url(img/mushroom2.gif)");
// const mushroom1 = new Element(70, 60, 10, 15, map);
// mushroom1.createElement("", "url(img/mushroom.gif)");
const mushroom2 = new Element(10, 50, 30, 30, map);
mushroom2.createElement("", "url(img/mushroom2.gif)");
mushroom2.element.style.transform = "rotateY(180deg)";
const mushroom3 = new Element(310, 85, 10, 15, map);
mushroom3.createElement("", "url(img/mushroom.gif)");
mushroom3.element.style.transform = "rotateX(180deg)";
const mushroom5 = new Element(370, 88, 8, 12, map);
mushroom5.createElement("", "url(img/mushroom.gif)");
mushroom5.element.style.transform = "rotateX(180deg) rotateY(180deg)";
// const mushroom4 = new Element(260, 50, 30, 30, map);
// mushroom4.createElement("", "url(img/mushroom2.gif)");

// Items spawning

// constructor(x = 0, y = 0, width = 0, height = 0)

// const stick = new Element(130, 60, 8, 8, map);
// stick.createElement("", "url(img/stick.png)", "stick");
// stick.gravity();
// stick.slowUpAndDown(-15);
// stick.pushPosition();

// PORTAL SPAWNING

const portal = new Element(-5, 50, 20, 20, map);
portal.createElement("", "url(img/portal.gif)", "portal");
portal.pushPosition();
portal.element.style.transform = "rotateY(180deg)";

// const portal = new Element(940, 40, 20, 20, map);
// portal.createElement("", "url(img/portalRed.gif)", "portal");
// portal.pushPosition();

// Trampolines
// constructor(x = 0, y = 0, width = 0, height = 0, map)

const trampoline0 = new Trampoline(290, 40, 10, 15, map);

const trampoline1 = new Trampoline(270, 60, 10, 15, map);

const trampoline2 = new Trampoline(250, 80, 10, 15, map);

const trampoline3 = new Trampoline(310, 20, 10, 15, map);

// const trampoline3 = new Trampoline(80, 70, 10, 15, map);
// trampoline3.createElement("", "url(img/trampolineInactive.png)", "trampoline");
// trampoline3.pushPosition(trampoline3);
// const trampoline4 = new Trampoline(120, 70, 10, 15, map);
// trampoline4.createElement("", "url(img/trampolineInactive.png)", "trampoline");
// trampoline4.pushPosition(trampoline4);

// Cookies
// constructor(x = 0, y = 0, map)

// const cookie0 = new Cookie(112, 10, map);

// cookie0.cookieCreation();
// cookie0.pushPosition();
// cookie0.slowUpAndDown(-25);

// const cookie1 = new Cookie(178, 30, map);

// cookie1.cookieCreation();
// cookie1.pushPosition();
// cookie1.slowUpAndDown(-25);

// const cookie2 = new Cookie(343, 20, map);

// cookie2.cookieCreation();
// cookie2.pushPosition();
// cookie2.slowUpAndDown(-25);

// const cookie3 = new Cookie(343, 50, map);

// cookie3.cookieCreation();
// cookie3.pushPosition();
// cookie3.slowUpAndDown(-25);

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

// chili
const chili0 = new Element(350, 50, 7, 7, map);
chili0.createElement("", "url(img/chili.png)", "chili");
chili0.gravity();
chili0.slowUpAndDown(-25);
chili0.pushPosition(chili0);

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
  70,
  10,
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
enemy0.appendHealthBar();
enemy0.movementAlternative("right");

const enemy1 = new Enemy(
  80,
  60,
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
enemy1.movement("left");
enemy1.appendHealthBar();

const enemy2 = new Enemy(
  290,
  30,
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
enemy2.appendHealthBar();

const enemy4 = new Enemy(
  270,
  50,
  12,
  8,
  map,
  4,
  "url(img/snailDark.png)",
  "url(img/snailDarkElectric.gif)"
);
enemy4.createElement("", "url(img/snailDark.png)", "snail");
enemy4.gravity();
enemy4.pushPosition(enemy4);
enemy4.appendHealthBar();

const enemy3 = new Enemy(
  250,
  70,
  12,
  8,
  map,
  5,
  "url(img/snailDark.png)",
  "url(img/snailDarkElectric.gif)"
);
enemy3.createElement("", "url(img/snailDark.png)", "snail");
enemy3.gravity();
enemy3.pushPosition(enemy3);
enemy3.appendHealthBar();

const enemy5 = new Enemy(
  230,
  90,
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
enemy5.appendHealthBar();

const enemy6 = new Enemy(
  460,
  90,
  12,
  8,
  map,
  7,
  "url(img/snailDark.png)",
  "url(img/snailDarkElectric.gif)"
);
enemy6.createElement("", "url(img/snailDark.png)", "snail");
enemy6.gravity();
enemy6.pushPosition(enemy6);
enemy6.element.style.transform = "rotateY(180deg)";
enemy6.appendHealthBar();

const enemy7 = new Enemy(
  440,
  70,
  12,
  8,
  map,
  8,
  "url(img/snailDark.png)",
  "url(img/snailDarkElectric.gif)"
);
enemy7.createElement("", "url(img/snailDark.png)", "snail");
enemy7.gravity();
enemy7.pushPosition(enemy7);
enemy7.element.style.transform = "rotateY(180deg)";
enemy7.appendHealthBar();

const enemy8 = new Enemy(
  420,
  50,
  12,
  8,
  map,
  9,
  "url(img/snailDark.png)",
  "url(img/snailDarkElectric.gif)"
);
enemy8.createElement("", "url(img/snailDark.png)", "snail");
enemy8.gravity();
enemy8.pushPosition(enemy8);
enemy8.element.style.transform = "rotateY(180deg)";
enemy8.appendHealthBar();

const enemy9 = new Enemy(
  400,
  30,
  12,
  8,
  map,
  10,
  "url(img/snailDark.png)",
  "url(img/snailDarkElectric.gif)"
);
enemy9.createElement("", "url(img/snailDark.png)", "snail");
enemy9.gravity();
enemy9.pushPosition(enemy9);
enemy9.element.style.transform = "rotateY(180deg)";
enemy9.appendHealthBar();

//PLAYER SPAWNING (x,y)

const player = new Player(5, 30, map);
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
  if (player.position[3][1] > 2050 && info0 === false) {
    info0 = true;
    show(
      "Hold up!",
      "This looks suspicious. But whoa. Chili pepper. They wouldn't be here if it wasn't worth it.",
      5
    );
  }
  if (player.position[3][1] > 200 && info2 === false) {
    info2 = true;
    show(
      "Snail, again.",
      "I don't think he spotted me. Let's where is he going.",
      5
    );
  }
  if (player.position[3][1] > 2450 && info1 === false) {
    info1 = true;
    show(
      "OMG!",
      "I feel like I gonna explode... <br> PRESS  <span class='space'>SPACE</span>  TO LET IT GO!",
      10
    );

    document.querySelector("div.HUD div.mp span").style.animation =
      "miganie 1s 20";

    setTimeout(function() {
      enemy2.movementAlternative("right");
      enemy3.movementAlternative("right");
      enemy4.movementAlternative("right");
      enemy5.movementAlternative("right");
      enemy6.movementAlternative("left");
      enemy7.movementAlternative("left");
      enemy8.movementAlternative("left");
      enemy9.movementAlternative("left");
    }, 1500);
    setTimeout(function() {
      if (stats.hp > 0) {
        show(
          "That is called timing.",
          "I have never ever felt soo good eating this spicy bastard",
          5
        );
        trampoline0.createElement(
          "",
          "url(img/trampolineInactive.png)",
          "trampoline"
        );
        trampoline0.pushPosition(trampoline0);
        trampoline0.gravity();
        trampoline1.createElement(
          "",
          "url(img/trampolineInactive.png)",
          "trampoline"
        );
        trampoline1.pushPosition(trampoline1);
        trampoline1.gravity();
        trampoline2.createElement(
          "",
          "url(img/trampolineInactive.png)",
          "trampoline"
        );
        trampoline2.pushPosition(trampoline2);
        trampoline2.gravity();
        trampoline3.createElement(
          "",
          "url(img/trampolineInactive.png)",
          "trampoline"
        );
        trampoline3.pushPosition(trampoline3);
        trampoline3.gravity();
      }
    }, 15000);
  }
}, 500);

const fire = new Fire();
