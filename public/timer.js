var hours = 00;
var mins = 00;
var secs = 00;
var appendHours = document.getElementById("hours");
var appendMins = document.getElementById("mins");
var appendSecs = document.getElementById("secs");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval;

function startTimer(){
    secs++;
    if (secs <= 9){
        appendSecs.innerHTML = "0" + secs;
    }
    if (secs > 9){
        appendSecs.innerHTML = secs;
    }
    if (secs > 59){
        mins++;
        appendMins.innerHTML = "0" + mins;
        secs = 0;
        appendSecs.innerHTML = "0" + 0;
    }
    if (mins > 9) {
        appendMins.innerHTML = mins;
    }
    if (mins > 59){
        hours++;
        appendHours.innerHTML = "0" + hours;
        mins = 0;
        appendMins.innerHTML = "0" + 0;
    }
}

buttonStart.onclick = function(){
    interval = setInterval(startTimer, +1000);
};

buttonStop.onclick = function(){
   clearInterval(interval);
};

buttonReset.onclick = function (){
    clearInterval(interval);
    secs = "00";
    mins = "00";
    hours = "00";
    appendSecs.innerHTML = secs;
    appendMins.innerHTML = mins;
};