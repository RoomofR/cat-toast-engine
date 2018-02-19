//Canvas and Conext
Canvas = document.getElementById('canvas');
Canvas.width = document.body.clientWidth;
Canvas.height = document.body.clientHeight;
Canvas.style.width = canvas.width+"px";
Canvas.style.height = canvas.height+"px";
Context = Canvas.getContext('2d');

var mario = new GameObject(new Vector2(),new Sprite({
	imgSrc:'../mario.png',
	w:672,
	h:128,
	cols:21,
	rows:2,
	
	startIndex:21,
	indexLength:3,

	tpf:30,
	loop:true
}));

var coin = new GameObject(new Vector2(50,50),new Sprite({
	imgSrc:'../sprite.png',
	w:1000,
	h:100,
	cols:10,
	rows:1,
	
	startIndex:0,
	indexLength:10,

	tpf:4,
	loop:true
}));

var hussain = new GameObject(new Vector2(150,150),new Sprite({
	imgSrc:'../fighter_hussain.png',
	w:2048,
	h:768,
	cols:8,
	rows:3,
	
	startIndex:16,
	indexLength:7,

	tpf:4,
	loop:true
}));

radius=10;
particle = new Particle(300,300,10,-Math.toRad(0));

moon = new Particle(500,500,3,-Math.toRad(90));
moon.setMass(59000);

particle.GravitateTo(moon);

var particles = new Array(100);

for(i=0;i<100;i++){
	particles[i]=new Particle(Canvas.width/2,Canvas.height/3,Math.random()*5+2,-Math.toRad(Math.randomBetween(0,180)),new Vector2(0,0.1));
}

console.log(particles);

//Main Canvas Draw Loop
//Context.globalCompositeOperation = 'destination-out';
!function Render(){
	//Context.clearRect(0,0,Canvas.width,Canvas.height);

	/*mario.update();
	mario.render(Context);

	coin.update();
	coin.render(Context);

	hussain.update();
	hussain.render(Context);*/

	particle.GravitateTo(moon);
	particle.Update();
	particle.Render();

	moon.Render();

	/*for(let p of particles){
		p.Update();
		p.Render();
	}*/

	requestAnimationFrame(Render);
}()