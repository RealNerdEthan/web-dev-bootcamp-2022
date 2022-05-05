const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

form.addEventListener('submit', (event) => {
    //Stop default behavior
    event.preventDefault();
    //Extract the value from the input
    const catName = input.value;
    //Create a new LI
    const newLI = document.createElement('LI');
    //Add the value to the new LI
    newLI.innerText = catName;
    //Append the LI to the UL
    list.append(newLI);
    //Clear the input value
    input.value = "";
})