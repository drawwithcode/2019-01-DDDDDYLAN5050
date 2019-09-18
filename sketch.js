function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //background(20);
  angleMode(DEGREES);
  noFill();
  colorMode(HSB);
  // put setup code here
}

function draw() {

  stroke(mouseX/800*255,mouseY/600*255,240);
  fill(50);
  if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
