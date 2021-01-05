class Chain{
constructor(x,y){
    var options = {
        bodyA: x,
        bodyB : y,
        stiffness : 0.5,
        length : 100
    }
    this.constraint = Matter.Constraint.create(options)
 World.add(world,this.constraint);

}
display(){
    var pointA = this.constraint.bodyA.position
    var pointB = this.constraint.bodyB.position
    line(pointA.x,pointA.y, pointB.x, pointB.y );
}
}