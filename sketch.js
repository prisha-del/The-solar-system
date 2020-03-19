var sun;
var circleWidth = 5;
var increase = true;
var angle = 0;
var speed = 0.05;


function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  
background(23,50,100);  

frameRate(30);
//textSize(30);
ellipse(window.innerWidth/2,window.innerHeight/2, 50, 50);

stroke(255,255,0);
fill(255,255,0);
//sun.background = "yellow";

//stroke(0,255,0);
}

function draw() {

  background(0,7,61);
  var totalWidth = 50 + circleWidth;
  ellipse(window.innerWidth/2,window.innerHeight/2, totalWidth, totalWidth);

  var circleX = window.innerWidth/2 + 190  * cos(angle);
  var circleY = window.innerHeight/2 + 190  * sin(angle);

  ellipse( circleX,circleY, 50 , 50 );
  stroke(0,255,0);
  fill(0,255,0);
  
  angle = angle + 0.5;

   var radiusX = window.innerWidth/2 - 250 * cos(angle);
   var radiusY = window.innerHeight/2 - 250 * sin(angle);

  ellipse(radiusX,radiusY, 50 , 50 );
  stroke(0,255,0);
  fill(0,255,0);
    
  if(totalWidth < 200 && increase == true){
    circleWidth = circleWidth + 1;
  }else{
    circleWidth = circleWidth - 1;
    increase = false;
  }
  
  if(circleWidth < 40){
    increase = true;
  }
 
 
  drawSprites();
}