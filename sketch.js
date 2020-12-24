var secondAngle, minuteAngle, hourAngle, val;

function setup() {
  createCanvas(1000,1000);
  hr = hour();
  mn = minute();
  sc = second();
  console.log(hr - 12 + ":" + mn + ":" + sc)
}

function draw() {
  background("black");
  angleMode(DEGREES);
  noFill();
  hr = hour();
  mn = minute();
  sc = second();

  secondAngle = map(sc, 0, 60, 0, 360);
  minuteAngle = map(mn, 0, 60, 0, 360);
  hourAngle = map(hr, 0, 12, 0, 360);

  //ellipse(width/2, height/2, 400, 400);

  push();
  translate(width/2,height/2);
  rotate(secondAngle-90);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,300,0);
  arc(0,0,width,height,0,secondAngle,OPEN);
  pop();
  

  push();
  translate(width/2,height/2);
  rotate(minuteAngle-90);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,200,0);
  arc(0,0,width-20,height-20,0,minuteAngle,OPEN);
  pop(); 
  

  push();
  translate(width/2,height/2);
  rotate(hourAngle-90);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  arc(0,0,width-40,height-40,0,hourAngle,OPEN);
  pop(); 
  
}