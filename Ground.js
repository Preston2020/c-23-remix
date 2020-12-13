class Ground{
    constructor(x,y,width,height){

        var option={
            isStatic: true
        }
        this.box=Bodies.rectangle(x,y,width,height,option)
        World.add(Myworld, this.box)
        this.width=width
        this.height=height

    }
    print(){
        rectMode(CENTER)
        fill("blue")
        rect(this.box.position.x, this.box.position.y, this.width,this.height)
    }
}