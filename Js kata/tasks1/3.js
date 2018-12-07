function isPalindrom(fraze){
	withoutWhites = fraze.replace(/ */g, '')
	if(withoutWhites.length/2%2==0){
		return false
	}else{
		var firstHalf = withoutWhites.toLowerCase().substr(0, (withoutWhites.length/2+1)).split("")
		//console.log(firstHalf)
		var secondHalf = withoutWhites.toLowerCase().substr((withoutWhites.length/2), withoutWhites.length).split("")
		secondHalf = secondHalf.reverse()
		//console.log(secondHalf)
		for(var i=firstHalf.length; i--;){
			if (firstHalf[i] !== secondHalf[i]) {
				//console.log(firstHalf[i])
				//console.log(secondHalf[i])
				return false
			}
		}
		return true;
	}
}

console.log(isPalindrom("kKobyła ma mały bokk"))
