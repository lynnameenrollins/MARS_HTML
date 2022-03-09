function add(x,y,z){
    let sum = x + y + z;
    console.log(sum);
}

console.log(add.length)
console.log(add.prototype)

let arr = [10, 20, 30];
console.log(arr)

let numbers = [1,2,3];


arr.push.apply(arr, numbers)
console.log(arr)


var greeting = 'Hi'

var messenger = {
    greeting: 'Hello'
}

function say(name){
    console.log(this.greeting + " " + name)
}

//Behaves differently in the browers than in the out put console
say.call(this, 'John') //in browser, this is Global oject -> Hi John
say.call(messenger, 'John')

const computer = {
    name:'MacBook',
    isOn: false,
    turnOn(){
        this.isOn = true;
        return ` The ${this.name} is On`
    },
    turnOff(){
        this.isOn = false;
        return ` The ${this.name} is Off`
    }
};

const server = {
    name: 'Dell',
    isOn: false
};

let result = computer.turnOn.apply(server);

console.log(result)

//Example of asynchronous calling
//i.e. not blocking code
let TestFunc = () => {
    console.log('first')
    setTimeout(() => console.log('second'), 2000)
    console.log('third')
}

//call back function
let order = (call_production)=>{
    console.log('Order placed. Plase call production')
    call_production();
}

let production = () =>(console.log('Production has started'));

order(production)