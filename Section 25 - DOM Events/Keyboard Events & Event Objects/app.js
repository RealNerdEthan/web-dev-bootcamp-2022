document.querySelector('button').addEventListener('click', (event) => {
    console.log(event);
})

const input = document.querySelector('input');
input.addEventListener('keydown', (event) => {
    // console.log("Key Down")
    console.log(event);
    console.log(`Key: ${event.key}`);
    console.log(`Code: ${event.code}`);
})

//We can also look at the window for key presses and not just an input
// window.addEventListener('keydown', (event) => {
//     console.log(event.code);
// })