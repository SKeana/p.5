function setup() {
  createCanvas(500, 500);
  background(225, 0, 0); 
}

function draw() {
  fill(0, 0, 225);
  noStroke();
  rect(mouseX, mouseY, 24);
 
}


// this watching to learn (https://www.youtube.com/watch?v=7A5tKW9HGoM)
/*
  When looking at the way that the function are set up setup is only done onese and first that why we put canvas there but draaw on the other hand happen all the time
  and the order is from top to bottom then back to the top and this loop will happen untill you stop the program.
  there are times when you want you shap to follow the mose and this is why p5 give you a var call mouse the it can follow x or y.
  when trying to cover the background with what the anamation you are running is because the background is at the top and getting draw agin and agin, but moving it to the
  setup part means it will not change.

*/