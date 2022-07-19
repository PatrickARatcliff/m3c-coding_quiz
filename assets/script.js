//universal variables
var timerEl = document.getElementById('timer');
var quizEl = document.getElementById('quizBox');

var score = 0;
var timeLeft = 75;

//create and style message onload
var startMessage = document.createElement("h2");
startMessage.textContent = "Coding Quiz Challenge";
startMessage.setAttribute("style", "text-align: center");
var startText = document.createElement("p");
startText.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startText.setAttribute("style", "text-align: center");
//create and style highscore name submit button
var startQuizBtn = document.createElement("button");
startQuizBtn.innerHTML = "Start Quiz";
startQuizBtn.type = "submit";
startQuizBtn.name = "formBtn";
startQuizBtn.setAttribute("style", "background-color: purple", "text-color: white", "corner-radius: 5px");

//create and style form element when time=0
var nameForm = document.createElement("form");
nameForm.setAttribute("method", "post");
nameForm.setAttribute("action", "submit.php");
//create and style message when time is out
var allDoneMessage = document.createElement("h2");
allDoneMessage.textContent = "All Done!";
var scoreMessage = document.createElement("p");
//scoreMessage.textContent = "Your score is: " + score;
//create and style input field
var inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("name", "userName");
inputName.setAttribute("placeholder", "Enter Your Initials");
inputName.setAttribute("id", "userName");
//create and style highscore name submit button
var submitNameBtn = document.createElement("button");
submitNameBtn.innerHTML = "Submit";
submitNameBtn.type = "submit";
submitNameBtn.name = "formBtn";
submitNameBtn.setAttribute("style", "margin: 5px")

//card displayed on page load
function displayStart () {
  quizEl.appendChild(startMessage);
  quizEl.appendChild(startText);
  quizEl.appendChild(startQuizBtn);
  quizEl.setAttribute("style", "text-align: center");
  startQuizBtn.addEventListener("click", function (event) {
    event.preventDefault();
    countdown();
    displayQuiz1();
  });
};
//create and style message quiz

//QUESTION 1
//question 1 variables, content, styling
var question1 = document.createElement("h2");
question1.textContent = "Commonly used data types DO NOT include:";
question1.setAttribute("style", "text-align: left");
var answer101Btn = document.createElement("button");
answer101Btn.innerHTML = "1. strings";
answer101Btn.type = "answer";
answer101Btn.name = "answer101";
var answer102Btn = document.createElement("button");
answer102Btn.innerHTML = "2. booleans";
answer102Btn.type = "answer";
answer102Btn.name = "answer102";
var answer103Btn = document.createElement("button");
answer103Btn.innerHTML = "3. alerts";
answer103Btn.type = "answer";
answer103Btn.name = "answer103";
var answer104Btn = document.createElement("button");
answer104Btn.innerHTML = "4. numbers";
answer104Btn.type = "answer";
answer104Btn.name = "answer104";

//card displayed for question 1
function displayQuiz1 () {
  quizEl.replaceChildren();
  quizEl.setAttribute("style", "disply: block")
  quizEl.appendChild(question1);
  quizEl.appendChild(answer101Btn);
  quizEl.appendChild(answer102Btn);
  quizEl.appendChild(answer103Btn);
  quizEl.appendChild(answer104Btn);
  quizEl.setAttribute("style", "text-align: left");

  answer101Btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target === answer101Btn) {
      timeLeft = timeLeft - 10;
      displayQuiz2(); 
    }; 
});
  answer102Btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target === answer102Btn) {
      timeLeft = timeLeft - 10;
      displayQuiz2(); 
    }; 
});
  answer103Btn.addEventListener("click", function (event) {
      event.preventDefault();
      if (event.target === answer103Btn) {
        score = score + 10;
        displayQuiz2(); 
      }; 
  });
  answer104Btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target === answer104Btn) {
      timeLeft = timeLeft - 10;
      displayQuiz2(); 
    }; 
});
};

//QUESTION 2
//question 2 variables, content, styling
var question2 = document.createElement("h2");
question2.textContent = "Arrays in JavaScript can be used to store ___.";
question2.setAttribute("style", "text-align: left");
var answer201Btn = document.createElement("button");
answer201Btn.innerHTML = "1. numbers and strings";
answer201Btn.type = "answer";
answer201Btn.name = "answer201";
var answer202Btn = document.createElement("button");
answer202Btn.innerHTML = "2. other arrays";
answer202Btn.type = "answer";
answer202Btn.name = "answer202";
var answer203Btn = document.createElement("button");
answer203Btn.innerHTML = "3. booleans";
answer203Btn.type = "answer";
answer203Btn.name = "answer203";
var answer204Btn = document.createElement("button");
answer204Btn.innerHTML = "4. all of the above";
answer204Btn.type = "answer";
answer204Btn.name = "answer204";
//card displayed for question 2
//
function displayQuiz2 () {
  quizEl.replaceChildren();
  quizEl.setAttribute("style", "disply: block")
  quizEl.appendChild(question2);
  quizEl.appendChild(answer201Btn);
  quizEl.appendChild(answer202Btn);
  quizEl.appendChild(answer203Btn);
  quizEl.appendChild(answer204Btn);
  quizEl.setAttribute("style", "text-align: left");

  answer201Btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target === answer201Btn) {
      timeLeft = timeLeft - 10;
      displayQuiz3(); 
    }; 
});
  answer202Btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target === answer202Btn) {
      score = score + 10;
      displayQuiz3(); 
    }; 
});
  answer203Btn.addEventListener("click", function (event) {
      event.preventDefault();
      if (event.target === answer203Btn) {
        timeLeft = timeLeft - 10;
        displayQuiz3(); 
      }; 
  });
  answer204Btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target === answer204Btn) {
      timeLeft = timeLeft - 10;
      displayQuiz3(); 
    }; 
});
};

//QUESTION 3
//question 3 variables, content, styling
var question3 = document.createElement("h2");
question3.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
question3.setAttribute("style", "text-align: left");
var answer301Btn = document.createElement("button");
answer301Btn.innerHTML = "1. JavaScript";
answer301Btn.type = "answer";
answer301Btn.name = "answer301";
var answer302Btn = document.createElement("button");
answer302Btn.innerHTML = "2. terminal/bash";
answer302Btn.type = "answer";
answer302Btn.name = "answer302";
var answer303Btn = document.createElement("button");
answer303Btn.innerHTML = "3. for loops";
answer303Btn.type = "answer";
answer303Btn.name = "answer303";
var answer304Btn = document.createElement("button");
answer304Btn.innerHTML = "4. console.log";
answer304Btn.type = "answer";
answer304Btn.name = "answer304";
//card displayed for question 3
//
function displayQuiz3 () {
  quizEl.replaceChildren();
  quizEl.setAttribute("style", "disply: block")
  quizEl.appendChild(question3);
  quizEl.appendChild(answer301Btn);
  quizEl.appendChild(answer302Btn);
  quizEl.appendChild(answer303Btn);
  quizEl.appendChild(answer304Btn);
  quizEl.setAttribute("style", "text-align: left");

  answer301Btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target === answer301Btn) {
      timeLeft = timeLeft - 10;
      scoreMessage.textContent = "Your score is: " + score;
      displayAllDone(); 
    }; 
});
  answer302Btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target === answer302Btn) {
      timeLeft = timeLeft - 10;
      scoreMessage.textContent = "Your score is: " + score;
      displayAllDone(); 
    }; 
});
  answer303Btn.addEventListener("click", function (event) {
      event.preventDefault();
      if (event.target === answer303Btn) {
        timeLeft = timeLeft - 10;
        scoreMessage.textContent = "Your score is: " + score;
        displayAllDone();  
      }; 
  });
  answer304Btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target === answer304Btn) {
      score = score + 10;
      scoreMessage.textContent = "Your score is: " + score;
      displayAllDone(); 
    }; 
});
};

//timer and run funtion at time=0
function countdown() {
  
  var timeInterval = setInterval(function () {

    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if(timeLeft <= 0) {
      clearInterval(timeInterval);
      displayAllDone();
    }
  }, 1000);
}
//card displayed when time=0
function displayAllDone() {
  timeLeft = 0
  quizEl.replaceChildren();
  quizEl.appendChild(allDoneMessage);
  quizEl.appendChild(scoreMessage);
  quizEl.appendChild(nameForm);
  nameForm.appendChild(inputName);
  inputName.after(submitNameBtn);
  quizEl.setAttribute("style", "text-align: left");

  submitNameBtn.addEventListener("click", function () {
    //console.log(userName);
    //console.log(score);
    var userInfoObj = [
      inputName.value.trim(),
      score
    ];
    var userInfo = JSON.parse(localStorage.getItem("userInfo") || `[]`);
    userInfo.push(userInfoObj);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.href = "./assets/highscores.html";
  })
}; 

displayStart ();
