class Stats {
  constructor() {
    this.cookiesEaten = 0;
    this.hp = 100;
    this.mp = 0;
    this.playerBeingDamaged = false;
  }

  inicialization() {
    let path = window.location.pathname;
    let number = parseInt(path[path.length - 6]) + 1;
    this.cookiesEaten =
      sessionStorage.getItem(`eatenCookiesStage${number - 1}`) == undefined
        ? 0
        : sessionStorage.getItem(`eatenCookiesStage${number - 1}`);
    document.querySelector("div.score span").textContent = this.cookiesEaten;

    this.hp =
      sessionStorage.getItem(`hpStage${number - 1}`) == undefined
        ? 100
        : parseInt(sessionStorage.getItem(`hpStage${number - 1}`));
    document.querySelector("div.HUD div.hp div span").style.width = `${
      this.hp
    }%`;

    this.mp =
      sessionStorage.getItem(`mpStage${number - 1}`) == undefined
        ? 0
        : parseInt(sessionStorage.getItem(`mpStage${number - 1}`));
    document.querySelector("div.HUD div.mp div span").style.width = `${
      this.mp
    }%`;
  }

  actualization() {
    document.querySelector("div.score span").textContent = this.cookiesEaten;
  }

  damage(damage) {
    if (this.playerBeingDamaged === false) {
      this.playerBeingDamaged = true;

      this.hp -= damage;

      document.querySelector("div.HUD div.hp div span").style.width = `${
        this.hp
      }%`;

      // CRITICAL HP WHEN 30 OR LESS

      if (this.hp <= 30) {
        document.querySelector(
          "div.HUD div.hp div span"
        ).style.backgroundColor = "red";
      }

      // DEATH SCENARIO WHEN HP 0 OR LESS

      if (this.hp <= 0) {
        document.querySelector("div.HUD div.hp div span").style.width = "0%";
        player.element.style.transform = "rotate(180deg) translate(0,-10%)";
        allowKeyboardMovement = false;
        setTimeout(deathPanel, 1500);
      }

      // CAN BE DAMAGED ONCE IN 1/5 SECONDS

      setTimeout(
        function() {
          this.playerBeingDamaged = false;
        }.bind(this),
        200
      );
    }
  }

  heal(cure) {
    this.hp += cure;

    if (this.hp > 100) this.hp = 100;

    document.querySelector("div.HUD div.hp div span").style.width = `${
      this.hp
    }%`;

    if (this.hp > 30) {
      document.querySelector("div.HUD div.hp div span").style.backgroundColor =
        "lightgreen";
    }
  }

  healmp(cure) {
    this.mp += cure;

    if (this.mp > 100) this.mp = 100;

    document.querySelector("div.HUD div.mp div span").style.width = `${
      this.mp
    }%`;
  }

  fire() {
    if (this.mp > 0) {
      this.mp -= 0.1;
      document.querySelector("div.HUD div.mp div span").style.width = `${
        this.mp
      }%`;
    }
  }
}

const stats = new Stats();
stats.inicialization();
