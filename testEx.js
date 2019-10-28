let myval = 7;
const myObject = {    name: "Jack",    grade: "A",    level: 3};
alert(myval);
const myOsbject = maker("Jack", "A", 3);

console.log(myval);
console.log(myOsbject);
document.write(myval);
addition();

function addition(){
    alert(myval*myval);
}
function maker(name, grade, level) {
    let student = {};
    student.name = name;
    student.grade = grade;
    student.level = level;
    return student;
    }
    

