//While loop example
let number = 0;
while (number < 10) {
    number++;
    console.log(number);
}

//A while loop that has a variable loop count
const secretPassword = "BabyHippo";
let guess = prompt("Enter the secret password:");

while(guess !== secretPassword){
    guess = prompt("Enter the secret password:");
}
console.log("Correct password entered. Welcome secret agent 007.")