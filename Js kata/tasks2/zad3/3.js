var formId;
var valid = {'firstname':false,'lastname':false,'age':false,'mail':false};
function initForm(formId){
	this.formId = formId;
	//console.log(formId);
}

function add_fields(tableId) {
	if(!validateAll()){
		return;
	}
	document.getElementById(tableId).insertRow(-1).innerHTML =
	`<tr><td>${document.getElementById('firstname').value}</td>
	<td>${document.getElementById('lastname').value}</td>
	<td>${document.getElementById('age').value}</td>
	</tr>${document.getElementById('mail').value}</td></tr>`;
}

function validateAll() {
	return(
		(validateForm('firstname') &&
		validateForm('lastname') &&
		validateForm('age') &&
		validateForm('mail')) 
	)
  } 

  function validateForm(inputId) {
	var x = document.forms['personalDataForm'][inputId].value;
	console.log('inputId: ' + inputId);
	if(x == ""){
		alert(`${inputId} must be filled out`);
		return false;
	}
	switch(inputId){
		case 'mail':
		//console.log('mail: ' + x)
			var regex = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;
			if(!regex.exec(String(x).toLowerCase())){
				alert('Wrong mail!');
	  			return false;
			}
			break;
		case 'age':
			//console.log("age: " + x);
			if(isNaN(parseInt(x))){
				//console.log(parseInt(x));
				alert("It has to be a number!");
			  	return false;
			}
			break;
	}
	valid[inputId] = true;
	return true;
  } 