//removeChild------------------------------------------------------------
const firstLi = document.querySelector("li");
const ul = firstLi.parentElement;

//Now we can pass in the child we want to remove by selecting the parent
ul.removeChild(firstLi);

//remove-----------------------------------------------------------------
//Remove is newer and allows you to directly select the Element you want to rmeove instead of needing to select the parent
//first and then defining the child Element to be removed
const image = document.querySelector("img");
image.remove();