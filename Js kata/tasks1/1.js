console.log("hello world!")

function factorial(int){
	var outcome = 1
 		for (var i = 1; i <= int; i++) {
 			outcome *= i
 		}
 	return outcome
}

console.log(factorial(6))

var getFactorial = function(int) {
	if (int >= 1) {
		return int*getFactorial(int-1)
	} else {
		return 1
	}
}


console.log(getFactorial(6))

