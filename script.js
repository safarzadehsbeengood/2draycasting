var cnv;
let ray;
let boundaries = [];
let n = 6;
let player;

function ptc(r, a) {
  return createVector(r*cos(a), r*sin(a));
}


function setup() {
  cnv = createCanvas(windowWidth-100, windowHeight-100);
  cnv.position((windowWidth-width)/2, (windowHeight-height)/2);
  for (let i = 0; i < n; i++) {
    boundaries.push(new Boundary(random(width), random(height), random(width), random(height)));
  }
  // top
  boundaries.push(new Boundary(-1, -1, width, -1));
  // left
  boundaries.push(new Boundary(-1, -1, -1, height));
  // right
  boundaries.push(new Boundary(width, -1, width, height));
  // bottom
  boundaries.push(new Boundary(-1, height, width, height));

  player = new Player();
}

function draw() {
  strokeWeight(1);
  background(0);
  for (b of boundaries) {
    b.show();
  }
  player.update(mouseX, mouseY);
  player.show();
  player.look(boundaries);
  noFill();
  stroke(255);
  rect(0, 0, width, height);
}
