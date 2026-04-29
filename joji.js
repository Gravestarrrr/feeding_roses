let myFont; //Custom Font
let x = 0; //Coordinates
let y = 0; //Coordinates
var gap = 20; //For Line Marks
let mySound; //Audio
let started = false; // Audio Loop
let cursorImg; //Cursor Image
let bite1; //Animal Showing Teeth
let bite2; //Pixelated Showing Teeth
let joji; //joji logo

//Loading All My Assets / Global variables
function preload() {
  myFont = loadFont("Jojiassets/8bitOperatorPlus8-Regular.ttf");
  mySound = loadSound("Jojiassets/PIXELATED KISSES.mp3");
  cursorImg = loadImage("Jojiassets/satellite.png");
  bite1 = loadImage("Jojiassets/firstredbite.jpg");
  bite2 = loadImage("Jojiassets/secondredbite.jpg");
  joji = loadImage("Jojiassets/mygoat.jpg");
}

//Setting all the local settings
function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('hi');
  colorMode(HSB, 360, 100, 100); //more control over colors but not best method!
  background(0, 80, 50);
  textAlign(CENTER);
  textFont(myFont);
  noCursor();
}

//Function to loop and play Music, SHOUT ELLIE
function mousePressed() {
  // unlock audio context on user gesture
  userStartAudio();
  if (!started) {
    mySound.loop();
    started = true;
  } else {
    // optional toggle
    if (mySound.isPlaying()) mySound.pause();
    else mySound.loop();
  }
}

function draw() {


  fill(5, 80, 100);
  textSize(48);
  stroke(0);
  text("PIXELATED KISSES", x++, y++); //Animating Text

  fill(0);
  noStroke();
  rect(random(width), random(50, 800), 50); //Covering Canvas

  fill(0);
  rect(100, random(height), 50); //Covering Canvas

  rect(random(100), random(height), 50); //Covering Canvas

  tint(random(0, 100));
  image(bite1, 400, 200, 450, 450); //Flashing Image

  image(bite2, 400, 200, 450, 450); //Base Image

  fill(6, 70, 100);
  stroke(0);
  textSize(80);
  text("10191029102922098", 600, y++); //Text

  fill(255);
  noStroke();
  textSize(100);
  textLeading(80);
  text("NOTHING IS REAL", 620, 370, random(2, 30)); //Text
  stroke(0);
  strokeWeight(2);

  fill(5, 80, 100);
  rect(random(width), random(height), 10); //Filling Canvas

  image(joji, random(20, 1500), random(0, 2000), 200, 200); //Logo Filling Canvas

  fill(255);
  textAlign(CENTER);
  textSize(26);
  stroke(0);
  text(
    "pixelatated kisses got me going insane replicate this moment from a million miles away waiting for the signal baby, never make a sound if you never hear from me all the satellites are down yeah theyre fucking down falling through the atmosphere right now baby are you really down? baby are you really down?",
    20,
    1200 - (frameCount % 2000),
    400
  ); //Running Lyrics

  fill(255);
  circle(random(50, 1000), random(0, 800), random(5, 10)); //Adding more shapes

  fill(0);
  stroke(20);
  strokeWeight(0.2);
  rect(random(200, 800), random(0, 800), random(100, 50), random(50, 100)); //Filling       Canvas

  fill(80);
  stroke(255);
  strokeWeight(0.2);
  rect(random(100, 800), random(50, 1000), random(50, 100), random(10, 100));
  //Filling Canvas

  fill(5, 10, 100);
  noStroke();
  rect(random(0, 800), random(50, 1000), random(50, 100), random(10, 100));
  //Filling Canvas

  maze(); //random code to go with line grids but barely visible

  fill(255);
  image(cursorImg, mouseX, mouseY); //Satellite Cursor
}



function maze() {
  stroke(450);
  strokeWeight(2);
  if (random(2) < 0.5) {
    // The if statement changes the direction of the lines.
    line(x, y, x + gap, y + gap);
  } else {
    line(x, y + gap, x + gap, y);
  }

  x = x + 10; //This allows the lines to go across the canvas.
  if (x > width) {
    x = 0;
    y = y + gap;
  }
}

//Resources and Such
// https://editor.p5js.org/p5/sketches/Typography:_Text_Rotation

// https://editor.p5js.org/xinxin/sketches/6GBSGiQGT

// https://editor.p5js.org/Sylvesterd2/sketches/B1kLLJ82b

// https://p5js.org/reference/p5/textLeading/

// https://coolors.co/palettes/popular/black

// https://www.youtube.com/watch?v=PSDUMZRYWRU