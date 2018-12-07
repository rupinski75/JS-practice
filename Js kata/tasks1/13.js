
var Student = function(fistName, lastName, indexNumber) {
  this.fistName = fistName;
  this.lastName = lastName;
  this.indexNumber = indexNumber;
};

Student.prototype.subjectList = ["ppj", "alg", "uko", "hkj"];



var bob = new Student('Uncle', 'Bob', 's0008');
var rob = new Student('Rob', 'the Robber', 's0009');

console.log(bob);
console.log(bob.subjectList);
console.log(rob);
console.log(rob.subjectList);
bob.subjectList.push('TIN');
console.log(bob.subjectList);