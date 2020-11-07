class Boy {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("PLuckingmangoes/boy.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      //rect(0,0,this.width, this.height)
      //fill("white");
      imageMode(CENTER);
      image(this.image,0,0, this.width, this.height);
      pop();
    }
  };