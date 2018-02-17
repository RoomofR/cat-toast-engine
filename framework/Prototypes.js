//Looks for string in array and return boolean
String.prototype.matches=(arr)=>{
	return new RegExp(arr.join("|").toLowerCase()).test(this.toLowerCase())
}

//Replaces each word instance by swaping and return new string
String.prototype.swap=(a,b)=>{
	return this.replace(new RegExp([a,b].join("|")),s=>{
		return (s==a)?b:a
	})
}

//Capatalizes first letter return new string
String.prototype.capitalize=_=>{
	return this.charAt(0).toUpperCase() + this.slice(1);
}

//Converts string into a html element return html element
String.prototype.parseElement=_=>{
	return element=document.createElement("div");
	element.innerHTML=this;
	element.firstChild
}

//Removes element from array by index and returns new array
Array.prototype.removeAt=(i)=>{
	this.splice(i,1)
}

//Removes element from array and returns new array
Array.prototype.remove=(a)=>{
	this.removeAt(this.indexOf(a));
}

//Converts Radians to Degrees
Math.toDeg=(n)=>{
	return (n * (180 / Math.PI)); 
}

//Converts Degrees to Radians
Math.toRad=(n)=>{
	return (n * (Math.PI / 180));
}

Math.parseFloat=(n)=>{
	return parseFloat((n).toFixed(15));
}

Math.randomBetween=(min,max)=>{
	return Math.random() * (max - min) + min;
}

Math.randomIntBetween=(min,max)=>{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}