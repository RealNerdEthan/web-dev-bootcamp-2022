const pinballScores = [984537, 912385, 872357, 817490, 817245, 726349, 613279];

//With this we are making 3 variables (gold, silver, and bronze) and the order of the array determines what values they are
//Gold will be index 0, silver will be index 1, and bronze will be index 2
//The [] indicate we are destructing from an array
//Also we are using the ... or "rest" parameter to define the rest of the scores
const [gold, silver, bronze, ...everyoneElse] = pinballScores;

console.log(`Gold score is: ${gold}`);
console.log(`Silver score is: ${silver}`);
console.log(`Bronze score is: ${bronze}`);
console.log(`Runner up scores are: ${everyoneElse}`);