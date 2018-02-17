class Module{
	constructor(name){
		this.name=name;
		this.module = document.createElement('script');
		this.module.setAttribute('src',`framework/${this.name}.js`);
		document.head.appendChild(this.module);
	}
}

new Module('ProgressBar')
var modulesLoadingBar = new ProgressBar(canvas.width/2,canvas.height/2,canvas.width*0.8,20);
