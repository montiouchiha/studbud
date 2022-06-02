var pomomins = 25;
var pomosecs = 00;
var appendPomomins = document.getElementById("pomomins");
var appendPomosecs = document.getElementById("pomosecs");
var buttonPomostart = document.getElementById("pomoeditbutton");
var interval;

function startPomotimer(){
    mins--;
}

buttonStart.onclick = function(){
    interval = setInterval(startPomotimer);
}

