class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("monster1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		//this.sound=loadSound("mixkit-medieval-show-fanfare-announcement-226");
		World.add(world, this.body);

	}
	display()
	{
		//console.log(this.body.speed);
		if(this.body.speed>10){
			fill("red");
			textSize(32)
			text("congratulation you killed the Monster",900,50);
			//this.sound.play();
		}			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}
}
