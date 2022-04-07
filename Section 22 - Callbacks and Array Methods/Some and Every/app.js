//Some---------------------------------------------------------------
const someWords = ["dog", "jello", "log", "cupcake", "bag", "wag"]

//Are there words longer than 4 characters?
someWords.some(someWords => {
    return someWords.length > 4;
});
//true

//Do any words start with "z"?
someWords.some(someWords => {
    return someWords[0] === "z";
});
//False

//Do any words contain "cake"?
someWords.some(someWords => {
    return someWords.includes("cake");
});
//true


//Every---------------------------------------------------------------
const words = ["dog", "dig", "log", "bag", "wag"];

words.every(word => {
    return word.length === 3;
});
//true

words.every(word => {
    return word[0] === "d";
});
//false

words.every(word => {
    let lastLetter = word[word.length - 1];
    return lastLetter === "g";
});
//true