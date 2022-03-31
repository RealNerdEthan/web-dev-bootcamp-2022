const testScores = {
    jim :80,
    dwight: 67,
    pam: 99,
    andy: 70,
    kevin: 54,
    angela: 98,
    meridith: 60,
    creed: 13,
    michael: 68,
    stanley: 71,
    phyllis: 84,
    erin: 58
}

//Using for...in to iderate over a literal object and print out what each person scored
for (let person in testScores){
    console.log(`${person} scored: ${testScores[person]}`);
}

//Another way to do this ^ is to use Object.keys(testScores) and Object.values(testScores)


//Now we're going to sum up the vales and get an average using Object.values() which allows us to use a for...of loop
let total = 0;
let scores = Object.values(testScores);
for (let score of scores){
    total += score;
}
console.log(`The class average score is: ${total / scores.length}`);