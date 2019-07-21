// Enemy class exteds main Element class
// uses x, y, width, height, map for enemy shaping and placement as in Element class (passed to 'super')
// so far used only to create Snail enemy, thus parameters img and activeImg (animation), are set by default // to provide snails images
// enemyNumber has to be passed when instance created for proper enemy recognition by player instance
// starts from 0

class Enemy extends Element {
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    map,
    enemyNumber,
    img = "url(img/snail.png)",
    activeImg = "url(img/snailElectric.gif)"
  ) {
    super(x, y, width, height, map);
    this.enemyNumber = enemyNumber;
    this.img = img;
    this.activeImg = activeImg;
    this.hp = 100;
  }

  // method serves for creation of helthbar above enemy, although it's useless before stage four and
  // enabling the superpower of player

  appendHealthBar() {
    const healthBar = document.createElement("div");
    healthBar.classList.add("healthBar");
    this.element.appendChild(healthBar);
    const healthBarSpan = document.createElement("span");
    healthBar.appendChild(healthBarSpan);
  }

  // method launched when conflicted with player, results in damaging player (by 20hp) and throwing player in the air by jump player's method

  activate(movementDirection) {
    player.damage(20);
    player.jump(50);

    this.element.style.backgroundImage = this.activeImg;
    fizzle.play();
    setTimeout(
      function() {
        this.element.style.backgroundImage = this.img;
      }.bind(this),
      150
    );

    if (movementDirection == "right") {
      for (let i = 0; i < 100; i++) {
        setTimeout(
          function() {
            if (player.checkIfCanMove("left")) {
              player.x -= 1;
              player.element.style.left = player.x + "px";
              player.itemSearch("left");
              player.definingPosition();
            }
          }.bind(this),
          i * 5
        );
      }
    } else if (movementDirection == "left") {
      for (let i = 0; i < 100; i++) {
        setTimeout(
          function() {
            if (player.checkIfCanMove("right")) {
              player.x += 1;
              player.element.style.left = player.x + "px";
              player.itemSearch("right");
              player.definingPosition();
            }
          }.bind(this),
          i * 5
        );
      }
    }
  }

  // defines position of the enemy and pushes it into map's elementsPoistions

  definingPosition() {
    this.position = [
      [this.y, this.x],
      [this.y + this.height, this.x],
      [this.y + this.height, this.width + this.x],
      [this.y, this.x + this.width]
    ];

    this.map.elementsPositions.forEach(
      function(index) {
        if (index[5] != undefined && index[5].enemyNumber == this.enemyNumber) {
          index[0] = [this.y, this.x];
          index[1] = [this.y + this.height, this.x];
          index[2] = [this.y + this.height, this.width + this.x];
          index[3] = [this.y, this.x + this.width];
        }
      }.bind(this)
    );
  }

  // method damages the enemy and removes it using enemyNumber (index) if hp falls below 100 points

  damage(index) {
    if (this.hp > 0) {
      this.hp--;
      let brightness = 100 - (100 - this.hp) / 2;
      this.element.style.filter = `brightness(${brightness}%)`;
      this.element.querySelector("div.healthBar span").style.width = `${
        this.hp
      }%`;
    } else {
      map.elementsPositions.splice(index, 1);
      this.element.style.transition = "2s";
      this.element.style.transform = "translate(0%,1200%) rotate(540deg)";
      snailDeathmp3.play();
      setTimeout(this.element.remove, 2000);
    }
  }

  // activates enemy's movement, not necessary when created
  // this movement method checks for any declives of the ground and if finds one, turns the directions
  // of enemy's movement

  movement(side = "left") {
    if (side == "right") {
      this.element.style.transform = "rotateY(0deg)";
    } else {
      this.element.style.transform = "rotateY(180deg)";
    }
    setInterval(
      function() {
        // movement to the left

        if (this.hp > 0) {
          if (this.checkIfCanMove("down") === false && this.hp > 0) {
            if (side == "left" && this.checkIfCanMove("left") === true) {
              this.x -= 100;
              this.definingPosition();
              if (this.checkIfCanMove("down") === false) {
                this.x += 99;
                this.definingPosition();
                this.element.style.left = this.x + "px";

                // attacking the player

                if (
                  this.position[0][0] <= player.position[3][0] &&
                  player.position[3][0] <= this.position[1][0] &&
                  player.position[2][1] == this.position[0][1]
                ) {
                  this.activate("right");
                } else if (
                  this.position[0][0] <= player.position[2][0] &&
                  player.position[2][0] <= this.position[1][0] &&
                  player.position[2][1] == this.position[0][1]
                ) {
                  this.activate("right");
                }
              } else {
                this.x += 100;
                this.definingPosition();
                side = "right";
                this.element.style.transform = "rotateY(0deg)";
              }
            } else {
              side = "right";
              this.element.style.transform = "rotateY(0deg)";
              this.definingPosition();
            }

            // movement to the right

            if (side == "right" && this.checkIfCanMove("right") === true) {
              this.x += 100;
              this.definingPosition();
              if (this.checkIfCanMove("down") === false) {
                this.x -= 99;
                this.definingPosition();
                this.element.style.left = this.x + "px";

                // attacking the player

                if (
                  player.position[0][0] <= this.position[3][0] &&
                  this.position[3][0] <= player.position[1][0] &&
                  this.position[2][1] == player.position[0][1]
                ) {
                  this.activate("left");
                } else if (
                  player.position[0][0] <= this.position[2][0] &&
                  this.position[2][0] <= player.position[1][0] &&
                  this.position[2][1] == player.position[0][1]
                ) {
                  this.activate("left");
                }
              } else {
                this.x -= 100;
                this.definingPosition();
                side = "left";
                this.element.style.transform = "rotateY(180deg)";
              }
            } else {
              side = "left";
              this.element.style.transform = "rotateY(180deg)";
              this.definingPosition();
            }
          }
        }
      }.bind(this),
      15
    );
  }

  // this movement method, doesn't take in consideration any declines of terrain, enemy will fall
  // instead of turning if any occurs

  movementAlternative(side = "left") {
    if (side == "right") {
      this.element.style.transform = "rotateY(0deg)";
    } else {
      this.element.style.transform = "rotateY(180deg)";
    }
    setInterval(
      function() {
        // movement to the left
        if (this.hp > 0) {
          if (side == "left" && this.checkIfCanMove("left") === true) {
            this.x -= 1;
            this.definingPosition();
            this.element.style.left = this.x + "px";

            // attacking the player

            if (
              this.position[0][0] <= player.position[3][0] &&
              player.position[3][0] <= this.position[1][0] &&
              player.position[2][1] == this.position[0][1]
            ) {
              this.activate("right");
            } else if (
              this.position[0][0] <= player.position[2][0] &&
              player.position[2][0] <= this.position[1][0] &&
              player.position[2][1] == this.position[0][1]
            ) {
              this.activate("right");
            }
          } else {
            side = "right";
            this.element.style.transform = "rotateY(0deg)";
          }

          // movement to the right

          if (side == "right" && this.checkIfCanMove("right") === true) {
            this.x += 1;
            this.definingPosition();
            this.element.style.left = this.x + "px";

            // attacking the player

            if (
              player.position[0][0] <= this.position[3][0] &&
              this.position[3][0] <= player.position[1][0] &&
              this.position[2][1] == player.position[0][1]
            ) {
              this.activate("left");
            } else if (
              player.position[0][0] <= this.position[2][0] &&
              this.position[2][0] <= player.position[1][0] &&
              this.position[2][1] == player.position[0][1]
            ) {
              this.activate("left");
            }
          } else {
            side = "left";
            this.element.style.transform = "rotateY(180deg)";
          }
        }
      }.bind(this),
      15
    );
  }
}
