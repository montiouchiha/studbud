//Timer
var timerHours = 00;
var timerMins = 00;
var timerSecs = 00;
var appendTimerHours = document.getElementById("hours");
var appendTimerMins = document.getElementById("mins");
var appendTimerSecs = document.getElementById("secs");
var buttonTimerStart = document.getElementById("button-start");
var buttonTimerStop = document.getElementById("button-stop");
var buttonTimerReset = document.getElementById("button-reset");
var timerInterval;
function startTimerTimer() {
    timerSecs++;
    if (timerSecs <= 9) appendTimerSecs.innerHTML = "0" + timerSecs;
    if (timerSecs > 9) appendTimerSecs.innerHTML = timerSecs;
    if (timerSecs > 59) {
        timerMins++;
        appendTimerMins.innerHTML = "0" + timerMins;
        timerSecs = 0;
        appendTimerSecs.innerHTML = "00";
    }
    if (timerMins > 9) appendMins.innerHTML = timerMins;
    if (timerMins > 59) {
        timerHours++;
        appendTimerHours.innerHTML = "0" + timerHours;
        timerMins = 0;
        appendTimerMins.innerHTML = "00";
    }
}
buttonTimerStart.onclick = function() {
    timerInterval = setInterval(startTimerTimer, 1000);
};
buttonTimerStop.onclick = function() {
    clearInterval(timerInterval);
};
buttonTimerReset.onclick = function() {
    clearInterval(timerInterval);
    timerSecs = "00";
    timerMins = "00";
    timerHours = "00";
    appendTimerSecs.innerHTML = timerSecs;
    appendTimerMins.innerHTML = timerMins;
};

//# sourceMappingURL=index.f3bd186e.js.map
