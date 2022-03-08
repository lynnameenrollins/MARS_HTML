function getScores(){
    return [70,80, 90,100]
}

// let[x,y,...args] = getScores();

// console.log(x)
// console.log(y)
// console.log(args)
//defaul values get overwritten if they are defined in the function
let [x=1,y =2,z = 3,a= 4,b= 5,...args] = getScores();

console.log(x)
console.log(y)
console.log(z)
console.log(a)
console.log(b)
console.log(args)


//Variable swapping with deconstructure
let swap1= 10, swap2= 100;

[swap1,swap2] = [swap2,swap1]

console.log("swap1: " + swap1 + " swap2: " + swap2)

let display = (person) => console.log(person.firstName, person.lastName);

let person = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'C.'
}

display(person)

let colors = ["white", "blue", "yellow", "black", "red", "green"]

let [firstColor, secondColor, ...otherColors] = colors;

console.log("First Color: " + firstColor)
console.log("Second Color: " + secondColor)
console.log("Other Colors: " + otherColors)


//To destructure class, I only need the second hour
let displayClass = ({secondHour}) => console.log("Time to go to " + secondHour + " class");

let myClasses = {
    firstHour:"Ethics",
    secondHour: "Programming",
    thirdHour: "Biology"
}

displayClass(myClasses)


console.log(typeof(null))