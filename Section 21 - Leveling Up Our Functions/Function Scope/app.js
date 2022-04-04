//In the example below, totalEggs is only accessible within the function
function collectEggs(){
    let totalEggs = 6;
    console.log(totalEggs);
}

//An example showing that console.log is referencing the bird variable that's
//inside the function becuase they are more closely connected due to both
//being inside the same function. This is overriding the global variable bird.
let bird = "Scarlet Macaw";
function birdWatch(){
    let bird = "Great Blue Heron";
    console.log(bird);
}

birdWatch();