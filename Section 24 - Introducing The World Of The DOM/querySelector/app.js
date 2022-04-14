//querySelector uses CSS selector syntax such as 'p', #, and 

//This will just give us the first match
console.log(document.querySelector('p'));

//Select by ID
console.log(document.querySelector('#banner'));

//Select by class
console.log(document.querySelector('.square'));

//You can also chain on other CSS style selectors
console.log(document.querySelector('img:nth-of-type(2)'));

//We can add multiple selectors. In this example we are selecting by type (anchor tag) and attribute (title="java")
console.log(document.querySelector('a[title="java"]'));

//And an example of querySelectorAll, this will create a collection of all paragraphs
console.log(document.querySelectorAll('p'));

//Here's an example of nested selectors. We'll create a colletion of all anchor tags inside a paragraph tag.
console.log(document.querySelectorAll('p a'));

//Lets use querySelectorAll to print out all links on the page to the console
const links = document.querySelectorAll('p a');

for(let link of links){
    console.log(link.href);
}