function sortString(fraze){
	withoutWhites = fraze.replace(/ */g, '');
	var frazeArray = withoutWhites.toLowerCase().split("");
	//console.log(frazeArray.sort())
	return frazeArray.sort();
}

console.log(sortString("webmaster"));
