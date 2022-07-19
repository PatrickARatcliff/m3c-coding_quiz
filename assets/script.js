//universal variables
var timerEl = document.getElementById('timer');
var quizEl = document.getElementById('quizBox');

var score = 0;
var timeLeft = 15;

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
scoreMessage.textContent = "Your score is: " + score;
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

//timer and run funtion at time=0
function countdown() {
  
  var timeInterval = setInterval(function () {

    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if(timeLeft === 0) {
      clearInterval(timeInterval);
      displayAllDone();
    }
  }, 1000);
}
//card displayed when time=0
function displayAllDone() {
  quizEl.replaceChildren();
  quizEl.appendChild(allDoneMessage);
  quizEl.appendChild(scoreMessage);
  quizEl.appendChild(nameForm);
  nameForm.appendChild(inputName);
  inputName.after(submitNameBtn);
  quizEl.setAttribute("style", "text-align: left");

  submitNameBtn.addEventListener("click", function (event) {
    event.preventDefault();
    //console.log(userName);
    //console.log(score);
    var userInfoObj = [
      inputName.value.trim(),
      score
    ];
    var userInfo = JSON.parse(localStorage.getItem("userInfo") || `[]`);
    userInfo.push(userInfoObj);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.href = "./assets/highscores.html" 
  })
};


//create and style message quiz
//question 1 variables, content, styling
var question1 = document.createElement("h2");
question1.textContent = "Commonly used dat types DO NOT include:";
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
  answer103Btn.addEventListener("click", function (event) {
      event.preventDefault();
      if (event.target === answer103Btn) {
        score = score + 10;
        timeLeft = timeLeft - 10;
        //displayAllDone(); 
      }
    });
};

displayStart ();
