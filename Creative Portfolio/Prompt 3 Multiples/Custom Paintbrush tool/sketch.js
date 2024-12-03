let size = [50,80,100,200,400]; // Array of sizes for the ellipse that trigger when pressing a certain number key
let strokeSize = [5,10,20,30,40]; // Array of sizes for the stroke around the ellipse, also triggered by numbered keys
let rgba = [20, 20, 20, 20]; //Starting values for the colour, is changed later when the R, G and B keys are pressed
let currentsize;
let currentStroke;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200)
}

function draw() {
  fill(rgba);
  strokeWeight=(currentStroke)
  ellipse(mouseX, mouseY, currentsize, currentsize);
  }
//main draw function

function keyPressed(){
if(key=='r'){
  rgba[0] = random(0,255);
 }else if(key=='g'){
  rgba[1] = random (0,255);
 }else if(key=='b'){
  rgba[2] = random (0,255);
 }else if(key=='a'){
  rgba[3] = random (0,255);
 }
 //this determines the colour keys and how they react when pressed

 if(key=='1'){
  currentsize=size[0]
  }
  
  if(key=='2'){
    currentsize=size[1]
  }
  
  if(key=='3'){
    currentsize=size[2]
  }
  
  if(key=='4'){
    currentsize=size[3]
  }

  if(key=='5'){
    currentsize=size[4]
  }

  if(key=='6'){
    currentStroke=strokeSize[0]
    }
    
    if(key=='7'){
      currentStroke=strokeSize[1]
    }
    
    if(key=='8'){
      currentStroke=strokeSize[2]
    }
    
    if(key=='9'){
      currentStroke=strokeSize[3]
    }

    if(key=='0'){
      currentStroke=strokeSize[4]
    }
//Changes the size of the circle depending on which key is pressed, and the other number keys change the stroke weight
//A seperate variable needed to be used for the size of the circle as if you used the same size arrary, it would overide and not appear when a new size was sellected
}