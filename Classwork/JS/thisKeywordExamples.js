
//In the global execution context, this refers to the global object
console.log('global context')
console.log(this)

//function context
function f(){
    return this;
}
console.log('Function context')
console.log(f())


//object context

let obj = {
    firstName: 'John',
    lastName: 'Smith',
    f:function(){
        return this;
    }
}
console.log('Object context')
console.log(obj.f())

//arrow function context

const obj2 = {
    foo: function(){
        const baz =() => this;
        return baz();
    },
    bar: () => this
};
console.log('arrow function context')
console.log(obj2.foo())
console.log(obj2.bar())

