let x=400;
let y=400;
let myFill = 255;
let score = 0; 
let Coin;
let coinSound;
let gameOverMusic;
let r = 135;
let g = 206;
let b = 235;
let countDown = 60
setInterval(timerCountdown,1000)

function setup() {
  createCanvas(800, 800);
}

function preload(){
Coin=loadImage('Coin Spin.gif')
coinSound=loadSound('Coin_sound.mp3')
gameOverMusic=loadSound('Death_music.mp3')

}

function draw(){
  background(r,g,b); // Sky blue background
  image(Coin,x,y, 100,100); // x, y, size
  fill(0)
  textSize(30)
  text('Score:'+score,100,100)
  text('Time Left:'+countDown,100,150)
  fill(0)
  textSize(50)
  textAlign (CENTER,CENTER)
  text('60 second coin clicker',400,50)
}

  function mouseClicked(){
  let distance = dist(x, y, mouseX, mouseY); 
  if(distance <= 100){
    myFill = [255, 0, 0];
    x=random(50,750)
    y=random(50,750)
    score++
    r= (random(135,255))
    g= (random(206,255))
    b= (random(235,255))
    coinSound.play();
  }
}

function timerCountdown(){
  if (countDown>0){
    countDown--
  }else{if(countDown==0){
    gameOverMusic.play();
    window.alert ('Game Over! Your score was '+score+'. Please reload page to play again ^w^')
  }
console.log (countDown)
  }
}