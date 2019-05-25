//CLOUDS AND OTHER DECO

class Cloud extends Element {
  constructor(x = 0, y = 0, width = 0, speed = 1, map) {
    super(x, y, 0, 0, map);
    this.width = width;
    this.height = width / 2;
    this.color = "";
    this.speed = speed;
  }

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

//PALMTREE CREATOR
class PalmTree extends Element {
  constructor(x = 0, y = 0, width = 0, map) {
    super(x, y, width, 0, map);
    this.color = "";
    this.height = Math.floor(this.map.globalHeight / 100) * (width / 360) * 430;
    this.y = Math.floor(this.map.globalHeight / 100) * y - 4;
  }

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
