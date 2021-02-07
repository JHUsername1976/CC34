class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,pointB:pointB,stiffness:1.3,length:500
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        
        
    World.add(world,this.rope);
    
    }
    display(){
        if(this.rope.bodyA){
            var A = this.rope.bodyA.position;
            var B = this.pointB;
            push(); 
            stroke("brown");
            strokeWeight(7);
            line(A.x,A.y,B.x,B.y);
        pop();}
    }
    
}   