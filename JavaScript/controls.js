let activeKeys = [null, null, null, null, null];
// w = 87  a = 65  s = 83  d = 68 space = 32

window.addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    case 87:
      activeKeys[0] = 87;
      break;
    case 65:
      activeKeys[1] = 65;
      break;
    case 83:
      activeKeys[2] = 83;
      break;
    case 68:
      activeKeys[3] = 68;
      break;
    case 32:
      activeKeys[4] = 32;
      break;
  }
});

window.addEventListener("keyup", function(e) {
  switch (e.keyCode) {
    case 87:
      activeKeys[0] = null;
      break;
    case 65:
      activeKeys[1] = null;
      break;
    case 83:
      activeKeys[2] = null;
      break;
    case 68:
      activeKeys[3] = null;
      break;
    case 32:
      activeKeys[4] = null;

      if (document.querySelector("div.fire") != null) {
        document.querySelector("div.fire").remove();
      }
      firemp3.stop();
      player.fireActivated = false;
      break;
  }
});

let allowKeyboardMovement = false;

setInterval(function() {
  if (allowKeyboardMovement === true) {
    if (activeKeys[0] === 87) {
      player.movement("up");
    }
    if (activeKeys[1] === 65) {
      player.movement("left");
    }
    if (activeKeys[2] === 83) {
      player.movement("down");
    }
    if (activeKeys[3] === 68) {
      player.movement("right");
    }
    if (activeKeys[4] === 32) {
      player.fire();
    }
    if (
      activeKeys[0] === null &&
      activeKeys[1] === null &&
      activeKeys[2] === null &&
      activeKeys[3] === null &&
      player.jumpActive === false
    ) {
      player.standing();
    }
  }
}, 5);
