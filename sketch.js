// varibles
let ship;
let gun = [];
let flowers = [];
this.ammo = 150;
//let m = millis();
function setup() {
  
  createCanvas(400, 400);
  //creates the players onto the canvas
  ship = new Ship();
  //gun = new bullets(10, 10);
  //draws every flower seperatly
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
    //draws and records every indivial bullet
    gun[i].show();
    gun[i].shoot();
    
    
     for (let j = 0; j < flowers.length; j++){
       //checks if the bullets has hit any of the flowers
   if (gun[i].hitz(flowers[j])){
     console.log('boom')
     gun[i].done()
     this.ammo += 0.5
     
   }
  }
  }
  for (let i = 0; i < flowers.length; i++){
    flowers[i].show();
    flowers[i].moveDown();
    flowers[i].gameOver(ship);
  }
  fill(400)
  textSize(12)
  text(ammo, ship.x, 395)
}

for (let i = gun.length-1; i >= 0; i--){
if (gun[i].toDelete){
  gun.splice(i, 1)
}

}
function keyPressed(){   
  //lets player fire the bullets
  if (keyIsDown(UP_ARROW)){
    let shots = new bullets(ship.x + 10, 370);
    if(this.ammo > 0){
    gun.push(shots);
      this.ammo -= 1;
}
  } else if (keyIsDown(DOWN_ARROW)){
    if(this.ammo < 30){
      this.ammo += 0.5
    }

             }
  
}
