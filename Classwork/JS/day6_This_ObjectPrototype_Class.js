// console.log(this);

// function f(){
//     return this;
// }

// console.log(f());

// let obj = {
//     firstName: 'John',
//     lastName: 'Doe',
//     f: function getDetail(){
//         return this.firstName + " " + this.lastName
//     },
//     foo: function(){
//         const baz = () => this;
//         return baz
//     },
//     bar: () => this
// }

// console.log(obj.f())
// console.log(obj.foo)
// console.log(obj.bar)

// const el = document.getElementById('my_el');
// el.addEventListener ('click', function()){
//     console.log(this)
// }

// class Person{
   
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getName(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// const person1 = new Person("Kevin", "Peterson");
// console.log(person1.getName());

class Person{
    #name
    constructor(name){
        if(name.length < 7){
            console.log("username can't be less than 7 characters")
        }
        this.#name = name;
    }
    getName(){
        return this.#name;
    }
}
const person1 = new Person("Mike")
console.log(person1.getName())
//This next line will give an error because name is private and we are now outside class
// console.log(person1.#name)