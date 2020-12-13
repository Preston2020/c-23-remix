class Box{
    constructor(x,y,width,height){

        var option={
            restitution: 0.8,friction:0.3,density:1.0
        }
        this.box=Bodies.rectangle(x,y,width,height,option)
        World.add(Myworld, this.box)
        this.width=width
        this.height=height

    }
    print(){
        var angle = this.box.angle
        push()
        translate(this.box.position.x,this.box.position.y)
        angleMode(RADIANS)
        rotate(angle)
        rectMode(CENTER)
        fill("red")
        rect(0, 0,this.width, this.height)
        pop()
    }
}