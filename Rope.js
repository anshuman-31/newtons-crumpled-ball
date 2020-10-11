class Rope {
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX,
        this.offsetY=offsetY
          var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        //console.log(options);
        this.rope=constraint.create(options);
        World.add(world,this.rope)
        





        




    }





}