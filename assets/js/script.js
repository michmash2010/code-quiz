






var timerEl = document.querySelector("#timer");
var timer = 10
var countdown = function() {
    //console.log(timer);
    timerEl.textContent = "Time: " + timer;
    timer--;
    if(timer === 0){
        timerEl.textContent = "Time: 00" ;
        clearInterval(startTimer);
    };
};

var startTimer = setInterval(countdown, 1000);


