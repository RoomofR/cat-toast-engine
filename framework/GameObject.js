class GameObject{

	//this.collidors
	//this.mask

	constructor(position,sprite){
		this.position=position;
		this.sprite=sprite;
		this.sprite.pos=this.position;
	}

	render(ctx){
		this.sprite.render(ctx);
	}

	update(){
		this.sprite.pos = this.position;
		this.sprite.update();
	}

	setPos(vec){
		this.prev
	}
}