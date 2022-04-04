//An example of nesting functions, where the inner function has access to the
//hero variable in the outter function.
function outer(){
    let hero = "Black Panther";

    function inner(){
        let cryForHelp = `${hero}, please save me!`;
        console.log(cryForHelp);
    }
    inner();
}