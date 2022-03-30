let background = document.getElementById("background");
let btnl = document.getElementById("buttonleft");
let btnr = document.getElementById("buttonright");
let player = document.getElementById("player");
let x = 1;
let y = 250;
let speed = 1000;
let dir = 0;

background.style.backgroundColor = "red";
context = player.getContext("2d");
window.onload; {
    
function draw() {
    context.clearRect( 0, 0, 780, 475);
    
    //playerbeingdrawn
    context.beginPath();
    context.rect( x, y, 100, 100);
    context.lineWidth = 10;
    context.strokeStyle = "black";
    context.fillStyle = "yellow";
    context.stroke();
    context.fill();

    //movement of player right
    btnr.onmousedown = function(){
        dir = 1;
    }
    btnr.onmouseup = function(){
        dir = 0;
    }
    //movement of player left
    btnl.onmousedown = function(){
        dir = 3;
    }
    btnl.onmouseup = function(){
        dir = 0;
    }
    //moving right
    if(dir == 1) {
    x += 0.2;
    }
    //moving left
    if(dir == 3) {
        x -= 0.2;
    }
    //right-hand bound
    if (x >= 780){
        x = 0.15;
    }
    //left-hand bound
    if (x <= 0){
        x = 780;
    }
    
    window.requestAnimationFrame(draw);
}
//Frame Rate
window.setInterval(draw, 1000);
window.clearInterval(draw, 10);
}
//canvas size width="780" height="475"