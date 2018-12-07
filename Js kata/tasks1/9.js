function amountToCoins(amount,coins){
	var i = 0;
	var change = [];
	while(amount !== 0){
		//console.log(amount);
		if((amount >= coins[i])){
			amount -= coins[i];
			change.push(coins[i]);
			if(amount < coins[i]){
				i++;
			}
			//console.log("change " + coins[i]);
			//console.log(change);
		}else{
			i++;
		}
	}
	return change.join(", ");
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]))