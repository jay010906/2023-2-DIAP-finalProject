class Attractor_2 {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.power = 300;
    this.radius = 15;
  }

  move() {
    this.position.add(this.velocity);

    if (this.position.x < this.radius || this.position.x > width - this.radius) {
      this.velocity.x *= -1;
    }
    if (this.position.y < this.radius || this.position.y > height - this.radius) {
      this.velocity.y *= -1;
    }
  }

  setPower(value) {
    this.power = value;
  }

  show() {
    noStroke();
    fill(0, 0);
    circle(this.position.x, this.position.y, 30);
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