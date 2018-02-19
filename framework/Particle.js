class Particle{
	constructor(x,y,speed,direction,acc){
		this.position = new Vector2(x,y);
		this.velocity = new Vector2(0,0,direction,speed);
		this.acc=acc||new Vector2(0);
		this.radius=10;
	}

	setAcc(acc){
		this.acc=acc;
	}

	setMass(mass){
		this.mass=mass;
	}

	Update(){
		this.velocity.AddTo(this.acc);
		this.position.AddTo(this.velocity);
	}

	Render(ctx){
		Context.beginPath();
		Context.arc(this.position.x,this.position.y,this.radius,0,Math.PI*2,false);
		Context.fill();
	}

	GravitateTo(par){
		this.velocity.AddTo(
			new Vector2(0,0,
				this.position.AngleTo(par.position),
				par.mass/Math.pow(this.position.DistanceTo(par.position),2)
		));
	}
}