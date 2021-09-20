var questionEl = document.querySelector("#question");
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");


var questionArray = 
[
    {
        question: "Coding Quiz Challenge",
        choices: ["Start Quiz"],
        answer: 1
    },
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

var questionHandler = function() {
    // Add the question to the question block
    for (i = 1; i < questionArray.length; i++) {
        questionEl.textContent = questionArray[i].question;
        choice1El.textContent = questionArray[i].choices[0];
        choice2El.textContent = questionArray[i].choices[1];
        choice3El.textContent = questionArray[i].choices[2];
        choice4El.textContent = questionArray[i].choices[3];
        //setTimeout(function(){ "Hello!" }, 3000);
    }
};

questionHandler();

// Examples
console.log(questionArray[0]);  // logs the whole contents of the array at that index
console.log(questionArray[2].answer);  // logs just the answer #

// get the element that contains the question text, and set it to a question
var questionEl = document.querySelector("#question");


// get the element that contains the first choice text, and set it to that choice
    // choice1El = document.querySelector("#choice1");
    // choice1El.textContent = questionArray[2].choices[0];

// Pseudocode for the quiz sequence of events:
// User clicks a start button on a welcome page (does this mean the buttons need to be dynamically generated?)

// Timer starts counting down
// First question and answer choices display

// User clicks an answer choice button
// Event listeners pick up the click and compare the choice to the answer.
// If choice === answer, display "Correct!" 
// else display "Incorrect." and subtract 10 seconds from the timer.
// After a 3 second delay, display the next question

// When all questions are complete, or timer runs out, display the score form page.



var timerEl = document.querySelector("#timer");
var timer = 60;
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
