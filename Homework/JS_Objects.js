let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeID: 1
}

console.log('ssn' in employee)
console.log('employeeID' in employee)

let person ={
    firstName:'Shane',
    lastName: 'Warren',
    //If you want to write as an error function
    play:()=>{
        console.log('All time greats')
    },
    getFullName(){
        return this.firstName + ' ' + this.lastName
    }
}
console.log(typeof person)
console.log( person.firstName + " " + person.lastName)

person.country = "Australia";

// console.log(person)
// delete person.country;
// console.log("After deleting country: ", person)

for(const key in person){
    console.log(key +  ': ' + person[key]);
}

person.play()
console.log(person.getFullName())

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function(){
        return this.firstName + ' ' + this.lastName
    }
    this.getInfo= function(){
        return this.firstName + " " + this.lastName + ", age: " + this.age
    }
}

let person1 = new Person('John', 'Doe', 33);
let person2 = new Person('Lynn', 'Rollins', 51);
let person3 = new Person('Andrew', 'Rollins', 53);

console.log(person3.age);
console.log(person1.getInfo())

// var js = (function(x) {return x*x;})
// console.log()

var quiz = [1,2,3]
var js = [4,5,6]
var result = quiz.concat(js)
console.log(result)

var js = (function(x) {return x*x;}(10));
console.log(js)