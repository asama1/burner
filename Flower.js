class Flower{
  constructor(x, y, col){
this.x = x;
    this.y = y;
    this.filler = col;
    this.r = 20;
  }
  
  show(){
    fill(this.filler, this.x, this.y);  
    ellipse(this.x, this.y, this.r*2, this.r*2)
    if(this.x > width){
      this.x -= width;
      this.y += 58;
    }
  
  }
  moveDown(){
    this.x++;
  }
  
}
