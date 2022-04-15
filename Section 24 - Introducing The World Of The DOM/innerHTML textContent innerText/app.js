//innerText
//This will only show what's actually shown on the page at the moment. If an Element is hidden, innerText will not capture it
console.log(document.querySelector('p').innerText);

//textContent
//Notice the spacing in the console which is from the actual HTML markup because textContent returns every Element, hidden or not
console.log(document.querySelector('p').textContent);

//Let's change all link's displayed text on the page
//Note that they will still retain their own href becuase we are only accessing the innerText property
const allLinks = document.querySelectorAll('a');

for(let link of allLinks){
    link.innerText = "I am a link!";
}

//innerHTML retrieves the full contents (including the tag names) of the Element between the opening and closing tags
//We can overwrite an Element's HTML. Example will be the first h1 of the page
document.querySelector("h1").innerHTML = "<i>Silkie Chickens</i>";