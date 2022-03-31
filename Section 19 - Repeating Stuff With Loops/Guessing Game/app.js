//Guessing game using while loops, if else, and conditionals
let maximumNumber = parseInt(prompt("Enter the maximum number:"));
while (!maximumNumber) {
    maximumNumber = parseInt(prompt("Please enter a valid number:"));
}

const targetNumber = Math.floor(Math.random() * maximumNumber) + 1;

let guess = parseInt(prompt('Enter a guess:'));
let attempts = 1;

while (parseInt(guess) !== targetNumber){
    if (guess === "quit") break;
    attempts++;
    if (guess > targetNumber){
        guess = prompt('Too high! Enter another guess:');
    } else {
        guess = prompt('Too low! Enter another guess:');
    }
}

if (guess === "quit"){
    console.log("Ok quitting game. See you later!")
} else {
    console.log(`Correct! You guessed ${guess} and the target number was ${targetNumber}. It took you ${attempts} guesses.`);
}


//Know issues:
//Doesn't use correct grammer if you only guess 1 time
//Isn't checking for a valid number (integer) during guesses