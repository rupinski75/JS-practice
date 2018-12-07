var formId;
var students = {};
var valid = false;

function initForm(formId){
	this.formId = formId;   
	//console.log(formId);
}

function Student(first, last, id, grades) {
    this.firstName = first;
    this.lastName = last;
    this.id = id;
    this.grades = grades;
    console.log('count: ', this.grades);
    this.countAverage = function(){
        if(isNaN(parseInt(this.grades[0]))){
            return '-'
        }
    	var sum = 0;
        var count = this.grades.length;
        console.log('count: ', this.grades);
    	this.grades.forEach( function(element, index) {
            sum += parseInt(element);
            //console.log(element);
            
    	});
    	return sum/count;
    };
}
function add_fields(tableId) {
    if(!valid){
        alert("Form is not valid!")
		return;
	}
    newStudent();
    students[student.id] = student;
    var table = document.getElementById(tableId);
    var tr = table.insertRow(-1);
    tr.id = `studentRow_${student.id}`;
    tr.innerHTML = 
        `<td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.id}</td>
        <td id="grades_${student.id}">${student.grades}</td>
        <td id="average_${student.id}">${student.countAverage()}</td>
        <td><button type="button" onclick="edit(${student.id})">Edit</button></td>
        <td><button type="button" onclick="showAddGrades('${student.id}')">Add grades</button></td></tr>`;
    hideFrom();
}
function newStudent() {
    student = new Student(
        document.getElementById('firstname').value,
        document.getElementById('lastname').value,
        document.getElementById('id').value,
        Array.from(String(document.getElementById('grades').value).split(/ |, |,/)));
}
function updateStudent(id) {
    var student = students[id];
    student.firstName = document.getElementById('firstname').value;
    student.lastName = document.getElementById('lastname').value;
    student.grades = Array.from(String(document.getElementById('grades').value).split(/ |, |,/));
    console.log(student);
    hideFrom();
    document.getElementById(`studentRow_${id}`).innerHTML = 
    `<td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.id}</td>
    <td id="average_${student.id}">${student.countAverage()}</td>
    <td id="grades_${student.id}">${student.grades}</td>
    <td><button type="button" onclick="edit(${student.id})">Edit</button></td>
    <td><button type="button" onclick="showAddGrades('${student.id}')">Add grades</button></td>`
}
function add_grades(id){
    var student = students[id];
    var newGrades = Array.from(String(document.getElementById('grade').value).split(/ |, |,/));
    //console.log('newgrades: ',newGrades);
    student.grades = student.grades.concat(newGrades);
    //console.log(students[id].grades);
    //console.log(document.getElementById(`average_${id}`).value);
    document.getElementById(`average_${id}`).innerHTML = student.countAverage();
    document.getElementById(`grades_${id}`).innerHTML = student.grades;
    hideFrom();
}
function validateForm(inputId) { //TODO: validacja skopana
	var x = document.forms[formId][inputId].value;
    console.log('inputId: ' + inputId);
    if(inputId != 'grades'){
        if(x == ""){
            alert(`${inputId} must be filled out`);
            valid = false;
            return false;
        }
	}
	switch(inputId){
        case 'id':
            for(var [key, value] of Object.entries(students)){
                console.log(x);
                console.log(value);
                if(x == key){
                    alert('Id already used')
                    valid = false;
                    return false;
                }
            }
            break;
		case 'grades':
        //console.log('mail: ' + x)
            if(x == ""){
                break;
            }
			var regex = /\b\d\b/;
			if(!regex.exec(String(x).toLowerCase())){
                alert('Wrong grades!');
                valid = false;
	  			return false;
			}
			break;
		case 'grades': case 'id':
			//console.log("age: " + x);
			if(isNaN(parseInt(x))){
				//console.log(parseInt(x));
                alert("It has to be a number!");
                valid = false;
			  	return false;
			}
			break;
    }
    valid = true;
	return true;
} 
function showAddStudent(id){
    var student = students[id];
    console.log(student);
    if(id){
        console.log("test");
        document.getElementById('addStudent').innerHTML = 
        `<form id="personalDataForm" autocomplete="off">
        <label for="firstname">Name</label>
        <p><input id="firstname" type="text" value="${student.firstName}" onblur="validateForm('firstname')"></p>
        <label for="lastname">Surname</label>
        <p><input id="lastname" type="text" value="${student.lastName}" onblur="validateForm('lastname')"></p>
        <label for="grades">Grades</label>
        <p><input id="grades" type="text" value="${student.grades}" onblur="validateForm('grades')"></p>
        <p><button type="button" onclick="updateStudent(${id})">Save</button>
        <button type="button" onclick="hideFrom()">Cancel</button></p>
       </form>`
    }else{
     document.getElementById('addStudent').innerHTML = 
     `<form id="personalDataForm" autocomplete="off">
     <label for="firstname">Name</label>
     <p><input id="firstname" type="text" onfocus="initForm('personalDataForm') "onblur="validateForm('firstname')"></p>
     <label for="lastname">Surname</label>
     <p><input id="lastname" type="text" onblur="validateForm('lastname')"></p>
     <label for="id">Id</label>
     <p><input id="id" type="text" onblur="validateForm('id')"></p>
     <label for="grades">Grades</label>
     <p><input id="grades" type="text" onblur="validateForm('grades')"></p>
     <p><button type="button" onclick="add_fields('personalDataTable')">Add</button>
     <button type="button" onclick="hideFrom()">Cancel</button></p>
    </form>`
    }
}
function showAddGrades(id){
    document.getElementById('addStudent').innerHTML = `
    <label for="grade">Add grades</label>
    <p><input id="grade" type="text" onblur="validateForm('grade')"></p>
    <p><button type="button" onclick="add_grades('${id}')">Add</button>
    <button type="button" onclick="hideFrom()">Cancel</button></p>`
}
function hideFrom(){
    document.getElementById('addStudent').innerHTML = ``;
}
function edit(id){
    showAddStudent(id);
}
