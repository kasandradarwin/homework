//Codecore Week 2 homework without the stretches

class Turtle {
    constructor(x,y){
        this.x = x || 0;
        this.y = y || 0;
        this.allpoints = [];
        this.allpoints.push([x,y])
        this.direction = "east"

        //setting the initial values, will be changed and use to set the grid size later.
        this.maxX = this.x;
        this.maxY = this.y;

        //this.minX = this.x;
       // this.minY = this.y;

        
 
    }

    

         //X axis = West <> East
         //Y axis = North <> South
         forward(steps) {
            for(let z = 0; z <steps; z++) {

            //checks to see what the currect direction is, and moved the turtle forward or backward in the right direction
            //iterates through one by one and pushes to allpoints array each time to track every step 
                if (this.direction === "north") {
                    this.y--
                    // if (this.y < 0){
                    //     this.y = 0;
                    // }
                    this.allpoints.push([this.x,this.y])

                } else if (this.direction === "east") {
                    this.x++
                    // if (this.x < 0){
                    //     this.x = 0;
                    // }
                    this.allpoints.push([this.x,this.y])

                } else if (this.direction === "south") {
                    this.y++
                    // if (this.y < 0){
                    //     this.y = 0;
                    // }
                    this.allpoints.push([this.x,this.y])

                } else if (this.direction === "west") {
                    this.x--
                    // if (this.x < 0){
                    //     this.x = 0;
                    // }
                    this.allpoints.push([this.x,this.y])
                }

            }   

            //getting the highest value for the x axis and y axis, will be used to create the grid later

            if(this.x > this.maxX){
                this.maxX = this.x 
            }  else if (this.y > this.maxY){
                this.maxY = this.y
            }

            if(this.x < this.minX){
                this.minX = this.x 
            }  else if (this.y > this.minY){
                this.minY = this.y
            }

            //getting the lowest value for the x axis and y axis, will be used to create the grid later

            return this;
            } 

            right() {
            //checks the current direction to turn the turn "right" from the current direction
                if (this.direction === "north") {
                    this.direction = "east"

                } else if (this.direction == "east") {
                    this.direction = "south"

                } else if (this.direction === "south") {
                    this.direction = "west"

                } else if (this.direction === "west") {
                    this.direction = "north"
                }
                
                return this;

            }
        

            left() {
            //checks the current direction, turns the turtle left

                if (this.direction == "north") {
                    this.direction = "west"

                } else if (this.direction == "east") {
                    this.direction = "north"

                } else if (this.direction == "south") {
                    this.direction = "east"

                } else if (this.direction == "west") {
                    this.direction = "south"
                }
                return this;
            }

            allPoints(){
            return(this.allpoints)
        } 
        
            print(){
                
                let startingPointX = this.allpoints[0][1];
                let startingPointY = this.allpoints[0][1];
                let finalPointX = this.allpoints[this.allpoints.length-1][0]
                let finalPointY = this.allpoints[this.allpoints.length-1][1]
                let xstart = this.minX;
  
                console.log(this.maxX, this.maxY)
                console.log(this.allpoints)

                    const final = [];
                    const slicedpoints = this.allpoints
                    
                    // if (startingPointX < finalPointX){
                    //     this.maxX = this.maxX + startingPointX
                    //     console.log(this.maxX, this.maxY)
                      
                    // }
                    // if (startingPointY < finalPointY){
                    //     this.maxY = this.maxY + startingPointY
                    //     console.log(this.maxX, this.maxY)
                      
                    // }
                    for (let i=0 ; i<this.maxX+2; i++){
                        console.log(this.minX, this.minY)
                    
                        const x = []
                        for(let j=0; j<this.maxY+2; j++){
                          const gridPath = slicedpoints.find((item)=>{
                            return item.join(",")===`${j},${i}` 
                          })
                          if(gridPath) x.push("■")
                          else x.push("□")
                        }
                      
                        final.push(x.join(""))
                      }
                      console.log("--BEGIN LOG")
                      console.log(final.join("\n"))
                      console.log("--END LOG")
            }

            
 }

        
    const flash = new Turtle(0, 4).forward(3).left().forward(3).print();
    //const flash = new Turtle(0, 0).forward(3).left().forward(3);
//flash.print();

    new Turtle(0, 4)
    .forward(3)
    .left()
    .forward(3)
    .right()
    .forward(5)
    .right()
    .forward(8)
    .right()
    .forward(5)
    .right()
    .forward(3)
    .left()
    .forward(3)
    .print();

     new Turtle(0, 0)
    .forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .print()



  
