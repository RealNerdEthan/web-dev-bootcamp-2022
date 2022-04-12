//We've set this function's default params so that if the user doens't input a value when calling rollDie() then it will
//use 6 as the default dor numSides
function rollDie(numSides = 6){
    return Math.floor(Math.random() * numSides) +1;
}

//Lets show another example. We're setting a default value (param) for message and making message the second input becuase
//order matters with defualt params and it needs to be last, otherwise you might end up with something like "Hey there, undefined!"
function greet(person, message = "Hey there"){
    console.log(`${message}, ${person}!`);
}