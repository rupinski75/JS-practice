var rock = {
	nickname: "Bob",
	wieght: 32,
	color: 'Gray',
	introduceSelf: function(){return `I'am ${this.nickname} and I'am ${this.wieght} kg heavy.`},
	multipleWeight: function(){return weiht*weight}
}

function presentObject(Object){
	var result = "";
	for(var property in Object){
		result += `\n ${property} - ${typeof(rock[property])}`;
	}
	return result;
}

console.log(presentObject(rock));
console.log(rock.introduceSelf())