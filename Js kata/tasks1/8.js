function secondHighestLowest(array){
	array.sort(function compare(a,b){
		return a - b;
	});
	//console.log(array);

	if(array.length <= 2){
		return array;
	}
	var uniq = [array[1]]
	for(i=1; i<array.length; i++){
		if(array[i-1] !== array[i]){
			uniq.push(array[i]);
			//console.log(uniq)
		}
	}
	if(uniq.length <= 2){
		return uniq;
	}
	return  [uniq[1], uniq[uniq.length-2]];
}


console.log(secondHighestLowest([5,4,3,2,1]));
console.log(secondHighestLowest([25, -10, 5, 2, 1, 23]));
console.log(secondHighestLowest([1,1,2,3,3]));
console.log(secondHighestLowest([1,1,2]));
console.log(secondHighestLowest([1,1]));
console.log(secondHighestLowest([1]));