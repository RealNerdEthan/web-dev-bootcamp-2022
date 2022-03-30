//For Loop over an array and count how many elements are inside it
const animals = ["lions", "tigers", "bears", "cat", "wolf", "zebra"];

for (let i = 0; i < animals.length; i++){
    console.log(i, animals[i]);
}

//The reverse of the for loop
for (let i = animals.length -1; i >= 0; i--){
    console.log(i, animals[i]);
}