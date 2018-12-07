// function splitArray(array, half){
// 	if(array.length === 1){
// 		return array;
// 	}
// 	var half_length = Math.ceil(array.length / 2);
// 	if(half === 1){
// 		return array.splice(0,half_length);
// 	}else{
// 		return array.splice(half_length, array.length);
// 	}
// }

function binarySearch(array, param){
	array.sort(function compare(a,b){
		return a - b;
		}
	);
	console.log(array)
	var begining = 0;
	var end = array.length - 1;
	var index;
	while(array[begining] !== param && begining < end){
		var middle = Math.floor((begining + end) / 2);
		if(array[middle] < param){
			begining = middle +1;
		}else{
			end = middle;
		}
	}
	if(array[begining] === param){
		index = begining;
		return index;
	}else{
		return "There is no such parameter!"
	}
	return index + " end";
}


console.log(binarySearch([25, 10, 5, 2, 1, 7, 99, 3456, 776],7))