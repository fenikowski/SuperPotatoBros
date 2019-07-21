// fire class enables player's super power use

class Fire extends Element {
  constructor() {
    super(player.x, player.y, 30, 10, map);
    this.x = player.x + 40;
    this.y = player.y;
  }

  // fireMovement activates super power, it's controled by player and stats instances
  // provides to the game its coordinates, and places the animation depending on infomation about
  // player's rotation and placement on the map

  fireMovement() {
    if (player.rotation === "right") {
      this.x = player.x + 40;
      this.y = player.y;
      fire.element.style.transform = "rotateY(0deg)";
      this.element.style.bottom = this.y + "px";
      this.element.style.left = this.x + "px";
      this.definingPosition();

      // here the method reads the position of enemies checking if there's any in range and launching
      // damage method on enemy if true

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
              if (structure[4].getAttribute("itemType") === "snail") {
                structure[5].damage(index);
              }
            } else if (
              structure[3][0] <= this.position[1][0] &&
              this.position[1][0] <= structure[2][0] &&
              this.position[1][1] <= structure[3][1] &&
              this.position[2][1] >= structure[1][1]
            ) {
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
