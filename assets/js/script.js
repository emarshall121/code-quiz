// All Variables

    // Variables related to time
    var timeLeft = 75;
    var timer;
    var timeCountdown = document.querySelector('#timeLeft');
    var timeLeftEl = document.querySelector('#time');
    
    // Questions
    var displayedQuestionArray = 0;
    var questionArray = [
        {
            question: 'Arrays in JavaScript can be used to store _____.',
            choiceA: 'numbers and strings',
            choiceB: 'other arrays',
            choiceC: 'booleans',
            choiceD: 'all of the above',
            correct: 'D'
        },
        {
            question: 'String Values must be enclosed within ____ when being assigned to variables.',
            choiceA: 'commas',
            choiceB: 'curly brackets',
            choiceC: 'quotes',
            choiceD: 'parenthesis',
            correctAnswer: 'C'
        },
        {
            question: 'The condition in an if/else statement is enclosed with ____.',
            choiceA: 'quotes',
            choiceB: 'curly brackets',
            choiceC: 'parenthesis',
            choiceD: 'square brackets',
            correctAnswer: 'B'
        },
        {
            question: 'Commonly used data types DO NOT include:',
            choiceA: 'strings',
            choiceB: 'booleans',
            choiceC: 'alerts',
            choiceD: 'numbers',
            correctAnswer: 'C'
        },
        {
            question: 'A very useful tool for users during development and debugging for printing content to the debugger is:',
            choiceA: 'JavaScript',
            choiceB: 'terminal/bash',
            choiceC: 'for loops',
            choiceD: 'console log',
            correctAnswer: 'D'                       
        },
    ]
    var questionNumber = -1;

    // Variables for various displays within the game
    var openingScreen = document.querySelector('#opening-screen');
    var questionsDisplay = document.querySelector('#questions-display');
    var quizFinished = document.querySelector('#quiz-finished');
    var highScores = document.querySelector('#high-scores');

    // Buttons
    var startQuizButton = document.querySelector('#start-quiz');
    var nextQuestionBtn = document.querySelector('nextQuestionBtn');
   

// Opening Screen
function openingDisplay() {
    // show Opening Display and hide others
    questionsDisplay.setAttribute("class", "hide");
    quizFinished.setAttribute("class", "hide");
    highScores.setAttribute("class", "hide");
}

// Function to Start the Quiz
function startQuiz() {
    // Hide all displays except for Questions Display
    openingScreen.setAttribute('class', 'hide');
    quizFinished.setAttribute("class", "hide");
    highScores.setAttribute("class", "hide");
    questionsDisplay.setAttribute('class', 'show');

    // Start the timer
    timer=setInterval(quizTimer, 1000);
    timeCountdown.textContent=timeLeft;

    //run the nextQuestion function
    nextQuestion()
}

var nextQuestion = function(){
    questionNumber += 1;
    // //hide the message and nextQuestionBtn
    messageElem.textContent = "";
    nextQuestionBtn.style.visibility = "hidden";
    console.log("nextQuestion just ran.")
    //grab the current question from the questionArray
    var questionString = questionArray[questionNumber].question

    //make an h3
    var newQuestion = document.createElement("h3")
    newQuestion.textContent = questionString;
    newQuestion.className='question-item';

    //put it in #questionDiv
    questionDiv.appendChild( newQuestion );
    var choiceA = questionArray[questionNumber].choiceA;
    var choiceB = questionArray[questionNumber].choiceB;
    var choiceC = questionArray[questionNumber].choiceC;
    var choiceD = questionArray[questionNumber].choiceD;
    var buttonA = document.createElement("button")
    buttonA.textContent = choiceA
    buttonA.addEventListener("click", function(){
      console.log("You clicked answer A")
      submitAnswer("A")
    })
    choicesDiv.appendChild(buttonA)
    var buttonB = document.createElement("button")
    buttonB.textContent = choiceB
    buttonB.addEventListener("click", function(){
      console.log("You clicked answer B")
      submitAnswer("B")
    })
    choicesDiv.appendChild(buttonB)
    var buttonC = document.createElement("button")
    buttonC.textContent = choiceC
    buttonC.addEventListener("click", function(){
      console.log("You clicked answer C")
      submitAnswer("C")
    })
    choicesDiv.appendChild(buttonC)
    var buttonD = document.createElement("button")
    buttonD.textContent = choiceD
    buttonD.addEventListener("click", function(){
      console.log("You clicked answer D")
      submitAnswer("D")
    })
    choicesDiv.appendChild(buttonD)
}

  var submitAnswer = function( string ){
    if( string === questionArray[questionNumber].correctAnswer ){ //answer selected is correct.
      console.log(`correct answer!`)
      messageElem.textContent = `${string} was correct!`
    } else {  //user clicked incorrect answer
      console.log(`nope ${string} was wrong.`)
      messageElem.textContent = `${string} was wrong!`
    }
    //clear out questionDiv and choicesDiv
    questionDiv.innerHTML = ""
    choicesDiv.innerHTML = ""
    if( questionNumber < questionArray.length - 1 ){ //still more questions to show
      nextQuestionBtn.style.visibility = "visible";
    } else { //last question has been answered.
      endQuiz()
    }
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
    
}

// Ending the quiz
function endQuiz(){
    clearInterval(timer);
}



// Player clicks the start button to begin the quiz
startQuizButton.onclick = startQuiz;

openingDisplay();
