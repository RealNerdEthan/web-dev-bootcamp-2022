//An example of a very basic function
function grumpyOldMan(){
    console.log("Ugh...you again...");
    console.log("for the last time...");
    console.log("LEAVE ME ALONE!!");
}

//This is a function that uses the argument person
function greet(person){
    console.log(`Hello, ${person}!`);
}

greet("Ethan");

//Function with multiple arguments
function findLargest(x, y){
    if (x > y){
        console.log(`${x} is larger!`);
    } else if (x < y){
        console.log(`${y} is larger!`);
    } else {
        console.log(`${x} and ${y} are equal!`);
    }
}

//Function that accepts multiple arguments of different types
function repeat(message, numberOfTimes){
    let result = "";
    for(let i = 0; i < numberOfTimes; i++){
        result += message;
    }
    console.log(result);
}

repeat("Hello! ", 5)