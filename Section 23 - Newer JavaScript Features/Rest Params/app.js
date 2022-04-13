//By using ... on this function we are collecting all values passed in (or the "rest" of the parameters passed in), not just
//the first one
function sumExample(...numbers){
    console.log(sumExample)
}
//So now if we call sum(3, 4, 5) we are collecting in addition to 3 the numbers 4 and 5

//Here's the actual sum function (using an implicit return)
function sum(...numbers) {
    return numbers.reduce((total, element) => total + element)
}

//Another example whwre we will call out the first two specifically and then call out the "rest" using ...everyoneElse
function raceResults(gold, silver, ...everyoneElse){
    console.log(`Gold medal goes to: ${gold}`);
    console.log(`Silver medal goes to: ${silver}`);
    console.log(`And thanks to everyone else for participating: ${everyoneElse}`);
}