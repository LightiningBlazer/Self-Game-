class Shooter{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.04
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        console.log(this.sling.bodyA.position);
        this.BowImage = loadImage("Images/Bow.png");
    }
    display(){
        var pointAX = this.sling.bodyA.position.x;
        var pointAY = this.sling.bodyA.position.y;
        var pointBX = this.sling.pointB.x;
        var pointBY = this.sling.pointB.y;
        stroke("white");
        line(pointAX,pointAY,pointBX,pointBY);
        //imageMode(CENTER);
        //image(this.BowImage,100,200,50,250);
    }
}