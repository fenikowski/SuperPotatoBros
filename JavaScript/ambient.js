// clouds and other decorations of map - extensions of Element class
// x, y, width, map are passed to 'super' for cloud's shaping and placement

// Cloud creator
// speed parameter indicates how quickly the cloud should move from right to the left

class Cloud extends Element {
  constructor(x = 0, y = 0, width = 0, speed = 1, map) {
    super(x, y, 0, 0, map);
    this.width = width;
    this.height = width / 2;
    this.color = "";
    this.speed = speed;
  }

  // movement method (uses speed from the constructor)

  doWhatCloudsDo() {
    setInterval(
      function() {
        if (this.x > -this.width) {
          this.x--;
          this.element.style.left = this.x + "px";
        } else {
          this.x = this.map.globalWidth;
        }
      }.bind(this),
      200 / this.speed
    );
  }
}

//Palmtree creator

class PalmTree extends Element {
  constructor(x = 0, y = 0, width = 0, map) {
    super(x, y, width, 0, map);
    this.color = "";
    this.height = Math.floor(this.map.globalHeight / 100) * (width / 360) * 430;
    this.y = Math.floor(this.map.globalHeight / 100) * y - 4;
  }

  // method provides randomized animation of palmtree, choosing on of three images to start animation from
  // later animates the tree

  doWhatPalmTreesDo() {
    const palmImg = [
      "url(img/palm.png)",
      "url(img/palm2.png)",
      "url(img/palm3.png)"
    ];
    let number = Math.floor(Math.random() * 4);
    setInterval(
      function() {
        switch (number) {
          case 0:
            this.element.style.backgroundImage = palmImg[0];
            number = 1;
            break;
          case 1:
            this.element.style.backgroundImage = palmImg[1];
            number = 2;
            break;
          case 2:
            this.element.style.backgroundImage = palmImg[2];
            number = 3;
            break;
          case 3:
            this.element.style.backgroundImage = palmImg[1];
            number = 0;
            break;
        }
      }.bind(this),
      300
    );
  }
}
