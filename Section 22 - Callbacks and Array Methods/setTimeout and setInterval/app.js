//setTimeout-----------------------------------------------

//runs and prints 1st
console.log("Hello!")

//This will run just one time, and will print 3rd
setTimeout(function(){
    console.log("I waited 3 seconds...");
}, 3000)

//this runs 3rd but will print out 2nd because setTimeout is on a 3 second delay
console.log("Last coded console.log message!")


//setInterval-----------------------------------------------
//Using an arrow function this time, doesn't matter but is shorter
//Will run forever every two seconds
//We set this to a variable so we can call clearInterval(id)
const id = setInterval(() =>{
    console.log(Math.random());
}, 2000)