// CONTROLS
// functions below provides activeKeys variable with information about pressed keys

let activeKeys = [null, null, null, null, null];
// w = 87  a = 65  s = 83  d = 68 space = 32

// window event listener below provides activeKeys array with information about pressed keys, setting their
// value on true

window.addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    case 87:
      activeKeys[0] = true;
      break;
    case 65:
      activeKeys[1] = true;
      break;
    case 83:
      activeKeys[2] = true;
      break;
    case 68:
      activeKeys[3] = true;
      break;
    case 32:
      activeKeys[4] = true;
      break;
  }
});

// another window event listener, provides 'null' to the array when key's left

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

      // here fire gets removed when spacebar isn't pressed

      if (document.querySelector("div.fire") != null) {
        document.querySelector("div.fire").remove();
      }
      firemp3.stop();
      player.fireActivated = false;
      break;
  }
});

// variables makes possible blocking keyboard and thus any player's action, used only when info screens on
let allowKeyboardMovement = false;

// uses the information provided by allowKeyboardMovement and activeKeys variables to activate player's
// movement and other actions
// when no key responsable for movement is pressed, activates standing animation on player

setInterval(function() {
  if (allowKeyboardMovement === true) {
    if (activeKeys[0] === true) {
      player.movement("up");
    }
    if (activeKeys[1] === true) {
      player.movement("left");
    }
    if (activeKeys[2] === true) {
      player.movement("down");
    }
    if (activeKeys[3] === true) {
      player.movement("right");
    }
    if (activeKeys[4] === true) {
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
