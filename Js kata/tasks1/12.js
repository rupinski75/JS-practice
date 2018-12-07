function Student(first, last, indexNumber, grades) {
    this.firstName = first;
    this.lastName = last;
    this.indexNumber = indexNumber;
    this.grades = grades;
    this.countAverage = function(){
    	var sum = 0;
    	var count = this.grades.length;
    	this.grades.forEach( function(element, index) {
    		sum += element;
    	});

    	return `Imie:\t  ${this.firstName}
Naziwsko: ${this.lastName}
Średnia:    ${sum/count} `;
    };
}

var student1 = new Student("Krzysztof", "Rupinski", "S11898", [1, 2, 3, 4, 5]);
//console.log(student1);
console.log(student1.countAverage());