class Log{
    constructor(x,y,height,angle){
    var options={
        isStatic:false,
        restitution:0.8,
        friction:1.0,
        density:1.0
    
    }
    
    
    this.Body=Bodies.rectangle(x,y,20,height,options);
    this.w=20;
    this.h=height; 
    Matter.Body.setAngle(this.Body,angle);
    World.add(world,this.Body);
     }

    display(){
        var pos=this.Body.position;
        var angle=this.Body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("brown");
        fill("brown");
        rect(0,0,this.w,this.h);
        pop();
    }
    
    }