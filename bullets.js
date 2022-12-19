class bullets{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 1
    this.toDelete = false;
  }
  
  show(){
    ellipse(this.x, this.y, this.r *2, this.r*2);
  }
  done(){
    this.toDelete = true;
  }
  shoot(){
    this.y -= 4.5;
  }
  
  hitz(flower){
    let d = dist(this.x, this.y, flower.x, flower.y);
    
    if(d < this.r + flower.r){
     // flower.r-=10;
      return true;
    } else {
      return false;
    }
  }

}

