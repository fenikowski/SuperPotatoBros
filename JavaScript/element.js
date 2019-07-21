// class Element is the main class serving as a base for another classes in the game such as player or cookie
// it contains all the necessary methods, used posteriorly in mentioned extensions
// x and y parameters serve for placing element on the map, although it's necessary to launch gravity method // to make them fall on the ground
// width and height parametrs shape element's size (min is 1, max is 100, where 10 is one level of ground)
// map parameter chooses the map on which element should be render, has no use for the moment, will serve
// for additional portals development later on

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

  // function for creating element on the map
  // variable color serves only for testing purposes
  // variable bgcImage stays for primary element look
  // variable itemType transfers information about interaction to the instance of player class

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

  // simple gravity function for element spawning (variable for further developmen [reversed gravity])

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

  // up and down movemement function for highlighting floating elements like cookies etc.
  // height variable is responsable for the distance mantained above the ground level

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

  // need to be used every time any element is created and changes its position to keep current data about
  // placement

  definingPosition() {
    this.position = [
      [this.y, this.x],
      [this.y + this.height, this.x],
      [this.y + this.height, this.width + this.x],
      [this.y, this.x + this.width]
    ];
  }

  // complemental method for defining position one above, transfers data about position to the map,
  // allowing game to provide interaction between player, element, and ground

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

  // method reads the structure of the map and returns boolean value depending on whether the element can move in
  // desired direction or no
  // parameter serves for introducing desired position

  // the method checks all four corners of map structure (all ground levels) and all four corners
  // of the element to compare their coordinates, and in result, returning true if there's no contact
  // between them (coordinated do not equal), and false otherwise

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
