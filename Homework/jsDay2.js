// outer: for(let i = 1; i<= 3; i++){
//     for(let j = 1; j<= 3; j++){
//         if ((i==2) && (j==2)){
//             console.log('continue to outer');
//             continue outer;
//         }
//         console.log("[i:" + i + " , j: " + j + "]")
// }
// }


// let age = 19;

// if(age >18){
//     if (age> 59){
//         console.log('Eligible to vote and pension')
//     }
//     else{
//         console.log('Eligible to vote')
//     }
// }
// else if (age === 18){
//     console.log('You turned 18!')
// }
// else{
//     console.log('Not eligible to vote')
// }


// switch(age){
//     case 18:
//         console.log('You turned 18!')
//         break;
//     case 19:
//         console.log('Eligible to vote')
//         break;
//     default:
//         console.log('No match')
    

// }

// //While loop : 1.Initialization 2. condition

// let count = 0;
// while(count < 5){
//     console.log(count);
//     count++
// }

// count = 0;
// do{
//     console.log(count);
//     count++ 
// } while (count<5)

// count = 0;
// while(true){
   
//     console.log(count);
//     count++
//     if (count === 12){
//         break;
//     }
// }

// //This will not print '10' to the console.
// count = 0;
// for(count=0; count< 15; count++){
//     if(count===10){
//         continue;
//     }
//     console.log(count)
    
// }

let str = 'Hi';
let greeting = "Hello"
let name = 'John'
let message = `Hello ${name}`;
console.log(message)
console.log(str + ' '+ name)
console.log(message.length)
console.log(message[0])
console.log(message[(message.length)-1])

let test= "test"
test[0] = 'T'
console.log(test)

let text = 'Hello World!'
console.log(text.substring(1,4))
console.log(text.substr(1,4))

random_number = Math.floor(Math.random()*10) + 1
console.log(random_number)

//arrays
let names = ['John', 'Mike', 'Peter', 'Kevin'];
console.log(names)
console.log(names[1])
console.log('Array length ' + names.length)

for (i=0; i< names.length;i++){
    //To skip based on some condition
    if (names[i].startsWith('P')){
        continue;
    }
    console.log(names[i])
}

console.log(names)
console.log(names.pop())
console.log('After pop ' + names)

console.log(names.push('Mary')) //note this returns the length of the array

console.log('After push ' + names)

console.log(names)
console.log(names.shift())
console.log('After shift ' + names)

console.log(names.unshift('Carrie')) //note this returns the length of the array

console.log('After unshift ' + names)

console.log(names.slice(1,3));

let newNames = names;
newNames.push('Sarah')
console.log('See how we changed names too!!(pointing to same array in memory!): ' + names)

//in returns index values!
for (let name in names){
    console.log(name);
}

//of returns index values!
for (let name of names){
    console.log(name);
}

//bug in javascript
names[23] = 'Lynn'
console.log(names.length)
console.log(names[10])
console.log(names)

let arr = [1,2,3,4,5]
console.log(arr.length)
arr.length = 2
arr.length = 5
console.log(arr.length)
console.log('See what happens after I messed with the lenght! ' + arr)

let hello = function(){
    console.log('Hello')
}

console.log(typeof hello)
hello();

let t = function() {
   console.log('Arrow function dem')
}

let t1 = (a, b) => console.log(a + b)

t1( 5, 8);

// use curly brackets if your function needs a body
let t2 = (a, b) => {
    c = a+ b;
    return c;
}    
console.log(t2(4,5))

let numbers = [12, 23, 18, 26, 30, 31];
let evenNumbers = numbers.filter(getEven);

function getEven(num){
    return num%2 ==0;
}

console.log('Even numbers: ' + evenNumbers)
console.log('Original list: ' + numbers)

function getSquared(num){
    return num*num;
}

let squaredNum = numbers.map(getSquared);
console.log('Squared numbers :' + squaredNum)

let sum = numbers.reduce(getSum, 0);

function getSum(total, num){
    return total + num;
}

console.log('Sum ' + sum)
