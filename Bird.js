class Bird{
constructor(x,y){
var options={
    isStatic:false,
    restitution:0.8,
    friction:1.0,
    density:1.0

}


this.Body=Bodies.rectangle(x,y,50,50,options);
World.add(world,this.Body);
this.w=50;
this.h=50;


}
display(){
    var pos=this.Body.position;
    var angle=this.Body.angle;
    pos.x=mouseX;
    pos.y=mouseY;
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0,0,this.w,this.h)
    pop();
}

}