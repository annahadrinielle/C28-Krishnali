class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.chain);
    }


    fly(){
        this.chain.bodyA = null;
        //null means no value
        
    }
    display(){
        //if bodyA is not empty
        //if(var_name)
        if(this.chain.bodyA)
        {
            var pointA = this.chain.bodyA.position;

            console.log(pointA);
            //var pointB = this.chain.bodyB.position;
            strokeWeight(4);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
    
}