//can change type
let age = 25;
console.log(typeof(age));

age = '15'
console.log(typeof(age))

// let a = 5, b=10;
// if (a>b){
//     //let c = 50; c is only in the if block 
//     //it is actually not suggested to use var because you want to keep the scope
//     //inside the block.
//     var c = 50;
// }
// else{
//     var c = 15;
// }

// console.log(c);

//redeclaration not allowed with let
// let user = 'John';
// user = 'Mike';
// console.log(user); 

//redeclaration allowed with var
var user = 'John';
var user = 'Mike';
console.log(user);

//remember constants should be in all CAPS
const COLOR = "red"

console.log(COLOR)
//To get Infinity
console.log(5/0)

//To demonstrate NaN
console.log("Test"/0)

let a = 10, b = 20;

//Demonstrating the use of backtick `
console.log(`Sum of a and b is: ${a +b}`)

let input;
console.log(typeof(input))

//This is a known bug in JS
let bug = null;
console.log(typeof(bug))


let compare = 8>9;
console.log(typeof(compare))
//can use log also without paranthesis
console.log(typeof compare )


console.log( (5 =='5'))
console.log( (5 ==='5'))

//post increment
let incr = 10;
console.log(incr++)
console.log(incr)

//pre increment
let incrPre = 10;
console.log(++incrPre)
console.log(incrPre)

// var result = null;
// result = prompt(title, string);

age = 2;
let allowRegister = age> 18? true: false;
console.log(allowRegister)

