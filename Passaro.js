class Passaro extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/bird.png");
    Matter.Body.setDensity(this.body, 4)
    this.fumaca = loadImage("sprites/smoke.png")
    this.tragetory = []
  }
  display() {
    if (this.body.velocity.x > 10 &&
      this.body.position.x > 200) {
      var position = [this.body.position.x, this.body.position.y]
      this.tragetory.push(position)
    }

    for (let i = 0; i < this.tragetory.length; i++) {
      image(this.fumaca, this.tragetory[i][0], this.tragetory[i][1])
    }
    super.display();

  }

}