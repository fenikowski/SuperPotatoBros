// cookie class is extention of element class
// passes coordinates and map to 'super', but height and width are predetermined (5 and 5)

class Cookie extends Element {
  constructor(x = 0, y = 0, map) {
    super(x, y, 5, 5, map);
    this.image = "url(img/cookie.png)";
    this.element = 0;
    this.x = Math.floor(map.globalHeight / 100) * x;
    this.y = Math.floor(map.globalHeight / 100) * y;
  }

  // instance creation has to always be followed by cookieCreation method, which gives it a type parameter,
  // image, places it, and defines position

  cookieCreation() {
    this.element = document.createElement("div");
    this.element.setAttribute("itemType", "cookie");
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";

    this.element.style.backgroundImage = this.image;
    this.element.style.backgroundSize = "contain";
    this.element.style.position = "absolute";

    this.element.style.bottom = this.y + "px";
    this.element.style.left = this.x + "px";
    this.element = this.map.location.appendChild(this.element);
    this.definingPosition();
  }

  // cookieDevoured method removes cookie from the map, used in player class
  // actualizes statistics

  cookieDevoured(item) {
    this.map.location.removeChild(item);
    stats.cookiesEaten++;
    stats.actualization();
    dragonBite.play();
  }
}
