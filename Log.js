class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
   // this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.visibility=225;
  }
  score() {
    if(this.visibility<0 && this.visibility>-105) {
      score++;
    }
  }
  display() {
    fill("pink");
    if(this.body.speed<5) {
      super.display();
    } else {
      World.remove(world,this.body);
      this.visibility=this.visibility-5;
    }
  }

}