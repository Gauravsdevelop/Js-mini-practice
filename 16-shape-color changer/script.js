let round = document.querySelector(".round");
let btn = document.querySelectorAll("button");
let shape = document.querySelector("#square");

//to change the Color
btn[0].addEventListener("click", changeColor);

function genarateColor(){
    let color = Math.floor(Math.random() * 255);
    return color;
}

function changeColor(){
    let newColor = `rgb(${genarateColor()}, ${genarateColor()}, ${genarateColor()})`;
    round.style.backgroundColor = newColor;
}

//to change the Shape
btn[1].addEventListener("click", changeShape);
let arr=["square", "round", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"];

function randomShape(){
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function changeShape(){
    let idname = randomShape();
    shape.id = idname;
}