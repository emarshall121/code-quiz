// Variables
var timeLeft = 75;
var timer;
var displayedQuestionArray = 0;

// Variables for various displays within the game
var openingScreen = document.querySelector('#opening-screen');
var questionsDisplay = document.querySelector('#questions-display');
var quizFinished = document.querySelector('#quiz-finished');
var highScores = document.querySelector('#high-scores');

var timeLeftEl = document.querySelector('#time');
var startQuizButton = document.querySelector('#start-quiz');
var timeCountdown = document.querySelector('#timeLeft');

// Opening Screen
function openingDisplay() {
    // show Opening Display and hide others
    questionsDisplay.setAttribute("class", "hide");
    quizFinished.setAttribute("class", "hide");
    highScores.setAttribute("class", "hide");
    if(startQuiz){
        return;
    }
}

// Function to Start the Quiz
function startQuiz() {
    debugger;
    // Hide all displays except for Questions Display
    openingScreen.setAttribute('class', 'hide');
    questionsDisplay.setAttribute('class', 'show');
    quizFinished.setAttribute("class", "hide");
    highScores.setAttribute("class", "hide");

    // Start the timer
    timer=setInterval(quizTimer, 1000);
    timeCountdown.textContent=timeLeft;

}

// Function to run the timer for the quiz
function quizTimer(){
    timeLeft--;
    timeCountdown.textContent=timeLeft; 
    if (timeLeft <= 0){
        endQuiz();
    }
}

// Function for retrieving a question
function getQuestion(){
    var displayedQuestion = questions[displayedQuestionArray];
}

// Ending the quiz
function endQuiz(){
    clearInterval(timer);
}



// Player clicks the start button to begin the quiz
startQuizButton.onclick = startQuiz;

openingDisplay();
