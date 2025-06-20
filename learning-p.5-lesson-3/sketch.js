function setup() {
  createCanvas(500, 500); 
}

function draw() {
  background(225, 0, 0); // A light pink background, similar to the video
  fill(0, 0, 225);
  stroke(255, 225, 225);
  strokeWeight(1);
  rect(130, 105, 150, 150, 20);
  stroke(100);
  strokeWeight(2);
  fill(0, 0, 0, 150);
  triangle(230, 275, 258, 220, 286, 275);
}


// this watching to learn (https://www.youtube.com/watch?v=riiJTF5-N7c)
/*
There are different way to do colour with p5 but this way that we are learning in this lesson is using RGB. The amount rang is from 0-225 (that means there are 226 optiong).
This lesson is mostly about the different type and way of colouring and the doc has a secontion on it (https://p5js.org/reference/), The order of the shapes and colour follow
the same idea on what come first work on what come after, so to change the color of shap one you would make the fill and stoke before and to have a different colour you would
do another fill and stoke before shape 2.

*/