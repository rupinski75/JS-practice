function convert(degree){
    document.getElementById("converter").innerHTML = ""
    var textInput = null;
    var method = null
    console.log(degree)
    if(degree == "C"){
        textInput = document.getElementById('celcius');
        method = 'convertCtoF';
    }else{
        textInput = document.getElementById('fahrenhet');
        method = 'convertFtoC';
    }
    if(isNaN(parseInt(textInput.value))){
        document.getElementById("converter").innerHTML = "It has to be a number"
        document.getElementById("convertForm").reset();
        return;
    }
    this[method](parseInt(textInput.value))
}
function convertCtoF(temp) {
        temp = temp * 9 / 5 + 32;
        document.getElementById("fahrenhet").value = Math.round(temp);
}
function convertFtoC(temp) {
        temp = (temp -32) * 5 / 9;
        document.getElementById("celcius").value = Math.round(temp);
}
