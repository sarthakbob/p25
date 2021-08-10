class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h

        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body);
    }
    display(){
        var paperpos = this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("brown");
        rect(0,0,this.w,this.h);
        pop();
    }
}
