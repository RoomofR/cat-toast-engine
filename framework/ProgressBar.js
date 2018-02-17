class ProgressBar{
	constructor(x,y,w,h){
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.done=false;
	}

	increment(precentage){
		this.precentage=precentage;
	}

	draw(ctx){
		this.ctx=ctx;
		if(!this.done){
			ctx.beginPath();
			ctx.rect(this.x-(this.w/2),this.y-(this.h/2),this.w*this.precentage,this.h);
			ctx.fillStyle = "#40E0D0";
			ctx.fill();
		
			ctx.beginPath();
			ctx.rect(this.x-(this.w/2),this.y-(this.h/2),this.w,this.h);
			ctx.stroke();
		}
	}

	complete(){
		this.done=true;
		if(this.ctx){
			this.w++;this.h+=2;
			this.ctx.clearRect(this.x-(this.w/2),this.y-(this.h/2),this.w,this.h);
		}
	}
}