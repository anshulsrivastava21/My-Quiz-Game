var gameState = 0;
var contestantCount;
var database;
var quiz;
var question,contestant;

function setup(){
  canvas = createCanvas(1200,500);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  
}


function draw(){
  background("pink")

  drawSprites();
}