class Canon{
  constructor(x,y,w,h,angle){
    this.w = w
    this.x = x 
    this.h = h
    this.y = y
    this.angle = angle
    this.imaga = loadImage("assets/cannonBase.png")
    this.image = loadImage("assets/canon.png")
  }
  method(){
    image(this.imaga,150,190,20,30)
    push();
    translate (this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h);
    pop();
  }
}