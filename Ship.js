class Ship{
  constructor(){
    
    
    this.x = width/2;
    this.y = height;
   // this.health = 100
  }
  
  
  show(){
    // player model
    noStroke()
    fill(0);
    rect(this.x, this.y - 20,  20, 20);
    
  }
  
  move(){
   
      // the movement of the player
    if (keyIsDown(RIGHT_ARROW) && this.x+20<400){
 this.x+= 3;
      
    } else if (keyIsDown(LEFT_ARROW)&& this.x > 0){
      this.x -= 3;
    }
  }
}

