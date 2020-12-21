class Mango{
    constructor(x, y){
        var options = {
            isStatic: true,
            rstitution: 0,
            friction: 1
        }
        this.body = Bodies.circle(x, y, 15, options);
        this.x = this.body.position.x;
        this.y = this.body.position.y;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
    }
}