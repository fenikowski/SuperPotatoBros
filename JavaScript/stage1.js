// CREATION OF MAP AND ITS BORDERS
// in constructor necessary property of map width

const map = new GameMap(3);
map.createMap();
map.mapMovement();

// CREATION OF MAP ELEMENTS
// createMapElement(elementHeight, elementWidth, bottom, left, imageName)

// ground
map.createMapElement(10, 570, 0, 0, "grass.jpg");
// 1st level
map.createMapElement(10, 40, 20, 40, "grass.jpg");
// 2nd level
map.createMapElement(10, 10, 10, 20, "grass.jpg");
// 4th level
map.createMapElement(10, 100, 40, 90, "grass.jpg");

// MAP AMBIENT SPAWNING

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

// palms
// constructor(x = 0, y = 0, width = 0, map)

const palm0 = new PalmTree(62.5, 30, 20, map);
palm0.createElement("", "url(img/palm.png");
palm0.doWhatPalmTreesDo();

const palm1 = new PalmTree(120, 10, 20, map);
palm1.createElement("", "url(img/palm.png");
palm1.doWhatPalmTreesDo();

const palm2 = new PalmTree(100, 50, 20, map);
palm2.createElement("", "url(img/palm.png");
palm2.doWhatPalmTreesDo();

const palm3 = new PalmTree(150, 50, 20, map);
palm3.createElement("", "url(img/palm.png");
palm3.doWhatPalmTreesDo();

// Items spawning

// constructor(x = 0, y = 0, width = 0, height = 0)

const stick = new Element(130, 60, 8, 8, map);
stick.createElement("", "url(img/stick.png)", "stick");
stick.gravity();
stick.slowUpAndDown(-15);
stick.pushPosition();

const portal = new Element(300, 15, 20, 20, map);
portal.createElement("", "url(img/portal.gif)", "portal");
portal.pushPosition();

// Trampolines

const trampoline0 = new Trampoline(200, 10, 10, 15, map);
trampoline0.createElement("", "url(img/trampolineInactive.png)", "trampoline");
trampoline0.pushPosition(trampoline0);

// Cookies
// constructor(x = 0, y = 0, map)

const cookie0 = new Cookie(22, 100, map);

cookie0.cookieCreation();
cookie0.gravity();
cookie0.pushPosition();
cookie0.slowUpAndDown(-25);

const cookie1 = new Cookie(95, 100, map);

cookie1.cookieCreation();
cookie1.gravity();
cookie1.pushPosition();
cookie1.slowUpAndDown(-25);

const cookie2 = new Cookie(110, 20, map);

cookie2.cookieCreation();
cookie2.gravity();
cookie2.pushPosition();
cookie2.slowUpAndDown(-25);

const cookie3 = new Cookie(170, 20, map);

cookie3.cookieCreation();
cookie3.gravity();
cookie3.pushPosition("trampolineInfo");
cookie3.slowUpAndDown(-25);

//PLAYER SPAWNING (x,y)

const player = new Player(5, 100, map);
player.createPlayer();

//GRAVITY INTERVAL

player.gravity();
