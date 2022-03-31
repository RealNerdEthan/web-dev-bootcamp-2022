const todoList = ["test1", "test2", "code", "game", "travel"];
let userCommand = prompt("Please enter a command:");

while (userCommand.toLowerCase() !== "quit"){
    if (userCommand.toLowerCase() === "new") {
        let newInput = prompt("Enter a new TODO item:");
        todoList.push(newInput);
        console.log(`Added ${newInput} to the list!`);
    } else if (userCommand.toLowerCase() === "list") {
        console.log("************");
        for(let i = 0; i < todoList.length; i++){
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("************");
    } else if (userCommand.toLowerCase() === "delete"){
        let deleteInput = parseInt(prompt("Enter index number of the item to be deleted:"));
        if (!Number.isNaN(deleteInput)) {
            let deletedItem = todoList[deleteInput];
            todoList.splice(deleteInput, 1);
            console.log(`Deleted ${deletedItem} from the list`);
        } else {
            console.log("Unknown index number");
        }
    }
    userCommand = prompt("Please enter a command:");
}
console.log("Ok, you've quit the program.");