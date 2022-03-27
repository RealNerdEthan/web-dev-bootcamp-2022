//Logical AND &&
// const password = prompt("Enter your password:");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("Password accepted!")
// } else {
//     console.log("Password must be 6+ characters long and cannot include a space. Try again.")
// }

//---------------------------------------------------------------------------------------------------

//Logical OR ||
// 0-5 $0
// 6-10 $10
// 11-65 $20
// 66+ $10

// const age = 37;

// if (age >= 0 && age < 6) {
//     console.log("Price: $0");
// } else if (age >= 6 && age < 11 || age >= 66 && age < 125) {
//     console.log("Price: $10");
// } else if (age >= 11 && age < 66) {
//     console.log("Price: $20");
// } else {
//     console.log("Hmm...are you a robot?");
// }

//---------------------------------------------------------------------------------------------------

//Logical NOT !
const firstName = prompt("Enter your first name:");

if (!firstName) {
    console.log("Please refresh and try again.");
} else {
    console.log(`Nice to meet you ${firstName}!`);
}