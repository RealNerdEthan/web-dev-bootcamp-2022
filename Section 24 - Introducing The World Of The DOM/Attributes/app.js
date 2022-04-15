//An example of setting an attribute, we will set the first anchor tag to go to a different URL
const firstLink = document.querySelector('a');

firstLink.setAttribute("href", "https://www.google.com");

//Now lets update the attribute of the second input on the page
const input = document.querySelector("input[type = 'text']");

//Now that that input is saved to a variable, we can access it's attributes. We'll change the type from "text" to "color"
input.setAttribute("type", "color");