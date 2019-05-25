class Player extends Element {
  constructor(x = 0, y = 0, map) {
    super(x, y, 0, 0, map);
    this.width = Math.floor(this.map.globalHeight / 10) - 10;
    this.height = Math.floor(this.map.globalHeight / 10) - 10;
    this.jumpActive = false;
    this.jumpTime = 40; //before was 40
    this.jumpHeight = 2;
    this.speed = 2;
    this.gravityPower = 1;
    this.rotation = "right";
    this.onTrampoline = false;
    this.raising = false;
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

  itemCatch(item, movementDirection, index, variable) {
    switch (item.getAttribute("itemType")) {
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
      case "stick":
        show(
          "Congratulations! It's a stick!!",
          "Would be nice to have something to conquer the world with, huh? But maybe let's look for something little bit sharper...",
          8
        );
        this.map.elementsPositions.splice(index, 1);
        break;
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
      case "portal":
        let path = window.location.pathname;
        let number = parseInt(path[path.length - 6]) + 1;
        window.location.pathname = `${settings.path}/stage${number}.html`;
        sessionStorage.setItem(
          `eatenCookiesStage${number}`,
          stats.cookiesEaten
        );
        sessionStorage.setItem(`hpStage${number}`, stats.hp);
        sessionStorage.setItem(`mpStage${number}`, stats.mp);
        break;
      case "snail":
        if (movementDirection === "down") {
          variable.activate(movementDirection);
          this.onTrampoline = true;
          player.jump(50);
        } else {
          variable.activate(movementDirection);
        }
        break;
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

          this.itemSearch("down");
          gravityPower += 0.25;
        } else {
          gravityPower = this.gravityPower;
        }
      }.bind(this),
      10
    );
  }

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

  standing() {
    if (this.rotation == "right") {
      this.element.style.backgroundImage = "url(img/potatoStanding.gif)";
    } else if (this.rotation == "left") {
      this.element.style.backgroundImage = "url(img/potatoStandingLeft.gif)";
    }
  }

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
