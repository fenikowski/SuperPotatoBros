// file contains infoPanel funcionality + popup function and its scripted appearances

const infoPanel = document.querySelector("div.infoPanel");

const startBtn = document.querySelector("div.infoPanel button.startBtn");

if (window.location.pathname == `${settings.path}/index.html` || window.location.pathname == `/`) {
  infoPanel.style.height = "100vh";
  infoPanel.style.width = "100vw";
  infoPanel.style.borderRadius = "0px";

  setTimeout(() => {
    infoPanel.style.transition = "1s";
    infoPanel.style.height = "80%";
    infoPanel.style.width = "80%";
    infoPanel.style.borderRadius = "20px";
  }, 1000);

  window.addEventListener("load", function() {
    setTimeout(function() {
      document.querySelector("div.infoPanel img.loading").style.display =
        "none";
      document.querySelector("div.infoPanel p.loading").style.display = "none";
      startBtn.style.display = "inline-block";
    }, 1500);
  });

  startBtn.addEventListener("click", function() {
    startBtn.style.display = "none";
    infoPanel.style.display = "none";
    allowKeyboardMovement = true;
    setTimeout(function() {
      show(
        "Hi! I'm glad you're here!!",
        "Let me tell you a story...or hm wait. As if growing legs wasn't enough for a potato, I still need to eat, would be nice to firstly use some help on that.",
        6
      );
    }, 1000);
    setTimeout(function() {
      show(
        "I'm hungry. Yeah, for real.",
        "Let's start with some simple moves and I'll explain you everything else later on.",
        4.5
      );
    }, 9000);
    setTimeout(function() {
      show(
        "Simple movement",
        "To move left press  <span>A</span> ,to move right press  <span>D</span> . To jump press  <span>W</span> . <br> Simple as that.",
        5
      );
    }, 15000);
  });
} else {
  infoPanel.style.display = "none";
  setTimeout(function() {
    allowKeyboardMovement = true;
  }, 100);
}

// DEATH PANEL FUNCTION

let deathPanelActive = false;
function deathPanel() {
  if (deathPanelActive == true) return;

  deathPanelActive = true;

  infoPanel.innerHTML =
    "<h1>You're dead!</h1><p class='result'>Eaten Cookies: <span></span></p><button class='againBtn'><p>Start from the beginnig</p><i class='fas fa-fast-backward'></i></button><button class='repeatBtn'><p>Repeat stage</p><i class='fas fa-redo'></i></button><button class='exitBtn'><p>Go back to main site</p><i class='fas fa-times'></i></button> ";

  for (let i = 0; i <= stats.cookiesEaten; i++) {
    setTimeout(function() {
      document.querySelector("div.infoPanel p.result span").textContent = i;
    }, (2000 / stats.cookiesEaten) * i);
  }
  setTimeout(function() {
    chaChing.play();
  }, 2000);
  document
    .querySelector("button.repeatBtn")
    .addEventListener("click", function() {
      location.reload(false);
    });
  document
    .querySelector("button.exitBtn")
    .addEventListener("click", function() {
      window.location.pathname = "/";
    });
  document
    .querySelector("button.againBtn")
    .addEventListener("click", function() {
      window.location.pathname = `${settings.path}/index.html`;
      sessionStorage.setItem(`eatenCookiesStage1`, 0);
      sessionStorage.setItem(`hpStage1`, 100);
    });
  infoPanel.style.display = "block";
}

// POP-UPS

const popup = document.createElement("div");
popup.classList.add("popup");
document.body.appendChild(popup);

function show(title, message, timeInSeconds = 3) {
  popup.innerHTML = `<h3>${title}</h3><p>${message}</p>`;
  popup.style.opacity = "1";
  setTimeout(function() {
    popup.style.opacity = "0";
  }, 1000 * timeInSeconds);
}
