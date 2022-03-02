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


