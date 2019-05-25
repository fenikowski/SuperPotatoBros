class GameMap {
  constructor(width) {
    this.mapBorder = 0;
    this.globalHeight = Math.floor(window.innerHeight);
    this.globalWidth = this.globalHeight * width;
    this.location = document.querySelector("div.gameMap");
    this.cookiesPositions = [];
    this.elementsPositions = [];

    // first array defines left wall
    // second array defines right wall

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

  createMap(imageURL) {
    this.location.style.width = this.globalWidth + "px";
    this.location.style.height = this.globalHeight + "px";
    this.location.style.left = 0 + "px";
    this.location.style.top = 0 + "px";
  }

  mapMovement() {
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

  // parameter is a number between 1 and 100
  createMapElement(elementHeight, elementWidth, bottom, left, imageName) {
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
