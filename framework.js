//Canvas and Conext
Canvas = document.getElementById('canvas');
Canvas.width = document.body.clientWidth;
Canvas.height = document.body.clientHeight;
Canvas.style.width = canvas.width+"px";
Canvas.style.height = canvas.height+"px";
Context = Canvas.getContext('2d');

var marioSprite = new Sprite({
	imgSrc:'../mario.png',
	w:672,
	h:128,
	cols:21,
	rows:2,
	
	startIndex:21,
	indexLength:3,

	tpf:30,
	loop:true
})
var mario = new GameObject(new Vector2(),marioSprite);

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

//Main Canvas Draw Loop
var lastRender = Date.now();
var delta = Date.now() - lastRender;
!function Render(){

	mario.update();
	mario.render(Context);

	coin.update();
	coin.render(Context);

	hussain.update();
	hussain.render(Context);

	console.log(Input.SHIFT);
	requestAnimationFrame(Render);
}()