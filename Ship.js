class Ship{
  constructor(){
    
    
    this.x = width/2;
  }
  
  
  show(){
    noStroke()
    fill(225);
    rect(this.x, height - 20,  20, 20);
    
  }
  
  move(){
   
      
    if (keyIsDown(RIGHT_ARROW) && this.x+20<400){
 this.x++;
      
    } else if (keyIsDown(LEFT_ARROW)&& this.x > 0){
      this.x--;
    }
  }
}

