const cats = ["Ella", "Tommy", "Buddy"];
const dogs = ["Daisy", "Piston"];

//We are spreading the two arrays into a new array
const allPets = [...cats, ...dogs];
console.log(allPets);