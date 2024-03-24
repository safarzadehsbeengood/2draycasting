class Player {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.rays = [];
    for (let a = 0; a < 360; a++) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  look(boundaries) {
    for (let i = 0; i < this.rays.length; i++) {
      const ray = this.rays[i];
      let closest = null;
      let r = Infinity;
      for (let b of boundaries) {
        const pt = ray.cast(b);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < r) {
            r = d;
            closest = pt;
          }
        }
      }
      if (closest) {
        stroke(255, 100);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  show() {
    fill(255);
    circle(this.pos.x, this.pos.y, 4);
    for (let ray of this.rays) {
      ray.show();
    }
  }

  move() {
    if (keyIsDown(RIGHT_ARROW)) {
      player.pos.x += speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
      player.pos.x -= speed;
    }
    if (keyIsDown(UP_ARROW)) {
      player.pos.y -= speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      player.pos.y += speed;
    }
  }
}
