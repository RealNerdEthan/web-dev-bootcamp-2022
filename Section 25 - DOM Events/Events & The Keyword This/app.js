const randomRGBColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

//This is a callback function that gets called by the addEventListener handeler
function colorize(){
    this.style.backgroundColor = randomRGBColor();
    this.style.color = randomRGBColor();
}

const buttons = document.querySelectorAll('button');
for(let button of buttons){
    button.addEventListener('click', colorize)
}

const paragraphs = document.querySelectorAll('p');
for(let paragraph of paragraphs){
    paragraph.addEventListener('click', colorize)
}