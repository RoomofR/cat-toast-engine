class InputManger{
	constructor(){
		this.mousePos={x:0,y:0};
		this.mouseBtns = {0:false,1:false,2:false};
		this.specialChars = {
			8:'BACKSPACE',
			13:'ENTER',
			16:'SHIFT',
			17:'CONTROL',
			18:'ALT',
			20:'ESCAPE',
			32:'SPACE',
			37:'LEFT',
			38:'UP',
			39:'RIGHT',
			40:'DOWN'
		}
	}

	setState(keyCode,state){
		console.log(keyCode);
		if(keyCode in this.specialChars)
			this[this.specialChars[keyCode]]=state;
		else
			this[String.fromCharCode(keyCode)]=state;
	}
}

var Input = new InputManger();

document.documentElement.onkeydown=(e)=>{
	if (e.which||event.keyCode == 18)
		e.preventDefault();
	Input.setState(e.which||event.keyCode,true);
}

document.documentElement.onkeyup=(e)=>{
	Input.setState(e.which||event.keyCode,false);
}

document.documentElement.onmousedown=(e)=>{
	Input.mouseBtns[e.button] = true;
}

document.documentElement.onmouseup=(e)=>{
	Input.mouseBtns[e.button] = false;
}

document.documentElement.onmousemove=(e)=>{
	Input.mousePos.x = e.clientX;
	Input.mousePos.y = e.clientY;
}