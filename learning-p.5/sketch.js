// This is where your p5.js code from the video goes
// For example, from the video:

function setup() {
  createCanvas(400, 300); // 400 width, 300 height as in the video
  // You might want to uncomment and try rectMode here later:
  // rectMode(CENTER);
}

function draw() {
  background(220, 200, 200); // A light pink background, similar to the video

  // The line is drawn first, so it will be behind the rectangle
  line(0, 50, 400, 300);

  // The rectangle
  rect(150, 75, 150, 150);
}