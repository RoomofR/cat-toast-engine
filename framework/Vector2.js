class Vector2{
	constructor(){
		this.set(arguments);
	}

	toString(){
		return `[X=${this.x} Y=${this.y}]`;
	}

	clear(){
		this.set([0]);
	}

	duplicate(){
		return new Vector2(this.x,this.y);
	}

	set(args){
		if(args.length>2)throw new Error(`VECTOR2 ERROR: Too many arguments!`)
		else if(args.length==0) this.clear();// || args.length==undefined
		else if(args.length==1){
			this.x=args[0];
			this.y=args[0];
		}else if(args.length==2){
			this.x=args[0];
			this.y=args[1];
		}
	}

	normalize(){
		this.tmp = this.duplicate();
		this.mag = Math.sqrt(Math.pow(this.tmp.x,2)+Math.pow(this.tmp.y,2));
		this.tmp.x = this.tmp.x/this.mag;
		this.tmp.y = this.tmp.y/this.mag;
		return this.tmp;
	}

	difference(vec2){
		return new Vector2(this.x-vec2.x,this.y-vec2.y);
	}

	distance(vec2){
		return Math.sqrt(Math.pow(this.x-vec2.x,2)+Math.pow(this.y-vec2.y,2));
	}

	angle(vec2){//Returns in Degrees
		return Math.atan2 (vec2.y - this.y, vec2.x - this.x) * 180 / Math.PI;
	}

	angleFrom(vecA,vecB){//Segment between this and a, and get angek to b from orogin this
		return Math.abs(this.angle(vecA)-this.angle(vecB))
	}

	from(angle,distance){
		return new Vector2(Math.parseFloat(distance*Math.cos(Math.toRad(angle))),Math.parseFloat(distance*Math.sin(Math.toRad(angle))));
	}

	isSame(vec2){
		return (vec2.x==this.x && vec2.y==this.y);
	}
}