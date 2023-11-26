class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 100;
    this.value = 0.8;
  }
  
  move() {
    // this.position.x -= this.value;

  // if(this.position.x > width || this.position.x < 0){
  //   this.value *= -1;
  //  }
  }
  
  setPower(value) {
    this.power = map(value, 0, width, -300, 300);
  }

  show() {
    stroke(0);
    noStroke();
    fill(0);
    circle(this.position.x, this.position.y, 1);
  }

  pull(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 10);
    let strength = this.power / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
