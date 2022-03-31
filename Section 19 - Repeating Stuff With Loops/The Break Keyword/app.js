//Break keyword loop example
let targetNumber = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (true) {
    guess = Math.floor(Math.random() * 10);
    if (guess === targetNumber){
        console.log(`Correct! Guessed: ${guess} & target was ${targetNumber}`);
        break;
    } else {
        console.log(`Guessed ${guess}...incorrect!`);
    }
}

