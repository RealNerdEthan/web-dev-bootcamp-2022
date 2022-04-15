//Append Child---------------------------------------------------------------
//We are creating a new image with a source, but it's not on the page yet
const newImage = document.createElement("img");
newImage.src = "https://i.imgur.com/Gz7nBcv.jpg";

//Now we'll append the image to the body as a child
document.body.appendChild(newImage);

//Now lets apply a class so css will have an effect
newImage.classList.add("square");

//We'll combine a few things we've leanred
const newH3 = document.createElement("h3");
newH3.innerText = "I am a new H3!"
document.body.appendChild(newH3);

//Append---------------------------------------------------------------------
const p = document.querySelector("p");
p.append("I can be a full sentance!", "And I can be a second added Element!");

//Prepend--------------------------------------------------------------------
const newBold = document.createElement("b");
newBold.innerText = "Hello!";
p.prepend(newBold);

//insertAdjacentElement------------------------------------------------------
const h2 = document.createElement("h2");
h2.innerText = "I am insertAdjacentElement";

const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", h2);

//After----------------------------------------------------------------------
const h4 = document.createElement("h4");
h4.innerText = "I am an 'after' H4";

h2.after(h4);