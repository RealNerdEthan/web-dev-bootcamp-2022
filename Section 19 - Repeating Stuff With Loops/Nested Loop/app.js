//Example of a nested loop
let string = "LOL"
for (let i = 0; i <= 4; i++){
    console.log("Outer", i);
    for (let j = 0; j < string.length; j++) {
        console.log("   Inner:", string[j]);
    }
}

//Nested Arrays seating chart example
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