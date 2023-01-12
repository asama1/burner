class bullets{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 1
    this.toDelete = false;
  }
  
  show(){
    // bullet model
    ellipse(this.x, this.y, this.r *2, this.r*2);
  }
  done(){
    // suppose to delete the bullet after it hits the flower, however doesnt work at the moment
    this.toDelete = true;
  }
  shoot(){
    //moves bullets
    this.y -= 4.5;
  }
  
  hitz(flower){
    //checks if flower touches the bullet through checking the radius collision check
    let d = dist(this.x, this.y, flower.x, flower.y);
    // if flower gets hit then it shrinks in size
    if(d < this.r + flower.r && flower.r > 0){
      flower.r-=5;
      return true;
    } else {
      
      return false;
    }
  }

}
