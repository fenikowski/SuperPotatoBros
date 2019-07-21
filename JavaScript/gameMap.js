// Map creator
// creates map, for the moment only one for a html document
// in constructor uses parameter 'width' which is multiplicated by screen's height

class GameMap {
  constructor(width) {
    // perceptible map border
    this.mapBorder = 0;

    // map's size and location
    this.globalHeight = Math.floor(window.innerHeight);
    this.globalWidth = this.globalHeight * width;
    this.location = document.querySelector("div.gameMap");

    // containers for elements
    this.cookiesPositions = [];
    this.elementsPositions = [];

    // first array defines left wall of the map
    // second array defines right wall of the map

    this.terrainStructure = [
      [
        [0, 0],
        [Math.floor(this.globalHeight), 0],
        [Math.floor(this.globalHeight), 0],
        [0, 0]
      ],
      [
        [0, Math.floor(this.globalWidth)],
        [Math.floor(this.globalHeight), Math.floor(this.globalWidth)],
        [Math.floor(this.globalHeight), Math.floor(this.globalWidth)],
        [0, Math.floor(this.globalWidth)]
      ]
    ];
  }

  // method gives the container div size

  createMap() {
    this.location.style.width = this.globalWidth + "px";
    this.location.style.height = this.globalHeight + "px";
    this.location.style.left = 0 + "px";
    this.location.style.top = 0 + "px";
  }

  // method allows the map.world to be moved left/right depending on player's position

  mapMovement() {
    // values for player position, if passed, the map moves
    // can be changed
    let moveBorderRight = 650;
    let moveBorderLeft = 250;

    setInterval(
      function() {
        if (
          -parseInt(this.location.style.left) <
            parseInt(this.location.style.width) - window.innerWidth &&
          parseInt(player.element.style.left) > moveBorderRight
        ) {
          this.location.style.left =
            parseInt(this.location.style.left) - 1 + "px";
          moveBorderRight++;
          moveBorderLeft++;
        }
        if (
          parseInt(this.location.style.left) < 0 &&
          parseInt(player.element.style.left) < moveBorderLeft
        ) {
          this.location.style.left =
            parseInt(this.location.style.left) + 1 + "px";
          moveBorderLeft--;
          moveBorderRight--;
        }
      }.bind(this),
      1
    );
  }

  // Map elements creator
  // method creates terrain on the map, pushes the position to the map instance
  // parameter is a number between 1 and 100
  // elementHeight and elementWidth give the terrain element size, by default elementHeight should be 10
  // parameters bottom and left places the element on the map
  // imageName gives the element the look

  createMapElement(elementHeight = 10, elementWidth, bottom, left, imageName) {
    const newElement = document.createElement("div");
    newElement.style.height =
      Math.floor(this.globalHeight / 100) * elementHeight + "px";
    newElement.style.width =
      Math.floor(this.globalHeight / 100) * elementWidth + "px";
    newElement.classList.add("mapElement");
    newElement.style.bottom =
      Math.floor(this.globalHeight / 100) * bottom + "px";
    newElement.style.left = Math.floor(this.globalHeight / 100) * left + "px";
    newElement.style.backgroundImage = `url(img//${imageName})`;
    this.location.appendChild(newElement);

    this.terrainStructure.push([
      [
        Math.floor(this.globalHeight / 100) * bottom,
        Math.floor(this.globalHeight / 100) * left
      ],
      [
        Math.floor(this.globalHeight / 100) * bottom +
          Math.floor(this.globalHeight / 100) * elementHeight,
        Math.floor(this.globalHeight / 100) * left
      ],
      [
        Math.floor(this.globalHeight / 100) * bottom +
          Math.floor(this.globalHeight / 100) * elementHeight,
        Math.floor(this.globalHeight / 100) * left +
          Math.floor(this.globalHeight / 100) * elementWidth
      ],
      [
        Math.floor(this.globalHeight / 100) * bottom,
        Math.floor(this.globalHeight / 100) * left +
          Math.floor(this.globalHeight / 100) * elementWidth
      ]
    ]);
  }
}
