class Ray {
    constructor(pos, angle) {
        this.pos = pos;
        this.dir = p5.Vector.fromAngle(angle);
    }

    show() {
        stroke(100);
        strokeWeight(2);
        push();
        translate(this.pos.x, this.pos.y);
        line(0, 0, this.dir.x*10, this.dir.y*10);
        pop();
    }

    look(x, y) {
        this.dir.x = x - this.pos.x;
        this.dir.y = y - this.pos.y;
        this.dir.normalize();
    }

    cast(b) {
        const x1 = b.a.x;
        const y1 = b.a.y;
        const x2 = b.b.x;
        const y2 = b.b.y;
        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.dir.x;
        const y4 = this.pos.y + this.dir.y;

        const den = (x1-x2) * (y3-y4) - (y1 - y2) * (x3-x4);
        if (den == 0) { return }
        const t = ((x1-x3) * (y3-y4) - (y1-y3) * (x3-x4)) / den;
        const u = ((x1-x2) * (y1-y3) - (y1-y2) * (x1-x3)) / den;
        if (t > 0 && t < 1 && u > 0) {
            return createVector(x1+t*(x2-x1), y1+t*(y2-y1));
        } else {
            return;
        }

    }
}