let ship;
let gun = [];
let flowers = [];
function setup() {
  createCanvas(400, 400);
  ship = new Ship();
  //gun = new bullets(10, 10);
  for (let i = 0; i < 10; i++){
    flowers[i] = new Flower(random(width) && i * 80+ 40, 30, random(height));
  }
  
}

function draw() {
  background(220, 150, 200);
  ship.show();
  ship.move();
  keyPressed();
  for (let i = 0; i < gun.length; i++){
    gun[i].show();
    gun[i].shoot();
    
    
     for (let j = 0; j < flowers.length; j++){
   if (gun[i].hitz(flowers[j])){
     console.log('boom')
     gun[i].done()
   }
  }
  }
  for (let i = 0; i < flowers.length; i++){
    flowers[i].show();
    flowers[i].moveDown();
  }
  
}

for (let i = gun.length-1; i >= 0; i--){
if (gun[i].toDelete){
  gun.splice(i, 1)
}

}
function keyPressed(){          
  if (keyIsDown(UP_ARROW)){
    let shots = new bullets(ship.x + 10, 370);
    gun.push(shots);
}
  
}
