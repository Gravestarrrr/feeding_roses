let MySound;

function preload() {
    soundFormats('mp3', 'ogg');
    MySound = loadSound('missionfailed.mp3');
}
function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('nextbox');
}

function draw() {
  background(220, mouseX, mouseY);
  text('to be continued...', 100, 100);
  noStroke();
  fill(0);
  rect(random(width), random(height), 50, 50);

  if (mouseX < 500) {
    fill('pink');
    text('back home', 100, 200);
    noStroke();
    rect(random(width), random(height), 50, 50);
  }
}

function mousePressed() {
  if (MySound.isPlaying()) {
    // If playing, stop it
    MySound.stop();
  } else {
    // If not playing, play it
    MySound.play();
  }
}

// This is the poetry world that I built using gifs from GifCities with my own poem assets