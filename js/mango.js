class mango{
	constructor(x,y, diametre)
	{
		var options={
			isStatic:true,
			restitution :0.5,
            friction :1.0,
			}
		this.diametre=diametre;
		this.image=loadImage("images/mango.png")
		this.body=Bodies.circle(x, y, diametre, options)
		World.add(world, this.body);
	}

	display()
	{	
		push()
		translate(this.body.position.x,this.body.position.y);
		imageMode(CENTER);
		image(this.image, 0,0,this.diametre)
		pop()
 }
}