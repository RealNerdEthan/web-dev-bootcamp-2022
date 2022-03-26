// If statement
let name = "Ethan";

if (name === "Ethan") {
    console.log("Hello Ethan! I hope you day is going well.");
}

//Else If conditional statment
const dayOfWeek = "Sunday";

if (dayOfWeek === "Monday") {
    console.log("Ugh, I hate Mondays...")
} else if (dayOfWeek === "Saturday") {
    console.log("Ahh the weekend has started!")
} else if (dayOfWeek === "Sunday") {
    console.log("Oh no, last day of the weekend already?!")
}

//Another Else If example:
//Age: 0-5      Price: $0
//Age: 6-12     Price: $10
//Age: 13-65    Price: $20
//Age: 66+      Price $10

const age = 66;

if (age <= 5) {
    console.log("Welcome baby! Your ticket price for admission is: $0")
} else if (age <= 12) {
    console.log("Welcome child! Your ticket price for admission is: $10")
} else if (age <= 65) {
    console.log("Welcome adult! Your ticket price for admission is: $20")
} else if (age >= 66) {
    console.log("Welcome senior! Your ticket price for admission is: $10")
}

//If Else statment
let randomNumber = Math.floor(Math.random() * 2) + 1;

if (randomNumber < 2) {
    console.log("Your coin tolls result is heads!");
} else {
    console.log("Your coin tolls result is tails!")
}


//If, Else If, Else statment
const pokemonName = prompt("Enter a Pokmeon name:").toLowerCase();

if (pokemonName === "pikachu") {
    console.log("An electric type Pokemon and Ash's best friend!")
} else if (pokemonName === "snorlax") {
    console.log("My absolute favorite Pokemon! Sometimes I nap like a Snorlax (according to my wife).")
} else if (pokemonName === "eevee") {
    console.log("That's my wife's favorite Pokemon. She likes that it can become anything it wants to.")
} else if (pokemonName === "jigglypuff") {
    console.log("My daughter's favorite Pokemon. They are both equally cute and sweet, with a strong demand for attention haha!")
} else {
    console.log("Hmm...not sure about that one.")
}