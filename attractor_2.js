class Attractor_2 {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.power = 300;
  }

  setPower(value) {
    this.power = value;
  }

  show() {
    noStroke();
    fill(0, 20);
    circle(this.position.x, this.position.y, 320);
  }

  pull(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, shape.attractorDistanceX, shape.attractorDistanceY);
    let strength = this.power / (distance * distance);
    force.setMag(strength);
    return force;
  }
}