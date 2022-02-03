class Porco extends BaseClass {
  constructor(x, y) {
    super(x, y, 70, 70);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255
  }
  display() {
    if (this.body.speed < 4.5) {
      super.display();

    } else {
      this.visibility -= 5;
      World.remove(world, this.body)
      push();
      tint(255, this.visibility)
      image(this.image, this.body.position.x, this.body.position.y, 70, 70)
      pop();
    }


  }
  pontos() {
    if (this.visibility < 0 && this.visibility > -1005) {
      Points += 1
    }
  }
}


