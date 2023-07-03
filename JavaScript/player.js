// Player class is extension of Element class, stays for all the player's actions
// constructor requires position (x,y) and map of placement

class Player extends Element {
  constructor(x = 0, y = 0, map) {
    super(x, y, 0, 0, map);

    // size is dependent on screen
    this.width = Math.floor(this.map.globalHeight / 10) - 10;
    this.height = Math.floor(this.map.globalHeight / 10) - 10;

    // default jump values
    this.jumpActive = false;
    this.jumpTime = 40;
    this.jumpHeight = 2;
    this.onTrampoline = false;
    this.raising = false;

    // player's default speed
    this.speed = 2;

    // deafault gravity power (speed of falling)
    this.gravityPower = 1;

    // player's starting rotation
    this.rotation = "right";

    // fire default value
    this.fireActivated = false;
  }

  createPlayer() {
    this.element = document.createElement("div");
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.classList.add("player");
    this.element.style.position = "absolute";

    this.element.style.bottom = this.y + "px";
    this.element.style.left = this.x + "px";
    this.element = this.map.location.appendChild(this.element);
    this.definingPosition();
  }

  // method searches for map's elements on players way
  // method compares corners of player and elements alike, and when equal launches itemCatch method
  // sending information about catched element

  itemSearch(movementDirection) {
    let index = -1;
    switch (movementDirection) {
      case "right":
        this.map.elementsPositions.forEach(
          function(structure) {
            index++;
            if (structure != null && this.jumpActive === false) {
              if (
                structure[0][0] <= this.position[3][0] &&
                this.position[3][0] <= structure[1][0] &&
                this.position[2][1] == structure[0][1]
              ) {
                this.itemCatch(
                  structure[4],
                  movementDirection,
                  index,
                  structure[5]
                );
              } else if (
                structure[0][0] <= this.position[2][0] &&
                this.position[2][0] <= structure[1][0] &&
                this.position[2][1] == structure[0][1]
              ) {
                this.itemCatch(
                  structure[4],
                  movementDirection,
                  index,
                  structure[5]
                );
              }
            }
          }.bind(this)
        );
        break;
      case "left":
        this.map.elementsPositions.forEach(
          function(structure) {
            index++;
            if (structure != null && this.jumpActive === false) {
              if (
                structure[3][0] <= this.position[0][0] &&
                this.position[0][0] <= structure[2][0] &&
                this.position[1][1] == structure[3][1]
              ) {
                this.itemCatch(
                  structure[4],
                  movementDirection,
                  index,
                  structure[5]
                );
              } else if (
                structure[3][0] <= this.position[1][0] &&
                this.position[1][0] <= structure[2][0] &&
                this.position[1][1] == structure[3][1]
              ) {
                this.itemCatch(
                  structure[4],
                  movementDirection,
                  index,
                  structure[5]
                );
              }
            }
          }.bind(this)
        );
        break;
      case "down":
        this.map.elementsPositions.forEach(
          function(structure) {
            index++;
            if (structure != null && this.raising == false) {
              if (
                structure[1][1] <= this.position[3][1] &&
                this.position[3][1] <= structure[2][1] &&
                this.position[3][0] == structure[2][0]
              ) {
                this.itemCatch(
                  structure[4],
                  movementDirection,
                  index,
                  structure[5]
                );
              } else if (
                structure[1][1] <= this.position[0][1] &&
                this.position[0][1] <= structure[2][1] &&
                this.position[3][0] == structure[2][0]
              ) {
                this.itemCatch(
                  structure[4],
                  movementDirection,
                  index,
                  structure[5]
                );
              } else if (
                structure[0][1] >= this.position[0][1] &&
                this.position[3][1] >= structure[3][1] &&
                this.position[3][0] == structure[2][0]
              ) {
                this.itemCatch(
                  structure[4],
                  movementDirection,
                  index,
                  structure[5]
                );
              }
            }
          }.bind(this)
        );
        break;
      case "up":
        this.map.elementsPositions.forEach(
          function(structure) {
            index++;
            if (structure != null) {
              if (
                structure[0][1] <= this.position[2][1] &&
                this.position[2][1] <= structure[3][1] &&
                this.position[2][0] >= structure[0][0] &&
                this.position[2][0] <= structure[1][0] &&
                this.position[0][0] < structure[0][0]
              ) {
                this.itemCatch(
                  structure[4],
                  movementDirection,
                  index,
                  structure[5]
                );
              } else if (
                structure[0][1] <= this.position[1][1] &&
                this.position[1][1] <= structure[3][1] &&
                this.position[2][0] >= structure[0][0] &&
                this.position[2][0] <= structure[1][0] &&
                this.position[0][0] < structure[0][0]
              ) {
                this.itemCatch(
                  structure[4],
                  movementDirection,
                  index,
                  structure[5]
                );
              } else if (
                structure[0][1] > this.position[1][1] &&
                this.position[2][1] > structure[3][1] &&
                this.position[2][0] >= structure[0][0] &&
                this.position[2][0] <= structure[1][0] &&
                this.position[0][0] < structure[0][0]
              ) {
                this.itemCatch(
                  structure[4],
                  movementDirection,
                  index,
                  structure[5]
                );
              }
            }
          }.bind(this)
        );
        break;
    }
  }

  // method defines interaction with any type of elements placed on map
  // item parameter holds the element's instance itself
  // movementDirection passes player's direction
  // index passes place in the map's elements array
  // variable holds additional info about item

  itemCatch(item, movementDirection, index, variable) {
    switch (item.getAttribute("itemType")) {
      // eating a cookie heals player by 10hp points and remove the cookie
      // first eaten cookie launches a scripted mesagge
      case "cookie":
        this.map.location.removeChild(item);
        this.map.elementsPositions.splice(index, 1);
        stats.cookiesEaten++;
        stats.heal(10);
        stats.actualization();
        dragonBite.play();
        if (variable == "trampolineInfo") {
          show("Trampoline!", "Hmm. What would Mario do with this...", 3);
        }
        break;
      // stick element only occurs once in the game, launches scripted mesagge
      case "stick":
        show(
          "Congratulations! It's a stick!!",
          "Would be nice to have something to conquer the world with, huh? But maybe let's look for something little bit sharper...",
          8
        );
        this.map.elementsPositions.splice(index, 1);
        break;
      // trampoline throws player in the air using player's jump method
      case "trampoline":
        if (movementDirection === "down") {
          this.onTrampoline = true;
          setTimeout(
            function() {
              variable.activate();
              player.jump(70);
            }.bind(this),
            50
          );
        }
        break;
      // 'catching' a portal will transfer player to another map and save information
      // about eaten cookies, hp, mp to the session storage
      case "portal":
        let path = window.location.pathname;
        let number = parseInt(path) ? parseInt(path) + 1 : 2;
        window.location.pathname = `${settings.path}/stage${number}.html`;
        sessionStorage.setItem(
          `eatenCookiesStage${number}`,
          stats.cookiesEaten
        );
        sessionStorage.setItem(`hpStage${number}`, stats.hp);
        sessionStorage.setItem(`mpStage${number}`, stats.mp);
        break;
      // confrontation with snail will result in launching the player in the air and activating
      // snail's attack method
      case "snail":
        if (movementDirection === "down") {
          variable.activate(movementDirection);
          this.onTrampoline = true;
          player.jump(50);
        } else {
          variable.activate(movementDirection);
        }
        break;
      // chilli when catched, dissapears and gives player mp
      case "chili":
        this.map.location.removeChild(item);
        this.map.elementsPositions.splice(index, 1);
        stats.healmp(100);
        dragonBite.play();
        break;
      case "default":
        break;
    }
  }

  // method lowers player's hp by introduced value, if reaches or passes 0, player dies
  // launches as well simple animation

  damage(damage) {
    player.element.style.filter = "hue-rotate(320deg) saturate(200%)";
    setTimeout(
      function() {
        player.element.style.filter = "initial";
      }.bind(this),
      500
    );
    stats.damage(damage);
  }

  // method defines gravitation pulling player

  gravity() {
    let gravityPower = this.gravityPower;
    setInterval(
      function() {
        if (this.checkIfCanMove("down")) {
          this.y = this.y - Math.floor(this.map.globalHeight / 100);
          this.element.style.bottom = this.y + "px";
          this.definingPosition();

          // FALLING FROM MAP DEATH SCENARIO
          if (this.position[0][0] < -600) {
            deathPanel();
          }

          // searches for elements below while falling
          this.itemSearch("down");
          gravityPower += 0.25;
        } else {
          gravityPower = this.gravityPower;
        }
      }.bind(this),
      10
    );
  }

  // jump method for player

  jump(time = this.jumpTime, height = this.jumpHeight) {
    if (
      (this.jumpActive === false && this.checkIfCanMove("down") === false) ||
      (this.onTrampoline === true && this.raising === false)
    ) {
      this.jumpActive = true;
      this.onTrampoline = false;
      this.raising = true;

      //variables
      for (let i = 1; i <= time; i++) {
        for (let q = 1; q < height; q++) {
          setTimeout(
            function() {
              if (this.checkIfCanMove("up") === false) {
                return;
              }
              //jumping animation
              if (this.rotation == "right") {
                this.element.style.backgroundImage =
                  "url(img/potatoJumpingRight.png)";
              } else {
                this.element.style.backgroundImage =
                  "url(img/potatoJumpingLeft.png)";
              }

              //jump
              this.y += Math.floor(this.map.globalHeight / 100);
              this.element.style.bottom = this.y + "px";
              player.definingPosition();
              this.itemSearch("up");
              if (i == time && q == height - 1) {
                this.raising = false;
              }
            }.bind(this),
            i * q * 5
          );
        }
      }
      // multiple jump deasactivator
      setTimeout(
        function() {
          this.jumpActive = false;
        }.bind(this),
        (time - 1) * (height - 1) * 2
      );
    }
  }

  // method launching standing animation dependent on players rotation

  standing() {
    if (this.rotation == "right") {
      this.element.style.backgroundImage = "url(img/potatoStanding.gif)";
    } else if (this.rotation == "left") {
      this.element.style.backgroundImage = "url(img/potatoStandingLeft.gif)";
    }
  }

  // method defines player movement used later in controls.js file
  // uses checkIfCanMove to check if desired movement doesn't colide with map's elements

  movement(direction) {
    switch (direction) {
      case "up":
        if (this.checkIfCanMove("down") === false) {
          this.jump();
        }
        break;
      case "left":
        for (let i = 0; i < this.speed; i++) {
          if (this.checkIfCanMove(direction)) {
            this.x -= 1;
            this.element.style.left = this.x + "px";
            this.element.style.backgroundImage =
              "url(img/potatoWalkingLeft.gif)";
            this.itemSearch(direction);
            this.rotation = "left";
            this.definingPosition();
          }
        }
        break;
      case "down":
        if (this.checkIfCanMove(direction)) {
          this.y -= 1;
          this.element.style.bottom = this.y + "px";
          this.itemSearch(direction);
          this.definingPosition();
        }
        break;
      case "right":
        for (let i = 0; i < this.speed; i++) {
          if (this.checkIfCanMove(direction)) {
            this.x += 1;
            this.element.style.left = this.x + "px";
            this.element.style.backgroundImage = "url(img/potatoWalking.gif)";
            this.itemSearch(direction);
            this.rotation = "right";
            this.definingPosition();
          }
        }
        break;
    }
  }

  // method launches fire if player has mp

  fire() {
    if (this.fireActivated === false && stats.mp > 0) {
      this.fireActivated = true;
      fire.createElement("", "", "fire");
      fire.element.classList.add("fire");
      fire.fireMovement();
      firemp3.play();
    } else if (this.fireActivated === true && stats.mp > 0) {
      stats.fire();
      fire.fireMovement();
    } else if (this.fireActivated === true && stats.mp <= 0) {
      document.querySelector("div.fire").remove();
      this.fireActivated = false;
    }
  }
}
