// Define the global variables.
// The symmetry variable will define how many reflective sections the canvas
// is split into.
let symmetry = 6;

// The angle button will calculate the angle at which each section is rotated.
let angle = 360 / symmetry;
let jojilink;

// The setup function runs once when the program starts. It's used to define
let myLink;
let r = 50,
  g = 50,
  b = 50;

function setup() {
  describe(
    `Dark rgb(0,0,0) canvas that reflects the lines drawn within it in ${symmetry} sections.`
  );
  let myCanvas2 = createCanvas(windowWidth, windowHeight);
  myCanvas2.parent('kaleidoscope');
  angleMode(DEGREES);
  let myLink = createA('poetrypage.html', 'poetry');
  
  // Position it on the canvas
  myLink.position(200, 710);

    // Customize appearance
  myLink.style('color', 'deeppink');
  myLink.style('font-size', '24px');
  myLink.style('text-decoration', 'none'); // Removes the underline
  myLink.style('background-color', 'black');

  let jojilink = createA('jojiintermission.html', 'joji');
  
  // Position it on the canvas
  jojilink.position(1400, 50);

    // Customize appearance
  jojilink.style('color', 'cyan');
  jojilink.style('font-size', '24px');
  jojilink.style('text-decoration', 'none'); // Removes the underline
  jojilink.style('background-color', 'black');
 

}

function draw() {
   background(r, g, b);
   r = map(mouseX, 0, 400, 50, 255); //map the red value to the x location of the mouse
  b = map(mouseY, 0, 400, 50, 255); //map the blue value to the y location of the mouse

  // Move the 0,0 coordinates of the canvas to the center, instead of in
  // the top left corner.
  translate(width / 2, height / 2);

  // If the cursor is within the limits of the canvas...
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    // Translate the current position and the previous position of the
    // cursor to the new coordinates set with the translate() function above.
    let lineStartX = mouseX - width / 2;
    let lineStartY = mouseY - height / 2;
    let lineEndX = pmouseX - width / 2;
    let lineEndY = pmouseY - height / 2;
 
    if (mouseX < 300) {
    fill(0);
    noStroke();
    text("poetry", -690, 270);
    textSize(200);

    //if goes right of line
  } else {
    fill(0);
    noStroke();
    text("joji", 450, 270);
    textSize(200);
  }

    // And, if the mouse is pressed while in the canvas...
    if (mouseIsPressed === true) {
      // For every reflective section the canvas is split into, draw the cursor's
      // coordinates while pressed...
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        stroke(255);
        strokeWeight(3);
        line(lineStartX, lineStartY, lineEndX, lineEndY);

        // ... and reflect the line within the symmetry sections as well.
        push();
        scale(1, -1);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        pop();
      }
    }
  }
}

