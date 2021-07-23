class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null
    }
    attach(body){
        this.sling.bodyA = body
    }
    
    display(){
        if(this.sling.bodyA){
            imageMode(CENTER)
            image(polygon_img, polygon.position.x, polygon.position.y, 40,40);
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            stroke("grey");
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}