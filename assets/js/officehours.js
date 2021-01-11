var timer = setInterval( function(){
    if(quizStarted){
      document.querySelector("#timeLeft").textContent = time
      time--
      if(time === 0){
        endQuiz()
      }
    }
  }, 1000 )


  var startFunction = function(){
    //hide the button and the h1
    document.querySelector("#header1").style.display = "none"
    document.querySelector("#startBtn").style.visibility = "hidden";
    //run the nextQuestion function
    nextQuestion()
    quizStarted = true;
  }


  document.querySelector("#startBtn").addEventListener("click", startFunction )

  var nextQuestion = function(){
    questionNumber += 1;
    //hide the message and nextQuestionBtn
    messageElem.textContent = "";
    nextQuestionBtn.style.visibility = "hidden";
    console.log("nextQuestion just ran.")
    //grab the current question from the questionArray
    var questionString = questionArray[questionNumber].question
    //make an h3
    var newQuestion = document.createElement("h3")
    newQuestion.textContent = questionString;
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