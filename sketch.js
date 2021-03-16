var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bikes, bike1, bike2, bike3, bike4, bike1Img, bike2Img, bike3Img, bike4Img, trackImg,groundImg;

function preload()
{
  track = loadImage("track.jpg");
  groundImg = loadImage("ground.png");

  bike1Img = loadImage("bike1.jpg");
  bike2Img = loadImage("bike2.jpg");
  bike3Img = loadImage("bike3.jpg");
  bike4Img = loadImage("bike4.png");
}

function setup()
{
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1)
  {
    clear();
    game.play();
  }

  if(gameState === 2)
  {
    game.end()
  }
}