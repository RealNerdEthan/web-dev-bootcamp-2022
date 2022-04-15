//Doing this style changes will add them in-line in the HTML

//Select the h1 Element and save it to avariable
const h1 = document.querySelector("h1");

//Set a style for the h1 using JavaScript
h1.style.color = "green";

//Another example of setting styles. Remember the css needs to be written inside ""
h1.style.border = "2px solid gold";

//Lets do some link style changes
const allLinks = document.querySelectorAll("a");

for(let link of allLinks){
    link.style.color = "brown";
    link.style.textDecorationColor = "gold";
}

//If we want to get the acrtual computed value of an Element we can do this
window.getComputedStyle(h1).color;
//Which will return the color value of the h1 variable we decalred earlier