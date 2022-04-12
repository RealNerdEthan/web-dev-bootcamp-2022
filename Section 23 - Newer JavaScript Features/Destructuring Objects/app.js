//An exmaple of destructing an object
const runner = {
    firstName: "Eliud",
    lastName: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
}
const {firstName, lastName, country} = runner;

console.log(`The winner of the race is ${firstName} ${lastName} from ${country}!`);

//Note: You can apply different variable names and default value when destructing objects
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment