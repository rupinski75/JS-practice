window.onload =  function(){
		//console.log("hello")
		delayedMessage()
}
function delayedMessage() {
	setTimeout(
		function(){
			const paragraph = document.createElement("p");
			const node = document.createTextNode("Have a good day!");
			paragraph.appendChild(node);
			const element = document.getElementById("div1");
			element.appendChild(paragraph);
		},
		5000);
}