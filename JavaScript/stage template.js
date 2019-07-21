// CREATION OF MAP AND ITS BORDERS
// in constructor is necessary property of map width

const map = new GameMap(5);
map.createMap();
map.mapMovement();

// SKY's COLOR
map.location.style.backgroundColor = "rgb(9, 5, 46)";

// BACKGROUND IMAGE OF SKY IF NECESSARY

// map.location.style.backgroundImage = "url(img/stars2.gif)";

// CHANGE OF HQ COLORS IF NECESSARY

// document.querySelector("div.score").style.color = "white";
// document.querySelector("div.hp").style.color = "white";
// document.querySelector("div.hp div").style.borderColor = "white";
// document.querySelector("div.mp").style.color = "white";
// document.querySelector("div.mp div").style.borderColor = "white";

// CREATION OF MAP ELEMENTS
// map.createMapElement(elementHeight, elementWidth, bottom, left, imageName)

// GROUND
// example
// map.createMapElement(10, 460, 0, 0, "grass2.jpg");

// 1st LEVEL
// map.createMapElement(10, 10, 20, 40, "grass.jpg");

// MAP AMBIENT SPAWNING

// PALMS
// constructor(x = 0, y = 0, width = 0, map)

// example
// const palm0 = new PalmTree(422.5, 10, 20, map);
// palm0.createElement("", "url(img/palm.png");
// palm0.doWhatPalmTreesDo();

// BUSHES
// constructor(x = 0, y = 0, width = 0, height = 0, map)

// example
// const bush0 = new Element(180.5, 10, 5, 5, map);
// bush0.createElement("", "url(img/bush.png)");

// SHROOMS

// examples
// const mushroom0 = new Element(350, 10, 30, 30, map);
// mushroom0.createElement("", "url(img/mushroom2.gif)");
// mushroom3.createElement("", "url(img/mushroom.gif)");
// mushroom3.element.style.transform = "rotateX(180deg)";

// ITEMS SPAWNING
// constructor(x = 0, y = 0, width = 0, height = 0)

// example
// const stick = new Element(130, 60, 8, 8, map);
// stick.createElement("", "url(img/stick.png)", "stick");
// stick.gravity();
// stick.slowUpAndDown(-15);
// stick.pushPosition();

// PORTAL SPAWNING

// examples
// const portal = new Element(-5, 50, 20, 20, map);
// portal.createElement("", "url(img/portal.gif)", "portal");
// portal.pushPosition();
// portal.element.style.transform = "rotateY(180deg)";

// const portal = new Element(940, 40, 20, 20, map);
// portal.createElement("", "url(img/portalRed.gif)", "portal");
// portal.pushPosition();

// TRAMPOLINES
// constructor(x = 0, y = 0, width = 0, height = 0, map)

// example
// const trampoline3 = new Trampoline(80, 70, 10, 15, map);
// trampoline3.createElement("", "url(img/trampolineInactive.png)", "trampoline");
// trampoline3.pushPosition(trampoline3);

// COOKIES
// constructor(x = 0, y = 0, map)

// example
// const cookie0 = new Cookie(112, 10, map);
// cookie0.cookieCreation();
// cookie0.pushPosition();
// cookie0.slowUpAndDown(-25);

// CHILLI PEPPER

// example
// const chili0 = new Element(350, 50, 7, 7, map);
// chili0.createElement("", "url(img/chili.png)", "chili");
// chili0.gravity();
// chili0.slowUpAndDown(-25);
// chili0.pushPosition(chili0);

// CLOUDS
// constructor(x, y, width, speed, map)

// by default:

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

// examples
// const enemy0 = new Enemy(
//   70,
//   10,
//   12,
//   8,
//   map,
//   1,
//   "url(img/snailDark.png)",
//   "url(img/snailDarkElectric.gif)"
// );
// enemy0.createElement("", "url(img/snailDark.png)", "snail");
// enemy0.gravity();
// enemy0.pushPosition(enemy0);
// enemy0.appendHealthBar();
// enemy0.movementAlternative("right");

// const enemy1 = new Enemy(
//   80,
//   60,
//   12,
//   8,
//   map,
//   2,
//   "url(img/snailDark.png)",
//   "url(img/snailDarkElectric.gif)"
// );
// enemy1.createElement("", "url(img/snailDark.png)", "snail");
// enemy1.gravity();
// enemy1.pushPosition(enemy1);
// enemy1.movement("left");
// enemy1.appendHealthBar();

//PLAYER SPAWNING (x,y)

// const player = new Player(5, 30, map);
// player.createPlayer();

//GRAVITY INTERVAL

// player.gravity();

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
