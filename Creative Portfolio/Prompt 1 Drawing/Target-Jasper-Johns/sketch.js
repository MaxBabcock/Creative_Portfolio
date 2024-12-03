let Paint;

function setup() {
  createCanvas(800, 800);
   //Background is a similar red to that of the original art piece 
}

function preload(){
  Paint= loadImage('Paint-texture-splotch.png');
}

function draw() {
  background(180,30,0);

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

  image(Paint,0,0,800,800) //Transparent png that overlays the shapes and background in order to make it look like it hasd texture

  //Drawing is mad eup of three seperate circles, each having a blue outline to match that of the picture and a yellow fill, ecxept for the final circle in the very center, as that is all blue
  //Consistent stroke weight for all circles as that is visible in the original
}
