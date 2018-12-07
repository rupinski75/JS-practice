function fibonnaci(n){
	if(n===0) return 0;
	if(n===1) return 1;
	var first = 1;
	var second = 1;
	var result = 0;
	for(let i = 2; i < n; i++){
		result = first + second;
		first = second;
		second = result;
	}
	return result;
}

console.log(fibonnaci(10));