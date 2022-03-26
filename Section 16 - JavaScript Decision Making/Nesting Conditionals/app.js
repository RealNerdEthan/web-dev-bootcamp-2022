//Password must be 6+ characters
//Password cannot include space

const password = prompt("Please enter a new password:");

//Example of two seperate if else statments
// if (password.length < 6) {
//     console.log("Password must be 6+ characters long.");
// } else {
//     console.log("Password meets length requirements.");
// }

// if (password.indexOf(" ") === -1) {
//     console.log("Good job, no space in the password!");
// } else {
//     console.log("Password cannot contain any spaces!");
// }

//Example of same if else statmetns but now nested
if (password.length > 5) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid password!");
    } else {
        console.log("Password cannot contain any spaces!");
    }
} else {
    console.log("Password must be 6+ characters long.");
}