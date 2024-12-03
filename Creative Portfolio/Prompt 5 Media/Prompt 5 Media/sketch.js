let Yuji;
let Kaikai;
let Sukuna;
let Specialz;
//functions to load everything

function preload(){
  Yuji= loadImage('Yuji-HAlf.jpeg');
  Sukuna= loadImage('Sukuna-Half.jpeg');
  Kaikai=loadSound('KaiKai Kitan.mp3');
  Specialz=loadSound('SPECIALZ.mp3');
  }
//The whole image was cut into two by myself and combined to make it seem whole, which makes it easier to make one side appear depending on which Key is pressed
function setup() {
  createCanvas(800, 800);
  background (155);
}
function draw(){
  fill(255)
  rect(45,10,125,200)
  textSize(12)
  textFont('Tarjan Pro')
  fill(0)
  text('Press Y to play Kaikai',50,30)
  fill(0)
  text('Press S to play Specialz',50,60)
  fill(0)
  text('Press R to restart music',50,90)
  fill(0)
  text('Press space for full image + the current song',50,110,120,80)
  fill(0)
  text('Press Y and S again to play song after restarting',50,160,120,80)
}

function keyPressed(){
  if(key==='r'){
    Kaikai.stop();
    Specialz.stop();
    //Restart function that pauses song and plays it from the begining, an individual pause key was going to be added but due to the way the code is structured for Y and S, it would just restart the song even after the pause, so it's not really needed
  }else if(key ==='s'){
    background(0)
    image(Sukuna,400,0,400,800);
    Specialz.stop();
    Specialz.play();
    Specialz.amp(0.3)
    Kaikai.pause();
    console.log();
  }else if(key ==='y'){
    background(202,103,90)
    image(Yuji,0,0,400,800);
    Kaikai.stop();
    Kaikai.play();
    Kaikai.amp(0.1);
    Specialz.pause();
 }else if(keyCode === 32){
    image(Yuji,0,0,400,800);
    image(Sukuna,400,0,400,800);
 }

 }
 //above is the code for making Either side appear at the press of the Y and S keys (the two characters names start with those letters, so I assigned them to each key), with a keycode used for spacebar to make a whole image

 /*if(SongNumber=1){
  Kaikai.stop();
  Specialz.play();
 }else if (SongNumber=2){
  Specialz.stop();
  Kaikai.play();
 }*/