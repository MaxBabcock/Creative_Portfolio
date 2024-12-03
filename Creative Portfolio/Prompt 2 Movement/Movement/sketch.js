let length1 = 0;
let length2 = 0;
let length3 = 0;
let runme1=false;
let runme2=false;
let runme3=false;
let y1=150
let y2=150
let y3=150
//Three different runme variables so that it runs a different text depending on where the user clicks on the screen, and three different length variables as to not confuse the program with the multiple statements
// Texts are descriptions of characters I have made in my spare time, and meant to be short descriptions of them
// Different Y values are used as to not confuse the program and it let's me edit it according to each section more easily
const ApinText = "Apin is a Vessel created by the pale king, but like many of their kind, was cast out into the abyss due to their emotions. In Apins case, they are rather curious in nature and loves to explore.";
const Apin = ApinText.split(" "); // Convert the text into an an array (list) of words. 

const SonisText = "Sonis is a spirit that hails from the forest of Nibel. They're well versed in the light that gives them strength, and is trained in the magical arts"
const Sonis = SonisText.split(" ")

const PiesherText = "Piesher like Apin is a Vessel, though they are considered more acceptable to their fathers standards. Despite that, they were still deemed a faliure, and now tries to uphold the code imprinted to them at birth"
const Piesher = PiesherText.split(" ")

function setup(){
  createCanvas(1000,1000);
  background(random(125, 255));
  frameRate(4); // How fast the text is generated onto it's different areas  
}

function draw(){

  textSize(30);
    textAlign(CENTER, CENTER);
    text('Apin',175,50); 
    textFont('Tarjan Pro')
    
    textAlign(CENTER, CENTER);
    text('Sonis',500,50); 
    textFont('Tarjan Pro')

    textAlign(CENTER, CENTER);
    text('Piesher',800,50); 
    textFont('Tarjan Pro')

  if (runme1==true) {
  let x = random(50,350);
  y=y1
  y1 += 20;
 if (length1 < Apin.length) { // is length is less-than the number of words in the text
    fill(0);
    stroke(100);
    console.log(length1);
    textSize(25);
    textAlign(CENTER, CENTER);
    text(Apin[length1],x,y); 
    textFont('Tarjan Pro')
    length1++;
  }else{
    length1=0; // reset the counter
    y1=150 //resets the Y value so that it dosent go off of the screen
    background(255); // clear the background 
    background(random(150,200),0,(random(0,100)),(random(100,175)))
  }

}

if (runme2==true) {
  let x = random(350,650);
  y=y2
  y2 += 20;

 if (length2 < Sonis.length) {
    fill(0);
    stroke(100);
    console.log(length2);
    textSize(25);
    textFont('Tarjan Pro')
    textAlign(CENTER, CENTER);
    text(Sonis[length2],x,y); 
    length2++;
  }else{
    length2=0; // reset the counter
    y2=150 // resets the Y value to not go on endlessly
    background(255); // clear the background 
    background(0,(random(50,100)),(random(125,175)),(random(100,175)))
  }

}

if (runme3==true) {
  let x = random(650,950);
  y=y3
  y3 += 20;

 if (length3 < Piesher.length) { 
    fill(0);
    stroke(100);
    console.log(length3);
    textSize(25);
    textFont('Tarjan Pro')
    textAlign(CENTER, CENTER);
    text(Piesher[length3],x,y); 
    length3++;
  }else{
    length3=0; // reset the counter
    y3=150 // Resets the Y value to not go off screen
    background(255); // clear the background 
    background(0,(random(50,200)),(random(0,50)),(random(100,175)))
  }

}
}

function mouseClicked(){
  if (mouseX<300){
    runme1=true;
    runme2=false;
    runme3=false;

    length1=0; // reset the counter
    y1=150 //resets the Y value so that it dosent go off of the screen
    background(255); // clear the background 
    background(random(150,200),0,(random(0,100)),(random(100,175)))
  } else if (mouseX>=300){
    runme1=false;
    runme2=true;
    runme3=false;
    length2=0;
    y2=150 //resets the Y value so that it dosent go off of the screen
    background(255); 
    background(0,(random(50,100)),(random(125,175)),(random(100,175)))
  }

  if (mouseX>=600){
    runme1=false;
    runme2=false;
    runme3=true;
    length3=0;
    y3=150 //resets the Y value so that it dosent go off of the screen
    background(255); 
    background(0,(random(50,200)),(random(0,50)),(random(100,175)))
  }
}