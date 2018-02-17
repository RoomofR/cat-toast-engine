/*OPTIONS FOR SPRITE
imgSrc = Image Sources
w = Width of ENTIRE Sprite
h = Height of ENTIRE Sprite
cols = Number of Cols
rows = Number of Rows

startIndex = Starting index of sprite
indexLength = Number of sprites after first

tpf = Ticks Per Frame (60fps)
pos = Position from Parent Object;
loop = To loop or not to loop that is the question
*/
class Sprite{
	constructor(options){
		this.img=new Image();
		this.img.src=options.imgSrc;
		this.w=options.w;
		this.h=options.h;
		this.cols=options.cols;
		this.rows=options.rows;
		this.end=this.cols*this.rows;
		this.startIndex=options.startIndex||0;
		this.endIndex=(options.indexLength||0)+this.startIndex;
		this.tpf=options.tpf||1;
		this.pos=options.pos||new Vector2();
		this.loop=options.loop||false;

		this.frameIndex=this.startIndex;

		this.tickCount=0;
	}

	render(ctx){
		ctx.clearRect(this.pos.x,this.pos.y,this.w/this.cols,this.h/this.rows);
		//console.log((this.frameIndex%this.cols),((this.frameIndex-(this.frameIndex%this.cols))/this.cols));
		//console.log(this.w/this.cols,this.h/this.rows);

		ctx.drawImage(
			this.img,
			(this.frameIndex%this.cols)*this.w/this.cols,
			((this.frameIndex-this.frameIndex%this.cols)/this.cols)*this.h/this.rows,
			this.w/this.cols,
			this.h/this.rows,
			this.pos.x,
			this.pos.y,
			this.w/this.cols,
			this.h/this.rows);
	}

	update(){
		this.tickCount++;
		if(this.tickCount>this.tpf-1 || this.frameIndex>this.end){
			this.tickCount=0;
			this.nextFrame();
		}
	}

	nextFrame(){
		this.frameIndex++;
		if(this.frameIndex>this.endIndex-1)
			this.frameIndex=this.startIndex;
	}
}