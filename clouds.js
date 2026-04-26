const sketch1 = (p) => {
  let cloudx = 10;
  let cloudy = 100;

  p.setup = () => {
    // We target the ID 'javascriptone' right here in the constructor below
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(155, 186, p.mouseY);
    
    // Call custom functions using p.
    makeCloud(cloudx, cloudy - 50);
    makeCloud(cloudx + 100, cloudy + 100);
    makeCloud(cloudx + 200, cloudy + 300);
    makeCloud(cloudx + 50, cloudy + 200);
    makeCloud(cloudx + 500, cloudy + 200);
    makeCloud(cloudx + 300, cloudy + 100);
    makeCloud(cloudx + 400, cloudy + 10);
    makeCloud(cloudx + 0, cloudy + 450);
    makeCloud(cloudx + 250, cloudy + 400);
    makeCloud(cloudx + 80, cloudy + 360);
    makeCloud(cloudx + 500, cloudy + 420);
    makeCloud(cloudx + 600, cloudy + 320);
    makeCloud(cloudx + 400, cloudy + 270);
    makeCloud(cloudx + 170, cloudy + 10);
    makeCloud(cloudx + 600, cloudy + 100);
    makeCloud(cloudx + 600, cloudy - 50);
    
    p.fill(220);
    p.noStroke();
    cloudx += 0.3;
  };

  // Custom function also lives inside the wrapper
  function makeCloud(cx, cy) {
    p.fill(250);
    p.noStroke();
    p.ellipse(cx, cy, 140, 120);
    p.ellipse(cx + 5, cy + 30, 140, 120);
    p.ellipse(cx - 70, cy + 20, 140, 120);
  }
};

// This initializes the sketch and puts it in the 'javascriptone' div
new p5(sketch1, 'javascriptone');

// let cloudx = 10;
// let cloudy = 100;
// //var cloudw = 70;
// //var cloudh = 50;

// function setup() {
// //   createCanvas(windowWidth, windowHeight);
//   let myCanvas1 = createCanvas(windowWidth, windowHeight);
//   myCanvas1.parent('javascriptone');
// }

// function draw() {
//   background(155, 186, mouseY);
//   makeCloud(cloudx, cloudy-50);
//   makeCloud(cloudx + 100, cloudy + 100)
//   makeCloud(cloudx + 200, cloudy + 300)
//   makeCloud(cloudx + 50, cloudy + 200)
//   makeCloud(cloudx + 500, cloudy + 200)
//   makeCloud(cloudx + 300, cloudy + 100)
//   makeCloud(cloudx + 400, cloudy + 10)
//   makeCloud(cloudx + 0, cloudy + 450)
//   makeCloud(cloudx + 250, cloudy + 400)
//   makeCloud(cloudx + 80, cloudy + 360)
//   makeCloud(cloudx + 500, cloudy + 420)
//   makeCloud(cloudx + 600, cloudy + 320)
//   makeCloud(cloudx + 400, cloudy + 270)
//   makeCloud(cloudx + 170, cloudy + 10)
//   makeCloud(cloudx + 600, cloudy + 100)
//   makeCloud(cloudx + 600 , cloudy-50)
//   fill(220)
//   noStroke();
//   cloudx+=0.3;
// }


// function makeCloud(cloudx, cloudy) {
//   fill(250)
//   noStroke();
//   ellipse(cloudx, cloudy, 140, 120);
//   ellipse(cloudx + 5, cloudy + 30, 140, 120);
//   ellipse(cloudx - 70, cloudy + 20, 140, 120);
// }

// // //Reference Code
// // https://editor.p5js.org/mena-landry/sketches/D7ql4Nd3V