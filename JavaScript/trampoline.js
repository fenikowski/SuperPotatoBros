// extension on of Element class, uses in 'super' its parameters to place and shape trampoline
// the only one methos serves animation

class Trampoline extends Element {
  constructor(x = 0, y = 0, width = 0, height = 0, map) {
    super(x, y, width, height, map);
  }

  activate() {
    this.element.style.backgroundImage = "url(img/trampolineActive.gif)";
    setTimeout(
      function() {
        this.element.style.backgroundImage = "url(img/trampolineInactive.png)";
      }.bind(this),
      400
    );
  }
}
