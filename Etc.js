class Estilingue {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10
    }
    this.elastico = Constraint.create(options);
    World.add(world, this.elastico);
    this.estilingue1 = loadImage("sprites/sling1.png")
    this.estilingue2 = loadImage("sprites/sling2.png")
    this.estilingue3 = loadImage("sprites/sling3.png")
    this.bodyA = bodyA
  }

  display() {

    if (this.elastico.bodyA) {
      var pointA = this.elastico.bodyA.position;
      var pointB = this.elastico.pointB;
      if (pointA.x > 220) {
        image(this.estilingue3, pointA.x + 20, pointA.y - 10, 15, 30);
      } else {
        image(this.estilingue3, pointA.x - 30, pointA.y - 10, 15, 30);
      }
      if (pointA.x > 280 ||
        pointA.x < 120) {
        push()
        strokeWeight(5);
        stroke(48, 22, 8);
        line(pointA.x - 20, pointA.y, pointB.x - 15, pointB.y + 6);
        line(pointA.x - 20, pointA.y, pointB.x + 25, pointB.y + 6);
        pop()
      } else {
        push()
        strokeWeight(10);
        stroke(48, 22, 8);
        line(pointA.x - 20, pointA.y, pointB.x - 15, pointB.y + 6);
        line(pointA.x - 20, pointA.y, pointB.x + 25, pointB.y + 6);
        pop()
      }

    }
    image(this.estilingue1, 200, 20)
    image(this.estilingue2, 175, 15)

  }
  launch() {
    this.elastico.bodyA = null
  }
  ligar() {
    this.elastico.bodyA = this.bodyA

  }

}