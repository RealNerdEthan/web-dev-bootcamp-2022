//An example of scope within a conditional.
let radius = 8;
if (radius > 0){
    const PI = 3.14159;
    let message = "Hello!";
}

//This will print the radius variable
console.log(radius);

//This will print undefined becuase the PI variable is inside the radius 
//conditional statment, called a Block
console.log(PI);