//Select all images using the tagName and print them to the console
const allImages = document.getElementsByTagName("img");

for(let img of allImages){
    console.log(img.src);
    //we could set all images to be the same by:
    //img.src = https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80;
}

//Change image sources by selecting all Elements with a className of "square"
const squareImages = document.getElementsByClassName("square");

for(let img of squareImages){
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}