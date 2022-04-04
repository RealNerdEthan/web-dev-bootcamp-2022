function add(x, y){
    let sum = x + y;
    return sum;
    //Anything after return will never run
}

//Now we can run this function and save it to a new variable
let addedSum = add(5 + 4);
//Then addedSum will equal 9

//This is an example of using a return with a conditional
function subtract(x, y){
    if(typeof x !== "number" || typeof y !== "number"){
        return false;
    }
    //We don't need an else here because the only way we make it to these lines
    //is that the if statment never ran
    let sum = x - y;
    return sum;
}