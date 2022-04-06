function makeMysteryFunc(){
    const randomNum = Math.random();
    if(randomNum > 0.5){
        return function(){
            console.log("I am a chhiiilllll function...");
        }
    } else {
        return function(){
            console.log("I am an aNnOyInG function!!!");
        }
    }
}

//Making a function that returns a random number between two numbers. An example of a factory function where a function literally 
//creates and returns a new function based on the min/max numbers entered.
function makeBetweenFunc(min, max){
    return function(num){
        return num >= min && num <= max
    }
}

//You could now run: const isChild = makeBetweenFunc(0, 17)
//Then you could run: const isAdult = makeBetweenFunc(18, 100)