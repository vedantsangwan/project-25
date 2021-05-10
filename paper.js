class paper{
 constructor(x,y,r){
      var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
    
        }
    
        this.x=x;
        this.y=y;
        this.r=r;

        this.image =loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2)
        World.add(world,this.body);
    }
    display(){
        var pp=this.body.position;
        push()
        translate(pp.x, pp.y);
        rectMode(CENTER)
        //strokeWeight(4);
        imageMode(CENTER)
        fill(255)
        image(this.image,0,0,this.r,this.r);
        //rect(0,0,this.wallThickness, this.dustbinHeight);
        pop()

    }

}


