//An example where ine function calls other functions by passing a function as an argument
function callTwice(func){
    func();
    func();
}

//Example using for loop with higher order function
function callTenTimes(f){
    for(let i = 0; i < 10; i++){
        f();
    }
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Your dice roll is: ${roll}`);
}

callTwice(rollDie)