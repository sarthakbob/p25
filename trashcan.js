class Trashcan{
    constructor(x,y){
        var options={
            isstatic:true,
        }
        this.x=x;
        this.y=y;
        this.trashcanWidth=200;
        this.trashcanHeight=100;
        this.wallthickness=20;
        this.angle = 0;
        this.image = loadImage("dustbingreen.png")
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
        Matter.Body.setAngle(this.leftWallBody, this.angle);
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
        Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
        World.add(world,this.bottomBody);
        World.add(world,this.leftWallBody);
        World.add(world,this.rightWallBody);
    }
    display(){
        var posBottom = this.bottomBody.position;
        var posright = this.rightWallBody.position;
        var posleft = this.leftWallBody.position;
        push();
        translate(posleft.x,posleft.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke(255);
        fill(255);
        rotate(this.angle)
        //rect(0,0,this.wallthickness,this.dustbinHeight);
        pop();

        push();
        translate(posright.x,posright.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke(255);
        fill(255);
        rotate(-1*this.angle)
        //rect(0,0,this.wallthickness,this.dustbinHeight);
        pop();

        push();
        translate(posBottom.x,posBottom.y);
        imageMode(CENTER);
        stroke(255);
        fill(255);
        image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
        
        pop();
    }
}
