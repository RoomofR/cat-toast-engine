class Vector2{
	constructor(){
		this.set(arguments);
	}

	toString(){return `[X=${this.x} Y=${this.y}] m=${this.mag} θ=${this.angle}`};

	duplicate(){return new Vector2(this.x,this.y)}

	clear(){this.set([0])}

	set(args){//X,Y,ANGLE,MAG
		switch(args.length){
			case 0:
				this.clear();
				break;
			case 1:
			case 2:
				this.x=args[0];
				this.y=args[1]||this.x;
				this.angle = Math.atan2(this.y,this.x);
				this.mag = Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
				break;
			case 4:
				this.angle = args[2];
				this.mag = args[3];
				this.x = Math.cos(this.angle)*this.mag;
				this.y = Math.sin(this.angle)*this.mag;
				break;
			default:
				throw new Error(`VECTOR2 ERROR: Too many arguments!`);
		}
	}

	get length(){return this.mag}

	setAngle(angle){
		this.set[this.x,this.y,angle,this.mag];
	}

	setMagnitude(mag){
		this.set[this.x,this.y,this.angle,mag];
	}

	Add(vec2){
		return new Vector2(this.x+vec2.x,this.y+vec2.y);
	}

	AddTo(vec2){
		this.x+=vec2.x;
		this.y+=vec2.y;
	}

	Difference(vec2){
		return new Vector2(this.x-vec2.x,this.y-vec2.y);
	}

	Multiply(val){
		return new Vector2(this.x*val,this.y*val);
	}

	Divide(val){
		return new Vector2(this.x/val,this.y/val);
	}

	Normalize(){
		return this.Divide(this.mag);
	}

	DistanceTo(vec2){
		return Math.sqrt(Math.pow(vec2.x-this.x,2)+Math.pow(vec2.y-this.y,2));
	}

	AngleTo(vec2){//Returns in Degrees
		return Math.atan2 (vec2.y - this.y, vec2.x - this.x);
	}

	AngleFrom(vecA,vecB){//Segment between this and a, and get angek to b from orogin this
		return Math.abs(this.angle(vecA)-this.angle(vecB))
	}

	From(angle,distance){
		return new Vector2(Math.parseFloat(distance*Math.cos(Math.toRad(angle))),Math.parseFloat(distance*Math.sin(Math.toRad(angle))));
	}

	isSame(vec2){
		return (vec2.x==this.x && vec2.y==this.y);
	}
}

var meow = new Vector2(0,0);