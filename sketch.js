function setup() {
  createCanvas(400,8000);
}

function draw() {
  background('red');
  
  let flowerX = 200;
  let flowerY = 200;
  let petalSize = 100;
  let petalDistance = petalSize / 2;

  fill(255, 128, 0);

  // upper-left petal
  circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);

  // upper-right petal
  circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);

  // lower-left petal
  circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);

  // lower-right petal
  circle(flowerX + petalDistance, flowerY + petalDistance, petalSize );

  // center petal
  fill(255, 0, 0);
  circle(flowerX, flowerY, petalSize);
}