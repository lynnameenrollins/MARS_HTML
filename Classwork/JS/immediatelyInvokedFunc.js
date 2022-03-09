(function (a){console.log("Immediately invoked function, a^2 = " + a*a)})(10);

let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__ : animal
};

for (let prop in rabbit)
    console.log(prop)

for (let prop in rabbit){
    let isOwn = rabbit.hasOwnProperty(prop);
        if (isOwn){
            console.log(`Our property ${prop}`);
            
        }
        else{
            console.log(`Inherited property ${prop}`);

        }
    }