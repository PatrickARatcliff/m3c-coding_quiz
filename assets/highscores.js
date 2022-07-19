//js for highscores page
//card display at load
var highScoresEl = document.getElementById("highScores");
var title = document.createElement("h2");
title.textContent = "Highscores";
title.setAttribute("style", "text-align: left");
//highscores page buttons style and content
var goBackBtn = document.createElement("button");
goBackBtn.innerHTML = "Go Back";
goBackBtn.type = "link";
goBackBtn.name = "goBack";
goBackBtn.setAttribute("style", "background-color: purple", "text-color: white", "corner-radius: 5px");
var clearBtn = document.createElement("button");
clearBtn.innerHTML = "Clear Highscores";
clearBtn.type = "clear";
clearBtn.name = "clearHS";
clearBtn.setAttribute("style", "background-color: purple", "text-color: white", "corner-radius: 5px");

var userInfoObj= [];
var userInfo = JSON.parse(localStorage.getItem("userInfo"));
userInfoObj.push(userInfo);

for (let index = 0; index < userInfoObj.length; index++) {
  var scoreLi = userInfoObj[index];
  for (let i = 0; i < scoreLi.length; i++) {
    var nameScore = scoreLi[i].join(" ");
    var list = document.createElement('ul');
    title.appendChild(list);
    var listItem = document.createElement('li');
    var li = nameScore;  
    listItem.appendChild(document.createTextNode(li));
    list.appendChild(listItem);
    };
};
/**var createList = (userInfoObj) => {
  for (var i = 0; i < userInfoObj.length; i++) {
    var list = document.createElement('ol');
    var listItem = document.createElement('li');
    var li = userInfoObj;  
    listItem.appendChild(document.createTextNode(li));
    list.appendChild(listItem);
    return list;
  };
};  
*/
/**var ol = createList(userInfoObj);
title.appendChild(ol);
title.setAttribute("style", "text-align: left");
*/
function highScores() {
  highScoresEl.appendChild(title);
  highScoresEl.appendChild(goBackBtn);
  highScoresEl.appendChild(clearBtn);
  goBackBtn.after(clearBtn);
  
    //console.log(userInfoObj);
  //for (var i = 0; i < userInfoObj.length; i++) {
      //console.log(userInfoObj);
      
      //title.appendChild(userInfoObj); 
  //};
    
};
  
goBackBtn.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "../index.html"    
});  

clearBtn.addEventListener("click", function (event) {
  event.preventDefault(); 
  localStorage.clear();
  listItem.replaceChildren();
});

highScores();

