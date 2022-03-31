const subreddits = ["books", "lego", "chickens", "harrypotter", "funny", "pics", "dnd", "startrek"];

//Print out values using a for loop
for (let i = 0; i < subreddits.length; i++){
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

//Rewrite the above for loop using for...of
for (let sub of subreddits){
    console.log(`Visit reddit.com/r/${sub}`);
}


//Example of a nested for loop
let seatingChart = [
    ["Dwight", "Jim", "Pam"],
    ["Oscar", "Angela", "Kevin", "Sprinkles"],
    ["Andy", "Stanley", "Phyllis", "Creed"]
]

for (let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`Row: #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

//And now rewritten with for...of loop
for (let row of seatingChart){
    for (let student of row){
        console.log(student);
    }
}

//An example of iderating over another ideratable such as a string
for (let character of "hello world"){
    console.log(character);
}