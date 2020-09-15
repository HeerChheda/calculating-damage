var wall, speed, weight, thickness, bullet;



function setup() {
createCanvas(1600, 700);

speed = random(55, 90);
weight = random(400, 1500);

bullet = createSprite(60, 220, 25, 25);
bullet.velocityX = speed;

wall = createSprite(1500, 200, 20, 200);

thickness = random(22,83);



}

function draw() {
  background(0,0,0); 
  
  if (hasCollieded(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed /(thickness*thickness*thickness);

    if (damage>10) {
      wall.shapeColor = color (255,0,0);
    }



    if (damage<10) {
      wall.shapeColor = color (0,255,0);
    }

  }
  

  drawSprites();

}

function hasCollieded (lbullet,lwall) {
  bulletRightEdge = lbullet.x +lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}









