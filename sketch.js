let myCanvas;
function setup() {
  myCanvas = createCanvas(windowHeight,windowHeight);
//createCanvas(windowHeight,windowHeight);
  background(255);
  angleMode(DEGREES);
  strokeWeight(0.1);
  stroke(0);
  noCursor();
  m= width/3;
  n= 0;
  textSize(12);
  textFont('Helvetica');
  fill(0);
  text('Drag to move', width/6, height/6);
  text('Double click to redraw', width/6, height/6+15);
}

function draw() {
  translate(width/2,height/2);
  myCanvas.position(-0.1*winMouseX, -0.1*winMouseY);
  line(m,n,cos(frameCount*3)*width/3,sin(frameCount*3)*height/3);
  if (mouseIsPressed){
      m=mouseX-width/2;
      n=mouseY-height/2;
  }
}
function doubleClicked(){
  background(255);
}
