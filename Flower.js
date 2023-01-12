class Flower{
 // flower varibles
  constructor(x, y, col){
this.x = x;
    this.y = y;
    this.filler = col;
    this.r = 20;
    this.health = this.r;
  }
  
  show(){
    // flower model
    fill(this.filler, this.x, this.y);  
    ellipse(this.x, this.y, this.r*2, this.r*2)
    if(this.x > width){
      this.x -= width;
      this.y += 58;
    console.log(this.r)
    } else if (this.r === 0){
      this.y -= 100;
      this.r = 20;
     
   }
  
  }
  moveDown(){
    // the flower moves down
    this.x++;
  }
  
  fire(){
    
  }
  
  gameOver(that){
    // puts a gameover screen if the flowers get past the player
    if (this.y > that.y){
     this.y = 9000;
      background(400)
      textSize(30);
      fill(300, 0, 0)
      text('Game Over', 125, 200);
    }
  }
}
