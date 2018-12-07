window.onload =  function(){
		//console.log("hello")
		delayedMessage()
}
function delayedMessage() {
	setTimeout(
		function(){
			document.getElementById("p1").innerHTML = "Have a good day!";
		},
		5000);
}