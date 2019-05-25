class Element {
  constructor(x = 0, y = 0, width = 0, height = 0, map) {
    this.map = map;
    this.x = Math.floor(this.map.globalHeight / 100) * x;
    this.y = Math.floor(this.map.globalHeight / 100) * y;
    this.element = 0;
    this.position = 0;
    this.width = Math.floor(this.map.globalHeight / 100) * width;
    this.height = Math.floor(this.map.globalHeight / 100) * height;
    this.groundLevel = Math.floor(this.map.globalHeight / 10);
    this.itemNumber = 0;
  }

  createElement(color, bgcImage, itemType) {
    this.element = document.createElement("div");
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.setAttribute("itemType", `${itemType}`);

    this.element.style.backgroundImage = bgcImage;
    this.element.style.backgroundSize = "contain";
    this.element.style.backgroundRepeat = "no-repeat";
    this.element.style.backgroundColor = color;
    this.element.style.position = "absolute";

    this.element.style.bottom = this.y + "px";
    this.element.style.left = this.x + "px";
    this.element = this.map.location.appendChild(this.element);
    this.definingPosition();
  }

  gravity(direction = null) {
    setInterval(
      function() {
        if (this.checkIfCanMove("down")) {
          this.y = Math.floor(this.y - 2);
          this.element.style.bottom = this.y + "px";
          this.definingPosition();
        }
      }.bind(this),
      5
    );
  }

  slowUpAndDown(height = 0) {
    let number = Math.floor(Math.random() * 4);
    setInterval(
      function() {
        switch (number) {
          case 0:
            this.element.style.transform = `translate(0,${height}%)`;
            number = 1;
            break;
          case 1:
            this.element.style.transform = `translate(0,${height - 5}%)`;
            number = 2;
            break;
          case 2:
            this.element.style.transform = `translate(0,${height - 10}%) `;
            number = 3;
            break;
          case 3:
            this.element.style.transform = `translate(0,${height - 5}%)`;
            number = 4;
            break;
          case 4:
            this.element.style.transform = `translate(0,${height}%)`;
            number = 5;
            break;
          case 5:
            this.element.style.transform = `translate(0,${height + 5}%)`;
            number = 6;
            break;
          case 6:
            this.element.style.transform = `translate(0,${height + 10}%)`;
            number = 7;
            break;
          case 7:
            this.element.style.transform = `translate(0,${height + 5}%)`;
            number = 0;
            break;
        }
      }.bind(this),
      200
    );
  }

  definingPosition() {
    this.position = [
      [this.y, this.x],
      [this.y + this.height, this.x],
      [this.y + this.height, this.width + this.x],
      [this.y, this.x + this.width]
    ];
  }

  pushPosition(thiselement) {
    setTimeout(
      function() {
        this.map.elementsPositions.push([
          [this.y, this.x],
          [this.y + this.height, this.x],
          [this.y + this.height, this.width + this.x],
          [this.y, this.x + this.width],
          this.element,
          thiselement
        ]);
      }.bind(this),
      1500
    );
  }

  checkIfCanMove(movementDirection) {
    let value = true;
    switch (movementDirection) {
      case "right":
        this.map.terrainStructure.forEach(
          function(structure) {
            if (
              structure[0][0] <= this.position[3][0] &&
              this.position[3][0] <= structure[1][0] &&
              this.position[2][1] == structure[0][1]
            ) {
              return (value = false);
            } else if (
              structure[0][0] <= this.position[2][0] &&
              this.position[2][0] <= structure[1][0] &&
              this.position[2][1] == structure[0][1]
            ) {
              return (value = false);
            }
          }.bind(this)
        );
        return value;
      case "left":
        this.map.terrainStructure.forEach(
          function(structure) {
            if (
              structure[3][0] <= this.position[0][0] &&
              this.position[0][0] <= structure[2][0] &&
              this.position[1][1] == structure[3][1]
            ) {
              return (value = false);
            } else if (
              structure[3][0] <= this.position[1][0] &&
              this.position[1][0] <= structure[2][0] &&
              this.position[1][1] == structure[3][1]
            ) {
              return (value = false);
            }
          }.bind(this)
        );
        return value;
      case "down":
        this.map.terrainStructure.forEach(
          function(structure) {
            if (
              structure[1][1] < this.position[3][1] &&
              this.position[3][1] < structure[2][1] &&
              this.position[3][0] == structure[2][0]
            ) {
              return (value = false);
            } else if (
              structure[1][1] < this.position[0][1] &&
              this.position[0][1] < structure[2][1] &&
              this.position[3][0] == structure[2][0]
            ) {
              return (value = false);
            }
          }.bind(this)
        );
        return value;
      case "up":
        this.map.terrainStructure.forEach(
          function(structure) {
            if (
              structure[0][1] < this.position[2][1] &&
              this.position[2][1] < structure[3][1] &&
              this.position[2][0] >= structure[0][0] &&
              this.position[0][0] < structure[1][0]
            ) {
              return (value = false);
            } else if (
              structure[0][1] < this.position[1][1] &&
              this.position[1][1] < structure[3][1] &&
              this.position[1][0] >= structure[0][0] &&
              this.position[0][0] < structure[1][0]
            ) {
              return (value = false);
            }
          }.bind(this)
        );
        return value;
    }
  }
}

// TRAMPOLINE

class Trampoline extends Element {
  constructor(x = 0, y = 0, width = 0, height = 0, map) {
    super(x, y, width, height, map);
  }

  activate() {
    this.element.style.backgroundImage = "url(img/trampolineActive.gif)";
    setTimeout(
      function() {
        this.element.style.backgroundImage = "url(img/trampolineInactive.png)";
      }.bind(this),
      400
    );
  }
}

class Fire extends Element {
  constructor() {
    super(player.x, player.y, 30, 10, map);
    this.x = player.x + 40;
    this.y = player.y;
  }

  fireMovement() {
    if (player.rotation === "right") {
      this.x = player.x + 40;
      this.y = player.y;
      fire.element.style.transform = "rotateY(0deg)";
      this.element.style.bottom = this.y + "px";
      this.element.style.left = this.x + "px";
      this.definingPosition();

      // attacking snails

      let index = -1;
      this.map.elementsPositions.forEach(
        function(structure) {
          index++;
          if (structure != null) {
            if (
              structure[0][0] <= this.position[3][0] &&
              this.position[3][0] <= structure[1][0] &&
              this.position[2][1] >= structure[0][1] &&
              this.position[0][1] <= structure[2][1]
            ) {
              if (structure[4].getAttribute("itemType") === "snail") {
                structure[5].damage(index);
              }
            } else if (
              structure[0][0] <= this.position[2][0] &&
              this.position[2][0] <= structure[1][0] &&
              this.position[2][1] >= structure[0][1] &&
              this.position[0][1] <= structure[2][1]
            ) {
              if (structure[4].getAttribute("itemType") === "snail") {
                structure[5].damage(index);
              }
            }
          }
        }.bind(this)
      );
    } else if (player.rotation === "left") {
      this.x = player.x - 190;
      this.y = player.y;
      fire.element.style.transform = "rotateY(180deg)";
      this.element.style.bottom = this.y + "px";
      this.element.style.left = this.x + "px";
      this.definingPosition();

      //atacking snails

      let index = -1;
      this.map.elementsPositions.forEach(
        function(structure) {
          index++;
          if (structure != null) {
            if (
              structure[3][0] <= this.position[0][0] &&
              this.position[0][0] <= structure[2][0] &&
              this.position[1][1] <= structure[3][1] &&
              this.position[2][1] >= structure[1][1]
            ) {
              console.log("jestem tu");
              if (structure[4].getAttribute("itemType") === "snail") {
                structure[5].damage(index);
              }
            } else if (
              structure[3][0] <= this.position[1][0] &&
              this.position[1][0] <= structure[2][0] &&
              this.position[1][1] <= structure[3][1] &&
              this.position[2][1] >= structure[1][1]
            ) {
              console.log("jestem tu");
              if (structure[4].getAttribute("itemType") === "snail") {
                structure[5].damage(index);
              }
            }
          }
        }.bind(this)
      );
    }
  }
}
