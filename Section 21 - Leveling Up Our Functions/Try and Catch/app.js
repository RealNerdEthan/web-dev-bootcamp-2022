//An example of code we know will have an error
try {
    hello.toUpperCase()
} catch {
    console.log("Opps! Looks like I ran into an error.");
}

console.log("If you see this message, the code still ran after an error was encountered!");

//Another example, using a function
function yell(message){
    try {
        console.log(message.toUpperCase().repeat(3));
    } catch (e) {
        //We'll print out the error message by "catch"ing it with e and using console.log(e)
        console.log(e);
        console.log("Please enter a string next time!");
    }
}