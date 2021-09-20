var questions = 
[
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. strings","2. booleans","3. alerts","4. numbers"],
        answer: 3
    },
    {
        question: "The condition in an if / else statement is enclosed with ________.",
        choices: ["1. quotes","2. curly brackets","3. parenthesis","4. square brackets"],
        answer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript","2. Terminal/GitBash","3. a for loop","4. console.log"],
        answer: 4
    }
];


var timerEl = document.querySelector("#timer");
var timer = 60
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


