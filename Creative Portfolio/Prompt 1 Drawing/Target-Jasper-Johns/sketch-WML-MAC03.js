function setup() {
  createCanvas(800, 800);
  background(180,30,0);
   //Background is a similar red to that of the original art piece 
}

function draw() {

  fill(227,215,57);
  stroke(31,56,96);
  strokeWeight(80);
  circle(400,400,700);

  fill(227,215,57);
  stroke(31,56,96);
  strokeWeight(80);
  circle(400,400,350);

  fill(31,56,96);
  stroke(31,56,96);
  strokeWeight(80);
  circle(400,400,50);

  //Drawing is mad eup of three seperate circles, each having a blue outline to match that of the picture and a yellow fill, ecxept for the final circle in the very center, as that is all blue
  //Consistent stroke weight for all circles as that is visible in the original
}
