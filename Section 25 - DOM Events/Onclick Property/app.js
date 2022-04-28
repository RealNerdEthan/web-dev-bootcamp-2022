const btn = document.querySelector("#v2");

btn.onclick = function(){
    console.log("You clicked me!");
}

function scream(){
    console.log("AHHHH!");
    console.log("I wasn't expecting that!");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = function(){
    alert("You clicked the h1!");
}