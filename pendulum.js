class Pendulum{
    constructor(x,y,color){
        var options = {
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity
        };
        this.body = Bodies.rectangle(x,y,85,85,options);
        this.x = x;
        this.y = y;
        this.color = color;
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        strokeWeight(1)
        stroke("white")
        ellipse(0, 0, 85, 85);
        pop();
    }
}