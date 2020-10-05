class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    //this.image = loadImage("sprites/enemy.png");
    this.visibility=225;
  }
  score() {
    if(this.visibility<0 && this.visibility>-105) {
      score++;
    }
  }
  display() {
    fill("greens");
    if(this.body.speed<5) {
      super.display();
    } else {

      World.remove(world,this.body);
      this.visibility=this.visibility-5;
    }
  }
};