function longestWord(fraze){
	var frazeArray = fraze.split(" ");
	var frazeLengthArray = new Array(frazeArray.length);
	var longest = "";

	for(var i=0; i<frazeArray.length; i++){
			frazeLengthArray[i] = frazeArray[i].length;
		if (longest.length<frazeLengthArray[i]) {
		 	longest = frazeArray[i];
		}
	}
	return longest;
}

//console.log(longestWord("Kobyła ma mały bok"));

function longestWordButSimplier(fraze){
	var frazeArray = fraze.split(" ")
	var longest = ""

	for(var i=0; i<frazeArray.length; i++){
		if (longest.length<frazeArray[i++].length) {
		 	longest = frazeArray[i]
		}
	}
	return longest;
}

console.log(longestWordButSimplier("Kobyła ma mały bok"));
