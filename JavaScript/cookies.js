class Cookie extends Element {
  constructor(x = 0, y = 0, map) {
    super(x, y, 5, 5, map);
    this.image = "url(img/cookie.png)";
    this.element = 0;
    this.x = Math.floor(map.globalHeight / 100) * x;
    this.y = Math.floor(map.globalHeight / 100) * y;
  }

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

  cookieDevoured(item) {
    this.map.location.removeChild(item);
    stats.cookiesEaten++;
    stats.actualization();
    dragonBite.play();
  }
}
