class Segment{
	constructor(){
		if(arguments.length>3 || arguments.length<2)throw new Error(`SEGMENT ERROR: Too many/few arguments!`);
		else if(arguments.length==2){//Start Vector+End Vector
			this.start = arguments[0].duplicate();
			this.end = arguments[1].duplicate();

			this.angle = this.start.angle(this.end);
			this.distance = this.start.distance(this.end);

		}else{//Start Vector+Angle+Distance
			this.start = arguments[0].duplicate();
			this.angle = arguments[1];
			this.distance = arguments[2];
			this.end = this.start.from(this.angle,this.distance);
		}
	}

	toString(){return `Start [${this.start.x},${this.start.y}] => End[${this.end.x},${this.end.y}] d=${this.distance} θ=${this.angle}`}

	crossProduct(vec2){return (this.end.x-this.start.x)*(vec2.y-this.start.y)-(this.end.y-this.start.y)*(vec2.x-this.start.x)}

	dotProduct(vec2){
		let Kac = this.distance*new Segment(this.start,vec2).distance*Math.cos(Math.toRad(this.angleTo(vec2)))
		let Kab = this.distance*this.distance*Math.cos(Math.toRad(this.angleTo(this.end)))
		return [Kac,Kab];//0<Kac<Kab
	}

	///Origin is start
	angleTo(vec){return Math.abs(this.angle - this.start.angle(vec))}

	//Check if vector is in line with segment if ray
	isAligned(vec2){return this.crossProduct(vec2)==0}

	//○--●--○
	isBetween(vec2){
		let dot = this.dotProduct(vec2);
		return (this.isAligned(vec2) && (0<dot[0] && dot[0]<dot[1]))
	}

	//●--●--●
	isWithin(vec2){return (vec2.isSame(this.start)||vec2.isSame(this.end)||this.isBetween(vec2))}

	setInterpolate(tweenMode){
		this.tweenMode = tweenMode;
	}

	next(step){
		//TODO
	}

	previous(step){
		//TODO
	}

	setStep(precentage){
		//TODO
	}
}

/*a=new Vector2(0,0);
b=new Vector2(2,34);

x = new Segment(a,90,5);
y = new Segment(a,b);

console.log(x.toString());

c=new Vector2(0,5);
console.log(x.isAligned(c));
console.log(x.dotProduct(c));
console.log(x.isBetween(c));
console.log(x.isWithin(c));*/