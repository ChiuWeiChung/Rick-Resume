// --------------define variables-------------------------
var h1 = document.querySelector(".titledbar");
var numSquares = 6
var colors = colorArr(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var newColor = document.getElementById("newColor");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
// ---------------define function---------------------------------
colorDisplay.textContent="pickedColor"; 

hardBtn.addEventListener("click",function(){
    h1.style.backgroundColor="#232323"
    hardBtn.classList.add("selected1");
    // hardBtn.classList.remove("selected2");
    easyBtn.classList.remove("selected1");
    // easyBtn.classList.add("selected2");
    numSquares = 6 ;
    colors=colorArr(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for (var i =0; i<squares.length; i++) {
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
        }
});

easyBtn.addEventListener("click",function(){
    h1.style.backgroundColor="#232323"
    easyBtn.classList.add("selected1");
    // easyBtn.classList.remove("selected2");
    hardBtn.classList.remove("selected1");
    // hardBtn.classList.add("selected2");
    numSquares = 3;
    colors = colorArr(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
    for (var i = 0; i<squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor=colors[i];
        } else {
            squares[i].style.display="none";
        }
    }
});


newColor.addEventListener("click",function(){
    this.textContent="New Color";
    messageDisplay.textContent="";
    // giving new Array
        colors = colorArr(numSquares);
        // giving new color answer
        pickedColor = pickColor();
        colorDisplay.textContent=pickedColor; 
        h1.style.backgroundColor="#232323"
        // change squares background
        for (var i =0; i<squares.length; i++) {
            squares[i].style.backgroundColor=colors[i];
            }
});


for(var i=0 ; i<squares.length; i++) {
    // giving squares the color 
    squares[i].style.backgroundColor = colors[i]
    // select a color from squares
    squares[i].addEventListener("click", function(){
        // grab color from clicked squares
        var clickedColor = this.style.backgroundColor;
        // compare color
        if (clickedColor===pickedColor) {
            messageDisplay.textContent= "Correct! ";
            jackPot(clickedColor);
            h1.style.backgroundColor = clickedColor;
            newColor.textContent = "Play Again";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent= "Try again! ";
        }
    })
};

function jackPot() {
    for (var i = 0; i<colors.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor() {
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
};

function colorArr (num) {
    var arr = [];
    for (var i=0 ;i<num ; i++) {
        arr.push(callRandomColor());
    }
    return arr;
};

function callRandomColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
     return( "rgb(" + r + ", " + g + ", " + b + ")") ;
    };